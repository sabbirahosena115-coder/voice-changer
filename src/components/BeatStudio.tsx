import { useState } from 'react';
import { Play, Square, Music, Activity, Layers, Radio, Zap, Sparkles } from 'lucide-react';
import * as Tone from 'tone';

interface BeatStudioProps {
  onBeatSelected?: (beatName: string) => void;
}

export function BeatStudio({}: BeatStudioProps) {
  const [isPlayingBeat, setIsPlayingBeat] = useState(false);
  const [selectedBeatType, setSelectedBeatType] = useState<'hiphop' | 'edm' | 'lofi' | 'rock'>('hiphop');
  const [tempo, setTempo] = useState<number>(120);
  const [loopSynth, setLoopSynth] = useState<Tone.Loop | null>(null);

  const triggerDrumSound = (type: 'kick' | 'snare' | 'hihat' | 'clap') => {
    try {
      const synth = new Tone.Synth({
        oscillator: { type: type === 'kick' ? 'sine' : type === 'snare' ? 'triangle' : 'square' },
        envelope: { attack: 0.005, decay: type === 'kick' ? 0.3 : 0.1, sustain: 0, release: 0.1 }
      }).toDestination();

      if (type === 'kick') {
        synth.triggerAttackRelease('C1', '8n');
      } else if (type === 'snare') {
        synth.triggerAttackRelease('G2', '16n');
      } else if (type === 'hihat') {
        synth.triggerAttackRelease('C5', '32n');
      } else {
        synth.triggerAttackRelease('E3', '16n');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleToggleBeatLoop = async () => {
    await Tone.start();
    if (isPlayingBeat) {
      Tone.Transport.stop();
      if (loopSynth) {
        loopSynth.dispose();
        setLoopSynth(null);
      }
      setIsPlayingBeat(false);
    } else {
      Tone.Transport.bpm.value = tempo;
      const kick = new Tone.MembraneSynth().toDestination();
      const snare = new Tone.NoiseSynth({
        noise: { type: 'white' },
        envelope: { attack: 0.005, decay: 0.1, sustain: 0 }
      }).toDestination();

      let step = 0;
      const loop = new Tone.Loop((time) => {
        if (step % 4 === 0) {
          kick.triggerAttackRelease('C1', '8n', time);
        }
        if (step % 4 === 2) {
          snare.triggerAttackRelease('16n', time);
        }
        if (selectedBeatType === 'hiphop' && step % 2 === 1) {
          kick.triggerAttackRelease('G1', '16n', time + 0.1);
        }
        step = (step + 1) % 8;
      }, '8n').start(0);

      setLoopSynth(loop);
      Tone.Transport.start();
      setIsPlayingBeat(true);
    }
  };

  return (
    <div className="bg-[#151619] border border-[#2A2B2E] rounded-2xl p-6 shadow-xl mt-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 shadow-inner">
            <Music className="w-6 h-6 animate-bounce" />
          </div>
          <div>
            <h3 className="text-white font-bold text-sm tracking-wide flex items-center gap-2">
              <span>BEATBOX & DRUM STUDIO</span>
              <span className="text-[10px] font-mono text-purple-300 bg-purple-500/20 px-2 py-0.5 rounded-full border border-purple-500/30">
                PRO 2.0
              </span>
            </h3>
            <p className="text-[#8E9299] text-xs mt-0.5">
              Play live drum pads or background rhythm loops to mix with your vocals!
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleToggleBeatLoop}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition shadow-lg cursor-pointer ${
              isPlayingBeat
                ? 'bg-rose-600 hover:bg-rose-500 text-white animate-pulse shadow-rose-600/30'
                : 'bg-purple-600 hover:bg-purple-500 text-white shadow-purple-600/30'
            }`}
          >
            {isPlayingBeat ? <Square className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
            {isPlayingBeat ? 'STOP BEAT LOOP' : 'PLAY RHYTHM BEAT'}
          </button>
        </div>
      </div>

      {/* Drum Pads Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <button
          onClick={() => triggerDrumSound('kick')}
          className="bg-[#1A1C20] hover:bg-purple-950/40 border border-[#2A2B2E] hover:border-purple-500/50 p-4 rounded-xl text-center transition-all duration-200 cursor-pointer group shadow-sm hover:shadow-purple-500/10"
        >
          <div className="flex items-center justify-center gap-1.5 text-purple-400 font-bold text-xs uppercase mb-1.5 group-hover:scale-105 transition">
            <Activity className="w-4 h-4" /> KICK BASS
          </div>
          <div className="text-[10px] text-[#8E9299]">Deep Punch (C1)</div>
        </button>

        <button
          onClick={() => triggerDrumSound('snare')}
          className="bg-[#1A1C20] hover:bg-cyan-950/40 border border-[#2A2B2E] hover:border-cyan-500/50 p-4 rounded-xl text-center transition-all duration-200 cursor-pointer group shadow-sm hover:shadow-cyan-500/10"
        >
          <div className="flex items-center justify-center gap-1.5 text-cyan-400 font-bold text-xs uppercase mb-1.5 group-hover:scale-105 transition">
            <Layers className="w-4 h-4" /> SNARE DRUM
          </div>
          <div className="text-[10px] text-[#8E9299]">Sharp Snare</div>
        </button>

        <button
          onClick={() => triggerDrumSound('hihat')}
          className="bg-[#1A1C20] hover:bg-emerald-950/40 border border-[#2A2B2E] hover:border-emerald-500/50 p-4 rounded-xl text-center transition-all duration-200 cursor-pointer group shadow-sm hover:shadow-emerald-500/10"
        >
          <div className="flex items-center justify-center gap-1.5 text-emerald-400 font-bold text-xs uppercase mb-1.5 group-hover:scale-105 transition">
            <Zap className="w-4 h-4" /> HI-HAT
          </div>
          <div className="text-[10px] text-[#8E9299]">Crisp Tick</div>
        </button>

        <button
          onClick={() => triggerDrumSound('clap')}
          className="bg-[#1A1C20] hover:bg-amber-950/40 border border-[#2A2B2E] hover:border-amber-500/50 p-4 rounded-xl text-center transition-all duration-200 cursor-pointer group shadow-sm hover:shadow-amber-500/10"
        >
          <div className="flex items-center justify-center gap-1.5 text-amber-400 font-bold text-xs uppercase mb-1.5 group-hover:scale-105 transition">
            <Radio className="w-4 h-4" /> CLAP PERC
          </div>
          <div className="text-[10px] text-[#8E9299]">Party Clap</div>
        </button>
      </div>

      {/* Beat Style selector & Tempo */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#2A2B2E] text-xs">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-gray-400 font-medium">Style:</span>
          {(['hiphop', 'edm', 'lofi', 'rock'] as const).map((style) => (
            <button
              key={style}
              onClick={() => setSelectedBeatType(style)}
              className={`px-3 py-1.5 rounded-lg font-mono uppercase transition cursor-pointer ${
                selectedBeatType === style
                  ? 'bg-purple-600 text-white font-bold shadow-md shadow-purple-600/30'
                  : 'bg-[#1A1C20] text-gray-400 hover:text-white border border-[#2A2B2E]'
              }`}
            >
              {style}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
          <span className="text-gray-400 font-medium whitespace-nowrap">Tempo: <strong className="text-white font-mono">{tempo} BPM</strong></span>
          <input
            type="range"
            min="60"
            max="180"
            value={tempo}
            onChange={(e) => {
              const val = Number(e.target.value);
              setTempo(val);
              Tone.Transport.bpm.value = val;
            }}
            className="w-32 accent-purple-500 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

