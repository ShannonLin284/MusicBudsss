
import { Star, Music } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      age: 28,
      location: "San Francisco",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      text: "I've attended 15 concerts through MusicBuds and made some of my closest friends! It's amazing how music brings people together.",
      rating: 5,
      concertCount: 15
    },
    {
      name: "Marcus Rodriguez",
      age: 32,
      location: "Austin",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      text: "As someone who moved to a new city, MusicBuds helped me find my community. Now I never go to shows alone!",
      rating: 5,
      concertCount: 23
    },
    {
      name: "Emma Thompson",
      age: 25,
      location: "New York",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      text: "The safety features make me feel comfortable meeting new people. Plus, everyone shares my love for indie rock!",
      rating: 5,
      concertCount: 8
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stories from Our <span className="text-gradient">Community</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real people, real connections, real experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 relative group hover:shadow-lg transition-all duration-300">
              <div className="absolute -top-4 left-8">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Music className="h-6 w-6 text-white" />
                </div>
              </div>
              
              <div className="pt-4">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900">{testimonial.name}, {testimonial.age}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                    <p className="text-purple-600 text-sm font-medium">{testimonial.concertCount} concerts attended</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
