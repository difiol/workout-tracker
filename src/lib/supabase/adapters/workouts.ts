import { Workout } from "@/types/workout";
import {
  SupabaseExercise,
  SupabaseWorkout,
  SupabaseWorkoutsData,
} from "../types/entity.types";
import { WorkoutExercise } from "@/types/exercise";

export const mapSupabaseWorkoutsWithExercises = (
  supabaseData: SupabaseWorkoutsData
): Workout[] => {
  const mappedWorkouts = supabaseData?.reduce((acc: Workout[], curr) => {
    const existingWorkout = acc.find(
      (workout) => workout.id === curr.workouts.id
    );
    const mappedExercise = mapSupabaseWorkoutExercise(curr.exercises);
    if (existingWorkout) {
      existingWorkout.exercises.push(mappedExercise);
      return acc;
    } else {
      acc.push(mapSupabaseWorkout(curr.workouts, curr.exercises));
    }

    return acc;
  }, []);
  return mappedWorkouts;
};

export const mapSupabaseWorkout = (
  { id, name, created_at }: SupabaseWorkout,
  exercise?: SupabaseExercise
): Workout => {
  return {
    id,
    name,
    createdAt: created_at,
    exercises: exercise ? [mapSupabaseWorkoutExercise(exercise)] : [],
  };
};

export const mapSupabaseWorkoutExercise = ({
  id,
  name,
  max_weight,
  last_weight,
  last_reps,
  last_sets,
  last_time,
  created_at,
}: SupabaseExercise): WorkoutExercise => {
  return {
    id,
    name,
    maxWeight: max_weight,
    weight: last_weight,
    reps: last_reps,
    sets: last_sets,
    time: last_time,
    createdAt: created_at,
  };
};
