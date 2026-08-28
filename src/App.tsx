import { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { AudioInputSelector } from './components/AudioInputSelector';
import { EffectCategories } from './components/EffectCategories';
import { EffectGrid } from './components/EffectGrid';
import { AudioPlayer } from './components/AudioPlayer';
import { AdBanner } from './components/AdBanner';
import { AdMonetizationModal } from './components/AdMonetizationModal';
import { VOICE_EFFECTS } from './data/effects';
import { VoiceEffect } from './types';
import { audioEngine } from './utils/audioEngine';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedEffect, setSelectedEffect] = useState<VoiceEffect | null>(VOICE_EFFECTS[0]);
  const [audioBuffer, setAudioBuffer] = useState<ArrayBuffer | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [activeInputType, setActiveInputType] = useState<'file' | 'mic' | null>(null);

  // Monetization & Ad Revenue State
  const [isMonetizationOpen, setIsMonetizationOpen] = useState<boolean>(false);
  const [publisherId, setPublisherId] = useState<string>('ca-pub-9876543210123456');
  const [adStats, setAdStats] = useState({
    impressions: 48,
    clicks: 6,
    earnings: 2.45
  });

  const handleAdImpression = () => {
    setAdStats(prev => ({
      ...prev,
      impressions: prev.impressions + 1,
      earnings: prev.earnings + 0.01
    }));
  };

  const handleAdClick = () => {
    setAdStats(prev => ({
      ...prev,
      clicks: prev.clicks + 1,
      earnings: prev.earnings + 0.05
    }));
  };

  // Filter effects based on category and search query
  const filteredEffects = useMemo(() => {
    return VOICE_EFFECTS.filter((effect) => {
      const matchesCategory = selectedCategory === 'all' || effect.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        effect.name.toLowerCase().includes(query) ||
        effect.bengaliName.toLowerCase().includes(query) ||
        effect.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleAudioReady = (buffer: ArrayBuffer, name: string) => {
    setAudioBuffer(buffer);
    setFileName(name);
  };

  const handleMicStreamStart = () => {
    setFileName('Live Microphone Stream');
    setActiveInputType('mic');
  };

  const handleStopAudio = () => {
    audioEngine.stopAudio();
  };

  const handleSelectEffect = (effect: VoiceEffect) => {
    setSelectedEffect(effect);
  };

  return (
    <div className="min-h-screen bg-[#0A0B0D] text-gray-100 font-sans pb-16">
      {/* Header */}
      <Header
        onOpenMonetization={() => setIsMonetizationOpen(true)}
        earnings={adStats.earnings}
      />

      {/* Main Content Container with Sidebar Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Top Sponsor Ad Banner */}
        <AdBanner
          publisherId={publisherId}
          onAdImpression={handleAdImpression}
          onAdClick={handleAdClick}
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar: Audio Input & Recording */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-[#151619] border border-[#2A2B2E] rounded-xl p-5 shadow-lg">
              <h2 className="text-xs font-bold tracking-wider text-gray-300 uppercase mb-4 flex items-center justify-between">
                <span>Audio Source</span>
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              </h2>
              <AudioInputSelector
                onAudioReady={handleAudioReady}
                onMicStreamStart={handleMicStreamStart}
                onStopAudio={handleStopAudio}
                activeInputType={activeInputType}
                setActiveInputType={setActiveInputType}
              />
            </div>
          </aside>

          {/* Right Main Panel: Categories, Search, and Effect Grid */}
          <section className="lg:col-span-3 space-y-6">
            <div className="bg-[#151619] border border-[#2A2B2E] rounded-xl p-6 shadow-lg">
              <EffectCategories
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
              />

              <div className="flex items-center justify-between mb-4 pt-4 border-t border-[#2A2B2E]">
                <h3 className="text-white font-bold text-sm uppercase tracking-wide flex items-center gap-2">
                  <span>Voice Effects Library</span>
                  <span className="text-[10px] font-mono text-[#8E9299] bg-[#2A2B2E] px-2.5 py-0.5 rounded border border-[#3A3C42]">
                    {filteredEffects.length} Available
                  </span>
                </h3>
                {selectedEffect && (
                  <div className="text-xs text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded border border-cyan-500/20 font-mono">
                    Active: <span className="text-white font-bold">{selectedEffect.name}</span>
                  </div>
                )}
              </div>

              <EffectGrid
                effects={filteredEffects}
                selectedEffect={selectedEffect}
                onSelectEffect={handleSelectEffect}
              />
            </div>
          </section>
        </div>

        {/* Rewarded Ad Slot for Creator Earning */}
        <AdBanner
          adType="rewarded"
          publisherId={publisherId}
          onAdImpression={handleAdImpression}
          onAdClick={handleAdClick}
        />

        {/* Audio Player & Download Panel */}
        <AudioPlayer
          selectedEffect={selectedEffect}
          audioBuffer={audioBuffer}
          fileName={fileName}
          activeInputType={activeInputType}
        />
      </main>

      {/* Ad Monetization Modal */}
      <AdMonetizationModal
        isOpen={isMonetizationOpen}
        onClose={() => setIsMonetizationOpen(false)}
        stats={adStats}
        currentPublisherId={publisherId}
        onUpdatePublisherId={setPublisherId}
      />

        


    </div>
  );
}

