
import { Search, Users, Music, MessageCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Find Events",
      description: "Browse upcoming concerts in your area or search for specific artists and venues you love.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Users,
      title: "Connect with Buddies",
      description: "See who else is going and connect with music lovers who share your taste and vibe.",
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: MessageCircle,
      title: "Chat & Plan",
      description: "Message your potential concert buddies, share excitement, and plan your perfect night out.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Music,
      title: "Experience Together",
      description: "Attend the show with your new friends and create unforgettable memories together.",
      color: "bg-green-100 text-green-600"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How <span className="text-gradient">MusicBuds</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From discovery to dancing, we make it easy to find your perfect concert companion
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${step.color} group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="h-8 w-8" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
        
        {/* Connection lines for desktop */}
        <div className="hidden lg:block relative mt-8">
          <div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-purple-300 via-pink-300 to-green-300 opacity-30"></div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
