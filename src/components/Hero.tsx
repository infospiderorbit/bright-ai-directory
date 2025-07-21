import { Sparkles, Zap, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-background via-secondary/10 to-accent/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Discover 5000+ AI Tools</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-foreground">
            The Ultimate Directory for
            <br />
            <span className="bg-gradient-to-r from-primary via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              AI Tools & Tutorials
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Find the perfect AI tool for your needs. From productivity enhancers to creative assistants, 
            we've curated the best AI solutions with detailed reviews and tutorials.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border">
              <Zap className="h-4 w-4 text-primary" />
              <span className="font-medium">5000+ Tools Listed</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span className="font-medium">Daily Updates</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border">
              <div className="w-4 h-4 rounded-full bg-green-500" />
              <span className="font-medium">100% Free Access</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;