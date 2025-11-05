import { useState, useEffect } from "react";
import { ExternalLink, Loader2, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import hyperwriteSnapshot from "@/assets/hyperwrite-snapshot.png";
import chatupAiSnapshot from "@/assets/chatup-ai-snapshot.png";

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
    "NolanAI": { siteUrl: "https://nolanai.app", snapshotUrl: "https://i.ibb.co/XZgtWMqD/image.png" },
    "filmassistant.io": { siteUrl: "https://filmassistant.io", snapshotUrl: "https://i.ibb.co/BHFqnN1Q/image.png" },
    "AIScreenwriter": { siteUrl: "https://aiscreenwriter.com", snapshotUrl: "https://i.ibb.co/QFQ9tSNy/image.png" },
    "Namelix": { siteUrl: "https://namelix.com", snapshotUrl: "https://i.ibb.co/1t0Hh3nr/image.png" },
    "DnD Name Generator": { siteUrl: "https://fantasynamegenerators.com/dnd.php", snapshotUrl: "https://i.ibb.co/wrQwK7Hb/image.png" },
    "RandomX.ai": { siteUrl: "https://randomx.ai", snapshotUrl: "https://i.ibb.co/Xr52VF6j/image.png" },
    "Contrast": { siteUrl: "https://contrast.app", snapshotUrl: "https://i.ibb.co/6RGjDcF2/image.png" },
    "Hoppy Copy": { siteUrl: "https://hoppycopy.co", snapshotUrl: "https://i.ibb.co/qM3gJRV1/image.png" },
    "Promo.ai": { siteUrl: "https://promo.ai", snapshotUrl: "https://i.ibb.co/Y7qT9jp6/image.png" },
    "Auto Mailer": { siteUrl: "https://automailer.ai", snapshotUrl: "https://i.ibb.co/qL77g8r3/image.png" },
    "Squibler": { siteUrl: "https://squibler.io", snapshotUrl: "https://i.ibb.co/QFNR664X/image.png" },
    "MidReal": { siteUrl: "https://midreal.ai", snapshotUrl: "https://i.ibb.co/TM5bYzH0/image.png" },
    "NovelistAI": { siteUrl: "https://novelistai.com", snapshotUrl: "https://i.ibb.co/PZ7sM7Nn/image.png" },
    "Surfer": { siteUrl: "https://surferseo.com", snapshotUrl: "https://i.ibb.co/5hb9QMn1/image.png" },
    "Reflect Notes": { siteUrl: "https://reflect.app", snapshotUrl: "https://i.ibb.co/HfFxtt8h/image.png" },
    "MyEssayWriter.ai": { siteUrl: "https://myessaywriter.ai", snapshotUrl: "https://i.ibb.co/Pv8kHFB9/image.png" },
    "Subtxt": { siteUrl: "https://subtxt.app", snapshotUrl: "https://i.ibb.co/9HmbjBJz/image.png" },
    "Superblog": { siteUrl: "https://superblog.ai", snapshotUrl: "https://i.ibb.co/WNFd0s3V/image.png" },
    "AI Paragraph Generator": { siteUrl: "https://ai-paragraph-generator.com/", snapshotUrl: "https://i.ibb.co/YFF8qRXQ/image.png" },
    "Ai Paragraph Generator": { siteUrl: "https://aiparagraphgenerator.com", snapshotUrl: "https://i.ibb.co/jkGyBcw1/image.png" },
    "Free Paraphrasing Tool": { siteUrl: "https://www.toolsmart.ai/feature-free-paraphrasing-tool/", snapshotUrl: "https://i.ibb.co/4n8mFRx5/image.png" },
    "QuillBot": { siteUrl: "https://quillbot.com", snapshotUrl: "https://i.ibb.co/gbgFTFdG/image.png" },
    "Paraphraser.io": { siteUrl: "https://paraphraser.io", snapshotUrl: "https://i.ibb.co/HfZG7G6x/image.png" },
    "LanguageTool": { siteUrl: "https://languagetool.org", snapshotUrl: "https://i.ibb.co/TD95VywR/image.png" },
    "TopPDF": { siteUrl: "https://toppdf.com", snapshotUrl: "https://i.ibb.co/TpJcs7Q/image.png" },
    "IFNovels": { siteUrl: "https://ifnovels.com", snapshotUrl: "https://i.ibb.co/7dpcN0rT/image.png" },
    "Plotlime": { siteUrl: "https://plotlime.com", snapshotUrl: "https://i.ibb.co/twGSbgPZ/image.png" },
    "Lore Sage": { siteUrl: "https://loresage.com", snapshotUrl: "https://i.ibb.co/wZLxGVXm/image.png" },
    "Sudowrite": { siteUrl: "https://sudowrite.com", snapshotUrl: "https://i.ibb.co/9Hvb8QWn/image.png" },
    "Acrostic AI": { siteUrl: "https://acrostic.ai", snapshotUrl: "https://i.ibb.co/H11vFYp/image.png" },
    "PoemGenerator.io": { siteUrl: "https://poemgenerator.io", snapshotUrl: "https://i.ibb.co/sdty6YFj/image.png" },
    "AIEpics": { siteUrl: "https://aiepics.com", snapshotUrl: "https://i.ibb.co/sJMQDjvt/image.png" },
    "Free AI Poem Generator": { siteUrl: "https://freepoemgenerator.com", snapshotUrl: "https://i.ibb.co/6RzjbKR7/image.png" },
    "Hypotenuse AI": { siteUrl: "https://hypotenuse.ai", snapshotUrl: "https://i.ibb.co/B55ZC22f/image.png" },
    "PagePilot.ai": { siteUrl: "https://pagepilot.ai", snapshotUrl: "https://i.ibb.co/WCdPN0J/image.png" },
    "MyDesigns.io": { siteUrl: "https://mydesigns.io", snapshotUrl: "https://i.ibb.co/P80mZsC/image.png" },
    "POKY - Product Importer": { siteUrl: "https://poky.app/", snapshotUrl: "https://i.ibb.co/JFjPGL1H/image.png" },
    "InsightFactor": { siteUrl: "https://insightfactory.app/", snapshotUrl: "https://i.ibb.co/JRhmwWmV/image.png" },
    "FlowGPT": { siteUrl: "https://flowgpt.com", snapshotUrl: "https://i.ibb.co/tT6DSr7K/image.png" },
    "AIPRM": { siteUrl: "https://aiprm.com", snapshotUrl: "https://i.ibb.co/674Y2xKh/image.png" },
    "ImagePrompt.org": { siteUrl: "https://imageprompt.org", snapshotUrl: "https://i.ibb.co/277Zrsrp/image.png" },
    "PromptBase": { siteUrl: "https://promptbase.com", snapshotUrl: "https://i.ibb.co/C5wqsYg6/image.png" },
    "200+ ChatGPT Mega-Prompts for Solopreneurs": { siteUrl: "https://www.godofprompt.ai/solopreneurs-mega-prompts?", snapshotUrl: "https://i.ibb.co/RkfW5YjB/image.png" },
    "Scribbr": { siteUrl: "https://scribbr.com", snapshotUrl: "https://i.ibb.co/YFGmN3PV/image.png" },
    "Writefull": { siteUrl: "https://writefull.com", snapshotUrl: "https://i.ibb.co/6R3MTVdh/image.png" },
    "editGPT": { siteUrl: "https://editgpt.app", snapshotUrl: "https://i.ibb.co/mFH9CFf8/image.png" },
    "Trinka AI": { siteUrl: "https://trinka.ai", snapshotUrl: "https://i.ibb.co/svgGy9pn/image.png" },
    "Katteb AI": { siteUrl: "https://katteb.com", snapshotUrl: "https://i.ibb.co/0y3Lw3NS/image.png" },
    "InspiroBot": { siteUrl: "https://inspirobot.me", snapshotUrl: "https://i.ibb.co/395PjfHQ/image.png" },
    "QuotesMaker": { siteUrl: "https://quotesmaker.com", snapshotUrl: "https://i.ibb.co/CKMyhwCN/image.png" },
    "QuoteGenerator.io": { siteUrl: "https://quotegenerator.io", snapshotUrl: "https://i.ibb.co/BVtHbPVg/image.png" },
    "MindSparkAI": { siteUrl: "https://mindsparkai.com", snapshotUrl: "https://i.ibb.co/0jrsqHVZ/image.png" },
    "Teachers Report Writer": { siteUrl: "https://teachers.report/", snapshotUrl: "https://i.ibb.co/d0Jhhp12/image.png" },
    "ReportGPT": { siteUrl: "https://reportgpt.app/", snapshotUrl: "https://i.ibb.co/yKdqhBx/image.png" },
    "Pentra": { siteUrl: "https://pentra.io", snapshotUrl: "https://i.ibb.co/2Y660zrN/image.png" },
    "Opusense": { siteUrl: "https://opusense.com", snapshotUrl: "https://i.ibb.co/HLdJjKCY/image.png" },
    "Opus Clip": { siteUrl: "https://opus.pro", snapshotUrl: "https://i.ibb.co/0Rd1V777/image.png" },
    "Castmagic": { siteUrl: "https://castmagic.io", snapshotUrl: "https://i.ibb.co/prRQJBS4/image.png" },
    "Hypefury": { siteUrl: "https://hypefury.com", snapshotUrl: "https://i.ibb.co/FkdbDYdn/image.png" },
    "Exemplary AI": { siteUrl: "https://exemplary.ai", snapshotUrl: "https://i.ibb.co/twGjwHKn/image.png" },
    "MARA AI": { siteUrl: "https://www.mara-solutions.com/", snapshotUrl: "https://i.ibb.co/Ld93RrGr/image.png" },
    "Reviewly": { siteUrl: "https://reviewly.ai", snapshotUrl: "https://i.ibb.co/rGmC156s/image.png" },
    "Autoblogging.ai": { siteUrl: "https://autoblogging.ai", snapshotUrl: "https://i.ibb.co/Kz2J2XLt/image.png" },
    "Spokk": { siteUrl: "https://spokk.io", snapshotUrl: "https://i.ibb.co/L7n3Pfk/image.png" },
    "RoastLinkedIn.com": { siteUrl: "https://roastlinkedin.com", snapshotUrl: "https://i.ibb.co/LXTznT92/image.png" },
    "StealthWriter": { siteUrl: "https://stealthwriter.ai", snapshotUrl: "https://i.ibb.co/PGqyDBrv/image.png" },
    "Free Paraphrasing Tool - FreeparaphrasingTool.com": { siteUrl: "https://freeparaphrasingtool.com", snapshotUrl: "https://i.ibb.co/b5mpK1Qj/image.png" },
    "Wordtune": { siteUrl: "https://wordtune.com", snapshotUrl: "https://i.ibb.co/7d644WZ1/image.png" },
    "AI Undetect": { siteUrl: "https://aiundetect.com", snapshotUrl: "https://i.ibb.co/7tVVCmNX/image.png" },
    "Camtasia": { siteUrl: "https://techsmith.com/camtasia", snapshotUrl: "https://i.ibb.co/mCVppG1V/image.png" },
    "Dubs.io": { siteUrl: "https://dubs.io", snapshotUrl: "https://i.ibb.co/9H8pFQZM/image.png" },
    "Subscribr": { siteUrl: "https://subscribr.ai", snapshotUrl: "https://i.ibb.co/JR2sbxH5/image.png" },
    "Influee": { siteUrl: "https://influee.co", snapshotUrl: "https://i.ibb.co/0RdPdQn1/image.png" },
    "English Chrome Extension": { siteUrl: "https://chromewebstore.google.com/detail/word-study-extension/doekklopilgpgcnbpfcehjhegdpnlbmh?utm_source=toolify", snapshotUrl: "https://i.ibb.co/6cJ6FG12/image.png" },
    "VocabMate": { siteUrl: "https://vocabmate.com", snapshotUrl: "https://i.ibb.co/LzN9zpCJ/image.png" },
    "TypeGenie": { siteUrl: "https://typegenie.net", snapshotUrl: "https://i.ibb.co/mFDwd9vK/image.png" },
    "Storybooks": { siteUrl: "https://storybooks.app", snapshotUrl: "https://i.ibb.co/v4hy5QmX/image.png" },
    "MyTales": { siteUrl: "https://mytales.io/", snapshotUrl: "https://i.ibb.co/Mxk3KrQN/image.png" },
    "Storywizard.ai": { siteUrl: "https://storywizard.ai", snapshotUrl: "https://i.ibb.co/vxrgnrWY/image.png" },
    "MakeMyTale": { siteUrl: "https://makemytale.com", snapshotUrl: "https://i.ibb.co/0pMZjr8Q/image.png" },
    "BrandKiit": { siteUrl: "https://brandkiit.com", snapshotUrl: "https://i.ibb.co/3mJK59Cx/image.png" },
    "myBrandgen.com": { siteUrl: "https://mybrandgen.com", snapshotUrl: "https://i.ibb.co/5X3p6yhx/image.png" },
    "10Web": { siteUrl: "https://10web.io", snapshotUrl: "https://i.ibb.co/x86BTVYQ/image.png" },
    "Zoviz": { siteUrl: "https://zoviz.com", snapshotUrl: "https://i.ibb.co/twS9gwsX/image.png" },
    "Prepostseo": { siteUrl: "https://prepostseo.com", snapshotUrl: "https://i.ibb.co/35WKkggn/image.png" },
    "Goodnotes": { siteUrl: "https://goodnotes.com", snapshotUrl: "https://i.ibb.co/rR2fn7Rr/image.png" },
    "Linguix": { siteUrl: "https://linguix.com", snapshotUrl: "https://i.ibb.co/HDqQR4jD/image.png" },
    "SafeSpelling": { siteUrl: "https://safespelling.com", snapshotUrl: "https://i.ibb.co/fG0qKzBR/image.png" },
    "Perchance": { siteUrl: "https://perchance.org", snapshotUrl: "https://i.ibb.co/TDQwqrm2/image.png" },
    "DreamPress AI": { siteUrl: "https://www.dreampress.ai/", snapshotUrl: "https://i.ibb.co/yB5thg42/image.png" },
    "DreamGen": { siteUrl: "https://dreamgen.com/", snapshotUrl: "https://i.ibb.co/yFrK5S6S/image.png" },
    "Zeemo": { siteUrl: "https://zeemo.ai", snapshotUrl: "https://i.ibb.co/Ldh6X4Kq/image.png" },
    "CapCut": { siteUrl: "https://capcut.com", snapshotUrl: "https://i.ibb.co/s9Kf9Wdc/image.png" },
    "Happy Scribe": { siteUrl: "https://happyscribe.com", snapshotUrl: "https://i.ibb.co/4w8yMqRf/image.png" },
    "VEED.IO": { siteUrl: "https://veed.io", snapshotUrl: "https://i.ibb.co/V04nrPxW/image.png" },
    "Clideo": { siteUrl: "https://clideo.com", snapshotUrl: "https://i.ibb.co/mVs73Jv4/image.png" },
    "Lilys AI": { siteUrl: "https://lilys.ai", snapshotUrl: "https://i.ibb.co/3Ky7HJY/image.png" },
    "Read AI": { siteUrl: "https://read.ai", snapshotUrl: "https://i.ibb.co/9mYB8drj/image.png" },
    "AI Summarizer": { siteUrl: "https://www.summarizer.org/", snapshotUrl: "https://i.ibb.co/vCWN3sVr/image.png" },
    "Studocu": { siteUrl: "https://studocu.com", snapshotUrl: "https://i.ibb.co/hRbWbPvq/image.png" },
    "Otter.ai": { siteUrl: "https://otter.ai", snapshotUrl: "https://i.ibb.co/pBmfkZY2/image.png" },
    "Canvs AI": { siteUrl: "https://canvs.ai", snapshotUrl: "https://i.ibb.co/Qvv7MXqw/image.png" },
    "Yay! Forms": { siteUrl: "https://yayforms.com", snapshotUrl: "https://i.ibb.co/CKfVts6B/image.png" },
    "IamIP": { siteUrl: "https://iamip.com", snapshotUrl: "https://i.ibb.co/8Dwc7S4J/image.png" },
    "The HS Code": { siteUrl: "https://thehscode.com", snapshotUrl: "https://i.ibb.co/fVz9ctVr/image.png" },
    "ChatPulse": { siteUrl: "https://chatpulse.ai", snapshotUrl: "https://i.ibb.co/n83Ly19V/image.png" },
    "Venice AI": { siteUrl: "https://venice.ai", snapshotUrl: "https://i.ibb.co/prRTRScY/image.png" },
    "HyperWrite": { siteUrl: "https://hyperwriteai.com", snapshotUrl: hyperwriteSnapshot },
    "Toolsaday": { siteUrl: "https://toolsaday.com", snapshotUrl: "https://i.ibb.co/VWSjgNxr/image.png" },
    "Structurely": { siteUrl: "https://structurely.com", snapshotUrl: "https://i.ibb.co/DPDCvZYs/image.png" },
    "Mtalkz": { siteUrl: "https://mtalkz.com", snapshotUrl: "https://i.ibb.co/JjFxnPy2/image.png" },
    "FireTexts": { siteUrl: "https://firetext.co.uk", snapshotUrl: "https://i.ibb.co/pBdYTg3C/image.png" },
    "TextGPT": { siteUrl: "https://textgpt.net/", snapshotUrl: "https://i.ibb.co/gbxQMV0j/image.png" },
    "ThesisAI": { siteUrl: "https://www.thesisai.io/", snapshotUrl: "https://i.ibb.co/dJWbmRjL/image.png" },
    "SOM AI": { siteUrl: "https://somai.id/", snapshotUrl: "https://i.ibb.co/3m4gngPD/image.png" },
    "SciPub+": { siteUrl: "https://scipubplus.com", snapshotUrl: "https://i.ibb.co/CKPrVF6X/image.png" },
    "v0 Report": { siteUrl: "https://v0.report/", snapshotUrl: "https://i.ibb.co/WW4KWSBV/image.png" },
    "AcademicIdeas": { siteUrl: "https://www.acaids.com/", snapshotUrl: "https://i.ibb.co/0yfx4vTS/image.png" },
    "VidIQ": { siteUrl: "https://vidiq.com", snapshotUrl: "https://i.ibb.co/twg1r6TR/image.png" },
    "Pikzels": { siteUrl: "https://pikzels.com", snapshotUrl: "https://i.ibb.co/FLmndw6j/image.png" },
    "PicSee": { siteUrl: "https://picsee.io/", snapshotUrl: "https://i.ibb.co/qLVCBMpZ/image.png" },
    "Thumblytics": { siteUrl: "https://thumblytics.com/", snapshotUrl: "https://i.ibb.co/5hRgqkmQ/image.png" },
    "Taja AI": { siteUrl: "https://taja.ai", snapshotUrl: "https://i.ibb.co/FLM0pZ0F/image.png" },
    "HIX.AI": { siteUrl: "https://hix.ai", snapshotUrl: "https://i.ibb.co/bRBX7XZC/image.png" },
    "Decopy AI": { siteUrl: "https://decopy.ai", snapshotUrl: "https://i.ibb.co/m5V7JCWb/image.png" },
    "TinyWow": { siteUrl: "https://tinywow.com", snapshotUrl: "https://i.ibb.co/yF9qy8QK/image.png" },
    "ProWritingAid": { siteUrl: "https://prowritingaid.com", snapshotUrl: "https://i.ibb.co/B7XkKmQ/image.png" },
    "Smodin": { siteUrl: "https://smodin.io", snapshotUrl: "https://i.ibb.co/Y4y0fsqw/image.png" },
    "Toolsmart Free Humanize AI": { siteUrl: "https://www.toolsmart.ai/feature-free-humanize-ai/?", snapshotUrl: "https://i.ibb.co/N6WQvM7x/image.png" },
    "Heidi Health": { siteUrl: "https://heidihealth.com", snapshotUrl: "https://i.ibb.co/0yrC3LxV/image.png" },
    "Topicfinder": { siteUrl: "https://topicfinder.com", snapshotUrl: "https://i.ibb.co/VcKFvQbX/image.png" },
    "Soopra": { siteUrl: "https://soopra.ai", snapshotUrl: "https://i.ibb.co/KpfZT5Mr/image.png" },
    "Make Headline": { siteUrl: "https://makeheadline.com", snapshotUrl: "https://i.ibb.co/F4HTk0rd/image.png" },
    "Great Headlines AI": { siteUrl: "https://greatheadlines.ai", snapshotUrl: "https://i.ibb.co/yBG8mVrT/image.png" },
    "PromptHero": { siteUrl: "https://prompthero.com", snapshotUrl: "https://i.ibb.co/SXGRQ7rb/image.png" },
    "Learn Prompting": { siteUrl: "https://learnprompting.org", snapshotUrl: "https://i.ibb.co/xKv5v1JX/image.png" },
    "AI Prompt Generator by God of Prompt": { siteUrl: "https://www.godofprompt.ai/ai-prompt-generator", snapshotUrl: "https://i.ibb.co/jP8MdhJM/image.png" },
    "Resume Worded": { siteUrl: "https://resumeworded.com", snapshotUrl: "https://i.ibb.co/WvZCCLPx/image.png" },
    "ResumeBuilder.com": { siteUrl: "https://resumebuilder.com", snapshotUrl: "https://i.ibb.co/Jjyqh6KQ/image.png" },
    "Careerflow": { siteUrl: "https://careerflow.ai", snapshotUrl: "https://i.ibb.co/by8kZKC/image.png" },
    "VMock": { siteUrl: "https://vmock.com", snapshotUrl: "https://i.ibb.co/tpPwLZrg/image.png" },
    "Swooped": { siteUrl: "https://swooped.co", snapshotUrl: "https://i.ibb.co/9ksVH6Mk/image.png" },
    "ChatUp AI": { siteUrl: "https://aichattings.com/", snapshotUrl: chatupAiSnapshot }
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
        <div className="aspect-[4/3] bg-white rounded-lg border border-border overflow-hidden">
          <img
            src={screenshotUrl}
            alt={`${toolName} website screenshot`}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
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
