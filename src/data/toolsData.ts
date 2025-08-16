export interface Tool {
  id: string;
  name: string;
  description: string;
  url?: string;
  upvotes: number;
  verified: boolean;
  rating: number;
  icon: string;
  category: string;
  subcategory: string;
}

export const toolsData: { [key: string]: { [key: string]: Tool[] } } = {
  "voice-generation-conversion": {
    "ai-celebrity-voice-generator": [
      { id: "fakeyou", name: "FakeYou", description: "AI voice synthesis with celebrity voices", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "🎭", category: "voice-generation-conversion", subcategory: "ai-celebrity-voice-generator" },
      { id: "fish-audio", name: "Fish Audio", description: "High-quality AI voice cloning and generation", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🐟", category: "voice-generation-conversion", subcategory: "ai-celebrity-voice-generator" },
      { id: "sendfame", name: "SendFame", description: "Celebrity voice messages with AI", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "⭐", category: "voice-generation-conversion", subcategory: "ai-celebrity-voice-generator" },
      { id: "irocket-icreavoice", name: "iRocket iCreaVoice", description: "AI voice creation and synthesis platform", url: "", upvotes: 567, verified: true, rating: 4.4, icon: "🚀", category: "voice-generation-conversion", subcategory: "ai-celebrity-voice-generator" },
      { id: "starvoiceai", name: "StarVoiceAi", description: "Celebrity and custom AI voice generator", url: "", upvotes: 456, verified: false, rating: 4.3, icon: "🌟", category: "voice-generation-conversion", subcategory: "ai-celebrity-voice-generator" }
    ],
    "ai-dubbing": [
      { id: "vidnoz-ai-dub", name: "Vidnoz AI", description: "AI video dubbing and voice synthesis", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🎬", category: "voice-generation-conversion", subcategory: "ai-dubbing" },
      { id: "maestra-ai", name: "Maestra AI", description: "Professional AI dubbing and translation", url: "", upvotes: 1098, verified: true, rating: 4.6, icon: "🎭", category: "voice-generation-conversion", subcategory: "ai-dubbing" },
      { id: "murf-ai", name: "Murf AI", description: "AI voice over and dubbing platform", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "🎤", category: "voice-generation-conversion", subcategory: "ai-dubbing" },
      { id: "rask-ai", name: "Rask AI", description: "AI-powered dubbing and localization", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🌍", category: "voice-generation-conversion", subcategory: "ai-dubbing" },
      { id: "vbee-aivoice", name: "Vbee AIVoice", description: "AI voice dubbing and synthesis solution", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "🐝", category: "voice-generation-conversion", subcategory: "ai-dubbing" }
    ],
    "ai-podcast": [
      { id: "adobe-podcast", name: "Adobe Podcast", description: "AI-powered podcast creation and editing", url: "", upvotes: 1890, verified: true, rating: 4.8, icon: "🎙️", category: "voice-generation-conversion", subcategory: "ai-podcast" },
      { id: "riverside-fm", name: "Riverside.fm", description: "High-quality podcast recording platform", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "🌊", category: "voice-generation-conversion", subcategory: "ai-podcast" },
      { id: "podcastle", name: "Podcastle", description: "AI podcast creation and editing suite", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🏰", category: "voice-generation-conversion", subcategory: "ai-podcast" },
      { id: "descript", name: "Descript", description: "All-in-one podcast editing with AI", url: "", upvotes: 1098, verified: true, rating: 4.5, icon: "📝", category: "voice-generation-conversion", subcategory: "ai-podcast" },
      { id: "wondercraft", name: "Wondercraft", description: "AI podcast creation and production tool", url: "", upvotes: 789, verified: true, rating: 4.4, icon: "🪄", category: "voice-generation-conversion", subcategory: "ai-podcast" }
    ],
    "ai-podcast-clip-generator": [
      { id: "autopod", name: "AutoPod", description: "Automated podcast clip generation", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🎬", category: "voice-generation-conversion", subcategory: "ai-podcast-clip-generator" },
      { id: "clipgen", name: "ClipGen", description: "AI-powered podcast clip creation", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "✂️", category: "voice-generation-conversion", subcategory: "ai-podcast-clip-generator" },
      { id: "podclips", name: "PodClips", description: "Smart podcast clip extraction tool", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "📎", category: "voice-generation-conversion", subcategory: "ai-podcast-clip-generator" },
      { id: "fame-clips", name: "Fame Clips", description: "Viral podcast clip generator", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "⭐", category: "voice-generation-conversion", subcategory: "ai-podcast-clip-generator" },
      { id: "goodlisten", name: "GoodListen", description: "AI podcast highlights and clips", url: "", upvotes: 321, verified: true, rating: 4.2, icon: "👂", category: "voice-generation-conversion", subcategory: "ai-podcast-clip-generator" }
    ],
    "ai-podcast-editing": [
      { id: "cleanvoice-ai", name: "Cleanvoice AI", description: "AI podcast audio cleaning and editing", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🧹", category: "voice-generation-conversion", subcategory: "ai-podcast-editing" },
      { id: "autopod-edit", name: "AutoPod", description: "Automated podcast editing suite", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🎬", category: "voice-generation-conversion", subcategory: "ai-podcast-editing" },
      { id: "detail", name: "Detail", description: "AI-powered audio enhancement", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "🔍", category: "voice-generation-conversion", subcategory: "ai-podcast-editing" },
      { id: "vocut", name: "VoCut", description: "AI voice editing and enhancement", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "🎤", category: "voice-generation-conversion", subcategory: "ai-podcast-editing" },
      { id: "shanda-studio", name: "Shanda Studio", description: "Professional AI podcast editing", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "🎭", category: "voice-generation-conversion", subcategory: "ai-podcast-editing" }
    ],
    "ai-recording": [
      { id: "limitless", name: "Limitless", description: "AI-powered meeting and call recording", url: "", upvotes: 1098, verified: true, rating: 4.6, icon: "♾️", category: "voice-generation-conversion", subcategory: "ai-recording" },
      { id: "wizardshot", name: "Wizardshot", description: "AI screen and voice recording tool", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "🧙", category: "voice-generation-conversion", subcategory: "ai-recording" },
      { id: "speechzap", name: "SpeechZap", description: "AI voice recording and transcription", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "⚡", category: "voice-generation-conversion", subcategory: "ai-recording" },
      { id: "dubnote", name: "Dubnote", description: "AI meeting notes and recording", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "📝", category: "voice-generation-conversion", subcategory: "ai-recording" },
      { id: "tldv", name: "tl;dv", description: "AI meeting recording and summarization", url: "", upvotes: 432, verified: true, rating: 4.2, icon: "📹", category: "voice-generation-conversion", subcategory: "ai-recording" }
    ],
    "ai-speech-recognition": [
      { id: "blahget", name: "Blahget", description: "AI speech recognition and analysis", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "👄", category: "voice-generation-conversion", subcategory: "ai-speech-recognition" },
      { id: "elsa-speak", name: "ELSA Speak", description: "AI English pronunciation coach", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "🗣️", category: "voice-generation-conversion", subcategory: "ai-speech-recognition" },
      { id: "lingvanex", name: "Lingvanex", description: "AI translation and speech recognition", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🌐", category: "voice-generation-conversion", subcategory: "ai-speech-recognition" },
      { id: "boldvoice", name: "BoldVoice", description: "AI accent training and speech recognition", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "💪", category: "voice-generation-conversion", subcategory: "ai-speech-recognition" },
      { id: "tarteel-ai", name: "Tarteel AI", description: "AI Quran recitation and recognition", url: "", upvotes: 432, verified: true, rating: 4.2, icon: "📖", category: "voice-generation-conversion", subcategory: "ai-speech-recognition" }
    ],
    "ai-speech-synthesis": [
      { id: "ttsmaker", name: "TTSMaker", description: "Free AI text-to-speech generator", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🔊", category: "voice-generation-conversion", subcategory: "ai-speech-synthesis" },
      { id: "vbee-aivoice-synth", name: "Vbee AIVoice", description: "Professional AI speech synthesis", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "🐝", category: "voice-generation-conversion", subcategory: "ai-speech-synthesis" },
      { id: "poppop-ai-tts", name: "PopPop AI Text to Speech", description: "AI voice synthesis platform", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🎈", category: "voice-generation-conversion", subcategory: "ai-speech-synthesis" },
      { id: "text-to-speech-openai", name: "Text To Speech OpenAI", description: "OpenAI powered text-to-speech", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "🤖", category: "voice-generation-conversion", subcategory: "ai-speech-synthesis" },
      { id: "desivocal", name: "DesiVocal", description: "AI speech synthesis for Indian languages", url: "", upvotes: 432, verified: false, rating: 4.2, icon: "🇮🇳", category: "voice-generation-conversion", subcategory: "ai-speech-synthesis" }
    ],
    "ai-speech-to-text": [
      { id: "rev", name: "Rev", description: "Professional AI transcription service", url: "", upvotes: 1890, verified: true, rating: 4.8, icon: "🔄", category: "voice-generation-conversion", subcategory: "ai-speech-to-text" },
      { id: "vatis-tech", name: "Vatis Tech", description: "AI speech-to-text technology", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🎤", category: "voice-generation-conversion", subcategory: "ai-speech-to-text" },
      { id: "clipto-ai", name: "Clipto.AI", description: "AI video transcription and clipping", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "✂️", category: "voice-generation-conversion", subcategory: "ai-speech-to-text" },
      { id: "turboscribe", name: "TurboScribe", description: "Fast AI transcription service", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "⚡", category: "voice-generation-conversion", subcategory: "ai-speech-to-text" },
      { id: "transkriptor", name: "Transkriptor", description: "AI transcription and subtitle generator", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "📝", category: "voice-generation-conversion", subcategory: "ai-speech-to-text" }
    ],
    "ai-text-to-speech": [
      { id: "naturalreader", name: "NaturalReader", description: "Natural AI text-to-speech reader", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "📖", category: "voice-generation-conversion", subcategory: "ai-text-to-speech" },
      { id: "speechify", name: "Speechify", description: "AI text-to-speech reading app", url: "", upvotes: 2345, verified: true, rating: 4.8, icon: "🗣️", category: "voice-generation-conversion", subcategory: "ai-text-to-speech" },
      { id: "minimax-audio", name: "MiniMax Audio", description: "Advanced AI text-to-speech engine", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "🔊", category: "voice-generation-conversion", subcategory: "ai-text-to-speech" },
      { id: "luvvoice", name: "Luvvoice", description: "Free AI text-to-speech converter", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "💖", category: "voice-generation-conversion", subcategory: "ai-text-to-speech" },
      { id: "ttsmaker-tts", name: "TTSMaker", description: "Online AI text-to-speech generator", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "🔊", category: "voice-generation-conversion", subcategory: "ai-text-to-speech" }
    ],
    "ai-transcriber": [
      { id: "notta", name: "Notta", description: "AI meeting transcription and notes", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "📝", category: "voice-generation-conversion", subcategory: "ai-transcriber" },
      { id: "riverside-fm-transcribe", name: "Riverside.fm", description: "High-quality transcription service", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🌊", category: "voice-generation-conversion", subcategory: "ai-transcriber" },
      { id: "read-ai", name: "Read AI", description: "AI meeting insights and transcription", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "👁️", category: "voice-generation-conversion", subcategory: "ai-transcriber" },
      { id: "turboscribe-transcribe", name: "TurboScribe", description: "Fast and accurate AI transcription", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "⚡", category: "voice-generation-conversion", subcategory: "ai-transcriber" },
      { id: "fathom", name: "Fathom", description: "AI meeting assistant and transcriber", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "🧠", category: "voice-generation-conversion", subcategory: "ai-transcriber" }
    ],
    "ai-transcription": [
      { id: "clipto-ai-transcription", name: "Clipto.AI", description: "AI video and audio transcription", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "✂️", category: "voice-generation-conversion", subcategory: "ai-transcription" },
      { id: "otter-ai", name: "Otter.ai", description: "AI meeting notes and transcription", url: "", upvotes: 2345, verified: true, rating: 4.8, icon: "🦦", category: "voice-generation-conversion", subcategory: "ai-transcription" },
      { id: "transkriptor-transcription", name: "Transkriptor", description: "Automatic transcription service", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "📝", category: "voice-generation-conversion", subcategory: "ai-transcription" },
      { id: "happy-scribe", name: "Happy Scribe", description: "Professional transcription and subtitles", url: "", upvotes: 987, verified: true, rating: 4.5, icon: "😊", category: "voice-generation-conversion", subcategory: "ai-transcription" },
      { id: "maestra-ai-transcription", name: "Maestra AI", description: "AI transcription and translation service", url: "", upvotes: 765, verified: true, rating: 4.4, icon: "🎭", category: "voice-generation-conversion", subcategory: "ai-transcription" }
    ],
    "ai-voice-assistants": [
      { id: "blahget-assistant", name: "Blahget", description: "AI voice assistant and companion", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "👄", category: "voice-generation-conversion", subcategory: "ai-voice-assistants" },
      { id: "roxy-ai", name: "Roxy - AI Voice companion", description: "Personal AI voice companion", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🎭", category: "voice-generation-conversion", subcategory: "ai-voice-assistants" },
      { id: "honeydo", name: "HoneyDo: Speak, Snap and Shop", description: "Voice shopping assistant", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "🍯", category: "voice-generation-conversion", subcategory: "ai-voice-assistants" },
      { id: "vapi", name: "Vapi", description: "Voice AI platform for developers", url: "", upvotes: 432, verified: true, rating: 4.2, icon: "🔊", category: "voice-generation-conversion", subcategory: "ai-voice-assistants" },
      { id: "callhippo", name: "CallHippo", description: "AI voice assistant for calls", url: "", upvotes: 321, verified: false, rating: 4.1, icon: "📞", category: "voice-generation-conversion", subcategory: "ai-voice-assistants" }
    ],
    "ai-voice-changer": [
      { id: "voicemod", name: "Voicemod", description: "Real-time voice changer and modulator", url: "", upvotes: 1890, verified: true, rating: 4.7, icon: "🎤", category: "voice-generation-conversion", subcategory: "ai-voice-changer" },
      { id: "voice-ai", name: "Voice.ai", description: "AI voice changer for gaming and streaming", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🎮", category: "voice-generation-conversion", subcategory: "ai-voice-changer" },
      { id: "hitpaw-voicepea", name: "HitPaw VoicePea", description: "AI voice changer and effects", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "🥒", category: "voice-generation-conversion", subcategory: "ai-voice-changer" },
      { id: "vozard", name: "Vozard", description: "Voice changer with AI effects", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🎭", category: "voice-generation-conversion", subcategory: "ai-voice-changer" },
      { id: "easeus-voice", name: "EaseUS", description: "AI voice changing software", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "🛠️", category: "voice-generation-conversion", subcategory: "ai-voice-changer" }
    ],
    "ai-voice-cloning": [
      { id: "vidnoz-ai-clone", name: "Vidnoz AI", description: "AI voice cloning and synthesis", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🎬", category: "voice-generation-conversion", subcategory: "ai-voice-cloning" },
      { id: "minimax-audio-clone", name: "MiniMax Audio", description: "Advanced voice cloning technology", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "🔊", category: "voice-generation-conversion", subcategory: "ai-voice-cloning" },
      { id: "kits-ai", name: "Kits AI", description: "AI voice cloning for musicians", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🎵", category: "voice-generation-conversion", subcategory: "ai-voice-cloning" },
      { id: "topmediai", name: "TopMediai", description: "AI voice cloning and generation", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "🎤", category: "voice-generation-conversion", subcategory: "ai-voice-cloning" },
      { id: "fineshare-finevoice", name: "Fineshare FineVoice", description: "AI voice cloning and editing", url: "", upvotes: 432, verified: true, rating: 4.2, icon: "🎙️", category: "voice-generation-conversion", subcategory: "ai-voice-cloning" }
    ],
    "ai-voice-enhancer": [
      { id: "vocal-image", name: "Vocal Image", description: "AI voice enhancement and clarity", url: "", upvotes: 765, verified: true, rating: 4.5, icon: "🎤", category: "voice-generation-conversion", subcategory: "ai-voice-enhancer" },
      { id: "sanas", name: "Sanas", description: "AI accent and voice enhancement", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🗣️", category: "voice-generation-conversion", subcategory: "ai-voice-enhancer" },
      { id: "canvid", name: "Canvid", description: "AI video and voice enhancement", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "🎬", category: "voice-generation-conversion", subcategory: "ai-voice-enhancer" },
      { id: "tomato-ai", name: "Tomato.ai", description: "AI voice quality enhancement", url: "", upvotes: 432, verified: true, rating: 4.2, icon: "🍅", category: "voice-generation-conversion", subcategory: "ai-voice-enhancer" },
      { id: "micvoice-ai", name: "MicVoice.Ai", description: "AI microphone and voice enhancer", url: "", upvotes: 321, verified: false, rating: 4.1, icon: "🎙️", category: "voice-generation-conversion", subcategory: "ai-voice-enhancer" }
    ],
    "ai-voice-generator": [
      { id: "elevenlabs", name: "ElevenLabs", description: "Premium AI voice generation platform", url: "", upvotes: 3456, verified: true, rating: 4.9, icon: "🔊", category: "voice-generation-conversion", subcategory: "ai-voice-generator" },
      { id: "playai", name: "PlayAI", description: "AI voice generation and cloning", url: "", upvotes: 1890, verified: true, rating: 4.7, icon: "▶️", category: "voice-generation-conversion", subcategory: "ai-voice-generator" },
      { id: "fineshare", name: "FineShare", description: "AI voice generator and editor", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🎤", category: "voice-generation-conversion", subcategory: "ai-voice-generator" },
      { id: "fish-audio-generator", name: "Fish Audio", description: "Advanced AI voice synthesis", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "🐟", category: "voice-generation-conversion", subcategory: "ai-voice-generator" },
      { id: "fineshare-finevoice-generator", name: "Fineshare FineVoice", description: "Professional AI voice generation", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🎙️", category: "voice-generation-conversion", subcategory: "ai-voice-generator" }
    ],
    "ai-voice-over": [
      { id: "topmediai-voiceover", name: "TopMediai", description: "AI voice over and dubbing", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🎤", category: "voice-generation-conversion", subcategory: "ai-voice-over" },
      { id: "easeus-voiceover", name: "EaseUS", description: "AI voice over software", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "🛠️", category: "voice-generation-conversion", subcategory: "ai-voice-over" },
      { id: "speechify-voiceover", name: "Speechify", description: "AI voice over generation", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🗣️", category: "voice-generation-conversion", subcategory: "ai-voice-over" },
      { id: "playai-voiceover", name: "PlayAI", description: "Professional AI voice over", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "▶️", category: "voice-generation-conversion", subcategory: "ai-voice-over" },
      { id: "murf-ai-voiceover", name: "Murf AI", description: "AI voice over studio", url: "", upvotes: 432, verified: true, rating: 4.2, icon: "🎤", category: "voice-generation-conversion", subcategory: "ai-voice-over" }
    ],
    "audio-to-text-ai": [
      { id: "turboscribe-audio", name: "TurboScribe", description: "Fast audio to text conversion", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "⚡", category: "voice-generation-conversion", subcategory: "audio-to-text-ai" },
      { id: "notta-audio", name: "Notta", description: "AI audio transcription service", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "📝", category: "voice-generation-conversion", subcategory: "audio-to-text-ai" },
      { id: "deepgram", name: "Deepgram", description: "Speech recognition API platform", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🌊", category: "voice-generation-conversion", subcategory: "audio-to-text-ai" },
      { id: "rev-audio", name: "Rev", description: "Professional audio transcription", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "🔄", category: "voice-generation-conversion", subcategory: "audio-to-text-ai" },
      { id: "vatis-tech-audio", name: "Vatis Tech", description: "AI audio to text technology", url: "", upvotes: 432, verified: true, rating: 4.2, icon: "🎤", category: "voice-generation-conversion", subcategory: "audio-to-text-ai" }
    ],
    "tiktok-ai-voice-generator": [
      { id: "tiktok-voice-generator", name: "TikTok Voice Generator", description: "Official TikTok AI voice synthesis", url: "", upvotes: 2345, verified: true, rating: 4.7, icon: "🎵", category: "voice-generation-conversion", subcategory: "tiktok-ai-voice-generator" },
      { id: "tiktok-voice-chrome", name: "Tiktok Voice Generator Chrome Extension", description: "Browser extension for TikTok voices", url: "", upvotes: 1234, verified: true, rating: 4.5, icon: "🔧", category: "voice-generation-conversion", subcategory: "tiktok-ai-voice-generator" },
      { id: "tiktok-ai-voice", name: "Tiktok AI Voice", description: "TikTok style AI voice generator", url: "", upvotes: 876, verified: true, rating: 4.4, icon: "🎤", category: "voice-generation-conversion", subcategory: "tiktok-ai-voice-generator" },
      { id: "wasento", name: "Wasento", description: "TikTok voice cloning and generation", url: "", upvotes: 654, verified: false, rating: 4.3, icon: "🎭", category: "voice-generation-conversion", subcategory: "tiktok-ai-voice-generator" },
      { id: "crepal", name: "CrePal", description: "Creative TikTok voice generator", url: "", upvotes: 543, verified: true, rating: 4.2, icon: "🎨", category: "voice-generation-conversion", subcategory: "tiktok-ai-voice-generator" }
    ]
  },
  "image-generation-editing": {
    "ai-age-progression": [
      { id: "heyphoto", name: "HeyPhoto", description: "AI photo editing and age progression tool", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "👴", category: "image-generation-editing", subcategory: "ai-age-progression" },
      { id: "extrapolate", name: "Extrapolate", description: "See how you'll age with AI technology", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "📅", category: "image-generation-editing", subcategory: "ai-age-progression" },
      { id: "ourbabyai", name: "OurBabyAI", description: "AI-generated baby photos from parents", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "👶", category: "image-generation-editing", subcategory: "ai-age-progression" },
      { id: "ager-fun", name: "Ager.fun", description: "Fun AI aging and face transformation app", url: "", upvotes: 234, verified: false, rating: 4.2, icon: "🎭", category: "image-generation-editing", subcategory: "ai-age-progression" },
      { id: "ai-face-ager", name: "AI Face Ager", description: "Professional AI age progression technology", url: "", upvotes: 189, verified: true, rating: 4.1, icon: "⏰", category: "image-generation-editing", subcategory: "ai-age-progression" }
    ],
    "ai-avatar-generator": [
      { id: "heygen", name: "HeyGen", description: "AI avatar and video generation platform", url: "", upvotes: 1234, verified: true, rating: 4.8, icon: "🎭", category: "image-generation-editing", subcategory: "ai-avatar-generator" },
      { id: "vidnoz-ai", name: "Vidnoz AI", description: "AI video and avatar creation tool", url: "", upvotes: 789, verified: true, rating: 4.6, icon: "🎬", category: "image-generation-editing", subcategory: "ai-avatar-generator" },
      { id: "live3d", name: "Live3D", description: "3D avatar creation and animation platform", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🎮", category: "image-generation-editing", subcategory: "ai-avatar-generator" },
      { id: "d-id", name: "D-ID", description: "AI-powered talking avatar generator", url: "", upvotes: 456, verified: true, rating: 4.4, icon: "🗣️", category: "image-generation-editing", subcategory: "ai-avatar-generator" },
      { id: "vidyard", name: "Vidyard", description: "Video messaging with AI avatar features", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "📹", category: "image-generation-editing", subcategory: "ai-avatar-generator" }
    ],
    "ai-background-generator": [
      { id: "pacdora-bg", name: "Pacdora AI Background Generator", description: "AI-powered background generation tool", url: "", upvotes: 678, verified: true, rating: 4.6, icon: "🎨", category: "image-generation-editing", subcategory: "ai-background-generator" },
      { id: "insmind", name: "insMind", description: "AI photo editing with background generation", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🖼️", category: "image-generation-editing", subcategory: "ai-background-generator" },
      { id: "pixelcut", name: "Pixelcut", description: "AI background removal and generation", url: "", upvotes: 456, verified: true, rating: 4.4, icon: "✂️", category: "image-generation-editing", subcategory: "ai-background-generator" },
      { id: "ghibli-ai", name: "Ghibli AI", description: "Studio Ghibli style background generator", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "🌿", category: "image-generation-editing", subcategory: "ai-background-generator" },
      { id: "pic-copilot", name: "Pic Copilot", description: "AI-assisted photo background creation", url: "", upvotes: 234, verified: false, rating: 4.2, icon: "🧑‍✈️", category: "image-generation-editing", subcategory: "ai-background-generator" }
    ],
    "ai-background-remover": [
      { id: "remove-bg", name: "remove.bg", description: "Automatic background removal tool", url: "", upvotes: 2345, verified: true, rating: 4.8, icon: "🔍", category: "image-generation-editing", subcategory: "ai-background-remover" },
      { id: "photoroom", name: "Photoroom", description: "AI photo editor with background removal", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "📸", category: "image-generation-editing", subcategory: "ai-background-remover" },
      { id: "erase-bg", name: "Erase.bg", description: "Free background removal with AI", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "🧹", category: "image-generation-editing", subcategory: "ai-background-remover" },
      { id: "befunky", name: "BeFunky", description: "Photo editing suite with background removal", url: "", upvotes: 567, verified: true, rating: 4.4, icon: "🎨", category: "image-generation-editing", subcategory: "ai-background-remover" },
      { id: "insmind-bg", name: "insMind", description: "Professional AI background removal tool", url: "", upvotes: 456, verified: true, rating: 4.3, icon: "🖼️", category: "image-generation-editing", subcategory: "ai-background-remover" }
    ],
    "ai-clothing-removal": [
      { id: "nero", name: "Nero", description: "Advanced photo editing and enhancement", url: "", upvotes: 456, verified: true, rating: 4.3, icon: "🖼️", category: "image-generation-editing", subcategory: "ai-clothing-removal" },
      { id: "palette-app", name: "Palette App", description: "AI-powered photo colorization tool", url: "", upvotes: 345, verified: true, rating: 4.2, icon: "🎨", category: "image-generation-editing", subcategory: "ai-clothing-removal" },
      { id: "imagecolorizer", name: "ImageColorizer", description: "AI photo colorization and restoration", url: "", upvotes: 234, verified: true, rating: 4.1, icon: "🌈", category: "image-generation-editing", subcategory: "ai-clothing-removal" },
      { id: "avclabs", name: "AVCLabs", description: "AI video and photo enhancement suite", url: "", upvotes: 189, verified: true, rating: 4.0, icon: "🔬", category: "image-generation-editing", subcategory: "ai-clothing-removal" },
      { id: "photorestore", name: "PhotoRestore.io", description: "AI photo restoration and enhancement", url: "", upvotes: 156, verified: false, rating: 3.9, icon: "🔧", category: "image-generation-editing", subcategory: "ai-clothing-removal" }
    ],
    "ai-colorize": [
      { id: "undress-app", name: "Undress.app", description: "AI image manipulation tool", url: "", upvotes: 123, verified: false, rating: 3.5, icon: "🔞", category: "image-generation-editing", subcategory: "ai-colorize" },
      { id: "clothoff", name: "ClothOff.net", description: "AI clothing removal application", url: "", upvotes: 98, verified: false, rating: 3.4, icon: "🔞", category: "image-generation-editing", subcategory: "ai-colorize" },
      { id: "anieraser", name: "AniEraser", description: "AI-powered object removal tool", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "🧹", category: "image-generation-editing", subcategory: "ai-colorize" },
      { id: "undress-ai", name: "Undress AI", description: "AI image processing tool", url: "", upvotes: 87, verified: false, rating: 3.3, icon: "🔞", category: "image-generation-editing", subcategory: "ai-colorize" },
      { id: "nudify-online", name: "Nudify.Online", description: "AI image manipulation service", url: "", upvotes: 76, verified: false, rating: 3.2, icon: "🔞", category: "image-generation-editing", subcategory: "ai-colorize" }
    ],
    "ai-cosplay-generator": [
      { id: "facehi", name: "FaceHi", description: "AI face transformation and cosplay generator", url: "", upvotes: 456, verified: true, rating: 4.4, icon: "🎭", category: "image-generation-editing", subcategory: "ai-cosplay-generator" },
      { id: "sharesome-ai-cosplay", name: "Sharesome AI", description: "AI cosplay and character generation", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "🦸", category: "image-generation-editing", subcategory: "ai-cosplay-generator" },
      { id: "empai", name: "Empai", description: "AI-powered cosplay photo generator", url: "", upvotes: 234, verified: false, rating: 4.1, icon: "🎨", category: "image-generation-editing", subcategory: "ai-cosplay-generator" },
      { id: "free-ai-art", name: "Free AI Art Platforms", description: "Free AI art and cosplay generation", url: "", upvotes: 189, verified: true, rating: 4.0, icon: "🎨", category: "image-generation-editing", subcategory: "ai-cosplay-generator" },
      { id: "costumeplay-ai", name: "CostumePlayAI", description: "Specialized AI cosplay generator", url: "", upvotes: 156, verified: false, rating: 3.9, icon: "👗", category: "image-generation-editing", subcategory: "ai-cosplay-generator" }
    ],
    "ai-crop-image": [
      { id: "autocropper", name: "AutoCropper", description: "Automatic AI image cropping tool", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "✂️", category: "image-generation-editing", subcategory: "ai-crop-image" },
      { id: "batch-cropper", name: "Batch Cropper", description: "Bulk image cropping with AI", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "📦", category: "image-generation-editing", subcategory: "ai-crop-image" },
      { id: "cropandgrade", name: "CropandGrade", description: "AI cropping and image grading tool", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "📐", category: "image-generation-editing", subcategory: "ai-crop-image" },
      { id: "face-crop-jet", name: "Face Crop Jet", description: "AI face detection and cropping", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "👤", category: "image-generation-editing", subcategory: "ai-crop-image" },
      { id: "instantedit-ai", name: "InstantEditAI", description: "Instant AI photo editing and cropping", url: "", upvotes: 189, verified: false, rating: 4.1, icon: "⚡", category: "image-generation-editing", subcategory: "ai-crop-image" }
    ],
    "ai-eraser": [
      { id: "recraft", name: "Recraft", description: "AI-powered design and object removal", url: "", upvotes: 789, verified: true, rating: 4.6, icon: "🎨", category: "image-generation-editing", subcategory: "ai-eraser" },
      { id: "insmind-eraser", name: "insMind", description: "AI object removal and photo editing", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🧹", category: "image-generation-editing", subcategory: "ai-eraser" },
      { id: "pipiads-remover", name: "Pipiads AI Image Text Remover", description: "AI text removal from images", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "📝", category: "image-generation-editing", subcategory: "ai-eraser" },
      { id: "autodraft-ai", name: "Autodraft AI", description: "AI drafting and object removal tool", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "✏️", category: "image-generation-editing", subcategory: "ai-eraser" },
      { id: "photiu-ai", name: "Photiu.ai", description: "AI photo editing and object eraser", url: "", upvotes: 234, verified: false, rating: 4.2, icon: "🖼️", category: "image-generation-editing", subcategory: "ai-eraser" }
    ],
    "ai-expand-image": [
      { id: "ai-image-extender", name: "AI Image Extender", description: "Expand images with AI generation", url: "", upvotes: 678, verified: true, rating: 4.6, icon: "🔍", category: "image-generation-editing", subcategory: "ai-expand-image" },
      { id: "ai-expand-image", name: "AI Expand Image", description: "Professional image expansion tool", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "📐", category: "image-generation-editing", subcategory: "ai-expand-image" },
      { id: "hippist-ai", name: "hippist AI", description: "AI image enhancement and expansion", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "🦛", category: "image-generation-editing", subcategory: "ai-expand-image" },
      { id: "virtualfit", name: "VirtualFit", description: "AI image fitting and expansion", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "👕", category: "image-generation-editing", subcategory: "ai-expand-image" },
      { id: "krut-ai", name: "Krut AI", description: "AI-powered image expansion service", url: "", upvotes: 234, verified: false, rating: 4.2, icon: "🚀", category: "image-generation-editing", subcategory: "ai-expand-image" }
    ],
    "ai-face-swap-generator": [
      { id: "ai-face-swap", name: "AI Face Swap", description: "Professional AI face swapping tool", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🔄", category: "image-generation-editing", subcategory: "ai-face-swap-generator" },
      { id: "pixnova-ai", name: "PixNova AI", description: "Advanced AI image generation and face swap", url: "", upvotes: 789, verified: true, rating: 4.6, icon: "✨", category: "image-generation-editing", subcategory: "ai-face-swap-generator" },
      { id: "faceswapper", name: "FaceSwapper", description: "Easy-to-use face swapping application", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "👥", category: "image-generation-editing", subcategory: "ai-face-swap-generator" },
      { id: "dreamvid", name: "DreamVid", description: "AI video and face swap generation", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "🎬", category: "image-generation-editing", subcategory: "ai-face-swap-generator" },
      { id: "deepfake-maker", name: "Deepfake Maker", description: "AI deepfake and face swap creator", url: "", upvotes: 345, verified: false, rating: 4.3, icon: "🎭", category: "image-generation-editing", subcategory: "ai-face-swap-generator" }
    ],
    "ai-headshot-generator": [
      { id: "vidnoz-ai-headshot", name: "Vidnoz AI", description: "Professional AI headshot generator", url: "", upvotes: 987, verified: true, rating: 4.7, icon: "📸", category: "image-generation-editing", subcategory: "ai-headshot-generator" },
      { id: "supawork-ai", name: "Supawork AI", description: "AI headshots for professionals", url: "", upvotes: 678, verified: true, rating: 4.6, icon: "💼", category: "image-generation-editing", subcategory: "ai-headshot-generator" },
      { id: "pixelbin-io", name: "PixelBin.io", description: "AI image processing and headshot generation", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🎯", category: "image-generation-editing", subcategory: "ai-headshot-generator" },
      { id: "ai-ease", name: "AI Ease", description: "Easy AI headshot and portrait generator", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "😊", category: "image-generation-editing", subcategory: "ai-headshot-generator" },
      { id: "artguru-ai", name: "Artguru AI", description: "AI art and headshot generation platform", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "🎨", category: "image-generation-editing", subcategory: "ai-headshot-generator" }
    ],
    "ai-image-combiner": [
      { id: "emoji-combiner", name: "Emoji Combiner", description: "Combine emojis with AI creativity", url: "", upvotes: 456, verified: true, rating: 4.4, icon: "😊", category: "image-generation-editing", subcategory: "ai-image-combiner" },
      { id: "imagefusion", name: "ImageFusion", description: "AI-powered image blending and combination", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🔀", category: "image-generation-editing", subcategory: "ai-image-combiner" },
      { id: "pixnova-ai-combiner", name: "PixNova AI", description: "Advanced AI image combination tool", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "✨", category: "image-generation-editing", subcategory: "ai-image-combiner" },
      { id: "dzine-ai", name: "Dzine AI", description: "AI design and image combination platform", url: "", upvotes: 345, verified: true, rating: 4.2, icon: "🎨", category: "image-generation-editing", subcategory: "ai-image-combiner" },
      { id: "ai-face-swap-combiner", name: "AI Face Swap", description: "Face swap and image combination tool", url: "", upvotes: 234, verified: true, rating: 4.1, icon: "🔄", category: "image-generation-editing", subcategory: "ai-image-combiner" }
    ],
    "ai-image-enhancer": [
      { id: "letsenhance-io", name: "LetsEnhance.io", description: "AI image upscaling and enhancement", url: "", upvotes: 1567, verified: true, rating: 4.8, icon: "🚀", category: "image-generation-editing", subcategory: "ai-image-enhancer" },
      { id: "wondershare-uniconverter", name: "Wondershare UniConverter", description: "All-in-one media tool with AI enhancement", url: "", upvotes: 987, verified: true, rating: 4.6, icon: "🔧", category: "image-generation-editing", subcategory: "ai-image-enhancer" },
      { id: "imglarger", name: "ImgLarger", description: "AI image enlargement and enhancement", url: "", upvotes: 678, verified: true, rating: 4.5, icon: "📈", category: "image-generation-editing", subcategory: "ai-image-enhancer" },
      { id: "krea-ai", name: "Krea AI", description: "Creative AI image generation and enhancement", url: "", upvotes: 567, verified: true, rating: 4.4, icon: "🎨", category: "image-generation-editing", subcategory: "ai-image-enhancer" },
      { id: "upscale-media", name: "Upscale.media", description: "Free AI image upscaling service", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "⬆️", category: "image-generation-editing", subcategory: "ai-image-enhancer" }
    ],
    "ai-image-generator": [
      { id: "freepik-ai", name: "Freepik AI Image Generator", description: "AI image generation from Freepik", url: "", upvotes: 2134, verified: true, rating: 4.8, icon: "🎨", category: "image-generation-editing", subcategory: "ai-image-generator" },
      { id: "shutterstock-ai", name: "Shutterstock", description: "AI image generation by Shutterstock", url: "", upvotes: 1789, verified: true, rating: 4.7, icon: "📸", category: "image-generation-editing", subcategory: "ai-image-generator" },
      { id: "depositphotos-ai", name: "Depositphotos AI Image Generator", description: "Professional AI image creation", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🖼️", category: "image-generation-editing", subcategory: "ai-image-generator" },
      { id: "openart", name: "OpenArt", description: "Open AI art generation platform", url: "", upvotes: 987, verified: true, rating: 4.5, icon: "🎭", category: "image-generation-editing", subcategory: "ai-image-generator" },
      { id: "deepai", name: "DeepAI", description: "Deep learning AI image generator", url: "", upvotes: 756, verified: true, rating: 4.4, icon: "🧠", category: "image-generation-editing", subcategory: "ai-image-generator" }
    ],
    "ai-image-sharpening": [
      { id: "unblurimage-ai", name: "Unblurimage AI", description: "AI-powered image sharpening and deblurring", url: "", upvotes: 678, verified: true, rating: 4.6, icon: "🔍", category: "image-generation-editing", subcategory: "ai-image-sharpening" },
      { id: "fix-blur", name: "Fix Blur", description: "Professional blur removal and sharpening", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🔧", category: "image-generation-editing", subcategory: "ai-image-sharpening" },
      { id: "deblur-ai", name: "Deblur AI", description: "Advanced AI deblurring technology", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "✨", category: "image-generation-editing", subcategory: "ai-image-sharpening" },
      { id: "topaz-labs", name: "Topaz Labs", description: "Professional AI image enhancement suite", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "💎", category: "image-generation-editing", subcategory: "ai-image-sharpening" },
      { id: "letsenhance-sharp", name: "LetsEnhance.io", description: "AI upscaling with sharpening features", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "🚀", category: "image-generation-editing", subcategory: "ai-image-sharpening" }
    ],
    "ai-image-upscaler": [
      { id: "upscale-media-up", name: "Upscale.media", description: "Free AI image upscaling service", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "⬆️", category: "image-generation-editing", subcategory: "ai-image-upscaler" },
      { id: "imgupscaler", name: "ImgUpscaler", description: "AI image upscaling tool", url: "", upvotes: 987, verified: true, rating: 4.6, icon: "📈", category: "image-generation-editing", subcategory: "ai-image-upscaler" },
      { id: "icons8-upscaler", name: "Icons8 Smart Upscaler", description: "Smart AI upscaling technology", url: "", upvotes: 678, verified: true, rating: 4.5, icon: "🎯", category: "image-generation-editing", subcategory: "ai-image-upscaler" },
      { id: "nero-upscaler", name: "Nero", description: "Professional media suite with AI upscaling", url: "", upvotes: 567, verified: true, rating: 4.4, icon: "🔥", category: "image-generation-editing", subcategory: "ai-image-upscaler" },
      { id: "bigjpg", name: "Bigjpg", description: "AI image enlargement for anime and photos", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "📷", category: "image-generation-editing", subcategory: "ai-image-upscaler" }
    ],
    "ai-inpainting": [
      { id: "cleanup-pictures", name: "Cleanup.pictures & Clipdrop", description: "AI object removal and inpainting", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🧹", category: "image-generation-editing", subcategory: "ai-inpainting" },
      { id: "deepany-ai", name: "DeepAny.AI", description: "Deep AI inpainting and restoration", url: "", upvotes: 789, verified: true, rating: 4.6, icon: "🎨", category: "image-generation-editing", subcategory: "ai-inpainting" },
      { id: "pixel-art-ai", name: "Pixel-Art.ai", description: "AI pixel art creation and inpainting", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🎮", category: "image-generation-editing", subcategory: "ai-inpainting" },
      { id: "pixelfox-ai", name: "Pixelfox AI", description: "AI image generation and inpainting", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "🦊", category: "image-generation-editing", subcategory: "ai-inpainting" },
      { id: "sih-ai", name: "Sih.Ai", description: "AI image processing and inpainting", url: "", upvotes: 345, verified: false, rating: 4.3, icon: "🧠", category: "image-generation-editing", subcategory: "ai-inpainting" }
    ],
    "ai-map-generator": [
      { id: "mappedin", name: "Mappedin", description: "AI-powered indoor mapping platform", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🗺️", category: "image-generation-editing", subcategory: "ai-map-generator" },
      { id: "open-knowledge-maps", name: "Open Knowledge Maps", description: "Visual knowledge mapping with AI", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "🧠", category: "image-generation-editing", subcategory: "ai-map-generator" },
      { id: "conceptmap-ai", name: "ConceptMap AI", description: "AI-powered concept mapping tool", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "💡", category: "image-generation-editing", subcategory: "ai-map-generator" },
      { id: "ultimaps", name: "Ultimaps", description: "Ultimate mapping solution with AI", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "🌍", category: "image-generation-editing", subcategory: "ai-map-generator" },
      { id: "mapsgpt", name: "MapsGPT", description: "GPT-powered map generation tool", url: "", upvotes: 189, verified: false, rating: 4.1, icon: "🤖", category: "image-generation-editing", subcategory: "ai-map-generator" }
    ],
    "ai-outpainting": [
      { id: "insmind-outpaint", name: "insMind", description: "AI outpainting and image extension", url: "", upvotes: 678, verified: true, rating: 4.6, icon: "🖼️", category: "image-generation-editing", subcategory: "ai-outpainting" },
      { id: "artbreeder", name: "Artbreeder", description: "Collaborative AI art creation platform", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🎨", category: "image-generation-editing", subcategory: "ai-outpainting" },
      { id: "retouch-ai", name: "RetouchAI", description: "AI photo retouching and outpainting", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "✨", category: "image-generation-editing", subcategory: "ai-outpainting" },
      { id: "ai-image-extender-out", name: "AI Image Extender", description: "Professional image extension tool", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "🔍", category: "image-generation-editing", subcategory: "ai-outpainting" },
      { id: "ai-expand-image-out", name: "AI Expand Image", description: "AI-powered image expansion service", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "📐", category: "image-generation-editing", subcategory: "ai-outpainting" }
    ],
    "ai-passport-photo": [
      { id: "photogov", name: "PhotoGov", description: "Official passport photo generator", url: "", upvotes: 789, verified: true, rating: 4.6, icon: "📷", category: "image-generation-editing", subcategory: "ai-passport-photo" },
      { id: "aipassportphotos", name: "AiPassportPhotos", description: "AI passport and ID photo creator", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🆔", category: "image-generation-editing", subcategory: "ai-passport-photo" },
      { id: "snap2pass", name: "Snap2Pass", description: "Instant passport photo generation", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "📸", category: "image-generation-editing", subcategory: "ai-passport-photo" },
      { id: "passport-photo-maker", name: "Passport Photo Maker", description: "Professional passport photo tool", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "🖼️", category: "image-generation-editing", subcategory: "ai-passport-photo" },
      { id: "passport-maker-ai", name: "Passport Maker AI", description: "AI-powered passport photo service", url: "", upvotes: 234, verified: false, rating: 4.2, icon: "🤖", category: "image-generation-editing", subcategory: "ai-passport-photo" }
    ],
    "ai-person-generator": [
      { id: "icons8-person", name: "Icons8", description: "AI person and avatar generation", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "👤", category: "image-generation-editing", subcategory: "ai-person-generator" },
      { id: "generated-photos", name: "Generated Photos", description: "Diverse AI-generated human faces", url: "", upvotes: 987, verified: true, rating: 4.6, icon: "👥", category: "image-generation-editing", subcategory: "ai-person-generator" },
      { id: "this-person-not-exist", name: "This Person Does Not Exist", description: "Random AI-generated faces", url: "", upvotes: 2345, verified: true, rating: 4.8, icon: "🎭", category: "image-generation-editing", subcategory: "ai-person-generator" },
      { id: "generated-photos-2", name: "Generated Photos", description: "High-quality AI person generator", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "📸", category: "image-generation-editing", subcategory: "ai-person-generator" },
      { id: "thispersonnotexist", name: "ThisPersonNotExist.org", description: "AI-generated people that don't exist", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "🌐", category: "image-generation-editing", subcategory: "ai-person-generator" }
    ],
    "ai-photo-editor": [
      { id: "cutout-pro", name: "Cutout.Pro", description: "AI-powered photo editing suite", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "✂️", category: "image-generation-editing", subcategory: "ai-photo-editor" },
      { id: "vsco", name: "VSCO", description: "Creative photo editing with AI features", url: "", upvotes: 2345, verified: true, rating: 4.8, icon: "📸", category: "image-generation-editing", subcategory: "ai-photo-editor" },
      { id: "pixelcut-editor", name: "Pixelcut", description: "AI background removal and photo editing", url: "", upvotes: 987, verified: true, rating: 4.6, icon: "🎨", category: "image-generation-editing", subcategory: "ai-photo-editor" },
      { id: "fotor-pixlr", name: "FotorPixlr", description: "Online photo editor with AI tools", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "🖼️", category: "image-generation-editing", subcategory: "ai-photo-editor" },
      { id: "picsart", name: "Picsart", description: "Creative photo editing and design app", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🎭", category: "image-generation-editing", subcategory: "ai-photo-editor" }
    ],
    "ai-photo-enhancer": [
      { id: "hitpaw-fotorpea", name: "HitPaw FotorPea", description: "AI photo enhancement software", url: "", upvotes: 789, verified: true, rating: 4.6, icon: "🌟", category: "image-generation-editing", subcategory: "ai-photo-enhancer" },
      { id: "remini", name: "Remini", description: "AI photo and video enhancer", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "✨", category: "image-generation-editing", subcategory: "ai-photo-enhancer" },
      { id: "upscale-media-enhance", name: "Upscale.media", description: "AI image upscaling and enhancement", url: "", upvotes: 987, verified: true, rating: 4.6, icon: "⬆️", category: "image-generation-editing", subcategory: "ai-photo-enhancer" },
      { id: "vanceai", name: "VanceAI", description: "Professional AI photo enhancement suite", url: "", upvotes: 678, verified: true, rating: 4.5, icon: "🚀", category: "image-generation-editing", subcategory: "ai-photo-enhancer" },
      { id: "ai-ease-enhance", name: "AI Ease", description: "Easy AI photo enhancement tool", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "😊", category: "image-generation-editing", subcategory: "ai-photo-enhancer" }
    ],
    "ai-photo-filter": [
      { id: "beautyplus", name: "BeautyPlus", description: "AI beauty filters and photo editing", url: "", upvotes: 1789, verified: true, rating: 4.7, icon: "💄", category: "image-generation-editing", subcategory: "ai-photo-filter" },
      { id: "filterly", name: "Filterly", description: "AI-powered photo filters", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🎨", category: "image-generation-editing", subcategory: "ai-photo-filter" },
      { id: "max-studio", name: "Max Studio", description: "Professional AI photo filters", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "🎬", category: "image-generation-editing", subcategory: "ai-photo-filter" },
      { id: "palette-app-filter", name: "Palette App", description: "AI colorization and filter tool", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "🎨", category: "image-generation-editing", subcategory: "ai-photo-filter" },
      { id: "a1-art", name: "a1.art", description: "AI art filters and style transfer", url: "", upvotes: 234, verified: false, rating: 4.2, icon: "🎭", category: "image-generation-editing", subcategory: "ai-photo-filter" }
    ],
    "ai-photo-restoration": [
      { id: "nero-restore", name: "Nero", description: "Professional photo restoration suite", url: "", upvotes: 789, verified: true, rating: 4.6, icon: "🔧", category: "image-generation-editing", subcategory: "ai-photo-restoration" },
      { id: "imagecolorizer-restore", name: "ImageColorizer", description: "AI photo colorization and restoration", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🌈", category: "image-generation-editing", subcategory: "ai-photo-restoration" },
      { id: "photorestore-io", name: "PhotoRestore.io", description: "AI-powered photo restoration service", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🔄", category: "image-generation-editing", subcategory: "ai-photo-restoration" },
      { id: "restorephotos-io", name: "restorePhotos.io", description: "Free AI photo restoration tool", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "📸", category: "image-generation-editing", subcategory: "ai-photo-restoration" },
      { id: "restorephotos-pro", name: "restorePhotos.Pro", description: "Professional AI photo restoration", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "⭐", category: "image-generation-editing", subcategory: "ai-photo-restoration" }
    ],
    "ai-product-photography": [
      { id: "insmind-product", name: "insMind", description: "AI product photography and editing", url: "", upvotes: 987, verified: true, rating: 4.6, icon: "📦", category: "image-generation-editing", subcategory: "ai-product-photography" },
      { id: "ifoto", name: "iFoto", description: "AI product photo generator", url: "", upvotes: 678, verified: true, rating: 4.5, icon: "📸", category: "image-generation-editing", subcategory: "ai-product-photography" },
      { id: "claid-ai", name: "Claid.ai", description: "AI product image enhancement", url: "", upvotes: 567, verified: true, rating: 4.4, icon: "✨", category: "image-generation-editing", subcategory: "ai-product-photography" },
      { id: "flair-ai", name: "Flair AI", description: "AI product photography platform", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "💫", category: "image-generation-editing", subcategory: "ai-product-photography" },
      { id: "pebblely", name: "Pebblely", description: "AI product photography for e-commerce", url: "", upvotes: 345, verified: true, rating: 4.2, icon: "🛍️", category: "image-generation-editing", subcategory: "ai-product-photography" }
    ],
    "ai-profile-picture-generator": [
      { id: "vidnoz-ai-profile", name: "Vidnoz AI", description: "AI profile picture generator", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "👤", category: "image-generation-editing", subcategory: "ai-profile-picture-generator" },
      { id: "pfpmaker", name: "PFPMaker", description: "Professional profile picture maker", url: "", upvotes: 987, verified: true, rating: 4.6, icon: "🖼️", category: "image-generation-editing", subcategory: "ai-profile-picture-generator" },
      { id: "supawork-ai-profile", name: "Supawork AI", description: "AI headshots and profile pictures", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "💼", category: "image-generation-editing", subcategory: "ai-profile-picture-generator" },
      { id: "genyou", name: "GenYOU", description: "Personalized AI avatar generator", url: "", upvotes: 567, verified: true, rating: 4.4, icon: "🎭", category: "image-generation-editing", subcategory: "ai-profile-picture-generator" },
      { id: "photoai-me", name: "PhotoAI.me", description: "AI-powered photo generation", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "📸", category: "image-generation-editing", subcategory: "ai-profile-picture-generator" }
    ],
    "ai-qr-code-generator": [
      { id: "my-qr-code", name: "My QR Code", description: "Simple QR code generator", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "📱", category: "image-generation-editing", subcategory: "ai-qr-code-generator" },
      { id: "qr-code-ai", name: "QR Code AI", description: "AI-enhanced QR code creation", url: "", upvotes: 567, verified: true, rating: 4.4, icon: "🤖", category: "image-generation-editing", subcategory: "ai-qr-code-generator" },
      { id: "quick-qr-art", name: "Quick QR Art", description: "Artistic QR code generator", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "🎨", category: "image-generation-editing", subcategory: "ai-qr-code-generator" },
      { id: "viralqr", name: "ViralQR", description: "Viral QR code creation tool", url: "", upvotes: 345, verified: true, rating: 4.2, icon: "🔥", category: "image-generation-editing", subcategory: "ai-qr-code-generator" },
      { id: "qrbtf", name: "QRBTF", description: "Beautiful QR code generator", url: "", upvotes: 234, verified: false, rating: 4.1, icon: "✨", category: "image-generation-editing", subcategory: "ai-qr-code-generator" }
    ],
    "ai-realistic-image-generator": [
      { id: "deep-nudes", name: "Deep-nudes.com", description: "AI realistic image generation", url: "", upvotes: 123, verified: false, rating: 3.5, icon: "🔞", category: "image-generation-editing", subcategory: "ai-realistic-image-generator" },
      { id: "vizcom", name: "Vizcom", description: "AI design and visualization tool", url: "", upvotes: 789, verified: true, rating: 4.6, icon: "🎨", category: "image-generation-editing", subcategory: "ai-realistic-image-generator" },
      { id: "zmo-ai", name: "ZMO.AI", description: "AI image generation platform", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🚀", category: "image-generation-editing", subcategory: "ai-realistic-image-generator" },
      { id: "rendair", name: "Rendair", description: "AI rendering and image generation", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "🌟", category: "image-generation-editing", subcategory: "ai-realistic-image-generator" },
      { id: "try9-ai", name: "try9.ai", description: "Advanced AI image generation", url: "", upvotes: 345, verified: false, rating: 4.3, icon: "🎯", category: "image-generation-editing", subcategory: "ai-realistic-image-generator" }
    ],
    "ai-signature-generator": [
      { id: "dropbox-sign", name: "Dropbox Sign", description: "Electronic signature platform", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "✍️", category: "image-generation-editing", subcategory: "ai-signature-generator" },
      { id: "fillout", name: "Fillout", description: "Form builder with signature features", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "📝", category: "image-generation-editing", subcategory: "ai-signature-generator" },
      { id: "ctrly-co", name: "Ctrly.co", description: "Digital signature solution", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "🖊️", category: "image-generation-editing", subcategory: "ai-signature-generator" },
      { id: "make-a-sign", name: "Make a Sign", description: "Custom signature creator", url: "", upvotes: 345, verified: true, rating: 4.2, icon: "📋", category: "image-generation-editing", subcategory: "ai-signature-generator" },
      { id: "sealdigital", name: "SealDigital", description: "Digital seal and signature tool", url: "", upvotes: 234, verified: false, rating: 4.1, icon: "🏷️", category: "image-generation-editing", subcategory: "ai-signature-generator" }
    ],
    "ai-style-transfer": [
      { id: "spline", name: "Spline", description: "3D design tool with AI style transfer", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🎨", category: "image-generation-editing", subcategory: "ai-style-transfer" },
      { id: "lensgo", name: "LensGo", description: "AI-powered style transfer tool", url: "", upvotes: 789, verified: true, rating: 4.6, icon: "📸", category: "image-generation-editing", subcategory: "ai-style-transfer" },
      { id: "ebsynth", name: "EbSynth", description: "Video stylization with AI", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🎬", category: "image-generation-editing", subcategory: "ai-style-transfer" },
      { id: "midjourney-sref", name: "Midjourney Sref Codes Library", description: "Style reference codes for Midjourney", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "🎭", category: "image-generation-editing", subcategory: "ai-style-transfer" },
      { id: "flux-context", name: "flux context", description: "AI context-aware style transfer", url: "", upvotes: 345, verified: false, rating: 4.3, icon: "⚡", category: "image-generation-editing", subcategory: "ai-style-transfer" }
    ],
    "ai-texture-generator": [
      { id: "ai-mc-texture", name: "AI MC Texture", description: "AI Minecraft texture generator", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🎮", category: "image-generation-editing", subcategory: "ai-texture-generator" },
      { id: "pixela-ai", name: "Pixela.ai", description: "AI pixel art and texture generator", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "🎯", category: "image-generation-editing", subcategory: "ai-texture-generator" },
      { id: "tilemaker", name: "TileMaker", description: "Seamless texture and tile generator", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "🧩", category: "image-generation-editing", subcategory: "ai-texture-generator" },
      { id: "scenario", name: "Scenario", description: "Game asset and texture generation", url: "", upvotes: 789, verified: true, rating: 4.6, icon: "🎲", category: "image-generation-editing", subcategory: "ai-texture-generator" },
      { id: "charmed-ai", name: "Charmed AI", description: "AI game asset creation platform", url: "", upvotes: 234, verified: false, rating: 4.2, icon: "✨", category: "image-generation-editing", subcategory: "ai-texture-generator" }
    ],
    "ai-unblur-image": [
      { id: "fotor", name: "Fotor", description: "Online photo editor with unblur features", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "📸", category: "image-generation-editing", subcategory: "ai-unblur-image" },
      { id: "unblurimage-ai-unblur", name: "Unblurimage AI", description: "Specialized AI image deblurring", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "🔍", category: "image-generation-editing", subcategory: "ai-unblur-image" },
      { id: "restorephotos-io-unblur", name: "restorePhotos.io", description: "Photo restoration with deblurring", url: "", upvotes: 567, verified: true, rating: 4.4, icon: "🔄", category: "image-generation-editing", subcategory: "ai-unblur-image" },
      { id: "fix-blur-unblur", name: "Fix Blur", description: "Professional blur removal tool", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "🔧", category: "image-generation-editing", subcategory: "ai-unblur-image" },
      { id: "deblur-ai-unblur", name: "Deblur AI", description: "Advanced AI deblurring technology", url: "", upvotes: 345, verified: true, rating: 4.2, icon: "✨", category: "image-generation-editing", subcategory: "ai-unblur-image" }
    ],
    "ai-waifu-generator": [
      { id: "waifu-labs", name: "Waifu Labs", description: "AI anime character generator", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "🎭", category: "image-generation-editing", subcategory: "ai-waifu-generator" },
      { id: "ai-hentai-generator", name: "AI Hentai Generator", description: "Adult anime art generator", url: "", upvotes: 789, verified: false, rating: 4.2, icon: "🔞", category: "image-generation-editing", subcategory: "ai-waifu-generator" },
      { id: "pinkcatgirls", name: "PinkCatgirls", description: "Anime catgirl character generator", url: "", upvotes: 456, verified: false, rating: 4.1, icon: "🐱", category: "image-generation-editing", subcategory: "ai-waifu-generator" },
      { id: "sorapix", name: "SoraPix", description: "AI anime art creation platform", url: "", upvotes: 567, verified: true, rating: 4.3, icon: "🌸", category: "image-generation-editing", subcategory: "ai-waifu-generator" },
      { id: "spicy-chat-ai", name: "Spicy Chat AI", description: "AI chat with anime characters", url: "", upvotes: 234, verified: false, rating: 3.9, icon: "🌶️", category: "image-generation-editing", subcategory: "ai-waifu-generator" }
    ],
    "ai-wallpaper-generator": [
      { id: "wallpapers-ai", name: "Wallpapers AI", description: "AI-generated wallpapers", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🖼️", category: "image-generation-editing", subcategory: "ai-wallpaper-generator" },
      { id: "dreampix", name: "Dreampix", description: "Dream-like AI wallpaper creator", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "💭", category: "image-generation-editing", subcategory: "ai-wallpaper-generator" },
      { id: "labubu-wallpaper", name: "Labubu live wallpaper", description: "Animated wallpaper generator", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "🎬", category: "image-generation-editing", subcategory: "ai-wallpaper-generator" },
      { id: "ohmywall", name: "Ohmywall", description: "Custom wallpaper creation tool", url: "", upvotes: 567, verified: true, rating: 4.4, icon: "🎨", category: "image-generation-editing", subcategory: "ai-wallpaper-generator" },
      { id: "aesthetic-wallpaper-ai", name: "Aesthetic Wallpaper AI", description: "Aesthetic AI wallpaper generator", url: "", upvotes: 345, verified: false, rating: 4.2, icon: "✨", category: "image-generation-editing", subcategory: "ai-wallpaper-generator" }
    ],
    "ai-watermark-remover": [
      { id: "watermarkremover-io", name: "WatermarkRemover.io", description: "AI watermark removal tool", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "🧹", category: "image-generation-editing", subcategory: "ai-watermark-remover" },
      { id: "dewatermark-ai", name: "Dewatermark.AI", description: "Professional watermark removal", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "💧", category: "image-generation-editing", subcategory: "ai-watermark-remover" },
      { id: "unwatermark-ai", name: "Unwatermark AI", description: "AI-powered watermark eraser", url: "", upvotes: 567, verified: true, rating: 4.4, icon: "🔄", category: "image-generation-editing", subcategory: "ai-watermark-remover" },
      { id: "snapedit", name: "SnapEdit", description: "Photo editing with watermark removal", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "📸", category: "image-generation-editing", subcategory: "ai-watermark-remover" },
      { id: "photogrid", name: "PhotoGrid", description: "Photo collage with watermark removal", url: "", upvotes: 345, verified: true, rating: 4.2, icon: "📷", category: "image-generation-editing", subcategory: "ai-watermark-remover" }
    ],
    "ai-yearbook": [
      { id: "yearbookphotos", name: "YearbookPhotos", description: "AI yearbook photo generator", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "📚", category: "image-generation-editing", subcategory: "ai-yearbook" },
      { id: "imgkits", name: "Imgkits - Top AI Image & Video Processing Tools Online", description: "Comprehensive AI image processing", url: "", upvotes: 567, verified: true, rating: 4.4, icon: "🛠️", category: "image-generation-editing", subcategory: "ai-yearbook" },
      { id: "ai-face-swap-yearbook", name: "AI Face Swap", description: "Face swap for yearbook photos", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "🔄", category: "image-generation-editing", subcategory: "ai-yearbook" },
      { id: "ai-shots", name: "AI Shots", description: "Professional AI photo generation", url: "", upvotes: 345, verified: true, rating: 4.2, icon: "📸", category: "image-generation-editing", subcategory: "ai-yearbook" },
      { id: "photoguruai", name: "PhotoGuruAI", description: "AI photo enhancement and styling", url: "", upvotes: 234, verified: false, rating: 4.1, icon: "🎯", category: "image-generation-editing", subcategory: "ai-yearbook" }
    ],
    "gender-swap-ai": [
      { id: "faceswapper-gender", name: "FaceSwapper", description: "Gender swap with AI face technology", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🔄", category: "image-generation-editing", subcategory: "gender-swap-ai" },
      { id: "deepfake-maker-gender", name: "Deepfake Maker", description: "AI deepfake and gender transformation", url: "", upvotes: 789, verified: false, rating: 4.3, icon: "🎭", category: "image-generation-editing", subcategory: "gender-swap-ai" },
      { id: "heyphoto-gender", name: "HeyPhoto", description: "AI photo editing with gender swap", url: "", upvotes: 567, verified: true, rating: 4.4, icon: "📸", category: "image-generation-editing", subcategory: "gender-swap-ai" },
      { id: "face-swapper-gender", name: "Face Swapper", description: "Professional face and gender swapping", url: "", upvotes: 432, verified: true, rating: 4.2, icon: "👥", category: "image-generation-editing", subcategory: "gender-swap-ai" },
      { id: "ai-face-swap-gender", name: "AI Face Swap", description: "Advanced AI face and gender swap", url: "", upvotes: 345, verified: true, rating: 4.1, icon: "🤖", category: "image-generation-editing", subcategory: "gender-swap-ai" }
    ],
    "image-to-image": [
      { id: "artguru-ai-img2img", name: "Artguru AI", description: "AI image-to-image transformation", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🎨", category: "image-generation-editing", subcategory: "image-to-image" },
      { id: "image-to-image-ai", name: "Image To Image AI", description: "Professional image transformation", url: "", upvotes: 789, verified: true, rating: 4.6, icon: "🔄", category: "image-generation-editing", subcategory: "image-to-image" },
      { id: "piclumen", name: "PicLumen", description: "AI-powered image enhancement", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "💡", category: "image-generation-editing", subcategory: "image-to-image" },
      { id: "flux-ai", name: "Flux AI", description: "Advanced AI image generation", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "⚡", category: "image-generation-editing", subcategory: "image-to-image" },
      { id: "vivago-ai", name: "VIVAGO AI", description: "Creative AI image transformation", url: "", upvotes: 345, verified: false, rating: 4.3, icon: "🌟", category: "image-generation-editing", subcategory: "image-to-image" }
    ],
    "object-remover-ai": [
      { id: "snapedit-remover", name: "SnapEdit", description: "AI object removal from photos", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "📸", category: "image-generation-editing", subcategory: "object-remover-ai" },
      { id: "cleanup-pictures-remover", name: "Cleanup.pictures & Clipdrop", description: "Professional object removal tool", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🧹", category: "image-generation-editing", subcategory: "object-remover-ai" },
      { id: "watermarkremover-io-obj", name: "WatermarkRemover.io", description: "Remove objects and watermarks", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "🔧", category: "image-generation-editing", subcategory: "object-remover-ai" },
      { id: "kittl", name: "Kittl", description: "Design tool with object removal", url: "", upvotes: 567, verified: true, rating: 4.4, icon: "🎨", category: "image-generation-editing", subcategory: "object-remover-ai" },
      { id: "beautyplus-remover", name: "BeautyPlus", description: "Beauty app with object removal", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "💄", category: "image-generation-editing", subcategory: "object-remover-ai" }
    ],
    "text-to-handwriting": [
      { id: "handtext-ai", name: "HandtextAI", description: "Convert text to handwriting", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "✍️", category: "image-generation-editing", subcategory: "text-to-handwriting" },
      { id: "imgkits-handwriting", name: "Imgkits - Top AI Image & Video Processing Tools Online", description: "Text to handwriting conversion", url: "", upvotes: 567, verified: true, rating: 4.4, icon: "🛠️", category: "image-generation-editing", subcategory: "text-to-handwriting" },
      { id: "wishgram", name: "Wishgram", description: "Handwritten message generator", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "💌", category: "image-generation-editing", subcategory: "text-to-handwriting" },
      { id: "xx-video-downloader", name: "XX Video Downloader All Social - indownio, instafinsta", description: "Multi-purpose tool with handwriting", url: "", upvotes: 234, verified: false, rating: 4.1, icon: "⬇️", category: "image-generation-editing", subcategory: "text-to-handwriting" },
      { id: "dear-ai-handwriting", name: "Dear Ai", description: "AI letter writing with handwriting", url: "", upvotes: 345, verified: true, rating: 4.2, icon: "💌", category: "image-generation-editing", subcategory: "text-to-handwriting" }
    ],
    "text-to-image": [
      { id: "kittl-text2img", name: "Kittl", description: "Design tool with text-to-image AI", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "🎨", category: "image-generation-editing", subcategory: "text-to-image" },
      { id: "artguru-ai-text2img", name: "Artguru AI", description: "Professional text-to-image generator", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🖼️", category: "image-generation-editing", subcategory: "text-to-image" },
      { id: "leonardo-ai", name: "Leonardo.Ai", description: "Advanced AI image generation", url: "", upvotes: 2345, verified: true, rating: 4.8, icon: "🎭", category: "image-generation-editing", subcategory: "text-to-image" },
      { id: "pollo-ai", name: "Pollo AI", description: "Creative AI image generation", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "🐔", category: "image-generation-editing", subcategory: "text-to-image" },
      { id: "pica-ai", name: "Pica AI", description: "AI-powered image creation", url: "", upvotes: 567, verified: false, rating: 4.4, icon: "🖼️", category: "image-generation-editing", subcategory: "text-to-image" }
    ]
  },
  "writing-editing": {
    "ai-blog-generator": [
      { id: "junia-ai", name: "Junia AI", description: "AI-powered blog content generator with SEO optimization", url: "", upvotes: 245, verified: true, rating: 4.6, icon: "📝", category: "writing-editing", subcategory: "ai-blog-generator" },
      { id: "writesonic", name: "Writesonic", description: "AI writing tool for blogs, ads, and marketing copy", url: "", upvotes: 623, verified: true, rating: 4.4, icon: "🚀", category: "writing-editing", subcategory: "ai-blog-generator" },
      { id: "aiktp", name: "Aiktp", description: "Advanced AI content creation platform for bloggers", url: "", upvotes: 156, verified: true, rating: 4.3, icon: "✨", category: "writing-editing", subcategory: "ai-blog-generator" },
      { id: "durable", name: "Durable", description: "AI website and blog builder with automated content generation", url: "", upvotes: 189, verified: true, rating: 4.5, icon: "🔧", category: "writing-editing", subcategory: "ai-blog-generator" },
      { id: "gravitywrite", name: "GravityWrite", description: "AI writing assistant for high-quality blog content", url: "", upvotes: 312, verified: true, rating: 4.7, icon: "🌟", category: "writing-editing", subcategory: "ai-blog-generator" }
    ],
    "ai-book-writing": [
      { id: "squibler", name: "Squibler", description: "AI-powered writing tool for authors and screenwriters", url: "", upvotes: 456, verified: true, rating: 4.5, icon: "📚", category: "writing-editing", subcategory: "ai-book-writing" },
      { id: "dabble", name: "Dabble", description: "Writing software with AI assistance for novel planning", url: "", upvotes: 234, verified: true, rating: 4.3, icon: "✍️", category: "writing-editing", subcategory: "ai-book-writing" },
      { id: "book-by-anyone", name: "Book by Anyone", description: "AI book writing platform for aspiring authors", url: "", upvotes: 123, verified: false, rating: 4.1, icon: "📖", category: "writing-editing", subcategory: "ai-book-writing" },
      { id: "ebookmaker", name: "EbookMaker", description: "AI-powered ebook creation and formatting tool", url: "", upvotes: 189, verified: true, rating: 4.4, icon: "📱", category: "writing-editing", subcategory: "ai-book-writing" },
      { id: "automateed", name: "Automateed", description: "Automated content generation for book writing", url: "", upvotes: 98, verified: false, rating: 3.9, icon: "🤖", category: "writing-editing", subcategory: "ai-book-writing" }
    ],
    "ai-caption-generator": [
      { id: "ai-photocaption", name: "AI PhotoCaption—Text Generator", description: "Generate engaging captions for photos and social media", url: "", upvotes: 678, verified: true, rating: 4.6, icon: "📸", category: "writing-editing", subcategory: "ai-caption-generator" },
      { id: "submagic", name: "Submagic", description: "AI-powered subtitle and caption generation for videos", url: "", upvotes: 534, verified: true, rating: 4.5, icon: "🎬", category: "writing-editing", subcategory: "ai-caption-generator" },
      { id: "zeemo", name: "Zeemo", description: "Automatic subtitle generator with AI accuracy", url: "", upvotes: 445, verified: true, rating: 4.4, icon: "📺", category: "writing-editing", subcategory: "ai-caption-generator" },
      { id: "flick", name: "Flick", description: "Social media caption generator with hashtag suggestions", url: "", upvotes: 321, verified: true, rating: 4.3, icon: "📱", category: "writing-editing", subcategory: "ai-caption-generator" },
      { id: "planable", name: "Planable", description: "Social media planning tool with AI caption generation", url: "", upvotes: 267, verified: true, rating: 4.2, icon: "📅", category: "writing-editing", subcategory: "ai-caption-generator" }
    ],
    "ai-chat-generator": [
      { id: "chai", name: "CHAI", description: "AI chatbot platform for interactive conversations", url: "", upvotes: 789, verified: true, rating: 4.7, icon: "☕", category: "writing-editing", subcategory: "ai-chat-generator" },
      { id: "sharesome-ai", name: "Sharesome AI", description: "AI chat and content sharing platform", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "💬", category: "writing-editing", subcategory: "ai-chat-generator" },
      { id: "chatfuel", name: "Chatfuel", description: "AI chatbot builder for businesses", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🤖", category: "writing-editing", subcategory: "ai-chat-generator" },
      { id: "landbot", name: "Landbot", description: "Conversational AI platform for customer engagement", url: "", upvotes: 423, verified: true, rating: 4.4, icon: "🚀", category: "writing-editing", subcategory: "ai-chat-generator" },
      { id: "typebot", name: "Typebot", description: "Open-source chatbot builder with AI capabilities", url: "", upvotes: 234, verified: false, rating: 4.2, icon: "⌨️", category: "writing-editing", subcategory: "ai-chat-generator" }
    ],
    "ai-copywriting": [
      { id: "contentful", name: "Contentful", description: "Headless CMS with AI-powered content creation", url: "", upvotes: 1234, verified: true, rating: 4.8, icon: "🏢", category: "writing-editing", subcategory: "ai-copywriting" },
      { id: "hotpot-ai", name: "Hotpot.ai", description: "AI copywriting and design tool for marketing", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🔥", category: "writing-editing", subcategory: "ai-copywriting" },
      { id: "unbounce", name: "Unbounce", description: "Landing page builder with AI copywriting features", url: "", upvotes: 789, verified: true, rating: 4.6, icon: "📄", category: "writing-editing", subcategory: "ai-copywriting" },
      { id: "typli-ai", name: "Typli.ai", description: "AI writing assistant for copywriting and content", url: "", upvotes: 345, verified: true, rating: 4.4, icon: "✍️", category: "writing-editing", subcategory: "ai-copywriting" },
      { id: "nichesss", name: "nichesss", description: "AI-powered niche content and copy generator", url: "", upvotes: 456, verified: true, rating: 4.3, icon: "🎯", category: "writing-editing", subcategory: "ai-copywriting" }
    ],
    "ai-cover-letter-generator": [
      { id: "cvwizard", name: "CVwizard", description: "Professional CV and cover letter generator", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "📄", category: "writing-editing", subcategory: "ai-cover-letter-generator" },
      { id: "careerflow", name: "Careerflow", description: "AI-powered career tools including cover letters", url: "", upvotes: 423, verified: true, rating: 4.4, icon: "💼", category: "writing-editing", subcategory: "ai-cover-letter-generator" },
      { id: "kickresume", name: "Kickresume", description: "Resume and cover letter builder with AI assistance", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "🚀", category: "writing-editing", subcategory: "ai-cover-letter-generator" },
      { id: "wonsulting-ai", name: "WonsultingAI", description: "AI career consulting and cover letter optimization", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "🏆", category: "writing-editing", subcategory: "ai-cover-letter-generator" },
      { id: "huntr", name: "Huntr", description: "Job tracking platform with AI cover letter tools", url: "", upvotes: 189, verified: true, rating: 4.1, icon: "🎯", category: "writing-editing", subcategory: "ai-cover-letter-generator" }
    ],
    "ai-creative-writing": [
      { id: "sudowrite", name: "Sudowrite", description: "AI writing partner for creative fiction writing", url: "", upvotes: 789, verified: true, rating: 4.7, icon: "✨", category: "writing-editing", subcategory: "ai-creative-writing" },
      { id: "notebook-ai", name: "Notebook.ai", description: "World-building and character development tool", url: "", upvotes: 456, verified: true, rating: 4.5, icon: "📓", category: "writing-editing", subcategory: "ai-creative-writing" },
      { id: "lyricstudio", name: "LyricStudio", description: "AI-powered songwriting and lyric generation", url: "", upvotes: 345, verified: true, rating: 4.4, icon: "🎵", category: "writing-editing", subcategory: "ai-creative-writing" },
      { id: "bedtimestory-ai", name: "Bedtimestory.ai", description: "AI-generated personalized children's stories", url: "", upvotes: 234, verified: true, rating: 4.3, icon: "🌙", category: "writing-editing", subcategory: "ai-creative-writing" },
      { id: "cowriter", name: "Cowriter", description: "AI writing companion for creative projects", url: "", upvotes: 189, verified: false, rating: 4.2, icon: "✍️", category: "writing-editing", subcategory: "ai-creative-writing" }
    ],
    "ai-description-generator": [
      { id: "vidiq", name: "VidIQ", description: "YouTube optimization tool with AI descriptions", url: "", upvotes: 1234, verified: true, rating: 4.8, icon: "📺", category: "writing-editing", subcategory: "ai-description-generator" },
      { id: "songtell", name: "Songtell", description: "AI music description and analysis platform", url: "", upvotes: 345, verified: true, rating: 4.4, icon: "🎵", category: "writing-editing", subcategory: "ai-description-generator" },
      { id: "cyanite-ai", name: "Cyanite.ai", description: "AI music analysis and description service", url: "", upvotes: 234, verified: true, rating: 4.3, icon: "🎶", category: "writing-editing", subcategory: "ai-description-generator" },
      { id: "taja-ai", name: "Taja AI", description: "AI content optimization and description tool", url: "", upvotes: 189, verified: true, rating: 4.2, icon: "🎯", category: "writing-editing", subcategory: "ai-description-generator" },
      { id: "styldod", name: "Styldod", description: "AI-powered real estate description generator", url: "", upvotes: 156, verified: false, rating: 4.1, icon: "🏠", category: "writing-editing", subcategory: "ai-description-generator" }
    ],
    "ai-dialogue-generator": [
      { id: "confab", name: "Confab", description: "AI dialogue and conversation generator", url: "", upvotes: 234, verified: true, rating: 4.3, icon: "💬", category: "writing-editing", subcategory: "ai-dialogue-generator" },
      { id: "infinite-convo", name: "Infinite Convo", description: "Endless AI-generated conversations", url: "", upvotes: 189, verified: false, rating: 4.2, icon: "♾️", category: "writing-editing", subcategory: "ai-dialogue-generator" },
      { id: "chatgpt-soliloquy", name: "ChatGPT-Soliloquy", description: "AI-powered internal dialogue generator", url: "", upvotes: 156, verified: true, rating: 4.1, icon: "🤔", category: "writing-editing", subcategory: "ai-dialogue-generator" },
      { id: "opinionate", name: "Opinionate", description: "AI debate and opinion dialogue creator", url: "", upvotes: 123, verified: false, rating: 4.0, icon: "💭", category: "writing-editing", subcategory: "ai-dialogue-generator" },
      { id: "ae-studio-skunkworks", name: "AE Studio's Same Day Skunkworks", description: "Rapid AI dialogue prototyping tool", url: "", upvotes: 98, verified: true, rating: 3.9, icon: "⚡", category: "writing-editing", subcategory: "ai-dialogue-generator" }
    ],
    "ai-ebook-generator": [
      { id: "designrr", name: "Designrr", description: "Convert content into professional ebooks", url: "", upvotes: 456, verified: true, rating: 4.5, icon: "📚", category: "writing-editing", subcategory: "ai-ebook-generator" },
      { id: "ebookmaker-2", name: "EbookMaker", description: "AI-powered ebook creation platform", url: "", upvotes: 345, verified: true, rating: 4.4, icon: "📖", category: "writing-editing", subcategory: "ai-ebook-generator" },
      { id: "automateed-2", name: "Automateed", description: "Automated ebook generation and formatting", url: "", upvotes: 234, verified: false, rating: 4.2, icon: "🤖", category: "writing-editing", subcategory: "ai-ebook-generator" },
      { id: "ai-book-generator", name: "AI Book Generator", description: "Complete AI book creation solution", url: "", upvotes: 189, verified: true, rating: 4.3, icon: "📝", category: "writing-editing", subcategory: "ai-ebook-generator" },
      { id: "youbooks", name: "Youbooks", description: "Personalized AI ebook generator", url: "", upvotes: 156, verified: false, rating: 4.1, icon: "👤", category: "writing-editing", subcategory: "ai-ebook-generator" }
    ],
    "ai-email-writer": [
      { id: "superhuman", name: "Superhuman", description: "AI-powered email client with smart compose", url: "", upvotes: 1567, verified: true, rating: 4.8, icon: "⚡", category: "writing-editing", subcategory: "ai-email-writer" },
      { id: "spark-mail", name: "Spark Mail", description: "Intelligent email app with AI writing assistance", url: "", upvotes: 789, verified: true, rating: 4.6, icon: "✨", category: "writing-editing", subcategory: "ai-email-writer" },
      { id: "shortwave", name: "Shortwave", description: "Modern email client with AI features", url: "", upvotes: 456, verified: true, rating: 4.5, icon: "📧", category: "writing-editing", subcategory: "ai-email-writer" },
      { id: "success-ai", name: "Success.ai", description: "AI email outreach and writing platform", url: "", upvotes: 345, verified: true, rating: 4.4, icon: "🎯", category: "writing-editing", subcategory: "ai-email-writer" },
      { id: "mailmaestro", name: "MailMaestro", description: "AI email writing assistant for professionals", url: "", upvotes: 234, verified: true, rating: 4.3, icon: "🎼", category: "writing-editing", subcategory: "ai-email-writer" }
    ],
    "ai-essay-writer": [
      { id: "terabox", name: "TeraBox", description: "Cloud storage with AI writing features", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "📦", category: "writing-editing", subcategory: "ai-essay-writer" },
      { id: "jenni-ai", name: "Jenni AI", description: "AI writing assistant for academic papers", url: "", upvotes: 654, verified: true, rating: 4.6, icon: "🎓", category: "writing-editing", subcategory: "ai-essay-writer" },
      { id: "supa", name: "Supa", description: "AI-powered essay writing and research tool", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "📚", category: "writing-editing", subcategory: "ai-essay-writer" },
      { id: "writeless", name: "Writeless", description: "Academic writing assistant with AI support", url: "", upvotes: 321, verified: true, rating: 4.3, icon: "✍️", category: "writing-editing", subcategory: "ai-essay-writer" },
      { id: "perfectessaywriter", name: "Perfectessaywriter.ai", description: "AI essay writing and editing platform", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "🏆", category: "writing-editing", subcategory: "ai-essay-writer" }
    ],
    "ai-fanfic-generator": [
      { id: "deep-realms", name: "Deep Realms", description: "AI-powered fanfiction and story generator", url: "", upvotes: 456, verified: true, rating: 4.4, icon: "🌌", category: "writing-editing", subcategory: "ai-fanfic-generator" },
      { id: "tosh-tv-shows", name: "tosh TV Shows", description: "TV show fanfiction generator", url: "", upvotes: 234, verified: false, rating: 4.1, icon: "📺", category: "writing-editing", subcategory: "ai-fanfic-generator" },
      { id: "headcanon-generator", name: "Headcanon Generator XYZ", description: "Generate headcanons for your favorite fandoms", url: "", upvotes: 189, verified: true, rating: 4.2, icon: "💭", category: "writing-editing", subcategory: "ai-fanfic-generator" },
      { id: "altplot", name: "AltPlot", description: "Alternative plot generator for fanfiction", url: "", upvotes: 156, verified: false, rating: 4.0, icon: "🔄", category: "writing-editing", subcategory: "ai-fanfic-generator" },
      { id: "holo-ai", name: "Holo AI", description: "Interactive AI storytelling platform", url: "", upvotes: 123, verified: true, rating: 4.3, icon: "🤖", category: "writing-editing", subcategory: "ai-fanfic-generator" }
    ],
    "ai-grammar-checker": [
      { id: "languagetool", name: "LanguageTool", description: "Multilingual grammar and style checker", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🔍", category: "writing-editing", subcategory: "ai-grammar-checker" },
      { id: "quillbot", name: "QuillBot", description: "AI writing and grammar checking tool", url: "", upvotes: 987, verified: true, rating: 4.6, icon: "🪶", category: "writing-editing", subcategory: "ai-grammar-checker" },
      { id: "grammarly", name: "Grammarly", description: "AI-powered writing assistant and grammar checker", url: "", upvotes: 2134, verified: true, rating: 4.8, icon: "✅", category: "writing-editing", subcategory: "ai-grammar-checker" },
      { id: "prowritingaid", name: "ProWritingAid", description: "Comprehensive writing analysis and grammar tool", url: "", upvotes: 765, verified: true, rating: 4.5, icon: "📝", category: "writing-editing", subcategory: "ai-grammar-checker" },
      { id: "toppdf", name: "TopPDF", description: "PDF editing with grammar checking features", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "📄", category: "writing-editing", subcategory: "ai-grammar-checker" }
    ],
    "ai-image-description-generator": [
      { id: "image-describer", name: "Image Describer", description: "AI-powered image description generator", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🖼️", category: "writing-editing", subcategory: "ai-image-description-generator" },
      { id: "describe-image-ai", name: "Describe Image & Picture - AI Image Description, Markdown, and Text Converter", description: "Convert images to detailed text descriptions", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "📸", category: "writing-editing", subcategory: "ai-image-description-generator" },
      { id: "alttext-ai", name: "AltText.ai", description: "Automatic alt text generation for images", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "🏷️", category: "writing-editing", subcategory: "ai-image-description-generator" },
      { id: "continual-engine", name: "Continual Engine", description: "AI-powered content analysis and description", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "⚙️", category: "writing-editing", subcategory: "ai-image-description-generator" },
      { id: "visionati", name: "Visionati", description: "AI vision analysis and description tool", url: "", upvotes: 189, verified: false, rating: 4.1, icon: "👁️", category: "writing-editing", subcategory: "ai-image-description-generator" }
    ],
    "ai-inspirational-quotes": [
      { id: "inspirobot", name: "InspiroBot", description: "AI-generated inspirational quotes", url: "", upvotes: 789, verified: true, rating: 4.4, icon: "🤖", category: "writing-editing", subcategory: "ai-inspirational-quotes" },
      { id: "capybara-affirmations", name: "Capybara Affirmations AI", description: "Cute capybara-themed positive affirmations", url: "", upvotes: 456, verified: true, rating: 4.5, icon: "🦌", category: "writing-editing", subcategory: "ai-inspirational-quotes" },
      { id: "atfirst-affirmations", name: "AtFirst - Daily Affirmations", description: "Personalized daily affirmations and quotes", url: "", upvotes: 234, verified: true, rating: 4.3, icon: "🌅", category: "writing-editing", subcategory: "ai-inspirational-quotes" },
      { id: "daily-nightly-affirmations", name: "Daily, Nightly-AI Affirmations", description: "Morning and evening AI affirmations", url: "", upvotes: 189, verified: true, rating: 4.2, icon: "🌙", category: "writing-editing", subcategory: "ai-inspirational-quotes" },
      { id: "harmonis", name: "Harmonis", description: "Harmony-focused inspirational content generator", url: "", upvotes: 156, verified: false, rating: 4.1, icon: "🎵", category: "writing-editing", subcategory: "ai-inspirational-quotes" }
    ],
    "ai-job-description-generator": [
      { id: "recruit-crm", name: "Recruit CRM", description: "CRM with AI job description generation", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "💼", category: "writing-editing", subcategory: "ai-job-description-generator" },
      { id: "jobed", name: "Jobed", description: "AI-powered job description creator", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "📋", category: "writing-editing", subcategory: "ai-job-description-generator" },
      { id: "helio-ai", name: "Helio.AI", description: "AI recruitment and job description tool", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "☀️", category: "writing-editing", subcategory: "ai-job-description-generator" },
      { id: "loubby-ai", name: "Loubby AI", description: "AI assistant for HR and job descriptions", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "🤖", category: "writing-editing", subcategory: "ai-job-description-generator" },
      { id: "recruitryte", name: "recruitRyte", description: "AI-powered recruitment writing tool", url: "", upvotes: 189, verified: false, rating: 4.1, icon: "✍️", category: "writing-editing", subcategory: "ai-job-description-generator" }
    ],
    "ai-letter-writer": [
      { id: "dispute-panda", name: "Dispute Panda", description: "AI letter generator for disputes and complaints", url: "", upvotes: 456, verified: true, rating: 4.4, icon: "🐼", category: "writing-editing", subcategory: "ai-letter-writer" },
      { id: "dear-ai", name: "Dear Ai", description: "Personal letter writing AI assistant", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "💌", category: "writing-editing", subcategory: "ai-letter-writer" },
      { id: "ai-postcard-generator", name: "AI Postcard Generator", description: "Generate personalized postcard messages", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "📮", category: "writing-editing", subcategory: "ai-letter-writer" },
      { id: "iquit-ai", name: "iQuit.ai", description: "AI resignation letter generator", url: "", upvotes: 189, verified: true, rating: 4.1, icon: "👋", category: "writing-editing", subcategory: "ai-letter-writer" },
      { id: "happy-dads", name: "1000 Happy Dads", description: "AI tool for family-focused letter writing", url: "", upvotes: 156, verified: false, rating: 4.0, icon: "👨‍👧‍👦", category: "writing-editing", subcategory: "ai-letter-writer" }
    ],
    "ai-love-letter-generator": [
      { id: "wonderful-valentimes", name: "Wonderful Valemtimes", description: "Romantic Valentine's letter generator", url: "", upvotes: 345, verified: true, rating: 4.4, icon: "💝", category: "writing-editing", subcategory: "ai-love-letter-generator" },
      { id: "selfloveletter", name: "SelfLoveLetter", description: "Self-love and affirmation letter generator", url: "", upvotes: 234, verified: true, rating: 4.3, icon: "💖", category: "writing-editing", subcategory: "ai-love-letter-generator" },
      { id: "true-love-letter", name: "True Love Letter", description: "Authentic romantic letter AI generator", url: "", upvotes: 189, verified: true, rating: 4.2, icon: "💕", category: "writing-editing", subcategory: "ai-love-letter-generator" },
      { id: "loveleetr", name: "LoveLeetr", description: "Personalized love letter creation tool", url: "", upvotes: 156, verified: false, rating: 4.1, icon: "💌", category: "writing-editing", subcategory: "ai-love-letter-generator" },
      { id: "love-letter-generator", name: "Love Letter Generator", description: "Simple AI love letter generator", url: "", upvotes: 123, verified: true, rating: 4.0, icon: "❤️", category: "writing-editing", subcategory: "ai-love-letter-generator" }
    ],
    "ai-message-generator": [
      { id: "texts", name: "Texts", description: "AI-powered message generation platform", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "💬", category: "writing-editing", subcategory: "ai-message-generator" },
      { id: "celebrateally", name: "CelebrateAlly", description: "AI celebration and congratulations messages", url: "", upvotes: 456, verified: true, rating: 4.4, icon: "🎉", category: "writing-editing", subcategory: "ai-message-generator" },
      { id: "vibly", name: "Vibly", description: "AI social media message generator", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "📱", category: "writing-editing", subcategory: "ai-message-generator" },
      { id: "sayhi", name: "SayHi", description: "AI conversation starter and message tool", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "👋", category: "writing-editing", subcategory: "ai-message-generator" },
      { id: "heartstring-ai", name: "Heartstring AI", description: "Emotional message generation AI", url: "", upvotes: 189, verified: false, rating: 4.1, icon: "💝", category: "writing-editing", subcategory: "ai-message-generator" }
    ],
    "ai-movie-script-generator": [
      { id: "nolan-ai", name: "NolanAI", description: "AI screenwriting and script development tool", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🎬", category: "writing-editing", subcategory: "ai-movie-script-generator" },
      { id: "scenecraftr", name: "SceneCraftr", description: "AI scene and screenplay generator", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "🎭", category: "writing-editing", subcategory: "ai-movie-script-generator" },
      { id: "filmflow", name: "FilmFlow", description: "AI film script and story development", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "📽️", category: "writing-editing", subcategory: "ai-movie-script-generator" },
      { id: "filmassistant", name: "filmassistant.io", description: "AI assistant for film script writing", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "🎥", category: "writing-editing", subcategory: "ai-movie-script-generator" },
      { id: "aiscreenwriter", name: "AIScreenwriter", description: "Professional AI screenplay generator", url: "", upvotes: 189, verified: false, rating: 4.1, icon: "✍️", category: "writing-editing", subcategory: "ai-movie-script-generator" }
    ],
    "ai-name-generator": [
      { id: "namelix", name: "Namelix", description: "AI business name generator", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🏷️", category: "writing-editing", subcategory: "ai-name-generator" },
      { id: "maxstudio-api", name: "MaxStudio API", description: "API for AI-powered name generation", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🔌", category: "writing-editing", subcategory: "ai-name-generator" },
      { id: "dnd-name-generator", name: "DnD Name Generator", description: "Fantasy character name generator for D&D", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "🎲", category: "writing-editing", subcategory: "ai-name-generator" },
      { id: "cuqui-baby-names", name: "Cuqui Baby Names", description: "AI baby name suggestion tool", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "👶", category: "writing-editing", subcategory: "ai-name-generator" },
      { id: "randomx-ai", name: "RandomX.ai", description: "Random name and content generator", url: "", upvotes: 234, verified: false, rating: 4.2, icon: "🎰", category: "writing-editing", subcategory: "ai-name-generator" }
    ],
    "ai-newsletter-generator": [
      { id: "contrast", name: "Contrast", description: "AI newsletter creation and design tool", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "📰", category: "writing-editing", subcategory: "ai-newsletter-generator" },
      { id: "hoppy-copy", name: "Hoppy Copy", description: "AI email and newsletter copywriting", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "📧", category: "writing-editing", subcategory: "ai-newsletter-generator" },
      { id: "letterpal", name: "Letterpal", description: "AI newsletter writing assistant", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "✉️", category: "writing-editing", subcategory: "ai-newsletter-generator" },
      { id: "promo-ai", name: "Promo.ai", description: "AI promotional newsletter generator", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "📢", category: "writing-editing", subcategory: "ai-newsletter-generator" },
      { id: "auto-mailer", name: "Auto Mailer", description: "Automated newsletter creation tool", url: "", upvotes: 189, verified: false, rating: 4.1, icon: "🤖", category: "writing-editing", subcategory: "ai-newsletter-generator" }
    ],
    "ai-novel": [
      { id: "ai-novelist", name: "AI Novelist", description: "AI novel writing and generation platform", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "📚", category: "writing-editing", subcategory: "ai-novel" },
      { id: "squibler-novel", name: "Squibler", description: "AI-powered novel writing tool", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "✍️", category: "writing-editing", subcategory: "ai-novel" },
      { id: "midreal", name: "MidReal", description: "Interactive AI novel and story platform", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "📖", category: "writing-editing", subcategory: "ai-novel" },
      { id: "novelistai", name: "NovelistAI", description: "AI assistant for novel writing", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "🤖", category: "writing-editing", subcategory: "ai-novel" },
      { id: "webnovels-ai", name: "Webnovels AI", description: "AI web novel generation platform", url: "", upvotes: 189, verified: false, rating: 4.1, icon: "🌐", category: "writing-editing", subcategory: "ai-novel" }
    ],
    "ai-outline-generator": [
      { id: "surfer", name: "Surfer", description: "SEO content outline generator", url: "", upvotes: 789, verified: true, rating: 4.6, icon: "🏄", category: "writing-editing", subcategory: "ai-outline-generator" },
      { id: "reflect-notes", name: "Reflect Notes", description: "AI note-taking with outline generation", url: "", upvotes: 456, verified: true, rating: 4.4, icon: "💭", category: "writing-editing", subcategory: "ai-outline-generator" },
      { id: "myessaywriter", name: "MyEssayWriter.ai", description: "AI essay outline and writing tool", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "📝", category: "writing-editing", subcategory: "ai-outline-generator" },
      { id: "subtxt", name: "Subtxt", description: "Story structure and outline generator", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "📋", category: "writing-editing", subcategory: "ai-outline-generator" },
      { id: "superblog", name: "Superblog", description: "AI blog outline and content generator", url: "", upvotes: 189, verified: false, rating: 4.1, icon: "📄", category: "writing-editing", subcategory: "ai-outline-generator" }
    ],
    "ai-paragraph-generator": [
      { id: "ai-paragraph-generator", name: "AI Paragraph Generator", description: "Generate coherent paragraphs with AI", url: "", upvotes: 567, verified: true, rating: 4.4, icon: "📄", category: "writing-editing", subcategory: "ai-paragraph-generator" },
      { id: "qozex-paragraph", name: "Qozex AI Paragraph Generator", description: "Advanced AI paragraph creation tool", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "✍️", category: "writing-editing", subcategory: "ai-paragraph-generator" },
      { id: "ai-paragraph-gen", name: "Ai Paragraph Generator", description: "Simple AI paragraph generation", url: "", upvotes: 345, verified: true, rating: 4.2, icon: "📝", category: "writing-editing", subcategory: "ai-paragraph-generator" },
      { id: "paragraph-generator-xyz", name: "Paragraph Generator AI - Free | XYZ", description: "Free AI paragraph generator tool", url: "", upvotes: 234, verified: true, rating: 4.1, icon: "🆓", category: "writing-editing", subcategory: "ai-paragraph-generator" },
      { id: "linkboss", name: "LinkBoss", description: "SEO paragraph and content generator", url: "", upvotes: 189, verified: false, rating: 4.0, icon: "🔗", category: "writing-editing", subcategory: "ai-paragraph-generator" }
    ],
    "ai-paraphraser": [
      { id: "free-paraphrasing-tool", name: "Free Paraphrasing Tool", description: "Free AI text paraphrasing service", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🔄", category: "writing-editing", subcategory: "ai-paraphraser" },
      { id: "quillbot-para", name: "QuillBot", description: "AI paraphrasing and rewriting tool", url: "", upvotes: 987, verified: true, rating: 4.7, icon: "🪶", category: "writing-editing", subcategory: "ai-paraphraser" },
      { id: "paraphraser-io", name: "Paraphraser.io", description: "Online AI paraphrasing tool", url: "", upvotes: 765, verified: true, rating: 4.5, icon: "💻", category: "writing-editing", subcategory: "ai-paraphraser" },
      { id: "languagetool-para", name: "LanguageTool", description: "Grammar checker with paraphrasing", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🔍", category: "writing-editing", subcategory: "ai-paraphraser" },
      { id: "toppdf-para", name: "TopPDF", description: "PDF editing with paraphrasing features", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "📄", category: "writing-editing", subcategory: "ai-paraphraser" }
    ],
    "ai-plot-generator": [
      { id: "squibler-plot", name: "Squibler", description: "AI plot and story development tool", url: "", upvotes: 456, verified: true, rating: 4.5, icon: "📚", category: "writing-editing", subcategory: "ai-plot-generator" },
      { id: "ifnovels", name: "IFNovels", description: "Interactive fiction plot generator", url: "", upvotes: 345, verified: true, rating: 4.4, icon: "🎮", category: "writing-editing", subcategory: "ai-plot-generator" },
      { id: "plotlime", name: "Plotlime", description: "AI story plot and outline generator", url: "", upvotes: 234, verified: true, rating: 4.3, icon: "🍋", category: "writing-editing", subcategory: "ai-plot-generator" },
      { id: "lore-sage", name: "Lore Sage", description: "Fantasy world and plot generator", url: "", upvotes: 189, verified: true, rating: 4.2, icon: "🧙", category: "writing-editing", subcategory: "ai-plot-generator" },
      { id: "sudowrite-plot", name: "Sudowrite", description: "AI creative writing and plot assistant", url: "", upvotes: 156, verified: false, rating: 4.1, icon: "✨", category: "writing-editing", subcategory: "ai-plot-generator" }
    ],
    "ai-poem-generator": [
      { id: "acrostic-ai", name: "Acrostic AI", description: "AI acrostic poem generator", url: "", upvotes: 456, verified: true, rating: 4.4, icon: "📝", category: "writing-editing", subcategory: "ai-poem-generator" },
      { id: "poem-generator-io", name: "PoemGenerator.io", description: "Online AI poetry creation tool", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "🎭", category: "writing-editing", subcategory: "ai-poem-generator" },
      { id: "aiepics", name: "AIEpics", description: "Epic poetry generator with AI", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "⚔️", category: "writing-editing", subcategory: "ai-poem-generator" },
      { id: "gmail-poetry", name: "Replaces suggested replies on Gmail messages with poetic verse", description: "Gmail extension for poetic responses", url: "", upvotes: 189, verified: true, rating: 4.1, icon: "📧", category: "writing-editing", subcategory: "ai-poem-generator" },
      { id: "free-poem-generator", name: "Free AI Poem Generator", description: "Free AI poetry creation tool", url: "", upvotes: 156, verified: false, rating: 4.0, icon: "🆓", category: "writing-editing", subcategory: "ai-poem-generator" }
    ],
    "ai-product-description-generator": [
      { id: "hypotenuse-ai", name: "Hypotenuse AI", description: "AI product description and content generator", url: "", upvotes: 789, verified: true, rating: 4.6, icon: "📐", category: "writing-editing", subcategory: "ai-product-description-generator" },
      { id: "pagepilot-ai", name: "PagePilot.ai", description: "AI landing page and product description tool", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🛩️", category: "writing-editing", subcategory: "ai-product-description-generator" },
      { id: "mydesigns-io", name: "MyDesigns.io", description: "AI design and product description platform", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "🎨", category: "writing-editing", subcategory: "ai-product-description-generator" },
      { id: "poky", name: "POKY - Product Importer", description: "Product importing with AI descriptions", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "📦", category: "writing-editing", subcategory: "ai-product-description-generator" },
      { id: "insightfactor", name: "InsightFactor", description: "AI product analysis and description", url: "", upvotes: 234, verified: false, rating: 4.2, icon: "🔍", category: "writing-editing", subcategory: "ai-product-description-generator" }
    ],
    "ai-prompt-generator": [
      { id: "flowgpt", name: "FlowGPT", description: "AI prompt sharing and generation platform", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "🌊", category: "writing-editing", subcategory: "ai-prompt-generator" },
      { id: "aiprm", name: "AIPRM", description: "AI prompt management for ChatGPT", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "⚡", category: "writing-editing", subcategory: "ai-prompt-generator" },
      { id: "imageprompt-org", name: "ImagePrompt.org", description: "AI image prompt generator", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "🖼️", category: "writing-editing", subcategory: "ai-prompt-generator" },
      { id: "promptbase", name: "PromptBase", description: "Marketplace for AI prompts", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🏪", category: "writing-editing", subcategory: "ai-prompt-generator" },
      { id: "chatgpt-mega-prompts", name: "200+ ChatGPT Mega-Prompts for Solopreneurs", description: "Business-focused ChatGPT prompts", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "💼", category: "writing-editing", subcategory: "ai-prompt-generator" }
    ],
    "ai-proofreading": [
      { id: "scribbr", name: "Scribbr", description: "Academic proofreading and editing service", url: "", upvotes: 789, verified: true, rating: 4.6, icon: "🎓", category: "writing-editing", subcategory: "ai-proofreading" },
      { id: "writefull", name: "Writefull", description: "AI proofreading for academic writing", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "📚", category: "writing-editing", subcategory: "ai-proofreading" },
      { id: "editgpt", name: "editGPT", description: "AI-powered text editing and proofreading", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "✏️", category: "writing-editing", subcategory: "ai-proofreading" },
      { id: "trinka-ai", name: "Trinka AI", description: "AI grammar checker for academic writing", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "🔍", category: "writing-editing", subcategory: "ai-proofreading" },
      { id: "katteb-ai", name: "Katteb AI", description: "AI writing and proofreading assistant", url: "", upvotes: 234, verified: false, rating: 4.2, icon: "🤖", category: "writing-editing", subcategory: "ai-proofreading" }
    ],
    "ai-quotes-generator": [
      { id: "inspirobot-quotes", name: "InspiroBot", description: "AI-generated inspirational quotes", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "🤖", category: "writing-editing", subcategory: "ai-quotes-generator" },
      { id: "quotesmaker", name: "QuotesMaker", description: "Custom quote generation tool", url: "", upvotes: 456, verified: true, rating: 4.4, icon: "💬", category: "writing-editing", subcategory: "ai-quotes-generator" },
      { id: "quotegenerator-io", name: "QuoteGenerator.io", description: "Online quote generation platform", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "📝", category: "writing-editing", subcategory: "ai-quotes-generator" },
      { id: "quoai", name: "Quoai", description: "AI quote creation and sharing", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "💭", category: "writing-editing", subcategory: "ai-quotes-generator" },
      { id: "mindspark-ai", name: "MindSparkAI", description: "Inspirational quote generator", url: "", upvotes: 189, verified: false, rating: 4.1, icon: "⚡", category: "writing-editing", subcategory: "ai-quotes-generator" }
    ],
    "ai-report-writing": [
      { id: "teachers-report-writer", name: "Teachers Report Writer", description: "AI tool for educational report writing", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "👩‍🏫", category: "writing-editing", subcategory: "ai-report-writing" },
      { id: "geniuspt", name: "GeniusPT", description: "AI report generation for professionals", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "🧠", category: "writing-editing", subcategory: "ai-report-writing" },
      { id: "reportgpt", name: "ReportGPT", description: "AI-powered report writing assistant", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "📊", category: "writing-editing", subcategory: "ai-report-writing" },
      { id: "pentra", name: "Pentra", description: "AI technical writing and reporting", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "✒️", category: "writing-editing", subcategory: "ai-report-writing" },
      { id: "opusense", name: "Opusense", description: "AI business report generation", url: "", upvotes: 189, verified: false, rating: 4.1, icon: "📈", category: "writing-editing", subcategory: "ai-report-writing" }
    ],
    "ai-repurpose": [
      { id: "opus-clip", name: "Opus Clip", description: "AI video content repurposing tool", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🎬", category: "writing-editing", subcategory: "ai-repurpose" },
      { id: "castmagic", name: "Castmagic", description: "Podcast content repurposing with AI", url: "", upvotes: 789, verified: true, rating: 4.6, icon: "🎙️", category: "writing-editing", subcategory: "ai-repurpose" },
      { id: "hypefury", name: "Hypefury", description: "Social media content repurposing", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🚀", category: "writing-editing", subcategory: "ai-repurpose" },
      { id: "contrast-repurpose", name: "Contrast", description: "Content repurposing and optimization", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "🔄", category: "writing-editing", subcategory: "ai-repurpose" },
      { id: "exemplary-ai", name: "Exemplary AI", description: "AI content transformation and repurposing", url: "", upvotes: 345, verified: false, rating: 4.3, icon: "✨", category: "writing-editing", subcategory: "ai-repurpose" }
    ],
    "ai-review-generator": [
      { id: "mara-ai", name: "MARA AI", description: "AI customer review response generator", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "⭐", category: "writing-editing", subcategory: "ai-review-generator" },
      { id: "reviewly", name: "Reviewly", description: "AI review generation and management", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "📝", category: "writing-editing", subcategory: "ai-review-generator" },
      { id: "autoblogging-ai", name: "Autoblogging.ai", description: "AI content and review generation", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "🤖", category: "writing-editing", subcategory: "ai-review-generator" },
      { id: "spokk", name: "Spokk", description: "AI product review generator", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "🗣️", category: "writing-editing", subcategory: "ai-review-generator" },
      { id: "roastlinkedin", name: "RoastLinkedIn.com", description: "AI LinkedIn profile review tool", url: "", upvotes: 189, verified: false, rating: 4.1, icon: "💼", category: "writing-editing", subcategory: "ai-review-generator" }
    ],
    "ai-rewriter": [
      { id: "stealthwriter", name: "StealthWriter", description: "AI text rewriting for undetectable content", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🥷", category: "writing-editing", subcategory: "ai-rewriter" },
      { id: "free-paraphrasing-rewriter", name: "Free Paraphrasing Tool", description: "Free AI text rewriting service", url: "", upvotes: 987, verified: true, rating: 4.5, icon: "🔄", category: "writing-editing", subcategory: "ai-rewriter" },
      { id: "wordtune", name: "Wordtune", description: "AI writing companion and rewriter", url: "", upvotes: 765, verified: true, rating: 4.7, icon: "🎵", category: "writing-editing", subcategory: "ai-rewriter" },
      { id: "paraphraser-rewriter", name: "Paraphraser.io", description: "Online AI text rewriting tool", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "💻", category: "writing-editing", subcategory: "ai-rewriter" },
      { id: "ai-undetect", name: "AI Undetect", description: "AI text humanization and rewriting", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "🔍", category: "writing-editing", subcategory: "ai-rewriter" }
    ],
    "ai-script-writing": [
      { id: "squibler-script", name: "Squibler", description: "AI screenplay and script writing tool", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "📚", category: "writing-editing", subcategory: "ai-script-writing" },
      { id: "camtasia", name: "Camtasia", description: "Screen recording with AI script features", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🎥", category: "writing-editing", subcategory: "ai-script-writing" },
      { id: "dubs-io", name: "Dubs.io", description: "AI dubbing and script generation", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "🎭", category: "writing-editing", subcategory: "ai-script-writing" },
      { id: "subscribr", name: "Subscribr", description: "AI script writing for content creators", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "📺", category: "writing-editing", subcategory: "ai-script-writing" },
      { id: "influee", name: "Influee", description: "AI influencer script generator", url: "", upvotes: 234, verified: false, rating: 4.2, icon: "📱", category: "writing-editing", subcategory: "ai-script-writing" }
    ],
    "ai-sentence-generator": [
      { id: "ai-sentence-generator", name: "AI Sentence Generator", description: "Generate coherent sentences with AI", url: "", upvotes: 456, verified: true, rating: 4.4, icon: "📝", category: "writing-editing", subcategory: "ai-sentence-generator" },
      { id: "english-chrome-extension", name: "English Chrome Extension", description: "Chrome extension for English sentence help", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "🌐", category: "writing-editing", subcategory: "ai-sentence-generator" },
      { id: "vocabmate", name: "VocabMate", description: "Vocabulary and sentence building tool", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "📚", category: "writing-editing", subcategory: "ai-sentence-generator" },
      { id: "simple-english-plugin", name: "Simple English Learning Plugin", description: "Browser plugin for English sentence help", url: "", upvotes: 189, verified: true, rating: 4.1, icon: "🔌", category: "writing-editing", subcategory: "ai-sentence-generator" },
      { id: "typegenie", name: "TypeGenie", description: "AI typing and sentence completion", url: "", upvotes: 156, verified: false, rating: 4.0, icon: "⌨️", category: "writing-editing", subcategory: "ai-sentence-generator" }
    ],
    "ai-short-story-generator": [
      { id: "midreal-stories", name: "MidReal", description: "Interactive AI story generation platform", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "📖", category: "writing-editing", subcategory: "ai-short-story-generator" },
      { id: "storybooks", name: "Storybooks", description: "AI children's storybook generator", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "📚", category: "writing-editing", subcategory: "ai-short-story-generator" },
      { id: "mytales", name: "MyTales", description: "Personalized AI story creation", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "✨", category: "writing-editing", subcategory: "ai-short-story-generator" },
      { id: "storywizard-ai", name: "Storywizard.ai", description: "AI story writing and generation tool", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "🧙", category: "writing-editing", subcategory: "ai-short-story-generator" },
      { id: "makemytale", name: "MakeMyTale", description: "AI tale and story generator", url: "", upvotes: 189, verified: false, rating: 4.1, icon: "📝", category: "writing-editing", subcategory: "ai-short-story-generator" }
    ],
    "ai-slogan-generator": [
      { id: "brandkiit", name: "BrandKiit", description: "AI branding and slogan generator", url: "", upvotes: 456, verified: true, rating: 4.4, icon: "🏷️", category: "writing-editing", subcategory: "ai-slogan-generator" },
      { id: "mybrandgen", name: "myBrandgen.com", description: "AI brand name and slogan generator", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "🎨", category: "writing-editing", subcategory: "ai-slogan-generator" },
      { id: "10web", name: "10Web", description: "AI website builder with slogan generator", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "🌐", category: "writing-editing", subcategory: "ai-slogan-generator" },
      { id: "zoviz", name: "Zoviz", description: "AI logo and slogan creation tool", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "🎨", category: "writing-editing", subcategory: "ai-slogan-generator" },
      { id: "prepostseo", name: "Prepostseo", description: "SEO tools with slogan generator", url: "", upvotes: 189, verified: false, rating: 4.1, icon: "🔍", category: "writing-editing", subcategory: "ai-slogan-generator" }
    ],
    "ai-spell-check": [
      { id: "goodnotes", name: "Goodnotes", description: "Digital note-taking with AI spell check", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "📝", category: "writing-editing", subcategory: "ai-spell-check" },
      { id: "textgears", name: "TextGears", description: "AI grammar and spell checking API", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "⚙️", category: "writing-editing", subcategory: "ai-spell-check" },
      { id: "linguix", name: "Linguix", description: "AI writing assistant with spell check", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "📚", category: "writing-editing", subcategory: "ai-spell-check" },
      { id: "diacritice-corecta", name: "Corectarea automată a diacriticelor", description: "Automatic Romanian diacritics correction", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "🇷🇴", category: "writing-editing", subcategory: "ai-spell-check" },
      { id: "safespelling", name: "SafeSpelling", description: "AI-powered spell checking tool", url: "", upvotes: 189, verified: false, rating: 4.1, icon: "🛡️", category: "writing-editing", subcategory: "ai-spell-check" }
    ],
    "ai-story-generator": [
      { id: "perchance-story", name: "Perchance", description: "Random story and content generator", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🎲", category: "writing-editing", subcategory: "ai-story-generator" },
      { id: "squibler-story", name: "Squibler", description: "AI story writing and development tool", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "📚", category: "writing-editing", subcategory: "ai-story-generator" },
      { id: "sudowrite-story", name: "Sudowrite", description: "AI creative writing and story generator", url: "", upvotes: 789, verified: true, rating: 4.7, icon: "✨", category: "writing-editing", subcategory: "ai-story-generator" },
      { id: "dreampress-ai", name: "DreamPress AI", description: "AI story generation platform", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "💭", category: "writing-editing", subcategory: "ai-story-generator" },
      { id: "dreamgen", name: "DreamGen", description: "AI story and content generator", url: "", upvotes: 345, verified: false, rating: 4.3, icon: "🌙", category: "writing-editing", subcategory: "ai-story-generator" }
    ],
    "ai-subtitle-generator": [
      { id: "zeemo-subtitle", name: "Zeemo", description: "AI subtitle generation for videos", url: "", upvotes: 789, verified: true, rating: 4.6, icon: "📺", category: "writing-editing", subcategory: "ai-subtitle-generator" },
      { id: "capcut", name: "CapCut", description: "Video editor with AI subtitle generation", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "✂️", category: "writing-editing", subcategory: "ai-subtitle-generator" },
      { id: "happy-scribe", name: "Happy Scribe", description: "AI transcription and subtitle service", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "😊", category: "writing-editing", subcategory: "ai-subtitle-generator" },
      { id: "veed-io", name: "VEED.IO", description: "Online video editor with AI subtitles", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "🎬", category: "writing-editing", subcategory: "ai-subtitle-generator" },
      { id: "clideo", name: "Clideo", description: "Video editing tools with subtitle generation", url: "", upvotes: 345, verified: false, rating: 4.3, icon: "🎥", category: "writing-editing", subcategory: "ai-subtitle-generator" }
    ],
    "ai-summarizer": [
      { id: "lilys-ai", name: "Lilys AI", description: "AI document and text summarization", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "🌸", category: "writing-editing", subcategory: "ai-summarizer" },
      { id: "read-ai", name: "Read AI", description: "AI reading and summarization assistant", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "📖", category: "writing-editing", subcategory: "ai-summarizer" },
      { id: "ai-summarizer", name: "AI Summarizer", description: "Text summarization with AI", url: "", upvotes: 987, verified: true, rating: 4.5, icon: "📄", category: "writing-editing", subcategory: "ai-summarizer" },
      { id: "studocu", name: "Studocu", description: "Student platform with AI summarization", url: "", upvotes: 789, verified: true, rating: 4.4, icon: "🎓", category: "writing-editing", subcategory: "ai-summarizer" },
      { id: "otter-ai", name: "Otter.ai", description: "AI meeting transcription and summarization", url: "", upvotes: 654, verified: true, rating: 4.8, icon: "🦦", category: "writing-editing", subcategory: "ai-summarizer" }
    ],
    "ai-text-classifier": [
      { id: "canvs-ai", name: "Canvs AI", description: "AI text analysis and classification", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🎨", category: "writing-editing", subcategory: "ai-text-classifier" },
      { id: "yay-forms", name: "Yay! Forms", description: "Form builder with AI text classification", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "📝", category: "writing-editing", subcategory: "ai-text-classifier" },
      { id: "iamip", name: "IamIP", description: "AI-powered text analysis platform", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "🔍", category: "writing-editing", subcategory: "ai-text-classifier" },
      { id: "hs-code", name: "The HS Code", description: "Trade classification with AI text analysis", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "📊", category: "writing-editing", subcategory: "ai-text-classifier" },
      { id: "chatpulse", name: "ChatPulse", description: "AI chat and text sentiment analysis", url: "", upvotes: 189, verified: false, rating: 4.1, icon: "💬", category: "writing-editing", subcategory: "ai-text-classifier" }
    ],
    "ai-text-generator": [
      { id: "perchance-text", name: "Perchance", description: "Random text and content generator", url: "", upvotes: 1567, verified: true, rating: 4.6, icon: "🎲", category: "writing-editing", subcategory: "ai-text-generator" },
      { id: "venice-ai", name: "Venice AI", description: "AI text generation platform", url: "", upvotes: 1234, verified: true, rating: 4.5, icon: "🏛️", category: "writing-editing", subcategory: "ai-text-generator" },
      { id: "ai-photocaption-text", name: "AI PhotoCaption—Text Generator", description: "AI text generation for photos and captions", url: "", upvotes: 987, verified: true, rating: 4.7, icon: "📸", category: "writing-editing", subcategory: "ai-text-generator" },
      { id: "hyperwrite", name: "HyperWrite", description: "AI writing and text generation tool", url: "", upvotes: 789, verified: true, rating: 4.4, icon: "⚡", category: "writing-editing", subcategory: "ai-text-generator" },
      { id: "toolsaday", name: "Toolsaday", description: "Daily AI tools including text generation", url: "", upvotes: 567, verified: false, rating: 4.3, icon: "🔧", category: "writing-editing", subcategory: "ai-text-generator" }
    ],
    "ai-text-message-generator": [
      { id: "structurely", name: "Structurely", description: "AI real estate text messaging", url: "", upvotes: 456, verified: true, rating: 4.4, icon: "🏠", category: "writing-editing", subcategory: "ai-text-message-generator" },
      { id: "mtalkz", name: "Mtalkz", description: "AI messaging and communication platform", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "💬", category: "writing-editing", subcategory: "ai-text-message-generator" },
      { id: "verse-ai", name: "Verse.ai", description: "AI conversation and messaging tool", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "🎭", category: "writing-editing", subcategory: "ai-text-message-generator" },
      { id: "firetexts", name: "FireTexts", description: "AI text message generator for dating", url: "", upvotes: 189, verified: true, rating: 4.1, icon: "🔥", category: "writing-editing", subcategory: "ai-text-message-generator" },
      { id: "textgpt", name: "TextGPT", description: "AI text messaging assistant", url: "", upvotes: 156, verified: false, rating: 4.0, icon: "📱", category: "writing-editing", subcategory: "ai-text-message-generator" }
    ],
    "ai-thesis-generator": [
      { id: "thesis-ai", name: "ThesisAI", description: "AI thesis writing and generation tool", url: "", upvotes: 456, verified: true, rating: 4.4, icon: "🎓", category: "writing-editing", subcategory: "ai-thesis-generator" },
      { id: "som-ai", name: "SOM AI", description: "Academic AI writing assistant", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "📚", category: "writing-editing", subcategory: "ai-thesis-generator" },
      { id: "scipub-plus", name: "SciPub+", description: "Scientific publication writing tool", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "🔬", category: "writing-editing", subcategory: "ai-thesis-generator" },
      { id: "v0-report", name: "v0 Report", description: "AI report and thesis generator", url: "", upvotes: 189, verified: true, rating: 4.1, icon: "📊", category: "writing-editing", subcategory: "ai-thesis-generator" },
      { id: "academicideas", name: "AcademicIdeas", description: "AI academic writing and thesis ideas", url: "", upvotes: 156, verified: false, rating: 4.0, icon: "💡", category: "writing-editing", subcategory: "ai-thesis-generator" }
    ],
    "ai-title-generator": [
      { id: "vidiq-title", name: "VidIQ", description: "YouTube title optimization with AI", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "📺", category: "writing-editing", subcategory: "ai-title-generator" },
      { id: "pikzels", name: "Pikzels", description: "AI thumbnail and title generator", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🖼️", category: "writing-editing", subcategory: "ai-title-generator" },
      { id: "picsee", name: "PicSee", description: "Link management with AI title generation", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "🔗", category: "writing-editing", subcategory: "ai-title-generator" },
      { id: "thumblytics", name: "Thumblytics", description: "YouTube thumbnail and title analytics", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "📊", category: "writing-editing", subcategory: "ai-title-generator" },
      { id: "taja-ai-title", name: "Taja AI", description: "AI content optimization and titles", url: "", upvotes: 234, verified: false, rating: 4.2, icon: "🎯", category: "writing-editing", subcategory: "ai-title-generator" }
    ],
    "ai-writing": [
      { id: "scribbr-writing", name: "Scribbr", description: "Academic writing assistance and editing", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "🎓", category: "writing-editing", subcategory: "ai-writing" },
      { id: "quillbot-writing", name: "QuillBot", description: "AI writing and paraphrasing tool", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🪶", category: "writing-editing", subcategory: "ai-writing" },
      { id: "hix-ai", name: "HIX.AI", description: "All-in-one AI writing platform", url: "", upvotes: 987, verified: true, rating: 4.5, icon: "✨", category: "writing-editing", subcategory: "ai-writing" },
      { id: "decopy-ai", name: "Decopy AI", description: "AI copywriting and content creation", url: "", upvotes: 789, verified: true, rating: 4.4, icon: "📝", category: "writing-editing", subcategory: "ai-writing" },
      { id: "tinywow", name: "TinyWow", description: "Free AI writing and editing tools", url: "", upvotes: 567, verified: false, rating: 4.3, icon: "🔧", category: "writing-editing", subcategory: "ai-writing" }
    ],
    "ai-writing-assistants": [
      { id: "prowritingaid-assistant", name: "ProWritingAid", description: "Comprehensive AI writing analysis tool", url: "", upvotes: 1789, verified: true, rating: 4.8, icon: "📝", category: "writing-editing", subcategory: "ai-writing-assistants" },
      { id: "smodin", name: "Smodin", description: "AI writing assistant and homework helper", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🤖", category: "writing-editing", subcategory: "ai-writing-assistants" },
      { id: "toolsmart-humanize", name: "Toolsmart Free Humanize AI", description: "AI text humanization tool", url: "", upvotes: 987, verified: true, rating: 4.5, icon: "👥", category: "writing-editing", subcategory: "ai-writing-assistants" },
      { id: "sudowrite-assistant", name: "Sudowrite", description: "AI creative writing partner", url: "", upvotes: 789, verified: true, rating: 4.7, icon: "✨", category: "writing-editing", subcategory: "ai-writing-assistants" },
      { id: "heidi-health", name: "Heidi Health", description: "AI writing assistant for healthcare", url: "", upvotes: 567, verified: false, rating: 4.4, icon: "🏥", category: "writing-editing", subcategory: "ai-writing-assistants" }
    ],
    "headlines-ai": [
      { id: "topicfinder", name: "Topicfinder", description: "AI topic and headline discovery tool", url: "", upvotes: 456, verified: true, rating: 4.4, icon: "🔍", category: "writing-editing", subcategory: "headlines-ai" },
      { id: "soopra", name: "Soopra", description: "AI content and headline generator", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "🎯", category: "writing-editing", subcategory: "headlines-ai" },
      { id: "make-headline", name: "Make Headline", description: "AI headline creation tool", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "📰", category: "writing-editing", subcategory: "headlines-ai" },
      { id: "chatgpt-news-desensationalizer", name: "ChatGPT News De-Sensationalizer", description: "AI tool to create balanced headlines", url: "", upvotes: 189, verified: true, rating: 4.1, icon: "📊", category: "writing-editing", subcategory: "headlines-ai" },
      { id: "great-headlines-ai", name: "Great Headlines AI", description: "AI headline optimization tool", url: "", upvotes: 156, verified: false, rating: 4.0, icon: "⭐", category: "writing-editing", subcategory: "headlines-ai" }
    ],
    "prompt-engineering": [
      { id: "prompthero", name: "PromptHero", description: "AI prompt engineering and sharing platform", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🦸", category: "writing-editing", subcategory: "prompt-engineering" },
      { id: "flowgpt-engineering", name: "FlowGPT", description: "Prompt engineering community and tools", url: "", upvotes: 987, verified: true, rating: 4.6, icon: "🌊", category: "writing-editing", subcategory: "prompt-engineering" },
      { id: "learn-prompting", name: "Learn Prompting", description: "Educational platform for prompt engineering", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "📚", category: "writing-editing", subcategory: "prompt-engineering" },
      { id: "promptbase-engineering", name: "PromptBase", description: "Marketplace for prompt engineering", url: "", upvotes: 567, verified: true, rating: 4.4, icon: "🏪", category: "writing-editing", subcategory: "prompt-engineering" },
      { id: "god-of-prompt", name: "AI Prompt Generator by God of Prompt", description: "Advanced prompt generation tool", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "⚡", category: "writing-editing", subcategory: "prompt-engineering" }
    ],
    "resume-ai": [
      { id: "resume-worded", name: "Resume Worded", description: "AI resume optimization and feedback", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "📄", category: "writing-editing", subcategory: "resume-ai" },
      { id: "resumebuilder-com", name: "ResumeBuilder.com", description: "AI-powered resume builder", url: "", upvotes: 987, verified: true, rating: 4.6, icon: "🔧", category: "writing-editing", subcategory: "resume-ai" },
      { id: "careerflow-resume", name: "Careerflow", description: "AI career tools and resume optimization", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "💼", category: "writing-editing", subcategory: "resume-ai" },
      { id: "vmock", name: "VMock", description: "AI resume analysis and improvement", url: "", upvotes: 567, verified: true, rating: 4.4, icon: "🎯", category: "writing-editing", subcategory: "resume-ai" },
      { id: "swooped", name: "Swooped", description: "AI job search and resume optimization", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "🚀", category: "writing-editing", subcategory: "resume-ai" }
    ]
  },
  "art-creative-design": {
    "ai-3d-model-generator": [
      { id: "meshy", name: "Meshy", description: "AI-powered 3D model generation", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "🎯", category: "art-creative-design", subcategory: "ai-3d-model-generator" },
      { id: "luma-ai", name: "Luma AI", description: "3D model creation with AI", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🌟", category: "art-creative-design", subcategory: "ai-3d-model-generator" },
      { id: "iconscout", name: "IconScout", description: "3D icons and models generator", url: "", upvotes: 989, verified: true, rating: 4.5, icon: "🎨", category: "art-creative-design", subcategory: "ai-3d-model-generator" },
      { id: "tripo-ai", name: "Tripo AI", description: "Advanced 3D model AI generation", url: "", upvotes: 876, verified: true, rating: 4.4, icon: "🔺", category: "art-creative-design", subcategory: "ai-3d-model-generator" },
      { id: "hyper3d", name: "Hyper3D", description: "Professional 3D model creation", url: "", upvotes: 654, verified: false, rating: 4.3, icon: "🚀", category: "art-creative-design", subcategory: "ai-3d-model-generator" }
    ],
    "ai-album-cover-generator": [
      { id: "brat-generator", name: "Brat Generator", description: "AI album cover creation tool", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🎵", category: "art-creative-design", subcategory: "ai-album-cover-generator" },
      { id: "immersity-ai", name: "Immersity AI", description: "Immersive album cover designs", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "🌍", category: "art-creative-design", subcategory: "ai-album-cover-generator" },
      { id: "albumcover-ai", name: "AlbumCover AI", description: "Specialized album cover AI generator", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "💿", category: "art-creative-design", subcategory: "ai-album-cover-generator" },
      { id: "coverartist", name: "CoverArtist", description: "Professional album cover creation", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "🎨", category: "art-creative-design", subcategory: "ai-album-cover-generator" },
      { id: "daft-art", name: "Daft Art", description: "Creative album cover AI design", url: "", upvotes: 321, verified: false, rating: 4.2, icon: "🎭", category: "art-creative-design", subcategory: "ai-album-cover-generator" }
    ],
    "ai-anime-art": [
      { id: "pixai", name: "PixAI", description: "AI anime art generation platform", url: "", upvotes: 1890, verified: true, rating: 4.8, icon: "🎌", category: "art-creative-design", subcategory: "ai-anime-art" },
      { id: "yodayo", name: "Yodayo", description: "Anime-style AI art creator", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "🎨", category: "art-creative-design", subcategory: "ai-anime-art" },
      { id: "animegenius", name: "AnimeGenius", description: "Professional anime art AI generator", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "⭐", category: "art-creative-design", subcategory: "ai-anime-art" },
      { id: "niji-journey", name: "Niji・Journey", description: "Anime-focused AI art generation", url: "", upvotes: 1098, verified: true, rating: 4.5, icon: "🌸", category: "art-creative-design", subcategory: "ai-anime-art" },
      { id: "dzine-ghibli-ai", name: "Dzine Ghibli AI", description: "Studio Ghibli style AI art", url: "", upvotes: 876, verified: true, rating: 4.4, icon: "🏰", category: "art-creative-design", subcategory: "ai-anime-art" }
    ],
    "ai-anime-generator": [
      { id: "openart", name: "OpenArt", description: "Open-source anime AI generator", url: "", upvotes: 1456, verified: true, rating: 4.7, icon: "🎨", category: "art-creative-design", subcategory: "ai-anime-generator" },
      { id: "animegenius-gen", name: "AnimeGenius", description: "Advanced anime character generator", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "⭐", category: "art-creative-design", subcategory: "ai-anime-generator" },
      { id: "feetgen", name: "FeetGen", description: "Specialized anime generation tool", url: "", upvotes: 876, verified: false, rating: 4.5, icon: "🦶", category: "art-creative-design", subcategory: "ai-anime-generator" },
      { id: "komiko", name: "Komiko", description: "Anime comic and art generator", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "📚", category: "art-creative-design", subcategory: "ai-anime-generator" },
      { id: "ai-hentai-generator", name: "AI Hentai Generator", description: "Adult anime content generator", url: "", upvotes: 543, verified: false, rating: 4.3, icon: "🔞", category: "art-creative-design", subcategory: "ai-anime-generator" }
    ],
    "ai-art-generator": [
      { id: "midjourney", name: "Midjourney", description: "Leading AI art generation platform", url: "", upvotes: 2567, verified: true, rating: 4.9, icon: "🎨", category: "art-creative-design", subcategory: "ai-art-generator" },
      { id: "pixai-art", name: "PixAI", description: "Versatile AI art creation tool", url: "", upvotes: 1890, verified: true, rating: 4.8, icon: "🎌", category: "art-creative-design", subcategory: "ai-art-generator" },
      { id: "pica-ai", name: "Pica AI", description: "Professional AI art generator", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "🖼️", category: "art-creative-design", subcategory: "ai-art-generator" },
      { id: "nightcafe-creator", name: "NightCafe Creator", description: "AI art creation community", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🌙", category: "art-creative-design", subcategory: "ai-art-generator" },
      { id: "artguru-ai", name: "Artguru AI", description: "Easy-to-use AI art generator", url: "", upvotes: 1098, verified: true, rating: 4.5, icon: "🎭", category: "art-creative-design", subcategory: "ai-art-generator" }
    ],
    "ai-banner-generator": [
      { id: "creatopy", name: "Creatopy", description: "AI-powered banner design platform", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🎨", category: "art-creative-design", subcategory: "ai-banner-generator" },
      { id: "sivi-ai", name: "Sivi AI", description: "Intelligent banner creation tool", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "📊", category: "art-creative-design", subcategory: "ai-banner-generator" },
      { id: "ai-linkedin-banners", name: "AI LinkedIn Banners", description: "LinkedIn banner AI generator", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "💼", category: "art-creative-design", subcategory: "ai-banner-generator" },
      { id: "product-hero", name: "Product Hero", description: "Product banner AI creator", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "🛍️", category: "art-creative-design", subcategory: "ai-banner-generator" },
      { id: "bannerify", name: "Bannerify", description: "Simple AI banner generator", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "🏷️", category: "art-creative-design", subcategory: "ai-banner-generator" }
    ],
    "ai-beauty": [
      { id: "youcam-app", name: "YouCam App Provider", description: "AI beauty enhancement tools", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "💄", category: "art-creative-design", subcategory: "ai-beauty" },
      { id: "spoiledchild", name: "SpoiledChild", description: "AI beauty product recommendations", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🧴", category: "art-creative-design", subcategory: "ai-beauty" },
      { id: "good-face-project", name: "The Good Face Project", description: "AI face analysis and beauty tips", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "😊", category: "art-creative-design", subcategory: "ai-beauty" },
      { id: "color-analysis-ai", name: "My Color Analysis AI", description: "AI color palette for beauty", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "🎨", category: "art-creative-design", subcategory: "ai-beauty" },
      { id: "looksmaxx-report", name: "LooksMaxx Report", description: "AI appearance optimization", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "💪", category: "art-creative-design", subcategory: "ai-beauty" }
    ],
    "ai-logo-generator": [
      { id: "looka", name: "Looka", description: "Professional AI logo design", url: "", upvotes: 1890, verified: true, rating: 4.8, icon: "🏷️", category: "art-creative-design", subcategory: "ai-logo-generator" },
      { id: "brandcrowd", name: "BrandCrowd", description: "AI logo and brand creation", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "👑", category: "art-creative-design", subcategory: "ai-logo-generator" },
      { id: "logoai", name: "LogoAI", description: "Smart logo generation platform", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🤖", category: "art-creative-design", subcategory: "ai-logo-generator" },
      { id: "kittl-logo", name: "Kittl", description: "Creative AI logo maker", url: "", upvotes: 1098, verified: true, rating: 4.5, icon: "🎨", category: "art-creative-design", subcategory: "ai-logo-generator" },
      { id: "creative-fabrica-font", name: "Creative Fabrica Font Generator", description: "Logo with custom fonts", url: "", upvotes: 876, verified: true, rating: 4.4, icon: "✍️", category: "art-creative-design", subcategory: "ai-logo-generator" }
    ],
    "ai-infographic-generator": [
      { id: "venngage", name: "Venngage", description: "Professional infographic design platform", url: "", upvotes: 1456, verified: true, rating: 4.8, icon: "📊", category: "art-creative-design", subcategory: "ai-infographic-generator" },
      { id: "piktochart", name: "Piktochart", description: "Easy infographic and visual storytelling", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "📈", category: "art-creative-design", subcategory: "ai-infographic-generator" },
      { id: "napkin-ai", name: "Napkin AI", description: "AI-powered visual storytelling", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🎨", category: "art-creative-design", subcategory: "ai-infographic-generator" },
      { id: "infografix", name: "Infografix", description: "Quick infographic generator", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "⚡", category: "art-creative-design", subcategory: "ai-infographic-generator" },
      { id: "infography", name: "Infography", description: "Data visualization and infographics", url: "", upvotes: 543, verified: false, rating: 4.4, icon: "📋", category: "art-creative-design", subcategory: "ai-infographic-generator" }
    ],
    "ai-bikini": [
      { id: "insmind-bikini", name: "insMind", description: "AI bikini and swimwear generation", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "👙", category: "art-creative-design", subcategory: "ai-bikini" },
      { id: "imagemover", name: "ImageMover", description: "AI clothing transformation", url: "", upvotes: 654, verified: false, rating: 4.4, icon: "📸", category: "art-creative-design", subcategory: "ai-bikini" },
      { id: "nudify-online", name: "Nudify.Online", description: "AI image modification tool", url: "", upvotes: 543, verified: false, rating: 4.3, icon: "🔞", category: "art-creative-design", subcategory: "ai-bikini" },
      { id: "funy-ai", name: "Funy AI: AI Video, AI Image, Face Swap", description: "Multi-purpose AI image tool", url: "", upvotes: 432, verified: false, rating: 4.2, icon: "🎭", category: "art-creative-design", subcategory: "ai-bikini" },
      { id: "videofaceswap", name: "VideoFaceSwap", description: "AI video and image face swap", url: "", upvotes: 321, verified: false, rating: 4.1, icon: "🔄", category: "art-creative-design", subcategory: "ai-bikini" }
    ],
    "ai-book-cover-generator": [
      { id: "coverdesignai", name: "CoverDesignAI", description: "AI book cover design platform", url: "", upvotes: 987, verified: true, rating: 4.6, icon: "📚", category: "art-creative-design", subcategory: "ai-book-cover-generator" },
      { id: "book-ai-writer", name: "Book AI Writer", description: "AI book cover and writing tool", url: "", upvotes: 765, verified: true, rating: 4.5, icon: "✍️", category: "art-creative-design", subcategory: "ai-book-cover-generator" },
      { id: "book-design-tool", name: "Book Design Tool", description: "Professional book cover designer", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🎨", category: "art-creative-design", subcategory: "ai-book-cover-generator" },
      { id: "amazonkdp-click", name: "AmazonKDP.Click", description: "KDP book cover generator", url: "", upvotes: 543, verified: false, rating: 4.3, icon: "📖", category: "art-creative-design", subcategory: "ai-book-cover-generator" },
      { id: "imgkits-book", name: "Imgkits - Top AI Image & Video Processing Tools", description: "Book cover AI generation", url: "", upvotes: 432, verified: false, rating: 4.2, icon: "🛠️", category: "art-creative-design", subcategory: "ai-book-cover-generator" }
    ],
    "ai-brochure-maker": [
      { id: "real-estate-listing", name: "My Real Estate Listing", description: "AI real estate brochure maker", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "🏠", category: "art-creative-design", subcategory: "ai-brochure-maker" },
      { id: "storydoc", name: "Storydoc", description: "Interactive AI brochure creator", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "📄", category: "art-creative-design", subcategory: "ai-brochure-maker" },
      { id: "clevopyai", name: "ClevopyAI", description: "AI brochure and marketing material", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "🎯", category: "art-creative-design", subcategory: "ai-brochure-maker" }
    ],
    "ai-business-card-generator": [
      { id: "popl", name: "Popl", description: "Digital business card AI creator", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "💼", category: "art-creative-design", subcategory: "ai-business-card-generator" },
      { id: "brandcrowd-card", name: "BrandCrowd", description: "AI business card design", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "👑", category: "art-creative-design", subcategory: "ai-business-card-generator" },
      { id: "brandmark-logo", name: "Brandmark Logo Maker", description: "Business card and logo AI", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "🏷️", category: "art-creative-design", subcategory: "ai-business-card-generator" },
      { id: "zoviz", name: "Zoviz", description: "Professional business card AI", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "🎨", category: "art-creative-design", subcategory: "ai-business-card-generator" },
      { id: "logome", name: "Logome", description: "Business card and branding AI", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "📇", category: "art-creative-design", subcategory: "ai-business-card-generator" }
    ],
    "ai-cartoon-generator": [
      { id: "myimg-ai", name: "Myimg AI", description: "AI cartoon and caricature creator", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "😄", category: "art-creative-design", subcategory: "ai-cartoon-generator" },
      { id: "colorcinch", name: "Colorcinch", description: "Cartoon photo editor with AI", url: "", upvotes: 1098, verified: true, rating: 4.6, icon: "🎨", category: "art-creative-design", subcategory: "ai-cartoon-generator" },
      { id: "neural-frames", name: "neural frames", description: "AI video and cartoon generation", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "🎬", category: "art-creative-design", subcategory: "ai-cartoon-generator" },
      { id: "autodraft-ai", name: "Autodraft AI", description: "Cartoon character AI designer", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "✏️", category: "art-creative-design", subcategory: "ai-cartoon-generator" },
      { id: "krikey-ai", name: "Krikey AI", description: "3D cartoon avatar creator", url: "", upvotes: 543, verified: false, rating: 4.3, icon: "🎭", category: "art-creative-design", subcategory: "ai-cartoon-generator" }
    ],
    "ai-cat": [
      { id: "catting", name: "Catting", description: "AI cat image generator", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🐱", category: "art-creative-design", subcategory: "ai-cat" },
      { id: "catsme", name: "CatsMe", description: "AI cat photo transformation", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "😺", category: "art-creative-design", subcategory: "ai-cat" },
      { id: "skeptical-tom", name: "Skeptical Tom", description: "AI cat meme generator", url: "", upvotes: 543, verified: false, rating: 4.4, icon: "🤨", category: "art-creative-design", subcategory: "ai-cat" },
      { id: "cute-cat-ai", name: "Cute Cat Pictures AI Generator", description: "Adorable AI cat creator", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "😻", category: "art-creative-design", subcategory: "ai-cat" },
      { id: "cat-gpt", name: "Cat-GPT", description: "AI cat conversation and images", url: "", upvotes: 321, verified: false, rating: 4.2, icon: "🤖", category: "art-creative-design", subcategory: "ai-cat" }
    ],
    "ai-clothing-generator": [
      { id: "ifoto-clothing", name: "iFoto", description: "AI clothing design and generation", url: "", upvotes: 1456, verified: true, rating: 4.7, icon: "👗", category: "art-creative-design", subcategory: "ai-clothing-generator" },
      { id: "customuse", name: "Customuse", description: "Custom AI clothing designer", url: "", upvotes: 1098, verified: true, rating: 4.6, icon: "🎨", category: "art-creative-design", subcategory: "ai-clothing-generator" },
      { id: "new-black-ai", name: "The New Black AI", description: "AI fashion design platform", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "🖤", category: "art-creative-design", subcategory: "ai-clothing-generator" },
      { id: "fashn-ai", name: "FASHN AI", description: "Fashion AI design tool", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "✨", category: "art-creative-design", subcategory: "ai-clothing-generator" },
      { id: "outfit-changer", name: "Outfit Changer", description: "AI outfit transformation", url: "", upvotes: 543, verified: false, rating: 4.3, icon: "👔", category: "art-creative-design", subcategory: "ai-clothing-generator" }
    ],
    "ai-color-palette-generator": [
      { id: "colormagic", name: "ColorMagic", description: "AI color palette creation", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🎨", category: "art-creative-design", subcategory: "ai-color-palette-generator" },
      { id: "palettemaker", name: "PaletteMaker", description: "Smart color palette generator", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🎭", category: "art-creative-design", subcategory: "ai-color-palette-generator" },
      { id: "color-analysis-ai-palette", name: "My Color Analysis AI", description: "Personal color palette AI", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "💄", category: "art-creative-design", subcategory: "ai-color-palette-generator" },
      { id: "huehive", name: "HueHive", description: "Collaborative color palette tool", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "🍯", category: "art-creative-design", subcategory: "ai-color-palette-generator" },
      { id: "perception", name: "Perception", description: "AI color perception analysis", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "👁️", category: "art-creative-design", subcategory: "ai-color-palette-generator" }
    ],
    "ai-coloring-book-generator": [
      { id: "coloringbook-ai", name: "ColoringBook AI", description: "AI coloring book creation", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🎨", category: "art-creative-design", subcategory: "ai-coloring-book-generator" },
      { id: "colorify-ai", name: "Colorify AI", description: "Smart coloring book generator", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "🖍️", category: "art-creative-design", subcategory: "ai-coloring-book-generator" },
      { id: "colorin-ai", name: "Colorin AI", description: "AI coloring page creator", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "🎭", category: "art-creative-design", subcategory: "ai-coloring-book-generator" },
      { id: "best-coloring-pages", name: "Best Coloring Pages AI", description: "High-quality coloring pages", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "📚", category: "art-creative-design", subcategory: "ai-coloring-book-generator" },
      { id: "color-pop", name: "Color Pop", description: "Interactive coloring AI", url: "", upvotes: 321, verified: false, rating: 4.2, icon: "🎈", category: "art-creative-design", subcategory: "ai-coloring-book-generator" }
    ],
    "ai-comic": [
      { id: "omniparser", name: "OmniParser", description: "AI comic creation and parsing", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "📖", category: "art-creative-design", subcategory: "ai-comic" },
      { id: "octocomics", name: "OctoComics", description: "Octopus-themed comic AI", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🐙", category: "art-creative-design", subcategory: "ai-comic" },
      { id: "prompttocomicai", name: "PromptToComicAI", description: "Text to comic AI generator", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "💭", category: "art-creative-design", subcategory: "ai-comic" },
      { id: "comicai", name: "Comicai", description: "Professional comic AI creator", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "🎭", category: "art-creative-design", subcategory: "ai-comic" },
      { id: "fantoons", name: "Fantoons", description: "Fantasy comic AI generator", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "🦄", category: "art-creative-design", subcategory: "ai-comic" }
    ],
    "ai-comic-factory": [
      { id: "ai-comic-generator-factory", name: "AI Comic Generator", description: "Comic factory AI platform", url: "", upvotes: 987, verified: true, rating: 4.6, icon: "🏭", category: "art-creative-design", subcategory: "ai-comic-factory" },
      { id: "ai-comic-factory", name: "AI Comic Factory", description: "Automated comic creation", url: "", upvotes: 765, verified: true, rating: 4.5, icon: "🎬", category: "art-creative-design", subcategory: "ai-comic-factory" },
      { id: "octocomics-factory", name: "OctoComics", description: "Mass comic production AI", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🐙", category: "art-creative-design", subcategory: "ai-comic-factory" },
      { id: "labubu-wallpaper", name: "Labubu Wallpaper - 100+ Labubu Live Wallpapers & 4K Walls (Updated Daily)", description: "Comic character wallpapers", url: "", upvotes: 543, verified: false, rating: 4.3, icon: "🖼️", category: "art-creative-design", subcategory: "ai-comic-factory" }
    ],
    "ai-comic-generator": [
      { id: "komiko-gen", name: "Komiko", description: "AI comic generation platform", url: "", upvotes: 1456, verified: true, rating: 4.7, icon: "📚", category: "art-creative-design", subcategory: "ai-comic-generator" },
      { id: "tooning", name: "Tooning", description: "Cartoon comic AI creator", url: "", upvotes: 1098, verified: true, rating: 4.6, icon: "🎨", category: "art-creative-design", subcategory: "ai-comic-generator" },
      { id: "ai-comic-generator-main", name: "AI Comic Generator", description: "Main comic generation tool", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "📖", category: "art-creative-design", subcategory: "ai-comic-generator" },
      { id: "anifusion", name: "Anifusion", description: "Anime comic fusion AI", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🎌", category: "art-creative-design", subcategory: "ai-comic-generator" },
      { id: "storynest-ai", name: "StoryNest.ai", description: "Story-driven comic AI", url: "", upvotes: 543, verified: false, rating: 4.3, icon: "🪺", category: "art-creative-design", subcategory: "ai-comic-generator" }
    ],
    "ai-cover-generator": [
      { id: "topmediai-cover", name: "TopMediai", description: "AI cover generation tool", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🎤", category: "art-creative-design", subcategory: "ai-cover-generator" },
      { id: "musicfy-ai", name: "Musicfy AI", description: "Music cover AI creator", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🎵", category: "art-creative-design", subcategory: "ai-cover-generator" },
      { id: "audimee", name: "Audimee", description: "Audio cover AI platform", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "🎧", category: "art-creative-design", subcategory: "ai-cover-generator" },
      { id: "singify-ai", name: "Singify AI", description: "Singing cover AI generator", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "🎙️", category: "art-creative-design", subcategory: "ai-cover-generator" },
      { id: "covers-ai", name: "Covers.ai", description: "Professional cover AI tool", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "🎨", category: "art-creative-design", subcategory: "ai-cover-generator" }
    ],
    "ai-design-assistant": [
      { id: "ls-graphics", name: "ls.graphics", description: "AI design assistant platform", url: "", upvotes: 1567, verified: true, rating: 4.8, icon: "🎨", category: "art-creative-design", subcategory: "ai-design-assistant" },
      { id: "mnml-ai", name: "mnml.ai", description: "Minimalist design AI assistant", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "✨", category: "art-creative-design", subcategory: "ai-design-assistant" },
      { id: "visily", name: "Visily", description: "Visual design AI helper", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "👁️", category: "art-creative-design", subcategory: "ai-design-assistant" },
      { id: "motiff", name: "Motiff", description: "Motion design AI assistant", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "🎬", category: "art-creative-design", subcategory: "ai-design-assistant" },
      { id: "weavy", name: "Weavy", description: "Collaborative design AI", url: "", upvotes: 543, verified: false, rating: 4.4, icon: "🕸️", category: "art-creative-design", subcategory: "ai-design-assistant" }
    ],
    "ai-design-generator": [
      { id: "miricanvas", name: "MiriCanvas", description: "AI design generation platform", url: "", upvotes: 1890, verified: true, rating: 4.8, icon: "🎨", category: "art-creative-design", subcategory: "ai-design-generator" },
      { id: "v0-dev", name: "v0.dev", description: "AI web design generator", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "🌐", category: "art-creative-design", subcategory: "ai-design-generator" },
      { id: "microsoft-designer", name: "Microsoft Designer", description: "Microsoft's AI design tool", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🏢", category: "art-creative-design", subcategory: "ai-design-generator" },
      { id: "napkin-ai-design", name: "Napkin AI", description: "Quick design AI generator", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "🎨", category: "art-creative-design", subcategory: "ai-design-generator" },
      { id: "stitch", name: "Stitch", description: "Design stitching AI platform", url: "", upvotes: 654, verified: false, rating: 4.4, icon: "🧵", category: "art-creative-design", subcategory: "ai-design-generator" }
    ],
    "ai-disney-poster": [
      { id: "pixarai", name: "PixarAI", description: "Disney Pixar style AI poster", url: "", upvotes: 1456, verified: true, rating: 4.7, icon: "🏰", category: "art-creative-design", subcategory: "ai-disney-poster" },
      { id: "disney-ai-pixar", name: "Disney AI Pixar Generator", description: "Disney Pixar character AI", url: "", upvotes: 1098, verified: true, rating: 4.6, icon: "🎭", category: "art-creative-design", subcategory: "ai-disney-poster" },
      { id: "disney-ai-poster", name: "Disney AI Poster", description: "Disney style poster AI", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "🎨", category: "art-creative-design", subcategory: "ai-disney-poster" },
      { id: "disney-pixar-dog", name: "Disney Pixar Dog AI", description: "Disney style dog character AI", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🐕", category: "art-creative-design", subcategory: "ai-disney-poster" },
      { id: "bing-image-creator", name: "Bing Image Creator", description: "Microsoft's Disney style AI", url: "", upvotes: 543, verified: false, rating: 4.3, icon: "🔍", category: "art-creative-design", subcategory: "ai-disney-poster" }
    ],
    "ai-drawing": [
      { id: "autodraw", name: "AutoDraw", description: "AI drawing assistance tool", url: "", upvotes: 1789, verified: true, rating: 4.8, icon: "✏️", category: "art-creative-design", subcategory: "ai-drawing" },
      { id: "sketchar", name: "Sketchar", description: "AI sketch learning app", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "✏️", category: "art-creative-design", subcategory: "ai-drawing" },
      { id: "draftaid", name: "DraftAid", description: "AI drawing draft assistant", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "📝", category: "art-creative-design", subcategory: "ai-drawing" },
      { id: "drawings-alive", name: "Drawings Alive", description: "AI drawing animation tool", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "🎬", category: "art-creative-design", subcategory: "ai-drawing" },
      { id: "patentdrawai", name: "PatentDrawAI", description: "AI patent drawing creator", url: "", upvotes: 543, verified: false, rating: 4.4, icon: "📋", category: "art-creative-design", subcategory: "ai-drawing" }
    ],
    "ai-emoji-generator": [
      { id: "ai-emoji-generator", name: "AI Emoji Generator", description: "Custom emoji AI creator", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "😀", category: "art-creative-design", subcategory: "ai-emoji-generator" },
      { id: "emoji-combiner", name: "Emoji Combiner", description: "AI emoji combination tool", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "😊", category: "art-creative-design", subcategory: "ai-emoji-generator" },
      { id: "ai-emoji-generator-2", name: "AI Emoji Generator", description: "Alternative emoji AI tool", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "🤖", category: "art-creative-design", subcategory: "ai-emoji-generator" },
      { id: "tiktok-emojis", name: "TikTok Emojis", description: "TikTok style emoji AI", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "🎵", category: "art-creative-design", subcategory: "ai-emoji-generator" },
      { id: "emojifyer", name: "Emojifyer", description: "Text to emoji AI converter", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "🔄", category: "art-creative-design", subcategory: "ai-emoji-generator" }
    ],
    "ai-font-generator": [
      { id: "creative-fabrica-font-gen", name: "Creative Fabrica Font Generator", description: "AI font creation platform", url: "", upvotes: 1456, verified: true, rating: 4.8, icon: "✍️", category: "art-creative-design", subcategory: "ai-font-generator" },
      { id: "gentype", name: "Gentype", description: "AI typography generator", url: "", upvotes: 1098, verified: true, rating: 4.7, icon: "🔤", category: "art-creative-design", subcategory: "ai-font-generator" },
      { id: "font-vibes", name: "Font Vibes", description: "AI font mood generator", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "✨", category: "art-creative-design", subcategory: "ai-font-generator" },
      { id: "typiq", name: "Typiq", description: "Smart AI font creator", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "🎨", category: "art-creative-design", subcategory: "ai-font-generator" },
      { id: "designs-ai", name: "Designs AI", description: "AI design and font platform", url: "", upvotes: 543, verified: false, rating: 4.4, icon: "🏢", category: "art-creative-design", subcategory: "ai-font-generator" }
    ],
    "ai-graphic-design": [
      { id: "adobe", name: "Adobe", description: "Professional AI graphic design", url: "", upvotes: 2567, verified: true, rating: 4.9, icon: "🏢", category: "art-creative-design", subcategory: "ai-graphic-design" },
      { id: "kittl-graphic", name: "Kittl", description: "AI graphic design platform", url: "", upvotes: 1890, verified: true, rating: 4.8, icon: "🎨", category: "art-creative-design", subcategory: "ai-graphic-design" },
      { id: "recraft", name: "Recraft", description: "AI vector graphics design", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "🔄", category: "art-creative-design", subcategory: "ai-graphic-design" },
      { id: "microsoft-designer-graphic", name: "Microsoft Designer", description: "AI graphic design tool", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🏢", category: "art-creative-design", subcategory: "ai-graphic-design" },
      { id: "pixelied", name: "Pixelied", description: "Online AI graphic design", url: "", upvotes: 876, verified: false, rating: 4.5, icon: "📐", category: "art-creative-design", subcategory: "ai-graphic-design" }
    ],
    "ai-hair-color-changer": [
      { id: "hairstyle-ai-color", name: "Hairstyle AI", description: "AI hair color transformation", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "💇", category: "art-creative-design", subcategory: "ai-hair-color-changer" },
      { id: "ai-hairstyle-color", name: "AI Hairstyle", description: "Hair color AI changer", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "💄", category: "art-creative-design", subcategory: "ai-hair-color-changer" },
      { id: "ai-hairstyle-changer", name: "AI HairStyle Changer", description: "Complete hair color AI tool", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "✨", category: "art-creative-design", subcategory: "ai-hair-color-changer" },
      { id: "haircutai", name: "HaircutAI", description: "AI haircut and color tool", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "✂️", category: "art-creative-design", subcategory: "ai-hair-color-changer" },
      { id: "ai-hairstyle-changer-2", name: "AI Hairstyle Changer", description: "Alternative hair color AI", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "🎨", category: "art-creative-design", subcategory: "ai-hair-color-changer" }
    ],
    "ai-hairstyle": [
      { id: "heyphoto", name: "HeyPhoto", description: "AI hairstyle transformation", url: "", upvotes: 1567, verified: true, rating: 4.8, icon: "📸", category: "art-creative-design", subcategory: "ai-hairstyle" },
      { id: "hairstyle-ai", name: "Hairstyle AI", description: "AI hairstyle generator", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "💇", category: "art-creative-design", subcategory: "ai-hairstyle" },
      { id: "ai-hairstyle", name: "AI Hairstyle", description: "Smart hairstyle AI tool", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "💄", category: "art-creative-design", subcategory: "ai-hairstyle" },
      { id: "ai-hairstyle-changer-main", name: "AI HairStyle Changer", description: "Professional hairstyle AI", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "✨", category: "art-creative-design", subcategory: "ai-hairstyle" },
      { id: "haircutai-style", name: "HaircutAI", description: "AI haircut style generator", url: "", upvotes: 543, verified: false, rating: 4.4, icon: "✂️", category: "art-creative-design", subcategory: "ai-hairstyle" }
    ],
    "ai-icon-generator": [
      { id: "creatie", name: "Creatie", description: "AI icon creation platform", url: "", upvotes: 1456, verified: true, rating: 4.8, icon: "🎨", category: "art-creative-design", subcategory: "ai-icon-generator" },
      { id: "pixcap", name: "Pixcap", description: "3D icon AI generator", url: "", upvotes: 1098, verified: true, rating: 4.7, icon: "📦", category: "art-creative-design", subcategory: "ai-icon-generator" },
      { id: "iconai", name: "IconAI", description: "Smart icon AI creator", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🤖", category: "art-creative-design", subcategory: "ai-icon-generator" },
      { id: "appicons-ai", name: "Appicons.ai", description: "App icon AI generator", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "📱", category: "art-creative-design", subcategory: "ai-icon-generator" },
      { id: "candyicons", name: "CandyIcons", description: "Colorful icon AI creator", url: "", upvotes: 543, verified: false, rating: 4.4, icon: "🍭", category: "art-creative-design", subcategory: "ai-icon-generator" }
    ],
    "ai-illustration-generator": [
      { id: "seaart-ai", name: "Seaart.ai", description: "AI illustration platform", url: "", upvotes: 1789, verified: true, rating: 4.8, icon: "🌊", category: "art-creative-design", subcategory: "ai-illustration-generator" },
      { id: "ai-illustration-generator", name: "AI Illustration Generator", description: "Professional illustration AI", url: "", upvotes: 1456, verified: true, rating: 4.7, icon: "🎨", category: "art-creative-design", subcategory: "ai-illustration-generator" },
      { id: "icons8-illust", name: "Icons8", description: "Icon and illustration AI", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🎭", category: "art-creative-design", subcategory: "ai-illustration-generator" },
      { id: "iconscout-illust", name: "IconScout", description: "Illustration AI platform", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "🎨", category: "art-creative-design", subcategory: "ai-illustration-generator" },
      { id: "chichi-pui", name: "chichi-pui", description: "Cute illustration AI", url: "", upvotes: 654, verified: false, rating: 4.4, icon: "🐾", category: "art-creative-design", subcategory: "ai-illustration-generator" }
    ],
    "ai-manga-generator": [
      { id: "anifusion-manga", name: "Anifusion", description: "AI manga creation platform", url: "", upvotes: 1567, verified: true, rating: 4.8, icon: "🎌", category: "art-creative-design", subcategory: "ai-manga-generator" },
      { id: "toona", name: "toona", description: "AI manga and anime creator", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🎭", category: "art-creative-design", subcategory: "ai-manga-generator" },
      { id: "mangaka-app", name: "Mangaka.app", description: "Manga artist AI assistant", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "✏️", category: "art-creative-design", subcategory: "ai-manga-generator" },
      { id: "neural-canvas", name: "Neural Canvas", description: "AI manga art generator", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "🎨", category: "art-creative-design", subcategory: "ai-manga-generator" },
      { id: "manga-tv", name: "Manga TV", description: "AI manga video creator", url: "", upvotes: 543, verified: false, rating: 4.4, icon: "📺", category: "art-creative-design", subcategory: "ai-manga-generator" }
    ],
    "ai-mockup-generator": [
      { id: "recraft-mockup", name: "Recraft", description: "AI mockup design generator", url: "", upvotes: 1456, verified: true, rating: 4.8, icon: "🔄", category: "art-creative-design", subcategory: "ai-mockup-generator" },
      { id: "mockey-ai", name: "Mockey.ai", description: "AI product mockup creator", url: "", upvotes: 1098, verified: true, rating: 4.7, icon: "🧸", category: "art-creative-design", subcategory: "ai-mockup-generator" },
      { id: "uizard", name: "Uizard", description: "AI UI mockup generator", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "📱", category: "art-creative-design", subcategory: "ai-mockup-generator" },
      { id: "visily-mockup", name: "Visily", description: "Visual mockup AI tool", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "👁️", category: "art-creative-design", subcategory: "ai-mockup-generator" },
      { id: "magic-patterns", name: "Magic Patterns", description: "AI pattern mockup creator", url: "", upvotes: 543, verified: false, rating: 4.4, icon: "✨", category: "art-creative-design", subcategory: "ai-mockup-generator" }
    ],
    "ai-movie-poster": [
      { id: "aigfaigf-art", name: "aigfaigf.art", description: "AI movie poster creator", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🎬", category: "art-creative-design", subcategory: "ai-movie-poster" },
      { id: "movieaiposter", name: "MovieAIPoster", description: "Professional movie poster AI", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🎭", category: "art-creative-design", subcategory: "ai-movie-poster" },
      { id: "disney-ai-poster-movie", name: "Disney AI Poster", description: "Disney style movie poster", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "🏰", category: "art-creative-design", subcategory: "ai-movie-poster" },
      { id: "bing-image-creator-movie", name: "Bing Image Creator", description: "Microsoft movie poster AI", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "🔍", category: "art-creative-design", subcategory: "ai-movie-poster" },
      { id: "neural-frames-movie", name: "Neural Frames", description: "AI movie poster frames", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "🎬", category: "art-creative-design", subcategory: "ai-movie-poster" }
    ],
    "ai-painting-generator": [
      { id: "wombo-dream", name: "WOMBO Dream", description: "AI painting creation app", url: "", upvotes: 1890, verified: true, rating: 4.8, icon: "🎨", category: "art-creative-design", subcategory: "ai-painting-generator" },
      { id: "pet-painting", name: "The Pet Painting", description: "AI pet portrait painter", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🐾", category: "art-creative-design", subcategory: "ai-painting-generator" },
      { id: "aisnap", name: "AiSnap", description: "AI snapshot painting tool", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "📸", category: "art-creative-design", subcategory: "ai-painting-generator" },
      { id: "speed-ai-painting", name: "Speed AI Painting to photo", description: "Fast AI painting converter", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "⚡", category: "art-creative-design", subcategory: "ai-painting-generator" },
      { id: "chatpaint", name: "ChatPaint", description: "Conversational AI painter", url: "", upvotes: 543, verified: false, rating: 4.4, icon: "💬", category: "art-creative-design", subcategory: "ai-painting-generator" }
    ],
    "ai-pattern-generator": [
      { id: "patterned-ai", name: "Patterned AI", description: "AI pattern creation tool", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🔄", category: "art-creative-design", subcategory: "ai-pattern-generator" },
      { id: "myth-ai", name: "Myth AI", description: "Mythical pattern AI generator", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🐉", category: "art-creative-design", subcategory: "ai-pattern-generator" },
      { id: "monsterimage-ai", name: "MonsterImage.AI", description: "Monster pattern AI creator", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "👹", category: "art-creative-design", subcategory: "ai-pattern-generator" },
      { id: "papered", name: "Papered", description: "Wallpaper pattern AI", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "📄", category: "art-creative-design", subcategory: "ai-pattern-generator" },
      { id: "xinva-ai", name: "Xinva AI", description: "Creative pattern AI tool", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "✨", category: "art-creative-design", subcategory: "ai-pattern-generator" }
    ],
    "ai-photography": [
      { id: "vsco", name: "VSCO", description: "AI photography enhancement", url: "", upvotes: 2345, verified: true, rating: 4.9, icon: "📸", category: "art-creative-design", subcategory: "ai-photography" },
      { id: "dronedeploy", name: "DroneDeploy", description: "AI drone photography platform", url: "", upvotes: 1567, verified: true, rating: 4.8, icon: "🚁", category: "art-creative-design", subcategory: "ai-photography" },
      { id: "aftershoot", name: "Aftershoot", description: "AI photo editing and culling", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "⚡", category: "art-creative-design", subcategory: "ai-photography" },
      { id: "artflow-ai", name: "Artflow.ai", description: "AI photography art creation", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🎨", category: "art-creative-design", subcategory: "ai-photography" },
      { id: "try-it-on-ai", name: "Try it on AI", description: "AI fashion photography", url: "", upvotes: 654, verified: false, rating: 4.5, icon: "👗", category: "art-creative-design", subcategory: "ai-photography" }
    ],
    "ai-pixel-art": [
      { id: "pixel-art-ai", name: "Pixel-Art.ai", description: "AI pixel art generator", url: "", upvotes: 1456, verified: true, rating: 4.8, icon: "🎮", category: "art-creative-design", subcategory: "ai-pixel-art" },
      { id: "pixelfy", name: "Pixelfy", description: "Photo to pixel art AI", url: "", upvotes: 1098, verified: true, rating: 4.7, icon: "🔲", category: "art-creative-design", subcategory: "ai-pixel-art" },
      { id: "pixelicious", name: "Pixelicious", description: "AI pixel art creator", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🎨", category: "art-creative-design", subcategory: "ai-pixel-art" },
      { id: "pxlize-ai", name: "Pxlize AI", description: "Advanced pixel art AI", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "⚡", category: "art-creative-design", subcategory: "ai-pixel-art" },
      { id: "bitsjourney", name: "Bitsjourney", description: "Pixel art journey AI", url: "", upvotes: 543, verified: false, rating: 4.4, icon: "🚀", category: "art-creative-design", subcategory: "ai-pixel-art" }
    ],
    "ai-pokemon-generator": [
      { id: "pokemon-avatar-generator", name: "Pokémon Avatar Generator", description: "AI Pokémon character creator", url: "", upvotes: 1789, verified: true, rating: 4.8, icon: "⚡", category: "art-creative-design", subcategory: "ai-pokemon-generator" },
      { id: "animegenius-pokemon", name: "AnimeGenius", description: "Pokémon style AI generator", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "⭐", category: "art-creative-design", subcategory: "ai-pokemon-generator" },
      { id: "bulk-image-generation", name: "Bulk Image Generation", description: "Mass Pokémon AI creator", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "📦", category: "art-creative-design", subcategory: "ai-pokemon-generator" },
      { id: "crepal", name: "CrePal", description: "Creative Pokémon AI pal", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "🎭", category: "art-creative-design", subcategory: "ai-pokemon-generator" },
      { id: "seapik", name: "Seapik", description: "Sea-themed Pokémon AI", url: "", upvotes: 543, verified: false, rating: 4.4, icon: "🌊", category: "art-creative-design", subcategory: "ai-pokemon-generator" }
    ],
    "ai-poster-generator": [
      { id: "logome-poster", name: "Logome", description: "AI poster and logo creator", url: "", upvotes: 1456, verified: true, rating: 4.7, icon: "📇", category: "art-creative-design", subcategory: "ai-poster-generator" },
      { id: "pixarai-poster", name: "PixarAI", description: "Pixar style poster AI", url: "", upvotes: 1098, verified: true, rating: 4.6, icon: "🏰", category: "art-creative-design", subcategory: "ai-poster-generator" },
      { id: "ai-poster-generator", name: "AI Poster Generator", description: "Professional poster AI tool", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "🎨", category: "art-creative-design", subcategory: "ai-poster-generator" },
      { id: "ai-pixar-posters", name: "AI Pixar Posters", description: "Pixar style poster creator", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🎭", category: "art-creative-design", subcategory: "ai-poster-generator" },
      { id: "ai-poster-generator-2", name: "AI Poster Generator", description: "Alternative poster AI", url: "", upvotes: 543, verified: false, rating: 4.3, icon: "📊", category: "art-creative-design", subcategory: "ai-poster-generator" }
    ],
    "ai-svg-generator": [
      { id: "vectorizer-ai", name: "Vectorizer.AI", description: "AI SVG vectorization tool", url: "", upvotes: 1567, verified: true, rating: 4.8, icon: "🔄", category: "art-creative-design", subcategory: "ai-svg-generator" },
      { id: "svgtrace", name: "SvgTrace", description: "SVG tracing AI platform", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "✏️", category: "art-creative-design", subcategory: "ai-svg-generator" },
      { id: "svg-io", name: "SVG.io", description: "Online SVG AI generator", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🌐", category: "art-creative-design", subcategory: "ai-svg-generator" },
      { id: "svgstud-io", name: "SVGStud.io", description: "SVG studio AI tool", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "🎭", category: "art-creative-design", subcategory: "ai-svg-generator" },
      { id: "neosvg", name: "neoSVG", description: "Modern SVG AI creator", url: "", upvotes: 543, verified: false, rating: 4.4, icon: "🆕", category: "art-creative-design", subcategory: "ai-svg-generator" }
    ],
    "ai-sketch-generator": [
      { id: "autodraw-sketch", name: "AutoDraw", description: "AI sketch generation tool", url: "", upvotes: 1789, verified: true, rating: 4.8, icon: "✏️", category: "art-creative-design", subcategory: "ai-sketch-generator" },
      { id: "mnml-ai-sketch", name: "mnml.ai", description: "Minimalist sketch AI", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "✨", category: "art-creative-design", subcategory: "ai-sketch-generator" },
      { id: "scribble-diffusion", name: "Scribble Diffusion", description: "Scribble to art AI", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🎨", category: "art-creative-design", subcategory: "ai-sketch-generator" },
      { id: "sketch-logo-ai", name: "Sketch Logo AI", description: "Logo sketch AI creator", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "🏷️", category: "art-creative-design", subcategory: "ai-sketch-generator" },
      { id: "sketchedge", name: "SketchEdge", description: "Edge detection sketch AI", url: "", upvotes: 543, verified: false, rating: 4.4, icon: "📐", category: "art-creative-design", subcategory: "ai-sketch-generator" }
    ],
    "ai-sticker-generator": [
      { id: "sticker-shake", name: "Sticker Shake", description: "AI sticker creation app", url: "", upvotes: 1456, verified: true, rating: 4.8, icon: "📱", category: "art-creative-design", subcategory: "ai-sticker-generator" },
      { id: "stickerit-ai", name: "StickerIt.AI", description: "Professional sticker AI", url: "", upvotes: 1098, verified: true, rating: 4.7, icon: "🏷️", category: "art-creative-design", subcategory: "ai-sticker-generator" },
      { id: "stickers-ai-generator", name: "Stickers AI Generator", description: "Custom sticker AI creator", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "✨", category: "art-creative-design", subcategory: "ai-sticker-generator" },
      { id: "ai-face-sticker", name: "AI Face Sticker Generator", description: "Face sticker AI tool", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "😊", category: "art-creative-design", subcategory: "ai-sticker-generator" },
      { id: "ai-sticker-generator", name: "AI Sticker Generator", description: "General sticker AI platform", url: "", upvotes: 543, verified: false, rating: 4.4, icon: "🎨", category: "art-creative-design", subcategory: "ai-sticker-generator" }
    ],
    "ai-t-shirt-design": [
      { id: "vexels", name: "Vexels", description: "AI t-shirt design platform", url: "", upvotes: 1567, verified: true, rating: 4.8, icon: "👕", category: "art-creative-design", subcategory: "ai-t-shirt-design" },
      { id: "pietra", name: "Pietra", description: "AI fashion design tool", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "💎", category: "art-creative-design", subcategory: "ai-t-shirt-design" },
      { id: "teeai", name: "TeeAI", description: "T-shirt AI design generator", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🎨", category: "art-creative-design", subcategory: "ai-t-shirt-design" },
      { id: "youwear", name: "YouWear", description: "Personalized t-shirt AI", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "👤", category: "art-creative-design", subcategory: "ai-t-shirt-design" },
      { id: "looksounique", name: "looksounique", description: "Unique t-shirt AI designs", url: "", upvotes: 543, verified: false, rating: 4.4, icon: "🦄", category: "art-creative-design", subcategory: "ai-t-shirt-design" }
    ],
    "ai-tattoo-generator": [
      { id: "blackink-ai", name: "BlackInk AI", description: "AI tattoo design platform", url: "", upvotes: 1789, verified: true, rating: 4.8, icon: "🖤", category: "art-creative-design", subcategory: "ai-tattoo-generator" },
      { id: "tatship", name: "Tatship", description: "Tattoo design AI creator", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🚢", category: "art-creative-design", subcategory: "ai-tattoo-generator" },
      { id: "tattoosai", name: "TattoosAI", description: "Professional tattoo AI", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🎨", category: "art-creative-design", subcategory: "ai-tattoo-generator" },
      { id: "inker-ai", name: "Inker.AI", description: "Tattoo ink AI designer", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "✍️", category: "art-creative-design", subcategory: "ai-tattoo-generator" },
      { id: "tattoos-ai", name: "Tattoos.ai", description: "AI tattoo creation tool", url: "", upvotes: 543, verified: false, rating: 4.4, icon: "🎭", category: "art-creative-design", subcategory: "ai-tattoo-generator" }
    ],
    "ai-thumbnail-maker": [
      { id: "pikzels", name: "Pikzels", description: "AI thumbnail creation tool", url: "", upvotes: 1456, verified: true, rating: 4.8, icon: "🖼️", category: "art-creative-design", subcategory: "ai-thumbnail-maker" },
      { id: "thumblytics", name: "Thumblytics", description: "Thumbnail analytics and AI", url: "", upvotes: 1098, verified: true, rating: 4.7, icon: "📊", category: "art-creative-design", subcategory: "ai-thumbnail-maker" },
      { id: "viro", name: "Viro", description: "AI thumbnail generator", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🎬", category: "art-creative-design", subcategory: "ai-thumbnail-maker" },
      { id: "thumbnails-labs", name: "Thumbnails Labs", description: "Thumbnail laboratory AI", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "🧪", category: "art-creative-design", subcategory: "ai-thumbnail-maker" },
      { id: "thumbnailmaker", name: "ThumbnailMaker", description: "Simple thumbnail AI tool", url: "", upvotes: 543, verified: false, rating: 4.4, icon: "🛠️", category: "art-creative-design", subcategory: "ai-thumbnail-maker" }
    ],
    "ai-ux-design": [
      { id: "ux-pilot", name: "UX Pilot", description: "AI UX design assistant", url: "", upvotes: 1567, verified: true, rating: 4.8, icon: "✈️", category: "art-creative-design", subcategory: "ai-ux-design" },
      { id: "uizard-ux", name: "Uizard", description: "AI-powered UX design tool", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "📱", category: "art-creative-design", subcategory: "ai-ux-design" },
      { id: "stitch-ux", name: "Stitch", description: "UX design AI platform", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🧵", category: "art-creative-design", subcategory: "ai-ux-design" },
      { id: "visily-ux", name: "Visily", description: "Visual UX design AI", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "👁️", category: "art-creative-design", subcategory: "ai-ux-design" },
      { id: "motiff-ux", name: "Motiff", description: "Motion UX design AI", url: "", upvotes: 543, verified: false, rating: 4.4, icon: "🎬", category: "art-creative-design", subcategory: "ai-ux-design" }
    ],
    "ai-vector-graphics": [
      { id: "kittl-vector", name: "Kittl", description: "AI vector graphics creator", url: "", upvotes: 1890, verified: true, rating: 4.9, icon: "🎨", category: "art-creative-design", subcategory: "ai-vector-graphics" },
      { id: "recraft-vector", name: "Recraft", description: "Professional vector AI tool", url: "", upvotes: 1567, verified: true, rating: 4.8, icon: "🔄", category: "art-creative-design", subcategory: "ai-vector-graphics" },
      { id: "vectorizer-ai-graphics", name: "Vectorizer.AI", description: "Image to vector AI converter", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🔄", category: "art-creative-design", subcategory: "ai-vector-graphics" },
      { id: "vectorizer-io", name: "Vectorizer.io", description: "Online vector AI tool", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🌐", category: "art-creative-design", subcategory: "ai-vector-graphics" },
      { id: "blush", name: "Blush", description: "AI character vector graphics", url: "", upvotes: 654, verified: false, rating: 4.5, icon: "😊", category: "art-creative-design", subcategory: "ai-vector-graphics" }
    ],
    "fashion-ai": [
      { id: "youcam-app-fashion", name: "YouCam App Provider", description: "AI fashion try-on app", url: "", upvotes: 1789, verified: true, rating: 4.8, icon: "💄", category: "art-creative-design", subcategory: "fashion-ai" },
      { id: "pic-copilot", name: "Pic Copilot", description: "AI fashion photography", url: "", upvotes: 1456, verified: true, rating: 4.7, icon: "📸", category: "art-creative-design", subcategory: "fashion-ai" },
      { id: "botika", name: "Botika", description: "AI fashion model platform", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🤖", category: "art-creative-design", subcategory: "fashion-ai" },
      { id: "fashn-ai-fashion", name: "FASHN AI", description: "AI fashion design platform", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "✨", category: "art-creative-design", subcategory: "fashion-ai" },
      { id: "resleeve", name: "Resleeve", description: "AI fashion design tool", url: "", upvotes: 654, verified: false, rating: 4.4, icon: "👗", category: "art-creative-design", subcategory: "fashion-ai" }
    ],
    "image-to-3d-model": [
      { id: "planner-5d", name: "Planner 5D", description: "AI 2D to 3D model converter", url: "", upvotes: 1567, verified: true, rating: 4.8, icon: "🏠", category: "art-creative-design", subcategory: "image-to-3d-model" },
      { id: "meshy-3d", name: "Meshy", description: "Image to 3D mesh AI", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🌟", category: "art-creative-design", subcategory: "image-to-3d-model" },
      { id: "tripo-ai-3d", name: "Tripo AI", description: "Triple AI 3D model creator", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🔺", category: "art-creative-design", subcategory: "image-to-3d-model" },
      { id: "3d-ai-studio", name: "3D AI Studio", description: "Professional 3D AI platform", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "🎭", category: "art-creative-design", subcategory: "image-to-3d-model" },
      { id: "alpha3d", name: "Alpha3D", description: "Advanced 3D AI converter", url: "", upvotes: 543, verified: false, rating: 4.4, icon: "🚀", category: "art-creative-design", subcategory: "image-to-3d-model" }
    ],
    "storyboard-ai": [
      { id: "boords", name: "Boords", description: "AI storyboard creation platform", url: "", upvotes: 1456, verified: true, rating: 4.8, icon: "📋", category: "art-creative-design", subcategory: "storyboard-ai" },
      { id: "katalist-ai", name: "Katalist AI", description: "AI story visualization tool", url: "", upvotes: 1098, verified: true, rating: 4.7, icon: "📚", category: "art-creative-design", subcategory: "storyboard-ai" },
      { id: "storyboarder-ai", name: "Storyboarder.ai", description: "Professional storyboard AI", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🎬", category: "art-creative-design", subcategory: "storyboard-ai" },
      { id: "storyboardhero", name: "StoryboardHero", description: "Hero storyboard AI creator", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "🦸", category: "art-creative-design", subcategory: "storyboard-ai" },
      { id: "story-boards-ai", name: "story-boards.ai", description: "AI storyboard generator", url: "", upvotes: 543, verified: false, rating: 4.4, icon: "📖", category: "art-creative-design", subcategory: "storyboard-ai" }
    ],
    "text-to-3d": [
      { id: "meshy-text", name: "Meshy", description: "Text to 3D model AI", url: "", upvotes: 1567, verified: true, rating: 4.8, icon: "🌟", category: "art-creative-design", subcategory: "text-to-3d" },
      { id: "tripo-ai-text", name: "Tripo AI", description: "Text to 3D generation", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🔺", category: "art-creative-design", subcategory: "text-to-3d" },
      { id: "hyper3d-text", name: "Hyper3D", description: "Hyper 3D text generator", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🚀", category: "art-creative-design", subcategory: "text-to-3d" },
      { id: "3d-ai-studio-text", name: "3D AI Studio", description: "Text to 3D AI platform", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "🎭", category: "art-creative-design", subcategory: "text-to-3d" },
      { id: "alpha3d-text", name: "Alpha3D", description: "Advanced text to 3D AI", url: "", upvotes: 543, verified: false, rating: 4.4, icon: "🚀", category: "art-creative-design", subcategory: "text-to-3d" }
    ]
  },
  "social-media": {
    "ai-bio-generator": [
      { id: "styldod", name: "Styldod", description: "AI bio generator for social media", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "✨", category: "social-media", subcategory: "ai-bio-generator" },
      { id: "biography-studio-ai", name: "Biography Studio AI", description: "Professional AI biography creator", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "📝", category: "social-media", subcategory: "ai-bio-generator" },
      { id: "lovegenius", name: "LoveGenius", description: "AI dating profile bio generator", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "💕", category: "social-media", subcategory: "ai-bio-generator" },
      { id: "ai-social-bio", name: "AI Social Bio", description: "Smart social media bio creator", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "👤", category: "social-media", subcategory: "ai-bio-generator" },
      { id: "gpt-twitter-bot", name: "GPT Twitter Bot", description: "AI Twitter bio automation", url: "", upvotes: 321, verified: false, rating: 4.2, icon: "🤖", category: "social-media", subcategory: "ai-bio-generator" }
    ],
    "ai-facebook": [
      { id: "ginix", name: "GINIX", description: "AI Facebook marketing tool", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "👥", category: "social-media", subcategory: "ai-facebook" },
      { id: "friendflow", name: "FriendFlow", description: "AI Facebook friend management", url: "", upvotes: 567, verified: true, rating: 4.4, icon: "🤝", category: "social-media", subcategory: "ai-facebook" },
      { id: "facebook-prospecting-ai", name: "Facebook Prospecting AI", description: "AI-powered Facebook lead generation", url: "", upvotes: 654, verified: true, rating: 4.6, icon: "🎯", category: "social-media", subcategory: "ai-facebook" },
      { id: "gpt-for-facebook", name: "GPT-For-Facebook", description: "GPT integration for Facebook", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "🤖", category: "social-media", subcategory: "ai-facebook" },
      { id: "facebook-prospecting-ai-2", name: "Facebook Prospecting AI", description: "Advanced Facebook prospecting tool", url: "", upvotes: 543, verified: false, rating: 4.4, icon: "📊", category: "social-media", subcategory: "ai-facebook" }
    ],
    "ai-hashtag": [
      { id: "planable-hashtag", name: "Planable", description: "AI hashtag generator and scheduler", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "📅", category: "social-media", subcategory: "ai-hashtag" },
      { id: "iq-hashtags", name: "IQ Hashtags", description: "Smart hashtag analytics and suggestions", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "🧠", category: "social-media", subcategory: "ai-hashtag" },
      { id: "reachifyme", name: "ReachifyMe", description: "AI hashtag reach optimizer", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "📈", category: "social-media", subcategory: "ai-hashtag" },
      { id: "hashtag-expert", name: "Hashtag Expert", description: "Professional hashtag research tool", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "#️⃣", category: "social-media", subcategory: "ai-hashtag" },
      { id: "free-ai-wedding-hashtag", name: "Free AI Wedding Hashtag Generator", description: "AI wedding hashtag creator", url: "", upvotes: 321, verified: true, rating: 4.2, icon: "💒", category: "social-media", subcategory: "ai-hashtag" }
    ],
    "ai-influencer": [
      { id: "makeinfluencer-ai", name: "MakeInfluencer AI", description: "AI influencer creation platform", url: "", upvotes: 987, verified: true, rating: 4.7, icon: "⭐", category: "social-media", subcategory: "ai-influencer" },
      { id: "glambase", name: "Glambase", description: "AI virtual influencer platform", url: "", upvotes: 765, verified: true, rating: 4.6, icon: "✨", category: "social-media", subcategory: "ai-influencer" },
      { id: "celebmaker-ai", name: "CelebMakerAI", description: "AI celebrity and influencer creator", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "🌟", category: "social-media", subcategory: "ai-influencer" },
      { id: "influencerfarm", name: "InfluencerFarm", description: "AI influencer management system", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "🚜", category: "social-media", subcategory: "ai-influencer" },
      { id: "infludata", name: "influData", description: "AI influencer analytics and insights", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "📊", category: "social-media", subcategory: "ai-influencer" }
    ],
    "ai-instagram": [
      { id: "upgrow", name: "UpGrow", description: "AI Instagram growth service", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "📈", category: "social-media", subcategory: "ai-instagram" },
      { id: "grum", name: "Grum", description: "AI Instagram automation tool", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🤖", category: "social-media", subcategory: "ai-instagram" },
      { id: "gainsty", name: "Gainsty", description: "AI Instagram follower growth", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "📊", category: "social-media", subcategory: "ai-instagram" },
      { id: "linktodm", name: "LinktoDM", description: "AI Instagram DM automation", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "💬", category: "social-media", subcategory: "ai-instagram" },
      { id: "inro", name: "Inrō", description: "AI Instagram engagement tool", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "🎯", category: "social-media", subcategory: "ai-instagram" }
    ],
    "ai-instagram-caption-generator": [
      { id: "cool-caption-ideas", name: "Cool Caption Ideas", description: "AI Instagram caption generator", url: "", upvotes: 789, verified: true, rating: 4.6, icon: "💭", category: "social-media", subcategory: "ai-instagram-caption-generator" },
      { id: "captionit", name: "captionit", description: "Smart caption generation tool", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "✍️", category: "social-media", subcategory: "ai-instagram-caption-generator" },
      { id: "instacaptain", name: "InstaCaptain", description: "AI Instagram caption creator", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "👨‍✈️", category: "social-media", subcategory: "ai-instagram-caption-generator" },
      { id: "captionmaster", name: "CaptionMaster", description: "Master AI caption generator", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "🎯", category: "social-media", subcategory: "ai-instagram-caption-generator" },
      { id: "copywritergpt", name: "CopywriterGPT", description: "GPT-powered copywriting tool", url: "", upvotes: 567, verified: true, rating: 4.4, icon: "🤖", category: "social-media", subcategory: "ai-instagram-caption-generator" }
    ],
    "ai-linkedin-headshot": [
      { id: "photoai-me", name: "PhotoAI.me", description: "AI LinkedIn headshot generator", url: "", upvotes: 1098, verified: true, rating: 4.7, icon: "📸", category: "social-media", subcategory: "ai-linkedin-headshot" },
      { id: "betterpic", name: "BetterPic", description: "Professional AI headshot creator", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🎯", category: "social-media", subcategory: "ai-linkedin-headshot" },
      { id: "headshotpro", name: "HeadshotPro", description: "Pro AI headshot generator", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "👔", category: "social-media", subcategory: "ai-linkedin-headshot" },
      { id: "instaheadshots", name: "InstaHeadshots", description: "Instant AI headshot creation", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "⚡", category: "social-media", subcategory: "ai-linkedin-headshot" },
      { id: "ai-suitup", name: "AI SuitUp", description: "AI professional photo generator", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "👨‍💼", category: "social-media", subcategory: "ai-linkedin-headshot" }
    ],
    "ai-linkedin-photo-generator": [
      { id: "vidnoz-ai-linkedin", name: "Vidnoz AI", description: "AI LinkedIn photo generator", url: "", upvotes: 987, verified: true, rating: 4.6, icon: "🎬", category: "social-media", subcategory: "ai-linkedin-photo-generator" },
      { id: "picstudio-ai", name: "PicStudio.AI", description: "AI photo studio for LinkedIn", url: "", upvotes: 765, verified: true, rating: 4.5, icon: "📷", category: "social-media", subcategory: "ai-linkedin-photo-generator" },
      { id: "windybot", name: "WindyBot", description: "AI LinkedIn photo creation bot", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🤖", category: "social-media", subcategory: "ai-linkedin-photo-generator" },
      { id: "suitup", name: "SuitUp", description: "AI professional photo creator", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "👔", category: "social-media", subcategory: "ai-linkedin-photo-generator" },
      { id: "quick-headshots", name: "Quick Headshots", description: "Fast AI headshot generation", url: "", upvotes: 432, verified: false, rating: 4.2, icon: "⚡", category: "social-media", subcategory: "ai-linkedin-photo-generator" }
    ],
    "ai-meme-generator": [
      { id: "kapwing-meme", name: "Kapwing", description: "AI meme generator and editor", url: "", upvotes: 1456, verified: true, rating: 4.8, icon: "😂", category: "social-media", subcategory: "ai-meme-generator" },
      { id: "supermeme-ai", name: "Supermeme.ai", description: "AI-powered meme creation", url: "", upvotes: 1098, verified: true, rating: 4.7, icon: "🚀", category: "social-media", subcategory: "ai-meme-generator" },
      { id: "memegen-ai", name: "MemeGen AI", description: "Advanced AI meme generator", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🎯", category: "social-media", subcategory: "ai-meme-generator" },
      { id: "sludge-ai", name: "Sludge AI", description: "AI meme and content creator", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "🎨", category: "social-media", subcategory: "ai-meme-generator" },
      { id: "misgif", name: "misgif", description: "AI GIF and meme generator", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "🎬", category: "social-media", subcategory: "ai-meme-generator" }
    ],
    "ai-model-instagram": [
      { id: "ai-model-agency", name: "AI Model Agency", description: "AI Instagram model creator", url: "", upvotes: 987, verified: true, rating: 4.6, icon: "👤", category: "social-media", subcategory: "ai-model-instagram" },
      { id: "genyou", name: "GenYOU", description: "AI model generation platform", url: "", upvotes: 765, verified: true, rating: 4.5, icon: "✨", category: "social-media", subcategory: "ai-model-instagram" },
      { id: "the-influencer-ai", name: "The Influencer AI", description: "AI influencer model creator", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "⭐", category: "social-media", subcategory: "ai-model-instagram" },
      { id: "genfluencer-ai", name: "GenFluencer.ai", description: "AI influencer generation tool", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "🌟", category: "social-media", subcategory: "ai-model-instagram" }
    ],
    "ai-only-fans": [
      { id: "supercreator", name: "Supercreator", description: "AI content creator for platforms", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "🎨", category: "social-media", subcategory: "ai-only-fans" },
      { id: "botly", name: "Botly", description: "AI chatbot for content creators", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🤖", category: "social-media", subcategory: "ai-only-fans" },
      { id: "onley-ai", name: "Onley AI", description: "AI assistant for content creators", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "💎", category: "social-media", subcategory: "ai-only-fans" },
      { id: "ofhelper-pro", name: "Ofhelper Pro", description: "Professional AI content helper", url: "", upvotes: 432, verified: false, rating: 4.2, icon: "🚀", category: "social-media", subcategory: "ai-only-fans" },
      { id: "chathelper", name: "ChatHelper", description: "AI chat assistance tool", url: "", upvotes: 321, verified: true, rating: 4.1, icon: "💬", category: "social-media", subcategory: "ai-only-fans" }
    ],
    "ai-pickup-lines-generator": [
      { id: "ai-rizz-generator", name: "AI Rizz Generator", description: "AI pickup line generator", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "💕", category: "social-media", subcategory: "ai-pickup-lines-generator" },
      { id: "wingmanx", name: "WingmanX", description: "AI dating conversation helper", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🕊️", category: "social-media", subcategory: "ai-pickup-lines-generator" },
      { id: "tinder-ice-breakers-ai", name: "Tinder Ice Breakers AI", description: "AI ice breaker generator", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "🧊", category: "social-media", subcategory: "ai-pickup-lines-generator" },
      { id: "pickmyline-online", name: "Pickmyline.online", description: "Online pickup line generator", url: "", upvotes: 432, verified: true, rating: 4.2, icon: "🎯", category: "social-media", subcategory: "ai-pickup-lines-generator" },
      { id: "tiramisu", name: "Tiramisu", description: "Sweet AI pickup line creator", url: "", upvotes: 321, verified: false, rating: 4.1, icon: "🍰", category: "social-media", subcategory: "ai-pickup-lines-generator" }
    ],
    "ai-rizz-generator": [
      { id: "rizz-ai", name: "RIZZ AI", description: "Advanced AI rizz generator", url: "", upvotes: 987, verified: true, rating: 4.6, icon: "🔥", category: "social-media", subcategory: "ai-rizz-generator" },
      { id: "resume-rizzler", name: "Resume Rizzler", description: "AI charisma enhancement tool", url: "", upvotes: 765, verified: true, rating: 4.5, icon: "📄", category: "social-media", subcategory: "ai-rizz-generator" },
      { id: "winggg", name: "Winggg", description: "AI wing person for dating", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🕊️", category: "social-media", subcategory: "ai-rizz-generator" },
      { id: "rizz-exclamation", name: "Rizz!", description: "Instant AI rizz generator", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "⚡", category: "social-media", subcategory: "ai-rizz-generator" },
      { id: "smoothrizz-com", name: "Smoothrizz.com", description: "Smooth AI conversation starter", url: "", upvotes: 432, verified: true, rating: 4.2, icon: "😎", category: "social-media", subcategory: "ai-rizz-generator" }
    ],
    "ai-social-link": [
      { id: "super-prompts", name: "Super Prompts", description: "AI prompt and link generator", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "🚀", category: "social-media", subcategory: "ai-social-link" },
      { id: "linkable", name: "Linkable", description: "AI social link optimization", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🔗", category: "social-media", subcategory: "ai-social-link" },
      { id: "arco", name: "Arco", description: "AI link management platform", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "🌈", category: "social-media", subcategory: "ai-social-link" },
      { id: "blynkkr", name: "Blynkkr", description: "AI link shortening and analytics", url: "", upvotes: 432, verified: true, rating: 4.2, icon: "⚡", category: "social-media", subcategory: "ai-social-link" },
      { id: "gleans", name: "Gleans", description: "AI social link insights", url: "", upvotes: 321, verified: false, rating: 4.1, icon: "👁️", category: "social-media", subcategory: "ai-social-link" }
    ],
    "ai-social-media": [
      { id: "simplified-social", name: "Simplified", description: "AI social media management platform", url: "", upvotes: 1456, verified: true, rating: 4.8, icon: "📱", category: "social-media", subcategory: "ai-social-media" },
      { id: "quso-ai", name: "quso.ai", description: "AI social media automation", url: "", upvotes: 1098, verified: true, rating: 4.7, icon: "🤖", category: "social-media", subcategory: "ai-social-media" },
      { id: "contentstudio", name: "ContentStudio", description: "AI social media content creation", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🎨", category: "social-media", subcategory: "ai-social-media" },
      { id: "planable-social", name: "Planable", description: "AI social media planning tool", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "📅", category: "social-media", subcategory: "ai-social-media" },
      { id: "taplio", name: "Taplio", description: "AI LinkedIn content automation", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "💼", category: "social-media", subcategory: "ai-social-media" }
    ],
    "ai-social-media-post-generator": [
      { id: "flick-post", name: "Flick", description: "AI social media post generator", url: "", upvotes: 987, verified: true, rating: 4.6, icon: "📝", category: "social-media", subcategory: "ai-social-media-post-generator" },
      { id: "contentstudio-post", name: "ContentStudio", description: "AI post creation platform", url: "", upvotes: 765, verified: true, rating: 4.5, icon: "🎨", category: "social-media", subcategory: "ai-social-media-post-generator" },
      { id: "brandcrowd", name: "BrandCrowd", description: "AI brand post generator", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "👑", category: "social-media", subcategory: "ai-social-media-post-generator" },
      { id: "circleboom", name: "Circleboom", description: "AI social media post creator", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "💥", category: "social-media", subcategory: "ai-social-media-post-generator" },
      { id: "predis-ai", name: "Predis.ai", description: "AI predictive post generator", url: "", upvotes: 432, verified: true, rating: 4.2, icon: "🔮", category: "social-media", subcategory: "ai-social-media-post-generator" }
    ],
    "ai-tiktok": [
      { id: "crayo-ai", name: "Crayo AI", description: "AI TikTok content creator", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🎬", category: "social-media", subcategory: "ai-tiktok" },
      { id: "reelfarm", name: "ReelFarm", description: "AI TikTok reel generator", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🚜", category: "social-media", subcategory: "ai-tiktok" },
      { id: "gloda", name: "Gloda", description: "AI TikTok growth platform", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "📈", category: "social-media", subcategory: "ai-tiktok" },
      { id: "topyappers", name: "topYappers", description: "AI TikTok content optimization", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "🗣️", category: "social-media", subcategory: "ai-tiktok" },
      { id: "influensly", name: "Influensly", description: "AI TikTok influencer tools", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "⭐", category: "social-media", subcategory: "ai-tiktok" }
    ],
    "ai-tweet-generator": [
      { id: "tweet-hunter", name: "Tweet Hunter", description: "AI tweet generation and analytics", url: "", upvotes: 1456, verified: true, rating: 4.8, icon: "🏹", category: "social-media", subcategory: "ai-tweet-generator" },
      { id: "tweetstorm-ai", name: "TweetStorm.ai", description: "AI Twitter thread generator", url: "", upvotes: 1098, verified: true, rating: 4.7, icon: "⛈️", category: "social-media", subcategory: "ai-tweet-generator" },
      { id: "ai-tweet-generator-roast", name: "AI Tweet Generator | ROAST TOOLS", description: "AI tweet roasting tool", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🔥", category: "social-media", subcategory: "ai-tweet-generator" },
      { id: "tweet-ai", name: "Tweet AI", description: "Smart AI tweet creator", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "🤖", category: "social-media", subcategory: "ai-tweet-generator" },
      { id: "snowball", name: "Snowball", description: "AI Twitter growth tool", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "❄️", category: "social-media", subcategory: "ai-tweet-generator" }
    ],
    "ai-twitter": [
      { id: "tweet-hunter-twitter", name: "Tweet Hunter", description: "AI Twitter growth platform", url: "", upvotes: 1567, verified: true, rating: 4.8, icon: "🏹", category: "social-media", subcategory: "ai-twitter" },
      { id: "owlead", name: "Owlead", description: "AI Twitter follower growth", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🦉", category: "social-media", subcategory: "ai-twitter" },
      { id: "postwise", name: "Postwise", description: "AI Twitter content optimization", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🧠", category: "social-media", subcategory: "ai-twitter" },
      { id: "drippi-ai", name: "Drippi.ai", description: "AI Twitter DM automation", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "💧", category: "social-media", subcategory: "ai-twitter" },
      { id: "xreacher", name: "Xreacher", description: "AI Twitter reach amplifier", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "📡", category: "social-media", subcategory: "ai-twitter" }
    ],
    "ai-username-generator": [
      { id: "usernamegenerator-io", name: "UsernameGenerator.IO", description: "AI username generation tool", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "👤", category: "social-media", subcategory: "ai-username-generator" },
      { id: "atyou", name: "AtYou", description: "AI personalized username creator", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "@", category: "social-media", subcategory: "ai-username-generator" },
      { id: "plano", name: "Plano", description: "AI username planning tool", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "📋", category: "social-media", subcategory: "ai-username-generator" },
      { id: "voc-ai", name: "VOC AI", description: "AI voice-optimized usernames", url: "", upvotes: 432, verified: true, rating: 4.2, icon: "🗣️", category: "social-media", subcategory: "ai-username-generator" },
      { id: "shortimize", name: "Shortimize", description: "AI username optimization", url: "", upvotes: 321, verified: false, rating: 4.1, icon: "⚡", category: "social-media", subcategory: "ai-username-generator" }
    ],
    "ai-youtube": [
      { id: "vidiq", name: "VidIQ", description: "AI YouTube growth and analytics", url: "", upvotes: 2345, verified: true, rating: 4.9, icon: "📊", category: "social-media", subcategory: "ai-youtube" },
      { id: "tubebuddy", name: "TubeBuddy", description: "AI YouTube optimization tool", url: "", upvotes: 1890, verified: true, rating: 4.8, icon: "🛠️", category: "social-media", subcategory: "ai-youtube" },
      { id: "nexlev", name: "NexLev", description: "AI YouTube level-up platform", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🚀", category: "social-media", subcategory: "ai-youtube" },
      { id: "futurepedia", name: "Futurepedia", description: "AI YouTube knowledge base", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "📚", category: "social-media", subcategory: "ai-youtube" },
      { id: "subscribr", name: "Subscribr", description: "AI YouTube subscriber growth", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "👥", category: "social-media", subcategory: "ai-youtube" }
    ],
    "ai-youtube-summary": [
      { id: "lilys-ai", name: "Lilys AI", description: "AI YouTube video summarizer", url: "", upvotes: 987, verified: true, rating: 4.6, icon: "🌸", category: "social-media", subcategory: "ai-youtube-summary" },
      { id: "noiz", name: "Noiz", description: "AI video noise and summary tool", url: "", upvotes: 765, verified: true, rating: 4.5, icon: "🔇", category: "social-media", subcategory: "ai-youtube-summary" },
      { id: "glarity", name: "Glarity", description: "AI clarity and summary tool", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "✨", category: "social-media", subcategory: "ai-youtube-summary" },
      { id: "kome-ai", name: "Kome AI", description: "AI content summarization", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "📝", category: "social-media", subcategory: "ai-youtube-summary" },
      { id: "eightify", name: "Eightify", description: "AI 8-minute video summaries", url: "", upvotes: 432, verified: true, rating: 4.2, icon: "8️⃣", category: "social-media", subcategory: "ai-youtube-summary" }
    ],
    "ai-youtube-thumbnail-generator": [
      { id: "pikzels", name: "Pikzels", description: "AI YouTube thumbnail creator", url: "", upvotes: 1098, verified: true, rating: 4.7, icon: "🖼️", category: "social-media", subcategory: "ai-youtube-thumbnail-generator" },
      { id: "sivi-ai", name: "Sivi AI", description: "AI visual content generator", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "🎨", category: "social-media", subcategory: "ai-youtube-thumbnail-generator" },
      { id: "thumblytics", name: "Thumblytics", description: "AI thumbnail analytics and creation", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "📊", category: "social-media", subcategory: "ai-youtube-thumbnail-generator" },
      { id: "crazyface-ai", name: "CrazyFaceAI", description: "AI face-focused thumbnails", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "🤪", category: "social-media", subcategory: "ai-youtube-thumbnail-generator" },
      { id: "thumbnailcreator-com", name: "ThumbnailCreator.com", description: "AI thumbnail creation platform", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "🎯", category: "social-media", subcategory: "ai-youtube-thumbnail-generator" }
    ],
    "bio-link": [
      { id: "beacons", name: "Beacons", description: "AI-powered bio link platform", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🚨", category: "social-media", subcategory: "bio-link" },
      { id: "glitch", name: "Glitch", description: "Creative bio link builder", url: "", upvotes: 876, verified: true, rating: 4.6, icon: "⚡", category: "social-media", subcategory: "bio-link" },
      { id: "onepage", name: "Onepage", description: "Simple one-page bio links", url: "", upvotes: 654, verified: true, rating: 4.5, icon: "📄", category: "social-media", subcategory: "bio-link" },
      { id: "pillar", name: "Pillar", description: "Creator bio link platform", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "🏛️", category: "social-media", subcategory: "bio-link" },
      { id: "postfity", name: "Postfity", description: "Social media bio link tool", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "📱", category: "social-media", subcategory: "bio-link" }
    ],
    "youtube-tags-generator": [
      { id: "taja-ai", name: "Taja AI", description: "AI YouTube tags optimization", url: "", upvotes: 987, verified: true, rating: 4.6, icon: "🎯", category: "social-media", subcategory: "youtube-tags-generator" },
      { id: "tagifynow-com", name: "TagifyNow.com", description: "AI tag generation platform", url: "", upvotes: 765, verified: true, rating: 4.5, icon: "#️⃣", category: "social-media", subcategory: "youtube-tags-generator" },
      { id: "tagistaan", name: "Tagistaan", description: "AI tag discovery tool", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🔍", category: "social-media", subcategory: "youtube-tags-generator" },
      { id: "free-ai-tags-generator", name: "Free AI Tags Generator for YouTube", description: "Free YouTube tags AI tool", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "🆓", category: "social-media", subcategory: "youtube-tags-generator" },
      { id: "vidchapter", name: "VidChapter", description: "AI video tags and chapters", url: "", upvotes: 432, verified: false, rating: 4.2, icon: "📚", category: "social-media", subcategory: "youtube-tags-generator" }
    ]
  },
  "ai-detection-anti-detection": {
    "ai-art-detector": [
      { id: "guessai", name: "GuessAI", description: "AI-powered art detection and classification", url: "", upvotes: 890, verified: true, rating: 4.6, icon: "🎨", category: "ai-detection-anti-detection", subcategory: "ai-art-detector" },
      { id: "secur3d", name: "Secur3D", description: "3D AI art detection and security", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🔐", category: "ai-detection-anti-detection", subcategory: "ai-art-detector" },
      { id: "ai-or-human-art-game", name: "AI or Human Art Game", description: "Interactive game to test AI art detection skills", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "🎮", category: "ai-detection-anti-detection", subcategory: "ai-art-detector" },
      { id: "whomadethisartwork", name: "Whomadethisartwork.com", description: "Platform to identify AI-generated artwork", url: "", upvotes: 321, verified: true, rating: 4.2, icon: "🔍", category: "ai-detection-anti-detection", subcategory: "ai-art-detector" },
      { id: "gan-or-real-person-detector", name: "GAN or Real Person Detector", description: "Detects GAN-generated vs real person images", url: "", upvotes: 234, verified: true, rating: 4.1, icon: "👤", category: "ai-detection-anti-detection", subcategory: "ai-art-detector" }
    ],
    "ai-bypasser": [
      { id: "stealthwriter", name: "StealthWriter", description: "AI content bypassing and humanization", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "👻", category: "ai-detection-anti-detection", subcategory: "ai-bypasser" },
      { id: "bypassgpt", name: "BypassGPT", description: "Advanced AI detection bypassing tool", url: "", upvotes: 1098, verified: true, rating: 4.6, icon: "🔓", category: "ai-detection-anti-detection", subcategory: "ai-bypasser" },
      { id: "phrasly-ai", name: "Phrasly.AI", description: "AI content rewriting for bypass", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "✍️", category: "ai-detection-anti-detection", subcategory: "ai-bypasser" },
      { id: "ai-humanize", name: "AI Humanize", description: "Humanize AI-generated content", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🤖", category: "ai-detection-anti-detection", subcategory: "ai-bypasser" },
      { id: "gptinf", name: "GPTinf", description: "Advanced AI text humanization", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "🔄", category: "ai-detection-anti-detection", subcategory: "ai-bypasser" }
    ],
    "ai-checker": [
      { id: "gptzero", name: "GPTZero", description: "Advanced AI text detection platform", url: "", upvotes: 2345, verified: true, rating: 4.8, icon: "🔍", category: "ai-detection-anti-detection", subcategory: "ai-checker" },
      { id: "zerogpt", name: "ZeroGPT", description: "Comprehensive AI content detector", url: "", upvotes: 1987, verified: true, rating: 4.7, icon: "0️⃣", category: "ai-detection-anti-detection", subcategory: "ai-checker" },
      { id: "undetectable-ai", name: "Undetectable AI", description: "AI detection and humanization tool", url: "", upvotes: 1567, verified: true, rating: 4.6, icon: "🕵️", category: "ai-detection-anti-detection", subcategory: "ai-checker" },
      { id: "pronounce-ai", name: "Pronounce AI", description: "AI voice and text detection", url: "", upvotes: 890, verified: true, rating: 4.5, icon: "🗣️", category: "ai-detection-anti-detection", subcategory: "ai-checker" },
      { id: "zerogpt-plus", name: "ZeroGPT Plus", description: "Enhanced AI detection with premium features", url: "", upvotes: 678, verified: true, rating: 4.4, icon: "➕", category: "ai-detection-anti-detection", subcategory: "ai-checker" }
    ],
    "ai-checker-essay": [
      { id: "essay-grader-ai", name: "Essay Grader AI", description: "AI-powered essay grading and detection", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "📝", category: "ai-detection-anti-detection", subcategory: "ai-checker-essay" },
      { id: "myperfectwords", name: "MyPerfectWords.com", description: "Essay analysis and AI detection", url: "", upvotes: 890, verified: true, rating: 4.6, icon: "✨", category: "ai-detection-anti-detection", subcategory: "ai-checker-essay" },
      { id: "cograder", name: "CoGrader", description: "Collaborative essay grading with AI detection", url: "", upvotes: 678, verified: true, rating: 4.5, icon: "👥", category: "ai-detection-anti-detection", subcategory: "ai-checker-essay" },
      { id: "markme", name: "MarkMe", description: "Automated essay marking and AI detection", url: "", upvotes: 543, verified: true, rating: 4.4, icon: "✅", category: "ai-detection-anti-detection", subcategory: "ai-checker-essay" },
      { id: "essay-grader-ai-2", name: "Essay Grader AI", description: "Advanced essay evaluation and AI detection", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "📊", category: "ai-detection-anti-detection", subcategory: "ai-checker-essay" }
    ],
    "ai-content-detector": [
      { id: "zerogpt-content", name: "ZeroGPT", description: "Comprehensive AI content detection", url: "", upvotes: 2134, verified: true, rating: 4.8, icon: "🔍", category: "ai-detection-anti-detection", subcategory: "ai-content-detector" },
      { id: "uhmegle", name: "Uhmegle", description: "AI content detection and analysis", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "🤔", category: "ai-detection-anti-detection", subcategory: "ai-content-detector" },
      { id: "originality-ai", name: "Originality.ai", description: "Advanced plagiarism and AI detection", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🎯", category: "ai-detection-anti-detection", subcategory: "ai-content-detector" },
      { id: "copyleaks", name: "Copyleaks", description: "AI content and plagiarism detection", url: "", upvotes: 987, verified: true, rating: 4.5, icon: "📋", category: "ai-detection-anti-detection", subcategory: "ai-content-detector" },
      { id: "bark", name: "Bark", description: "Real-time AI content detection", url: "", upvotes: 765, verified: true, rating: 4.4, icon: "🐕", category: "ai-detection-anti-detection", subcategory: "ai-content-detector" }
    ],
    "ai-detector": [
      { id: "gptzero-detector", name: "GPTZero", description: "Leading AI text detection platform", url: "", upvotes: 2456, verified: true, rating: 4.9, icon: "🔍", category: "ai-detection-anti-detection", subcategory: "ai-detector" },
      { id: "undetectable-ai-detector", name: "Undetectable AI", description: "Comprehensive AI detection solution", url: "", upvotes: 1789, verified: true, rating: 4.7, icon: "🕵️", category: "ai-detection-anti-detection", subcategory: "ai-detector" },
      { id: "hcaptcha", name: "hCaptcha", description: "Bot and AI detection security service", url: "", upvotes: 1456, verified: true, rating: 4.6, icon: "🛡️", category: "ai-detection-anti-detection", subcategory: "ai-detector" },
      { id: "zerogpt-detector", name: "ZeroGPT", description: "Accurate AI content detection", url: "", upvotes: 1234, verified: true, rating: 4.5, icon: "0️⃣", category: "ai-detection-anti-detection", subcategory: "ai-detector" },
      { id: "onfido", name: "Onfido", description: "Identity verification and AI detection", url: "", upvotes: 987, verified: true, rating: 4.4, icon: "🆔", category: "ai-detection-anti-detection", subcategory: "ai-detector" }
    ],
    "ai-image-detector": [
      { id: "ai-or-not", name: "AI or Not", description: "Image authenticity detection tool", url: "", upvotes: 1345, verified: true, rating: 4.7, icon: "🖼️", category: "ai-detection-anti-detection", subcategory: "ai-image-detector" },
      { id: "realorai", name: "RealorAI", description: "Real vs AI image detection", url: "", upvotes: 1098, verified: true, rating: 4.6, icon: "👁️", category: "ai-detection-anti-detection", subcategory: "ai-image-detector" },
      { id: "iris-roads", name: "iris roads", description: "Advanced image AI detection", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "🛣️", category: "ai-detection-anti-detection", subcategory: "ai-image-detector" },
      { id: "ai-badge", name: "AI Badge", description: "AI-generated image identification", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🏷️", category: "ai-detection-anti-detection", subcategory: "ai-image-detector" },
      { id: "t-rex-label", name: "T-Rex Label", description: "Image classification and AI detection", url: "", upvotes: 543, verified: false, rating: 4.3, icon: "🦕", category: "ai-detection-anti-detection", subcategory: "ai-image-detector" }
    ],
    "ai-plagiarism-checker": [
      { id: "scribbr", name: "Scribbr", description: "Academic plagiarism and AI detection", url: "", upvotes: 1567, verified: true, rating: 4.8, icon: "📚", category: "ai-detection-anti-detection", subcategory: "ai-plagiarism-checker" },
      { id: "originality-ai-plagiarism", name: "Originality.ai", description: "AI and plagiarism detection platform", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🎯", category: "ai-detection-anti-detection", subcategory: "ai-plagiarism-checker" },
      { id: "plagiarismcheck", name: "PlagiarismCheck.org", description: "Comprehensive plagiarism detection", url: "", upvotes: 987, verified: true, rating: 4.6, icon: "✅", category: "ai-detection-anti-detection", subcategory: "ai-plagiarism-checker" },
      { id: "quetext", name: "Quetext", description: "Free plagiarism and AI checker", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "❓", category: "ai-detection-anti-detection", subcategory: "ai-plagiarism-checker" },
      { id: "noplagio", name: "NoPlagio", description: "Multilingual plagiarism detection", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🚫", category: "ai-detection-anti-detection", subcategory: "ai-plagiarism-checker" }
    ],
    "bypass-ai": [
      { id: "ai-humanize-bypass", name: "AI Humanize", description: "Advanced AI content humanization", url: "", upvotes: 1456, verified: true, rating: 4.7, icon: "🤖", category: "ai-detection-anti-detection", subcategory: "bypass-ai" },
      { id: "aiseo", name: "AISEO", description: "AI content optimization and bypassing", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🔧", category: "ai-detection-anti-detection", subcategory: "bypass-ai" },
      { id: "bypassgpt-bypass", name: "BypassGPT", description: "AI detection bypassing service", url: "", upvotes: 1098, verified: true, rating: 4.5, icon: "🔓", category: "ai-detection-anti-detection", subcategory: "bypass-ai" },
      { id: "phrasly-ai-bypass", name: "Phrasly.AI", description: "AI content rewriting for detection bypass", url: "", upvotes: 876, verified: true, rating: 4.4, icon: "✍️", category: "ai-detection-anti-detection", subcategory: "bypass-ai" },
      { id: "walter-writes-ai", name: "Walter Writes AI", description: "Human-like AI content generation", url: "", upvotes: 654, verified: true, rating: 4.3, icon: "✒️", category: "ai-detection-anti-detection", subcategory: "bypass-ai" }
    ],
    "humanizer-ai": [
      { id: "stealthwriter-humanizer", name: "StealthWriter", description: "AI content humanization tool", url: "", upvotes: 1567, verified: true, rating: 4.8, icon: "👻", category: "ai-detection-anti-detection", subcategory: "humanizer-ai" },
      { id: "ai-humanize-humanizer", name: "AI Humanize", description: "Convert AI text to human-like content", url: "", upvotes: 1345, verified: true, rating: 4.7, icon: "🤖", category: "ai-detection-anti-detection", subcategory: "humanizer-ai" },
      { id: "humbot", name: "Humbot", description: "AI text humanization service", url: "", upvotes: 1098, verified: true, rating: 4.6, icon: "🤖", category: "ai-detection-anti-detection", subcategory: "humanizer-ai" },
      { id: "writehuman", name: "WriteHuman", description: "Human-like AI content rewriting", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "✍️", category: "ai-detection-anti-detection", subcategory: "humanizer-ai" },
      { id: "humanize-ai", name: "Humanize AI", description: "Advanced AI content humanization", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "👥", category: "ai-detection-anti-detection", subcategory: "humanizer-ai" }
    ],
    "undetectable-ai": [
      { id: "writehuman-undetectable", name: "WriteHuman", description: "Undetectable AI content creation", url: "", upvotes: 1678, verified: true, rating: 4.8, icon: "✍️", category: "ai-detection-anti-detection", subcategory: "undetectable-ai" },
      { id: "gptinf-undetectable", name: "GPTinf", description: "Undetectable AI text generation", url: "", upvotes: 1456, verified: true, rating: 4.7, icon: "🔄", category: "ai-detection-anti-detection", subcategory: "undetectable-ai" },
      { id: "rewritify-ai", name: "Rewritify AI", description: "AI content rewriting for undetectability", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🔄", category: "ai-detection-anti-detection", subcategory: "undetectable-ai" },
      { id: "humanizer-org", name: "Humanizer.org", description: "Professional AI content humanization", url: "", upvotes: 987, verified: true, rating: 4.5, icon: "🌐", category: "ai-detection-anti-detection", subcategory: "undetectable-ai" },
      { id: "ai-undetect", name: "AI Undetect", description: "Advanced undetectable AI content", url: "", upvotes: 765, verified: true, rating: 4.4, icon: "🔍", category: "ai-detection-anti-detection", subcategory: "undetectable-ai" }
    ]
  },
  "coding-development": {
    "ai-api": [
      { id: "openrouter", name: "OpenRouter", description: "Universal API for AI models", url: "", upvotes: 1567, verified: true, rating: 4.8, icon: "🔌", category: "coding-development", subcategory: "ai-api" },
      { id: "replicate", name: "Replicate", description: "Run AI models with a cloud API", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🔄", category: "coding-development", subcategory: "ai-api" },
      { id: "openai", name: "OpenAI", description: "Advanced AI models and API platform", url: "", upvotes: 2341, verified: true, rating: 4.9, icon: "🤖", category: "coding-development", subcategory: "ai-api" },
      { id: "groq", name: "Groq", description: "Fast AI inference cloud platform", url: "", upvotes: 987, verified: true, rating: 4.6, icon: "⚡", category: "coding-development", subcategory: "ai-api" },
      { id: "imagekit", name: "ImageKit.io", description: "Real-time image and video optimization API", url: "", upvotes: 765, verified: true, rating: 4.5, icon: "🖼️", category: "coding-development", subcategory: "ai-api" }
    ],
    "ai-app-builder": [
      { id: "salesforce-platform", name: "Salesforce Platform", description: "Low-code app development platform", url: "", upvotes: 1890, verified: true, rating: 4.7, icon: "☁️", category: "coding-development", subcategory: "ai-app-builder" },
      { id: "replit", name: "Replit", description: "Collaborative online IDE and app builder", url: "", upvotes: 1456, verified: true, rating: 4.6, icon: "💻", category: "coding-development", subcategory: "ai-app-builder" },
      { id: "vondy", name: "Vondy", description: "AI-powered app building platform", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "🛠️", category: "coding-development", subcategory: "ai-app-builder" },
      { id: "firebase-studio", name: "Firebase Studio", description: "Google's app development platform", url: "", upvotes: 1234, verified: true, rating: 4.8, icon: "🔥", category: "coding-development", subcategory: "ai-app-builder" },
      { id: "dify-ai", name: "Dify.AI", description: "AI application development platform", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🤖", category: "coding-development", subcategory: "ai-app-builder" }
    ],
    "ai-browsers": [
      { id: "perplexity-comet", name: "Perplexity Comet", description: "AI-powered browsing experience", url: "", upvotes: 1098, verified: true, rating: 4.6, icon: "🌐", category: "coding-development", subcategory: "ai-browsers" },
      { id: "dia-browser", name: "Dia Browser", description: "Smart browsing with AI assistance", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "🔍", category: "coding-development", subcategory: "ai-browsers" },
      { id: "dia-browser-company", name: "Dia from The Browser Company", description: "Revolutionary AI-first browser", url: "", upvotes: 876, verified: true, rating: 4.7, icon: "💎", category: "coding-development", subcategory: "ai-browsers" },
      { id: "fellou", name: "Fellou", description: "AI-enhanced web browsing", url: "", upvotes: 543, verified: false, rating: 4.3, icon: "🌟", category: "coding-development", subcategory: "ai-browsers" },
      { id: "browserbase", name: "Browserbase", description: "Headless browser automation platform", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "🔧", category: "coding-development", subcategory: "ai-browsers" }
    ],
    "ai-code-assistant": [
      { id: "cursor", name: "Cursor - The AI Code Editor", description: "AI-first code editor with intelligent assistance", url: "", upvotes: 2567, verified: true, rating: 4.9, icon: "✏️", category: "coding-development", subcategory: "ai-code-assistant" },
      { id: "windsurf", name: "Windsurf", description: "AI-powered development environment", url: "", upvotes: 1890, verified: true, rating: 4.8, icon: "🏄", category: "coding-development", subcategory: "ai-code-assistant" },
      { id: "kiro", name: "Kiro", description: "Intelligent code assistant and generator", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🤖", category: "coding-development", subcategory: "ai-code-assistant" },
      { id: "trae", name: "Trae", description: "AI-driven code completion and assistance", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "🎯", category: "coding-development", subcategory: "ai-code-assistant" },
      { id: "warp", name: "Warp", description: "Modern terminal with AI assistance", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "⚡", category: "coding-development", subcategory: "ai-code-assistant" }
    ],
    "ai-code-generator": [
      { id: "builder-io", name: "Builder.io", description: "Visual development platform with AI", url: "", upvotes: 1456, verified: true, rating: 4.7, icon: "🏗️", category: "coding-development", subcategory: "ai-code-generator" },
      { id: "venice-ai", name: "Venice AI", description: "AI-powered code generation platform", url: "", upvotes: 987, verified: true, rating: 4.5, icon: "🏛️", category: "coding-development", subcategory: "ai-code-generator" },
      { id: "v0-dev", name: "v0.dev", description: "Generate UI with simple text prompts", url: "", upvotes: 2134, verified: true, rating: 4.8, icon: "🎨", category: "coding-development", subcategory: "ai-code-generator" },
      { id: "windsurf-gen", name: "Windsurf", description: "AI code generation and development", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🏄", category: "coding-development", subcategory: "ai-code-generator" },
      { id: "kiro-gen", name: "Kiro", description: "Smart code generation assistant", url: "", upvotes: 876, verified: true, rating: 4.4, icon: "🤖", category: "coding-development", subcategory: "ai-code-generator" }
    ],
    "ai-code-review": [
      { id: "bitbucket", name: "Bitbucket", description: "Git repository management with AI code review", url: "", upvotes: 1567, verified: true, rating: 4.6, icon: "🪣", category: "coding-development", subcategory: "ai-code-review" },
      { id: "coderabbit", name: "CodeRabbit", description: "AI-powered code review automation", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🐰", category: "coding-development", subcategory: "ai-code-review" },
      { id: "refact-ai", name: "Refact.ai", description: "AI code refactoring and review tool", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "🔧", category: "coding-development", subcategory: "ai-code-review" },
      { id: "digma-ai", name: "Digma AI", description: "Continuous feedback for developers", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "📊", category: "coding-development", subcategory: "ai-code-review" },
      { id: "qodo", name: "Qodo (formerly Codium)", description: "AI-powered code integrity platform", url: "", upvotes: 987, verified: true, rating: 4.6, icon: "🛡️", category: "coding-development", subcategory: "ai-code-review" }
    ],
    "ai-developer-tools": [
      { id: "google-ai-studio", name: "Google AI Studio", description: "AI development and experimentation platform", url: "", upvotes: 1890, verified: true, rating: 4.8, icon: "🎯", category: "coding-development", subcategory: "ai-developer-tools" },
      { id: "bitbucket-dev", name: "Bitbucket", description: "Developer collaboration platform", url: "", upvotes: 1345, verified: true, rating: 4.6, icon: "🪣", category: "coding-development", subcategory: "ai-developer-tools" },
      { id: "clickworker", name: "clickworker", description: "Crowdsourcing platform for developers", url: "", upvotes: 567, verified: true, rating: 4.3, icon: "👥", category: "coding-development", subcategory: "ai-developer-tools" },
      { id: "weights-biases", name: "Weights & Biases", description: "ML experiment tracking and visualization", url: "", upvotes: 1456, verified: true, rating: 4.7, icon: "📈", category: "coding-development", subcategory: "ai-developer-tools" },
      { id: "fal-ai", name: "fal.ai", description: "Fast AI model serving platform", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "⚡", category: "coding-development", subcategory: "ai-developer-tools" }
    ],
    "ai-github": [
      { id: "coderabbit-github", name: "CodeRabbit", description: "AI code review for GitHub repositories", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "🐰", category: "coding-development", subcategory: "ai-github" },
      { id: "oss-insight", name: "OSS Insight", description: "GitHub repository analytics and insights", url: "", upvotes: 987, verified: true, rating: 4.5, icon: "📊", category: "coding-development", subcategory: "ai-github" },
      { id: "packfiles", name: "Packfiles", description: "GitHub package and dependency management", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "📦", category: "coding-development", subcategory: "ai-github" },
      { id: "gitlights", name: "Gitlights", description: "GitHub activity visualization tool", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "💡", category: "coding-development", subcategory: "ai-github" },
      { id: "weekly-github-insights", name: "Weekly Github Insights", description: "Weekly GitHub activity summaries", url: "", upvotes: 432, verified: false, rating: 4.2, icon: "📅", category: "coding-development", subcategory: "ai-github" }
    ],
    "ai-landing-page-builder": [
      { id: "unbounce", name: "Unbounce", description: "Landing page builder with AI optimization", url: "", upvotes: 1678, verified: true, rating: 4.7, icon: "🚀", category: "coding-development", subcategory: "ai-landing-page-builder" },
      { id: "leadpages", name: "Leadpages", description: "High-converting landing page creator", url: "", upvotes: 1345, verified: true, rating: 4.6, icon: "📄", category: "coding-development", subcategory: "ai-landing-page-builder" },
      { id: "plug-pay", name: "Plug&Pay", description: "Payment-focused landing page builder", url: "", upvotes: 789, verified: true, rating: 4.4, icon: "💳", category: "coding-development", subcategory: "ai-landing-page-builder" },
      { id: "pagepilot-ai", name: "PagePilot.ai", description: "AI-powered landing page optimization", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "✈️", category: "coding-development", subcategory: "ai-landing-page-builder" },
      { id: "codedesign-ai", name: "CodeDesign.ai", description: "AI-driven web design and landing pages", url: "", upvotes: 654, verified: true, rating: 4.3, icon: "🎨", category: "coding-development", subcategory: "ai-landing-page-builder" }
    ],
    "ai-testing": [
      { id: "pte-apeuni", name: "PTE APEUni", description: "AI-powered PTE test preparation", url: "", upvotes: 765, verified: true, rating: 4.4, icon: "📚", category: "coding-development", subcategory: "ai-testing" },
      { id: "alfapte", name: "AlfaPTE", description: "Advanced PTE practice platform", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "🎯", category: "coding-development", subcategory: "ai-testing" },
      { id: "lambdatest", name: "LambdaTest", description: "Cross-browser testing platform", url: "", upvotes: 1456, verified: true, rating: 4.7, icon: "🧪", category: "coding-development", subcategory: "ai-testing" },
      { id: "katalon", name: "Katalon", description: "Comprehensive test automation platform", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "⚙️", category: "coding-development", subcategory: "ai-testing" },
      { id: "vwo", name: "VWO", description: "A/B testing and optimization platform", url: "", upvotes: 987, verified: true, rating: 4.5, icon: "📊", category: "coding-development", subcategory: "ai-testing" }
    ],
    "ai-web-scraping": [
      { id: "apify", name: "Apify", description: "Web scraping and automation platform", url: "", upvotes: 1789, verified: true, rating: 4.8, icon: "🕷️", category: "coding-development", subcategory: "ai-web-scraping" },
      { id: "922-s5-proxy", name: "922 S5 Proxy", description: "High-speed proxy service for web scraping", url: "", upvotes: 654, verified: true, rating: 4.3, icon: "🌐", category: "coding-development", subcategory: "ai-web-scraping" },
      { id: "browse-ai", name: "Browse AI", description: "No-code web scraping and monitoring", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🔍", category: "coding-development", subcategory: "ai-web-scraping" },
      { id: "octoparse", name: "Octoparse", description: "Visual web scraping tool", url: "", upvotes: 987, verified: true, rating: 4.5, icon: "🐙", category: "coding-development", subcategory: "ai-web-scraping" },
      { id: "thordata", name: "Thordata", description: "Enterprise web data extraction", url: "", upvotes: 765, verified: true, rating: 4.4, icon: "🔨", category: "coding-development", subcategory: "ai-web-scraping" }
    ],
    "ai-website-builder": [
      { id: "lovable", name: "Lovable", description: "AI-powered web application builder", url: "", upvotes: 2345, verified: true, rating: 4.9, icon: "💖", category: "coding-development", subcategory: "ai-website-builder" },
      { id: "framer", name: "Framer", description: "Design and ship websites with AI", url: "", upvotes: 1890, verified: true, rating: 4.8, icon: "🖼️", category: "coding-development", subcategory: "ai-website-builder" },
      { id: "tilda", name: "Tilda", description: "Visual website builder platform", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🎨", category: "coding-development", subcategory: "ai-website-builder" },
      { id: "gamma", name: "Gamma", description: "AI-powered presentation and website creator", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "γ", category: "coding-development", subcategory: "ai-website-builder" },
      { id: "prismic", name: "Prismic", description: "Headless CMS with website building", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "💎", category: "coding-development", subcategory: "ai-website-builder" }
    ],
    "log-management": [
      { id: "middleware", name: "Middleware", description: "Full-stack observability platform", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "📊", category: "coding-development", subcategory: "log-management" },
      { id: "rerun", name: "Rerun", description: "Visualization engine for multimodal data", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "🔄", category: "coding-development", subcategory: "log-management" },
      { id: "instalog", name: "Instalog", description: "Real-time log analytics platform", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "📝", category: "coding-development", subcategory: "log-management" },
      { id: "logzen", name: "Logzen", description: "Centralized logging and monitoring", url: "", upvotes: 543, verified: true, rating: 4.3, icon: "🧘", category: "coding-development", subcategory: "log-management" },
      { id: "hoop-dev", name: "Hoop.dev", description: "Developer-friendly log management", url: "", upvotes: 432, verified: false, rating: 4.2, icon: "🏀", category: "coding-development", subcategory: "log-management" }
    ],
    "no-code-low-code": [
      { id: "mailerlite", name: "MailerLite", description: "Email marketing automation platform", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "📧", category: "coding-development", subcategory: "no-code-low-code" },
      { id: "salesforce-platform-nocode", name: "Salesforce Platform", description: "Enterprise no-code development", url: "", upvotes: 1890, verified: true, rating: 4.8, icon: "☁️", category: "coding-development", subcategory: "no-code-low-code" },
      { id: "softr", name: "Softr", description: "No-code app builder from Airtable", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🛠️", category: "coding-development", subcategory: "no-code-low-code" },
      { id: "n8n", name: "n8n", description: "Workflow automation for technical people", url: "", upvotes: 1456, verified: true, rating: 4.7, icon: "🔗", category: "coding-development", subcategory: "no-code-low-code" },
      { id: "powtoon", name: "Powtoon", description: "Video creation platform with no-code tools", url: "", upvotes: 876, verified: true, rating: 4.4, icon: "🎬", category: "coding-development", subcategory: "no-code-low-code" }
    ],
    "sql-query-builder": [
      { id: "gptexcel", name: "GPTExcel", description: "AI-powered Excel formula and SQL generation", url: "", upvotes: 1345, verified: true, rating: 4.6, icon: "📊", category: "coding-development", subcategory: "sql-query-builder" },
      { id: "quadratic", name: "Quadratic", description: "Modern spreadsheet with code integration", url: "", upvotes: 987, verified: true, rating: 4.5, icon: "⬜", category: "coding-development", subcategory: "sql-query-builder" },
      { id: "sourcetable", name: "Sourcetable", description: "Spreadsheet that connects to all data sources", url: "", upvotes: 765, verified: true, rating: 4.4, icon: "🔗", category: "coding-development", subcategory: "sql-query-builder" },
      { id: "ai2sql", name: "AI2sql", description: "Convert natural language to SQL queries", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🔤", category: "coding-development", subcategory: "sql-query-builder" },
      { id: "vanna-ai", name: "Vanna.AI", description: "AI SQL assistant for complex queries", url: "", upvotes: 876, verified: true, rating: 4.5, icon: "🤖", category: "coding-development", subcategory: "sql-query-builder" }
    ]
  }
};

export const getToolsBySubcategory = (category: string, subcategory: string): Tool[] => {
  return toolsData[category]?.[subcategory] || [];
};