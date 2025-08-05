import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Star, ArrowUp, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CategoryPage = () => {
  const { category } = useParams();
  
  const toolCategories = {
    "writing-editing": {
      title: "Writing & Editing",
      tools: [
        {
          id: 1,
          name: "ChatGPT",
          description: "Conversational AI for writing, brainstorming, and automation.",
          upvotes: 1247,
          verified: true,
          icon: "🤖"
        },
        {
          id: 2,
          name: "DeepSeek",
          description: "Foundation models and APIs for AI applications, including writing.",
          upvotes: 892,
          verified: true,
          icon: "🔍"
        },
        {
          id: 3,
          name: "DeepL",
          description: "Translation and AI writing assistance.",
          upvotes: 734,
          verified: true,
          icon: "🌐"
        },
        {
          id: 4,
          name: "Notion",
          description: "AI-powered productivity and document editing.",
          upvotes: 1156,
          verified: true,
          icon: "📝"
        },
        {
          id: 5,
          name: "Grammarly",
          description: "Grammar, tone, and writing enhancement.",
          upvotes: 623,
          verified: true,
          icon: "✍️"
        },
        {
          id: 6,
          name: "QuillBot",
          description: "Paraphrasing, grammar checking, and summarizing.",
          upvotes: 445,
          verified: true,
          icon: "🪶"
        },
        {
          id: 7,
          name: "Studocu",
          description: "Access and share study materials, document-based assistance.",
          upvotes: 567,
          verified: false,
          icon: "📚"
        },
        {
          id: 8,
          name: "Gamma",
          description: "Create presentations and documents with AI.",
          upvotes: 389,
          verified: true,
          icon: "🎨"
        }
      ]
    },
    "image-generation-editing": {
      title: "Image Generation & Editing",
      tools: [
        {
          id: 9,
          name: "Freepik AI Image Generator",
          description: "Text-to-image with various styles.",
          upvotes: 1256,
          verified: false,
          icon: "🖼️"
        },
        {
          id: 10,
          name: "remove.bg",
          description: "AI background remover.",
          upvotes: 723,
          verified: true,
          icon: "🗑️"
        },
        {
          id: 11,
          name: "Shutterstock",
          description: "AI tools for stock media generation and editing.",
          upvotes: 545,
          verified: true,
          icon: "📸"
        },
        {
          id: 12,
          name: "CapCut",
          description: "AI-powered photo and video editor.",
          upvotes: 667,
          verified: true,
          icon: "✂️"
        },
        {
          id: 13,
          name: "Adobe",
          description: "Full suite including Photoshop, Illustrator with AI.",
          upvotes: 1892,
          verified: true,
          icon: "🎨"
        },
        {
          id: 14,
          name: "PolyBuzz.ai",
          description: "Free chatbot builder with media integrations.",
          upvotes: 289,
          verified: false,
          icon: "🤖"
        },
        {
          id: 15,
          name: "OpenAI (DALL·E)",
          description: "Text-to-image generation.",
          upvotes: 1547,
          verified: true,
          icon: "🤖"
        },
        {
          id: 16,
          name: "Grok",
          description: "Real-time information assistant with multimedia capabilities.",
          upvotes: 834,
          verified: true,
          icon: "🔍"
        }
      ]
    },
    "music-audio": {
      title: "Music & Audio",
      tools: [
        {
          id: 17,
          name: "ElevenLabs",
          description: "AI voice cloning, dubbing, and TTS.",
          upvotes: 1347,
          verified: true,
          icon: "🎵"
        },
        {
          id: 18,
          name: "Adobe Podcast",
          description: "High-quality AI audio editing and cleanup.",
          upvotes: 523,
          verified: true,
          icon: "🎙️"
        },
        {
          id: 19,
          name: "Kling AI",
          description: "Multimedia generation including music.",
          upvotes: 792,
          verified: true,
          icon: "🎬"
        },
        {
          id: 20,
          name: "Wondershare",
          description: "Audio/video software with AI features.",
          upvotes: 634,
          verified: true,
          icon: "🛠️"
        },
        {
          id: 21,
          name: "EaseUS",
          description: "Multimedia toolkit with AI-driven functions.",
          upvotes: 456,
          verified: true,
          icon: "💾"
        },
        {
          id: 22,
          name: "Symphony Creative Studio",
          description: "Creative audio and music design.",
          upvotes: 267,
          verified: false,
          icon: "🎼"
        },
        {
          id: 23,
          name: "PixVerse",
          description: "AI-generated videos with audio elements.",
          upvotes: 345,
          verified: true,
          icon: "📹"
        },
        {
          id: 24,
          name: "Media AI Generator",
          description: "Tools for generating music and sound effects.",
          upvotes: 189,
          verified: false,
          icon: "🎶"
        }
      ]
    },
    "voice-generation-conversion": {
      title: "Voice Generation & Conversion",
      tools: [
        {
          id: 25,
          name: "ElevenLabs",
          description: "High-fidelity voice generation.",
          upvotes: 1434,
          verified: true,
          icon: "🎵"
        },
        {
          id: 26,
          name: "TurboScribe",
          description: "Accurate AI transcription in 98+ languages.",
          upvotes: 856,
          verified: true,
          icon: "📝"
        },
        {
          id: 27,
          name: "VEED.IO",
          description: "Voiceovers and editing with AI.",
          upvotes: 723,
          verified: true,
          icon: "🎬"
        },
        {
          id: 28,
          name: "Clipto.AI",
          description: "Audio transcription and media management.",
          upvotes: 367,
          verified: true,
          icon: "📎"
        },
        {
          id: 29,
          name: "Adobe Podcast",
          description: "Audio recording/editing with AI enhancement.",
          upvotes: 489,
          verified: true,
          icon: "🎙️"
        },
        {
          id: 30,
          name: "InVideo",
          description: "AI voiceovers for videos.",
          upvotes: 545,
          verified: true,
          icon: "📹"
        },
        {
          id: 31,
          name: "CapCut",
          description: "Voiceover and speech synthesis tools.",
          upvotes: 1247,
          verified: true,
          icon: "✂️"
        },
        {
          id: 32,
          name: "Studocu",
          description: "For audio summaries and lecture transcription.",
          upvotes: 692,
          verified: false,
          icon: "📚"
        }
      ]
    },
    "social-media": {
      title: "Social Media",
      tools: [
        {
          id: 33,
          name: "Adobe",
          description: "Create AI-designed content for social media.",
          upvotes: 1892,
          verified: true,
          icon: "🎨"
        },
        {
          id: 34,
          name: "Beacons",
          description: "Content creator platform with AI support.",
          upvotes: 792,
          verified: true,
          icon: "🔗"
        },
        {
          id: 35,
          name: "PixVerse",
          description: "Text/image to video generator for posts.",
          upvotes: 1156,
          verified: true,
          icon: "📹"
        },
        {
          id: 36,
          name: "Sider",
          description: "AI overlay tools for content creation.",
          upvotes: 623,
          verified: true,
          icon: "🧠"
        },
        {
          id: 37,
          name: "Transkriptor",
          description: "Convert speech to social media captions and text.",
          upvotes: 445,
          verified: true,
          icon: "📝"
        },
        {
          id: 38,
          name: "Microsoft Designer",
          description: "AI designs for posts and promotions.",
          upvotes: 567,
          verified: false,
          icon: "🎨"
        },
        {
          id: 39,
          name: "Glasp",
          description: "Highlight content and share insights with AI.",
          upvotes: 289,
          verified: true,
          icon: "🔍"
        },
        {
          id: 40,
          name: "Uhmegle",
          description: "Video-based AI engagement platform.",
          upvotes: 434,
          verified: false,
          icon: "💬"
        }
      ]
    },
    "ai-detection-anti-detection": {
      title: "AI Detection & Anti-Detection",
      tools: [
        {
          id: 41,
          name: "ZeroGPT",
          description: "AI content detection tool.",
          upvotes: 892,
          verified: true,
          icon: "🔍"
        },
        {
          id: 42,
          name: "GPTZero",
          description: "Detects AI-generated text.",
          upvotes: 734,
          verified: true,
          icon: "🕵️"
        },
        {
          id: 43,
          name: "Undetectable AI",
          description: "Converts AI text to human-like writing.",
          upvotes: 445,
          verified: true,
          icon: "🥷"
        },
        {
          id: 44,
          name: "QuillBot",
          description: "Used as a humanizer and paraphraser.",
          upvotes: 1247,
          verified: true,
          icon: "🪶"
        },
        {
          id: 45,
          name: "Scribbr",
          description: "AI plagiarism detection and academic support.",
          upvotes: 623,
          verified: true,
          icon: "📚"
        },
        {
          id: 46,
          name: "Uhmegle",
          description: "Platform with some anti-AI moderation.",
          upvotes: 456,
          verified: false,
          icon: "💬"
        },
        {
          id: 47,
          name: "Branded",
          description: "AI audience analysis and content verification.",
          upvotes: 367,
          verified: true,
          icon: "🏷️"
        },
        {
          id: 48,
          name: "hCaptcha",
          description: "Detects bots and AI-based spam.",
          upvotes: 289,
          verified: true,
          icon: "🛡️"
        }
      ]
    },
    "coding-development": {
      title: "Coding & Development",
      tools: [
        {
          id: 49,
          name: "ChatGPT",
          description: "Code generation and debugging help.",
          upvotes: 1547,
          verified: true,
          icon: "🤖"
        },
        {
          id: 50,
          name: "OpenAI",
          description: "API for coding and AI dev tools.",
          upvotes: 1892,
          verified: true,
          icon: "🤖"
        },
        {
          id: 51,
          name: "DeepSeek",
          description: "Code generation models and APIs.",
          upvotes: 834,
          verified: true,
          icon: "🔍"
        },
        {
          id: 52,
          name: "Claude",
          description: "Code assistant by Anthropic.",
          upvotes: 545,
          verified: true,
          icon: "🧠"
        },
        {
          id: 53,
          name: "Google AI Studio",
          description: "Gemini-based code and app builder.",
          upvotes: 667,
          verified: false,
          icon: "🔬"
        },
        {
          id: 54,
          name: "Salesforce Platform",
          description: "CRM and low-code development.",
          upvotes: 723,
          verified: true,
          icon: "☁️"
        },
        {
          id: 55,
          name: "DeepL",
          description: "Translation APIs for developers.",
          upvotes: 1256,
          verified: true,
          icon: "🌐"
        },
        {
          id: 56,
          name: "Lovable",
          description: "No-code builder from chat to full app.",
          upvotes: 389,
          verified: true,
          icon: "💖"
        }
      ]
    },
    "video-animation": {
      title: "Video & Animation",
      tools: [
        {
          id: 57,
          name: "Sora",
          description: "AI video generation from text/images.",
          upvotes: 1792,
          verified: true,
          icon: "🎬"
        },
        {
          id: 58,
          name: "CapCut",
          description: "All-in-one AI video editor.",
          upvotes: 634,
          verified: true,
          icon: "✂️"
        },
        {
          id: 59,
          name: "PixVerse",
          description: "Text to animated video platform.",
          upvotes: 345,
          verified: true,
          icon: "📹"
        },
        {
          id: 60,
          name: "VSCO",
          description: "Creative video and animation tools.",
          upvotes: 267,
          verified: true,
          icon: "📷"
        },
        {
          id: 61,
          name: "Kling AI",
          description: "Generates videos and animations from prompts.",
          upvotes: 189,
          verified: true,
          icon: "🎬"
        },
        {
          id: 62,
          name: "Cutout.Pro",
          description: "AI tools for video background, effects, and animation.",
          upvotes: 456,
          verified: false,
          icon: "✂️"
        },
        {
          id: 63,
          name: "Picsart",
          description: "AI-powered video and image editing.",
          upvotes: 367,
          verified: true,
          icon: "🎨"
        },
        {
          id: 64,
          name: "Pixlr",
          description: "AI-enhanced photo/video design tools.",
          upvotes: 289,
          verified: true,
          icon: "🖼️"
        }
      ]
    }
  };

  const categoryData = toolCategories[category as keyof typeof toolCategories];

  if (!categoryData) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
            <Link to="/">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl font-bold mb-2">{categoryData.title}</h1>
          <p className="text-muted-foreground">Discover all AI tools in the {categoryData.title} category</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryData.tools.map((tool) => (
            <Card key={tool.id} className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{tool.icon}</div>
                    <div>
                      <CardTitle className="text-lg font-semibold flex items-center gap-2">
                        {tool.name}
                        {tool.verified && (
                          <Check className="h-4 w-4 text-blue-500" />
                        )}
                      </CardTitle>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {tool.description}
                </CardDescription>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="h-7 px-2">
                      <ArrowUp className="h-3 w-3 mr-1" />
                      {tool.upvotes}
                    </Button>
                    {tool.verified && (
                      <Badge variant="secondary" className="text-xs">
                        Verified
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs text-muted-foreground">4.5</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategoryPage;