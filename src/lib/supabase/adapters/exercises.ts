import { Exercise, ExerciseLog } from "@/types/exercise";
import { SupabaseExercise, SupabaseExerciseLogsData } from "../types/entity.types";

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


export const mapSupabaseExercise = (exercise: SupabaseExercise & {exercise_logs: SupabaseExerciseLogsData[]}):Exercise & {
  logs: ExerciseLog[]} => {
  return {
    id: exercise.id,
    name: exercise.name,
    createdAt: exercise.created_at,
    maxWeight: exercise.max_weight,
    lastWeight: exercise.last_weight,
    lastReps: exercise.last_reps,
    lastSets: exercise.last_sets,
    lastTime: exercise.last_time,
    logs: mapSupabaseExerciseLogs(exercise.exercise_logs)
  }
  }
