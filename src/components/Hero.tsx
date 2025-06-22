
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
      photos: ["https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=600&fit=crop"]
    },
    {
      id: 2,
      name: "Marcus",
      age: 29,
      location: "Austin, TX",
      favoriteArtists: ["Kendrick Lamar", "Tyler Cole", "Mac Miller"],
      upcomingConcerts: ["ACL Festival", "Travis Scott - Moody Center"],
      bio: "Hip-hop head and festival lover. Always down for a good show and meeting new people who share the vibe. Let's grab tickets and have an amazing time!",
      photos: ["https://images.unsplash.com/photo-1492447166138-50c3889fccb1?w=400&h=600&fit=crop"]
    },
    {
      id: 3,
      name: "Sofia",
      age: 24,
      location: "Los Angeles, CA",
      favoriteArtists: ["Bad Bunny", "Rosalía", "J Balvin"],
      upcomingConcerts: ["Bad Bunny - SoFi Stadium", "Coachella 2024"],
      bio: "Reggaeton and Latin music lover! Always dancing and ready for the next big concert. Looking for someone to share the energy with!",
      photos: ["https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=600&fit=crop"]
    },
    {
      id: 4,
      name: "Jake",
      age: 27,
      location: "Nashville, TN",
      favoriteArtists: ["Chris Stapleton", "Kacey Musgraves", "Tyler Childers"],
      upcomingConcerts: ["CMA Fest", "Chris Stapleton - Bridgestone Arena"],
      bio: "Country music is life! Born and raised in Music City. Let's two-step our way to the best shows in town!",
      photos: ["https://images.unsplash.com/photo-1574770118085-95b75b5d9e46?w=400&h=600&fit=crop"]
    },
    {
      id: 5,
      name: "Zoe",
      age: 25,
      location: "Seattle, WA",
      favoriteArtists: ["Arctic Monkeys", "The Strokes", "Vampire Weekend"],
      upcomingConcerts: ["Arctic Monkeys - Climate Pledge Arena", "Sasquatch! Festival"],
      bio: "Indie rock enthusiast with a passion for live music. Coffee by day, concerts by night. Let's discover new bands together!",
      photos: ["https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=600&fit=crop"]
    },
    {
      id: 6,
      name: "Alex",
      age: 28,
      location: "Chicago, IL",
      favoriteArtists: ["Daft Punk", "Deadmau5", "ODESZA"],
      upcomingConcerts: ["Lollapalooza", "Electric Forest"],
      bio: "EDM fanatic and festival veteran. Love the energy of electronic shows and meeting fellow ravers. Let's dance the night away!",
      photos: ["https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop"]
    },
    {
      id: 7,
      name: "Maya",
      age: 23,
      location: "Miami, FL",
      favoriteArtists: ["The Weeknd", "SZA", "Frank Ocean"],
      upcomingConcerts: ["Rolling Loud Miami", "The Weeknd - FTX Arena"],
      bio: "R&B and hip-hop lover with a taste for the finer things. Miami vibes and good music are all I need. Let's vibe together!",
      photos: ["https://images.unsplash.com/photo-1506629905607-45bc2042d582?w=400&h=600&fit=crop"]
    },
    {
      id: 8,
      name: "Chris",
      age: 30,
      location: "Denver, CO",
      favoriteArtists: ["Red Rocks", "Widespread Panic", "Tame Impala"],
      upcomingConcerts: ["Red Rocks Summer Series", "Tame Impala - Ball Arena"],
      bio: "Mountain music lover who lives for Red Rocks shows. Always looking for adventure and good vibes at amazing venues!",
      photos: ["https://images.unsplash.com/photo-1569173112611-52a7cd38bea9?w=400&h=600&fit=crop"]
    },
    {
      id: 9,
      name: "Luna",
      age: 22,
      location: "Portland, OR",
      favoriteArtists: ["Billie Eilish", "Clairo", "Rex Orange County"],
      upcomingConcerts: ["Billie Eilish - Moda Center", "Indie Music Festival"],
      bio: "Dreamy indie vibes and chill concerts are my thing. Love intimate venues and discovering underground artists with cool people!",
      photos: ["https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=600&fit=crop"]
    },
    {
      id: 10,
      name: "Tyler",
      age: 26,
      location: "Phoenix, AZ",
      favoriteArtists: ["Post Malone", "Travis Scott", "Juice WRLD"],
      upcomingConcerts: ["Post Malone - Talking Stick Resort Arena", "Desert Music Festival"],
      bio: "Desert vibes and hip-hop beats! Love outdoor festivals and high-energy shows. Let's turn up and make some memories!",
      photos: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=600&fit=crop"]
    },
    {
      id: 11,
      name: "Aria",
      age: 24,
      location: "San Francisco, CA",
      favoriteArtists: ["Lana Del Rey", "Florence + The Machine", "Hozier"],
      upcomingConcerts: ["Outside Lands", "Lana Del Rey - Chase Center"],
      bio: "Ethereal music and artistic vibes. I love concerts that feel like poetry in motion. Let's get lost in the music together!",
      photos: ["https://images.unsplash.com/photo-1512446816042-444d641267d4?w=400&h=600&fit=crop"]
    },
    {
      id: 12,
      name: "Sam",
      age: 31,
      location: "Boston, MA",
      favoriteArtists: ["Foo Fighters", "Pearl Jam", "Green Day"],
      upcomingConcerts: ["Boston Calling", "Foo Fighters - TD Garden"],
      bio: "Classic rock and punk rock enthusiast! Nothing beats the energy of a live rock show. Let's headbang and sing our hearts out!",
      photos: ["https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=400&h=600&fit=crop"]
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
