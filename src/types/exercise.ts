export interface Exercise {
  id: string;
  name: string;
  created_at: string;
}

export type WorkoutExercise = Omit<Exercise, "created_at"> & {
  weight: number;
  reps: number;
  sets: number;
  time: number;
  material: string;
};

export type AddExerciseLog = WorkoutExercise & { workoutId: string };
