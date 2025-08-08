
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
              <div className="flex items-end">
                <svg 
                  width="24" 
                  height="30" 
                  viewBox="0 0 20 26" 
                  className="text-purple-300 mr-1"
                  fill="currentColor"
                >
                  {/* Clean music note like the reference */}
                  <ellipse cx="4" cy="20" rx="3.5" ry="2.5" />
                  <rect x="7.5" y="6" width="2" height="14" />
                  <path d="M9.5 6 L16 3 L16 5 L9.5 8 Z" />
                </svg>
                <h1 className="text-4xl font-bold">usicBuds</h1>
              </div>
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            
            <Button
              onClick={handleGetStarted}
              disabled={!concert.trim()}
              className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-lg font-semibold rounded-lg"
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
