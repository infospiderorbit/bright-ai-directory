import { Helmet } from "react-helmet-async";
import { FileText, Scale, Users, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Terms of Service - AI TOOLS PRIME | User Agreement</title>
        <meta name="description" content="Read AI Tools Prime terms of service. Learn about our user agreement, guidelines for using our AI tools directory, and tool submission policies." />
        <meta property="og:title" content="Terms of Service - AI TOOLS PRIME" />
        <meta property="og:description" content="Read AI Tools Prime terms of service and user agreement." />
        <meta property="og:url" content="https://www.aitoolsprime.com/terms" />
        <meta name="twitter:title" content="Terms of Service - AI TOOLS PRIME" />
        <meta name="twitter:description" content="Read AI Tools Prime terms of service and user agreement." />
        <link rel="canonical" href="https://www.aitoolsprime.com/terms" />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
              <FileText className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Please read these terms carefully before using AI Tools Prime
          </p>
          <p className="text-sm text-white/70">
            Last updated: December 2024
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Key Points */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">Fair Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Use our platform responsibly and in accordance with applicable laws</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Maintain respectful interactions within our community</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Follow our guidelines for content and tool submissions</p>
              </CardContent>
            </Card>
          </div>

          {/* Terms Content */}
          <div className="prose max-w-none space-y-8">
            
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  By accessing and using AI Tools Prime ("Service", "Platform", "Website"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">2. Description of Service</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  AI Tools Prime is a directory and discovery platform for artificial intelligence tools and services. Our platform provides:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>A comprehensive directory of AI tools and services</li>
                  <li>Tool reviews, ratings, and user feedback</li>
                  <li>Categorization and search functionality</li>
                  <li>Tool submission and listing services</li>
                  <li>Educational content about AI technologies</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">3. User Accounts and Registration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  To access certain features of our Service, you may be required to register for an account. You agree to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and update your account information</li>
                  <li>Keep your password secure and confidential</li>
                  <li>Notify us immediately of any unauthorized access</li>
                  <li>Accept responsibility for all activities under your account</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">4. Tool Submissions and Content</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Submission Guidelines</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Tools must be functional AI-powered applications or services</li>
                    <li>Provide accurate descriptions, features, and pricing information</li>
                    <li>Include appropriate screenshots and documentation</li>
                    <li>Ensure you have the right to submit and promote the tool</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Content Standards</h4>
                  <p className="text-muted-foreground">
                    All submitted content must be appropriate, lawful, and not infringe on third-party rights. We reserve the right to review, modify, or remove any submissions.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">5. Prohibited Uses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">You may not use our Service:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                  <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                  <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>To submit false or misleading information</li>
                  <li>To upload or transmit viruses or any other type of malicious code</li>
                  <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">6. Intellectual Property Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Our Content</h4>
                  <p className="text-muted-foreground">
                    The Service and its original content, features, and functionality are and will remain the exclusive property of AI Tools Prime and its licensors.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">User Content</h4>
                  <p className="text-muted-foreground">
                    You retain ownership of content you submit, but grant us a license to use, display, and distribute such content on our platform.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">7. Third-Party Tools and Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our platform lists third-party AI tools and services. We do not endorse, warrant, or assume responsibility for any third-party tools, products, or services advertised on our platform. Users engage with third-party tools at their own risk.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">8. Disclaimer of Warranties</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The information on this platform is provided on an "as is" basis. AI Tools Prime makes no representations or warranties of any kind, express or implied, regarding the operation of the platform or the information, content, or materials included herein.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">9. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  AI Tools Prime shall not be liable for any damages of any kind arising from the use of this platform, including but not limited to direct, indirect, incidental, punitive, and consequential damages.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">10. Termination</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including but not limited to a breach of the Terms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">11. Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We reserve the right to modify these terms at any time. We will always post the most current version on our website. By continuing to use the platform after changes become effective, you agree to be bound by the revised terms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">12. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-1 text-muted-foreground">
                  <p><strong>Email:</strong> legal@aitoolsprime.com</p>
                  <p><strong>Support:</strong> support@aitoolsprime.com</p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;