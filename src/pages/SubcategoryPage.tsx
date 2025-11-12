import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ExternalLink, Star, ArrowUp, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { categoriesData, getCategoryIcon } from "@/data/categoriesData";
import { getToolsBySubcategory } from "@/data/toolsData";

const SubcategoryPage = () => {
  const { category, subcategory } = useParams();
  
  const categoryData = categoriesData[category as keyof typeof categoriesData];
  const subcategoryData = categoryData?.subcategories?.[subcategory as string];
  const tools = getToolsBySubcategory(category || "", subcategory || "");

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

  const pageTitle = `${subcategoryData.title} AI Tools - Best ${subcategoryData.title} Solutions | AI TOOLS PRIME`;
  const pageDescription = `Explore ${subcategoryData.count} ${subcategoryData.title} AI tools. Find the perfect AI solution for ${subcategoryData.title.toLowerCase()} with detailed reviews and comparisons.`;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={`https://www.aitoolsprime.com/category/${category}/${subcategory}`} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <link rel="canonical" href={`https://www.aitoolsprime.com/category/${category}/${subcategory}`} />
      </Helmet>
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
          {tools.length > 0 ? tools.map((tool) => (
            <Link key={tool.id} to={`/${tool.id}`}>
              <Card className="group hover:shadow-lg transition-shadow duration-300 cursor-pointer">
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
            </Link>
          )) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground text-lg">No tools available for this subcategory yet.</p>
              <p className="text-sm text-muted-foreground mt-2">Check back soon for updates!</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SubcategoryPage;