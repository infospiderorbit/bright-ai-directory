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

                {/* Tool Info Section */}
                <div className="bg-gradient-to-r from-purple-50/50 to-blue-50/50 rounded-xl p-6 border border-purple-100/50">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Rating & Reviews */}
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-lg">
                          11
                        </div>
                      </div>
                      <div className="flex items-center justify-center mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">5 Reviews</p>
                    </div>

                    {/* Saves */}
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <div className="bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                          <Bookmark className="h-6 w-6" />
                        </div>
                      </div>
                      <p className="font-semibold text-foreground">11 Saved</p>
                      <p className="text-sm text-muted-foreground">Bookmarks</p>
                    </div>

                    {/* Added Date */}
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <div className="bg-gradient-to-r from-green-400 to-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm shadow-lg">
                          Jun
                        </div>
                      </div>
                      <p className="font-semibold text-foreground">Added on</p>
                      <p className="text-sm text-muted-foreground">Jun 03, 2023</p>
                    </div>
                  </div>

                  {/* Introduction */}
                  <div className="mt-6 pt-6 border-t border-purple-200/50">
                    <h4 className="font-semibold text-foreground mb-2">Introduction:</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      AI content creation platform for blogs, emails, ads, and SEO-friendly articles.
                    </p>
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

                    {/* How to Use Junia AI */}
                    <div className="space-y-6">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent mb-2">How to Use Junia AI?</h3>
                        <p className="text-muted-foreground">Get started with Junia AI in 4 simple steps</p>
                      </div>
                      <div className="grid gap-6">
                        <div className="relative">
                          <div className="flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-100 hover:shadow-lg transition-all duration-300">
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                              1
                            </div>
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-foreground mb-2">Select Content Type</h4>
                              <p className="text-muted-foreground">Pick from emails, blog posts, ads, or social media posts to match your content needs.</p>
                            </div>
                          </div>
                        </div>
                        <div className="relative">
                          <div className="flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 hover:shadow-lg transition-all duration-300">
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                              2
                            </div>
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-foreground mb-2">Customize Topic & Tone</h4>
                              <p className="text-muted-foreground">Enter your subject and choose tone settings (professional, casual, persuasive, etc.) to match your brand voice.</p>
                            </div>
                          </div>
                        </div>
                        <div className="relative">
                          <div className="flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 hover:shadow-lg transition-all duration-300">
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                              3
                            </div>
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-foreground mb-2">Generate & Review</h4>
                              <p className="text-muted-foreground">Let AI generate multiple high-quality versions and review them to find the perfect content.</p>
                            </div>
                          </div>
                        </div>
                        <div className="relative">
                          <div className="flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 hover:shadow-lg transition-all duration-300">
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                              4
                            </div>
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-foreground mb-2">Edit & Optimize</h4>
                              <p className="text-muted-foreground">Refine with the built-in AI editor for paraphrasing, SEO research, and publishing-ready output.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Core Features */}
                    <div className="space-y-6">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent mb-2">Junia AI's Core Features in Detail</h3>
                        <p className="text-muted-foreground">Powerful features from JuniaAI.net</p>
                      </div>
                      <div className="grid gap-4">
                        <div className="group p-4 rounded-xl bg-gradient-to-r from-purple-50/50 to-blue-50/50 border border-purple-100/50 hover:shadow-lg hover:border-purple-200 transition-all duration-300">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center shadow-md">
                              <span className="text-white text-sm">🖼️</span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">AI-Generated Images</h4>
                              <p className="text-sm text-muted-foreground">Create stunning visuals for blogs & posts automatically</p>
                            </div>
                          </div>
                        </div>
                        <div className="group p-4 rounded-xl bg-gradient-to-r from-blue-50/50 to-indigo-50/50 border border-blue-100/50 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center shadow-md">
                              <span className="text-white text-sm">🔍</span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">SEO Research & Optimization</h4>
                              <p className="text-sm text-muted-foreground">Built-in tools to boost your content's search rankings</p>
                            </div>
                          </div>
                        </div>
                        <div className="group p-4 rounded-xl bg-gradient-to-r from-indigo-50/50 to-purple-50/50 border border-indigo-100/50 hover:shadow-lg hover:border-indigo-200 transition-all duration-300">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center shadow-md">
                              <span className="text-white text-sm">✏️</span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">Smart AI Editor</h4>
                              <p className="text-sm text-muted-foreground">Advanced summarization, paraphrasing & translation features</p>
                            </div>
                          </div>
                        </div>
                        <div className="group p-4 rounded-xl bg-gradient-to-r from-purple-50/50 to-pink-50/50 border border-purple-100/50 hover:shadow-lg hover:border-purple-200 transition-all duration-300">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-md">
                              <span className="text-white text-sm">🎯</span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">Brand Voice Personalization</h4>
                              <p className="text-sm text-muted-foreground">Maintain consistent brand identity across all content</p>
                            </div>
                          </div>
                        </div>
                        <div className="group p-4 rounded-xl bg-gradient-to-r from-green-50/50 to-teal-50/50 border border-green-100/50 hover:shadow-lg hover:border-green-200 transition-all duration-300">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center shadow-md">
                              <span className="text-white text-sm">🤖</span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">AI Writing Chatbot</h4>
                              <p className="text-sm text-muted-foreground">Get instant support and guidance for your writing projects</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Use Cases */}
                    <div className="space-y-6">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent mb-2">Junia AI's Use Cases</h3>
                        <p className="text-muted-foreground">Real-world applications to transform your content strategy</p>
                      </div>
                      <div className="grid gap-4">
                        <div className="group relative overflow-hidden p-5 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                              1
                            </div>
                            <div>
                              <h4 className="font-bold text-foreground mb-1 group-hover:text-purple-700 transition-colors">SEO Blog Post Generation</h4>
                              <p className="text-muted-foreground">Create comprehensive, SEO-friendly blog posts (3000+ words) that rank higher in search results</p>
                            </div>
                          </div>
                        </div>
                        <div className="group relative overflow-hidden p-5 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                              2
                            </div>
                            <div>
                              <h4 className="font-bold text-foreground mb-1 group-hover:text-blue-700 transition-colors">Persuasive Ad Copy Creation</h4>
                              <p className="text-muted-foreground">Craft compelling advertisement copy that converts viewers into customers for your campaigns</p>
                            </div>
                          </div>
                        </div>
                        <div className="group relative overflow-hidden p-5 rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                              3
                            </div>
                            <div>
                              <h4 className="font-bold text-foreground mb-1 group-hover:text-indigo-700 transition-colors">Personalized Sales Emails</h4>
                              <p className="text-muted-foreground">Generate tailored sales emails that resonate with your audience and drive engagement</p>
                            </div>
                          </div>
                        </div>
                        <div className="group relative overflow-hidden p-5 rounded-xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                              4
                            </div>
                            <div>
                              <h4 className="font-bold text-foreground mb-1 group-hover:text-green-700 transition-colors">Document Summarization</h4>
                              <p className="text-muted-foreground">Quickly summarize long documents and files into digestible, actionable insights</p>
                            </div>
                          </div>
                        </div>
                        <div className="group relative overflow-hidden p-5 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                              5
                            </div>
                            <div>
                              <h4 className="font-bold text-foreground mb-1 group-hover:text-orange-700 transition-colors">AI Image Generation</h4>
                              <p className="text-muted-foreground">Create stunning, relevant images for articles and content that enhance visual storytelling</p>
                            </div>
                          </div>
                        </div>
                        <div className="group relative overflow-hidden p-5 rounded-xl bg-gradient-to-br from-pink-50 to-pink-100 border border-pink-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-pink-600 to-pink-700 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                              6
                            </div>
                            <div>
                              <h4 className="font-bold text-foreground mb-1 group-hover:text-pink-700 transition-colors">Multi-Language Content</h4>
                              <p className="text-muted-foreground">Effortlessly rewrite and translate content into multiple languages for global reach</p>
                            </div>
                          </div>
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