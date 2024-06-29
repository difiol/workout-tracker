import { Exercise } from "./exercise";

export interface Workout {
  id: string;
  name: string;
  exercises: Exercise[];
}

export interface CreateWorkout {
  name: string;
  exercises: Exercise[];
}

export interface AddExerciseToWorkout {
  workoutId: string;
  exercisesId: string[];
}

export interface RemoveExerciseToWorkout {
  workoutId: string;
  exerciseId: string;
}
