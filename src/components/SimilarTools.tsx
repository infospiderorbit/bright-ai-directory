import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import HorizontalToolCard from "./HorizontalToolCard";
import { toolsData } from "@/data/toolsData";
import { categoriesData } from "@/data/categoriesData";

interface SimilarToolsProps {
  currentToolId: string;
  category: string;
  subcategory: string;
  toolName: string;
}

const SimilarTools = ({ currentToolId, category, subcategory, toolName }: SimilarToolsProps) => {
  // Get all tools from the same subcategory
  const tools = toolsData[category]?.[subcategory] || [];
  
  // Filter out the current tool and limit to 4 similar tools
  const similarTools = tools
    .filter(tool => tool.id !== currentToolId)
    .slice(0, 4);

  // Get subcategory title for category display
  const subcategoryData = categoriesData[category]?.subcategories?.[subcategory];

  // Don't render if there are no similar tools
  if (similarTools.length === 0) {
    return null;
  }

  return (
    <div className="max-w-6xl mx-auto bg-card rounded-lg shadow-lg border border-border p-8 mb-8">
      <div className="mb-6">
        <Link 
          to={`/alternatives/${currentToolId}`}
          className="group inline-flex items-center gap-2 hover:gap-3 transition-all"
        >
          <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
            🔎 Similar to '{toolName}'
          </h2>
          <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </Link>
      </div>

      <div className="grid gap-4">
        {similarTools.map((tool) => (
          <HorizontalToolCard
            key={tool.id}
            name={tool.name}
            description={tool.description}
            logo={tool.icon}
            url={tool.url || `https://www.aitoolsprime.com/${tool.id}`}
            toolSlug={tool.id}
            rating={tool.rating}
            reviewsCount={tool.reviewsCount}
            category={subcategoryData?.title || 'AI Tools'}
            showAlternativesLink={false}
          />
        ))}
      </div>

      <div className="mt-6 text-center">
        <Link 
          to={`/alternatives/${currentToolId}`}
          className="text-primary hover:underline font-medium inline-flex items-center gap-1"
        >
          View all alternatives
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default SimilarTools;
