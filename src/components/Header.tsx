import { Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 glass-effect border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-2 gradient-primary rounded-lg">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              AI Tools Hub
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                Browse
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                Categories
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                Submit Tool
              </a>
            </nav>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm" className="gradient-primary text-white border-0">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;