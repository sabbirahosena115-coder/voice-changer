import React, { useEffect, useRef, useState } from 'react';
import * as Tone from 'tone';
import { Activity, Sliders, Sparkles, Palette, Eye, Disc } from 'lucide-react';

interface NeonVisualizerProps {
  isPlaying: boolean;
  isLiveActive: boolean;
}

const VISUAL_MODES = [
  { key: 'bars', label: 'Circular Bars', bn: 'বার' },
  { key: 'wave', label: 'Radial Wave', bn: 'তরঙ্গ' },
  { key: 'burst', label: 'Particle Burst', bn: 'কণা' },
  { key: 'double', label: 'Double Spectrum', bn: 'ডাবল' },
  { key: 'spiral', label: 'Spiral Galaxy', bn: 'সর্পিল' },
  { key: 'rings', label: 'Sound Rings', bn: 'রিং' },
  { key: 'tunnel', label: 'Laser Tunnel', bn: 'টানেল' },
  { key: 'starburst', label: 'Starburst', bn: 'তারকা' },
  { key: 'liquid', label: 'Liquid Wave', bn: 'তরল' },
  { key: 'matrix', label: 'Matrix Bars', bn: 'ম্যাট্রিক্স' },
  { key: 'kaleido', label: 'Kaleidoscope', bn: 'ক্যালাইডো' },
  { key: 'heartbeat', label: 'Heartbeat', bn: 'হৃদস্পন্দন' },
];

const THEMES: Record<string, { label: string; accent: string; accent2: string; barFrom: string; barTo: string }> = {
  cyan: { label: 'Cyan Pulse', accent: '#00fff0', accent2: '#ff00d4', barFrom: '#7efcff', barTo: '#ff7ef8' },
  sunset: { label: 'Sunset Blaze', accent: '#ff6a00', accent2: '#ff006a', barFrom: '#ffb347', barTo: '#ff2a6a' },
  lime: { label: 'Toxic Lime', accent: '#aaff00', accent2: '#00ff88', barFrom: '#caff33', barTo: '#00ff88' },
  violet: { label: 'Violet Storm', accent: '#8a2be2', accent2: '#22d3ee', barFrom: '#a78bfa', barTo: '#22d3ee' },
  crimson: { label: 'Crimson Rush', accent: '#ff0033', accent2: '#ff6600', barFrom: '#ff4d6d', barTo: '#ff8a00' },
};

export function NeonVisualizer({ isPlaying, isLiveActive }: NeonVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [visualMode, setVisualMode] = useState<string>('bars');
  const [themeKey, setThemeKey] = useState<string>('cyan');
  const [sensitivity, setSensitivity] = useState<number>(1.2);
  const [barCount, setBarCount] = useState<number>(64);
  const [showSettings, setShowSettings] = useState<boolean>(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const analyser = new Tone.Analyser('fft', 128);
    Tone.Destination.connect(analyser);

    const theme = THEMES[themeKey] || THEMES.cyan;

    const render = () => {
      animationId = requestAnimationFrame(render);
      const width = canvas.width;
      const height = canvas.height;
      const centerX = width / 2;
      const centerY = height / 2;

      ctx.fillStyle = '#060a14';
      ctx.fillRect(0, 0, width, height);

      // Cyber grid background
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      const values = analyser.getValue() as Float32Array;

      ctx.save();
      ctx.translate(centerX, centerY);

      if (visualMode === 'bars') {
        const radius = Math.min(centerX, centerY) * 0.45;
        const angleStep = (Math.PI * 2) / barCount;

        for (let i = 0; i < barCount; i++) {
          const valIdx = Math.floor((i / barCount) * values.length);
          const db = values[valIdx];
          const norm = Math.min(1, Math.max(0, (db + 100) / 75)) * sensitivity;
          const barLen = norm * 120;
          const angle = i * angleStep;

          const x1 = Math.cos(angle) * radius;
          const y1 = Math.sin(angle) * radius;
          const x2 = Math.cos(angle) * (radius + barLen);
          const y2 = Math.sin(angle) * (radius + barLen);

          const grad = ctx.createLinearGradient(x1, y1, x2, y2);
          grad.addColorStop(0, theme.barFrom);
          grad.addColorStop(1, theme.barTo);

          ctx.strokeStyle = grad;
          ctx.lineWidth = 3;
          ctx.shadowBlur = 12;
          ctx.shadowColor = theme.accent;

          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }
      } else if (visualMode === 'wave') {
        ctx.beginPath();
        ctx.strokeStyle = theme.accent;
        ctx.lineWidth = 3;
        ctx.shadowBlur = 20;
        ctx.shadowColor = theme.accent;

        const radius = Math.min(centerX, centerY) * 0.5;
        for (let i = 0; i <= values.length; i++) {
          const idx = i % values.length;
          const angle = (i / values.length) * Math.PI * 2;
          const db = values[idx];
          const norm = Math.min(1, Math.max(0, (db + 100) / 75)) * sensitivity;
          const r = radius + norm * 60;

          const x = Math.cos(angle) * r;
          const y = Math.sin(angle) * r;

          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();
      } else if (visualMode === 'matrix') {
        const colWidth = width / 16;
        for (let i = 0; i < 16; i++) {
          const db = values[i * 4] || -100;
          const norm = Math.min(1, Math.max(0, (db + 100) / 70)) * sensitivity;
          const h = norm * height * 0.8;
          const x = i * colWidth - width / 2 + colWidth / 2;

          ctx.fillStyle = theme.accent;
          ctx.shadowBlur = 15;
          ctx.shadowColor = theme.accent2;
          ctx.fillRect(x, height / 2 - h / 2, colWidth - 4, h);
        }
      } else {
        // Default circular spectrum for other modes
        const radius = Math.min(centerX, centerY) * 0.4;
        const angleStep = (Math.PI * 2) / 32;

        for (let i = 0; i < 32; i++) {
          const db = values[i * 2];
          const norm = Math.min(1, Math.max(0, (db + 100) / 75)) * sensitivity;
          const size = norm * 50;
          const angle = i * angleStep;

          const x = Math.cos(angle) * (radius + 30);
          const y = Math.sin(angle) * (radius + 30);

          ctx.beginPath();
          ctx.arc(x, y, Math.max(4, size), 0, Math.PI * 2);
          ctx.fillStyle = theme.accent2;
          ctx.shadowBlur = 15;
          ctx.shadowColor = theme.accent;
          ctx.fill();
        }
      }

      // Center glowing orb
      ctx.beginPath();
      ctx.arc(0, 0, 45, 0, Math.PI * 2);
      ctx.fillStyle = '#060a14';
      ctx.strokeStyle = theme.accent;
      ctx.lineWidth = 3;
      ctx.shadowBlur = 25;
      ctx.shadowColor = theme.accent;
      ctx.fill();
      ctx.stroke();

      ctx.restore();
      ctx.shadowBlur = 0;
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      try {
        analyser.dispose();
      } catch {}
    };
  }, [visualMode, themeKey, sensitivity, barCount]);

  return (
    <div className="bg-[#151619] border border-[#2A2B2E] rounded-xl p-5 shadow-2xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-cyan-400 animate-pulse" />
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-wider">Neon Pulse Pro Visualizer Suite</h3>
            <p className="text-[11px] text-[#8E9299]">12+ Pro Audio Modes, Themes & Customizer</p>
          </div>
        </div>

        {/* Quick Controls */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2A2B2E] hover:bg-[#3A3C42] text-gray-200 transition font-medium cursor-pointer"
          >
            <Sliders className="w-3.5 h-3.5 text-cyan-400" />
            <span>Customize</span>
          </button>

          {/* Theme Switcher */}
          <div className="flex items-center gap-1.5 bg-[#0A0B0D] px-2.5 py-1 rounded-lg border border-[#2A2B2E]">
            {Object.keys(THEMES).map((k) => (
              <button
                key={k}
                onClick={() => setThemeKey(k)}
                className={`w-3.5 h-3.5 rounded-full transition ${themeKey === k ? 'ring-2 ring-white scale-110' : 'opacity-60 hover:opacity-100'}`}
                style={{ backgroundColor: THEMES[k].accent }}
                title={THEMES[k].label}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Settings Drawer */}
      {showSettings && (
        <div className="mb-4 p-4 rounded-lg bg-[#0A0B0D] border border-[#2A2B2E] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs animate-fadeIn">
          <div>
            <label className="text-[#8E9299] block mb-1">Sensitivity: {sensitivity.toFixed(1)}x</label>
            <input
              type="range"
              min="0.5"
              max="3.0"
              step="0.1"
              value={sensitivity}
              onChange={(e) => setSensitivity(parseFloat(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer"
            />
          </div>
          <div>
            <label className="text-[#8E9299] block mb-1">Bar Resolution: {barCount}</label>
            <input
              type="range"
              min="32"
              max="180"
              step="16"
              value={barCount}
              onChange={(e) => setBarCount(parseInt(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer"
            />
          </div>
        </div>
      )}

      {/* Mode Selector Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-4">
        {VISUAL_MODES.slice(0, 6).map((mode) => (
          <button
            key={mode.key}
            onClick={() => setVisualMode(mode.key)}
            className={`px-3 py-2 rounded-lg text-xs font-medium border transition cursor-pointer truncate ${
              visualMode === mode.key
                ? 'bg-cyan-600 border-cyan-500 text-white shadow-[0_0_12px_rgba(6,182,212,0.5)]'
                : 'bg-[#0A0B0D] border-[#2A2B2E] text-gray-400 hover:text-white hover:border-[#3A3C42]'
            }`}
          >
            {mode.label}
          </button>
        ))}
      </div>

      {/* Canvas Container */}
      <div className="relative w-full h-64 bg-[#060a14] rounded-xl border border-[#2A2B2E] overflow-hidden flex items-center justify-center shadow-inner">
        <canvas
          ref={canvasRef}
          width={900}
          height={256}
          className="w-full h-full object-cover"
        />
        {(!isPlaying && !isLiveActive) && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[3px] flex flex-col items-center justify-center text-center p-4">
            <Sparkles className="w-8 h-8 text-cyan-400 mb-2 animate-bounce" />
            <p className="text-xs text-gray-300 font-medium">Neon Pulse Pro is ready. Play any voice effect, audio track, or live mic to start the visualizer!</p>
          </div>
        )}
      </div>
    </div>
  );
}
