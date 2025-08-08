
import { Home, Search, MessageCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-primary sticky top-0 z-50 border-b border-border shadow-sm">
      <div className="max-w-md mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
            <div className="flex items-baseline">
              <svg 
                width="24" 
                height="32" 
                viewBox="0 0 24 32" 
                className="text-purple-300 mr-0"
                fill="currentColor"
              >
                {/* Sixteenth note with slanted beams forming an M shape */}
                <circle cx="6" cy="24" r="4" />
                <circle cx="18" cy="24" r="4" />
                <path d="M10 24 L10 6 L14 4 L14 24 M18 24 L18 6 L22 4 L22 24" stroke="currentColor" strokeWidth="2" fill="none" />
                {/* Double beams slanted */}
                <path d="M10 8 L22 4" stroke="currentColor" strokeWidth="2" />
                <path d="M10 12 L22 8" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span className="text-xl font-bold text-white">usicBuds</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className={isActive("/") ? "text-purple-300" : "text-white/80 hover:text-white"}
              onClick={() => navigate("/")}
            >
              <Home className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className={isActive("/swipe") ? "text-purple-300" : "text-white/80 hover:text-white"}
              onClick={() => navigate("/swipe")}
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className={isActive("/messages") ? "text-purple-300" : "text-white/80 hover:text-white"}
              onClick={() => navigate("/messages")}
            >
              <MessageCircle className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className={isActive("/profile") ? "text-purple-300" : "text-white/80 hover:text-white"}
              onClick={() => navigate("/profile")}
            >
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
