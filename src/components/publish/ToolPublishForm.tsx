import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Upload, Globe, Tag, DollarSign, Loader2, CheckCircle, Crown } from "lucide-react";
import WebsiteSnapshot from "@/components/WebsiteSnapshot";

interface ToolPublishFormProps {
  selectedPlan: 'fast' | 'verified' | 'featured';
  onClose?: () => void;
}

const planDetails = {
  fast: {
    name: "Fast Listing",
    price: "$49",
    icon: "🟦",
    features: ["Published within 3 days", "Listed in Latest AI", "30 days in AItoolsprime Selection"]
  },
  verified: {
    name: "Verified Listing", 
    price: "$149",
    icon: "🟦",
    features: ["Published within 2 business days", "Verified blue check mark", "60 days in AItoolsprime Selection"]
  },
  featured: {
    name: "Featured Ads",
    price: "$249", 
    icon: "🟦",
    features: ["Published within 24 hours", "Gold checkmark", "3 days featured everywhere"]
  }
};

const categories = [
  "Writing & Editing",
  "Image Generation & Editing", 
  "Business & Research",
  "Office & Productivity",
  "AI Agents & Assistants",
  "Development & Code",
  "Video & Audio",
  "Marketing & SEO"
];

export const ToolPublishForm = ({ selectedPlan, onClose }: ToolPublishFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGeneratingSnapshot, setIsGeneratingSnapshot] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    description: "",
    category: "",
    tags: "",
    pricing: "",
    logo: null as File | null,
    additionalInfo: ""
  });

  const [websiteUrl, setWebsiteUrl] = useState("");
  const [snapshotGenerated, setSnapshotGenerated] = useState(false);

  const plan = planDetails[selectedPlan];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) { // 2MB limit
        toast({
          title: "File Too Large",
          description: "Please choose a logo smaller than 2MB.",
          variant: "destructive",
        });
        return;
      }
      setFormData(prev => ({ ...prev, logo: file }));
    }
  };

  const generateWebsiteSnapshot = async () => {
    if (!formData.url) {
      toast({
        title: "URL Required",
        description: "Please enter your website URL first.",
        variant: "destructive",
      });
      return;
    }

    setIsGeneratingSnapshot(true);
    setWebsiteUrl(formData.url);
    
    // Simulate snapshot generation
    setTimeout(() => {
      setSnapshotGenerated(true);
      setIsGeneratingSnapshot(false);
      toast({
        title: "Snapshot Generated",
        description: "Website preview has been captured successfully!",
      });
    }, 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.url || !formData.description || !formData.category) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Implement actual submission to Supabase
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Tool Submitted Successfully!",
        description: `Your ${plan.name} submission has been received. You'll receive an email confirmation shortly.`,
      });
      
      onClose?.();
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Plan Summary */}
      <Card className="border-2 border-primary/20">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{plan.icon}</span>
              <div>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>Selected plan: {plan.price} one-time fee</CardDescription>
              </div>
            </div>
            {selectedPlan === 'verified' && <CheckCircle className="h-8 w-8 text-blue-500" />}
            {selectedPlan === 'featured' && <Crown className="h-8 w-8 text-yellow-500" />}
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {plan.features.map((feature, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {feature}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tool Information Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Tool Information
            </CardTitle>
            <CardDescription>
              Provide basic information about your AI tool
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="tool-name">Tool Name *</Label>
                <Input
                  id="tool-name"
                  placeholder="Enter your AI tool name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="tool-url">Website URL *</Label>
                <Input
                  id="tool-url"
                  type="url"
                  placeholder="https://your-tool.com"
                  value={formData.url}
                  onChange={(e) => handleInputChange('url', e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                placeholder="Describe what your AI tool does and its main benefits..."
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                className="min-h-[100px]"
                maxLength={selectedPlan === 'fast' ? 165 : 1000}
                required
              />
              <p className="text-xs text-muted-foreground">
                {formData.description.length}/{selectedPlan === 'fast' ? 165 : 1000} characters
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select onValueChange={(value) => handleInputChange('category', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category.toLowerCase().replace(/\s+/g, '-')}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="pricing">Pricing Model</Label>
                <Select onValueChange={(value) => handleInputChange('pricing', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select pricing" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="free">Free</SelectItem>
                    <SelectItem value="freemium">Freemium</SelectItem>
                    <SelectItem value="subscription">Subscription</SelectItem>
                    <SelectItem value="one-time">One-time Purchase</SelectItem>
                    <SelectItem value="usage-based">Usage-based</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags">Tags</Label>
              <Input
                id="tags"
                placeholder="AI, writing, content, SEO (comma separated)"
                value={formData.tags}
                onChange={(e) => handleInputChange('tags', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="logo">Logo Upload</Label>
              <div className="flex items-center gap-4">
                <Input
                  id="logo"
                  type="file"
                  accept="image/*"
                  onChange={handleLogoUpload}
                  className="flex-1"
                />
                <div className="text-xs text-muted-foreground">
                  Max 2MB, PNG/JPG preferred
                </div>
              </div>
            </div>

            {(selectedPlan === 'verified' || selectedPlan === 'featured') && (
              <div className="space-y-2">
                <Label htmlFor="additional-info">Additional Information</Label>
                <Textarea
                  id="additional-info" 
                  placeholder="Additional details, features, use cases, or media descriptions..."
                  value={formData.additionalInfo}
                  onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                  className="min-h-[120px]"
                />
              </div>
            )}
          </CardContent>
        </Card>

        {/* Website Preview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Website Preview
            </CardTitle>
            <CardDescription>
              Generate a preview of your website for the listing
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4">
              <Button
                type="button"
                onClick={generateWebsiteSnapshot}
                disabled={!formData.url || isGeneratingSnapshot}
                variant="outline"
              >
                {isGeneratingSnapshot && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Generate Preview
              </Button>
              {snapshotGenerated && (
                <Badge variant="default" className="flex items-center gap-1">
                  <CheckCircle className="h-3 w-3" />
                  Preview Generated
                </Badge>
              )}
            </div>

            {websiteUrl && (
              <div className="max-w-md">
                <WebsiteSnapshot 
                  toolUrl={websiteUrl} 
                  toolName={formData.name || "Your Tool"} 
                />
              </div>
            )}
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="flex gap-4 justify-end">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-gradient-to-r from-primary to-primary/80 hover:opacity-90"
          >
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Submit Tool ({plan.price})
          </Button>
        </div>
      </form>
    </div>
  );
};