
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";

const Home = () => {
  const [concert, setConcert] = useState("");
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (concert.trim()) {
      navigate("/swipe", { state: { concert } });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section with ACL Image */}
      <div className="relative h-screen">
        <img 
          src="https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1200&h=800&fit=crop" 
          alt="Austin City Limits Music Festival crowd"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
          <div className="text-center max-w-md">
            <div className="flex items-center justify-center mb-4">
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                className="text-white mr-1"
                fill="currentColor"
              >
                <path d="M12 2C10.9 2 10 2.9 10 4v8.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V8h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2h-4z" rx="3"/>
                <circle cx="16" cy="6" r="2"/>
                <circle cx="18" cy="8" r="2"/>
              </svg>
              <h1 className="text-4xl font-bold">usicBuds</h1>
            </div>
            <p className="text-xl mb-8">
              Tired of skipping out on concerts because you don't have a buddy? find ur bud here!
            </p>
            
            {/* Concert Input */}
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 mb-6">
              <h2 className="text-gray-900 text-lg font-semibold mb-4">
                What concert are you going to?
              </h2>
              <input
                type="text"
                value={concert}
                onChange={(e) => setConcert(e.target.value)}
                placeholder="e.g. Taylor Swift - MetLife Stadium"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-800"
              />
            </div>
            
            <Button
              onClick={handleGetStarted}
              disabled={!concert.trim()}
              className="w-full bg-green-800 hover:bg-green-900 text-white py-3 text-lg font-semibold rounded-lg"
            >
              Find Concert Buds
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
