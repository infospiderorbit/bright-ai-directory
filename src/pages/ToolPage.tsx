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
    for (const [catKey, catData] of Object.entries(toolsData)) {
      for (const [subKey, subTools] of Object.entries(catData)) {
        const foundTool = subTools.find(t => t.id === toolId);
        if (foundTool) {
          toolData = foundTool;
          categoryData = categoriesData[catKey];
          subcategoryData = categoryData?.subcategories?.[subKey];
          break;
        }
      }
      if (toolData) break;
    }
  }

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
                    <div>
                      <CardTitle className="text-3xl font-bold">{toolData.name}</CardTitle>
                      {toolData.verified && (
                        <Badge variant="secondary" className="mt-2">
                          Verified
                        </Badge>
                      )}
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
                <Button asChild className="w-full gradient-primary text-white">
                  <a href="https://www.aitoolsprime.com/tool/junia-ai" target="_blank" rel="noopener noreferrer">
                    Open Site
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>

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

                {/* Tool Information */}
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Introduction</h3>
                    <p className="text-muted-foreground">
                      AI content creation platform for blogs, emails, ads, and SEO-friendly articles.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Added on</h3>
                    <p className="text-muted-foreground">Aug 16, 2025</p>
                  </div>
                </div>

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
                      <a href="https://www.aitoolsprime.com/tool/junia-ai" target="_blank" rel="noopener noreferrer">
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