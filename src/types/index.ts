export interface Exercise {
  id: string;
  name: string;
  description: string;
  duration: number;
  muscles: string[];
  animation: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  instructions: string[];
}

export interface WorkoutSession {
  id: string;
  type: 'warmup' | 'strength' | 'stretching' | 'auto';
  name: string;
  exercises: Exercise[];
  totalDuration: number;
  xpReward: number;
}

export interface Quest {
  id: string;
  title: string;
  description: string;
  type: 'daily' | 'weekly' | 'achievement';
  target: number;
  current: number;
  completed: boolean;
  xpReward: number;
  icon: string;
  category: 'training' | 'learning' | 'exploration' | 'consistency';
}

export interface User {
  id: string;
  name: string;
  level: number;
  xp: number;
  badges: Badge[];
  completedSessions: SessionHistory[];
  currentStreak: number;
  activeQuests: Quest[];
  completedQuests: Quest[];
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: Date;
}

export interface SessionHistory {
  id: string;
  date: Date;
  sessionType: string;
  duration: number;
  exercisesCompleted: number;
  xpGained: number;
}

export interface ClimbingGym {
  id: string;
  name: string;
  type: 'bouldering' | 'sport' | 'mixed';
  lat: number;
  lng: number;
  address: string;
  phone: string;
  hours: string;
  website?: string;
}

export interface Article {
  id: string;
  title: string;
  content: string;
  category: 'techniques' | 'equipment' | 'training' | 'tips';
  readTime: number;
  image: string;
  author?: string;
  publishDate?: Date;
  tags?: string[];
}

export interface Equipment {
  id: string;
  name: string;
  category: string;
  type: string;
  price: number;
  currency: string;
  description: string;
  features: string[];
  image: string;
  buyLink: string;
  rating: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  bestFor: string[];
}

export interface DailyGoal {
  id: string;
  text: string;
  type: 'training' | 'learning' | 'exploration' | 'progress';
  target: number;
  current: number;
  completed: boolean;
  xpReward: number;
}

export interface CustomWorkout {
  id: string;
  name: string;
  exercises: Exercise[];
  createdAt: Date;
  totalDuration: number;
  estimatedXP: number;
}