import React, { useState, useEffect } from 'react';
import { X, DollarSign, TrendingUp, Settings, ShieldCheck, BarChart3, Copy, Check, ExternalLink, Sparkles, Coins, Users } from 'lucide-react';

interface AdMonetizationModalProps {
  isOpen: boolean;
  onClose: () => void;
  stats: {
    impressions: number;
    clicks: number;
    earnings: number;
  };
  onUpdatePublisherId: (id: string) => void;
  currentPublisherId: string;
}

export function AdMonetizationModal({
  isOpen,
  onClose,
  stats,
  onUpdatePublisherId,
  currentPublisherId
}: AdMonetizationModalProps) {
  const [pubIdInput, setPubIdInput] = useState(currentPublisherId);
  const [copied, setCopied] = useState(false);
  const [adNetwork, setAdNetwork] = useState<'adsense' | 'adsterra' | 'monetag'>('adsense');
  const [activeTab, setActiveTab] = useState<'dashboard' | 'settings' | 'guide'>('dashboard');

  useEffect(() => {
    setPubIdInput(currentPublisherId);
  }, [currentPublisherId]);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdatePublisherId(pubIdInput);
    alert('Ad Publisher ID updated successfully! Ads are now integrated.');
  };

  const copyAdCode = () => {
    const code = `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${currentPublisherId}" crossorigin="anonymous"></script>`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-[#151619] border border-[#2A2B2E] rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl animate-fadeIn">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#2A2B2E] bg-[#1A1C20]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <DollarSign className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h2 className="text-white font-bold text-base flex items-center gap-2">
                <span>Ad Monetization & Earning Studio</span>
                <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">Active</span>
              </h2>
              <p className="text-xs text-[#8E9299]">ইনকাম করার জন্য গুগল অ্যাডসেন্স ও বিজ্ঞাপন ম্যানেজমেন্ট সিস্টেম</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#8E9299] hover:text-white p-2 rounded-lg hover:bg-[#2A2B2E] transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-[#2A2B2E] bg-[#121316] px-6 gap-6">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`py-3 text-xs font-bold transition border-b-2 cursor-pointer flex items-center gap-2 ${
              activeTab === 'dashboard'
                ? 'border-emerald-500 text-emerald-400'
                : 'border-transparent text-[#8E9299] hover:text-white'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Earnings Dashboard (আয় রিপোর্ট)</span>
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`py-3 text-xs font-bold transition border-b-2 cursor-pointer flex items-center gap-2 ${
              activeTab === 'settings'
                ? 'border-emerald-500 text-emerald-400'
                : 'border-transparent text-[#8E9299] hover:text-white'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>Ad Network Settings (অ্যাড সেটআপ)</span>
          </button>
          <button
            onClick={() => setActiveTab('guide')}
            className={`py-3 text-xs font-bold transition border-b-2 cursor-pointer flex items-center gap-2 ${
              activeTab === 'guide'
                ? 'border-emerald-500 text-emerald-400'
                : 'border-transparent text-[#8E9299] hover:text-white'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Monetization Guide (গাইডলাইন)</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#1D1E22] border border-[#2A2B2E] rounded-xl p-4">
                  <div className="flex items-center justify-between text-[#8E9299] text-xs mb-2">
                    <span>Total Earnings</span>
                    <Coins className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-2xl font-bold text-white font-mono">
                    ${stats.earnings.toFixed(2)}
                  </div>
                  <p className="text-[10px] text-emerald-400 mt-1 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> ~ ৳{(stats.earnings * 118).toFixed(0)} BDT
                  </p>
                </div>

                <div className="bg-[#1D1E22] border border-[#2A2B2E] rounded-xl p-4">
                  <div className="flex items-center justify-between text-[#8E9299] text-xs mb-2">
                    <span>Ad Impressions</span>
                    <BarChart3 className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="text-2xl font-bold text-white font-mono">
                    {stats.impressions}
                  </div>
                  <p className="text-[10px] text-cyan-400 mt-1">Active banner views</p>
                </div>

                <div className="bg-[#1D1E22] border border-[#2A2B2E] rounded-xl p-4">
                  <div className="flex items-center justify-between text-[#8E9299] text-xs mb-2">
                    <span>Ad Clicks / CTR</span>
                    <Users className="w-4 h-4 text-purple-400" />
                  </div>
                  <div className="text-2xl font-bold text-white font-mono">
                    {stats.clicks} <span className="text-xs text-[#8E9299]">({((stats.clicks / (stats.impressions || 1)) * 100).toFixed(1)}%)</span>
                  </div>
                  <p className="text-[10px] text-purple-400 mt-1">User engagement</p>
                </div>
              </div>

              {/* Status Banner */}
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">✓</div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Ad Monetization is LIVE</h4>
                    <p className="text-xs text-gray-300">Your publisher ID <code>{currentPublisherId}</code> is currently generating revenue from user audio edits & exports.</p>
                  </div>
                </div>
                <button
                  onClick={() => alert('Payout request sent! Minimum payout threshold is $100.00 USD.')}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-lg transition cursor-pointer shadow"
                >
                  Request Payout
                </button>
              </div>

              {/* Tips for Higher Income */}
              <div className="bg-[#1D1E22] border border-[#2A2B2E] rounded-xl p-4 space-y-2">
                <h4 className="text-xs font-bold text-gray-200 uppercase tracking-wider flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>How to Maximize Your Earnings (ইনকাম বাড়ানোর টিপস)</span>
                </h4>
                <ul className="text-xs text-[#8E9299] space-y-1.5 list-disc pl-4">
                  <li>Share your web app link on social media (Facebook, YouTube, TikTok) to get thousands of daily visitors.</li>
                  <li>Enable Rewarded Ad slots so users watch sponsored ads before downloading high-quality WAV files.</li>
                  <li>Place Google AdSense Auto Ads or Banner Ads in strategic header and sidebar locations.</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <form onSubmit={handleSave} className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-300">Select Ad Network (অ্যাড নেটওয়ার্ক)</label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setAdNetwork('adsense')}
                    className={`p-3 rounded-xl border text-xs font-bold transition cursor-pointer flex flex-col items-center gap-1 ${
                      adNetwork === 'adsense'
                        ? 'bg-emerald-600/20 border-emerald-500 text-emerald-300'
                        : 'bg-[#1D1E22] border-[#2A2B2E] text-[#8E9299] hover:text-white'
                    }`}
                  >
                    <span>Google AdSense</span>
                    <span className="text-[9px] font-normal text-gray-400">Recommended</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setAdNetwork('adsterra')}
                    className={`p-3 rounded-xl border text-xs font-bold transition cursor-pointer flex flex-col items-center gap-1 ${
                      adNetwork === 'adsterra'
                        ? 'bg-emerald-600/20 border-emerald-500 text-emerald-300'
                        : 'bg-[#1D1E22] border-[#2A2B2E] text-[#8E9299] hover:text-white'
                    }`}
                  >
                    <span>Adsterra</span>
                    <span className="text-[9px] font-normal text-gray-400">Popunder / Banners</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setAdNetwork('monetag')}
                    className={`p-3 rounded-xl border text-xs font-bold transition cursor-pointer flex flex-col items-center gap-1 ${
                      adNetwork === 'monetag'
                        ? 'bg-emerald-600/20 border-emerald-500 text-emerald-300'
                        : 'bg-[#1D1E22] border-[#2A2B2E] text-[#8E9299] hover:text-white'
                    }`}
                  >
                    <span>Monetag</span>
                    <span className="text-[9px] font-normal text-gray-400">Rewarded / Interstitial</span>
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-300">
                  {adNetwork === 'adsense' ? 'Google AdSense Publisher ID (ca-pub-xxxxxxxx)' : 'Ad Network Zone ID / API Key'}
                </label>
                <input
                  type="text"
                  value={pubIdInput}
                  onChange={(e) => setPubIdInput(e.target.value)}
                  placeholder="ca-pub-1234567890123456"
                  className="w-full bg-[#1D1E22] border border-[#2A2B2E] rounded-xl px-4 py-2.5 text-xs text-white font-mono focus:outline-none focus:border-emerald-500"
                  required
                />
                <p className="text-[11px] text-[#8E9299]">
                  Enter your verified publisher ID to start showing live ads and earning revenue.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <label className="text-xs font-bold text-gray-300">Generated Ad Integration Code Snippet</label>
                <div className="relative bg-[#0D0E11] border border-[#2A2B2E] rounded-xl p-3 font-mono text-[11px] text-emerald-400 overflow-x-auto">
                  <code>{`<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${pubIdInput}" crossorigin="anonymous"></script>`}</code>
                  <button
                    type="button"
                    onClick={copyAdCode}
                    className="absolute top-2 right-2 bg-[#2A2B2E] hover:bg-[#3A3C42] text-gray-200 px-2.5 py-1 rounded text-[10px] font-sans flex items-center gap-1 transition cursor-pointer"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl bg-[#2A2B2E] hover:bg-[#3A3C42] text-gray-200 text-xs font-bold transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition cursor-pointer shadow-lg shadow-emerald-600/30"
                >
                  Save & Activate Ads
                </button>
              </div>
            </form>
          )}

          {activeTab === 'guide' && (
            <div className="space-y-4 text-xs text-[#8E9299] leading-relaxed">
              <div className="bg-[#1D1E22] border border-[#2A2B2E] rounded-xl p-4 space-y-2">
                <h4 className="text-white font-bold text-sm">Step 1: Create a Google AdSense Account</h4>
                <p>Go to <a href="https://adsense.google.com" target="_blank" rel="noreferrer" className="text-emerald-400 underline flex items-center gap-1 inline-flex"><span>Google AdSense</span> <ExternalLink className="w-3 h-3" /></a> and sign up with your Google account. Submit your web app URL for site approval.</p>
              </div>

              <div className="bg-[#1D1E22] border border-[#2A2B2E] rounded-xl p-4 space-y-2">
                <h4 className="text-white font-bold text-sm">Step 2: Get Your Publisher ID</h4>
                <p>Once approved, locate your Publisher ID in your AdSense account settings (e.g., <code>ca-pub-9876543210987654</code>) and paste it into the <strong>Ad Network Settings</strong> tab above.</p>
              </div>

              <div className="bg-[#1D1E22] border border-[#2A2B2E] rounded-xl p-4 space-y-2">
                <h4 className="text-white font-bold text-sm">Step 3: Earn Revenue on Every Audio Export</h4>
                <p>When users convert their voices using 100+ effects and download WAV files, banner impressions and rewarded ad views generate real ad revenue directly into your AdSense account dashboard.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
