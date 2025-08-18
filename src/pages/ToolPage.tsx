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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Panel - Tool Information */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center text-3xl">
                      {toolData.icon}
                    </div>
                    <div className="flex items-center space-x-4">
                      <div>
                        <CardTitle className="text-3xl font-bold">{toolData.name}</CardTitle>
                        {toolData.verified && (
                          <Badge variant="secondary" className="mt-2">
                            Verified
                          </Badge>
                        )}
                      </div>
                      <Button asChild size="sm" className="gradient-primary text-white">
                        <a href={toolData.url || `https://www.aitoolsprime.com/tool/${toolData.id}`} target="_blank" rel="noopener noreferrer">
                          Open Site
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </a>
                      </Button>
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

                {/* Rating & Reviews */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">0 Reviews</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    11 Saved
                  </div>
                </div>

                <Separator />

                {/* Junia AI Product Information */}
                {toolData.id === 'junia-ai' ? (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent mb-6">
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

                    {/* How Can Junia AI Help You */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-foreground">How Can Junia AI Help You?</h3>
                      <div className="grid gap-4">
                        <div className="flex items-start space-x-3 p-4 rounded-lg bg-card border">
                          <span className="font-semibold text-primary">1.</span>
                          <div>
                            <h4 className="font-medium text-foreground">Select Content Type</h4>
                            <p className="text-muted-foreground text-sm mt-1">Pick from emails, blog posts, ads, or social media posts.</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 p-4 rounded-lg bg-card border">
                          <span className="font-semibold text-primary">2.</span>
                          <div>
                            <h4 className="font-medium text-foreground">Customize Topic & Tone</h4>
                            <p className="text-muted-foreground text-sm mt-1">Enter the subject and choose tone settings (professional, casual, persuasive, etc.).</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 p-4 rounded-lg bg-card border">
                          <span className="font-semibold text-primary">3.</span>
                          <div>
                            <h4 className="font-medium text-foreground">Generate & Review</h4>
                            <p className="text-muted-foreground text-sm mt-1">Use AI to generate multiple versions and review them.</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 p-4 rounded-lg bg-card border">
                          <span className="font-semibold text-primary">4.</span>
                          <div>
                            <h4 className="font-medium text-foreground">Edit & Optimize</h4>
                            <p className="text-muted-foreground text-sm mt-1">Refine with the built-in AI editor for paraphrasing, SEO research, and publishing-ready output.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Core Features */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-foreground">Junia AI's Core Features in Detail (JuniaAI.net)</h3>
                      <div className="grid gap-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">AI-generated images for blogs & posts</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">Tools for SEO research & optimization</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">Smart AI editor with summarization & paraphrasing</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">Brand Voice personalization</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">AI chatbot for writing support</span>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Use Cases */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-foreground">Junia AI's Use Cases</h3>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3 p-3 rounded-lg border border-primary/20 bg-primary/5">
                          <span className="font-bold text-primary">#1</span>
                          <span className="text-muted-foreground">Generating SEO-friendly blog posts (3000+ words)</span>
                        </div>
                        <div className="flex items-start space-x-3 p-3 rounded-lg border border-primary/20 bg-primary/5">
                          <span className="font-bold text-primary">#2</span>
                          <span className="text-muted-foreground">Creating persuasive ad copy for campaigns</span>
                        </div>
                        <div className="flex items-start space-x-3 p-3 rounded-lg border border-primary/20 bg-primary/5">
                          <span className="font-bold text-primary">#3</span>
                          <span className="text-muted-foreground">Writing personalized sales emails</span>
                        </div>
                        <div className="flex items-start space-x-3 p-3 rounded-lg border border-primary/20 bg-primary/5">
                          <span className="font-bold text-primary">#4</span>
                          <span className="text-muted-foreground">Summarizing long documents/files</span>
                        </div>
                        <div className="flex items-start space-x-3 p-3 rounded-lg border border-primary/20 bg-primary/5">
                          <span className="font-bold text-primary">#5</span>
                          <span className="text-muted-foreground">Creating AI-generated images for articles</span>
                        </div>
                        <div className="flex items-start space-x-3 p-3 rounded-lg border border-primary/20 bg-primary/5">
                          <span className="font-bold text-primary">#6</span>
                          <span className="text-muted-foreground">Rewriting content into multiple languages</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Default Tool Information */
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Introduction</h3>
                      <p className="text-muted-foreground">
                        {toolData.description}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2">Added on</h3>
                      <p className="text-muted-foreground">Aug 16, 2025</p>
                    </div>
                  </div>
                )}

                <Separator />

                {/* Social Sharing */}
                <div>
                  <h3 className="font-semibold mb-4">Share this tool</h3>
                  <div className="flex space-x-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      asChild
                      className="text-blue-600 hover:bg-blue-50"
                    >
                      <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer">
                        <Facebook className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      asChild
                      className="text-blue-700 hover:bg-blue-50"
                    >
                      <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      asChild
                      className="text-sky-500 hover:bg-sky-50"
                    >
                      <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      asChild
                      className="text-green-600 hover:bg-green-50"
                    >
                      <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      asChild
                      className="text-gray-600 hover:bg-gray-50"
                    >
                      <a href={shareLinks.email}>
                        <Mail className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Panel - Tool Preview */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Tool Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative group cursor-pointer">
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">{toolData.icon}</div>
                      <p className="text-sm text-muted-foreground">Screenshot Preview</p>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                    <Button 
                      asChild 
                      variant="secondary"
                      className="backdrop-blur-sm"
                    >
                      <a href={toolData.url || `https://www.aitoolsprime.com/tool/${toolData.id}`} target="_blank" rel="noopener noreferrer">
                        Visit Website
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ToolPage;