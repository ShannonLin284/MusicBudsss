
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
            <div className="flex items-end">
              <svg 
                width="20" 
                height="26" 
                viewBox="0 0 20 26" 
                className="text-purple-300 mr-1"
                fill="currentColor"
              >
                {/* Clean music note like the reference */}
                <ellipse cx="4" cy="20" rx="3.5" ry="2.5" />
                <rect x="7.5" y="6" width="2" height="14" />
                <path d="M9.5 6 L16 3 L16 5 L9.5 8 Z" />
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
