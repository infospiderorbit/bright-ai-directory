import { Search, Twitter, Linkedin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface FilterSearchProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const FilterSearch = ({ selectedCategory, onCategoryChange }: FilterSearchProps) => {
  const categories = [
    "All Categories",
    "Writing & Editing",
    "Image Generation & Editing", 
    "Music & Audio", 
    "Voice Generation & Conversion", 
    "Art & Creative Design", 
    "Social Media", 
    "AI Detection & Anti-Detection", 
    "Coding & Development", 
    "Video & Animation", 
    "Daily Life", 
    "Legal & Finance", 
    "Business Management", 
    "Marketing & Advertising", 
    "Health & Wellness", 
    "Business Research", 
    "Education & Translation", 
    "Office & Productivity", 
    "Research & Data Analysis", 
    "Other"
  ];

  const filterTags = ["Free AI", "Freemium", "Paid", "Free Trial"];

  return (
    <section className="bg-gradient-to-b from-secondary/30 to-background py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 flex-wrap">
          {/* Search Bar */}
          <div className="relative flex-1 min-w-[300px]">
            <Input
              type="text"
              placeholder="Search over 5000+ AI tools..."
              className="pl-10 pr-4 py-2 rounded-full border border-muted bg-white/80 backdrop-blur-sm focus:border-primary"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          </div>
          
          {/* Social Media Icons */}
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="rounded-full w-8 h-8">
              <Twitter className="h-3 w-3" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full w-8 h-8">
              <Linkedin className="h-3 w-3" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full w-8 h-8">
              <span className="text-xs font-bold">R</span>
            </Button>
          </div>

          {/* Categories Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="rounded-full px-4 py-2 bg-white/80 backdrop-blur-sm">
                {selectedCategory}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 max-h-64 overflow-y-auto bg-white/95 backdrop-blur-sm border border-border/50">
              {categories.map((category, index) => (
                <DropdownMenuItem 
                  key={index} 
                  className="cursor-pointer hover:bg-primary/10 focus:bg-primary/10"
                  onClick={() => onCategoryChange(category)}
                >
                  {category}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Pricing Filter Tags */}
          <div className="flex gap-2">
            {filterTags.map((tag, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="rounded-full px-4 py-1 bg-white/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-colors text-sm"
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