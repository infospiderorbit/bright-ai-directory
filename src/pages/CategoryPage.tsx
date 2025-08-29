import { useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Star, ArrowUp, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toolsData, Tool } from "@/data/toolsData";
import { categoriesData } from "@/data/categoriesData";

const CategoryPage = () => {
  const { category } = useParams();
  const categoryKey = (category || "").toLowerCase();

  const categoryInfo = categoriesData[categoryKey as keyof typeof categoriesData];

  useEffect(() => {
    if (categoryInfo?.title) {
      document.title = `${categoryInfo.title} AI Tools | AI Tools Prime`;
    }
  }, [categoryInfo?.title]);

  // Aggregate all tools from toolsData for this category
  const tools: Tool[] = useMemo(() => {
    const bySub = toolsData[categoryKey as keyof typeof toolsData] as unknown as Record<string, Tool[]> | undefined;
    if (!bySub) return [];
    const list: Tool[] = [];
    Object.values(bySub).forEach((arr) => {
      if (Array.isArray(arr)) list.push(...arr.filter(Boolean));
    });
    // Optional: sort by upvotes desc
    return list.sort((a, b) => (b.upvotes || 0) - (a.upvotes || 0));
  }, [categoryKey]);

  if (!categoryInfo) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
            <Link to="/">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
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
          <Link to="/">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl font-bold mb-2">{categoryInfo.title}</h1>
          <p className="text-muted-foreground">Explore {tools.length} AI tools in the {categoryInfo.title} category</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link key={tool.id} to={`/${tool.id}`}>
              <Card className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border bg-white/90 backdrop-blur-sm overflow-hidden h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{tool.icon}</div>
                      <div>
                        <CardTitle className="text-lg font-semibold flex items-center gap-2">
                          {tool.name}
                          {tool.verified && (
                            <Check className="h-4 w-4 text-primary" />
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
                      <span className="text-xs text-muted-foreground">{tool.rating?.toFixed(1) ?? "4.5"}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategoryPage;
