import { ExerciseLog } from "@/types/exercise";
import { SupabaseExerciseLogsData } from "../types/entity.types";

export const mapSupabaseExerciseLogs = (
  logs: SupabaseExerciseLogsData[]
): ExerciseLog[] =>
  logs.map(
    ({ id, created_at, exercise_id, exercises, workout_id, ...logData }) => ({
      ...logData,
      id: exercises?.id,
      logId: id,
      name: exercises?.name,
      exerciseId: exercise_id,
      workoutId: workout_id,
      createdAt: created_at,
    })
  );
