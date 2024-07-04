import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { AppInitializer } from "@/components/hoc/AppInitializer";
import { getSupabaseUserWorkouts } from "@/lib/supabase/requests/workouts";
import { getSupabaseUserPreferences } from "@/lib/supabase/requests/preferences";
import { createSSRClient } from "@/lib/supabase/server";
import {
  getSupabaseDoneExercisesByDay,
  getSupabaseExercises,
} from "@/lib/supabase/requests/exercises";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Workout Tracker",
  description: "Control you exercise routine with ease",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabaseClient = createSSRClient();
  const { data, error } = await supabaseClient.auth.getUser();
  let preferences, workouts, exercises, doneExercises;

  if (!error) {
    const [
      preferencesResponse,
      workoutsResponse,
      exercisesResponse,
      doneExercisesResponse,
    ] = await Promise.allSettled([
      getSupabaseUserPreferences(supabaseClient),
      getSupabaseUserWorkouts(supabaseClient),
      getSupabaseExercises(supabaseClient),
      getSupabaseDoneExercisesByDay(supabaseClient, new Date()),
    ]);
    preferences =
      preferencesResponse.status === "fulfilled"
        ? preferencesResponse.value
        : undefined;
    workouts =
      workoutsResponse.status === "fulfilled"
        ? workoutsResponse.value
        : undefined;
    exercises =
      exercisesResponse.status === "fulfilled"
        ? exercisesResponse.value
        : undefined;
    doneExercises =
      doneExercisesResponse.status === "fulfilled"
        ? doneExercisesResponse.value
        : undefined;
  }

  return (
    <AppInitializer
      user={data.user}
      preferences={preferences}
      workouts={workouts}
      exercises={exercises}
      doneExercises={doneExercises}
    >
      {children}
      <Toaster
        toastOptions={{
          className: "shadow-md",
          classNames: {
            default:
              "dark:text-white dark:bg-slate-700/90 dark:border-slate-600",
            error:
              "text-red-500 dark:text-red-200 bg-red-100 dark:bg-red-950/70 dark:border-slate-600",
            success: "text-green-400",
            warning: "text-yellow-400",
            info: "bg-blue-400",
          },
        }}
      />
    </AppInitializer>
  );
}
