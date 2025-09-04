import { Sparkles, Github, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 gradient-primary rounded-lg">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                AI Tools Hub
              </span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Discover, compare, and choose from the world's largest collection of AI tools. 
              Your gateway to the future of artificial intelligence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-smooth">Browse Tools</Link></li>
              <li><Link to="/categories" className="hover:text-primary transition-smooth">Categories</Link></li>
              <li><Link to="/submit" className="hover:text-primary transition-smooth">Submit</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-smooth">About</Link></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/help" className="hover:text-primary transition-smooth">Help Center</Link></li>
              <li><a href="mailto:support@aitoolsprime.com" className="hover:text-primary transition-smooth">Contact Us</a></li>
              <li><Link to="/privacy" className="hover:text-primary transition-smooth">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-smooth">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 AI Tools Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;