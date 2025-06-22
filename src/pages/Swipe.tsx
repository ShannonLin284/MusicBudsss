
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BottomNav from "@/components/BottomNav";

const Swipe = () => {
  const location = useLocation();
  const concert = location.state?.concert || "Your Concert";

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=1920&h=1080&fit=crop&crop=center)',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <div className="pt-4 pb-20">
          <div className="max-w-md mx-auto px-4">
            <div className="text-center mb-6">
              <h2 className="text-lg font-semibold text-white mb-2">
                People going to: {concert}
              </h2>
              <p className="text-sm text-white/90">
                Swipe right to connect!
              </p>
            </div>
          </div>
          <Hero />
        </div>
        <BottomNav />
      </div>
    </div>
  );
};

export default Swipe;
