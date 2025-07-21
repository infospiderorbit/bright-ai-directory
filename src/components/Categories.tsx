import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, TrendingUp, Gift, Sparkles } from "lucide-react";

const Categories = () => {
  const categorySlides = [
    {
      title: "Latest AI",
      description: "Discover the newest AI tools and innovations",
      icon: Sparkles,
      count: "500+ tools",
      bgClass: "bg-gradient-to-br from-primary/10 to-primary/5"
    },
    {
      title: "Aitoolsprime Selection",
      description: "Handpicked premium AI tools for professionals",
      icon: Star,
      count: "Featured",
      bgClass: "bg-gradient-to-br from-accent/20 to-accent/10"
    },
    {
      title: "Popular This Week",
      description: "Trending AI tools loved by our community",
      icon: TrendingUp,
      count: "Top picks",
      bgClass: "bg-gradient-to-br from-secondary/30 to-secondary/15"
    },
    {
      title: "Free AI Tools",
      description: "Powerful AI tools available at no cost",
      icon: Gift,
      count: "100% free",
      bgClass: "bg-gradient-to-br from-muted/40 to-muted/20"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-foreground">
            Browse by Category
          </h2>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="rounded-full shadow-card">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full shadow-card">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categorySlides.map((slide, index) => {
            const IconComponent = slide.icon;
            return (
              <div
                key={index}
                className={`relative overflow-hidden p-8 h-56 cursor-pointer transition-all duration-300 hover:shadow-hover hover:scale-105 rounded-2xl ${slide.bgClass} border border-border/30 backdrop-blur-sm group`}
              >
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {slide.count}
                      </span>
                    </div>
                    
                    <h3 className="font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
                      {slide.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-end">
                    <Button variant="ghost" size="sm" className="text-xs text-primary hover:text-primary-foreground hover:bg-primary">
                      Explore →
                    </Button>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;