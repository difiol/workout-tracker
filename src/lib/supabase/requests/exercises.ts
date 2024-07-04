import { SupabaseClient } from "@supabase/supabase-js";
import { AddExerciseLog, Exercise, WorkoutExercise } from "@/types/exercise";

export const EXERCISES_TABLE = "exercises";
export const EXERCISE_LOGS_TABLE = "exercise_logs";

export const getSupabaseExercises = async (client: SupabaseClient) => {
  const exercises = await client.from(EXERCISES_TABLE).select();
  return exercises.data as Exercise[];
};

export const createSupabaseExercise = async (
  client: SupabaseClient,
  name: string
) => {
  const response = await client
    .from(EXERCISES_TABLE)
    .insert({ name })
    .select()
    .single();
  return response.data;
};

export const deleteSupabaseExercise = async (
  client: SupabaseClient,
  id: string
) => {
  return client.from(EXERCISE_LOGS_TABLE).delete().eq("id", id);
};

export const getSupabaseDoneExercisesByDay = async (
  client: SupabaseClient,
  day: Date
) => {
  const startRange = new Date(day);
  startRange.setHours(0, 0, 0, 0);
  const endRange = new Date(day);
  endRange.setHours(23, 59, 59, 999);
  const logs = await client
    .from(EXERCISE_LOGS_TABLE)
    .select("*, exercises(id, name, created_at)")
    .gte("created_at", startRange.toISOString())
    .lte("created_at", endRange.toISOString());

  return logs.data?.map((log) => ({
    ...log,
    id: log.exercises.id,
    logId: log.id,
    name: log.exercises.name,
  }));
};

export const createSupabaseExerciseLogs = async (
  client: SupabaseClient,
  params: AddExerciseLog[]
) => {
  const mappedLogs = params.map(({ workoutId, exerciseId, ...logData }) => ({
    workout_id: workoutId,
    exercise_id: exerciseId,
    ...logData,
  }));

  const result = await client
    .from(EXERCISE_LOGS_TABLE)
    .insert(mappedLogs)
    .select()
    .single();
  return result.data;
};

export const deleteSupabaseExerciseLogs = async (
  client: SupabaseClient,
  logIds: string[]
) => {
  return client.from(EXERCISE_LOGS_TABLE).delete().eq("id", logIds);
};
