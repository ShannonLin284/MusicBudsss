
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import { MessageCircle, Calendar } from "lucide-react";

const Messages = () => {
  const matches = [
    {
      name: "Emma",
      concert: "Taylor Swift - MetLife Stadium",
      lastMessage: "Hey! Ready to buy those tickets together?",
      time: "2m ago",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Marcus",
      concert: "ACL Festival",
      lastMessage: "Found some great spots! Let's chat about it",
      time: "1h ago",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-4 pb-20">
        <div className="max-w-md mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Messages</h1>
          
          <div className="space-y-4">
            {matches.map((match, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                <div className="flex items-start space-x-3">
                  <img 
                    src={match.avatar} 
                    alt={match.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-sm font-semibold text-gray-900">{match.name}</h3>
                      <span className="text-xs text-gray-500">{match.time}</span>
                    </div>
                    <div className="flex items-center text-xs text-green-700 mb-2">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{match.concert}</span>
                    </div>
                    <p className="text-sm text-gray-600 truncate">{match.lastMessage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {matches.length === 0 && (
            <div className="text-center py-12">
              <MessageCircle className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No matches yet. Keep swiping!</p>
            </div>
          )}
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Messages;
