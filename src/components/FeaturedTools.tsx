import { ExternalLink, Star, ArrowUp, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const FeaturedTools = () => {
  const tools = [
    {
      id: 1,
      name: "ThumbnailCreator.com",
      description: "Quickly create eye-catching thumbnails for your videos on YouTube, Twitch and Facebook with AI. Attract more views and easily improve the click-through rate on your video clips.",
      category: "Image Generators",
      upvotes: 61,
      verified: true,
      icon: "🖼️"
    },
    {
      id: 2,
      name: "ChatGPT",
      description: "Advanced AI chatbot for conversations, writing, and problem-solving with human-like responses across multiple domains and languages.",
      category: "AI Chat & Assistant",
      upvotes: 248,
      verified: true,
      icon: "🤖"
    },
    {
      id: 3,
      name: "Midjourney",
      description: "Create stunning, artistic images from text descriptions using advanced AI image generation with incredible detail and creativity.",
      category: "Image Generators", 
      upvotes: 195,
      verified: true,
      icon: "🎨"
    },
    {
      id: 4,
      name: "Grammarly AI",
      description: "AI-powered writing assistant that improves grammar, style, and clarity across all platforms with real-time suggestions.",
      category: "Writing",
      upvotes: 127,
      verified: true,
      icon: "✍️"
    },
    {
      id: 5,
      name: "GitHub Copilot",
      description: "AI pair programmer that suggests code and entire functions in real-time as you type, supporting dozens of programming languages.",
      category: "Code Assistant",
      upvotes: 156,
      verified: true,
      icon: "👨‍💻"
    },
    {
      id: 6,
      name: "Notion AI",
      description: "Enhance your Notion workspace with AI-powered writing, summarizing, and brainstorming features for enhanced productivity.",
      category: "Productivity",
      upvotes: 98,
      verified: true,
      icon: "📝"
    },
    {
      id: 7,
      name: "ElevenLabs",
      description: "Generate realistic voices and speech from text using advanced AI voice synthesis technology with natural intonation.",
      category: "Text to Speech",
      upvotes: 143,
      verified: true,
      icon: "🗣️"
    },
    {
      id: 8,
      name: "Canva AI",
      description: "Create professional designs, presentations, and graphics with AI-powered design assistance and smart template suggestions.",
      category: "Design",
      upvotes: 112,
      verified: true,
      icon: "🎨"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2 text-foreground flex items-center">
            <Star className="h-8 w-8 text-yellow-500 mr-3" />
            Featured
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool) => (
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