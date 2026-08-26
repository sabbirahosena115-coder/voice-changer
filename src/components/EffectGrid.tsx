import { VoiceEffect } from '../types';
import { Sparkles, Film, Globe, Radio, Users, Skull, Smile, Zap, Cpu, Ghost, Disc, Shield, Flame, User, UserX, Baby, Gamepad } from 'lucide-react';

interface EffectGridProps {
  effects: VoiceEffect[];
  selectedEffect: VoiceEffect | null;
  onSelectEffect: (effect: VoiceEffect) => void;
}

const effectIconMap: Record<string, any> = {
  Sparkles,
  Film,
  Globe,
  Radio,
  Users,
  Skull,
  Smile,
  Zap,
  Cpu,
  Ghost,
  Disc,
  Shield,
  Flame,
  User,
  UserX,
  Baby,
  Gamepad
};

export function EffectGrid({
  effects,
  selectedEffect,
  onSelectEffect
}: EffectGridProps) {
  if (effects.length === 0) {
    return (
      <div className="text-center py-16 bg-[#151619] border border-[#2A2B2E] rounded-xl">
        <Skull className="w-12 h-12 text-[#5C5F66] mx-auto mb-3" />
        <h3 className="text-gray-300 font-medium text-sm">কোনো ভয়েস ইফেক্ট পাওয়া যায়নি</h3>
        <p className="text-[#8E9299] text-xs mt-1">অন্য কোনো নাম দিয়ে সার্চ করুন।</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {effects.map((effect) => {
        const IconComponent = effectIconMap[effect.iconName] || Sparkles;
        const isSelected = selectedEffect?.id === effect.id;

        return (
          <div
            key={effect.id}
            onClick={() => onSelectEffect(effect)}
            className={`group relative rounded-xl p-4 transition-all duration-200 cursor-pointer border ${
              isSelected
                ? 'bg-[#1D1E22] border-cyan-500 shadow-lg shadow-cyan-500/10'
                : 'bg-[#151619] hover:bg-[#1D1E22] border-[#2A2B2E] hover:border-[#3A3C42]'
            }`}
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 ${
                isSelected
                  ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/30 font-bold'
                  : 'bg-[#2A2B2E] text-cyan-400 border border-[#3A3C42]'
              }`}>
                <IconComponent className="w-5 h-5" />
              </div>

              {isSelected && (
                <span className="text-[10px] uppercase tracking-wider font-bold bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded border border-cyan-500/30">
                  Active
                </span>
              )}
            </div>

            <h3 className="text-white font-semibold text-sm mb-1 line-clamp-1 group-hover:text-cyan-300 transition">
              {effect.bengaliName}
            </h3>
            <p className="text-[#8E9299] text-xs line-clamp-2 leading-relaxed">
              {effect.description}
            </p>

            {/* Parameter badges */}
            <div className="mt-4 pt-3 border-t border-[#2A2B2E] flex items-center gap-1.5 flex-wrap">
              {effect.params.pitch !== undefined && effect.params.pitch !== 0 && (
                <span className="text-[10px] bg-[#2A2B2E] text-gray-300 px-2 py-0.5 rounded border border-[#3A3C42]">
                  Pitch: {effect.params.pitch > 0 ? `+${effect.params.pitch}` : effect.params.pitch}
                </span>
              )}
              {effect.params.reverbWet !== undefined && effect.params.reverbWet > 0 && (
                <span className="text-[10px] bg-purple-950/50 text-purple-300 px-2 py-0.5 rounded border border-purple-800/50">
                  Reverb
                </span>
              )}
              {effect.params.distortion !== undefined && effect.params.distortion > 0 && (
                <span className="text-[10px] bg-amber-950/50 text-amber-300 px-2 py-0.5 rounded border border-amber-800/50">
                  Distortion
                </span>
              )}
              {effect.params.chorusDepth !== undefined && effect.params.chorusDepth > 0 && (
                <span className="text-[10px] bg-emerald-950/50 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800/50">
                  Chorus
                </span>
              )}
              {effect.params.bitDepth !== undefined && effect.params.bitDepth < 16 && (
                <span className="text-[10px] bg-rose-950/50 text-rose-300 px-2 py-0.5 rounded border border-rose-800/50">
                  {effect.params.bitDepth}-Bit
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

