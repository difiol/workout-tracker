import { WorkoutExercise } from "./exercise";

export interface Workout {
  id: string;
  name: string;
  exercises: WorkoutExercise[];
  createdAt: string;
}

export interface CreateWorkout {
  name: string;
  exercises: WorkoutExercise[];
}

export type UpdateWorkoutExercises = {
  workoutId: string;
  exercises: WorkoutExercise[];
};

export interface AddExerciseToWorkout {
  workoutId: string;
  exercises: WorkoutExercise[];
}

export interface RemoveExerciseFromWorkout {
  workoutId: string;
  exerciseId: string;
}
