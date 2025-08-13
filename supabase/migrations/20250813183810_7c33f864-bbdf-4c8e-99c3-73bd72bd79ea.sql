-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create profiles table for user data
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE NOT NULL,
  name TEXT NOT NULL,
  age INTEGER,
  location TEXT,
  bio TEXT,
  profile_picture_url TEXT,
  spotify_connected BOOLEAN DEFAULT FALSE,
  spotify_user_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create artists table
CREATE TABLE public.artists (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL UNIQUE,
  spotify_id TEXT,
  image_url TEXT,
  genres TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create concerts table
CREATE TABLE public.concerts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  artist_name TEXT NOT NULL,
  venue TEXT,
  location TEXT,
  date_time TIMESTAMP WITH TIME ZONE,
  ticket_url TEXT,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create user_favorite_artists junction table
CREATE TABLE public.user_favorite_artists (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  artist_id UUID REFERENCES public.artists(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, artist_id)
);

-- Create user_interested_concerts junction table
CREATE TABLE public.user_interested_concerts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  concert_id UUID REFERENCES public.concerts(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, concert_id)
);

-- Create matches table for connections between users
CREATE TABLE public.matches (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user1_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  user2_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  concert_id UUID REFERENCES public.concerts(id) ON DELETE CASCADE,
  matched_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user1_id, user2_id)
);

-- Create messages table
CREATE TABLE public.messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  match_id UUID REFERENCES public.matches(id) ON DELETE CASCADE NOT NULL,
  sender_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  content TEXT NOT NULL,
  sent_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.artists ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.concerts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_favorite_artists ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_interested_concerts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.matches ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "Users can view all profiles" ON public.profiles FOR SELECT TO authenticated USING (true);
CREATE POLICY "Users can update their own profile" ON public.profiles FOR UPDATE TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own profile" ON public.profiles FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

-- RLS Policies for artists (public read, authenticated users can add)
CREATE POLICY "Anyone can view artists" ON public.artists FOR SELECT USING (true);
CREATE POLICY "Authenticated users can insert artists" ON public.artists FOR INSERT TO authenticated WITH CHECK (true);

-- RLS Policies for concerts (public read, authenticated users can add)
CREATE POLICY "Anyone can view concerts" ON public.concerts FOR SELECT USING (true);
CREATE POLICY "Authenticated users can insert concerts" ON public.concerts FOR INSERT TO authenticated WITH CHECK (true);

-- RLS Policies for user_favorite_artists
CREATE POLICY "Users can view all favorite artists" ON public.user_favorite_artists FOR SELECT TO authenticated USING (true);
CREATE POLICY "Users can manage their own favorite artists" ON public.user_favorite_artists FOR ALL TO authenticated USING (auth.uid() = user_id);

-- RLS Policies for user_interested_concerts
CREATE POLICY "Users can view all interested concerts" ON public.user_interested_concerts FOR SELECT TO authenticated USING (true);
CREATE POLICY "Users can manage their own interested concerts" ON public.user_interested_concerts FOR ALL TO authenticated USING (auth.uid() = user_id);

-- RLS Policies for matches
CREATE POLICY "Users can view their own matches" ON public.matches FOR SELECT TO authenticated USING (auth.uid() = user1_id OR auth.uid() = user2_id);
CREATE POLICY "Users can create matches" ON public.matches FOR INSERT TO authenticated WITH CHECK (auth.uid() = user1_id OR auth.uid() = user2_id);

-- RLS Policies for messages
CREATE POLICY "Users can view messages in their matches" ON public.messages FOR SELECT TO authenticated USING (
  EXISTS (
    SELECT 1 FROM public.matches 
    WHERE matches.id = messages.match_id 
    AND (matches.user1_id = auth.uid() OR matches.user2_id = auth.uid())
  )
);
CREATE POLICY "Users can send messages in their matches" ON public.messages FOR INSERT TO authenticated WITH CHECK (
  auth.uid() = sender_id AND
  EXISTS (
    SELECT 1 FROM public.matches 
    WHERE matches.id = messages.match_id 
    AND (matches.user1_id = auth.uid() OR matches.user2_id = auth.uid())
  )
);

-- Create function to automatically create profile when user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, name)
  VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'name', 'New User'));
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for updated_at on profiles
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

-- Insert some sample artists
INSERT INTO public.artists (name, genres) VALUES
('Taylor Swift', ARRAY['Pop', 'Country']),
('Kendrick Lamar', ARRAY['Hip Hop', 'Rap']),
('Phoebe Bridgers', ARRAY['Indie', 'Alternative']),
('Tyler Cole', ARRAY['R&B', 'Soul']),
('Mac Miller', ARRAY['Hip Hop', 'Alternative Hip Hop']),
('Lorde', ARRAY['Pop', 'Electropop']),
('Travis Scott', ARRAY['Hip Hop', 'Trap']),
('Vampire Weekend', ARRAY['Indie Rock', 'Alternative']);

-- Insert some sample concerts
INSERT INTO public.concerts (name, artist_name, venue, location, date_time) VALUES
('The Eras Tour', 'Taylor Swift', 'MetLife Stadium', 'East Rutherford, NJ', '2024-10-15 19:00:00+00'),
('ACL Music Festival', 'Multiple Artists', 'Zilker Park', 'Austin, TX', '2024-10-12 12:00:00+00'),
('Utopia Tour', 'Travis Scott', 'Moody Center', 'Austin, TX', '2024-11-20 20:00:00+00'),
('Father of the Bride Tour', 'Vampire Weekend', 'Brooklyn Steel', 'Brooklyn, NY', '2024-11-05 20:00:00+00');