
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
                <img 
                  src="/lovable-uploads/bc0b7f4b-935b-49bb-9cae-ceb254beabc3.png"
                  alt="Music note"
                  className="w-6 h-7 mr-1 filter brightness-0 invert opacity-80"
                />
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
