
import { useState } from "react";
import { Camera, Edit3, Music, MapPin, Calendar, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "You",
    age: 25,
    location: "Your City",
    bio: "Music lover looking for concert buddies!",
    favoriteArtists: ["Artist 1", "Artist 2", "Artist 3"],
    upcomingConcerts: ["Concert 1", "Concert 2"]
  });

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to a backend
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-4 pb-8">
        <div className="max-w-md mx-auto px-4">
          {/* Profile Header */}
          <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsEditing(!isEditing)}
              >
                <Edit3 className="h-4 w-4 mr-2" />
                {isEditing ? "Cancel" : "Edit"}
              </Button>
            </div>

            {/* Profile Picture */}
            <div className="flex flex-col items-center mb-6">
              <div className="relative">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
                  <Camera className="h-8 w-8 text-green-600" />
                </div>
                {isEditing && (
                  <Button
                    size="sm"
                    className="absolute -bottom-2 -right-2 rounded-full h-8 w-8 p-0"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>

            {/* Basic Info */}
            <div className="space-y-4">
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={profileData.name}
                    onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Your name"
                  />
                  <input
                    type="number"
                    value={profileData.age}
                    onChange={(e) => setProfileData({...profileData, age: parseInt(e.target.value)})}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Your age"
                  />
                  <input
                    type="text"
                    value={profileData.location}
                    onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Your location"
                  />
                  <textarea
                    value={profileData.bio}
                    onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-lg h-20"
                    placeholder="Tell us about yourself..."
                  />
                </>
              ) : (
                <>
                  <h2 className="text-xl font-semibold text-center">{profileData.name}, {profileData.age}</h2>
                  <div className="flex items-center justify-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{profileData.location}</span>
                  </div>
                  <p className="text-gray-700 text-center">{profileData.bio}</p>
                </>
              )}
            </div>
          </div>

          {/* Favorite Artists */}
          <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Music className="h-5 w-5 text-green-800 mr-2" />
                <h3 className="text-lg font-semibold">Favorite Artists</h3>
              </div>
              {isEditing && (
                <Button size="sm" variant="outline">
                  <Plus className="h-4 w-4" />
                </Button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {profileData.favoriteArtists.map((artist, index) => (
                <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  {artist}
                </span>
              ))}
            </div>
          </div>

          {/* Upcoming Concerts */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-green-800 mr-2" />
                <h3 className="text-lg font-semibold">Want to Go To</h3>
              </div>
              {isEditing && (
                <Button size="sm" variant="outline">
                  <Plus className="h-4 w-4" />
                </Button>
              )}
            </div>
            <div className="space-y-3">
              {profileData.upcomingConcerts.map((concert, index) => (
                <div key={index} className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <span className="text-sm text-gray-700 font-medium">{concert}</span>
                </div>
              ))}
            </div>
          </div>

          {isEditing && (
            <Button 
              onClick={handleSave}
              className="w-full mt-6 bg-green-800 hover:bg-green-900"
            >
              Save Changes
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
