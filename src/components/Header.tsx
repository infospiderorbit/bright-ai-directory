import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-2 gradient-primary rounded-lg">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">
              aitoolsprime.com
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth font-medium">
              Full List
            </a>
            <Link to="/categories" className="text-muted-foreground hover:text-foreground transition-smooth font-medium">
              AI Categories
            </Link>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth font-medium">
              AI Tutorials
            </a>
            <Button 
              asChild 
              className="gradient-primary text-white font-semibold px-6 py-2 rounded-full hover:scale-105 transition-all"
            >
              <a href="https://aitoolsprime.com/submit-tool" target="_blank" rel="noopener noreferrer">
                Submit Tool
              </a>
            </Button>
          </nav>
          
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              Menu
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;