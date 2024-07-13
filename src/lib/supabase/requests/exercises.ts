import { SupabaseClient } from "@supabase/supabase-js";
import { AddExerciseLog, Exercise } from "@/types/exercise";
import { mapSupabaseExercise, mapSupabaseExerciseLogs } from "../adapters/exercises";
import dayjs from "dayjs";

export const EXERCISES_TABLE = "exercises";
export const EXERCISE_LOGS_TABLE = "exercise_logs";

export const getSupabaseExercises = async (client: SupabaseClient<SupabaseDatabase>) => {
  const exercises = await client.from(EXERCISES_TABLE).select();
  return exercises.data as Exercise[];
};

export const getSupabaseExercise = async (client: SupabaseClient<SupabaseDatabase>, id: string) => {
  const {data, error} = await client.from(EXERCISES_TABLE).select('*, exercise_logs(*)').eq('id', id).single();
  if (error) throw error;

  return mapSupabaseExercise(data);
};

export const createSupabaseExercise = async (
  client: SupabaseClient<SupabaseDatabase>,
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
  client: SupabaseClient<SupabaseDatabase>,
  id: string
) => {
  return client.from(EXERCISE_LOGS_TABLE).delete().eq("id", id);
};

export const getSupabaseDoneExercisesByDay = async (
  client: SupabaseClient<SupabaseDatabase>,
  day: Date
) => {
  const startRange = new Date(day);
  startRange.setHours(0, 0, 0, 0);
  const endRange = new Date(day);
  endRange.setHours(23, 59, 59, 999);
  const { data, error } = await getSupabaseDoneExercisesByRange(
    client,
    startRange,
    endRange
  );

  if (error) {
    throw error;
  }

  return mapSupabaseExerciseLogs(data);
};

export const getSupabaseDoneExercisesBySession = async (
  client: SupabaseClient<SupabaseDatabase>,
  durationInHours: number = 1
) => {
  const startRange = dayjs().subtract(durationInHours, "hours").toDate();
  const endRange = dayjs().add(durationInHours, "hours").toDate();

  const { data, error } = await getSupabaseDoneExercisesByRange(
    client,
    startRange,
    endRange
  );

  if (error) {
    throw error;
  }

  return mapSupabaseExerciseLogs(data);
};

const getSupabaseDoneExercisesByRange = async (
  client: SupabaseClient<SupabaseDatabase>,
  start: Date,
  end: Date
) =>
  client
    .from(EXERCISE_LOGS_TABLE)
    .select("*, exercises(id, name, created_at)")
    .gte("created_at", start.toISOString())
    .lte("created_at", end.toISOString());

export const createSupabaseExerciseLogs = async (
  client: SupabaseClient<SupabaseDatabase>,
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
  client: SupabaseClient<SupabaseDatabase>,
  logIds: string[]
) => {
  return client.from(EXERCISE_LOGS_TABLE).delete().eq("id", logIds);
};

export const getLastExerciseLogs = async (
  client: SupabaseClient<SupabaseDatabase>,
  exerciseId:string,
  limit:number = 3
) => {
  const {data, error} = await client.from(EXERCISE_LOGS_TABLE).select("*, exercises(id, name)").eq('exercise_id',exerciseId).order("created_at", { ascending: false }).limit(limit);
  if (error) {
    throw error;
  }
  return mapSupabaseExerciseLogs(data);
}