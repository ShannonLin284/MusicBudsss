
import ProfileCard from "@/components/ProfileCard";

const Hero = () => {
  const sampleProfiles = [
    {
      name: "Emma",
      age: 26,
      location: "Brooklyn, NY",
      favoriteArtists: ["Taylor Swift", "Phoebe Bridgers", "Lorde"],
      upcomingConcerts: ["Taylor Swift - MetLife Stadium", "Vampire Weekend - Brooklyn Steel"],
      bio: "Indie pop enthusiast looking for concert buddies! Love discovering new artists and singing along to every word. Let's buy tickets together!",
      photos: ["https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop&crop=face"]
    },
    {
      name: "Marcus",
      age: 29,
      location: "Austin, TX",
      favoriteArtists: ["Kendrick Lamar", "Tyler Cole", "Mac Miller"],
      upcomingConcerts: ["ACL Festival", "Travis Scott - Moody Center"],
      bio: "Hip-hop head and festival lover. Always down for a good show and meeting new people who share the vibe. Let's grab tickets and have an amazing time!",
      photos: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face"]
    }
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-md mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Find Your Concert Buddy
          </h1>
          <p className="text-gray-600">
            Connect with music lovers and buy tickets together
          </p>
          <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-3">
            <div className="flex items-center justify-center space-x-2 text-green-700">
              <span className="text-2xl">🎤</span>
              <span className="text-sm font-medium">Two friends at a concert together!</span>
              <span className="text-2xl">🎵</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          {sampleProfiles.map((profile, index) => (
            <ProfileCard key={index} {...profile} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
