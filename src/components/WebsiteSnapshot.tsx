
import { useState, useEffect } from "react";
import { ExternalLink, Loader2, Globe } from "lucide-react";
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
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  // More reliable screenshot services with better fallbacks
  const screenshotServices = [
    (url: string) => `https://api.screenshotmachine.com/?key=demo&url=${encodeURIComponent(url)}&dimension=1200x800`,
    (url: string) => `https://image.thum.io/get/width/1200/crop/800/noanimate/${encodeURIComponent(url)}`,
    (url: string) => `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1200&h=800`,
    (url: string) => `https://api.urlbox.io/v1/demo/png?url=${encodeURIComponent(url)}&width=1200&height=800`,
    (url: string) => `https://htmlcsstoimage.com/demo_images/image.png?url=${encodeURIComponent(url)}&width=1200&height=800`
  ];

  useEffect(() => {
    if (!toolUrl || toolUrl === "") {
      setIsLoading(false);
      setHasError(true);
      return;
    }

    const tryNextService = (serviceIndex: number) => {
      if (serviceIndex >= screenshotServices.length) {
        setHasError(true);
        setIsLoading(false);
        return;
      }

      const serviceUrl = screenshotServices[serviceIndex](toolUrl);
      setScreenshotUrl(serviceUrl);
      setCurrentServiceIndex(serviceIndex);
      
      // Test if the image loads
      const img = new Image();
      img.onload = () => {
        setIsLoading(false);
        setHasError(false);
      };
      img.onerror = () => {
        console.log(`Screenshot service ${serviceIndex} failed for ${toolUrl}`);
        // Try next service after a short delay
        setTimeout(() => tryNextService(serviceIndex + 1), 1000);
      };
      img.src = serviceUrl;
    };

    setIsLoading(true);
    setHasError(false);
    
    // Start with first service
    tryNextService(0);
  }, [toolUrl]);

  if (isLoading) {
    return (
      <div className="space-y-3">
        <div className="aspect-[4/3] bg-muted rounded-lg border border-border overflow-hidden flex items-center justify-center">
          <div className="text-center space-y-3">
            <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto" />
            <p className="text-sm text-muted-foreground">Generating preview...</p>
          </div>
        </div>
        <Skeleton className="h-10 w-full" />
      </div>
    );
  }

  if (hasError || !toolUrl) {
    return (
      <div className="space-y-3">
        <div className="aspect-[4/3] bg-muted rounded-lg border border-border overflow-hidden">
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-background to-muted">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-xl mx-auto flex items-center justify-center">
                <Globe className="h-8 w-8 text-primary/60" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-foreground">Preview Not Available</p>
                <p className="text-xs text-muted-foreground">Click below to visit the website</p>
              </div>
            </div>
          </div>
        </div>
        {toolUrl && (
          <Button asChild className="w-full" variant="outline">
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
            onError={() => {
              console.log(`Screenshot failed for service ${currentServiceIndex}`);
              // Try next service
              if (currentServiceIndex < screenshotServices.length - 1) {
                const nextServiceUrl = screenshotServices[currentServiceIndex + 1](toolUrl!);
                setScreenshotUrl(nextServiceUrl);
                setCurrentServiceIndex(currentServiceIndex + 1);
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
