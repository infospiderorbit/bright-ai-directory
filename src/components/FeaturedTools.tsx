import { ExternalLink, Star, ArrowUp, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const FeaturedTools = () => {
  const [selectedCategory, setSelectedCategory] = useState("Writing & Editing");

  const toolCategories = {
    "Writing & Editing": [
      {
        id: 1,
        name: "ChatGPT",
        description: "A free-to-use AI system for conversations, insights, and task automation.",
        upvotes: 1247,
        verified: true,
        icon: "🤖"
      },
      {
        id: 2,
        name: "DeepSeek",
        description: "DeepSeek is an AI company providing foundation models and APIs for AI applications.",
        upvotes: 892,
        verified: true,
        icon: "🔍"
      },
      {
        id: 3,
        name: "DeepL",
        description: "Accurate machine translation and AI-powered writing assistance for text and documents.",
        upvotes: 734,
        verified: true,
        icon: "🌐"
      },
      {
        id: 4,
        name: "Notion",
        description: "All-in-one workspace for notes, docs, projects, and AI-powered productivity.",
        upvotes: 1156,
        verified: true,
        icon: "📝"
      },
      {
        id: 5,
        name: "Grammarly",
        description: "AI writing assistant for grammar, style, and tone correction and improvement.",
        upvotes: 623,
        verified: true,
        icon: "✍️"
      },
      {
        id: 6,
        name: "QuillBot",
        description: "AI-powered writing tool for paraphrasing, grammar checking, and more to improve writing.",
        upvotes: 445,
        verified: true,
        icon: "🪶"
      },
      {
        id: 7,
        name: "Studocu",
        description: "Studocu is a platform for students to share and access study materials globally.",
        upvotes: 567,
        verified: false,
        icon: "📚"
      },
      {
        id: 8,
        name: "Gamma",
        description: "AI-powered platform for creating presentations, webpages, and documents.",
        upvotes: 389,
        verified: true,
        icon: "🎨"
      }
    ],
    "Image Generation & Editing": [
      {
        id: 9,
        name: "OpenAI",
        description: "AI research and deployment company focused on building safe and beneficial AGI.",
        upvotes: 1547,
        verified: true,
        icon: "🤖"
      },
      {
        id: 10,
        name: "Adobe",
        description: "Adobe provides creative, marketing, and document management solutions.",
        upvotes: 1892,
        verified: true,
        icon: "🎨"
      },
      {
        id: 11,
        name: "Grok",
        description: "Grok is a free AI assistant by xAI for truth, objectivity, real-time search, and more.",
        upvotes: 834,
        verified: true,
        icon: "🔍"
      },
      {
        id: 12,
        name: "Freepik AI Image Generator",
        description: "Free AI tool to generate images from text in real-time with various styles and options.",
        upvotes: 1256,
        verified: false,
        icon: "🖼️"
      },
      {
        id: 13,
        name: "remove.bg",
        description: "AI-powered background remover for images in 5 seconds.",
        upvotes: 723,
        verified: true,
        icon: "🗑️"
      },
      {
        id: 14,
        name: "Shutterstock",
        description: "Shutterstock provides royalty-free stock images, videos, and music with AI-powered creative tools.",
        upvotes: 545,
        verified: true,
        icon: "📸"
      },
      {
        id: 15,
        name: "CapCut",
        description: "CapCut is an AI-driven all-in-one video editor and graphic design tool.",
        upvotes: 667,
        verified: true,
        icon: "✂️"
      },
      {
        id: 16,
        name: "PolyBuzz.ai",
        description: "Free AI chatbot platform for creating and chatting with AI characters.",
        upvotes: 289,
        verified: false,
        icon: "🤖"
      }
    ],
    "Music & Audio": [
      {
        id: 17,
        name: "ElevenLabs",
        description: "AI audio platform offering text-to-speech, voice cloning, and dubbing services.",
        upvotes: 1347,
        verified: true,
        icon: "🎵"
      },
      {
        id: 18,
        name: "Kling AI",
        description: "AI creative platform for generating images and videos.",
        upvotes: 792,
        verified: true,
        icon: "🎬"
      },
      {
        id: 19,
        name: "Wondershare",
        description: "Software solutions for creativity, productivity, and utility, including video editing, PDF tools, and data management.",
        upvotes: 634,
        verified: true,
        icon: "🛠️"
      },
      {
        id: 20,
        name: "EaseUS",
        description: "EaseUS provides data recovery, backup, partition management, and multimedia software.",
        upvotes: 456,
        verified: true,
        icon: "💾"
      },
      {
        id: 21,
        name: "Adobe Podcast",
        description: "AI-powered audio recording and editing platform by Adobe.",
        upvotes: 523,
        verified: true,
        icon: "🎙️"
      },
      {
        id: 22,
        name: "PixVerse",
        description: "AI video generator that transforms text and photos into stunning videos.",
        upvotes: 345,
        verified: true,
        icon: "📹"
      },
      {
        id: 23,
        name: "Symphony Creative Studio",
        description: "A creative studio for professional audio and music production.",
        upvotes: 267,
        verified: false,
        icon: "🎼"
      },
      {
        id: 24,
        name: "Media AI Generator",
        description: "Free online AI tools for video, image, and music generation.",
        upvotes: 189,
        verified: false,
        icon: "🎶"
      }
    ],
    "Voice Generation & Conversion": [
      {
        id: 25,
        name: "CapCut",
        description: "CapCut is an AI-driven all-in-one video editor and graphic design tool.",
        upvotes: 1247,
        verified: true,
        icon: "✂️"
      },
      {
        id: 26,
        name: "Studocu",
        description: "Studocu is a platform for students to share and access study materials globally.",
        upvotes: 692,
        verified: false,
        icon: "📚"
      },
      {
        id: 27,
        name: "ElevenLabs",
        description: "AI audio platform offering text-to-speech, voice cloning, and dubbing services.",
        upvotes: 1434,
        verified: true,
        icon: "🎵"
      },
      {
        id: 28,
        name: "TurboScribe",
        description: "AI transcription service converting audio and video to text in 98+ languages.",
        upvotes: 856,
        verified: true,
        icon: "📝"
      },
      {
        id: 29,
        name: "VEED.IO",
        description: "Online video editor with AI tools for creating professional videos quickly and easily.",
        upvotes: 723,
        verified: true,
        icon: "🎬"
      },
      {
        id: 30,
        name: "InVideo",
        description: "Online video editor with 5000+ templates, AI tools, and stock media.",
        upvotes: 545,
        verified: true,
        icon: "📹"
      },
      {
        id: 31,
        name: "Clipto.AI",
        description: "AI-powered media management assistant with transcription, video editing, and asset management tools.",
        upvotes: 367,
        verified: true,
        icon: "📎"
      },
      {
        id: 32,
        name: "Adobe Podcast",
        description: "AI-powered audio recording and editing platform by Adobe.",
        upvotes: 489,
        verified: true,
        icon: "🎙️"
      }
    ],
    "Social Media": [
      {
        id: 33,
        name: "Adobe",
        description: "Adobe provides creative, marketing, and document management solutions.",
        upvotes: 1892,
        verified: true,
        icon: "🎨"
      },
      {
        id: 34,
        name: "Beacons",
        description: "All-in-one platform for content creators with link-in-bio, store, email marketing, and media kits.",
        upvotes: 792,
        verified: true,
        icon: "🔗"
      },
      {
        id: 35,
        name: "Uhmegle",
        description: "Uhmegle is an Omegle alternative for chatting with strangers via text or video.",
        upvotes: 434,
        verified: false,
        icon: "💬"
      },
      {
        id: 36,
        name: "PixVerse",
        description: "AI video generator that transforms text and photos into stunning videos.",
        upvotes: 1156,
        verified: true,
        icon: "📹"
      },
      {
        id: 37,
        name: "Sider",
        description: "AI assistant integrating ChatGPT, Claude, and Gemini for reading, writing, and more on any webpage.",
        upvotes: 623,
        verified: true,
        icon: "🧠"
      },
      {
        id: 38,
        name: "Transkriptor",
        description: "AI transcription service for audio and video to text conversion with high accuracy.",
        upvotes: 445,
        verified: true,
        icon: "📝"
      },
      {
        id: 39,
        name: "Microsoft Designer",
        description: "AI-powered graphic design app for creating social media posts, invitations, and more.",
        upvotes: 567,
        verified: false,
        icon: "🎨"
      },
      {
        id: 40,
        name: "Glasp",
        description: "Social web highlighter to organize ideas, build AI clone, and share knowledge.",
        upvotes: 289,
        verified: true,
        icon: "🔍"
      }
    ],
    "AI Detection & Anti-Detection": [
      {
        id: 41,
        name: "QuillBot",
        description: "AI-powered writing tool for paraphrasing, grammar checking, and more to improve writing.",
        upvotes: 1247,
        verified: true,
        icon: "🪶"
      },
      {
        id: 42,
        name: "ZeroGPT",
        description: "ZeroGPT is an AI content detector and offers various writing tools.",
        upvotes: 892,
        verified: true,
        icon: "🔍"
      },
      {
        id: 43,
        name: "GPTZero",
        description: "AI detector for identifying text generated by AI models like ChatGPT.",
        upvotes: 734,
        verified: true,
        icon: "🕵️"
      },
      {
        id: 44,
        name: "Uhmegle",
        description: "Uhmegle is an Omegle alternative for chatting with strangers via text or video.",
        upvotes: 456,
        verified: false,
        icon: "💬"
      },
      {
        id: 45,
        name: "Scribbr",
        description: "Scribbr offers proofreading, plagiarism checking, citation generation, and academic resources for students.",
        upvotes: 623,
        verified: true,
        icon: "📚"
      },
      {
        id: 46,
        name: "Undetectable AI",
        description: "Transforms AI content into undetectable, human-like writing.",
        upvotes: 445,
        verified: true,
        icon: "🥷"
      },
      {
        id: 47,
        name: "Branded",
        description: "Branded connects businesses with research participants, offering AI-driven insights and custom audience targeting.",
        upvotes: 367,
        verified: true,
        icon: "🏷️"
      },
      {
        id: 48,
        name: "hCaptcha",
        description: "AI security platform stopping bots and human abuse with a privacy focus.",
        upvotes: 289,
        verified: true,
        icon: "🛡️"
      }
    ],
    "Coding & Development": [
      {
        id: 49,
        name: "ChatGPT",
        description: "A free-to-use AI system for conversations, insights, and task automation.",
        upvotes: 1547,
        verified: true,
        icon: "🤖"
      },
      {
        id: 50,
        name: "OpenAI",
        description: "AI research and deployment company focused on building safe and beneficial AGI.",
        upvotes: 1892,
        verified: true,
        icon: "🤖"
      },
      {
        id: 51,
        name: "DeepSeek",
        description: "DeepSeek is an AI company providing foundation models and APIs for AI applications.",
        upvotes: 834,
        verified: true,
        icon: "🔍"
      },
      {
        id: 52,
        name: "DeepL",
        description: "Accurate machine translation and AI-powered writing assistance for text and documents.",
        upvotes: 1256,
        verified: true,
        icon: "🌐"
      },
      {
        id: 53,
        name: "Salesforce Platform",
        description: "A unified platform for data, AI, CRM, development, and security.",
        upvotes: 723,
        verified: true,
        icon: "☁️"
      },
      {
        id: 54,
        name: "Claude",
        description: "Claude is an AI assistant from Anthropic that helps with tasks via natural language.",
        upvotes: 545,
        verified: true,
        icon: "🧠"
      },
      {
        id: 55,
        name: "Google AI Studio",
        description: "Platform for building with Google's Gemini AI models.",
        upvotes: 667,
        verified: false,
        icon: "🔬"
      },
      {
        id: 56,
        name: "Lovable",
        description: "Lovable: Build software products from idea to app using a chat interface.",
        upvotes: 389,
        verified: true,
        icon: "💖"
      }
    ],
    "Video & Animation": [
      {
        id: 57,
        name: "OpenAI",
        description: "AI research and deployment company focused on building safe and beneficial AGI.",
        upvotes: 1347,
        verified: true,
        icon: "🤖"
      },
      {
        id: 58,
        name: "Sora",
        description: "AI model creating realistic videos from text, images, or existing videos.",
        upvotes: 1792,
        verified: true,
        icon: "🎬"
      },
      {
        id: 59,
        name: "CapCut",
        description: "CapCut is an AI-driven all-in-one video editor and graphic design tool.",
        upvotes: 634,
        verified: true,
        icon: "✂️"
      },
      {
        id: 60,
        name: "VSCO",
        description: "Photography and video editing app with creative community and professional tools.",
        upvotes: 1056,
        verified: true,
        icon: "📸"
      },
      {
        id: 61,
        name: "Kling AI",
        description: "AI creative platform for generating images and videos.",
        upvotes: 823,
        verified: true,
        icon: "🎬"
      },
      {
        id: 62,
        name: "Cutout.Pro",
        description: "AI-powered visual design platform for photo and video editing and content generation.",
        upvotes: 445,
        verified: true,
        icon: "✂️"
      },
      {
        id: 63,
        name: "Picsart",
        description: "AI-powered creative platform for photo and video editing and graphic design.",
        upvotes: 567,
        verified: true,
        icon: "🎨"
      },
      {
        id: 64,
        name: "Pixlr",
        description: "Cloud-based photo editing and design tools with AI-powered features.",
        upvotes: 389,
        verified: true,
        icon: "🖼️"
      }
    ],
    "Legal & Finance": [
      {
        id: 65,
        name: "Thomson Reuters",
        description: "Thomson Reuters: Technology solutions and expertise for professionals across various industries.",
        upvotes: 1247,
        verified: true,
        icon: "📊"
      },
      {
        id: 66,
        name: "Abacus.AI",
        description: "AI platform for building and embedding AI solutions into applications.",
        upvotes: 892,
        verified: true,
        icon: "🧮"
      },
      {
        id: 67,
        name: "MathGPT",
        description: "AI math solver and homework helper with video explanations and step-by-step solutions.",
        upvotes: 734,
        verified: true,
        icon: "📐"
      },
      {
        id: 68,
        name: "Casetext",
        description: "Legal AI company providing AI-powered legal research and assistance tools.",
        upvotes: 1156,
        verified: true,
        icon: "⚖️"
      },
      {
        id: 69,
        name: "Onfido",
        description: "AI-powered digital identity solution for trust, onboarding, and compliance.",
        upvotes: 623,
        verified: true,
        icon: "🆔"
      },
      {
        id: 70,
        name: "Law Insider",
        description: "AI-powered contract drafting, review, and redlining with a large public contract database.",
        upvotes: 445,
        verified: true,
        icon: "📋"
      },
      {
        id: 71,
        name: "AInvest",
        description: "AI-powered stock analysis platform with real-time data and predictive tools.",
        upvotes: 567,
        verified: true,
        icon: "📈"
      },
      {
        id: 72,
        name: "GVA NDA Check",
        description: "AI-powered NDA check service for risk visualization and revision.",
        upvotes: 289,
        verified: true,
        icon: "📄"
      }
    ],
    "Business Management": [
      {
        id: 73,
        name: "Notion",
        description: "All-in-one workspace for notes, docs, projects, and AI-powered productivity.",
        upvotes: 1547,
        verified: true,
        icon: "📝"
      },
      {
        id: 74,
        name: "Salesforce Platform",
        description: "A unified platform for data, AI, CRM, development, and security.",
        upvotes: 1892,
        verified: true,
        icon: "☁️"
      },
      {
        id: 75,
        name: "Jotform AI Agents",
        description: "Platform to create AI agents for customer service across multiple channels.",
        upvotes: 834,
        verified: true,
        icon: "🤖"
      },
      {
        id: 76,
        name: "HubSpot",
        description: "Customer platform with marketing, sales, service, and CRM software.",
        upvotes: 1256,
        verified: true,
        icon: "🎯"
      },
      {
        id: 77,
        name: "Miro",
        description: "Online collaborative whiteboard platform for team collaboration and project management.",
        upvotes: 723,
        verified: true,
        icon: "🎨"
      },
      {
        id: 78,
        name: "Airtable",
        description: "Airtable is a no-code app-building platform with AI for data management and workflow automation.",
        upvotes: 545,
        verified: true,
        icon: "📊"
      },
      {
        id: 79,
        name: "VSCO",
        description: "Photography and video editing app with creative community and professional tools.",
        upvotes: 667,
        verified: true,
        icon: "📸"
      },
      {
        id: 80,
        name: "Anthropic",
        description: "AI safety and research company building reliable, interpretable AI systems.",
        upvotes: 489,
        verified: true,
        icon: "🧠"
      }
    ]
  };

  const currentTools = toolCategories[selectedCategory as keyof typeof toolCategories] || [];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-3xl font-bold mb-2 text-foreground flex items-center">
            <Star className="h-8 w-8 text-yellow-500 mr-3" />
            Featured
          </h2>
          
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-64">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(toolCategories).map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentTools.map((tool) => (
            <Card 
              key={tool.id} 
              className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border bg-white/90 backdrop-blur-sm overflow-hidden"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-3">
                  <div className="text-3xl">{tool.icon}</div>
                  {tool.verified && (
                    <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white border-0 text-xs">
                      <Check className="h-3 w-3 mr-1" />
                      Gold Verified
                    </Badge>
                  )}
                </div>
                
                <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                  {tool.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {tool.description}
                </CardDescription>
                
                <div className="flex items-center justify-between pt-3 border-t">
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <ArrowUp className="h-4 w-4" />
                    <span className="font-medium">Upvote: {tool.upvotes}</span>
                  </div>
                  
                  <Button 
                    size="sm" 
                    className="gradient-primary text-white border-0 hover:scale-105 transition-transform text-xs px-4"
                  >
                    🔗 AI Visit
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTools;