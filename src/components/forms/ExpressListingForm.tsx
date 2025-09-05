import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface FormData {
  websiteName: string;
  websiteLink: string;
  email: string;
  shortDescription: string;
  priceType: string;
  assets: string;
  robotCheck: boolean;
}

interface FormErrors {
  websiteName?: string;
  websiteLink?: string;
  email?: string;
  shortDescription?: string;
  priceType?: string;
  robotCheck?: string;
}

const ExpressListingForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    websiteName: "",
    websiteLink: "",
    email: "",
    shortDescription: "",
    priceType: "",
    assets: "",
    robotCheck: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.websiteName.trim()) {
      newErrors.websiteName = "Website name is required";
    }

    if (!formData.websiteLink.trim()) {
      newErrors.websiteLink = "Website link is required";
    } else {
      try {
        new URL(formData.websiteLink);
      } catch {
        newErrors.websiteLink = "Please enter a valid URL";
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.shortDescription.trim()) {
      newErrors.shortDescription = "Description is required";
    } else if (formData.shortDescription.length > 300) {
      newErrors.shortDescription = "Description must be under 300 characters";
    }

    if (!formData.priceType) {
      newErrors.priceType = "Please select a price type";
    }

    if (!formData.robotCheck) {
      newErrors.robotCheck = "Please verify you are not a robot";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      // Here you would typically send the data to your backend
      console.log("Form data:", formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Form submitted successfully!",
        description: "Redirecting to payment...",
      });
      
      // Redirect to payment page (you can customize this)
      setTimeout(() => {
        navigate("/payment");
      }, 1500);
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Express Listing – $49</h1>
            <p className="text-xl text-muted-foreground">Get listed quickly with our basic package</p>
          </div>

          {/* Form Card */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl">Submit Your AI Tool</CardTitle>
              <CardDescription>
                Fill out the form below to get your tool listed on AItoolsprime
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Website Name */}
                <div className="space-y-2">
                  <Label htmlFor="websiteName">Website Name *</Label>
                  <Input
                    id="websiteName"
                    placeholder="Enter your website/tool name"
                    value={formData.websiteName}
                    onChange={(e) => handleInputChange('websiteName', e.target.value)}
                  />
                  {errors.websiteName && (
                    <p className="text-sm font-medium text-destructive">{errors.websiteName}</p>
                  )}
                </div>

                {/* Website Link */}
                <div className="space-y-2">
                  <Label htmlFor="websiteLink">Website Link (URL) *</Label>
                  <Input
                    id="websiteLink"
                    placeholder="https://example.com"
                    value={formData.websiteLink}
                    onChange={(e) => handleInputChange('websiteLink', e.target.value)}
                  />
                  {errors.websiteLink && (
                    <p className="text-sm font-medium text-destructive">{errors.websiteLink}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                  {errors.email && (
                    <p className="text-sm font-medium text-destructive">{errors.email}</p>
                  )}
                </div>

                {/* Short Description */}
                <div className="space-y-2">
                  <Label htmlFor="shortDescription">Short Description *</Label>
                  <Textarea
                    id="shortDescription"
                    placeholder="Describe your AI tool in a few sentences (max 300 characters)"
                    className="min-h-[100px]"
                    value={formData.shortDescription}
                    onChange={(e) => handleInputChange('shortDescription', e.target.value)}
                  />
                  <div className="text-sm text-muted-foreground text-right">
                    {formData.shortDescription.length}/300 characters
                  </div>
                  {errors.shortDescription && (
                    <p className="text-sm font-medium text-destructive">{errors.shortDescription}</p>
                  )}
                </div>

                {/* Price Type */}
                <div className="space-y-2">
                  <Label>Price Type *</Label>
                  <RadioGroup
                    value={formData.priceType}
                    onValueChange={(value) => handleInputChange('priceType', value)}
                    className="flex flex-col space-y-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="free" id="free" />
                      <Label htmlFor="free">Free</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="freemium" id="freemium" />
                      <Label htmlFor="freemium">Freemium</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="free-trial" id="free-trial" />
                      <Label htmlFor="free-trial">Free Trial</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="paid" id="paid" />
                      <Label htmlFor="paid">Paid</Label>
                    </div>
                  </RadioGroup>
                  {errors.priceType && (
                    <p className="text-sm font-medium text-destructive">{errors.priceType}</p>
                  )}
                </div>

                {/* Provide Assets */}
                <div className="space-y-2">
                  <Label htmlFor="assets">Provide Assets (Optional)</Label>
                  <Textarea
                    id="assets"
                    placeholder="YouTube video URL, logo/icon URL, screenshots, etc."
                    className="min-h-[80px]"
                    value={formData.assets}
                    onChange={(e) => handleInputChange('assets', e.target.value)}
                  />
                </div>

                {/* reCAPTCHA / Robot Check */}
                <div className="flex items-start space-x-3 space-y-0">
                  <Checkbox
                    id="robotCheck"
                    checked={formData.robotCheck}
                    onCheckedChange={(checked) => handleInputChange('robotCheck', !!checked)}
                  />
                  <div className="space-y-1 leading-none">
                    <Label htmlFor="robotCheck">I am not a robot *</Label>
                  </div>
                </div>
                {errors.robotCheck && (
                  <p className="text-sm font-medium text-destructive">{errors.robotCheck}</p>
                )}

                {/* Submit Button */}
                <div className="pt-6">
                  <Button 
                    type="submit" 
                    className="w-full h-12 text-lg font-semibold gradient-primary hover:opacity-90 transition-smooth"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processing..." : "Continue to Payment"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          
          {/* Back to Plans Link */}
          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              onClick={() => navigate("/submit")}
              className="text-muted-foreground hover:text-foreground"
            >
              ← Back to Pricing Plans
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ExpressListingForm;