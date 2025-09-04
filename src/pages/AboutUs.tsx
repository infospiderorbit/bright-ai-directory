import { Sparkles, Target, Users, Zap, Globe, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      description: "AI researcher with 10+ years in machine learning and product development."
    },
    {
      name: "Sarah Johnson", 
      role: "Head of Product",
      description: "Former tech lead at major AI companies, passionate about user experience."
    },
    {
      name: "David Rodriguez",
      role: "Technical Director", 
      description: "Full-stack developer specializing in AI integration and scalable platforms."
    }
  ];

  const stats = [
    { label: "AI Tools Listed", value: "2,500+", icon: Zap },
    { label: "Monthly Users", value: "100K+", icon: Users },
    { label: "Countries Served", value: "150+", icon: Globe },
    { label: "Tools Added Monthly", value: "200+", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6">About AI Tools Prime</h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            We're democratizing access to artificial intelligence by building the world's most comprehensive directory of AI tools and services.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        
        {/* Mission Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <Card className="border-none shadow-hover">
            <CardHeader>
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-3xl mb-4">Our Mission</CardTitle>
              <CardDescription className="text-lg leading-relaxed">
                To bridge the gap between AI innovation and practical application by providing a centralized platform where individuals and businesses can discover, evaluate, and implement the right AI solutions for their needs.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center hover:shadow-hover transition-smooth">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-primary">{stat.value}</CardTitle>
                  <CardDescription className="font-medium">{stat.label}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">The Problem We Saw</h3>
              <p className="text-muted-foreground mb-6">
                As artificial intelligence rapidly advanced, we noticed a growing disconnect between groundbreaking AI innovations and their practical adoption. Businesses and individuals struggled to navigate the overwhelming landscape of AI tools, often missing opportunities to leverage solutions that could transform their workflows.
              </p>
              <p className="text-muted-foreground">
                The AI ecosystem was fragmented, with valuable tools scattered across the internet without a centralized discovery platform.
              </p>
            </div>
            <Card className="p-8">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-10 w-10 text-white" />
                </div>
                <CardTitle>Founded in 2024</CardTitle>
                <CardDescription>
                  Born from a passion to make AI accessible to everyone
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
            <Card className="p-8 md:order-2">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <CardTitle>Our Solution</CardTitle>
                <CardDescription>
                  A comprehensive, user-friendly AI tools directory
                </CardDescription>
              </CardHeader>
            </Card>
            <div className="md:order-1">
              <h3 className="text-2xl font-semibold mb-6">How We're Solving It</h3>
              <p className="text-muted-foreground mb-6">
                AI Tools Prime serves as the bridge between AI innovation and practical implementation. We carefully curate and categorize AI tools, providing detailed information, user reviews, and expert insights to help users make informed decisions.
              </p>
              <p className="text-muted-foreground">
                Our platform empowers developers, entrepreneurs, marketers, and professionals from all industries to discover and implement AI solutions that can enhance their productivity and drive innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-hover transition-smooth">
              <CardHeader>
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Accessibility</CardTitle>
                <CardDescription className="mt-4">
                  We believe AI should be accessible to everyone, regardless of technical background or company size.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-hover transition-smooth">
              <CardHeader>
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Innovation</CardTitle>
                <CardDescription className="mt-4">
                  We're committed to showcasing cutting-edge AI technologies and supporting innovative creators.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-hover transition-smooth">
              <CardHeader>
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Quality</CardTitle>
                <CardDescription className="mt-4">
                  Every tool in our directory is carefully reviewed to ensure it meets our standards for functionality and value.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-hover transition-smooth">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Join Our Mission</CardTitle>
              <CardDescription>
                Help us build the most comprehensive AI tools directory in the world.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="gradient-primary text-white">
                  Submit Your Tool
                </Button>
                <Button variant="outline">
                  Contact Us
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Questions? Reach us at: hello@aitoolsprime.com
              </p>
            </CardContent>
          </Card>
        </div>

      </div>
      
      <Footer />
    </div>
  );
};

export default AboutUs;