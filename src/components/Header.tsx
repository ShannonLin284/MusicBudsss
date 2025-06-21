
import { Music } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Music className="h-8 w-8 text-purple-600 music-note-bounce" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-secondary rounded-full animate-pulse"></div>
            </div>
            <span className="text-2xl font-bold text-gradient">MusicBuds</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-700 hover:text-purple-600 transition-colors">
              How it Works
            </a>
            <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors">
              Features
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-purple-600 transition-colors">
              Stories
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700 hover:text-purple-600">
              Sign In
            </Button>
            <Button className="gradient-primary text-white border-0 hover:opacity-90 transition-opacity">
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
