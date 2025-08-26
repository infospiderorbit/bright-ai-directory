import { useState, useEffect } from "react";
import { ExternalLink, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface WebsiteSnapshotProps {
  toolUrl?: string;
  toolName: string;
}

const WebsiteSnapshot = ({ toolUrl, toolName }: WebsiteSnapshotProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [screenshotUrl, setScreenshotUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!toolUrl || toolUrl === "") {
      setIsLoading(false);
      setHasError(true);
      return;
    }

    const fetchScreenshot = async () => {
      try {
        setIsLoading(true);
        setHasError(false);
        
        const screenshotServices = [
          `https://s.wordpress.com/mshots/v1/${encodeURIComponent(toolUrl)}?w=1200`,
          `https://image.thum.io/get/width/1200/crop/800/noanimate/${encodeURIComponent(toolUrl)}`,
          `https://mini.s-shot.ru/1200x800/1024/jpeg/?${encodeURIComponent(toolUrl)}`
        ];
        
        // Try the first service
        setScreenshotUrl(screenshotServices[0]);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to generate screenshot:', error);
        setHasError(true);
        setIsLoading(false);
      }
    };

    // Add a small delay to improve loading experience
    const timer = setTimeout(fetchScreenshot, 500);
    return () => clearTimeout(timer);
  }, [toolUrl]);

  if (isLoading) {
    return (
      <div className="space-y-3">
        <Skeleton className="aspect-[4/3] w-full rounded-lg" />
        <Skeleton className="h-10 w-full" />
      </div>
    );
  }

  if (hasError || !toolUrl) {
    return (
      <div className="relative group cursor-pointer">
        <div className="aspect-[4/3] bg-muted rounded-lg border border-border overflow-hidden">
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-background to-muted">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-xl mx-auto flex items-center justify-center">
                <ExternalLink className="h-8 w-8 text-primary/60" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-foreground">No Preview Available</p>
                <p className="text-xs text-muted-foreground">Visit the official website</p>
              </div>
            </div>
          </div>
        </div>
        {toolUrl && (
          <Button asChild className="w-full mt-3" variant="outline">
            <a href={toolUrl} target="_blank" rel="noopener noreferrer">
              Visit {toolName}
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="relative group cursor-pointer">
        <div className="aspect-[4/3] bg-muted rounded-lg border border-border overflow-hidden">
          <img
            src={screenshotUrl}
            alt={`${toolName} website screenshot`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              // Try fallback services if the first one fails
              const currentSrc = e.currentTarget.src;
              if (currentSrc.includes('s.wordpress.com')) {
                e.currentTarget.src = `https://image.thum.io/get/width/1200/crop/800/noanimate/${encodeURIComponent(toolUrl!)}`;
              } else if (currentSrc.includes('image.thum.io')) {
                e.currentTarget.src = `https://mini.s-shot.ru/1200x800/1024/jpeg/?${encodeURIComponent(toolUrl!)}`;
              } else {
                setHasError(true);
              }
            }}
            loading="lazy"
          />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button asChild variant="secondary" size="lg">
              <a href={toolUrl} target="_blank" rel="noopener noreferrer">
                Visit Website
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <Button asChild className="w-full" variant="outline">
        <a href={toolUrl} target="_blank" rel="noopener noreferrer">
          Visit {toolName}
          <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
  );
};

export default WebsiteSnapshot;