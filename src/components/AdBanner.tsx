import React, { useState } from 'react';
import { DollarSign, ExternalLink, X, Eye } from 'lucide-react';

interface AdBannerProps {
  adType?: 'banner' | 'native' | 'rewarded';
  publisherId?: string;
  onAdImpression?: () => void;
  onAdClick?: () => void;
}

export function AdBanner({ adType = 'banner', publisherId = 'ca-pub-XXXXXXXXXXXXXXXX', onAdImpression, onAdClick }: AdBannerProps) {
  const [dismissed, setDismissed] = useState(false);
  const [clicked, setClicked] = useState(false);

  React.useEffect(() => {
    if (onAdImpression) {
      onAdImpression();
    }
  }, []);

  const handleClick = () => {
    setClicked(true);
    if (onAdClick) {
      onAdClick();
    }
  };

  if (dismissed) return null;

  if (adType === 'rewarded') {
    return (
      <div className="bg-gradient-to-r from-amber-600/20 via-purple-600/20 to-cyan-600/20 border border-amber-500/40 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 my-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
            <DollarSign className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <span>Rewarded Ad Slot (রওয়ার্ডেড অ্যাড)</span>
              <span className="text-[10px] font-mono bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">AdSense / AdMob</span>
            </h4>
            <p className="text-xs text-gray-300">Watch short sponsored clip or test ad to earn bonus creator credits ($0.05 per view).</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleClick}
            className="px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs transition cursor-pointer shadow-lg shadow-amber-600/30 flex items-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5" />
            {clicked ? 'Ad Watched! (+$0.05)' : 'Watch Sponsor Ad'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative my-4 rounded-xl border border-dashed border-[#3A3C42] bg-[#121316] p-3 text-center overflow-hidden">
      <div className="absolute top-2 right-2 flex items-center gap-1">
        <span className="text-[9px] font-mono uppercase bg-[#2A2B2E] text-[#8E9299] px-1.5 py-0.5 rounded">
          AdSense Sponsor Space
        </span>
        <button
          onClick={() => setDismissed(true)}
          className="text-[#8E9299] hover:text-white p-0.5 transition cursor-pointer"
          title="Close Ad"
        >
          <X className="w-3 h-3" />
        </button>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 py-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-xs font-bold text-gray-200">VOX-MOD Pro Audio Sponsorship Banner</span>
        </div>
        <p className="text-[11px] text-[#8E9299]">
          Publisher: <code className="text-cyan-400">{publisherId}</code>
        </p>
        <button
          onClick={handleClick}
          className="px-3 py-1 bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 border border-cyan-500/30 text-xs font-bold rounded transition cursor-pointer flex items-center gap-1"
        >
          <span>{clicked ? 'Visited Sponsor!' : 'Learn More'}</span>
          <ExternalLink className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
