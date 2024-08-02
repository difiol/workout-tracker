export interface Exercise {
  id: string;
  name: string;
  maxWeight?: number | null;
  lastWeight?: number | null;
  lastReps?: number | null;
  lastSets?: number | null;
  lastTime?: number | null;
  createdAt: string;
}

export type WorkoutExercise = {
  id: string;
  name: string;
  maxWeight?: number | null;
  weight?: number | null;
  pyramidWeight?: number[] | null;
  reps?: number | null;
  pyramidReps?: number[] | null;
  sets?: number | null;
  time?: number | null;
  pyramidTime?: number[] | null;
  material?: string | null;
  logId?: string | null;
  order?: number | null;
  notes?: string | null;
  createdAt: string;
};

export type ExerciseLog = WorkoutExercise & {
  exerciseId: string;
  workoutId?: string | null;
};

export type AddExerciseLog = Omit<ExerciseLog, "id" | "name" | "createdAt">;
export type UpdateExercise = Partial<Omit<Exercise, "id" | "createdAt">> & { id: string };