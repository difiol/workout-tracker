import { WorkoutExercise } from "@/types/exercise";

export const mapExercisesToAdd = (
  exercises: WorkoutExercise[],
  workoutId: string
) =>
  exercises.map(({ id }) => ({
    workout_id: workoutId,
    exercise_id: id,
  }));
