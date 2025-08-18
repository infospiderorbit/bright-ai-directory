import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Star, Heart, Bookmark, Facebook, Linkedin, Twitter, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toolsData } from "@/data/toolsData";
import { categoriesData } from "@/data/categoriesData";

const ToolPage = () => {
  const { category, subcategory, tool } = useParams();
  const [saved, setSaved] = useState(false);
  const [likes, setLikes] = useState(false);

  // Debug logging
  console.log('ToolPage params:', { category, subcategory, tool });

  // Find the tool data
  let categoryData, subcategoryData, toolData;
  
  if (category && subcategory && tool) {
    // Full path route: /category/:category/:subcategory/:tool
    categoryData = categoriesData[category];
    subcategoryData = categoryData?.subcategories?.[subcategory];
    const tools = toolsData[category]?.[subcategory] || [];
    toolData = tools.find(t => t.id === tool);
  } else if (tool) {
    // Short path route: /:tool
    // Search through all categories and subcategories to find the tool
    const toolId = tool;
    console.log('Searching for tool ID:', toolId);
    for (const [catKey, catData] of Object.entries(toolsData)) {
      for (const [subKey, subTools] of Object.entries(catData)) {
        const foundTool = subTools.find(t => t.id === toolId);
        if (foundTool) {
          console.log('Found tool:', foundTool);
          console.log('In category:', catKey, 'subcategory:', subKey);
          toolData = foundTool;
          categoryData = categoriesData[catKey];
          subcategoryData = categoryData?.subcategories?.[subKey];
          break;
        }
      }
      if (toolData) break;
    }
  }

  console.log('Final result:', { toolData, categoryData, subcategoryData });

  if (!toolData || !categoryData || !subcategoryData) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Tool Not Found</h1>
            <p className="text-muted-foreground mb-6">The tool you're looking for doesn't exist.</p>
            <Link to="/">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleSave = () => setSaved(!saved);
  const handleLike = () => setLikes(!likes);

  const shareUrl = `https://www.aitoolsprime.com/${toolData.id}`;
  const shareText = `Check out ${toolData.name} - ${toolData.description}`;

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`,
    email: `mailto:?subject=${encodeURIComponent(toolData.name)}&body=${encodeURIComponent(`${shareText} ${shareUrl}`)}`
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={`/category/${toolData.category}/${toolData.subcategory}`}>
                  {subcategoryData?.title}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbPage>{toolData.name}</BreadcrumbPage>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Top Row - 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Tool Details */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-xl bg-muted flex items-center justify-center text-3xl border border-border">
                      {toolData.icon}
                    </div>
                    <div>
                      <CardTitle className="text-3xl font-bold">{toolData.name}</CardTitle>
                      <div className="flex items-center space-x-4 mt-2">
                        {toolData.verified && (
                          <Badge variant="secondary">Verified</Badge>
                        )}
                        <Button asChild size="sm" className="gradient-primary text-white">
                          <a href={toolData.url || `https://www.aitoolsprime.com/tool/${toolData.id}`} target="_blank" rel="noopener noreferrer">
                            Open Site
                            <ExternalLink className="ml-2 h-3 w-3" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={handleLike}
                      className={likes ? "text-red-500" : ""}
                    >
                      <Heart className={`h-4 w-4 ${likes ? "fill-current" : ""}`} />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={handleSave}
                      className={saved ? "text-blue-500" : ""}
                    >
                      <Bookmark className={`h-4 w-4 ${saved ? "fill-current" : ""}`} />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Tool Info Section */}
                <div className="rounded-xl p-6 border border-border bg-card">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Rating & Reviews */}
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-primary" />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">1 Review</p>
                    </div>

                    {/* Saves */}
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Bookmark className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <p className="font-medium text-foreground">11 Saved</p>
                      <p className="text-sm text-muted-foreground">Bookmarks</p>
                    </div>

                    {/* Added Date */}
                    <div className="text-center">
                      <p className="font-medium text-foreground mb-1">Added on</p>
                      <p className="text-sm text-muted-foreground">Jun 03, 2023</p>
                    </div>
                  </div>

                  {/* Introduction */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <h4 className="font-medium text-foreground mb-1">Introduction</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      AI content creation platform for blogs, emails, ads, and SEO-friendly articles.
                    </p>
                  </div>

                  {/* Social Share */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <h4 className="font-medium text-foreground mb-3">Share this tool</h4>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer">
                          <Facebook className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer">
                          <Twitter className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={shareLinks.email} target="_blank" rel="noopener noreferrer">
                          <Mail className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Snapshot/Preview */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg border border-border flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg mx-auto flex items-center justify-center">
                      {toolData.icon}
                    </div>
                    <p className="text-sm text-muted-foreground">Tool Preview</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Product Information Section - Full Width Center Aligned */}
        <div className="max-w-4xl mx-auto">
          {/* Junia AI Product Information */}
          {toolData.id === 'junia-ai' ? (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Junia AI Product Information
                </h2>
              </div>
              
              {/* What is Junia AI */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">What is Junia AI?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Junia AI is an AI-powered content creation platform that enables users to quickly produce high-quality, original, SEO-optimized content in minutes. From blogs and emails to ad copy and social posts, Junia AI makes producing engaging copy easier with built-in AI image generation, SEO research tools, and a smart editor with summarization, paraphrasing, translation, and citation options.
                </p>
                
                <div className="mt-4">
                  <h4 className="font-medium text-foreground mb-3">This product stands out with features such as:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Conversational dialogue generation
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Content Generation in Short Form (SCFG)
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Long-form article creation (3000+ words)
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Customized AI Brand Voice to mirror writing style and maintain brand consistency
                    </li>
                  </ul>
                </div>
              </div>

              <Separator />

              {/* How to Use Junia AI */}
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">How to Use Junia AI?</h3>
                  <p className="text-muted-foreground">Get started with Junia AI in 4 simple steps</p>
                </div>
                <div className="grid gap-4">
                  <div className="flex items-start space-x-4 p-4 rounded-lg border border-border bg-card">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full border border-border text-xs font-medium text-muted-foreground flex items-center justify-center">1</div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-foreground mb-1">Select Content Type</h4>
                      <p className="text-muted-foreground">Pick from emails, blog posts, ads, or social media posts to match your content needs.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-lg border border-border bg-card">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full border border-border text-xs font-medium text-muted-foreground flex items-center justify-center">2</div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-foreground mb-1">Customize Topic & Tone</h4>
                      <p className="text-muted-foreground">Enter your subject and choose tone settings (professional, casual, persuasive, etc.) to match your brand voice.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-lg border border-border bg-card">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full border border-border text-xs font-medium text-muted-foreground flex items-center justify-center">3</div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-foreground mb-1">Generate & Review</h4>
                      <p className="text-muted-foreground">Let AI generate multiple high-quality versions and review them to find the perfect content.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-lg border border-border bg-card">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full border border-border text-xs font-medium text-muted-foreground flex items-center justify-center">4</div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-foreground mb-1">Edit & Optimize</h4>
                      <p className="text-muted-foreground">Refine with the built-in AI editor for paraphrasing, SEO research, and publishing-ready output.</p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Core Features */}
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Junia AI's Core Features in Detail</h3>
                  <p className="text-muted-foreground">Powerful features from JuniaAI.net</p>
                </div>
                <div className="grid gap-3">
                  <div className="p-3 rounded-lg border border-border bg-card">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary/60" />
                      <div>
                        <h4 className="font-medium text-foreground">AI-Generated Images</h4>
                        <p className="text-sm text-muted-foreground">Create visuals for blogs & posts automatically</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg border border-border bg-card">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary/60" />
                      <div>
                        <h4 className="font-medium text-foreground">SEO Research & Optimization</h4>
                        <p className="text-sm text-muted-foreground">Built-in tools to boost search rankings</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg border border-border bg-card">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary/60" />
                      <div>
                        <h4 className="font-medium text-foreground">Smart AI Editor</h4>
                        <p className="text-sm text-muted-foreground">Summarization, paraphrasing & translation</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg border border-border bg-card">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary/60" />
                      <div>
                        <h4 className="font-medium text-foreground">Brand Voice Personalization</h4>
                        <p className="text-sm text-muted-foreground">Consistency across all content</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg border border-border bg-card">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary/60" />
                      <div>
                        <h4 className="font-medium text-foreground">AI Writing Chatbot</h4>
                        <p className="text-sm text-muted-foreground">Instant writing support & guidance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Use Cases */}
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Junia AI's Use Cases</h3>
                  <p className="text-muted-foreground">Real-world applications to transform your content strategy</p>
                </div>
                <div className="grid gap-3">
                  <div className="p-4 rounded-lg border border-border bg-card">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full border border-border text-xs font-medium text-muted-foreground flex items-center justify-center">1</div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">SEO Blog Post Generation</h4>
                        <p className="text-muted-foreground">Create comprehensive, SEO-friendly blog posts (3000+ words)</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg border border-border bg-card">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full border border-border text-xs font-medium text-muted-foreground flex items-center justify-center">2</div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Persuasive Ad Copy Creation</h4>
                        <p className="text-muted-foreground">Craft compelling advertisement copy for your campaigns</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg border border-border bg-card">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full border border-border text-xs font-medium text-muted-foreground flex items-center justify-center">3</div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Personalized Sales Emails</h4>
                        <p className="text-muted-foreground">Generate tailored emails that resonate and drive engagement</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg border border-border bg-card">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full border border-border text-xs font-medium text-muted-foreground flex items-center justify-center">4</div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Document Summarization</h4>
                        <p className="text-muted-foreground">Quickly summarize long documents into actionable insights</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg border border-border bg-card">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full border border-border text-xs font-medium text-muted-foreground flex items-center justify-center">5</div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">AI Image Generation</h4>
                        <p className="text-muted-foreground">Create relevant images for articles and content</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg border border-border bg-card">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full border border-border text-xs font-medium text-muted-foreground flex items-center justify-center">6</div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Multi-Language Content</h4>
                        <p className="text-muted-foreground">Rewrite and translate content into multiple languages</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-4">More information coming soon</h3>
              <p className="text-muted-foreground">We're working on adding detailed information for all tools.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ToolPage;