import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, CheckCircle, Zap, Crown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ToolPublishForm } from "@/components/publish/ToolPublishForm";

const PublishToolPage = () => {
  const [searchParams] = useSearchParams();
  const selectedPlan = (searchParams.get('plan') as 'fast' | 'verified' | 'featured') || 'fast';
  const [showForm, setShowForm] = useState(false);

  const planDetails = {
    fast: {
      name: "Fast Listing",
      price: "$49",
      icon: "🟦",
      color: "bg-blue-50 border-blue-200",
      features: [
        "Published within 3 days",
        "Listed in 'Latest AI' on homepage",
        "30 days in 'AItoolsprime Selection'",
        "Description up to 165 characters",
        "Extra link to your product page",
        "Indexed on Google"
      ]
    },
    verified: {
      name: "Verified Listing", 
      price: "$149",
      icon: "🟦",
      color: "bg-green-50 border-green-200",
      features: [
        "All Fast Listing features",
        "Published within 2 business days", 
        "Verified blue check mark for trust",
        "3 extra links to your product page",
        "Write up to 1000 words",
        "Add media: videos, audio, images",
        "60 days in 'AItoolsprime Selection'"
      ]
    },
    featured: {
      name: "Featured Ads",
      price: "$249", 
      icon: "🟦",
      color: "bg-purple-50 border-purple-200",
      features: [
        "Gold checkmark for maximum trust",
        "Published within 24 hours",
        "3 days featured on the website",
        "Featured on all category pages & homepage",
        "Featured on Full AI List and product pages",
        "+7 days on homepage among featured tools"
      ]
    }
  };

  const plan = planDetails[selectedPlan];

  const PlanSelection = () => (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/submit">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Plans
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold">Publish Your AI Tool</h1>
              <p className="text-muted-foreground">Submit your tool to reach 100,000+ AI professionals</p>
            </div>
          </div>
        </div>

        {/* Selected Plan Display */}
        <Card className={`mb-8 border-2 ${plan.color}`}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{plan.icon}</span>
                <div>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    {plan.name}
                    {selectedPlan === 'verified' && <CheckCircle className="h-6 w-6 text-blue-500" />}
                    {selectedPlan === 'featured' && <Crown className="h-6 w-6 text-yellow-500" />}
                  </CardTitle>
                  <CardDescription className="text-lg">
                    One-time fee: <span className="font-bold text-foreground">{plan.price}</span>
                  </CardDescription>
                </div>
              </div>
              
              {selectedPlan === 'verified' && (
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                  <Star className="h-3 w-3 mr-1" />
                  Most Popular
                </Badge>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {plan.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t">
              <Button 
                onClick={() => setShowForm(true)}
                className="w-full md:w-auto bg-gradient-to-r from-primary to-primary/80 hover:opacity-90"
                size="lg"
              >
                Continue with {plan.name}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Additional Information */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-500" />
                What happens next?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                <div>
                  <p className="font-medium">Submit your tool information</p>
                  <p className="text-sm text-muted-foreground">Fill out the form with your tool details</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                <div>
                  <p className="font-medium">Review & Payment</p>
                  <p className="text-sm text-muted-foreground">We'll review your submission and send payment details</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                <div>
                  <p className="font-medium">Go Live</p>
                  <p className="text-sm text-muted-foreground">Your tool gets published according to your plan timeline</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Our team reviews every submission to ensure quality and provide the best experience for our users.
              </p>
              <div className="space-y-2">
                <p className="text-sm"><strong>Questions?</strong> Contact us at support@aitoolshub.com</p>
                <p className="text-sm"><strong>Updates?</strong> You can modify your listing anytime after publication</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );

  if (showForm) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <ToolPublishForm 
            selectedPlan={selectedPlan}
            onClose={() => setShowForm(false)}
          />
        </main>
        <Footer />
      </div>
    );
  }

  return <PlanSelection />;
};

export default PublishToolPage;