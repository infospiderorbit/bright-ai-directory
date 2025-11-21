import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HorizontalToolCardProps {
  name: string;
  description: string;
  logo: string;
  url: string;
  toolSlug: string;
}

const HorizontalToolCard = ({ 
  name, 
  description, 
  logo, 
  url,
  toolSlug
}: HorizontalToolCardProps) => {
  // Truncate description to approximately 3-4 lines (around 200 characters)
  const truncatedDescription = description.length > 200 
    ? description.substring(0, 197) + "..." 
    : description;

  return (
    <div className="group bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg overflow-hidden">
      <div className="flex items-start gap-6 p-6">
        {/* Tool Logo/Icon */}
        <Link to={`/${toolSlug}`} className="flex-shrink-0">
          <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-3xl border border-border group-hover:border-primary/30 transition-all">
            {logo}
          </div>
        </Link>

        {/* Tool Content */}
        <div className="flex-1 min-w-0 space-y-3">
          <Link to={`/${toolSlug}`}>
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
              {name}
            </h3>
          </Link>
          
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
            {truncatedDescription}
          </p>

          <Button 
            asChild 
            variant="outline" 
            size="sm" 
            className="group-hover:border-primary group-hover:text-primary transition-colors"
          >
            <a href={url} target="_blank" rel="noopener noreferrer">
              Visit Tool
              <ExternalLink className="ml-2 h-3.5 w-3.5" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalToolCard;
