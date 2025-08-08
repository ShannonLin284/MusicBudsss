
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
            <svg 
              width="28" 
              height="28" 
              viewBox="0 0 24 24" 
              className="text-purple-300 mr-2"
              fill="currentColor"
            >
              {/* Music note styled M */}
              <path d="M8 3h8c.55 0 1 .45 1 1v12c0 1.66-1.34 3-3 3s-3-1.34-3-3V8H8c-.55 0-1-.45-1-1s.45-1 1-1z" />
              <circle cx="6" cy="15" r="3" />
              <path d="M11 12v4c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3c-.35 0-.69.06-1 .17V12z" />
              <circle cx="14" cy="16" r="2" />
            </svg>
            <span className="text-xl font-bold text-white">usicBuds</span>
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
