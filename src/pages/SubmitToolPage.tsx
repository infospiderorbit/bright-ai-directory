import React from "react";
import { Link } from "react-router-dom";
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
      
      {/* Hero / Banner Section (Dark Background) */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 mb-16">
        <div className="container mx-auto px-4">
          {/* Top Label */}
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium animate-fade-in">
              ✨ AItoolsprime
            </span>
          </div>
          
          {/* Main Content */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Reach a Premium Audience of AI Professionals
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in">
              Connect with over 100,000+ AI professionals and users who trust our platform for discovering top-quality AI tools.
            </h2>
          </div>

          {/* Key Stats - 4-column grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 animate-scale-in">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-smooth">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">100,000+</div>
              <div className="text-gray-300 text-sm">visitors per month</div>
            </div>
            
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-smooth">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">4x</div>
              <div className="text-gray-300 text-sm">AItoolsprime traffic growth in 6 months</div>
            </div>
            
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-smooth">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">54%</div>
              <div className="text-gray-300 text-sm">of visitors use desktop</div>
            </div>
            
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-smooth">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">200+</div>
              <div className="text-gray-300 text-sm">countries reached by our visitors</div>
            </div>
          </div>

          {/* Supporting Line */}
          <div className="text-center mb-10">
            <p className="text-lg text-gray-300 max-w-3xl mx-auto animate-fade-in">
              By joining AItoolsprime, you can present your tool to a global audience of AI professionals and real users.
            </p>
          </div>
        </div>
      </section>
      
      <main className="container mx-auto px-4 pb-16">

        {/* Section 1: Quick Options */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center animate-fade-in">Choose Your Option</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Submit AI */}
            <Card className="relative overflow-hidden shadow-card hover:shadow-hover transition-smooth group cursor-pointer animate-scale-in border-2 border-primary/20">
              <div className="absolute inset-0 gradient-primary opacity-5 group-hover:opacity-10 transition-smooth"></div>
              <CardHeader className="text-center pb-8 relative z-10">
                <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 animate-float group-hover:scale-110 transition-smooth">
                  <Zap className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl mb-3 flex items-center justify-center gap-2">
                  Submit AI <Star className="h-6 w-6 text-yellow-500" />
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  List your AI tools and get direct traffic
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Advertise AI */}
            <Card className="relative overflow-hidden shadow-card hover:shadow-hover transition-smooth group cursor-pointer animate-scale-in">
              <div className="absolute inset-0 gradient-secondary opacity-0 group-hover:opacity-100 transition-smooth"></div>
              <CardHeader className="text-center pb-8 relative z-10">
                <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 animate-float group-hover:scale-110 transition-smooth">
                  <Star className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl mb-3">Advertise AI</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Featured and highlighted across the site
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Update AI */}
            <Card className="relative overflow-hidden shadow-card hover:shadow-hover transition-smooth group cursor-pointer animate-scale-in">
              <div className="absolute inset-0 gradient-secondary opacity-0 group-hover:opacity-100 transition-smooth"></div>
              <CardHeader className="text-center pb-8 relative z-10">
                <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 animate-float group-hover:scale-110 transition-smooth">
                  <RefreshCw className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl mb-3">Update AI</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Quickly update your tool information
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Section 2: Pricing Plans */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-foreground mb-16 text-center animate-fade-in">💰 Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            {/* Fast Listing */}
            <Card className="relative shadow-card hover:shadow-hover transition-smooth group animate-scale-in">
              <div className="absolute inset-0 gradient-secondary opacity-0 group-hover:opacity-100 transition-smooth"></div>
              <CardHeader className="relative z-10 pb-4">
                <CardTitle className="text-3xl text-white font-bold mb-2 px-6 py-3 rounded-lg text-center" style={{background: 'var(--gradient-primary)'}}>
                  <div>🟦 Express Listing</div>
                  <div className="text-sm font-normal opacity-90">(fast approval & go live quickly)</div>
                </CardTitle>
                <div className="text-5xl font-bold text-foreground mb-2">$49</div>
                <CardDescription className="text-base">(one-time fee)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-3">Why we charge</h4>
                  <p className="text-sm text-muted-foreground">Published within 3 days</p>
                  <p className="text-sm text-muted-foreground">With extra features</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Listing includes</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />Listed in "Latest AI" on homepage + Full AI List</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />30 days in "Aitoolsprime Selection" on Homepage</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />Description of up to 165 characters</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />An extra link to your product page</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />Indexed on Google</li>
                  </ul>
                </div>
                
                <Button 
                  className="w-full mt-8 h-12 text-base font-semibold gradient-primary hover:opacity-90 transition-smooth"
                  onClick={(e) => e.preventDefault()}
                >
                  Submit your website
                </Button>
              </CardContent>
            </Card>

            {/* Verified Listing - Most Popular */}
            <Card className="relative border-2 border-primary shadow-card hover:shadow-hover transition-smooth group animate-scale-in scale-105 z-10">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                <Badge className="gradient-primary px-6 py-2 text-base font-semibold animate-float">Most Popular</Badge>
              </div>
              <div className="absolute inset-0 gradient-primary opacity-5 group-hover:opacity-10 transition-smooth"></div>
              <CardHeader className="pt-10 relative z-10">
                <CardTitle className="text-3xl text-white font-bold mb-2 px-6 py-3 rounded-lg text-center" style={{background: 'var(--gradient-primary)'}}>
                  <div>🟦 Verified Listing</div>
                  <div className="text-sm font-normal opacity-90">(trust badge + higher credibility)</div>
                </CardTitle>
                <div className="text-5xl font-bold text-foreground mb-2">$149</div>
                <CardDescription className="text-base">(one-time fee)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-3">Why we charge</h4>
                  <p className="text-sm text-muted-foreground">Published within 2 business days</p>
                  <p className="text-sm text-muted-foreground">Ability to add long texts and media</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Listing includes</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />All Fast Listing features</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />Verified blue check mark for trust</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />Listed in "Latest AI" on homepage + Full AI List</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />3 extra links to your product page</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />Write up to 1000 words</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />Add media: videos, audio, images</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />60 days in "Aitoolsprime Selection" on Homepage</li>
                  </ul>
                </div>
                
                <Button 
                  className="w-full mt-8 h-12 text-base font-semibold gradient-primary hover:opacity-90 transition-smooth"
                  onClick={(e) => e.preventDefault()}
                >
                  Submit your website
                </Button>
              </CardContent>
            </Card>

            {/* Featured Ads */}
            <Card className="relative shadow-card hover:shadow-hover transition-smooth group animate-scale-in">
              <div className="absolute inset-0 gradient-secondary opacity-0 group-hover:opacity-100 transition-smooth"></div>
              <CardHeader className="relative z-10 pb-4">
                <CardTitle className="text-3xl text-white font-bold mb-2 px-6 py-3 rounded-lg text-center" style={{background: 'var(--gradient-primary)'}}>
                  <div className="flex items-center justify-center gap-2">🟦 Premium Featured Listing <Crown className="h-8 w-8 text-yellow-300 animate-float" /></div>
                  <div className="text-sm font-normal opacity-90">(maximum visibility + top placement)</div>
                </CardTitle>
                <div className="text-5xl font-bold text-foreground mb-2">$249</div>
                <CardDescription className="text-base">AI tool displayed almost everywhere</CardDescription>
                <p className="text-sm text-muted-foreground font-medium">Featured duration: 3 days</p>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Includes</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-start gap-2"><Crown className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />Gold checkmark for maximum trust</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />3 days featured on the website</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />Featured on all category pages & homepage</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />Featured on Full AI List and all product pages</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />+7 days on homepage among the 8 featured tools</li>
                  </ul>
                </div>
                
                <Button 
                  className="w-full mt-8 h-12 text-base font-semibold gradient-primary hover:opacity-90 transition-smooth"
                  onClick={(e) => e.preventDefault()}
                >
                  Book a place
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 3: FAQ */}
        <section>
          <h2 className="text-4xl font-bold text-foreground mb-16 text-center animate-fade-in">❓ Frequently Asked Questions</h2>
          <div className="max-w-5xl mx-auto space-y-6">
            
            <Card className="shadow-card hover:shadow-hover transition-smooth animate-scale-in">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-primary">Q1. How long does it take for my tool to be published?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <p className="font-semibold text-green-800">Fast Listing</p>
                    <p className="text-green-700">within 3 days</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="font-semibold text-blue-800">Verified Listing</p>
                    <p className="text-blue-700">within 2 business days</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <p className="font-semibold text-purple-800">Featured Ads</p>
                    <p className="text-purple-700">within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-hover transition-smooth animate-scale-in">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-primary">Q2. Why do you charge a fee for listing?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-base leading-relaxed">
                  We review every submission to ensure quality, prevent spam, and give genuine exposure to your AI tool. The small one-time fee helps us maintain and promote the platform.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-hover transition-smooth animate-scale-in">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-primary">Q3. Can I edit or update my tool information after publishing?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Yes ✅ You can request updates anytime. The Update AI option makes it easy to modify descriptions, links, or media.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-hover transition-smooth animate-scale-in">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-primary">Q4. What is the Verified Badge?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-base leading-relaxed">
                  A blue check mark on your tool page that shows users your AI tool is genuine and trusted. Verified tools also get more visibility and higher clicks.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-hover transition-smooth animate-scale-in">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-primary">Q5. What is the difference between Verified Listing and Featured Ads?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <p className="font-semibold text-blue-800 mb-2">Verified Listing →</p>
                    <p className="text-blue-700">Long-term trust, more links, media, and extended homepage visibility.</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                    <p className="font-semibold text-purple-800 mb-2">Featured Ads →</p>
                    <p className="text-purple-700">Premium short-term exposure where your tool is highlighted almost everywhere on the site.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-hover transition-smooth animate-scale-in">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-primary">Q6. Do you guarantee traffic or signups?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-base leading-relaxed">
                  We guarantee visibility (homepage, categories, featured spots), but actual traffic depends on audience interest and your tool's value. However, featured placements often bring significant clicks.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-hover transition-smooth animate-scale-in">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-primary">Q7. Is the payment one-time or recurring?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-base leading-relaxed">
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