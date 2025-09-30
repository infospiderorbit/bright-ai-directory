import { ExternalLink, Star, ArrowUp, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { toolsData } from "@/data/toolsData";

interface FeaturedToolsProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  searchQuery?: string;
}

const FeaturedTools: React.FC<FeaturedToolsProps> = ({ selectedCategory, setSelectedCategory, searchQuery = "" }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const TOOLS_PER_PAGE = 12;

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  const toolCategories = {
    "Writing & Editing": [
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
    ],
    "Image Generation & Editing": [
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
    ],
    "Music & Audio": [
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
    ],
    "Voice Generation & Conversion": [
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
    ],
    "Social Media": [
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
    ],
    "AI Detection & Anti-Detection": [
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
    ],
    "Coding & Development": [
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
    ],
    "Video & Animation": [
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
        upvotes: 1056,
        verified: true,
        icon: "📸"
      },
      {
        id: 61,
        name: "Kling AI",
        description: "Generates videos and animations from prompts.",
        upvotes: 823,
        verified: true,
        icon: "🎬"
      },
      {
        id: 62,
        name: "Cutout.Pro",
        description: "AI tools for video background, effects, and animation.",
        upvotes: 445,
        verified: true,
        icon: "✂️"
      },
      {
        id: 63,
        name: "Picsart",
        description: "AI-powered video and image editing.",
        upvotes: 567,
        verified: true,
        icon: "🎨"
      },
      {
        id: 64,
        name: "Pixlr",
        description: "AI-enhanced photo/video design tools.",
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

  // Category mapping to actual data categories
  const categoryMapping: { [key: string]: string[] } = {
    "Writing & Editing": ["writing-editing"],
    "Image Generation & Editing": ["image-generation-editing"],
    "Music & Audio": ["voice-generation-conversion"],
    "Voice Generation & Conversion": ["voice-generation-conversion"],
    "Art & Creative Design": ["art-creative-design", "interior-architectural-design"],
    "Social Media": ["social-media"],
    "AI Detection & Anti-Detection": ["ai-detection-anti-detection"],
    "Chatbots & Virtual Companions": ["chatbots-virtual-companions"],
    "Image Analysis": ["image-analysis"],
    "Coding & Development": ["coding-development"],
    "Video & Animation": ["video-animation"],
    "Daily Life": ["daily-life"],
    "Legal & Finance": ["legal-finance"],
    "Business Management": ["business-management"],
    "Marketing & Advertising": ["marketing-advertising"],
    "Health & Wellness": ["health-wellness"],
    "Business Research": ["business-research"],
    "Education & Translation": ["education-translation"],
    "Office & Productivity": ["office-productivity"],
    "Research & Data Analysis": ["research-data-analysis"],
    "Other": ["other"]
  };

  // Get all tools for selected category from actual data
  const getToolsForCategory = (category: string) => {
    const mappedCategories = categoryMapping[category] || [];
    const allTools: any[] = [];
    
    mappedCategories.forEach(mappedCategory => {
      if (toolsData[mappedCategory]) {
        Object.values(toolsData[mappedCategory]).forEach(subcategoryTools => {
          if (Array.isArray(subcategoryTools)) {
            // Filter out any undefined or null tools
            const validTools = subcategoryTools.filter(tool => tool && tool.name && tool.id);
            allTools.push(...validTools);
          }
        });
      }
    });
    
    return allTools;
  };

  const filteredData = useMemo(() => {
    // Reset page when category changes
    setCurrentPage(1);
    
    if (selectedCategory === "All Categories") {
      // Build featured sections from real toolsData categories
      const featuredCategoryNames = [
        "Writing & Editing",
        "Image Generation & Editing",
        "Voice Generation & Conversion",
        "Office & Productivity"
      ];
      return featuredCategoryNames
        .filter((name) => categoryMapping[name])
        .map((name) => [name, getToolsForCategory(name)] as [string, any[]]);
    } else {
      // Get all tools from actual data for selected category
      const tools = getToolsForCategory(selectedCategory);
      return tools.length > 0 ? [[selectedCategory, tools] as [string, any[]]] : [];
    }
  }, [selectedCategory]);

  // Get paginated tools for current category
  const getPaginatedTools = (tools: any[]) => {
    const startIndex = (currentPage - 1) * TOOLS_PER_PAGE;
    const endIndex = startIndex + TOOLS_PER_PAGE;
    return tools.slice(startIndex, endIndex);
  };

  // Calculate total pages for current category
  const getTotalPages = (tools: any[]) => {
    return Math.ceil(tools.length / TOOLS_PER_PAGE);
  };

  return (
    <>
      <section className="py-16 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-4">
          {selectedCategory !== "All Categories" && (
            <div className="mb-8 text-center">
              <h2 className="text-4xl font-bold text-foreground mb-2">
                {selectedCategory} Tools
              </h2>
              <p className="text-muted-foreground">
                Discover the best AI tools in {selectedCategory.toLowerCase()}
              </p>
            </div>
          )}
          
          {/* Featured Tools Categories - Filtered by Selection */}
          {filteredData.map(([categoryName, tools]: [string, any[]]) => {
            const validTools = Array.isArray(tools) ? tools.filter(tool => tool && tool.name && tool.id) : [];
            const query = searchQuery.trim().toLowerCase();
            const searchedTools = query
              ? validTools.filter((tool: any) => {
                  const name = String(tool.name || "").toLowerCase();
                  const desc = String(tool.description || "").toLowerCase();
                  return name.includes(query) || desc.includes(query);
                })
              : validTools;
            const paginatedTools = selectedCategory === "All Categories" ? searchedTools.slice(0, 8) : getPaginatedTools(searchedTools);
            const totalPages = selectedCategory === "All Categories" ? 1 : getTotalPages(searchedTools);
            
            return (
              <div key={categoryName} className="mb-16">
                <div className="mb-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center">
                      <Star className="h-8 w-8 text-yellow-500 mr-3" />
                      {categoryName}
                      <span className="text-lg text-muted-foreground ml-2">({searchedTools.length} tools)</span>
                    </h2>
                    {selectedCategory === "All Categories" && (
                      <Link
                        to={`/category/${categoryName
                          .toLowerCase()
                          .replace(/&/g, '-')
                          .replace(/\s+/g, '-')
                          .replace(/-+/g, '-')
                          .replace(/[^a-z0-9-]/g, '')
                          .replace(/^-+|-+$/g, '')}`}
                      >
                        <Button variant="outline" className="mb-4">
                          More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {paginatedTools.map((tool: any) => (
                  <Link 
                    key={tool.id} 
                    to={`/${tool.id}`}
                  >
                    <Card className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border bg-white/90 backdrop-blur-sm overflow-hidden h-full"
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
                  </Link>
                    ))}
                  </div>

                  {/* Pagination Controls */}
                  {selectedCategory !== "All Categories" && totalPages > 1 && (
                    <div className="flex items-center justify-center mt-8 space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="flex items-center"
                      >
                        <ChevronLeft className="h-4 w-4 mr-1" />
                        Previous
                      </Button>
                      
                      <div className="flex items-center space-x-1">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                          <Button
                            key={page}
                            variant={currentPage === page ? "default" : "outline"}
                            size="sm"
                            onClick={() => setCurrentPage(page)}
                            className="min-w-[40px]"
                          >
                            {page}
                          </Button>
                        ))}
                      </div>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="flex items-center"
                      >
                        Next
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </section>

    </>
  );
};

export default FeaturedTools;