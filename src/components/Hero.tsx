import { Search, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-blue-900/40" />
      </div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-20 animate-float" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Zap className="h-4 w-4 mr-2 text-yellow-400" />
            <span className="text-sm text-white">Discover 1000+ AI Tools</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Find the Perfect
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              AI Tool
            </span>
            for Your Needs
          </h1>
          
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Discover, compare, and choose from the world's largest collection of AI tools. 
            From writing assistants to image generators.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative flex items-center">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Search AI tools (e.g., writing, image generation, data analysis...)"
                  className="pl-12 pr-4 py-6 text-lg bg-white/95 backdrop-blur-sm border-0 rounded-l-xl focus:ring-2 focus:ring-primary"
                />
              </div>
              <Button 
                size="lg" 
                className="gradient-primary text-white border-0 rounded-r-xl px-8 py-6 hover:shadow-hover transition-smooth"
              >
                Search
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Popular searches */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-white/60 text-sm">Popular:</span>
            {['ChatGPT', 'Midjourney', 'Notion AI', 'Grammarly', 'Canva AI'].map((tool) => (
              <button key={tool} className="px-3 py-1 rounded-full bg-white/10 text-white text-sm hover:bg-white/20 transition-smooth">
                {tool}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;