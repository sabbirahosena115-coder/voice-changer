import * as Tone from 'tone';
import { VoiceEffect } from '../types';

class AudioEngine {
  private mic: Tone.UserMedia | null = null;
  private player: Tone.Player | null = null;
  private micStream: MediaStream | null = null;

  // Effects chain nodes
  private pitchShift: Tone.PitchShift | null = null;
  private distortion: Tone.Distortion | null = null;
  private reverb: Tone.Reverb | null = null;
  private delay: Tone.FeedbackDelay | null = null;
  private bitCrusher: Tone.BitCrusher | null = null;
  private filter: Tone.Filter | null = null;
  private chorus: Tone.Chorus | null = null;
  private volumeNode: Tone.Volume | null = null;

  private isLiveMonitorsActive = false;
  private currentBlobUrl: string | null = null;
  private mediaRecorder: MediaRecorder | null = null;
  private recordedChunks: Blob[] = [];

  constructor() {
    // Lazy init on user action
  }

  public async initContext() {
    if (Tone.getContext().state !== 'running') {
      await Tone.start();
    }
  }

  public async setupChain(params: VoiceEffect['params']) {
    await this.initContext();
    this.disposeChain();

    const dest = Tone.Destination;

    // Create Volume
    this.volumeNode = new Tone.Volume(params.volume || 0);

    // Create Effects based on params
    const nodes: Tone.ToneAudioNode[] = [];

    // Pitch Shift
    if (params.pitch !== undefined && params.pitch !== 0) {
      this.pitchShift = new Tone.PitchShift({
        pitch: params.pitch,
        windowSize: 0.05,
        delayTime: 0.01,
        feedback: 0.1
      });
      nodes.push(this.pitchShift);
    }

    // Distortion
    if (params.distortion !== undefined && params.distortion > 0) {
      this.distortion = new Tone.Distortion(params.distortion);
      nodes.push(this.distortion);
    }

    // BitCrusher
    if (params.bitDepth !== undefined && params.bitDepth < 16) {
      this.bitCrusher = new Tone.BitCrusher(params.bitDepth);
      nodes.push(this.bitCrusher);
    }

    // Filter
    if (params.filterFreq !== undefined) {
      this.filter = new Tone.Filter({
        frequency: params.filterFreq,
        type: params.filterType || 'lowpass'
      });
      nodes.push(this.filter);
    }

    // Chorus
    if (params.chorusDepth !== undefined && params.chorusDepth > 0) {
      this.chorus = new Tone.Chorus({
        frequency: 4,
        delayTime: 2.5,
        depth: params.chorusDepth,
        wet: 0.5
      }).start();
      nodes.push(this.chorus);
    }

    // Delay
    if (params.delayTime !== undefined && params.delayTime > 0) {
      this.delay = new Tone.FeedbackDelay({
        delayTime: params.delayTime,
        feedback: params.delayFeedback || 0.3,
        wet: 0.4
      });
      nodes.push(this.delay);
    }

    // Reverb
    if (params.reverbWet !== undefined && params.reverbWet > 0) {
      this.reverb = new Tone.Reverb({
        decay: 2.5,
        wet: params.reverbWet
      });
      await this.reverb.generate();
      nodes.push(this.reverb);
    }

    nodes.push(this.volumeNode);

    return nodes;
  }

  public disposeChain() {
    if (this.pitchShift) { this.pitchShift.dispose(); this.pitchShift = null; }
    if (this.distortion) { this.distortion.dispose(); this.distortion = null; }
    if (this.reverb) { this.reverb.dispose(); this.reverb = null; }
    if (this.delay) { this.delay.dispose(); this.delay = null; }
    if (this.bitCrusher) { this.bitCrusher.dispose(); this.bitCrusher = null; }
    if (this.filter) { this.filter.dispose(); this.filter = null; }
    if (this.chorus) { this.chorus.dispose(); this.chorus = null; }
    if (this.volumeNode) { this.volumeNode.dispose(); this.volumeNode = null; }
  }

  public async playAudioFile(arrayBuffer: ArrayBuffer, effect: VoiceEffect, onEnded?: () => void) {
    await this.initContext();
    this.stopAudio();

    const nodes = await this.setupChain(effect.params);
    const blob = new Blob([arrayBuffer]);
    const url = URL.createObjectURL(blob);

    this.player = new Tone.Player({
      url: url,
      playbackRate: effect.params.speed || 1,
      autostart: true,
      onstop: () => {
        if (onEnded) onEnded();
      }
    });

    // Connect chain
    let currNode: Tone.ToneAudioNode = this.player;
    for (const node of nodes) {
      currNode.connect(node);
      currNode = node;
    }
    currNode.toDestination();
  }

  public async startMicMonitoring(effect: VoiceEffect, onStreamReady?: (stream: MediaStream) => void) {
    await this.initContext();
    this.stopAudio();

    try {
      this.mic = new Tone.UserMedia();
      await this.mic.open();
      this.isLiveMonitorsActive = true;

      const nodes = await this.setupChain(effect.params);
      let currNode: Tone.ToneAudioNode = this.mic;

      for (const node of nodes) {
        currNode.connect(node);
        currNode = node;
      }
      // Note: do not connect mic to destination directly if live monitoring causes feedback, or route safely
      // In Tone.js, UserMedia toDestination without headphones can cause feedback, so we connect to destination with low volume or let user use headphones.
      currNode.toDestination();

      const inputStream = (this.mic as any).inputStream;
      if (inputStream) {
        this.micStream = inputStream;
        if (onStreamReady) onStreamReady(this.micStream);
      }
    } catch (err) {
      console.error('Microphone access denied or failed:', err);
      throw err;
    }
  }

  public stopAudio() {
    if (this.player) {
      try { this.player.stop(); this.player.dispose(); } catch {}
      this.player = null;
    }
    if (this.mic) {
      try { this.mic.close(); this.mic.dispose(); } catch {}
      this.mic = null;
      this.isLiveMonitorsActive = false;
    }
    this.disposeChain();
  }

  public async renderEffectToBlob(arrayBuffer: ArrayBuffer, effect: VoiceEffect): Promise<string> {
    await this.initContext();
    
    // Use OfflineAudioContext for clean rendering of audio file with effect parameters
    const offlineContext = new OfflineAudioContext(2, 44100 * 30, 44100);
    const audioBuffer = await offlineContext.decodeAudioData(arrayBuffer);

    // For simplicity and instant feedback, we can also record via MediaRecorder or offline buffer
    // Let's use Tone.Offline
    const rendered = await Tone.Offline(async () => {
      const player = new Tone.Player(audioBuffer);
      player.playbackRate = effect.params.speed || 1;
      
      const nodes = await this.setupChain(effect.params);
      let currNode: Tone.ToneAudioNode = player;
      for (const node of nodes) {
        currNode.connect(node);
        currNode = node;
      }
      currNode.toDestination();
      player.start(0);
    }, audioBuffer.duration / (effect.params.speed || 1) + 1);

    // Convert Tone AudioBuffer to WAV Blob
    const wavBlob = this.audioBufferToWavBlob(rendered.get());
    if (this.currentBlobUrl) {
      URL.revokeObjectURL(this.currentBlobUrl);
    }
    this.currentBlobUrl = URL.createObjectURL(wavBlob);
    return this.currentBlobUrl;
  }

  private audioBufferToWavBlob(buffer: AudioBuffer): Blob {
    const numOfChan = buffer.numberOfChannels;
    const length = buffer.length * numOfChan * 2 + 44;
    const out = new DataView(new ArrayBuffer(length));
    let channels: Float32Array[] = [];
    let sampleRate = buffer.sampleRate;
    let offset = 0;
    let pos = 0;

    function writeString(str: string) {
      for (let i = 0; i < str.length; i++) {
        out.setUint8(pos++, str.charCodeAt(i));
      }
    }

    function setUint16(data: number) {
      out.setUint16(pos, data, true);
      pos += 2;
    }

    function setUint32(data: number) {
      out.setUint32(pos, data, true);
      pos += 4;
    }

    // RIFF chunk descriptor
    writeString('RIFF');
    setUint32(length - 8);
    writeString('WAVE');

    // fmt sub-chunk
    writeString('fmt ');
    setUint32(16); // SubChunk1Size (16 for PCM)
    setUint16(1); // AudioFormat (1 for PCM)
    setUint16(numOfChan);
    setUint32(sampleRate);
    setUint32(sampleRate * 2 * numOfChan); // ByteRate
    setUint16(numOfChan * 2); // BlockAlign
    setUint16(16); // BitsPerSample

    // data sub-chunk
    writeString('data');
    setUint32(length - pos - 4);

    for (let i = 0; i < buffer.numberOfChannels; i++) {
      channels.push(buffer.getChannelData(i));
    }

    while (offset < buffer.length) {
      for (let i = 0; i < numOfChan; i++) {
        let sample = Math.max(-1, Math.min(1, channels[i][offset]));
        sample = (0.5 + sample < 0 ? sample * 32768 : sample * 32767) | 0;
        out.setInt16(pos, sample, true);
        pos += 2;
      }
      offset++;
    }

    return new Blob([out.buffer], { type: 'audio/wav' });
  }
}

export const audioEngine = new AudioEngine();
