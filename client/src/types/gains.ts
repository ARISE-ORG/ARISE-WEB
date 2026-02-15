export interface Exercise {
  id: string;
  name: string;
  isCustom: boolean;
}

export interface ExerciseSet {
  id: string;
  reps: number;
  weight: number;
  duration: number;
  restTime: number;
  completed: boolean;
}

export interface WorkoutLog {
  id: string;
  userId: string;
  date: string;
  exercises: (Exercise & { sets: ExerciseSet[] })[];
  totalDuration: number;
  notes?: string;
}

export interface ProgressPhoto {
  id: string;
  userId: string;
  date: string;
  url: string;
  caption?: string;
}

export interface ProgressMetrics {
  date: string;
  weight?: number;
  bodyFat?: number;
  notes?: string;
}
