
import { Heart, X, MapPin, Music, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProfileCardProps {
  name: string;
  age: number;
  location: string;
  favoriteArtists: string[];
  upcomingConcerts: string[];
  bio: string;
  photos: string[];
}

const ProfileCard = ({ name, age, location, favoriteArtists, upcomingConcerts, bio, photos }: ProfileCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-sm mx-auto">
      {/* Photo */}
      <div className="relative h-96">
        <img 
          src={photos[0]} 
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <h2 className="text-white text-2xl font-bold">{name}, {age}</h2>
          <div className="flex items-center text-white/90 mt-1">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{location}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {/* Bio */}
        <div>
          <p className="text-gray-700 text-sm leading-relaxed">{bio}</p>
        </div>

        {/* Favorite Artists */}
        <div>
          <div className="flex items-center mb-2">
            <Music className="h-4 w-4 text-green-500 mr-2" />
            <span className="text-sm font-semibold text-gray-900">Favorite Artists</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {favoriteArtists.map((artist, index) => (
              <span key={index} className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                {artist}
              </span>
            ))}
          </div>
        </div>

        {/* Upcoming Concerts */}
        <div>
          <div className="flex items-center mb-2">
            <Calendar className="h-4 w-4 text-green-500 mr-2" />
            <span className="text-sm font-semibold text-gray-900">Wants to Go To</span>
          </div>
          <div className="space-y-2">
            {upcomingConcerts.map((concert, index) => (
              <div key={index} className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <span className="text-sm text-gray-700 font-medium">{concert}</span>
                <div className="text-xs text-gray-500 mt-1">🎫 Looking for tickets together!</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4 p-4 border-t border-gray-100">
        <Button 
          size="lg" 
          variant="outline" 
          className="rounded-full w-14 h-14 border-gray-300 hover:border-red-300 hover:bg-red-50"
        >
          <X className="h-6 w-6 text-gray-500" />
        </Button>
        <Button 
          size="lg" 
          className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600"
        >
          <Users className="h-6 w-6 text-white" />
        </Button>
      </div>
    </div>
  );
};

export default ProfileCard;
