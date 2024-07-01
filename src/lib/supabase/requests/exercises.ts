import { SupabaseClient } from "@supabase/supabase-js";
import { AddExerciseLog, Exercise } from "@/types/exercise";

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

export const createSupabaseExerciseLogs = async (
  client: SupabaseClient,
  params: AddExerciseLog[]
) => {
  const mappedLogs = params.map(({ id, workoutId, ...logData }) => ({
    workout_id: workoutId,
    exercise_id: id,
    ...logData,
  }));

  return client.from(EXERCISE_LOGS_TABLE).insert(mappedLogs).select("id");
};

export const removeSupabaseExerciseLogs = async (
  client: SupabaseClient,
  logIds: string[]
) => {
  return client.from(EXERCISE_LOGS_TABLE).delete().eq("id", logIds);
};
