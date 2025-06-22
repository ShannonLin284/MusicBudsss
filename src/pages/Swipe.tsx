
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BottomNav from "@/components/BottomNav";

const Swipe = () => {
  const location = useLocation();
  const concert = location.state?.concert || "Your Concert";

  return (
    <div className="min-h-screen bg-green-800">
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <div className="pt-4 pb-20">
          <div className="max-w-md mx-auto px-4">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-white mb-2">
                People going to: {concert}
              </h2>
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
