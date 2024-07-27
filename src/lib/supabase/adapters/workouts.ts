import { Workout } from "@/types/workout";
import {
  SupabaseExercise,
  SupabaseWorkoutsData,
} from "../types/entity.types";
import { WorkoutExercise } from "@/types/exercise";

export const mapSupabaseWorkoutsWithExercises = (
  supabaseData: SupabaseWorkoutsData
): Workout[] => {
  const mappedWorkouts: Workout[] = supabaseData.map((workout) => {
    const exercises = workout.workout_exercises.map((exercise) =>
      mapSupabaseWorkoutExercise(exercise.exercises)
    );
    return {
      id: workout.id,
      name: workout.name,
      createdAt: workout.created_at,
      exercises,
    };
  });
  return mappedWorkouts;
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
