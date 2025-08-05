import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { categoriesData, getCategoryIcon } from "@/data/categoriesData";

const CategoriesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Find AI By Categories</h1>
          <p className="text-muted-foreground">Browse AI tools organized by category and functionality</p>
        </div>

        <div className="space-y-8">
          {Object.entries(categoriesData).map(([categoryKey, categoryData]) => (
            <Card key={categoryKey} className="overflow-hidden">
              <CardHeader className="bg-muted/50">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <span className="text-3xl">{getCategoryIcon(categoryKey)}</span>
                  <Link 
                    to={`/category/${categoryKey}`}
                    className="hover:text-primary transition-colors"
                  >
                    {categoryData.title}
                  </Link>
                  <Badge variant="secondary" className="ml-auto">
                    {categoryData.totalCount.toLocaleString()}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {Object.entries(categoryData.subcategories).map(([subKey, subData]) => (
                    <Link
                      key={subKey}
                      to={`/category/${categoryKey}/${subKey}`}
                      className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors group"
                    >
                      <span className="text-sm font-medium group-hover:text-primary transition-colors">
                        {subData.title}
                      </span>
                      <Badge variant="outline" className="text-xs">
                        {subData.count}
                      </Badge>
                    </Link>
                  ))}
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

export default CategoriesPage;