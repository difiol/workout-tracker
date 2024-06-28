import { UUID } from "crypto";
import { SupabaseClient } from "@supabase/supabase-js";

export const EXERCISES_TABLE = "exercises";
export const EXERCISE_LOGS_TABLE = "exercise_logs";

export const getSupabaseExercises = async (client: SupabaseClient) => {
  const exercises = await client.from(EXERCISES_TABLE).select();
  return exercises.data;
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

// export const removeSupabaseExercise = async (
//   client: SupabaseClient,
//   id: UUID
// ) => {
//   return client.from(EXERCISE_LOGS_TABLE).delete().eq("id", id);
// };

// export const createSupabaseExerciseLog = async (
//   client: SupabaseClient,
//   { exercisesId, workoutId }: AddExerciseToWorkout
// ) => {
//   const exercisesToAdd = exercisesId.map((exerciseId) => ({
//     workout_id: workoutId,
//     exercise_id: exerciseId,
//   }));

//   return client.from(EXERCISE_LOGS_TABLE).insert(exercisesToAdd);
// };
