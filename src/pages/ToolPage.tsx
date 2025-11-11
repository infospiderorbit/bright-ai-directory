import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ExternalLink, Star, Heart, Bookmark, Facebook, Linkedin, Twitter, MessageCircle, Mail, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WebsiteSnapshot from "@/components/WebsiteSnapshot";
import { toolsData } from "@/data/toolsData";
import { categoriesData } from "@/data/categoriesData";
import { toolsProductInfoData } from "@/data/toolsProductInfo";

const ProductInformation = ({ toolData }: { toolData: any }) => {
  const productInfo = toolsProductInfoData[toolData.id] || toolsProductInfoData.default;

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6">
          {toolData.name} Product Information
        </h2>
      </div>
      
      {/* What is */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-foreground">What is {toolData.name}?</h3>
        <p className="text-muted-foreground leading-relaxed">
          {productInfo.whatIs}
        </p>
        
        {productInfo.features && (
          <div className="mt-4">
            <h4 className="font-medium text-foreground mb-3">This product stands out with features such as:</h4>
            <ul className="space-y-2 text-muted-foreground">
              {productInfo.features.map((feature: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <Separator />

      {/* How to Use */}
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-2">{productInfo.howToUse.title}</h3>
          <p className="text-muted-foreground">{productInfo.howToUse.description}</p>
        </div>
        <div className="grid gap-4">
          {productInfo.howToUse.steps.map((step: any, index: number) => (
            <div key={index} className="flex items-start space-x-4 p-4 rounded-lg border border-border bg-card">
              <div className="flex-shrink-0 w-8 h-8 rounded-full border border-border text-xs font-medium text-muted-foreground flex items-center justify-center">
                {index + 1}
              </div>
              <div className="flex-1">
                <h4 className="text-base font-semibold text-foreground mb-1">{step.title}</h4>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Core Features */}
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-2">{toolData.name}'s Core Features in Detail</h3>
          <p className="text-muted-foreground">Powerful features from {toolData.name}</p>
        </div>
        <div className="grid gap-3">
          {productInfo.coreFeatures.map((feature: any, index: number) => (
            <div key={index} className="p-3 rounded-lg border border-border bg-card">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary/60" />
                <div>
                  <h4 className="font-medium text-foreground">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Use Cases */}
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-2">{toolData.name} Use Cases</h3>
          <p className="text-muted-foreground">Discover how {toolData.name} can benefit different users</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {productInfo.useCases.map((useCase: any, index: number) => (
            <div key={index} className="p-4 rounded-lg border border-border bg-card">
              <h4 className="font-semibold text-foreground mb-2">{useCase.title}</h4>
              <p className="text-sm text-muted-foreground">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pros and Cons */}
      {productInfo.prosAndCons && (
        <>
          <Separator />
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-2">Pros & Cons</h3>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground text-lg">Pros</h4>
                <ul className="space-y-2">
                  {productInfo.prosAndCons.pros.map((pro: string, index: number) => (
                    <li key={index} className="flex items-start text-muted-foreground">
                      <span className="text-green-500 mr-2">✓</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground text-lg">Cons</h4>
                <ul className="space-y-2">
                  {productInfo.prosAndCons.cons.map((con: string, index: number) => (
                    <li key={index} className="flex items-start text-muted-foreground">
                      <span className="text-red-500 mr-2">✗</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Pricing */}
      {productInfo.pricing && (
        <>
          <Separator />
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-foreground">Pricing Plans</h3>
            </div>
            {productInfo.pricing.plans && (
              <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
                {productInfo.pricing.plans.map((plan: any, index: number) => (
                  <div 
                    key={index} 
                    className={`relative p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] ${
                      index === 1 
                        ? 'border-primary bg-gradient-to-br from-primary/5 via-card to-card shadow-xl' 
                        : 'border-border bg-card hover:border-primary/50'
                    }`}
                  >
                    {index === 1 && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <Badge className="bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold">
                          Popular
                        </Badge>
                      </div>
                    )}
                    <div className="space-y-6">
                      <div className="text-center">
                        <h4 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h4>
                        <div className="h-1 w-16 bg-primary/60 rounded-full mx-auto"></div>
                      </div>
                      <ul className="space-y-4">
                        {plan.features.map((feature: string, featureIndex: number) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-foreground leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {productInfo.pricing.basic && (
              <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
                <div className="p-8 rounded-2xl border-2 border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                  <div className="space-y-4">
                    <div className="text-center">
                      <h4 className="text-2xl font-bold text-foreground mb-2">Basic Plan</h4>
                      <div className="h-1 w-16 bg-primary/60 rounded-full mx-auto"></div>
                    </div>
                    <p className="text-foreground leading-relaxed">{productInfo.pricing.basic}</p>
                  </div>
                </div>
                <div className="relative p-8 rounded-2xl border-2 border-primary bg-gradient-to-br from-primary/5 via-card to-card shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold">
                      Popular
                    </Badge>
                  </div>
                  <div className="space-y-4">
                    <div className="text-center">
                      <h4 className="text-2xl font-bold text-foreground mb-2">Ultra Plan</h4>
                      <div className="h-1 w-16 bg-primary/60 rounded-full mx-auto"></div>
                    </div>
                    <p className="text-foreground leading-relaxed">{productInfo.pricing.ultra}</p>
                  </div>
                </div>
              </div>
            )}
            <div className="text-center pt-6">
              <p className="text-sm text-muted-foreground">
                For current, detailed pricing information, visit the {toolData.name} official website.
              </p>
            </div>
          </div>
        </>
      )}

      {/* FAQs */}
      {productInfo.faqs && (
        <>
          <Separator />
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-2">Frequently Asked Questions (FAQs)</h3>
            </div>
            <div className="space-y-4">
              {productInfo.faqs.map((faq: any, index: number) => (
                <div key={index} className="p-4 rounded-lg border border-border bg-card">
                  <h4 className="font-semibold text-foreground mb-2">{faq.question}</h4>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const ToolPage = () => {
  console.log('ToolPage component rendering...');
  const { category, subcategory, tool } = useParams();
  const [saved, setSaved] = useState(false);
  const [likes, setLikes] = useState(false);
  const [currentRating, setCurrentRating] = useState(0);
  const [reviewsCount, setReviewsCount] = useState(0);
  const [savedCount, setSavedCount] = useState(0);

  // Debug logging
  console.log('ToolPage params:', { category, subcategory, tool });
  console.log('All available tools in toolsData:', Object.keys(toolsData));

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
      console.log('Checking category:', catKey, 'data:', catData);
      for (const [subKey, subTools] of Object.entries(catData)) {
        console.log('Checking subcategory:', subKey, 'tools:', subTools);
        // Ensure subTools is an array before calling find
        if (Array.isArray(subTools)) {
          const foundTool = subTools.find(t => t && t.id === toolId);
          if (foundTool) {
            console.log('Found tool:', foundTool);
            console.log('In category:', catKey, 'subcategory:', subKey);
            toolData = foundTool;
            categoryData = categoriesData[catKey];
            subcategoryData = categoryData?.subcategories?.[subKey];
            break;
          }
        } else {
          console.log('subTools is not an array:', subTools);
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

  // Initialize states with tool data
  useEffect(() => {
    if (toolData) {
      setCurrentRating(toolData.rating || 4.5);
      setReviewsCount(toolData.reviewsCount || 0);
      setSavedCount(toolData.savedCount || Math.floor(Math.random() * 100) + 1);
    }
  }, [toolData]);

  const handleSave = () => {
    setSaved(!saved);
    setSavedCount(prev => saved ? prev - 1 : prev + 1);
  };
  
  const handleLike = () => setLikes(!likes);

  const handleRating = (rating: number) => {
    setCurrentRating(rating);
    // Here you could add API call to save rating
  };

  const shareUrl = `https://www.aitoolsprime.com/${toolData.id}`;
  const shareText = `Check out ${toolData.name} - ${toolData.description}`;
  
  // SEO meta information
  const pageTitle = `${toolData.name} - AI Tool | AI TOOLS PRIME`;
  const pageDescription = toolData.description.length > 160 
    ? toolData.description.substring(0, 157) + "..." 
    : toolData.description;
  const ogImage = toolData.snapshot || "https://www.aitoolsprime.com/src/assets/logo.png";

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`,
    email: `mailto:?subject=${encodeURIComponent(toolData.name)}&body=${encodeURIComponent(`${shareText} ${shareUrl}`)}`
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={ogImage} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={shareUrl} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={shareUrl} />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
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

        {/* Boxed Layout Container */}
        <div className="max-w-6xl mx-auto bg-card rounded-lg shadow-lg border border-border p-6 mb-8">
          {/* Top Row - 2 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left Sidebar - Tool Details (60% width) */}
            <div className="lg:col-span-3 space-y-6">
              {/* Tool Name */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-muted flex items-center justify-center text-3xl border border-border">
                  {toolData.icon}
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-foreground">{toolData.name}</h1>
                  {toolData.verified && (
                    <Badge variant="secondary" className="mt-2">Verified</Badge>
                  )}
                </div>
              </div>

              {/* Open Site Button */}
              <Button asChild size="lg" className="w-auto px-8 gradient-primary text-white">
                <a href={toolData.url || `https://www.aitoolsprime.com/tool/${toolData.id}`} target="_blank" rel="noopener noreferrer">
                  Open Site
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>

              {/* Rating Section */}
              <div className="flex items-center space-x-6 py-4 border-y border-border">
                <div className="flex items-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 cursor-pointer transition-colors ${
                        i < Math.floor(currentRating) 
                          ? 'text-primary fill-current' 
                          : 'text-muted-foreground'
                      }`}
                      onClick={() => handleRating(i + 1)}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">{currentRating.toFixed(1)}</span>
                </div>
                <div className="text-sm text-muted-foreground">{reviewsCount} Reviews</div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleSave}
                    className={`flex items-center space-x-1 text-sm transition-colors ${
                      saved ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                    }`}
                  >
                    <Bookmark className={`h-4 w-4 ${saved ? 'fill-current' : ''}`} />
                    <span>{savedCount} Saved</span>
                  </button>
                </div>
              </div>

              {/* Short Introduction */}
              <div>
                <h3 className="font-semibold text-foreground mb-2">Introduction</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {toolData.description}
                </p>
              </div>

              {/* Added Date */}
              <div>
                <span className="text-sm text-muted-foreground">Added on: </span>
                <span className="text-sm font-medium text-foreground">
                  {toolData.addedDate ? new Date(toolData.addedDate).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: '2-digit' 
                  }) : 'Jun 03, 2023'}
                </span>
              </div>

              {/* Social Share Buttons */}
              <div>
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

            {/* Right Column - Snapshot/Preview (40% width) */}
            <div className="lg:col-span-2">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground">Website Snapshot</h3>
                  <Camera className="h-4 w-4 text-muted-foreground" />
                </div>
                <WebsiteSnapshot toolUrl={toolData.url} toolName={toolData.name} />
              </div>
            </div>
          </div>
        </div>

        {/* Product Information Section - Full Width Boxed Container */}
        <div className="max-w-6xl mx-auto bg-card rounded-lg shadow-lg border border-border p-8">
          <ProductInformation toolData={toolData} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ToolPage;