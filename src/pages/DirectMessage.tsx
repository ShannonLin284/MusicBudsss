
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const DirectMessage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { person } = location.state || {};
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey! Ready to buy those tickets together?",
      sender: "other",
      time: "2m ago"
    }
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        text: message,
        sender: "me",
        time: "now"
      }]);
      setMessage("");
    }
  };

  if (!person) {
    return <div>Person not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center space-x-3">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate("/messages")}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <img 
            src={person.photos[0]} 
            alt={person.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h1 className="font-semibold text-gray-900">{person.name}</h1>
            <p className="text-sm text-green-700">{person.upcomingConcerts[0]}</p>
          </div>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
          >
            <div 
              className={`max-w-xs px-4 py-2 rounded-lg ${
                msg.sender === "me" 
                  ? "bg-green-800 text-white" 
                  : "bg-white border border-gray-200"
              }`}
            >
              <p className="text-sm">{msg.text}</p>
              <p className={`text-xs mt-1 ${
                msg.sender === "me" ? "text-green-100" : "text-gray-500"
              }`}>
                {msg.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="flex space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <Button 
            onClick={handleSendMessage}
            className="bg-green-800 hover:bg-green-900"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DirectMessage;
