import { Star, ExternalLink, Heart, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ToolCardProps {
  name: string;
  description: string;
  category: string;
  rating: number;
  reviews: number;
  pricing: string;
  logo: string;
  featured?: boolean;
}

const ToolCard = ({ 
  name, 
  description, 
  category, 
  rating, 
  reviews, 
  pricing, 
  logo, 
  featured = false 
}: ToolCardProps) => {
  return (
    <div className={`group relative bg-card rounded-xl p-6 border transition-smooth hover:shadow-hover hover:-translate-y-1 ${
      featured ? 'ring-2 ring-primary/20 shadow-card' : ''
    }`}>
      {featured && (
        <div className="absolute -top-3 left-4 px-3 py-1 gradient-primary text-white text-xs font-medium rounded-full">
          Featured
        </div>
      )}
      
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center text-2xl font-bold text-primary">
            {logo}
          </div>
          <div>
            <h3 className="font-semibold text-lg group-hover:text-primary transition-smooth">
              {name}
            </h3>
            <Badge variant="secondary" className="text-xs">
              {category}
            </Badge>
          </div>
        </div>
        
        <div className="flex space-x-1">
          <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-smooth">
            <Heart className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-smooth">
            <Bookmark className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <p className="text-muted-foreground mb-4 line-clamp-2">
        {description}
      </p>
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="font-medium">{rating}</span>
          <span className="text-muted-foreground text-sm">({reviews})</span>
        </div>
        
        <div className="text-sm font-medium text-primary">
          {pricing}
        </div>
      </div>
      
      <Button className="w-full group-hover:gradient-primary group-hover:text-white transition-smooth" variant="outline">
        View Tool
        <ExternalLink className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

export default ToolCard;