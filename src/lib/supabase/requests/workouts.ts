import {
  AddExerciseToWorkout,
  RemoveExerciseToWorkout,
  Workout,
} from "@/types/workout";
import { SupabaseClient } from "@supabase/supabase-js";

export const WORKOUTS_TABLE = "workouts";
export const WORKOUT_EXERCISES_TABLE = "workout_exercises";

export const getSupabaseUserWorkouts = async (client: SupabaseClient) => {
  const workouts = await client
    .from(WORKOUT_EXERCISES_TABLE)
    .select("workouts(id, name, created_at),exercises(id, name, created_at)");
  //TODO: Fix typing errors
  const mappedWorkout = workouts?.data?.reduce((acc: Workout[], curr: any) => {
    const existingWorkout = acc.find((w) => w.id === curr.workouts.id);
    if (existingWorkout) {
      existingWorkout.exercises.push(curr.exercises);
      return acc;
    } else {
      acc.push({
        ...curr.workouts,
        exercises: [curr.exercises],
      });
    }

    return acc;
  }, []);

  return mappedWorkout;
};

export const createSupabaseWorkout = async (
  client: SupabaseClient,
  name: string
) => {
  const response = await client
    .from(WORKOUTS_TABLE)
    .insert({ name })
    .select()
    .single();
  return response.data;
};

export const removeSupabaseWorkout = async (
  client: SupabaseClient,
  id: string
) => {
  return client.from(WORKOUTS_TABLE).delete().eq("id", id);
};

export const addSupabaseExercisesToWorkout = async (
  client: SupabaseClient,
  { exercisesId, workoutId }: AddExerciseToWorkout
) => {
  const exercisesToAdd = exercisesId.map((exerciseId) => ({
    workout_id: workoutId,
    exercise_id: exerciseId,
  }));

  return client.from(WORKOUT_EXERCISES_TABLE).insert(exercisesToAdd);
};

export const removeSupabaseExerciseFromWorkout = async (
  client: SupabaseClient,
  { exerciseId, workoutId }: RemoveExerciseToWorkout
) => {
  return client
    .from(WORKOUT_EXERCISES_TABLE)
    .delete()
    .eq("workout_id", workoutId)
    .eq("exercise_id", exerciseId);
};
