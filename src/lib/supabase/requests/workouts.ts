import {
  AddExerciseToWorkout,
  RemoveExerciseFromWorkout,
  Workout,
} from "@/types/workout";
import { mapExercisesToAdd } from "@/utils/supabase/mapToSupabase";
import { SupabaseClient } from "@supabase/supabase-js";
import { mapSupabaseWorkoutsWithExercises } from "../adapters/workouts";
import { SupabaseWorkoutsData } from "../types/entity.types";

export const WORKOUTS_TABLE = "workouts";
export const WORKOUT_EXERCISES_TABLE = "workout_exercises";

export const getSupabaseUserWorkouts = async (
  client: SupabaseClient<SupabaseDatabase>
) => {
  const { data, error } = await client
    .from(WORKOUT_EXERCISES_TABLE)
    .select("order,workouts(*),exercises(*)")
    .order("order", { ascending: false })
    .returns<SupabaseWorkoutsData>();

  if (error) throw error;

  return mapSupabaseWorkoutsWithExercises(data);
};

export const createSupabaseWorkout = async (
  client: SupabaseClient<SupabaseDatabase>,
  name: string
) => {
  const { data, error } = await client
    .from(WORKOUTS_TABLE)
    .insert({ name })
    .select()
    .single();

  if (error) throw error;

  return data;
};

export const updateSupabaseWorkout = async (
  client: SupabaseClient<SupabaseDatabase>,
  workout: Omit<Workout, "exercises">
) => {
  return client.from(WORKOUTS_TABLE).update(workout).eq("id", workout.id);
};

export const removeSupabaseWorkout = async (
  client: SupabaseClient<SupabaseDatabase>,
  id: string
) => {
  return client.from(WORKOUTS_TABLE).delete().eq("id", id);
};

export const addSupabaseExercisesToWorkout = async (
  client: SupabaseClient<SupabaseDatabase>,
  { exercises, workoutId }: AddExerciseToWorkout
) => {
  const exercisesToAdd = mapExercisesToAdd(exercises, workoutId);

  return client.from(WORKOUT_EXERCISES_TABLE).insert(exercisesToAdd);
};

export const removeSupabaseExerciseFromWorkout = async (
  client: SupabaseClient<SupabaseDatabase>,
  { exerciseId, workoutId }: RemoveExerciseFromWorkout
) => {
  return client
    .from(WORKOUT_EXERCISES_TABLE)
    .delete()
    .eq("workout_id", workoutId)
    .eq("exercise_id", exerciseId);
};
export const removeAllSupabaseExercisesFromWorkout = async (
  client: SupabaseClient<SupabaseDatabase>,
  workoutId: string
) => {
  return client
    .from(WORKOUT_EXERCISES_TABLE)
    .delete()
    .eq("workout_id", workoutId);
};
