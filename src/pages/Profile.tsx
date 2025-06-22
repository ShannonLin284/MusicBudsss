
import { useState } from "react";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import { Camera, Music, Plus, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const Profile = () => {
  const [bio, setBio] = useState("Music lover looking for concert buddies!");
  const [favoriteArtists, setFavoriteArtists] = useState([
    "Taylor Swift", "Phoebe Bridgers", "Lorde"
  ]);
  const [newArtist, setNewArtist] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const addArtist = () => {
    if (newArtist.trim() && !favoriteArtists.includes(newArtist.trim())) {
      setFavoriteArtists([...favoriteArtists, newArtist.trim()]);
      setNewArtist("");
    }
  };

  const removeArtist = (artist: string) => {
    setFavoriteArtists(favoriteArtists.filter(a => a !== artist));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-4 pb-20">
        <div className="max-w-md mx-auto px-4">
          {/* Profile Header */}
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-4">
            <div className="text-center">
              <div className="relative inline-block">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=120&h=120&fit=crop&crop=face"
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover mx-auto"
                />
                <Button 
                  size="icon" 
                  className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-green-800 hover:bg-green-900"
                >
                  <Camera className="h-4 w-4" />
                </Button>
              </div>
              <h1 className="text-xl font-bold mt-3">Emma, 26</h1>
              <p className="text-gray-600 text-sm">Brooklyn, NY</p>
            </div>
          </div>

          {/* Bio Section */}
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-4">
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-semibold text-gray-900">About Me</h2>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setIsEditing(!isEditing)}
              >
                <Settings className="h-4 w-4" />
              </Button>
            </div>
            {isEditing ? (
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg text-sm resize-none"
                rows={3}
                placeholder="Tell people about yourself..."
              />
            ) : (
              <p className="text-gray-700 text-sm">{bio}</p>
            )}
          </div>

          {/* Favorite Artists */}
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-4">
            <div className="flex items-center mb-3">
              <Music className="h-4 w-4 text-green-800 mr-2" />
              <h2 className="font-semibold text-gray-900">Favorite Artists</h2>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-3">
              {favoriteArtists.map((artist, index) => (
                <div 
                  key={index} 
                  className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm flex items-center"
                >
                  <span>{artist}</span>
                  <button 
                    onClick={() => removeArtist(artist)}
                    className="ml-2 text-green-600 hover:text-green-800"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>

            <div className="flex space-x-2">
              <input
                type="text"
                value={newArtist}
                onChange={(e) => setNewArtist(e.target.value)}
                placeholder="Add an artist..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-800"
                onKeyPress={(e) => e.key === "Enter" && addArtist()}
              />
              <Button 
                onClick={addArtist}
                size="sm"
                className="bg-green-800 hover:bg-green-900"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Concert History */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="font-semibold text-gray-900 mb-3">Recent Concerts</h2>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  🎵
                </div>
                <div>
                  <p className="font-medium text-sm">Taylor Swift - Eras Tour</p>
                  <p className="text-gray-500 text-xs">MetLife Stadium • Nov 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <BottomNav />
    </div>
  );
};

export default Profile;
