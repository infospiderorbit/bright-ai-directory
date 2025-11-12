import { Helmet } from "react-helmet-async";
import { Sparkles, Search, MessageCircle, Book, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const HelpCenter = () => {
  const faqData = [
    {
      category: "Getting Started",
      questions: [
        {
          q: "How do I find AI tools on AI Tools Prime?",
          a: "You can browse our extensive catalog by category, use the search function, or explore our featured tools section. Each tool includes detailed information, pricing, and user reviews."
        },
        {
          q: "Is AI Tools Prime free to use?",
          a: "Yes! Browsing and discovering AI tools on our platform is completely free. Some listed tools may have their own pricing models."
        },
        {
          q: "How do I submit my AI tool?",
          a: "Click the 'Submit' button in the navigation bar and fill out our submission form with your tool's details, features, and relevant information."
        }
      ]
    },
    {
      category: "Tool Listings",
      questions: [
        {
          q: "How are tools reviewed before listing?",
          a: "Our team reviews each submission for quality, functionality, and relevance. We ensure all listed tools meet our community standards."
        },
        {
          q: "Can I update my tool's information?",
          a: "Yes, you can contact us at support@aitoolsprime.com with updates to your tool's listing."
        },
        {
          q: "What makes a tool featured?",
          a: "Featured tools are selected based on innovation, user engagement, and overall quality. We also offer promotional opportunities."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Help Center - AI TOOLS PRIME | Find Support & Resources</title>
        <meta name="description" content="Get help with AI Tools Prime. Find answers to common questions, browse our guides, and learn how to discover and submit AI tools." />
        <meta property="og:title" content="Help Center - AI TOOLS PRIME" />
        <meta property="og:description" content="Get help with AI Tools Prime. Find answers to common questions, browse our guides, and learn how to discover and submit AI tools." />
        <meta property="og:url" content="https://www.aitoolsprime.com/help" />
        <meta name="twitter:title" content="Help Center - AI TOOLS PRIME" />
        <meta name="twitter:description" content="Get help with AI Tools Prime. Find answers to common questions, browse our guides, and learn how to discover and submit AI tools." />
        <link rel="canonical" href="https://www.aitoolsprime.com/help" />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
              <Book className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6">Help Center</h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Find answers to your questions and get the most out of AI Tools Prime
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input 
              placeholder="Search for help articles..." 
              className="pl-12 h-14 text-lg bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Quick Help Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center hover:shadow-hover transition-smooth">
            <CardHeader>
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <CardTitle>Getting Started Guide</CardTitle>
              <CardDescription>
                Learn how to navigate and discover the best AI tools for your needs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                View Guide <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-hover transition-smooth">
            <CardHeader>
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <CardTitle>Submit Your Tool</CardTitle>
              <CardDescription>
                Step-by-step instructions for listing your AI tool on our platform
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Learn More <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-hover transition-smooth">
            <CardHeader>
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-white" />
              </div>
              <CardTitle>Search & Filter</CardTitle>
              <CardDescription>
                Master our advanced search and filtering options to find exactly what you need
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                View Tutorial <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-primary">{category.category}</h3>
              <div className="space-y-6">
                {category.questions.map((faq, index) => (
                  <Card key={index} className="border-l-4 border-l-primary">
                    <CardHeader>
                      <CardTitle className="text-lg">{faq.q}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{faq.a}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Still Need Help?</CardTitle>
              <CardDescription>
                Can't find the answer you're looking for? Our support team is here to help.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="gradient-primary text-white">
                Contact Support
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Email us at: support@aitoolsprime.com
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default HelpCenter;