import { Mic2, Radio, Sparkles, DollarSign } from 'lucide-react';

interface HeaderProps {
  onOpenMonetization: () => void;
  earnings: number;
}

export function Header({ onOpenMonetization, earnings }: HeaderProps) {
  return (
    <header className="bg-[#151619] border-b border-[#2A2B2E] text-white sticky top-0 z-30 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Mic2 className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-wider text-white flex items-center gap-2 uppercase">
              VOX-MOD v2.0 <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-mono">100+ FX</span>
            </h1>
            <p className="text-[11px] text-[#8E9299]">Client-Side Voice Changer & Web Audio Studio</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          {/* Monetization Earning Button */}
          <button
            onClick={onOpenMonetization}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 text-xs font-bold transition cursor-pointer shadow-sm"
          >
            <DollarSign className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span>${earnings.toFixed(2)} USD</span>
            <span className="hidden md:inline text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-200">Monetization</span>
          </button>

          <div className="hidden sm:flex items-center space-x-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#2A2B2E] border border-[#3A3C42] text-xs text-gray-300 font-mono">
              <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>Studio Ready</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-cyan-300 font-medium bg-cyan-500/10 px-3 py-1.5 rounded-lg border border-cyan-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Zero Latency</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

