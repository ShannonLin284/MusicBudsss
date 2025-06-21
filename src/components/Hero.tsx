
import { Music, Users, Calendar, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-pink-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-blue-200 rounded-full opacity-20 animate-pulse delay-2000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative">
        <div className="text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-6 pulse-glow">
              <Music className="h-10 w-10 text-white music-note-bounce" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Find Your Perfect
            <span className="block text-gradient">Concert Buddy</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Don't let going solo stop you from experiencing amazing live music. 
            Connect with fellow music lovers who share your passion and never miss a show again.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="gradient-primary text-white border-0 hover:opacity-90 transition-opacity text-lg px-8 py-4">
              Start Finding Buddies
            </Button>
            <Button size="lg" variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50 text-lg px-8 py-4">
              Learn How It Works
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-3">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">10K+</div>
              <div className="text-gray-600">Music Lovers</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-pink-100 rounded-full mb-3">
                <Calendar className="h-6 w-6 text-pink-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">5K+</div>
              <div className="text-gray-600">Concerts Attended</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
                <Heart className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">2K+</div>
              <div className="text-gray-600">Friendships Made</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
                <Music className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">50+</div>
              <div className="text-gray-600">Cities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
