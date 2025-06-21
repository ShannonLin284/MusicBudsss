
import { Shield, MapPin, Star, Clock, Zap, Heart } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Safe & Verified",
      description: "All users are verified to ensure a safe and trustworthy community of music lovers.",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: MapPin,
      title: "Location-Based",
      description: "Find concert buddies in your city or when traveling to new places for shows.",
      gradient: "from-pink-500 to-pink-600"
    },
    {
      icon: Star,
      title: "Music Matching",
      description: "Our algorithm matches you with people who love the same genres and artists you do.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Clock,
      title: "Real-Time Chat",
      description: "Instant messaging to coordinate meetups, share excitement, and make plans.",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Zap,
      title: "Quick Connections",
      description: "Fast and easy way to connect with like-minded people for any upcoming show.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Heart,
      title: "Build Friendships",
      description: "Many of our users form lasting friendships that extend beyond just concerts.",
      gradient: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-gradient">MusicBuds</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've built the perfect platform to connect music lovers safely and easily
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100">
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
