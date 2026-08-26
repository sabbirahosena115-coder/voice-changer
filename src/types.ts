export interface VoiceEffect {
  id: string;
  name: string;
  bengaliName: string;
  category: string;
  description: string;
  iconName: string;
  params: {
    pitch?: number; // semitones (-12 to +12)
    formant?: number;
    distortion?: number; // 0 to 1
    reverbWet?: number; // 0 to 1
    delayTime?: number; // seconds
    delayFeedback?: number; // 0 to 1
    bitDepth?: number; // 1 to 16
    filterFreq?: number; // Hz
    filterType?: BiquadFilterType;
    chorusDepth?: number;
    speed?: number; // playback rate 0.5 to 2.0
    volume?: number; // dB
  };
}

export interface EffectCategory {
  id: string;
  title: string;
  bengaliTitle: string;
  icon: string;
  description: string;
}

export type InputMode = 'file' | 'mic' | 'preset';
