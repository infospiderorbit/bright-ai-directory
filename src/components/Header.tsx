import { Sparkles, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-smooth">
            <div className="p-2 gradient-primary rounded-lg">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">
              aitoolsprime.com
            </span>
          </Link>
          
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
              <Link to="/submit">
                Submit
              </Link>
            </Button>
          </nav>
          
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-background">
                <SheetHeader>
                  <SheetTitle className="text-left">Menu</SheetTitle>
                </SheetHeader>
                <nav className="mt-6 space-y-4">
                  <a href="#" className="block text-foreground font-medium">Full List</a>
                  <Link to="/categories" className="block text-foreground font-medium">AI Categories</Link>
                  <a href="#" className="block text-foreground font-medium">AI Tutorials</a>
                  <Button 
                    asChild 
                    className="w-full gradient-primary text-white font-semibold"
                  >
                    <Link to="/submit">
                      Submit
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;