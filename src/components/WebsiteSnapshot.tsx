
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

  // Tool data mapping with site URLs and snapshot images
  const toolDataMapping: Record<string, { siteUrl: string; snapshotUrl: string }> = {
    "Junia AI": { siteUrl: "https://junia.ai", snapshotUrl: "https://i.ibb.co/JWyNRr7W/image.png" },
    "Writesonic": { siteUrl: "https://writesonic.com", snapshotUrl: "https://i.ibb.co/5XbdwJ9Q/image.png" },
    "Aiktp": { siteUrl: "https://aiktp.com/", snapshotUrl: "https://i.ibb.co/TMcnNw3R/image.png" },
    "Durable": { siteUrl: "https://durable.co", snapshotUrl: "https://i.ibb.co/qYM9FKyR/image.png" },
    "GravityWrite": { siteUrl: "https://gravitywrite.com", snapshotUrl: "https://i.ibb.co/nqG2bkCS/image.png" },
    "Squibler": { siteUrl: "https://squibler.io", snapshotUrl: "https://i.ibb.co/PzfnYTWK/image.png" },
    "Dabble": { siteUrl: "https://dabblewriter.com", snapshotUrl: "https://i.ibb.co/mrrv6TB/screenshot.png" },
    "Book by Anyone": { siteUrl: "https://bookbyanyone.com", snapshotUrl: "https://i.ibb.co/8pZpYwc/screenshot.png" },
    "EbookMaker": { siteUrl: "https://ebookmaker.ai", snapshotUrl: "https://i.ibb.co/RGSNZ30N/screenshot.png" },
    "Automateed": { siteUrl: "https://automateed.com", snapshotUrl: "https://i.ibb.co/4R9KBZfr/screenshot.png" },
    "Submagic": { siteUrl: "https://submagic.co", snapshotUrl: "https://i.ibb.co/fGnY7sQW/screenshot.png" },
    "Zeemo": { siteUrl: "https://zeemo.ai", snapshotUrl: "https://i.ibb.co/WW3fcNX4/screenshot.png" },
    "Flick": { siteUrl: "https://www.flick.social/", snapshotUrl: "https://i.ibb.co/jvsXC7Tw/screenshot.png" },
    "Planable": { siteUrl: "https://planable.io", snapshotUrl: "https://i.ibb.co/6Jw4bTry/screenshot.png" },
    "CHAI": { siteUrl: "https://chai.ml", snapshotUrl: "https://i.ibb.co/d4dH6bmh/screenshot.png" },
    "Sharesome AI": { siteUrl: "https://sharesomeai.com", snapshotUrl: "https://i.ibb.co/PKFBVh6/screenshot.png" },
    "Chatfuel": { siteUrl: "https://chatfuel.com", snapshotUrl: "https://i.ibb.co/PsX6G04L/screenshot.png" },
    "Landbot": { siteUrl: "https://landbot.io", snapshotUrl: "https://i.ibb.co/qLDbNqtg/screenshot.png" },
    "Typebot": { siteUrl: "https://www.typebot.io", snapshotUrl: "https://i.ibb.co/HLTKMH1h/screenshot.png" },
    "Contentful": { siteUrl: "https://contentful.com", snapshotUrl: "https://i.ibb.co/Y4qzjKs6/screenshot.png" },
    "Hotpot.ai": { siteUrl: "https://hotpot.ai", snapshotUrl: "https://i.ibb.co/gCBHyw9/screenshot.png" },
    "Unbounce": { siteUrl: "https://unbounce.com", snapshotUrl: "https://i.ibb.co/3mMYWGXN/screenshot.png" },
    "Typli.ai": { siteUrl: "https://typli.ai", snapshotUrl: "https://i.ibb.co/cSL1QpFn/screenshot.png" },
    "nichesss": { siteUrl: "https://nichesss.com", snapshotUrl: "https://i.ibb.co/R4Q16NN8/screenshot.png" },
    "CVwizard": { siteUrl: "https://cvwizard.com", snapshotUrl: "https://i.ibb.co/JRjMpN35/screenshot.png" },
    "Careerflow": { siteUrl: "https://careerflow.ai", snapshotUrl: "https://i.ibb.co/0Rn4S069/screenshot.png" },
    "Kickresume": { siteUrl: "https://kickresume.com", snapshotUrl: "https://i.ibb.co/QjYcnsFZ/screenshot.png" },
    "WonsultingAI": { siteUrl: "https://wonsulting.ai", snapshotUrl: "https://i.ibb.co/wr42z08m/screenshot.png" },
    "Huntr": { siteUrl: "https://huntr.co", snapshotUrl: "https://i.ibb.co/nscxrWB9/screenshot.png" },
    "Sudowrite": { siteUrl: "https://sudowrite.com", snapshotUrl: "https://i.ibb.co/mC7dxsYb/screenshot.png" },
    "Notebook.ai": { siteUrl: "https://notebook.ai", snapshotUrl: "https://i.ibb.co/gLP4pGC6/screenshot.png" },
    "LyricStudio": { siteUrl: "https://lyricstudio.net", snapshotUrl: "https://i.ibb.co/Vc5LJQp9/screenshot.png" },
    "Bedtimestory.ai": { siteUrl: "https://bedtimestory.ai", snapshotUrl: "https://i.ibb.co/Lz6Jr1B7/screenshot.png" },
    "Cowriter": { siteUrl: "https://cowriter.org", snapshotUrl: "https://i.ibb.co/NgVbMrFh/screenshot.png" },
    "VidIQ": { siteUrl: "https://vidiq.com", snapshotUrl: "https://i.ibb.co/cRcBx6x/screenshot.png" },
    "Songtell": { siteUrl: "https://songtell.com", snapshotUrl: "https://i.ibb.co/twbFbpWv/screenshot.png" },
    "Cyanite.ai": { siteUrl: "https://cyanite.ai", snapshotUrl: "https://i.ibb.co/Q35HMdC5/screenshot.png" },
    "Taja AI": { siteUrl: "https://taja.ai", snapshotUrl: "https://i.ibb.co/C3MM1byL/screenshot.png" },
    "Styldod": { siteUrl: "https://styldod.com", snapshotUrl: "https://i.ibb.co/1J6r8QFC/screenshot.png" },
    "Infinite Convo": { siteUrl: "https://infiniteconvo.ai/", snapshotUrl: "https://i.ibb.co/0pK87h4Y/screenshot.png" },
    "AE Studio's Same Day Skunkworks": { siteUrl: "https://www.automatedcombat.com/", snapshotUrl: "https://i.ibb.co/KphvvVfq/screenshot.png" },
    "Designrr": { siteUrl: "https://designrr.io", snapshotUrl: "https://i.ibb.co/VW3nYjqr/screenshot.png" },
    "AI Book Generator": { siteUrl: "https://aibookgenerator.com", snapshotUrl: "https://i.ibb.co/Q7gy5m9V/screenshot.png" },
    "Superhuman": { siteUrl: "https://superhuman.com", snapshotUrl: "https://i.ibb.co/fV0Tpmt8/screenshot.png" },
    "Spark Mail": { siteUrl: "https://sparkmailapp.com", snapshotUrl: "https://i.ibb.co/kpTSpY0/screenshot.png" },
    "Shortwave": { siteUrl: "https://shortwave.com", snapshotUrl: "https://i.ibb.co/F4qqFy51/screenshot.png" },
    "Success.ai": { siteUrl: "https://success.ai", snapshotUrl: "https://i.ibb.co/7dv7dQQB/screenshot.png" },
    "TeraBox": { siteUrl: "https://terabox.com", snapshotUrl: "https://i.ibb.co/8gKYCsQS/screenshot.png" },
    "Jenni AI": { siteUrl: "https://jenni.ai", snapshotUrl: "https://i.ibb.co/m5hvqQH7/screenshot.png" },
    "Supa": { siteUrl: "https://supa.so", snapshotUrl: "https://i.ibb.co/MkHwz1Pr/screenshot.png" },
    "Writeless": { siteUrl: "https://writeless.ai", snapshotUrl: "https://i.ibb.co/ZR49zQNf/screenshot.png" },
    "Perfectessaywriter.ai": { siteUrl: "https://perfectessaywriter.ai", snapshotUrl: "https://i.ibb.co/YF1xWmT0/screenshot.png" },
    "tosh TV Shows": { siteUrl: "https://moreepisodes.com/", snapshotUrl: "https://i.ibb.co/9mNWJ0Bx/screenshot.png" },
    "LanguageTool": { siteUrl: "https://languagetool.org", snapshotUrl: "https://i.ibb.co/zHt9hL3G/screenshot.png" },
    "QuillBot": { siteUrl: "https://quillbot.com", snapshotUrl: "https://i.ibb.co/7tcMf68Y/screenshot.png" },
    "Grammarly": { siteUrl: "https://grammarly.com", snapshotUrl: "https://i.ibb.co/CKMmX377/screenshot.png" },
    "ProWritingAid": { siteUrl: "https://prowritingaid.com", snapshotUrl: "https://i.ibb.co/B7XkKmQ/screenshot.png" },
    "TopPDF": { siteUrl: "https://www.toppdf.co/", snapshotUrl: "https://i.ibb.co/2YhS6drV/screenshot.png" },
    "Image Describer": { siteUrl: "https://imagedescriber.online/", snapshotUrl: "https://i.ibb.co/21mS653m/screenshot.png" },
    "Describe Image & Picture - AI Image Description, Markdown, and Text Converter": { siteUrl: "https://describepicture.org/", snapshotUrl: "https://i.ibb.co/DHnTH1gp/screenshot.png" },
    "AltText.ai": { siteUrl: "https://alttext.ai", snapshotUrl: "https://i.ibb.co/1Gwz06NB/screenshot.png" },
    "Continual Engine": { siteUrl: "https://continualengine.com", snapshotUrl: "https://i.ibb.co/xK4qJSNX/screenshot.png" },
    "Visionati": { siteUrl: "https://visionati.com", snapshotUrl: "https://i.ibb.co/N2fdpqsL/screenshot.png" },
    "InspiroBot": { siteUrl: "https://inspirobot.me", snapshotUrl: "https://i.ibb.co/cSCY9ksG/screenshot.png" },
    "Capybara Affirmations AI": { siteUrl: "https://capybaraaffirmations.ai/", snapshotUrl: "https://i.ibb.co/9HTBtsZc/screenshot.png" },
    "Recruit CRM": { siteUrl: "https://recruitcrm.io", snapshotUrl: "https://i.ibb.co/jk3sKyDf/screenshot.png" },
    "Jobed": { siteUrl: "https://jobed.ai", snapshotUrl: "https://i.ibb.co/cSjbcYVv/screenshot.png" },
    "Helio.AI": { siteUrl: "https://helio.ai", snapshotUrl: "https://i.ibb.co/7ddS75nD/screenshot.png" },
    "Loubby AI": { siteUrl: "https://loubby.ai", snapshotUrl: "https://i.ibb.co/6chT6wYG/screenshot.png" },
    "recruitRyte": { siteUrl: "https://recruitryte.com", snapshotUrl: "https://i.ibb.co/39wNBncD/screenshot.png" },
    "Dispute Panda": { siteUrl: "https://disputepanda.com", snapshotUrl: "https://i.ibb.co/G3GRsz2G/screenshot.png" },
    "Dear Ai": { siteUrl: "https://dearai.xyz/", snapshotUrl: "https://i.ibb.co/Q7SJkHnT/screenshot.png" },
    "iQuit.ai": { siteUrl: "https://iquit.ai", snapshotUrl: "https://i.ibb.co/TDfLHHQG/screenshot.png" },
    "Wonderful Valemtimes": { siteUrl: "https://valemtimes.com/", snapshotUrl: "https://i.ibb.co/zTKDwzZK/screenshot.png" },
    "Love Letter Generator": { siteUrl: "https://lovelettergenerator.com", snapshotUrl: "https://i.ibb.co/xt1kMZrn/screenshot.png" },
    "Texts": { siteUrl: "https://texts.com", snapshotUrl: "https://i.ibb.co/wZgS1MG5/screenshot.png" },
    "CelebrateAlly": { siteUrl: "https://celebrateally.com", snapshotUrl: "https://i.ibb.co/YTqVZrH6/screenshot.png" },
    "Heartstring AI": { siteUrl: "https://heartstring.ai", snapshotUrl: "https://i.ibb.co/pjtDdYr2/screenshot.png" }
  };

  useEffect(() => {
    const toolData = toolDataMapping[toolName];
    
    console.log('WebsiteSnapshot - toolName:', toolName);
    console.log('WebsiteSnapshot - toolData:', toolData);
    
    if (!toolData) {
      console.log('WebsiteSnapshot - No tool data found for:', toolName);
      setIsLoading(false);
      setHasError(true);
      return;
    }

    // Test if the image loads
    const img = new Image();
    img.onload = () => {
      console.log('WebsiteSnapshot - Image loaded successfully:', toolData.snapshotUrl);
      setIsLoading(false);
      setHasError(false);
      setScreenshotUrl(toolData.snapshotUrl);
    };
    img.onerror = () => {
      console.log(`WebsiteSnapshot - Screenshot failed for ${toolName}:`, toolData.snapshotUrl);
      setHasError(true);
      setIsLoading(false);
    };
    img.src = toolData.snapshotUrl;
  }, [toolName]);

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

  const toolData = toolDataMapping[toolName];

  if (hasError || !toolData) {
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
        {toolData && (
          <Button asChild className="w-full" variant="outline">
            <a href={toolData.siteUrl} target="_blank" rel="noopener noreferrer nofollow">
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
              console.log(`Screenshot failed for ${toolName}`);
              setHasError(true);
            }}
            loading="lazy"
          />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button asChild variant="secondary" size="lg">
              <a href={toolData.siteUrl} target="_blank" rel="noopener noreferrer nofollow">
                Visit Website
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <Button asChild className="w-full" variant="outline">
        <a href={toolData.siteUrl} target="_blank" rel="noopener noreferrer nofollow">
          Visit {toolName}
          <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
  );
};

export default WebsiteSnapshot;
