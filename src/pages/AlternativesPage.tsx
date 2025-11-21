import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HorizontalToolCard from "@/components/HorizontalToolCard";
import { toolsData } from "@/data/toolsData";
import { categoriesData } from "@/data/categoriesData";

const AlternativesPage = () => {
  const { tool: toolSlug } = useParams();

  // Find the tool and its category/subcategory
  let toolData, categoryKey, subcategoryKey, categoryData, subcategoryData;
  
  for (const [catKey, catData] of Object.entries(toolsData)) {
    for (const [subKey, subTools] of Object.entries(catData)) {
      if (Array.isArray(subTools)) {
        const foundTool = subTools.find(t => t && t.id === toolSlug);
        if (foundTool) {
          toolData = foundTool;
          categoryKey = catKey;
          subcategoryKey = subKey;
          categoryData = categoriesData[catKey];
          subcategoryData = categoryData?.subcategories?.[subKey];
          break;
        }
      }
    }
    if (toolData) break;
  }

  if (!toolData || !categoryKey || !subcategoryKey) {
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

  // Get all tools from the same subcategory
  const tools = toolsData[categoryKey]?.[subcategoryKey] || [];
  const alternativeTools = tools.filter(tool => tool.id !== toolSlug);

  // SEO meta information
  const pageTitle = `Top ${toolData.name} Alternatives - AI Tools | AI TOOLS PRIME`;
  const pageDescription = `Discover the best alternatives to ${toolData.name}. Compare features, pricing, and reviews of similar AI tools in the ${subcategoryData?.title || 'AI'} category.`;
  const pageUrl = `https://www.aitoolsprime.com/alternatives/${toolSlug}`;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={pageUrl} />
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
                <Link to={`/${toolSlug}`}>{toolData.name}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbPage>Alternatives</BreadcrumbPage>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Top {toolData.name} Alternatives
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore {alternativeTools.length} alternative{alternativeTools.length !== 1 ? 's' : ''} to {toolData.name} in the {subcategoryData?.title || 'AI'} category
          </p>
        </div>

        {/* Alternatives Grid */}
        {alternativeTools.length > 0 ? (
          <div className="grid gap-6">
            {alternativeTools.map((tool) => (
              <HorizontalToolCard
                key={tool.id}
                name={tool.name}
                description={tool.description}
                logo={tool.icon}
                url={tool.url || `https://www.aitoolsprime.com/${tool.id}`}
                toolSlug={tool.id}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-6">No alternatives found for {toolData.name}.</p>
            <Link to={`/${toolSlug}`}>
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to {toolData.name}
              </Button>
            </Link>
          </div>
        )}

        {/* Back to Tool Link */}
        {alternativeTools.length > 0 && (
          <div className="mt-8 text-center">
            <Link to={`/${toolSlug}`}>
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to {toolData.name}
              </Button>
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default AlternativesPage;
