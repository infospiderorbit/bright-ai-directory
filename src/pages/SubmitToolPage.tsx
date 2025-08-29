import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, CheckCircle, Zap, RefreshCw, Crown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SubmitToolPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            🌐 Submit Your AI Tool
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get your AI tool in front of thousands of users. Choose the plan that works best for you.
          </p>
        </div>

        {/* Section 1: Quick Options */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Choose Your Option</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Submit AI */}
            <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-colors">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Submit AI</CardTitle>
                <CardDescription className="text-base">
                  List your AI tools and get direct traffic
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Advertise AI */}
            <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-colors">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl flex items-center justify-center gap-2">
                  Advertise AI <Star className="h-5 w-5 text-yellow-500" />
                </CardTitle>
                <CardDescription className="text-base">
                  Featured and highlighted across the site
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Update AI */}
            <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-colors">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <RefreshCw className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Update AI</CardTitle>
                <CardDescription className="text-base">
                  Quickly update your tool information
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Section 2: Pricing Plans */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">💰 Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Fast Listing */}
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">🟦 Fast Listing</CardTitle>
                <div className="text-3xl font-bold text-foreground">$49</div>
                <CardDescription>(one-time fee)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Why we charge</h4>
                  <p className="text-sm text-muted-foreground">Published within 3 days</p>
                  <p className="text-sm text-muted-foreground">With extra features</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Listing includes</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Listed in "Latest AI" on homepage + Full AI List</li>
                    <li>• 30 days in "AIxploria Selection" on Homepage</li>
                    <li>• Description of up to 165 characters</li>
                    <li>• An extra link to your product page</li>
                    <li>• Indexed on Google</li>
                  </ul>
                </div>
                
                <Button className="w-full mt-6">Submit your website</Button>
              </CardContent>
            </Card>

            {/* Verified Listing - Most Popular */}
            <Card className="relative border-2 border-primary">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground px-4 py-1">Most Popular</Badge>
              </div>
              <CardHeader className="pt-8">
                <CardTitle className="text-2xl text-primary">🟦 Verified Listing</CardTitle>
                <div className="text-3xl font-bold text-foreground">$149</div>
                <CardDescription>(one-time fee)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Why we charge</h4>
                  <p className="text-sm text-muted-foreground">Published within 2 business days</p>
                  <p className="text-sm text-muted-foreground">Ability to add long texts and media</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Listing includes</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• All Fast Listing features</li>
                    <li>• Verified blue check mark for trust</li>
                    <li>• Listed in "Latest AI" on homepage + Full AI List</li>
                    <li>• 3 extra links to your product page</li>
                    <li>• Write up to 1000 words</li>
                    <li>• Add media: videos, audio, images</li>
                    <li>• 60 days in "AItoolsprime Selection" on Homepage</li>
                  </ul>
                </div>
                
                <Button className="w-full mt-6">Submit your website</Button>
              </CardContent>
            </Card>

            {/* Featured Ads */}
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-2">
                  🟦 Featured Ads <Crown className="h-6 w-6 text-yellow-500" />
                </CardTitle>
                <div className="text-3xl font-bold text-foreground">$249</div>
                <CardDescription>AI tool displayed almost everywhere</CardDescription>
                <p className="text-sm text-muted-foreground">Featured duration: 3 days</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Includes</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Gold checkmark for maximum trust</li>
                    <li>• 3 days featured on the website</li>
                    <li>• Featured on all category pages & homepage</li>
                    <li>• Featured on Full AI List and all product pages</li>
                    <li>• +7 days on homepage among the 8 featured tools</li>
                  </ul>
                </div>
                
                <Button className="w-full mt-6">Book a place</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 3: FAQ */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">❓ Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Q1. How long does it take for my tool to be published?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Fast Listing: within 3 days</li>
                  <li>• Verified Listing: within 2 business days</li>
                  <li>• Featured Ads: within 24 hours</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Q2. Why do you charge a fee for listing?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We review every submission to ensure quality, prevent spam, and give genuine exposure to your AI tool. The small one-time fee helps us maintain and promote the platform.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Q3. Can I edit or update my tool information after publishing?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes ✅ You can request updates anytime. The Update AI option makes it easy to modify descriptions, links, or media.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Q4. What is the Verified Badge?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A blue check mark on your tool page that shows users your AI tool is genuine and trusted. Verified tools also get more visibility and higher clicks.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Q5. What is the difference between Verified Listing and Featured Ads?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-muted-foreground space-y-2">
                  <p><strong>Verified Listing →</strong> Long-term trust, more links, media, and extended homepage visibility.</p>
                  <p><strong>Featured Ads →</strong> Premium short-term exposure where your tool is highlighted almost everywhere on the site.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Q6. Do you guarantee traffic or signups?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We guarantee visibility (homepage, categories, featured spots), but actual traffic depends on audience interest and your tool's value. However, featured placements often bring significant clicks.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Q7. Is the payment one-time or recurring?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All current plans are one-time fees, no recurring charges.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SubmitToolPage;