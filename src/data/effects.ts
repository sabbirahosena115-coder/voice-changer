import { EffectCategory, VoiceEffect } from '../types';

export const CATEGORIES: EffectCategory[] = [
  {
    id: 'cartoon',
    title: 'Cartoon & Fantasy',
    bengaliTitle: '১. কার্টুন ও কাল্পনিক চরিত্র',
    icon: 'Sparkles',
    description: 'Chipmunks, aliens, robots, and magical fantasy voices'
  },
  {
    id: 'kids_gaming',
    title: 'Kids & Gaming',
    bengaliTitle: '২. কিউট কিডস ও গেমিং',
    icon: 'Baby',
    description: 'Cute babies, little boys, anime chibi, and gaming headset lobby filters'
  },
  {
    id: 'movie',
    title: 'Movie & Pop Culture',
    bengaliTitle: '৩. সিনেমা ও পপ কালচার',
    icon: 'Film',
    description: 'Dark Lords, anonymous masks, anime heroes & villains'
  },
  {
    id: 'environment',
    title: 'Environment & Spatial',
    bengaliTitle: '৪. পরিবেশ ও স্থানিক ইফেক্ট',
    icon: 'Globe',
    description: 'Caves, underwater, cathedrals, and megaphones'
  },
  {
    id: 'device',
    title: 'Device & Digital',
    bengaliTitle: '৫. ডিভাইস ও ডিজিটাল ফিল্টার',
    icon: 'Radio',
    description: 'Retro radios, walkie-talkies, 8-bit lofi, and vocoders'
  },
  {
    id: 'age_gender',
    title: 'Age & Gender Alteration',
    bengaliTitle: '৬. বয়স ও জেন্ডার শিফট',
    icon: 'Users',
    description: 'Deep male, soft female, elders, and pitch shifters'
  },
  {
    id: 'horror',
    title: 'Mood & Horror',
    bengaliTitle: '৭. মেজাজ ও হরর ইফেক্ট',
    icon: 'Skull',
    description: 'Demons, scary whispers, witches, and zombies'
  },
  {
    id: 'funny',
    title: 'Funny & Weird',
    bengaliTitle: '৮. ফানি ও এক্সট্রা অড',
    icon: 'Smile',
    description: 'Helium gas, drunk voice, fast/slow mo, and squeaky toys'
  }
];

export const VOICE_EFFECTS: VoiceEffect[] = [
  // --- ১. কিউট কিডস ও গেমিং (5 Special Filters) ---
  {
    id: 'cute_baby_girl',
    name: 'Cute Baby Girl',
    bengaliName: 'কিউট বেবি গার্ল (Cute Baby Girl)',
    category: 'kids_gaming',
    description: 'High-pitch with soft formant - একদম ছোট কিউট মেয়ে শিশুর কণ্ঠ',
    iconName: 'Baby',
    params: { pitch: 9, speed: 1.05, chorusDepth: 0.3, filterFreq: 4200, filterType: 'highpass' }
  },
  {
    id: 'little_boy',
    name: 'Little Boy',
    bengaliName: 'ছোট দুষ্টু ছেলে (Little Boy)',
    category: 'kids_gaming',
    description: 'Pitch shift with slight treble boost - দুষ্টু ছোট ছেলে শিশুর কণ্ঠ',
    iconName: 'Smile',
    params: { pitch: 6, speed: 1.1, filterFreq: 1200, filterType: 'highpass', volume: 2 }
  },
  {
    id: 'anime_chibi',
    name: 'Anime Chibi',
    bengaliName: 'অ্যানিমে চিব (Anime Chibi)',
    category: 'kids_gaming',
    description: 'High-pitched, ultra-cute anime character voice - গেমারদের পছন্দের অ্যানিমে চিব কণ্ঠ',
    iconName: 'Sparkles',
    params: { pitch: 10, speed: 1.15, chorusDepth: 0.5, reverbWet: 0.25, filterFreq: 4500 }
  },
  {
    id: 'toddler_giggle',
    name: 'Toddler Giggle',
    bengaliName: 'টডলার গিগল (Toddler Giggle)',
    category: 'kids_gaming',
    description: 'Light pitch shift with playful echo - ছোট বাচ্চার মজার মিষ্টি গলা',
    iconName: 'Baby',
    params: { pitch: 7, speed: 1.05, delayTime: 0.2, delayFeedback: 0.35, reverbWet: 0.2 }
  },
  {
    id: 'gamer_kid',
    name: 'Gamer Kid Headset',
    bengaliName: 'গেমিং কিড (Gamer Kid)',
    category: 'kids_gaming',
    description: 'Gaming headset noise filter + pitch shift - গেমিং লবিতে কথা বলা ছোট বাচ্চার সাউন্ড',
    iconName: 'Gamepad',
    params: { pitch: 5, distortion: 0.2, filterType: 'bandpass', filterFreq: 3000, volume: 3, delayTime: 0.05 }
  },

  // --- ২. কার্টুন ও কাল্পনিক চরিত্র (15) ---
  {
    id: 'chipmunk',
    name: 'Chipmunk',
    bengaliName: 'চিফমাঙ্ক (Chipmunk)',
    category: 'cartoon',
    description: 'High pitched, squeaky and energetic cartoon rodent voice',
    iconName: 'Zap',
    params: { pitch: 9, speed: 1.1, volume: 2 }
  },
  {
    id: 'alien',
    name: 'Alien Voice',
    bengaliName: 'এলিয়েন (Alien Voice)',
    category: 'cartoon',
    description: 'Extraterrestrial metallic frequency modulation with echo',
    iconName: 'Radio',
    params: { pitch: 4, chorusDepth: 0.8, delayTime: 0.25, delayFeedback: 0.4, filterFreq: 3000 }
  },
  {
    id: 'mecha_robot',
    name: 'Mecha Robot',
    bengaliName: 'মেগাট্রন / রোবট Monster (Mecha Robot)',
    category: 'cartoon',
    description: 'Deep robotic armored voice with heavy distortion',
    iconName: 'Cpu',
    params: { pitch: -6, distortion: 0.6, bitDepth: 6, filterType: 'lowpass', filterFreq: 1500 }
  },
  {
    id: 'witch',
    name: 'Witch / Banshee',
    bengaliName: 'অশুভ পেত্নী / ভুত (Witch / Banshee)',
    category: 'cartoon',
    description: 'Spooky high-pitched screech with eerie reverb',
    iconName: 'Ghost',
    params: { pitch: 6, distortion: 0.3, reverbWet: 0.7, delayTime: 0.3 }
  },
  {
    id: 'ogre',
    name: 'Ogre / Titan',
    bengaliName: 'দৈত্য / দানব (Ogre / Titan)',
    category: 'cartoon',
    description: 'Monstrous deep roar with cavernous bass boost',
    iconName: 'Shield',
    params: { pitch: -10, distortion: 0.4, filterFreq: 800, reverbWet: 0.5 }
  },
  {
    id: 'minion',
    name: 'Yellow Minion',
    bengaliName: 'মিনিয়ন স্টাইল (Yellow Minion)',
    category: 'cartoon',
    description: 'Cheeky bubbly mid-high pitch with funny bounce',
    iconName: 'Smile',
    params: { pitch: 7, speed: 1.15, filterFreq: 4000 }
  },
  {
    id: 'magic_genie',
    name: 'Magic Genie',
    bengaliName: 'জাদুকরী জিন (Magic Genie)',
    category: 'cartoon',
    description: 'Mystical shimmering voice with magical echoes',
    iconName: 'Sparkles',
    params: { pitch: 2, chorusDepth: 0.7, reverbWet: 0.6, delayTime: 0.4 }
  },
  {
    id: 'cave_goblin',
    name: 'Cave Goblin',
    bengaliName: 'গবলিন (Cave Goblin)',
    category: 'cartoon',
    description: 'Raspy, nasal underground creature tone',
    iconName: 'Skull',
    params: { pitch: 3, distortion: 0.4, filterFreq: 2200 }
  },
  {
    id: 'dragon_lord',
    name: 'Dragon Lord',
    bengaliName: 'ড্রাগন গার্জিয়ান (Dragon Lord)',
    category: 'cartoon',
    description: 'Ancient fiery beast with deep rumbling undertones',
    iconName: 'Flame',
    params: { pitch: -8, distortion: 0.5, reverbWet: 0.7 }
  },
  {
    id: 'toddler_baby',
    name: 'Toddler / Baby',
    bengaliName: 'বেবি টক (Toddler / Baby)',
    category: 'cartoon',
    description: 'Innocent high-pitched infant tone',
    iconName: 'Smile',
    params: { pitch: 8, speed: 1.05 }
  },
  {
    id: 'pixel_fairy',
    name: 'Pixel Fairy',
    bengaliName: 'পিক্সাল পিক্সল (Pixel Fairy)',
    category: 'cartoon',
    description: 'Magical sprite with sparkling digital resonance',
    iconName: 'Sparkles',
    params: { pitch: 10, bitDepth: 8, chorusDepth: 0.5 }
  },
  {
    id: 'cyborg_villain',
    name: 'Cyborg Villain',
    bengaliName: 'সাইবর্গ ভিলেন (Cyborg Villain)',
    category: 'cartoon',
    description: 'Sinister cybernetic voice with digital tremolo',
    iconName: 'Cpu',
    params: { pitch: -4, distortion: 0.5, chorusDepth: 0.6 }
  },
  {
    id: 'funny_clown',
    name: 'Funny Clown',
    bengaliName: 'ক্লাউন (Funny Clown)',
    category: 'cartoon',
    description: 'Silly carnival entertainer voice with bouncy pitch bend',
    iconName: 'Smile',
    params: { pitch: 4, speed: 1.1, delayTime: 0.15 }
  },
  {
    id: 'masked_hero',
    name: 'Masked Hero',
    bengaliName: 'সুপারহিরো (Masked Hero)',
    category: 'cartoon',
    description: 'Courageous comic-book protagonist tone',
    iconName: 'Shield',
    params: { pitch: -2, distortion: 0.2, reverbWet: 0.3 }
  },
  {
    id: 'galactic_traveller',
    name: 'Galactic Traveller',
    bengaliName: 'স্পেস ট্রাভেলার (Galactic Traveller)',
    category: 'cartoon',
    description: 'Interstellar voyager with cosmic delay trails',
    iconName: 'Globe',
    params: { pitch: 1, delayTime: 0.4, delayFeedback: 0.5, reverbWet: 0.5 }
  },

  // --- ২. সিনেমা ও পপ কালচার (15) ---
  {
    id: 'vader_style',
    name: 'Dark Lord (Vader Style)',
    bengaliName: 'ডার্ক লর্ড (Dark Lord / Vader Style)',
    category: 'movie',
    description: 'Menacing deep breath and heavy Sith lord resonance',
    iconName: 'Skull',
    params: { pitch: -9, distortion: 0.2, filterFreq: 1200, reverbWet: 0.4 }
  },
  {
    id: 'anonymous_guy',
    name: 'Anonymous Mask',
    bengaliName: 'অ্যানোনিমাস মাস্ক (Anonymous Guy)',
    category: 'movie',
    description: 'Masked cyber activist distorted mysterious tone',
    iconName: 'UserX',
    params: { pitch: -5, distortion: 0.4, filterFreq: 1800 }
  },
  {
    id: 'serial_killer',
    name: 'Serial Killer Pitch',
    bengaliName: 'সাইকো ভিলেন (Serial Killer Pitch)',
    category: 'movie',
    description: 'Creepy chilling low pitch with sharp clarity',
    iconName: 'Skull',
    params: { pitch: -7, distortion: 0.3 }
  },
  {
    id: 'deep_narrator',
    name: 'Deep Narrator',
    bengaliName: 'টাইম ট্রাভেলার (Deep Narrator)',
    category: 'movie',
    description: 'Cinematic trailer narrator voice with rich theater reverb',
    iconName: 'Film',
    params: { pitch: -4, reverbWet: 0.5, filterFreq: 2500 }
  },
  {
    id: 'futuristic_ai',
    name: 'Futuristic AI Voice',
    bengaliName: 'এআই অ্যাসিস্ট্যান্ট (Futuristic AI Voice)',
    category: 'movie',
    description: 'Sleek synthetic computer assistant tone',
    iconName: 'Cpu',
    params: { pitch: 2, chorusDepth: 0.4, delayTime: 0.1 }
  },
  {
    id: 'gravely_hero',
    name: 'Gravely Dark Hero',
    bengaliName: 'ব্যাট হিরো (Gravely Dark Hero)',
    category: 'movie',
    description: 'Gritty vigilante detective rough growl',
    iconName: 'Shield',
    params: { pitch: -5, distortion: 0.45, filterFreq: 2000 }
  },
  {
    id: 'crazy_psycho',
    name: 'Crazy Psycho',
    bengaliName: 'জোকার স্টাইল (Crazy Psycho)',
    category: 'movie',
    description: 'Unpredictable manic laughter and warped pitch shifts',
    iconName: 'Smile',
    params: { pitch: 3, distortion: 0.5, delayTime: 0.2 }
  },
  {
    id: 'anime_protagonist',
    name: 'Anime Protagonist',
    bengaliName: 'অ্যানিমে হিরো (Anime Protagonist)',
    category: 'movie',
    description: 'Determined shonen anime hero battle shout tone',
    iconName: 'Zap',
    params: { pitch: 2, speed: 1.05, volume: 3 }
  },
  {
    id: 'high_waifu',
    name: 'High Pitch Waifu',
    bengaliName: 'অ্যানিমে ওয়াফু (High Pitch Waifu)',
    category: 'movie',
    description: 'Sweet melodic high pitched Japanese animation heroine',
    iconName: 'Sparkles',
    params: { pitch: 6, chorusDepth: 0.3 }
  },
  {
    id: 'digital_grid_master',
    name: 'Digital Grid Master',
    bengaliName: 'ট্রন মাস্টার (Digital Grid Master)',
    category: 'movie',
    description: 'Neon grid warrior with synth-wave modulation',
    iconName: 'Radio',
    params: { pitch: -3, chorusDepth: 0.7, bitDepth: 10 }
  },
  {
    id: 'retro_arcade_npc',
    name: '8-Bit Arcade NPC',
    bengaliName: 'রেট্রো ভিডিও গেম (8-Bit Arcade NPC)',
    category: 'movie',
    description: 'Chiptune style pixelated low sample rate voice',
    iconName: 'Cpu',
    params: { bitDepth: 4, filterFreq: 2000 }
  },
  {
    id: 'epic_trailer',
    name: 'Epic Movie Trailer Voice',
    bengaliName: 'মোশন পিকচার ট্রেইলার (Epic Movie Trailer Voice)',
    category: 'movie',
    description: 'In a world... deep cinematic voice with massive cathedral reverb',
    iconName: 'Film',
    params: { pitch: -6, reverbWet: 0.8, delayTime: 0.35, delayFeedback: 0.4 }
  },
  {
    id: 'rpg_quest_giver',
    name: 'RPG Quest Giver',
    bengaliName: 'গেম কোয়েস্টার (RPG Quest Giver)',
    category: 'movie',
    description: 'Wise medieval tavern keeper or wizard',
    iconName: 'Sparkles',
    params: { pitch: -3, reverbWet: 0.4 }
  },
  {
    id: 'ghost_reaper',
    name: 'Ghost Reaper',
    bengaliName: 'অস্পেক্ট স্পেকটার (Ghost Reaper)',
    category: 'movie',
    description: 'Haunting spirit whispering from the netherworld',
    iconName: 'Ghost',
    params: { pitch: -2, reverbWet: 0.85, delayTime: 0.5, delayFeedback: 0.6 }
  },
  {
    id: 'action_hero',
    name: 'Action Hero Badass',
    bengaliName: 'অ্যাকশন হিরো (Graff Badass)',
    category: 'movie',
    description: 'Tough blockbuster mercenary voice',
    iconName: 'Shield',
    params: { pitch: -4, distortion: 0.25, volume: 2 }
  },

  // --- ৩. পরিবেশ ও স্থানিক ইফেক্ট (15) ---
  {
    id: 'echoing_cave',
    name: 'Echoing Cave',
    bengaliName: 'অন্ধকার গুহা (Echoing Cave)',
    category: 'environment',
    description: 'Deep stone cavern with long natural reverberation',
    iconName: 'Globe',
    params: { reverbWet: 0.8, delayTime: 0.4, delayFeedback: 0.6, filterFreq: 2500 }
  },
  {
    id: 'underwater_deep',
    name: 'Underwater Deep',
    bengaliName: 'পানির নিচে (Underwater Deep)',
    category: 'environment',
    description: 'Muffled underwater acoustics with heavy lowpass filter',
    iconName: 'Globe',
    params: { filterType: 'lowpass', filterFreq: 600, reverbWet: 0.7 }
  },
  {
    id: 'grand_cathedral',
    name: 'Grand Cathedral Echo',
    bengaliName: 'প্রাচীন ক্যাথেড্রাল (Grand Cathedral Echo)',
    category: 'environment',
    description: 'Massive holy church echo with 4-second decay',
    iconName: 'Film',
    params: { reverbWet: 0.9, delayTime: 0.5 }
  },
  {
    id: 'telephone_1950',
    name: '1950s Telephone',
    bengaliName: 'ওল্ড টেলিফোন (1950s Telephone)',
    category: 'environment',
    description: 'Bandpass filtered vintage rotary telephone receiver',
    iconName: 'Radio',
    params: { filterType: 'bandpass', filterFreq: 1500, distortion: 0.3 }
  },
  {
    id: 'stadium_announcer',
    name: 'Stadium Announcer',
    bengaliName: 'স্টেডিয়াম স্পিকার (Stadium Announcer)',
    category: 'environment',
    description: 'Loud PA system reverberating across a packed sports arena',
    iconName: 'Zap',
    params: { reverbWet: 0.6, delayTime: 0.2, volume: 4 }
  },
  {
    id: 'public_megaphone',
    name: 'Public Megaphone',
    bengaliName: 'মেগাফোন / মাইক (Public Megaphone)',
    category: 'environment',
    description: 'Horn speaker distortion with high-mid boost',
    iconName: 'Radio',
    params: { distortion: 0.5, filterType: 'bandpass', filterFreq: 2200 }
  },
  {
    id: 'walkie_talkie',
    name: 'Military Walkie-Talkie',
    bengaliName: 'ওকম রেডিও (Military Walkie-Talkie)',
    category: 'environment',
    description: 'Over-the-air radio static with squelch tail click',
    iconName: 'Radio',
    params: { bitDepth: 6, distortion: 0.4, filterFreq: 2500 }
  },
  {
    id: 'concert_hall',
    name: 'Live Concert Reverb',
    bengaliName: 'কনসার্ট হল (Live Concert Reverb)',
    category: 'environment',
    description: 'Spacious auditorium acoustic reflections',
    iconName: 'Film',
    params: { reverbWet: 0.5, delayTime: 0.15 }
  },
  {
    id: 'empty_room',
    name: 'Empty Room Echo',
    bengaliName: 'ফাঁকা রুম (Empty Room Echo)',
    category: 'environment',
    description: 'Bare hardwood floor and concrete wall flutter echo',
    iconName: 'Globe',
    params: { reverbWet: 0.3, delayTime: 0.08 }
  },
  {
    id: 'long_tunnel',
    name: 'Long Tunnel',
    bengaliName: 'টানেল ভয়েস (Long Tunnel)',
    category: 'environment',
    description: 'Metallic reverberant highway underpass echo',
    iconName: 'Globe',
    params: { delayTime: 0.3, delayFeedback: 0.7, reverbWet: 0.6 }
  },
  {
    id: 'elevator_intercom',
    name: 'Elevator Intercom',
    bengaliName: 'লিফট স্পিকার (Elevator Intercom)',
    category: 'environment',
    description: 'Muffled ceiling speaker in a small metal elevator cabin',
    iconName: 'Radio',
    params: { filterFreq: 1800, distortion: 0.2, reverbWet: 0.2 }
  },
  {
    id: 'pilot_headset',
    name: 'Pilot Headset',
    bengaliName: 'হেলিকপ্টার ককপিট (Pilot Headset)',
    category: 'environment',
    description: 'Aviation radio noise-cancelling cockpit microphone',
    iconName: 'Radio',
    params: { filterType: 'bandpass', filterFreq: 2000, distortion: 0.35 }
  },
  {
    id: 'zero_gravity',
    name: 'Zero Gravity Chamber',
    bengaliName: 'স্পেস স্টেশন (Zero Gravity Chamber)',
    category: 'environment',
    description: 'Floating spatial drone with chorus shimmer',
    iconName: 'Globe',
    params: { chorusDepth: 0.8, reverbWet: 0.7, delayTime: 0.4 }
  },
  {
    id: 'scuba_mask',
    name: 'Scuba Diver Mask',
    bengaliName: 'ডাইভিং মাস্ক (Scuba Diver Mask)',
    category: 'environment',
    description: 'Breathing bubbles and muffled mask acoustics',
    iconName: 'Globe',
    params: { filterFreq: 900, reverbWet: 0.5 }
  },
  {
    id: 'drive_thru',
    name: 'Fast Food Intercom',
    bengaliName: 'ড্রাইভ-থ্রু স্পিকার (Fast Food Intercom)',
    category: 'environment',
    description: 'Scratchy outdoor ordering kiosk speaker tone',
    iconName: 'Radio',
    params: { distortion: 0.55, filterFreq: 2100 }
  },

  // --- ৪. ডিভাইস ও ডিজিটাল ফিল্টার (15) ---
  {
    id: 'am_radio',
    name: 'AM Radio Static',
    bengaliName: 'রেট্রো রেডিও (AM Radio Static)',
    category: 'device',
    description: 'Crackle, hiss, and vintage analog broadcast tone',
    iconName: 'Radio',
    params: { distortion: 0.4, bitDepth: 8, filterFreq: 2500 }
  },
  {
    id: 'lofi_vintage',
    name: 'Lo-Fi Vintage',
    bengaliName: '৮-বিট লো-ফাই (Lo-Fi Vintage)',
    category: 'device',
    description: 'Dusty vinyl record warmth and warm low-pass filter',
    iconName: 'Disc',
    params: { bitDepth: 10, filterFreq: 3000, chorusDepth: 0.3 }
  },
  {
    id: 'metallic_robot',
    name: 'Classic Metallic Robot',
    bengaliName: 'রোবোটিক মেক (Classic Metallic Robot)',
    category: 'device',
    description: 'Classic sci-fi metallic ring modulation',
    iconName: 'Cpu',
    params: { pitch: -3, chorusDepth: 0.9, bitDepth: 7 }
  },
  {
    id: 'glitchy_voice',
    name: 'Glitchy Voice',
    bengaliName: 'গ্লিচ ইন ম্যাট্রিক্স (Glitchy Voice)',
    category: 'device',
    description: 'Corrupted audio buffer stutter effect',
    iconName: 'Cpu',
    params: { distortion: 0.7, bitDepth: 4, speed: 0.95 }
  },
  {
    id: 'synthwave_vocoder',
    name: '80s Synth Synthwave Vocoder',
    bengaliName: 'ভোকোডার (80s Synth Synthwave)',
    category: 'device',
    description: 'Retro futuristic robotic singing synthesizer tone',
    iconName: 'Radio',
    params: { chorusDepth: 0.9, delayTime: 0.2, filterFreq: 2800 }
  },
  {
    id: 'autotune_rap',
    name: 'Modern Auto-Tune',
    bengaliName: 'অটোটউন র্যাপ (Modern Auto-Tune)',
    category: 'device',
    description: 'Pristine pitch-corrected robotic pop vocal shimmer',
    iconName: 'Zap',
    params: { pitch: 1, chorusDepth: 0.5, volume: 2 }
  },
  {
    id: 'low_bit_radio',
    name: 'Low Bitrate Radio',
    bengaliName: 'ওয়াকি-টকি লো-বিট (Low Bitrate Radio)',
    category: 'device',
    description: 'Extremely compressed digital stream artifacting',
    iconName: 'Radio',
    params: { bitDepth: 3, distortion: 0.6 }
  },
  {
    id: 'satellite_phone',
    name: 'Laggy Satellite Call',
    bengaliName: 'স্যাটেলাইট ফোন (Laggy Satellite Call)',
    category: 'device',
    description: 'Delayed uplink with orbital ping echo',
    iconName: 'Globe',
    params: { delayTime: 0.35, delayFeedback: 0.5, filterFreq: 2200 }
  },
  {
    id: 'worn_tape_deck',
    name: 'Worn-out Tape Deck',
    bengaliName: 'ক্যাসেট টেপ (Worn-out Tape Deck)',
    category: 'device',
    description: 'Warbled magnetic tape flutter and warm saturation',
    iconName: 'Disc',
    params: { chorusDepth: 0.7, filterFreq: 2800, distortion: 0.2 }
  },
  {
    id: 'cyber_dialup',
    name: 'Cyber Dial-Up',
    bengaliName: 'সাইবার ডায়াল (Cyber Dial-Up)',
    category: 'device',
    description: 'Modem handshake tone mixed with high frequency modulation',
    iconName: 'Cpu',
    params: { bitDepth: 5, distortion: 0.6, filterFreq: 4000 }
  },
  {
    id: 'cyberpunk_helmet',
    name: 'Cyberpunk Helmet',
    bengaliName: 'ডিজিটাল হেলমেট (Cyberpunk Helmet)',
    category: 'device',
    description: 'Sealed tactical armor comms system',
    iconName: 'Shield',
    params: { filterFreq: 2400, chorusDepth: 0.4, distortion: 0.25 }
  },
  {
    id: 'distorted_mic',
    name: 'Distorted Mic',
    bengaliName: 'নয়েজি ওয়্যারলেস (Distorted Mic)',
    category: 'device',
    description: 'Blown-out clipping gain speaker distortion',
    iconName: 'Radio',
    params: { distortion: 0.85, volume: 3 }
  },
  {
    id: 'phonograph_1920',
    name: '1920s Phonograph',
    bengaliName: 'গ্রামোফোন (1920s Phonograph)',
    category: 'device',
    description: 'Scratchy antique horn gramophone with heavy midrange',
    iconName: 'Disc',
    params: { filterType: 'bandpass', filterFreq: 1800, distortion: 0.4, bitDepth: 12 }
  },
  {
    id: 'vocal_doubler',
    name: 'Vocal Doubler',
    bengaliName: 'ডাবল ট্র্যাক (Vocal Doubler)',
    category: 'device',
    description: 'Stereo chorus thickening effect for rich presence',
    iconName: 'Zap',
    params: { chorusDepth: 0.6, delayTime: 0.03 }
  },
  {
    id: 'bass_boosted',
    name: 'Bass Boosted Voice',
    bengaliName: 'সাউন্ডবার বোতাম (Bass Boosted Voice)',
    category: 'device',
    description: 'Sub-woofer subwoofer thumping low end resonance',
    iconName: 'Disc',
    params: { pitch: -3, filterType: 'lowpass', filterFreq: 400, volume: 5 }
  },

  // --- ৫. বয়স ও জেন্ডার শিফট (15) ---
  {
    id: 'deep_male',
    name: 'Deep Male Pitch',
    bengaliName: 'ডিপ ম্যান (Deep Male Pitch)',
    category: 'age_gender',
    description: 'Rich, resonant baritone masculine pitch shift',
    iconName: 'User',
    params: { pitch: -5, filterFreq: 3000 }
  },
  {
    id: 'soft_female',
    name: 'Soft Female Pitch',
    bengaliName: 'সফট ফিমেল (Soft Female Pitch)',
    category: 'age_gender',
    description: 'Gentle, warm feminine vocal pitch transformation',
    iconName: 'User',
    params: { pitch: 5, chorusDepth: 0.2 }
  },
  {
    id: 'old_grandpa',
    name: 'Old Wise Grandpa',
    bengaliName: 'বয়স্ক দাদু (Old Wise Grandpa)',
    category: 'age_gender',
    description: 'Elderly wise grandfather with raspy warm timbre',
    iconName: 'User',
    params: { pitch: -4, distortion: 0.15, filterFreq: 2200 }
  },
  {
    id: 'elderly_grandma',
    name: 'Elderly Grandma',
    bengaliName: 'বৃদ্ধা নারী (Elderly Grandma)',
    category: 'age_gender',
    description: 'Kind elderly grandmother sweet storytelling voice',
    iconName: 'User',
    params: { pitch: 3, filterFreq: 2500 }
  },
  {
    id: 'little_kid',
    name: 'Little Kid',
    bengaliName: 'ছোট শিশু (Little Kid)',
    category: 'age_gender',
    description: 'Enthusiastic 6-year-old child pitch',
    iconName: 'Smile',
    params: { pitch: 7, speed: 1.1 }
  },
  {
    id: 'teenage_voice',
    name: 'Teenage Voice',
    bengaliName: 'টিনএজার (Teenage Voice)',
    category: 'age_gender',
    description: 'Casual youthful teenager conversational tone',
    iconName: 'User',
    params: { pitch: 2 }
  },
  {
    id: 'baritone_gentleman',
    name: 'Deep Baritone Gentleman',
    bengaliName: 'জেন্টলম্যান (Deep Baritone Gentleman)',
    category: 'age_gender',
    description: 'Sophisticated deep gentleman with smooth acoustics',
    iconName: 'User',
    params: { pitch: -3, reverbWet: 0.2 }
  },
  {
    id: 'soprano_lady',
    name: 'High Soprano Lady',
    bengaliName: 'হাই পিচ লেডি (High Soprano Lady)',
    category: 'age_gender',
    description: 'Soaring high opera soprano vocal range',
    iconName: 'Sparkles',
    params: { pitch: 6, chorusDepth: 0.3 }
  },
  {
    id: 'middle_age',
    name: 'Casual Middle-Age',
    bengaliName: 'মিডল-এজ ভয়েস (Casual Middle-Age)',
    category: 'age_gender',
    description: 'Natural everyday adult speaker profile',
    iconName: 'User',
    params: { pitch: 0 }
  },
  {
    id: 'male_to_female',
    name: 'Male to Female Shift',
    bengaliName: 'মেল-টু-ফিমেল (Male to Female Shift)',
    category: 'age_gender',
    description: 'Smooth formant and pitch shift upward for gender transition',
    iconName: 'Users',
    params: { pitch: 6, chorusDepth: 0.4 }
  },
  {
    id: 'female_to_male',
    name: 'Female to Male Shift',
    bengaliName: 'ফিমেল-টু-মেল (Female to Male Shift)',
    category: 'age_gender',
    description: 'Deep pitch and resonant chest voice shift downward',
    iconName: 'Users',
    params: { pitch: -6, filterFreq: 2500 }
  },
  {
    id: 'smoky_whisper',
    name: 'Smoky Whisper',
    bengaliName: 'ডিপ স্মোকি (Smoky Whisper)',
    category: 'age_gender',
    description: 'Late-night jazz lounge breathy low voice',
    iconName: 'User',
    params: { pitch: -3, distortion: 0.2, reverbWet: 0.4 }
  },
  {
    id: 'infant_cry',
    name: 'Infant Crying/Speaking',
    bengaliName: 'ইনফ্যান্ট (Infant Crying/Speaking)',
    category: 'age_gender',
    description: 'Extremely high pitched baby babble tone',
    iconName: 'Smile',
    params: { pitch: 10, speed: 1.2 }
  },
  {
    id: 'anime_kid',
    name: 'Anime Kid',
    bengaliName: 'কিউট কার্টুন গার্ল (Anime Kid)',
    category: 'age_gender',
    description: 'Energetic animated chibi child voice',
    iconName: 'Sparkles',
    params: { pitch: 8 }
  },
  {
    id: 'rough_heavy',
    name: 'Rough Heavy Voice',
    bengaliName: 'রাফ বারারি (Rough Heavy Voice)',
    category: 'age_gender',
    description: 'Weathered hard-working laborer rough vocal cords',
    iconName: 'User',
    params: { pitch: -4, distortion: 0.35 }
  },

  // --- ৬. মেজাজ ও হরর ইফেক্ট (15) ---
  {
    id: 'demon_lord',
    name: 'Demon Lord Engine',
    bengaliName: 'শয়তানের গর্জন (Demon Lord Engine)',
    category: 'horror',
    description: 'Terrifying underworld demon with dual-octave subharmonics',
    iconName: 'Skull',
    params: { pitch: -12, distortion: 0.7, reverbWet: 0.8, delayTime: 0.3 }
  },
  {
    id: 'scary_whisper',
    name: 'Scary Whisper',
    bengaliName: 'ফিসফিসানি ভুত (Scary Whisper)',
    category: 'horror',
    description: 'Close-up chilling paranormal whisper with reverb tails',
    iconName: 'Ghost',
    params: { pitch: -2, reverbWet: 0.8, delayTime: 0.4, distortion: 0.2 }
  },
  {
    id: 'cackling_witch',
    name: 'Cackling Witch',
    bengaliName: 'হাসির ডাইনি (Cackling Witch)',
    category: 'horror',
    description: 'Wicked cackling hag with shrieking pitch',
    iconName: 'Skull',
    params: { pitch: 5, distortion: 0.4, delayTime: 0.2 }
  },
  {
    id: 'gothic_vampire',
    name: 'Gothic Vampire',
    bengaliName: 'ভ্যাম্পায়ার (Gothic Vampire)',
    category: 'horror',
    description: 'Aristocratic bloodthirsty count with dark eerie reverb',
    iconName: 'Skull',
    params: { pitch: -4, reverbWet: 0.7, filterFreq: 3000 }
  },
  {
    id: 'possession_scream',
    name: 'Possession Scream Tone',
    bengaliName: 'পৈশাচিক চিৎকার (Possession Scream Tone)',
    category: 'horror',
    description: 'Demonic possession echoing from the abyss',
    iconName: 'Ghost',
    params: { pitch: -8, distortion: 0.8, reverbWet: 0.9, delayTime: 0.5 }
  },
  {
    id: 'suspense_slow',
    name: 'Suspense Slow Motion',
    bengaliName: 'ড্রামা থ্রিলার (Suspense Slow Motion)',
    category: 'horror',
    description: 'Creepy slowed-down psychological thriller voice',
    iconName: 'Film',
    params: { speed: 0.75, pitch: -3, reverbWet: 0.6 }
  },
  {
    id: 'reverse_backwards',
    name: 'Reverse Backwards Voice',
    bengaliName: 'রিভার্স ভয়েস (Reverse Backwards Voice)',
    category: 'horror',
    description: 'Unsettling backward speech demonic ritual effect',
    iconName: 'Ghost',
    params: { speed: -1, reverbWet: 0.7 }
  },
  {
    id: 'shadow_phantom',
    name: 'Shadow Phantom',
    bengaliName: 'ভুতুড়ে ছায়া (Shadow Phantom)',
    category: 'horror',
    description: 'Ethereal floating phantom echoing through empty corridors',
    iconName: 'Ghost',
    params: { pitch: 2, chorusDepth: 0.9, reverbWet: 0.85 }
  },
  {
    id: 'horror_choir',
    name: 'Horror Choir',
    bengaliName: 'ভয়ের কোরাস (Horror Choir)',
    category: 'horror',
    description: 'Cursed Gregorian haunting choral resonance',
    iconName: 'Skull',
    params: { pitch: -5, chorusDepth: 0.95, reverbWet: 0.9 }
  },
  {
    id: 'panic_tremor',
    name: 'Fast Heartbeat Tremor',
    bengaliName: 'সাইকো প্যানিক (Fast Heartbeat Tremor)',
    category: 'horror',
    description: 'Terrified trembling voice with pulse modulation',
    iconName: 'Zap',
    params: { pitch: 3, chorusDepth: 0.8, distortion: 0.3 }
  },
  {
    id: 'creaky_cellar',
    name: 'Creaky Cellar Voice',
    bengaliName: 'ওল্ড ট্র্যাপ ডোর (Creaky Cellar Voice)',
    category: 'horror',
    description: 'Dusty dungeon resident with wooden door creak resonance',
    iconName: 'Skull',
    params: { pitch: -6, filterFreq: 1500, reverbWet: 0.6 }
  },
  {
    id: 'zombie_groan',
    name: 'Zombie Groan',
    bengaliName: 'গোর জম্বি (Zombie Groan)',
    category: 'horror',
    description: 'Undead rotting corpse moaning throat resonance',
    iconName: 'Skull',
    params: { pitch: -11, distortion: 0.65, filterFreq: 800 }
  },
  {
    id: 'shattered_pitch',
    name: 'Shattered Pitch',
    bengaliName: 'গ্লাস ক্র্যাশ ভয়েস (Shattered Pitch)',
    category: 'horror',
    description: 'Fractured glass audio glitch and jagged pitch jitter',
    iconName: 'Zap',
    params: { distortion: 0.75, bitDepth: 5, delayTime: 0.15 }
  },
  {
    id: 'shaky_terrified',
    name: 'Shaky Terrified Voice',
    bengaliName: 'প্যানিক রেডি (Shaky Terrified Voice)',
    category: 'horror',
    description: 'Quivering vocal cords running from a monster',
    iconName: 'Ghost',
    params: { pitch: 4, speed: 1.1, chorusDepth: 0.5 }
  },
  {
    id: 'cold_malice',
    name: 'Cold Malice',
    bengaliName: 'ম্যালিস (Cold Malice)',
    category: 'horror',
    description: 'Psychopathic calm villain whispering dark threats',
    iconName: 'Skull',
    params: { pitch: -5, reverbWet: 0.5 }
  },

  // --- ৭. ফানি ও এক্সট্রা অড (১০টি) ---
  {
    id: 'helium_gas',
    name: 'Helium Gas Puff',
    bengaliName: 'হিলিয়াম গ্যাস (Helium Gas Puff)',
    category: 'funny',
    description: 'Classic party balloon helium inhale squeaky voice',
    iconName: 'Smile',
    params: { pitch: 8, speed: 1.15 }
  },
  {
    id: 'drunk_dizzy',
    name: 'Drunk & Dizzy',
    bengaliName: 'মাতাল টোন (Drunk & Dizzy)',
    category: 'funny',
    description: 'Slurred speech with wavy pitch modulation and slow speed',
    iconName: 'Smile',
    params: { pitch: -3, speed: 0.85, chorusDepth: 0.7 }
  },
  {
    id: 'speedy_gonzales',
    name: 'Speedy Gonzales (2x Speed)',
    bengaliName: 'ফাস্ট স্পিড (Speedy Gonzales / 2x Speed)',
    category: 'funny',
    description: 'Hyperactive rapid-fire chipmunk chip speed',
    iconName: 'Zap',
    params: { speed: 1.5, pitch: 5 }
  },
  {
    id: 'super_slow_motion',
    name: 'Super Slow Motion (0.5x)',
    bengaliName: 'স্লো-মো (Super Slow Motion / 0.5x)',
    category: 'funny',
    description: 'Glacial motion deep stretched speech',
    iconName: 'Film',
    params: { speed: 0.6, pitch: -4 }
  },
  {
    id: 'funny_donkey_bot',
    name: 'Funny Donkey Bot',
    bengaliName: 'রোবোটিক গাধা (Funny Donkey Bot)',
    category: 'funny',
    description: 'Silly robotic braying animal tone',
    iconName: 'Smile',
    params: { pitch: -2, distortion: 0.5, speed: 0.9 }
  },
  {
    id: 'alien_beatbox',
    name: 'Alien Beatbox',
    bengaliName: 'এলিয়েন বিট (Alien Beatbox)',
    category: 'funny',
    description: 'Rhythmic robotic percussion and synth modulation',
    iconName: 'Radio',
    params: { chorusDepth: 0.8, delayTime: 0.2, bitDepth: 8 }
  },
  {
    id: 'underwater_wobble',
    name: 'Underwater Wobble',
    bengaliName: 'ওয়াবল ভয়েস (Underwater Wobble)',
    category: 'funny',
    description: 'Liquid bubbling pitch tremolo effect',
    iconName: 'Globe',
    params: { chorusDepth: 0.9, filterFreq: 1200 }
  },
  {
    id: 'echoing_parrot',
    name: 'Echoing Parrot',
    bengaliName: 'টকিং তোতা (Echoing Parrot)',
    category: 'funny',
    description: 'Repeating multi-tap tropical bird echo',
    iconName: 'Sparkles',
    params: { pitch: 4, delayTime: 0.25, delayFeedback: 0.6 }
  },
  {
    id: 'squeaky_toy',
    name: 'Squeaky Toy',
    bengaliName: 'স্পঞ্জি সাউন্ড (Squeaky Toy)',
    category: 'funny',
    description: 'Rubber squeaker toy high pitch resonant squeak',
    iconName: 'Smile',
    params: { pitch: 11, filterFreq: 4500, distortion: 0.3 }
  },
  {
    id: 'musical_chords',
    name: 'Musical Chords',
    bengaliName: 'মেলোডি ভয়েস (Musical Chords)',
    category: 'funny',
    description: 'Harmonized robotic vocoder musical chord drone',
    iconName: 'Sparkles',
    params: { chorusDepth: 0.95, reverbWet: 0.6, delayTime: 0.3 }
  }
];
