import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Star, ArrowUp, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { categoriesData, getCategoryIcon } from "@/data/categoriesData";

// Sample tools data for subcategories
const sampleTools = [
  {
    id: 1,
    name: "ChatGPT",
    description: "Advanced AI writing assistant for content creation and editing.",
    upvotes: 1247,
    verified: true,
    rating: 4.8,
    icon: "🤖"
  },
  {
    id: 2,
    name: "Jasper AI",
    description: "AI copywriting tool for marketing and business content.",
    upvotes: 892,
    verified: true,
    rating: 4.6,
    icon: "✨"
  },
  {
    id: 3,
    name: "Copy.ai",
    description: "AI-powered copywriting platform for various content types.",
    upvotes: 734,
    verified: true,
    rating: 4.5,
    icon: "📝"
  },
  {
    id: 4,
    name: "Writesonic",
    description: "AI writing tool for articles, ads, and marketing copy.",
    upvotes: 623,
    verified: true,
    rating: 4.4,
    icon: "🚀"
  },
  {
    id: 5,
    name: "ContentBot",
    description: "AI content generator for blogs and social media.",
    upvotes: 445,
    verified: false,
    rating: 4.2,
    icon: "🤖"
  }
];

const SubcategoryPage = () => {
  const { category, subcategory } = useParams();
  
  const categoryData = categoriesData[category as keyof typeof categoriesData];
  const subcategoryData = categoryData?.subcategories?.[subcategory as string];

  if (!categoryData || !subcategoryData) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
            <Link to="/categories">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Categories
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Link to="/categories">
              <Button variant="outline" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Categories
              </Button>
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link to={`/category/${category}`}>
              <Button variant="ghost" size="sm" className="text-primary">
                {categoryData.title}
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{getCategoryIcon(category!)}</span>
            <h1 className="text-3xl font-bold">{subcategoryData.title}</h1>
            <Badge variant="secondary" className="text-lg px-3 py-1">
              {subcategoryData.count} tools
            </Badge>
          </div>
          <p className="text-muted-foreground">
            Discover the best AI tools for {subcategoryData.title.toLowerCase()}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleTools.map((tool) => (
            <Card key={tool.id} className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{tool.icon}</div>
                    <div>
                      <CardTitle className="text-lg font-semibold flex items-center gap-2">
                        {tool.name}
                        {tool.verified && (
                          <Check className="h-4 w-4 text-blue-500" />
                        )}
                      </CardTitle>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {tool.description}
                </CardDescription>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="h-7 px-2">
                      <ArrowUp className="h-3 w-3 mr-1" />
                      {tool.upvotes}
                    </Button>
                    {tool.verified && (
                      <Badge variant="secondary" className="text-xs">
                        Verified
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs text-muted-foreground">{tool.rating}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SubcategoryPage;