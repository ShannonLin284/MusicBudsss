
import { Music, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6 pulse-glow">
            <Music className="h-8 w-8 text-white music-note-bounce" />
          </div>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to Find Your
          <span className="block">Concert Community?</span>
        </h2>
        
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join thousands of music lovers who've discovered their perfect concert buddies. 
          Your next musical adventure is just a click away.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 transition-colors text-lg px-8 py-4 font-semibold">
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
            Download App
          </Button>
        </div>
        
        <div className="mt-12 text-white/80 text-sm">
          <p>Join over 10,000 music lovers • No credit card required • Start connecting today</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
