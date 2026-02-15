export interface UserProfile {
  id: string;
  name: string;
  avatar?: string;
  bio?: string;
  totalWorkouts: number;
  totalSetsLogged: number;
  joinDate: string;
}

export interface LeaderboardEntry {
  rank: number;
  user: UserProfile;
  score: number;
  badges: string[];
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  target: number;
  duration: string;
  participants: string[];
  completed: boolean;
}
