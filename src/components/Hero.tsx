
import { useState } from "react";
import ProfileCard from "@/components/ProfileCard";

const Hero = () => {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "Emma",
      age: 26,
      location: "Brooklyn, NY",
      favoriteArtists: ["Taylor Swift", "Phoebe Bridgers", "Lorde"],
      upcomingConcerts: ["Taylor Swift - MetLife Stadium", "Vampire Weekend - Brooklyn Steel"],
      bio: "Indie pop enthusiast looking for concert buddies! Love discovering new artists and singing along to every word. Let's buy tickets together!",
      photos: ["https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=face"]
    },
    {
      id: 2,
      name: "Marcus",
      age: 29,
      location: "Austin, TX",
      favoriteArtists: ["Kendrick Lamar", "Tyler Cole", "Mac Miller"],
      upcomingConcerts: ["ACL Festival", "Travis Scott - Moody Center"],
      bio: "Hip-hop head and festival lover. Always down for a good show and meeting new people who share the vibe. Let's grab tickets and have an amazing time!",
      photos: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face"]
    },
    {
      id: 3,
      name: "Sofia",
      age: 24,
      location: "Los Angeles, CA",
      favoriteArtists: ["Bad Bunny", "Rosalía", "J Balvin"],
      upcomingConcerts: ["Bad Bunny - SoFi Stadium", "Coachella 2024"],
      bio: "Reggaeton and Latin music lover! Always dancing and ready for the next big concert. Looking for someone to share the energy with!",
      photos: ["https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop&crop=face"]
    },
    {
      id: 4,
      name: "Jake",
      age: 27,
      location: "Nashville, TN",
      favoriteArtists: ["Chris Stapleton", "Kacey Musgraves", "Tyler Childers"],
      upcomingConcerts: ["CMA Fest", "Chris Stapleton - Bridgestone Arena"],
      bio: "Country music is life! Born and raised in Music City. Let's two-step our way to the best shows in town!",
      photos: ["https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=face"]
    },
    {
      id: 5,
      name: "Zoe",
      age: 25,
      location: "Seattle, WA",
      favoriteArtists: ["Arctic Monkeys", "The Strokes", "Vampire Weekend"],
      upcomingConcerts: ["Arctic Monkeys - Climate Pledge Arena", "Sasquatch! Festival"],
      bio: "Indie rock enthusiast with a passion for live music. Coffee by day, concerts by night. Let's discover new bands together!",
      photos: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop&crop=face"]
    },
    {
      id: 6,
      name: "Alex",
      age: 28,
      location: "Chicago, IL",
      favoriteArtists: ["Daft Punk", "Deadmau5", "ODESZA"],
      upcomingConcerts: ["Lollapalooza", "Electric Forest"],
      bio: "EDM fanatic and festival veteran. Love the energy of electronic shows and meeting fellow ravers. Let's dance the night away!",
      photos: ["https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop&crop=face"]
    },
    {
      id: 7,
      name: "Maya",
      age: 23,
      location: "Miami, FL",
      favoriteArtists: ["The Weeknd", "SZA", "Frank Ocean"],
      upcomingConcerts: ["Rolling Loud Miami", "The Weeknd - FTX Arena"],
      bio: "R&B and hip-hop lover with a taste for the finer things. Miami vibes and good music are all I need. Let's vibe together!",
      photos: ["https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop&crop=face"]
    }
  ]);

  const handleDeleteProfile = (profileId: number) => {
    setProfiles(profiles.filter(profile => profile.id !== profileId));
  };

  if (profiles.length === 0) {
    return (
      <section className="min-h-[400px] bg-transparent py-8">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="text-white/80 text-lg">
            No more profiles to show! 🎵
          </div>
          <div className="text-white/60 text-sm mt-2">
            Check back later for more concert buddies!
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-transparent py-8">
      <div className="max-w-md mx-auto px-4">        
        <div className="space-y-6">
          {profiles.map((profile) => (
            <ProfileCard 
              key={profile.id} 
              {...profile} 
              onDelete={() => handleDeleteProfile(profile.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
