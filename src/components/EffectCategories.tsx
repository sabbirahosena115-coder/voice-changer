import { CATEGORIES } from '../data/effects';
import { Search, Sparkles, Film, Globe, Radio, Users, Skull, Smile, Baby, Gamepad } from 'lucide-react';

interface EffectCategoriesProps {
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const categoryIconMap: Record<string, any> = {
  Sparkles,
  Film,
  Globe,
  Radio,
  Users,
  Skull,
  Smile,
  Baby,
  Gamepad
};

export function EffectCategories({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange
}: EffectCategoriesProps) {
  return (
    <div className="space-y-4 mb-6">
      {/* Category Tabs */}
      <nav className="flex gap-4 border-b border-[#2A2B2E] pb-4 overflow-x-auto no-scrollbar">
        <button
          onClick={() => onSelectCategory('all')}
          className={`whitespace-nowrap pb-2 text-sm font-bold transition cursor-pointer flex items-center gap-1.5 ${
            selectedCategory === 'all'
              ? 'border-b-2 border-cyan-500 text-white'
              : 'text-[#5C5F66] hover:text-white'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>ALL EFFECTS (100+)</span>
        </button>

        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          const CatIcon = categoryIconMap[cat.icon] || Sparkles;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`whitespace-nowrap pb-2 text-sm font-medium transition uppercase cursor-pointer flex items-center gap-1.5 ${
                isSelected
                  ? 'border-b-2 border-cyan-500 text-white font-bold'
                  : 'text-[#5C5F66] hover:text-white'
              }`}
            >
              <CatIcon className={`w-3.5 h-3.5 ${isSelected ? 'text-cyan-400' : 'text-[#5C5F66]'}`} />
              <span>{cat.title}</span>
            </button>
          );
        })}
      </nav>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8E9299]" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search 100+ voice effects (e.g., Chipmunk, Alien, Robot, Vader...)"
          className="w-full bg-[#151619] border border-[#2A2B2E] rounded-xl pl-11 pr-4 py-2.5 text-xs text-white placeholder-[#5C5F66] focus:outline-none focus:border-cyan-500 transition shadow-inner font-mono"
        />
      </div>
    </div>
  );
}

