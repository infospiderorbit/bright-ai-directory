import { Users, Star, Zap, TrendingUp } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: Zap,
      value: "1,200+",
      label: "AI Tools Listed",
      description: "Comprehensive directory"
    },
    {
      icon: Users,
      value: "50K+",
      label: "Happy Users",
      description: "Growing community"
    },
    {
      icon: Star,
      value: "25K+",
      label: "Reviews & Ratings",
      description: "Trusted feedback"
    },
    {
      icon: TrendingUp,
      value: "150+",
      label: "New Tools Monthly",
      description: "Always updated"
    }
  ];

  return (
    <section className="py-16 gradient-hero relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Developers & Creators
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Join thousands of users who discover and use the best AI tools every day
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={stat.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-4">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-medium text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-white/70 text-sm">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;