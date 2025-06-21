
import { Home, Search, MessageCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="max-w-md mx-auto px-4">
        <div className="flex justify-around items-center h-16">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate("/")}
            className={isActive("/") ? "text-green-800" : "text-gray-400"}
          >
            <Home className="h-6 w-6" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate("/swipe")}
            className={isActive("/swipe") ? "text-green-800" : "text-gray-400"}
          >
            <Search className="h-6 w-6" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate("/messages")}
            className={isActive("/messages") ? "text-green-800" : "text-gray-400"}
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400">
            <User className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
