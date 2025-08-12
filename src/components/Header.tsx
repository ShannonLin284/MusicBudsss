
import { Home, Search, MessageCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import LogoProcessor from "./LogoProcessor";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [processedLogoUrl, setProcessedLogoUrl] = useState<string | null>(null);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-primary sticky top-0 z-50 border-b border-border shadow-sm">
      <div className="max-w-md mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
            <div className="flex items-end">
              <LogoProcessor
                originalImagePath="/lovable-uploads/bc0b7f4b-935b-49bb-9cae-ceb254beabc3.png"
                onProcessed={setProcessedLogoUrl}
                className="w-5 h-6 mr-2 -ml-1 filter brightness-0 invert opacity-80"
                alt="Music note"
              />
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
