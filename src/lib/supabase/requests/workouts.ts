import {
  AddExerciseToWorkout,
  RemoveExerciseFromWorkout,
  UpdateWorkout,
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
    .from(WORKOUTS_TABLE)
    .select("*,workout_exercises(*, exercises(*))")
    .order("order", { ascending: true }) 
    .returns<SupabaseWorkoutsData>();

  if (error) throw error;

  return mapSupabaseWorkoutsWithExercises(data);
};

export const createSupabaseWorkout = async (
  client: SupabaseClient<SupabaseDatabase>,
  params: {name: string,order?:number}
) => {
  const { data, error } = await client
    .from(WORKOUTS_TABLE)
    .insert(params)
    .select()
    .single();

  if (error) throw error;

  return data;
};

export const updateSupabaseWorkout = async (
  client: SupabaseClient<SupabaseDatabase>,
  workout: UpdateWorkout
) => {
  return client.from(WORKOUTS_TABLE).update(workout).eq("id", workout.id);
};

export const updateSupabaseWorkouts = async (
  client: SupabaseClient<SupabaseDatabase>,
  workouts: UpdateWorkout[]
) => {
  const mappedWorkouts = workouts.map((workout) => ({
    id: workout.id,
    name: workout.name,
    order: workout.order,
  }));
  return client.from(WORKOUTS_TABLE).upsert(mappedWorkouts);
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
