import ToolCard from "./ToolCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";

const FeaturedTools = () => {
  const featuredTools = [
    {
      name: "ChatGPT",
      description: "Advanced AI chatbot for conversations, writing, coding, and problem-solving with human-like responses.",
      category: "Conversational AI",
      rating: 4.8,
      reviews: 15420,
      pricing: "Free + Paid",
      logo: "🤖",
      featured: true
    },
    {
      name: "Midjourney",
      description: "Create stunning, artistic images from text descriptions using state-of-the-art AI image generation.",
      category: "Image Generation",
      rating: 4.9,
      reviews: 8750,
      pricing: "$10/month",
      logo: "🎨",
      featured: true
    },
    {
      name: "Notion AI",
      description: "Enhance your productivity with AI-powered writing, brainstorming, and content organization.",
      category: "Productivity",
      rating: 4.7,
      reviews: 5230,
      pricing: "$10/month",
      logo: "📝"
    },
    {
      name: "GitHub Copilot",
      description: "AI pair programmer that helps you write code faster with intelligent suggestions and completions.",
      category: "Development",
      rating: 4.6,
      reviews: 12800,
      pricing: "$10/month",
      logo: "💻"
    },
    {
      name: "Grammarly",
      description: "AI writing assistant that checks grammar, spelling, and style to improve your writing quality.",
      category: "Writing",
      rating: 4.5,
      reviews: 25600,
      pricing: "Free + Paid",
      logo: "✍️"
    },
    {
      name: "Canva AI",
      description: "Design beautiful graphics, presentations, and visual content with AI-powered design tools.",
      category: "Design",
      rating: 4.6,
      reviews: 18900,
      pricing: "Free + Paid",
      logo: "🎨"
    }
  ];

  return (
    <section className="py-16 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <TrendingUp className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Trending Now</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured AI Tools
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the most popular and powerful AI tools trusted by millions of users worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredTools.map((tool, index) => (
            <div key={tool.name} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ToolCard {...tool} />
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" className="gradient-primary text-white border-0 hover:shadow-hover transition-smooth">
            Explore All Tools
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTools;