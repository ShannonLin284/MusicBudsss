
import { Home, Search, MessageCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-green-100 sticky top-0 z-50 border-b border-gray-200 shadow-sm">
      <div className="max-w-md mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              className="text-green-800 mr-1"
              fill="currentColor"
            >
              <path d="M12 2C10.9 2 10 2.9 10 4v8.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V8h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2h-4z" rx="3"/>
              <circle cx="16" cy="6" r="2"/>
              <circle cx="18" cy="8" r="2"/>
            </svg>
            <span className="text-xl font-bold text-gray-900">usicBuds</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className={isActive("/") ? "text-green-800" : "text-gray-600"}
              onClick={() => navigate("/")}
            >
              <Home className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className={isActive("/swipe") ? "text-green-800" : "text-gray-600"}
              onClick={() => navigate("/swipe")}
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className={isActive("/messages") ? "text-green-800" : "text-gray-600"}
              onClick={() => navigate("/messages")}
            >
              <MessageCircle className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className={isActive("/profile") ? "text-green-800" : "text-gray-600"}
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
