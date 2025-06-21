
import { Home, Search, MessageCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="max-w-md mx-auto px-4">
        <div className="flex justify-around items-center h-16">
          <Button variant="ghost" size="icon" className="text-green-500">
            <Home className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400">
            <Search className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400">
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
