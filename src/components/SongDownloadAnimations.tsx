import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Play, Pause, Download, Zap, Music, Flame, Disc, Radio, Activity, User, Type } from 'lucide-react';

export interface DownloadAnimation {
  id: number;
  name: string;
  bengaliName: string;
  description: string;
  icon: any;
  colorClass: string;
}

export const SONG_DOWNLOAD_ANIMATIONS: DownloadAnimation[] = [
  {
    id: 1,
    name: 'Cyber Neon Equalizer',
    bengaliName: 'সাইবার নিয়ন ইকুয়ালাইজার',
    description: 'Dynamic multi-color vertical spectrum bars dancing to the beat.',
    icon: Activity,
    colorClass: 'from-cyan-500 to-blue-600',
  },
  {
    id: 2,
    name: 'Rotating Vinyl Groove',
    bengaliName: 'স্পিনিং ভিনাইল রেকর্ড',
    description: 'Retro-futuristic spinning vinyl disc with glowing neon grooves.',
    icon: Disc,
    colorClass: 'from-purple-500 to-pink-600',
  },
  {
    id: 3,
    name: 'Pulsing Cyber Orb',
    bengaliName: 'পালসিং সাইবার অরবিটার',
    description: 'Glowing holographic energy sphere with concentric ripple waves.',
    icon: Sparkles,
    colorClass: 'from-emerald-400 to-teal-600',
  },
  {
    id: 4,
    name: 'Cosmic Starfield Pulse',
    bengaliName: 'কস্মিক স্টারফিল্ড পালস',
    description: 'Warp-speed twinkling star particles reacting to download flow.',
    icon: Zap,
    colorClass: 'from-amber-400 to-orange-600',
  },
  {
    id: 5,
    name: 'Matrix Laser Grid',
    bengaliName: 'ম্যাট্রিক্স লেজার গ্রিড',
    description: 'Cyberpunk digital matrix rain and laser waveform mesh.',
    icon: Radio,
    colorClass: 'from-green-400 to-emerald-700',
  },
  {
    id: 6,
    name: 'Neon Vortex Spiral',
    bengaliName: 'নিয়ন ভরটেক্স স্পাইরাল',
    description: 'Hypnotic rotating tunnel of neon light rings.',
    icon: Music,
    colorClass: 'from-fuchsia-500 to-purple-700',
  },
  {
    id: 7,
    name: 'Digital Heartbeat EKG Pro',
    bengaliName: 'ডিজিটাল হার্টবিট ইকেজি প্রো',
    description: 'Professional bio-rhythm pulse line tracking download rhythm.',
    icon: Activity,
    colorClass: 'from-rose-500 to-red-600',
  },
  {
    id: 8,
    name: 'Prism Rainbow Spectrum',
    bengaliName: 'প্রিজম রেইনবো স্পেকট্রাম',
    description: 'Prismatic light diffraction waves shimmering across frequencies.',
    icon: Sparkles,
    colorClass: 'from-yellow-400 via-pink-500 to-cyan-400',
  },
  {
    id: 9,
    name: 'Cyber Plasma Fire',
    bengaliName: 'সাইবার প্লাজমা ফায়ার',
    description: 'High-energy plasma flame wave dancing dynamically.',
    icon: Flame,
    colorClass: 'from-orange-500 via-red-600 to-amber-400',
  },
  {
    id: 10,
    name: 'Quantum Waveform Wave',
    bengaliName: 'কোয়ান্টাম ওয়েভফর্ম ওয়েভ',
    description: 'Smooth harmonic sine wave oscillations in 3D perspective.',
    icon: Zap,
    colorClass: 'from-sky-400 to-indigo-600',
  },
];

export const CUSTOM_NAME_ANIMATIONS: DownloadAnimation[] = [
  {
    id: 1,
    name: 'Neon Glow Name',
    bengaliName: 'নিয়ন গ্লো নেম টেক্সট',
    description: 'Your custom name glowing in vibrant neon cyan and blue.',
    icon: Type,
    colorClass: 'from-cyan-400 to-blue-500',
  },
  {
    id: 2,
    name: 'Matrix Code Name',
    bengaliName: 'ম্যাট্রিক্স কোড নেম',
    description: 'Your name floating over cyberpunk digital matrix rain.',
    icon: Radio,
    colorClass: 'from-green-400 to-emerald-600',
  },
  {
    id: 3,
    name: 'Plasma Fire Name',
    bengaliName: 'প্লাজমা ফায়ার নেম',
    description: 'Your name enveloped in blazing neon fire and sparks.',
    icon: Flame,
    colorClass: 'from-orange-500 to-red-600',
  },
  {
    id: 4,
    name: 'Laser Wave Name',
    bengaliName: 'লেজার ওয়েভ নেম',
    description: 'Animated laser frequency waves sweeping under your name.',
    icon: Zap,
    colorClass: 'from-rose-500 to-pink-600',
  },
  {
    id: 5,
    name: 'Holographic Floating Name',
    bengaliName: 'হলোকোগ্রাফিক ফ্লোটিং নেম',
    description: '3D holographic emerald glow lifting your custom name.',
    icon: Sparkles,
    colorClass: 'from-emerald-400 to-teal-500',
  },
  {
    id: 6,
    name: 'Gold Sparkle Star Name',
    bengaliName: 'গোল্ড স্পার্কল স্টার নেম',
    description: 'Twinkling golden star particles orbiting your name.',
    icon: Sparkles,
    colorClass: 'from-amber-400 to-yellow-500',
  },
  {
    id: 7,
    name: 'Cyber Glitch Name',
    bengaliName: 'সাইবার গ্লিচ নেম',
    description: 'Futuristic cyberpunk chromatic glitch animation for your name.',
    icon: Music,
    colorClass: 'from-purple-500 to-fuchsia-600',
  },
  {
    id: 8,
    name: 'Prism Rainbow Name',
    bengaliName: 'প্রিজম রেইনবো নেম',
    description: 'Shimmering rainbow color gradient sweeping across your name.',
    icon: Disc,
    colorClass: 'from-yellow-400 via-pink-500 to-cyan-400',
  },
  {
    id: 9,
    name: 'Heartbeat EKG Name',
    bengaliName: 'হার্টবিট ইকেজি নেম',
    description: 'Live medical heartbeat pulse line pulsing behind your name.',
    icon: Activity,
    colorClass: 'from-red-500 to-rose-600',
  },
  {
    id: 10,
    name: 'Quantum 3D Name',
    bengaliName: 'কোয়ান্টাম ৩ডি পারস্পেক্টিভ নেম',
    description: 'Harmonic sine wave oscillations framing your custom name.',
    icon: Zap,
    colorClass: 'from-sky-400 to-indigo-600',
  },
  // 10 Additional New Custom Name Animations (Total 20)
  {
    id: 11,
    name: 'Cyberpunk Grid Name',
    bengaliName: 'সাইবারপাঙ্ক গ্রিড নেম',
    description: 'Neon grid perspective floor under your customized name.',
    icon: Activity,
    colorClass: 'from-cyan-600 to-indigo-600',
  },
  {
    id: 12,
    name: 'Cosmic Warp Star Name',
    bengaliName: 'কস্মিক ওয়ার্প স্টার নেম',
    description: 'Warp-speed shooting stars converging into your name.',
    icon: Zap,
    colorClass: 'from-yellow-500 to-amber-600',
  },
  {
    id: 13,
    name: 'Liquid Chrome Name',
    bengaliName: 'লিকুইড ক্রোম মেটালিক নেম',
    description: 'Sleek liquid metallic sheen flowing across your name typography.',
    icon: Disc,
    colorClass: 'from-slate-300 to-slate-600',
  },
  {
    id: 14,
    name: 'Tesla Lightning Name',
    bengaliName: 'টেসলা লাইটনিং নেম',
    description: 'Cracking electric lightning arcs wrapping around your name.',
    icon: Zap,
    colorClass: 'from-cyan-300 via-blue-500 to-purple-600',
  },
  {
    id: 15,
    name: 'Aurora Borealis Name',
    bengaliName: 'অরোরা বোরিয়ালিস নেম',
    description: 'Ethereal northern lights curtain shimmering behind your name.',
    icon: Sparkles,
    colorClass: 'from-teal-400 to-emerald-600',
  },
  {
    id: 16,
    name: 'Solar Flare Crown Name',
    bengaliName: 'সোলার ফ্লেয়ার ক্রাউন নেম',
    description: 'Radiant stellar corona and fiery plasma aura around your name.',
    icon: Flame,
    colorClass: 'from-orange-400 to-red-500',
  },
  {
    id: 17,
    name: 'Hyper Bass Shockwave Name',
    bengaliName: 'হাইপার বেস শকওয়েভ নেম',
    description: 'Concentric bass shockwave ripples pulsing from your name.',
    icon: Radio,
    colorClass: 'from-pink-500 to-rose-600',
  },
  {
    id: 18,
    name: 'Binary Code Stream Name',
    bengaliName: 'বাইনারি কোড স্ট্রিম নেম',
    description: 'Matrix binary digits 0101 streaming dynamically through your name.',
    icon: Radio,
    colorClass: 'from-emerald-400 to-green-600',
  },
  {
    id: 19,
    name: 'Neon EKG Pulse Pro Name',
    bengaliName: 'নিয়ন ইকেজি পালস প্রো নেম',
    description: 'Sharp medical ECG heartbeat rhythm crossing your name.',
    icon: Activity,
    colorClass: 'from-rose-500 to-red-700',
  },
  {
    id: 20,
    name: 'Galaxy Nebula Spiral Name',
    bengaliName: 'গ্যালাক্সি নেবুলা স্পাইরাল নেম',
    description: 'Deep space spiral nebula dust clouds swirling around your name.',
    icon: Music,
    colorClass: 'from-fuchsia-500 via-purple-600 to-cyan-500',
  },
];

interface SongDownloadAnimationsProps {
  selectedAnimationId: number;
  onSelectAnimation: (id: number) => void;
  isDownloading?: boolean;
  downloadProgress?: number;
}

export function SongDownloadAnimations({
  selectedAnimationId,
  onSelectAnimation,
  isDownloading = false,
  downloadProgress = 100,
}: SongDownloadAnimationsProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlayingAnim, setIsPlayingAnim] = useState(true);
  
  const [animationCategory, setAnimationCategory] = useState<'visual' | 'name'>('visual');
  const [customName, setCustomName] = useState<string>('RIDOY ISLAM');
  const [selectedNameAnimId, setSelectedNameAnimId] = useState<number>(1);

  // Canvas animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let angle = 0;

    const render = () => {
      canvas.width = canvas.parentElement?.clientWidth || 400;
      canvas.height = 180;
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      // Background gradient
      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      bgGrad.addColorStop(0, '#0d0e12');
      bgGrad.addColorStop(1, '#15171e');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      angle += 0.05;

      if (animationCategory === 'visual') {
        // --- VISUAL ANIMATIONS (1 to 10) ---
        switch (selectedAnimationId) {
          case 1: {
            const bars = 28;
            const barWidth = (width - 40) / bars - 3;
            for (let i = 0; i < bars; i++) {
              const h = (Math.sin(angle * 1.5 + i * 0.35) + 1.2) * (height * 0.35) + 12;
              const x = i * (barWidth + 3) + 20;
              const y = height - h - 20;

              const grad = ctx.createLinearGradient(x, y, x, height);
              grad.addColorStop(0, '#22d3ee');
              grad.addColorStop(0.5, '#3b82f6');
              grad.addColorStop(1, '#8b5cf6');
              
              ctx.fillStyle = grad;
              ctx.shadowColor = '#22d3ee';
              ctx.shadowBlur = 12;
              ctx.fillRect(x, y, barWidth, h);

              ctx.fillStyle = '#ffffff';
              ctx.fillRect(x, y, barWidth, 3);
              ctx.shadowBlur = 0;
            }
            break;
          }
          case 2: {
            const cx = width / 2;
            const cy = height / 2;
            const radius = Math.min(cx, cy) - 15;

            ctx.beginPath();
            ctx.arc(cx, cy, radius, 0, Math.PI * 2);
            ctx.fillStyle = '#111318';
            ctx.fill();
            ctx.lineWidth = 4;
            ctx.strokeStyle = '#2a2d36';
            ctx.stroke();

            for (let r = radius * 0.35; r < radius * 0.95; r += 10) {
              ctx.beginPath();
              ctx.arc(cx, cy, r, 0, Math.PI * 2);
              ctx.strokeStyle = 'rgba(168, 85, 247, 0.12)';
              ctx.lineWidth = 1;
              ctx.stroke();
            }

            ctx.save();
            ctx.translate(cx, cy);
            ctx.rotate(isPlayingAnim ? angle * 0.8 : 0);
            
            ctx.beginPath();
            ctx.arc(0, 0, radius * 0.32, 0, Math.PI * 2);
            const labelGrad = ctx.createRadialGradient(0, 0, 5, 0, 0, radius * 0.32);
            labelGrad.addColorStop(0, '#ec4899');
            labelGrad.addColorStop(1, '#8b5cf6');
            ctx.fillStyle = labelGrad;
            ctx.shadowColor = '#ec4899';
            ctx.shadowBlur = 10;
            ctx.fill();
            ctx.shadowBlur = 0;

            ctx.beginPath();
            ctx.arc(0, 0, 7, 0, Math.PI * 2);
            ctx.fillStyle = '#0d0e12';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(radius * 0.28, 0);
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 3;
            ctx.stroke();
            ctx.restore();
            break;
          }
          case 3: {
            const cx = width / 2;
            const cy = height / 2;
            const pulse = Math.sin(angle * 2.5) * 12;
            const r = 55 + pulse;

            for (let ring = 3; ring > 0; ring--) {
              ctx.beginPath();
              ctx.arc(cx, cy, r + ring * 18, 0, Math.PI * 2);
              ctx.strokeStyle = `rgba(52, 211, 153, ${0.15 * ring})`;
              ctx.lineWidth = 1.5;
              ctx.stroke();
            }

            const grad = ctx.createRadialGradient(cx, cy, 5, cx, cy, r);
            grad.addColorStop(0, '#6ee7b7');
            grad.addColorStop(0.5, '#10b981');
            grad.addColorStop(1, 'rgba(5, 150, 105, 0.1)');

            ctx.beginPath();
            ctx.arc(cx, cy, r, 0, Math.PI * 2);
            ctx.fillStyle = grad;
            ctx.shadowColor = '#34d399';
            ctx.shadowBlur = 25;
            ctx.fill();
            ctx.shadowBlur = 0;
            break;
          }
          case 4: {
            const count = 50;
            for (let i = 0; i < count; i++) {
              const px = (Math.sin(i * 99 + angle * 0.6) * 0.5 + 0.5) * width;
              const py = (Math.cos(i * 33 + angle * 0.4) * 0.5 + 0.5) * height;
              const size = (Math.sin(angle * 2 + i) + 1.6) * 2.2;

              ctx.beginPath();
              ctx.arc(px, py, size, 0, Math.PI * 2);
              ctx.fillStyle = i % 3 === 0 ? '#fbbf24' : i % 3 === 1 ? '#f97316' : '#38bdf8';
              ctx.shadowColor = '#fbbf24';
              ctx.shadowBlur = 12;
              ctx.fill();
              ctx.shadowBlur = 0;
            }
            break;
          }
          case 5: {
            ctx.strokeStyle = 'rgba(74, 222, 128, 0.45)';
            ctx.lineWidth = 1.5;
            for (let x = 0; x < width; x += 18) {
              ctx.beginPath();
              ctx.moveTo(x, 0);
              ctx.lineTo(x + Math.sin(angle * 1.2 + x * 0.05) * 14, height);
              ctx.stroke();
            }
            for (let y = 0; y < height; y += 18) {
              ctx.beginPath();
              ctx.moveTo(0, y);
              ctx.lineTo(width, y + Math.cos(angle * 1.2 + y * 0.05) * 14);
              ctx.stroke();
            }
            break;
          }
          case 6: {
            const cx = width / 2;
            const cy = height / 2;
            for (let i = 10; i > 0; i--) {
              const rad = i * 14 + Math.sin(angle + i * 0.25) * 12;
              ctx.beginPath();
              ctx.ellipse(cx, cy, rad * 1.9, rad, angle * 0.4, 0, Math.PI * 2);
              ctx.strokeStyle = i % 2 === 0 ? '#e879f9' : '#a855f7';
              ctx.lineWidth = 2.5;
              ctx.shadowColor = '#e879f9';
              ctx.shadowBlur = 16;
              ctx.stroke();
              ctx.shadowBlur = 0;
            }
            break;
          }
          case 7: {
            ctx.strokeStyle = 'rgba(244, 63, 94, 0.08)';
            ctx.lineWidth = 1;
            for (let gx = 0; gx < width; gx += 20) {
              ctx.beginPath();
              ctx.moveTo(gx, 0);
              ctx.lineTo(gx, height);
              ctx.stroke();
            }
            for (let gy = 0; gy < height; gy += 20) {
              ctx.beginPath();
              ctx.moveTo(0, gy);
              ctx.lineTo(width, gy);
              ctx.stroke();
            }

            ctx.beginPath();
            let scanHeadX = 0;
            let scanHeadY = height / 2;

            for (let x = 0; x < width; x++) {
              let yOffset = 0;
              const waveX = (x + angle * 55) % width;
              const relX = waveX / width;
              if (relX >= 0.35 && relX <= 0.55) {
                const p = (relX - 0.35) / 0.2;
                if (p < 0.25) yOffset = Math.sin(p * Math.PI * 4) * 12;
                else if (p >= 0.25 && p < 0.4) yOffset = -15;
                else if (p >= 0.4 && p < 0.55) yOffset = 68 * Math.sin((p - 0.4) / 0.15 * Math.PI);
                else if (p >= 0.55 && p < 0.7) yOffset = -25;
                else yOffset = Math.sin((p - 0.7) / 0.3 * Math.PI) * 18;
              } else {
                yOffset = Math.sin(x * 0.08 + angle * 3) * 3 + (Math.random() - 0.5) * 1.5;
              }

              const currentY = height / 2 - yOffset;
              if (x === 0) ctx.moveTo(x, currentY);
              else ctx.lineTo(x, currentY);

              if (Math.abs(waveX - width * 0.45) < 1) {
                scanHeadX = x;
                scanHeadY = currentY;
              }
            }

            ctx.strokeStyle = '#fb7185';
            ctx.lineWidth = 4;
            ctx.shadowColor = '#f43f5e';
            ctx.shadowBlur = 22;
            ctx.stroke();

            ctx.strokeStyle = '#fff1f2';
            ctx.lineWidth = 1.5;
            ctx.shadowBlur = 0;
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(scanHeadX || width / 2, scanHeadY, 5, 0, Math.PI * 2);
            ctx.fillStyle = '#ffffff';
            ctx.shadowColor = '#f43f5e';
            ctx.shadowBlur = 15;
            ctx.fill();
            ctx.shadowBlur = 0;
            break;
          }
          case 8: {
            for (let i = 0; i < 6; i++) {
              ctx.beginPath();
              for (let x = 0; x < width; x += 4) {
                const y = height / 2 + Math.sin(x * 0.025 + angle * 1.5 + i * 0.4) * (22 + i * 7);
                if (x === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
              }
              const colors = ['#facc15', '#ec4899', '#06b6d4', '#34d399', '#a855f7', '#fb923c'];
              ctx.strokeStyle = colors[i];
              ctx.lineWidth = 2.8;
              ctx.shadowColor = colors[i];
              ctx.shadowBlur = 12;
              ctx.stroke();
              ctx.shadowBlur = 0;
            }
            break;
          }
          case 9: {
            const cx = width / 2;
            for (let i = 0; i < 18; i++) {
              const px = cx + (Math.sin(angle * 2.2 + i * 0.5) * (width * 0.42));
              const py = height - (i * (height / 18)) - ((angle * 25) % height);
              const size = Math.max(2, 14 - i * 0.6);

              ctx.beginPath();
              ctx.arc(px, ((py + height) % height), size, 0, Math.PI * 2);
              ctx.fillStyle = i % 2 === 0 ? '#fb923c' : '#ef4444';
              ctx.shadowColor = '#f97316';
              ctx.shadowBlur = 18;
              ctx.fill();
              ctx.shadowBlur = 0;
            }
            break;
          }
          case 10: {
            ctx.beginPath();
            for (let x = 0; x < width; x++) {
              const y = height / 2 + Math.sin(x * 0.035 + angle * 1.2) * Math.cos(x * 0.012 - angle * 0.6) * 40;
              if (x === 0) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
            }
            ctx.strokeStyle = '#38bdf8';
            ctx.lineWidth = 3.5;
            ctx.shadowColor = '#38bdf8';
            ctx.shadowBlur = 20;
            ctx.stroke();
            ctx.shadowBlur = 0;
            break;
          }
        }
      } else {
        // --- CUSTOM NAME ANIMATIONS (1 to 20) ---
        const textToDraw = customName.trim() || 'RIDOY ISLAM';
        const cx = width / 2;
        const cy = height / 2;

        switch (selectedNameAnimId) {
          case 1: {
            ctx.font = 'bold 28px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.shadowColor = '#22d3ee';
            ctx.shadowBlur = 25;
            ctx.fillStyle = '#ffffff';
            ctx.fillText(textToDraw, cx, cy);
            ctx.shadowBlur = 0;
            break;
          }
          case 2: {
            ctx.strokeStyle = 'rgba(74, 222, 128, 0.2)';
            for (let x = 0; x < width; x += 30) {
              ctx.beginPath();
              ctx.moveTo(x, 0);
              ctx.lineTo(x, height);
              ctx.stroke();
            }
            ctx.font = 'bold 28px monospace';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.shadowColor = '#4ade80';
            ctx.shadowBlur = 20;
            ctx.fillStyle = '#4ade80';
            ctx.fillText(textToDraw, cx, cy);
            ctx.shadowBlur = 0;
            break;
          }
          case 3: {
            ctx.font = 'bold 28px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.shadowColor = '#f97316';
            ctx.shadowBlur = 25;
            ctx.fillStyle = '#fdba74';
            ctx.fillText(textToDraw, cx, cy + Math.sin(angle * 3) * 3);
            ctx.shadowBlur = 0;
            break;
          }
          case 4: {
            ctx.beginPath();
            for (let x = 0; x < width; x++) {
              const y = cy + 30 + Math.sin(x * 0.04 + angle * 2) * 15;
              if (x === 0) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
            }
            ctx.strokeStyle = '#f43f5e';
            ctx.lineWidth = 2.5;
            ctx.shadowColor = '#f43f5e';
            ctx.shadowBlur = 15;
            ctx.stroke();
            ctx.shadowBlur = 0;

            ctx.font = 'bold 26px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.shadowColor = '#fb7185';
            ctx.shadowBlur = 15;
            ctx.fillStyle = '#ffffff';
            ctx.fillText(textToDraw, cx, cy - 10);
            ctx.shadowBlur = 0;
            break;
          }
          case 5: {
            ctx.font = 'bold 28px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            const floatY = cy + Math.sin(angle * 2) * 6;
            ctx.shadowColor = '#34d399';
            ctx.shadowBlur = 30;
            ctx.fillStyle = '#6ee7b7';
            ctx.fillText(textToDraw, cx, floatY);
            ctx.shadowBlur = 0;
            break;
          }
          case 6: {
            for (let i = 0; i < 25; i++) {
              const px = (Math.sin(i * 55 + angle) * 0.5 + 0.5) * width;
              const py = (Math.cos(i * 77 + angle * 0.7) * 0.5 + 0.5) * height;
              ctx.beginPath();
              ctx.arc(px, py, 2, 0, Math.PI * 2);
              ctx.fillStyle = '#fbbf24';
              ctx.shadowColor = '#fbbf24';
              ctx.shadowBlur = 8;
              ctx.fill();
              ctx.shadowBlur = 0;
            }
            ctx.font = 'bold 28px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.shadowColor = '#fbbf24';
            ctx.shadowBlur = 20;
            ctx.fillStyle = '#fef08a';
            ctx.fillText(textToDraw, cx, cy);
            ctx.shadowBlur = 0;
            break;
          }
          case 7: {
            const glitchOffset = Math.sin(angle * 10) > 0.8 ? 4 : 0;
            ctx.font = 'bold 28px monospace';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            
            ctx.shadowColor = '#06b6d4';
            ctx.shadowBlur = 10;
            ctx.fillStyle = '#22d3ee';
            ctx.fillText(textToDraw, cx - glitchOffset, cy);

            ctx.shadowColor = '#ec4899';
            ctx.shadowBlur = 10;
            ctx.fillStyle = '#f43f5e';
            ctx.fillText(textToDraw, cx + glitchOffset, cy);
            ctx.shadowBlur = 0;
            break;
          }
          case 8: {
            const textGrad = ctx.createLinearGradient(0, 0, width, 0);
            textGrad.addColorStop(0, '#facc15');
            textGrad.addColorStop(0.3, '#ec4899');
            textGrad.addColorStop(0.7, '#06b6d4');
            textGrad.addColorStop(1, '#34d399');

            ctx.font = 'bold 28px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.shadowColor = '#ec4899';
            ctx.shadowBlur = 20;
            ctx.fillStyle = textGrad;
            ctx.fillText(textToDraw, cx, cy);
            ctx.shadowBlur = 0;
            break;
          }
          case 9: {
            ctx.beginPath();
            for (let x = 0; x < width; x++) {
              const y = cy + 35 + Math.sin(x * 0.1 + angle * 3) * 4;
              if (x === 0) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
            }
            ctx.strokeStyle = '#f43f5e';
            ctx.lineWidth = 2;
            ctx.shadowColor = '#f43f5e';
            ctx.shadowBlur = 12;
            ctx.stroke();
            ctx.shadowBlur = 0;

            ctx.font = 'bold 26px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.shadowColor = '#f43f5e';
            ctx.shadowBlur = 20;
            ctx.fillStyle = '#ffffff';
            ctx.fillText(textToDraw, cx, cy - 10);
            ctx.shadowBlur = 0;
            break;
          }
          case 10: {
            ctx.beginPath();
            for (let x = 0; x < width; x++) {
              const y = cy + Math.sin(x * 0.03 + angle) * 25;
              if (x === 0) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
            }
            ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
            ctx.lineWidth = 2;
            ctx.stroke();

            ctx.font = 'bold 28px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.shadowColor = '#38bdf8';
            ctx.shadowBlur = 25;
            ctx.fillStyle = '#bae6fd';
            ctx.fillText(textToDraw, cx, cy);
            ctx.shadowBlur = 0;
            break;
          }
          // --- Additional 10 Custom Name Animations (11 to 20) ---
          case 11: {
            // Cyberpunk Grid Name
            ctx.strokeStyle = 'rgba(6, 182, 212, 0.3)';
            ctx.lineWidth = 1;
            for (let gx = 0; gx < width; gx += 25) {
              ctx.beginPath(); ctx.moveTo(gx, height); ctx.lineTo(cx + (gx - cx) * 0.2, cy); ctx.stroke();
            }
            ctx.font = 'bold 28px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.shadowColor = '#06b6d4';
            ctx.shadowBlur = 22;
            ctx.fillStyle = '#22d3ee';
            ctx.fillText(textToDraw, cx, cy);
            ctx.shadowBlur = 0;
            break;
          }
          case 12: {
            // Cosmic Warp Star Name
            for (let i = 0; i < 30; i++) {
              const px = (Math.sin(i * 44 + angle * 2) * 0.5 + 0.5) * width;
              const py = (Math.cos(i * 66 + angle * 1.5) * 0.5 + 0.5) * height;
              ctx.beginPath(); ctx.arc(px, py, 2.5, 0, Math.PI * 2);
              ctx.fillStyle = '#f59e0b'; ctx.shadowColor = '#f59e0b'; ctx.shadowBlur = 10; ctx.fill(); ctx.shadowBlur = 0;
            }
            ctx.font = 'bold 28px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.shadowColor = '#fbbf24';
            ctx.shadowBlur = 25;
            ctx.fillStyle = '#ffffff';
            ctx.fillText(textToDraw, cx, cy);
            ctx.shadowBlur = 0;
            break;
          }
          case 13: {
            // Liquid Chrome Name
            const chromeGrad = ctx.createLinearGradient(0, cy - 20, 0, cy + 20);
            chromeGrad.addColorStop(0, '#e2e8f0');
            chromeGrad.addColorStop(0.5, '#64748b');
            chromeGrad.addColorStop(1, '#cbd5e1');

            ctx.font = 'bold 28px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.shadowColor = '#94a3b8';
            ctx.shadowBlur = 18;
            ctx.fillStyle = chromeGrad;
            ctx.fillText(textToDraw, cx, cy);
            ctx.shadowBlur = 0;
            break;
          }
          case 14: {
            // Tesla Lightning Name
            ctx.beginPath();
            ctx.moveTo(cx - 100, cy + Math.sin(angle * 5) * 15);
            ctx.lineTo(cx - 40, cy - 25);
            ctx.lineTo(cx + 10, cy + 20);
            ctx.lineTo(cx + 70, cy - 15);
            ctx.lineTo(cx + 120, cy + Math.cos(angle * 4) * 15);
            ctx.strokeStyle = '#38bdf8';
            ctx.lineWidth = 2.5;
            ctx.shadowColor = '#0284c7';
            ctx.shadowBlur = 16;
            ctx.stroke();
            ctx.shadowBlur = 0;

            ctx.font = 'bold 28px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.shadowColor = '#38bdf8';
            ctx.shadowBlur = 20;
            ctx.fillStyle = '#ffffff';
            ctx.fillText(textToDraw, cx, cy);
            ctx.shadowBlur = 0;
            break;
          }
          case 15: {
            // Aurora Borealis Name
            for (let i = 0; i < 4; i++) {
              ctx.beginPath();
              for (let x = 0; x < width; x += 5) {
                const y = cy + Math.sin(x * 0.02 + angle + i * 0.5) * 20 + i * 8;
                if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
              }
              ctx.strokeStyle = i % 2 === 0 ? 'rgba(45, 212, 191, 0.4)' : 'rgba(52, 211, 153, 0.4)';
              ctx.lineWidth = 3; ctx.stroke();
            }
            ctx.font = 'bold 28px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.shadowColor = '#2dd4bf';
            ctx.shadowBlur = 25;
            ctx.fillStyle = '#5eead4';
            ctx.fillText(textToDraw, cx, cy);
            ctx.shadowBlur = 0;
            break;
          }
          case 16: {
            // Solar Flare Crown Name
            const r = 50 + Math.sin(angle * 3) * 8;
            const grad = ctx.createRadialGradient(cx, cy, 5, cx, cy, r);
            grad.addColorStop(0, 'rgba(249, 115, 22, 0.4)');
            grad.addColorStop(1, 'transparent');
            ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fillStyle = grad; ctx.fill();

            ctx.font = 'bold 28px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.shadowColor = '#f97316';
            ctx.shadowBlur = 25;
            ctx.fillStyle = '#ffedd5';
            ctx.fillText(textToDraw, cx, cy);
            ctx.shadowBlur = 0;
            break;
          }
          case 17: {
            // Hyper Bass Shockwave Name
            for (let ring = 1; ring <= 3; ring++) {
              const r = ((angle * 40 + ring * 35) % 150);
              ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2);
              ctx.strokeStyle = `rgba(236, 72, 153, ${Math.max(0, 1 - r / 150)})`;
              ctx.lineWidth = 2; ctx.stroke();
            }
            ctx.font = 'bold 28px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.shadowColor = '#ec4899';
            ctx.shadowBlur = 25;
            ctx.fillStyle = '#ffffff';
            ctx.fillText(textToDraw, cx, cy);
            ctx.shadowBlur = 0;
            break;
          }
          case 18: {
            // Binary Code Stream Name
            ctx.font = '12px monospace';
            ctx.fillStyle = 'rgba(74, 222, 128, 0.35)';
            for (let i = 0; i < 12; i++) {
              const bx = (i * 35 + angle * 20) % width;
              const by = (i * 15 + Math.sin(i) * 50 + height) % height;
              ctx.fillText(i % 2 === 0 ? '10101' : '01101', bx, by);
            }

            ctx.font = 'bold 28px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.shadowColor = '#4ade80';
            ctx.shadowBlur = 22;
            ctx.fillStyle = '#4ade80';
            ctx.fillText(textToDraw, cx, cy);
            ctx.shadowBlur = 0;
            break;
          }
          case 19: {
            // Neon EKG Pulse Pro Name
            ctx.beginPath();
            for (let x = 0; x < width; x++) {
              const y = cy + 40 + (x % 70 === 0 ? -25 : Math.sin(x * 0.1) * 3);
              if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
            }
            ctx.strokeStyle = '#f43f5e'; ctx.lineWidth = 2; ctx.shadowColor = '#f43f5e'; ctx.shadowBlur = 10; ctx.stroke(); ctx.shadowBlur = 0;

            ctx.font = 'bold 28px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.shadowColor = '#f43f5e';
            ctx.shadowBlur = 25;
            ctx.fillStyle = '#ffffff';
            ctx.fillText(textToDraw, cx, cy - 10);
            ctx.shadowBlur = 0;
            break;
          }
          case 20: {
            // Galaxy Nebula Spiral Name
            const cx = width / 2; const cy = height / 2;
            for (let i = 8; i > 0; i--) {
              const rad = i * 16 + Math.sin(angle + i * 0.3) * 10;
              ctx.beginPath(); ctx.ellipse(cx, cy, rad * 2, rad * 0.8, angle * 0.3, 0, Math.PI * 2);
              ctx.strokeStyle = i % 2 === 0 ? 'rgba(217, 70, 239, 0.4)' : 'rgba(56, 189, 248, 0.4)';
              ctx.lineWidth = 1.5; ctx.stroke();
            }
            ctx.font = 'bold 28px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.shadowColor = '#d946ef';
            ctx.shadowBlur = 25;
            ctx.fillStyle = '#f0abfc';
            ctx.fillText(textToDraw, cx, cy);
            ctx.shadowBlur = 0;
            break;
          }
        }
      }

      if (isPlayingAnim) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [selectedAnimationId, animationCategory, selectedNameAnimId, customName, isPlayingAnim]);

  const currentAnim = animationCategory === 'visual'
    ? (SONG_DOWNLOAD_ANIMATIONS.find((a) => a.id === selectedAnimationId) || SONG_DOWNLOAD_ANIMATIONS[0])
    : (CUSTOM_NAME_ANIMATIONS.find((a) => a.id === selectedNameAnimId) || CUSTOM_NAME_ANIMATIONS[0]);

  return (
    <div className="bg-[#151619] border border-[#2A2B2E] rounded-xl p-5 shadow-xl mt-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
        <div>
          <h3 className="text-white font-bold text-sm uppercase tracking-wide flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Song Download & Render Animations</span>
          </h3>
          <p className="text-[#8E9299] text-xs mt-0.5">
            Choose from 10 visual spectrum animations or 20 custom name text animations.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlayingAnim(!isPlayingAnim)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2A2B2E] hover:bg-[#3A3C42] text-xs font-medium text-cyan-300 border border-[#3A3C42] transition cursor-pointer"
          >
            {isPlayingAnim ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            {isPlayingAnim ? 'Pause Preview' : 'Play Preview'}
          </button>
        </div>
      </div>

      {/* Category Tabs: Visual vs Custom Name (20 items) */}
      <div className="flex items-center gap-2 mb-4 bg-[#0d0e12] p-1.5 rounded-xl border border-[#2A2B2E]">
        <button
          onClick={() => setAnimationCategory('visual')}
          className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer ${
            animationCategory === 'visual'
              ? 'bg-cyan-600 text-white shadow-lg'
              : 'text-[#8E9299] hover:text-white hover:bg-[#1a1b1f]'
          }`}
        >
          <Activity className="w-3.5 h-3.5" />
          <span>১০টি ভিজ্যুয়াল অ্যানিমেশন (Visuals)</span>
        </button>
        <button
          onClick={() => setAnimationCategory('name')}
          className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer ${
            animationCategory === 'name'
              ? 'bg-purple-600 text-white shadow-lg'
              : 'text-[#8E9299] hover:text-white hover:bg-[#1a1b1f]'
          }`}
        >
          <User className="w-3.5 h-3.5" />
          <span>২০টি কাস্টম নেম অ্যানিমেশন (20 Custom Names)</span>
        </button>
      </div>

      {/* If Name Category is selected, show Custom Name Input */}
      {animationCategory === 'name' && (
        <div className="mb-4 p-3 rounded-xl bg-[#0d0e12] border border-[#2A2B2E] flex flex-col sm:flex-row items-center gap-3">
          <div className="flex items-center gap-2 text-xs text-purple-400 font-bold flex-shrink-0">
            <Type className="w-4 h-4" />
            <span>আপনার নাম লিখুন (Custom Name):</span>
          </div>
          <input
            type="text"
            value={customName}
            onChange={(e) => setCustomName(e.target.value)}
            placeholder="Enter your name or DJ title..."
            className="w-full bg-[#151619] border border-[#3A3C42] rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-purple-500 font-mono"
          />
        </div>
      )}

      {/* Live Preview Canvas Screen */}
      <div className="relative rounded-xl overflow-hidden border border-[#2A2B2E] bg-[#0d0e12] shadow-inner mb-4">
        <canvas ref={canvasRef} className="w-full h-[180px] block" />
        <div className="absolute top-3 left-3 bg-[#151619]/80 backdrop-blur-md px-3 py-1 rounded-lg border border-[#2A2B2E] flex items-center gap-2 text-xs">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
          <span className="text-white font-bold">{currentAnim.name}</span>
          <span className="text-[#8E9299]">({currentAnim.bengaliName})</span>
          {animationCategory === 'name' && (
            <span className="text-purple-400 font-mono font-bold">[{customName || 'NAME'}]</span>
          )}
        </div>
        {isDownloading && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center p-4">
            <div className="w-12 h-12 rounded-full border-4 border-cyan-500 border-t-transparent animate-spin mb-3"></div>
            <p className="text-white font-bold text-sm">Downloading song with {currentAnim.name}...</p>
            <p className="text-cyan-400 font-mono text-xs mt-1">{downloadProgress}% Completed</p>
          </div>
        )}
      </div>

      {/* Animation Selector Grid (10 visual or 20 name items) */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 max-h-[320px] overflow-y-auto pr-1">
        {animationCategory === 'visual' ? (
          SONG_DOWNLOAD_ANIMATIONS.map((anim) => {
            const IconComp = anim.icon;
            const isSelected = anim.id === selectedAnimationId;
            return (
              <button
                key={anim.id}
                onClick={() => onSelectAnimation(anim.id)}
                className={`flex flex-col items-center text-center p-3 rounded-xl border transition cursor-pointer ${
                  isSelected
                    ? 'bg-cyan-500/15 border-cyan-500 text-white shadow-lg shadow-cyan-500/10'
                    : 'bg-[#1a1b1f] hover:bg-[#222328] border-[#2A2B2E] text-gray-300'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${anim.colorClass} flex items-center justify-center text-white mb-2 shadow`}>
                  <IconComp className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold line-clamp-1">{anim.name}</span>
                <span className="text-[10px] text-[#8E9299] line-clamp-1 mt-0.5">{anim.bengaliName}</span>
              </button>
            );
          })
        ) : (
          CUSTOM_NAME_ANIMATIONS.map((anim) => {
            const IconComp = anim.icon;
            const isSelected = anim.id === selectedNameAnimId;
            return (
              <button
                key={anim.id}
                onClick={() => setSelectedNameAnimId(anim.id)}
                className={`flex flex-col items-center text-center p-3 rounded-xl border transition cursor-pointer ${
                  isSelected
                    ? 'bg-purple-500/15 border-purple-500 text-white shadow-lg shadow-purple-500/10'
                    : 'bg-[#1a1b1f] hover:bg-[#222328] border-[#2A2B2E] text-gray-300'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${anim.colorClass} flex items-center justify-center text-white mb-2 shadow`}>
                  <IconComp className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold line-clamp-1">{anim.name}</span>
                <span className="text-[10px] text-[#8E9299] line-clamp-1 mt-0.5">{anim.bengaliName}</span>
              </button>
            );
          })
        )}
      </div>
    </div>
  );
}
