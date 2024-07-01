import { WorkoutExercise } from "./exercise";

export interface Workout {
  id: string;
  name: string;
  exercises: WorkoutExercise[];
}

export interface CreateWorkout {
  name: string;
  exercises: WorkoutExercise[];
}

export interface AddExerciseToWorkout {
  workoutId: string;
  exercisesId: string[];
}

export interface RemoveExerciseToWorkout {
  workoutId: string;
  exerciseId: string;
}
