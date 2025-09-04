import { Shield, Eye, Lock, UserCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
              <Shield className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-white/70">
            Last updated: December 2024
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Privacy Principles */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We're clear about what data we collect and how we use it</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Your data is protected with industry-standard security measures</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserCheck className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">Control</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">You have control over your personal information at all times</p>
              </CardContent>
            </Card>
          </div>

          {/* Policy Content */}
          <div className="prose max-w-none space-y-8">
            
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Information You Provide</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Contact information when you submit AI tools or contact us</li>
                    <li>Account details if you create an account</li>
                    <li>Feedback and reviews you submit</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Automatically Collected Information</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Website usage data and analytics</li>
                    <li>Device information and browser type</li>
                    <li>IP address and location data</li>
                    <li>Cookies and similar technologies</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>To provide and improve our AI tools directory service</li>
                  <li>To process and display submitted AI tools</li>
                  <li>To communicate with you about our services</li>
                  <li>To analyze website usage and optimize user experience</li>
                  <li>To prevent fraud and ensure platform security</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Information Sharing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We do not sell, trade, or rent your personal information to third parties. We may share information in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>With service providers who assist in operating our website</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transfer or merger</li>
                  <li>With your explicit consent</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Cookies and Tracking</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We use cookies and similar technologies to enhance your browsing experience:
                </p>
                <div>
                  <h4 className="font-semibold mb-2">Essential Cookies</h4>
                  <p className="text-muted-foreground">Required for basic website functionality and security.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Analytics Cookies</h4>
                  <p className="text-muted-foreground">Help us understand how visitors interact with our website.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Preference Cookies</h4>
                  <p className="text-muted-foreground">Remember your settings and preferences for future visits.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Your Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">You have the following rights regarding your personal information:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Access: Request a copy of the personal information we hold about you</li>
                  <li>Correction: Request correction of inaccurate information</li>
                  <li>Deletion: Request deletion of your personal information</li>
                  <li>Portability: Request transfer of your data to another service</li>
                  <li>Objection: Object to certain processing of your information</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Data Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security assessments.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Email:</strong> privacy@aitoolsprime.com</p>
                  <p><strong>Support:</strong> support@aitoolsprime.com</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;