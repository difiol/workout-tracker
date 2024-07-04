export interface Exercise {
  id: string;
  name: string;
  created_at: string;
}

export type WorkoutExercise = Exercise & {
  weight?: number;
  reps?: number;
  sets?: number;
  time?: number;
  material?: string;
  logId?: string;
};

export type ExerciseLog = WorkoutExercise & {
  exerciseId: string;
  workoutId?: string;
};

export type AddExerciseLog = Omit<ExerciseLog, "id" | "name" | "created_at">;
