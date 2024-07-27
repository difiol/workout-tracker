import { Database } from "./database.types";

export type SupabasePreferences =
  Database["public"]["Tables"]["preferences"]["Row"];
export type SupabaseWorkout = Database["public"]["Tables"]["workouts"]["Row"];
export type SupabaseExercise = Database["public"]["Tables"]["exercises"]["Row"];
export type SupabaseWorkoutExercises =
  Database["public"]["Tables"]["workout_exercises"]["Row"];
export type SupabaseExerciseLogs =
  Database["public"]["Tables"]["exercise_logs"]["Row"];

export type SupabaseWorkoutsData = (SupabaseWorkout & {
  workout_exercises: SupabaseExerciseLogs & {exercises: SupabaseExercise}[];
})[];
export type SupabaseExerciseLogsData = Omit<SupabaseExerciseLogs, "user_id"> & {
  exercises: Omit<SupabaseExercise, "user_id">;
};
