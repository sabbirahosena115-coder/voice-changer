import React, { useState, useRef } from 'react';
import { Mic, Upload, Square, Play, FileAudio, AlertCircle } from 'lucide-react';

interface AudioInputSelectorProps {
  onAudioReady: (arrayBuffer: ArrayBuffer, fileName: string) => void;
  onMicStreamStart: () => void;
  onStopAudio: () => void;
  activeInputType: 'file' | 'mic' | null;
  setActiveInputType: (type: 'file' | 'mic' | null) => void;
}

export function AudioInputSelector({
  onAudioReady,
  onMicStreamStart,
  onStopAudio,
  activeInputType,
  setActiveInputType
}: AudioInputSelectorProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [audioFileName, setAudioFileName] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.includes('audio') && !file.name.match(/\.(mp3|wav|ogg|m4a|aac)$/i)) {
      setErrorMsg('দয়া করে একটি সঠিক অডিও ফাইল (MP3/WAV) আপলোড করুন।');
      return;
    }

    setErrorMsg(null);
    setAudioFileName(file.name);
    setActiveInputType('file');

    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        onAudioReady(event.target.result as ArrayBuffer, file.name);
      }
    };
    reader.readAsArrayBuffer(file);
  };

  const startRecording = async () => {
    try {
      setErrorMsg(null);
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioChunksRef.current = [];

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        const arrayBuffer = await audioBlob.arrayBuffer();
        setAudioFileName('RECORDED_VOICE.WAV');
        onAudioReady(arrayBuffer, 'Recorded_Voice.wav');
        
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
      setActiveInputType('mic');
      onMicStreamStart();

      setRecordingTime(0);
      timerRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);

    } catch (err) {
      console.error('Microphone error:', err);
      setErrorMsg('মাইক্রোফোন অ্যাক্সেস পাওয়া যায়নি।');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      clearInterval(timerRef.current);
    }
  };

  const loadSampleAudio = async () => {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const sampleRate = ctx.sampleRate;
    const duration = 4;
    const buffer = ctx.createBuffer(1, sampleRate * duration, sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < buffer.length; i++) {
      const t = i / sampleRate;
      data[i] = Math.sin(2 * Math.PI * 440 * t) * 0.3 + 
                Math.sin(2 * Math.PI * 554.37 * t) * 0.2 + 
                Math.sin(2 * Math.PI * 659.25 * t) * 0.2 * Math.sin(t * 3);
    }

    const wavBlob = audioBufferToWav(buffer);
    const arrayBuffer = await wavBlob.arrayBuffer();
    setAudioFileName('SAMPLE_MELODY.WAV');
    setActiveInputType('file');
    onAudioReady(arrayBuffer, 'Sample_Vocal_Melody.wav');
  };

  const audioBufferToWav = (buffer: AudioBuffer): Blob => {
    const numOfChan = buffer.numberOfChannels;
    const length = buffer.length * numOfChan * 2 + 44;
    const out = new DataView(new ArrayBuffer(length));
    let sampleRate = buffer.sampleRate;
    let offset = 0;
    let pos = 0;

    function writeString(str: string) {
      for (let i = 0; i < str.length; i++) {
        out.setUint8(pos++, str.charCodeAt(i));
      }
    }
    function setUint16(data: number) { out.setUint16(pos, data, true); pos += 2; }
    function setUint32(data: number) { out.setUint32(pos, data, true); pos += 4; }

    writeString('RIFF');
    setUint32(length - 8);
    writeString('WAVE');
    writeString('fmt ');
    setUint32(16);
    setUint16(1);
    setUint16(numOfChan);
    setUint32(sampleRate);
    setUint32(sampleRate * 2 * numOfChan);
    setUint16(numOfChan * 2);
    setUint16(16);
    writeString('data');
    setUint32(length - pos - 4);

    const channelData = buffer.getChannelData(0);
    while (offset < buffer.length) {
      let sample = Math.max(-1, Math.min(1, channelData[offset]));
      sample = (sample < 0 ? sample * 32768 : sample * 32767) | 0;
      out.setInt16(pos, sample, true);
      pos += 2;
      offset++;
    }
    return new Blob([out.buffer], { type: 'audio/wav' });
  };

  return (
    <div className="space-y-6">
      {/* Upload Box */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        accept="audio/*"
        className="hidden"
      />
      <div className="rounded-xl border border-dashed border-[#3A3C42] p-5 text-center bg-[#151619]">
        <div className="mb-3 text-[#8E9299]">
          <Upload className="mx-auto h-8 w-8 text-cyan-400" />
        </div>
        <p className="text-xs font-medium text-gray-300">Drop MP3/WAV here</p>
        <div className="flex gap-2 mt-3">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex-1 rounded-lg bg-[#2A2B2E] py-2 text-xs font-bold hover:bg-[#3A3C42] text-gray-200 transition cursor-pointer"
          >
            UPLOAD FILE
          </button>
          <button
            onClick={loadSampleAudio}
            className="rounded-lg bg-cyan-600/20 border border-cyan-500/40 px-3 py-2 text-xs font-bold text-cyan-300 hover:bg-cyan-600/30 transition cursor-pointer"
          >
            DEMO
          </button>
        </div>
      </div>

      {/* Recording Widget */}
      <div className="relative flex flex-col items-center justify-center rounded-xl bg-[#1D1E22] p-6 shadow-inner border border-[#2A2B2E]">
        <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full border-4 border-[#2A2B2E]">
          <div className="h-16 w-16 animate-pulse rounded-full bg-red-600/20 flex items-center justify-center">
            <div className={`h-8 w-8 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.5)] ${isRecording ? 'bg-red-500 animate-ping' : 'bg-red-600'}`} />
          </div>
        </div>

        {!isRecording ? (
          <button
            onClick={startRecording}
            className="text-xs font-bold tracking-widest text-red-500 uppercase hover:text-red-400 transition cursor-pointer flex items-center gap-2"
          >
            <Mic className="w-4 h-4" /> Start Recording
          </button>
        ) : (
          <button
            onClick={stopRecording}
            className="text-xs font-bold tracking-widest text-white bg-red-600 px-4 py-2 rounded-lg uppercase hover:bg-red-500 transition cursor-pointer flex items-center gap-2"
          >
            <Square className="w-4 h-4 fill-current" /> Stop ({recordingTime}s)
          </button>
        )}
      </div>

      {/* Visualizer Placeholder */}
      <div className="space-y-1">
        <div className="flex justify-between items-center">
          <span className="font-mono text-[10px] text-[#5C5F66] uppercase">Input Level</span>
          {audioFileName && (
            <span className="font-mono text-[10px] text-cyan-400 truncate max-w-[140px]">{audioFileName}</span>
          )}
        </div>
        <div className="flex h-12 items-end gap-1 overflow-hidden rounded-md bg-black/40 p-2">
          <div className="w-1 bg-cyan-500" style={{ height: '40%' }}></div>
          <div className="w-1 bg-cyan-500" style={{ height: '60%' }}></div>
          <div className="w-1 bg-cyan-500" style={{ height: '30%' }}></div>
          <div className="w-1 bg-cyan-500" style={{ height: '80%' }}></div>
          <div className="w-1 bg-cyan-500" style={{ height: '55%' }}></div>
          <div className="w-1 bg-cyan-500" style={{ height: '90%' }}></div>
          <div className="w-1 bg-cyan-500" style={{ height: '45%' }}></div>
          <div className="w-1 bg-cyan-400" style={{ height: '20%' }}></div>
          <div className="w-1 bg-cyan-400" style={{ height: '70%' }}></div>
          <div className="w-1 bg-cyan-400" style={{ height: '100%' }}></div>
        </div>
      </div>

      {errorMsg && (
        <div className="flex items-center gap-2 text-rose-400 text-xs bg-rose-500/10 p-2 rounded-lg border border-rose-500/20">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}
    </div>
  );
}

