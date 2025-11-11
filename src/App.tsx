import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "@/components/auth/AuthProvider";
import Index from "./pages/Index";
import CategoryPage from "./pages/CategoryPage";
import CategoriesPage from "./pages/CategoriesPage";
import SubcategoryPage from "./pages/SubcategoryPage";
import ToolPage from "./pages/ToolPage";
import SubmitToolPage from "./pages/SubmitToolPage";
import PublishToolPage from "./pages/PublishToolPage";
import ExpressListingForm from "./components/forms/ExpressListingForm";
import VerifiedListingForm from "./components/forms/VerifiedListingForm";
import HelpCenter from "./pages/HelpCenter";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/category/:category/:subcategory" element={<SubcategoryPage />} />
            <Route path="/category/:category/:subcategory/:tool" element={<ToolPage />} />
            <Route path="/submit" element={<SubmitToolPage />} />
            <Route path="/submit/express" element={<ExpressListingForm />} />
            <Route path="/submit/verified" element={<VerifiedListingForm />} />
            <Route path="/publish-tool" element={<PublishToolPage />} />
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="/:tool" element={<ToolPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
