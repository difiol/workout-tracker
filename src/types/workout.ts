import { UUID } from "crypto";
import { Exercise } from "./exercise";

export interface Workout {
  id: UUID;
  name: string;
  exercises: Exercise[];
}

export interface CreateWorkout {
  name: string;
  exercises: Exercise[];
}

export interface AddExerciseToWorkout {
  workoutId: UUID;
  exercisesId: UUID[];
}

export interface RemoveExerciseToWorkout {
  workoutId: UUID;
  exerciseId: UUID;
}
