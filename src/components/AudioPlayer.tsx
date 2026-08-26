import { useState } from 'react';
import { VoiceEffect } from '../types';
import { audioEngine } from '../utils/audioEngine';
import { Play, Square, Download, Radio, Volume2, Loader2, Sparkles, AlertCircle } from 'lucide-react';

interface AudioPlayerProps {
  selectedEffect: VoiceEffect | null;
  audioBuffer: ArrayBuffer | null;
  fileName: string | null;
  activeInputType: 'file' | 'mic' | null;
}

export function AudioPlayer({
  selectedEffect,
  audioBuffer,
  fileName,
  activeInputType
}: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiveActive, setIsLiveActive] = useState(false);
  const [isRendering, setIsRendering] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handlePlayFile = async () => {
    if (!selectedEffect) {
      setErrorMessage('দয়া করে প্রথমে একটি ভয়েস ইফেক্ট সিলেক্ট করুন।');
      return;
    }
    if (!audioBuffer) {
      setErrorMessage('দয়া করে একটি অডিও ফাইল আপলোড করুন অথবা ডেমো সাউন্ড বা মাইক্রোফোন ব্যবহার করুন।');
      return;
    }

    setErrorMessage(null);
    setIsPlaying(true);
    setIsLiveActive(false);

    try {
      await audioEngine.playAudioFile(audioBuffer, selectedEffect, () => {
        setIsPlaying(false);
      });
    } catch (err) {
      console.error('Playback error:', err);
      setErrorMessage('অডিও প্লে করতে সমস্যা হয়েছে।');
      setIsPlaying(false);
    }
  };

  const handleStop = () => {
    audioEngine.stopAudio();
    setIsPlaying(false);
    setIsLiveActive(false);
  };

  const handleToggleLiveMic = async () => {
    if (!selectedEffect) {
      setErrorMessage('দয়া করে প্রথমে একটি ভয়েস ইফেক্ট সিলেক্ট করুন।');
      return;
    }

    setErrorMessage(null);
    if (isLiveActive) {
      audioEngine.stopAudio();
      setIsLiveActive(false);
    } else {
      try {
        await audioEngine.startMicMonitoring(selectedEffect);
        setIsLiveActive(true);
        setIsPlaying(false);
      } catch (err) {
        setErrorMessage('মাইক্রোফোন লাইভ মনিটরিং শুরু করা যায়নি।');
      }
    }
  };

  const handleRenderAndDownload = async () => {
    if (!selectedEffect) {
      setErrorMessage('দয়া করে প্রথমে একটি ভয়েস ইফেক্ট সিলেক্ট করুন।');
      return;
    }
    if (!audioBuffer) {
      setErrorMessage('প্রসেস করার জন্য কোনো অডিও ফাইল নেই।');
      return;
    }

    setErrorMessage(null);
    setIsRendering(true);

    try {
      const url = await audioEngine.renderEffectToBlob(audioBuffer, selectedEffect);
      setDownloadUrl(url);
    } catch (err) {
      console.error('Rendering error:', err);
      setErrorMessage('অডিও রেন্ডার করতে সমস্যা হয়েছে।');
    } finally {
      setIsRendering(false);
    }
  };

  return (
    <div className="bg-[#151619] border border-[#2A2B2E] rounded-xl p-5 shadow-2xl mt-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Volume2 className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm flex items-center gap-2">
              <span>AUDIO PROCESSOR & PLAYER</span>
              {selectedEffect && (
                <span className="text-[10px] font-mono text-cyan-300 bg-cyan-500/20 px-2 py-0.5 rounded border border-cyan-500/30 uppercase">
                  {selectedEffect.name}
                </span>
              )}
            </h3>
            <p className="text-[#8E9299] text-xs mt-0.5">
              {fileName ? `File: ${fileName}` : activeInputType === 'mic' ? 'Microphone Active' : 'Select audio or demo to begin'}
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Play File with Effect */}
          <button
            onClick={handlePlayFile}
            disabled={!audioBuffer}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition shadow cursor-pointer ${
              !audioBuffer
                ? 'bg-[#2A2B2E] text-gray-500 cursor-not-allowed border border-[#3A3C42]'
                : isPlaying
                ? 'bg-amber-600 hover:bg-amber-500 text-white animate-pulse'
                : 'bg-cyan-600 hover:bg-cyan-500 text-white'
            }`}
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            {isPlaying ? 'PLAYING...' : 'PLAY WITH EFFECT'}
          </button>

          {/* Live Mic Monitor */}
          <button
            onClick={handleToggleLiveMic}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition border cursor-pointer ${
              isLiveActive
                ? 'bg-rose-600 text-white border-rose-500 animate-pulse'
                : 'bg-[#2A2B2E] hover:bg-[#3A3C42] text-gray-200 border-[#3A3C42]'
            }`}
          >
            <Radio className="w-3.5 h-3.5" />
            {isLiveActive ? 'STOP MIC' : 'LIVE MIC'}
          </button>

          {/* Stop Button */}
          {(isPlaying || isLiveActive) && (
            <button
              onClick={handleStop}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#2A2B2E] hover:bg-[#3A3C42] text-rose-400 text-xs font-bold border border-[#3A3C42] transition cursor-pointer"
            >
              <Square className="w-3.5 h-3.5 fill-current" />
              STOP
            </button>
          )}

          {/* Render & Download WAV */}
          <button
            onClick={handleRenderAndDownload}
            disabled={!audioBuffer || isRendering}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition shadow cursor-pointer ${
              !audioBuffer
                ? 'bg-[#2A2B2E] text-gray-500 cursor-not-allowed border border-[#3A3C42]'
                : 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white'
            }`}
          >
            {isRendering ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                PROCESSING...
              </>
            ) : (
              <>
                <Sparkles className="w-3.5 h-3.5" />
                RENDER & DOWNLOAD WAV
              </>
            )}
          </button>
        </div>
      </div>

      {/* Download Link Display */}
      {downloadUrl && (
        <div className="mt-4 pt-3 border-t border-[#2A2B2E] flex items-center justify-between text-xs animate-fadeIn">
          <div className="flex items-center gap-2 text-emerald-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Processed audio ready for download!</span>
          </div>
          <a
            href={downloadUrl}
            download={`VOXMOD_${selectedEffect?.id || 'fx'}_audio.wav`}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow transition"
          >
            <Download className="w-3.5 h-3.5" />
            DOWNLOAD .WAV
          </a>
        </div>
      )}

      {/* Error message */}
      {errorMessage && (
        <div className="mt-4 pt-3 border-t border-[#2A2B2E] flex items-center gap-2 text-rose-400 text-xs font-medium">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  );
}

