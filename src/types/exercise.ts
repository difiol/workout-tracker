export interface Exercise {
  id: string;
  name: string;
  weight: number;
  reps: number;
  sets: number;
  time: number;
  material: string;
}

export type AddExerciseLog = Exercise & { workoutId: string };
