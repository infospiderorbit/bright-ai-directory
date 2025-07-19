import { 
  MessageSquare, 
  Image, 
  Code, 
  FileText, 
  Video, 
  Music, 
  BarChart3, 
  Brain,
  Palette,
  Camera,
  PenTool,
  Zap
} from "lucide-react";

const Categories = () => {
  const categories = [
    { name: "Conversational AI", icon: MessageSquare, count: 156, color: "from-blue-500 to-purple-500" },
    { name: "Image Generation", icon: Image, count: 89, color: "from-purple-500 to-pink-500" },
    { name: "Code Assistant", icon: Code, count: 67, color: "from-green-500 to-blue-500" },
    { name: "Writing & Content", icon: FileText, count: 134, color: "from-orange-500 to-red-500" },
    { name: "Video & Animation", icon: Video, count: 45, color: "from-red-500 to-pink-500" },
    { name: "Audio & Music", icon: Music, count: 32, color: "from-purple-500 to-blue-500" },
    { name: "Data & Analytics", icon: BarChart3, count: 78, color: "from-blue-500 to-cyan-500" },
    { name: "Machine Learning", icon: Brain, count: 56, color: "from-cyan-500 to-green-500" },
    { name: "Design Tools", icon: Palette, count: 92, color: "from-pink-500 to-orange-500" },
    { name: "Photo Editing", icon: Camera, count: 41, color: "from-green-500 to-blue-500" },
    { name: "Creative Tools", icon: PenTool, count: 63, color: "from-yellow-500 to-orange-500" },
    { name: "Automation", icon: Zap, count: 85, color: "from-purple-500 to-cyan-500" }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Browse by Category
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find AI tools organized by use case and functionality
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.name}
                className="group p-6 rounded-xl border bg-card hover:shadow-hover transition-smooth cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} p-3 mb-4 group-hover:scale-110 transition-smooth`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="font-semibold mb-1 group-hover:text-primary transition-smooth">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.count} tools
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;