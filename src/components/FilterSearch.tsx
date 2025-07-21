import { Search, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const FilterSearch = () => {
  const categories = [
    "3D Model (81)", "AI Agents (96)", "AI Chat & Assistant (40)", "Avatars (59)", 
    "Business (213)", "Marketing (141)", "Productivity (256)", "Text to Speech (80)", 
    "Image Generators (221)", "Video Generators (134)", "Code Assistant (89)", 
    "Writing (167)", "Audio (92)", "Design (156)", "Analytics (78)"
  ];

  const filterTags = ["Free AI", "Freemium", "Paid", "Free Trial"];

  return (
    <section className="bg-gradient-to-b from-secondary/30 to-background py-12">
      <div className="container mx-auto px-4">
        {/* Search Bar and Social */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
          <div className="relative flex-1 max-w-2xl">
            <Input
              type="text"
              placeholder="Search over 5000+ AI tools..."
              className="pl-12 pr-4 py-3 text-lg rounded-full border-2 border-muted bg-white/80 backdrop-blur-sm focus:border-primary shadow-sm"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          </div>
          <Button className="gradient-primary text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all">
            Search
          </Button>
          
          <div className="flex items-center gap-3 ml-4">
            <Button variant="outline" size="icon" className="rounded-full w-10 h-10">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full w-10 h-10">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full w-10 h-10">
              <span className="text-sm font-bold">R</span>
            </Button>
          </div>
        </div>

        {/* Category Buttons */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4 text-foreground">Categories</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 rounded-full cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors bg-white/80 backdrop-blur-sm border text-sm"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Filter Tags */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-foreground">Pricing</h3>
          <div className="flex flex-wrap gap-3">
            {filterTags.map((tag, index) => (
              <Button
                key={index}
                variant="outline"
                className="rounded-full px-6 py-2 bg-white/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterSearch;