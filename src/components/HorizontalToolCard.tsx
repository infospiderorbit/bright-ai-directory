import { ExternalLink, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { toolsProductInfoData } from "@/data/toolsProductInfo";

interface HorizontalToolCardProps {
  name: string;
  description: string;
  logo: string;
  url: string;
  toolSlug: string;
  rating?: number;
  reviewsCount?: number;
  category?: string;
  showAlternativesLink?: boolean;
}

const HorizontalToolCard = ({ 
  name, 
  description, 
  logo, 
  url,
  toolSlug,
  rating,
  reviewsCount,
  category,
  showAlternativesLink = false
}: HorizontalToolCardProps) => {
  // Truncate description to approximately 2-3 sentences (around 350 characters)
  const truncatedDescription = description.length > 350 
    ? description.substring(0, 347) + "..." 
    : description;

  // Get pricing info from toolsProductInfo
  const productInfo = toolsProductInfoData[toolSlug];
  const pricingPlans = productInfo?.pricing?.plans || [];
  
  // Determine pricing display
  let pricingText = "Free";
  if (pricingPlans.length > 0) {
    const hasFree = pricingPlans.some((plan: any) => 
      plan.price?.toLowerCase().includes('free') || plan.name?.toLowerCase().includes('free')
    );
    const paidPlans = pricingPlans.filter((plan: any) => 
      !plan.price?.toLowerCase().includes('free') && !plan.name?.toLowerCase().includes('free')
    );
    
    if (hasFree && paidPlans.length > 0) {
      pricingText = "Freemium";
      // Try to find the lowest price
      const prices = paidPlans
        .map((plan: any) => {
          const match = plan.price?.match(/\$(\d+(?:\.\d+)?)/);
          return match ? parseFloat(match[1]) : null;
        })
        .filter((price: number | null) => price !== null);
      
      if (prices.length > 0) {
        const minPrice = Math.min(...prices);
        pricingText = `Freemium – from $${minPrice}/month`;
      }
    } else if (paidPlans.length > 0) {
      const prices = paidPlans
        .map((plan: any) => {
          const match = plan.price?.match(/\$(\d+(?:\.\d+)?)/);
          return match ? parseFloat(match[1]) : null;
        })
        .filter((price: number | null) => price !== null);
      
      if (prices.length > 0) {
        const minPrice = Math.min(...prices);
        pricingText = `From $${minPrice}/month`;
      } else {
        pricingText = "Paid";
      }
    }
  }

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
          
          {/* Rating and Meta Line */}
          <div className="flex items-center gap-3 text-sm">
            {/* Rating */}
            {rating && (
              <div className="flex items-center gap-1 text-foreground">
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <span className="font-medium">{rating}</span>
                {reviewsCount && (
                  <span className="text-muted-foreground">({reviewsCount})</span>
                )}
              </div>
            )}
            
            {/* Category and Pricing */}
            {category && (
              <>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">{category}</span>
              </>
            )}
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">{pricingText}</span>
          </div>
          
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
            {truncatedDescription}
          </p>

          <div className="flex items-center gap-3">
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
      
      {/* Optional Alternatives Link at Bottom */}
      {showAlternativesLink && (
        <div className="border-t border-border px-6 py-3">
          <Link 
            to={`/alternatives/${toolSlug}`}
            className="text-sm text-primary hover:underline inline-flex items-center gap-1"
          >
            {name} Alternatives
          </Link>
        </div>
      )}
    </div>
  );
};

export default HorizontalToolCard;
