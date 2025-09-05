import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const formSchema = z.object({
  websiteName: z.string().min(1, "Website name is required"),
  websiteLink: z.string().url("Please enter a valid URL"),
  email: z.string().email("Please enter a valid email address"),
  shortDescription: z.string().min(1, "Description is required").max(300, "Description must be under 300 characters"),
  priceType: z.enum(["free", "freemium", "free-trial", "paid"], {
    required_error: "Please select a price type",
  }),
  assets: z.string().optional(),
  robotCheck: z.boolean().refine(val => val === true, "Please verify you are not a robot"),
});

type FormData = z.infer<typeof formSchema>;

const ExpressListingForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      websiteName: "",
      websiteLink: "",
      email: "",
      shortDescription: "",
      priceType: undefined,
      assets: "",
      robotCheck: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Here you would typically send the data to your backend
      console.log("Form data:", data);
      
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
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  
                  {/* Website Name */}
                  <FormField
                    control={form.control}
                    name="websiteName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Website Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your website/tool name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Website Link */}
                  <FormField
                    control={form.control}
                    name="websiteLink"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Website Link (URL) *</FormLabel>
                        <FormControl>
                          <Input placeholder="https://example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Short Description */}
                  <FormField
                    control={form.control}
                    name="shortDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Short Description *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe your AI tool in a few sentences (max 300 characters)"
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <div className="text-sm text-muted-foreground text-right">
                          {field.value?.length || 0}/300 characters
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Price Type */}
                  <FormField
                    control={form.control}
                    name="priceType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Price Type *</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
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
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Provide Assets */}
                  <FormField
                    control={form.control}
                    name="assets"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Provide Assets (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="YouTube video URL, logo/icon URL, screenshots, etc."
                            className="min-h-[80px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* reCAPTCHA / Robot Check */}
                  <FormField
                    control={form.control}
                    name="robotCheck"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>I am not a robot *</FormLabel>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

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
              </Form>
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