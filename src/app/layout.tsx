import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppInitializer } from "@/components/hoc/AppInitializer";
import { getSupabaseUserWorkouts } from "@/lib/supabase/requests/workouts";
import { getSupabaseUserPreferences } from "@/lib/supabase/requests/preferences";
import { createSSRClient } from "@/lib/supabase/server";
import { getSupabaseExercises } from "@/lib/supabase/requests/exercises";

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
  let preferences, workouts, exercises;

  if (!error) {
    const [preferencesResponse, workoutsResponse, exercisesResponse] =
      await Promise.allSettled([
        getSupabaseUserPreferences(supabaseClient),
        getSupabaseUserWorkouts(supabaseClient),
        getSupabaseExercises(supabaseClient),
      ]);
    preferences =
      preferencesResponse.status === "fulfilled"
        ? preferencesResponse.value
        : null;
    workouts =
      workoutsResponse.status === "fulfilled" ? workoutsResponse.value : null;
    exercises =
      exercisesResponse.status === "fulfilled"
        ? exercisesResponse.value
        : undefined;
  }

  return (
    <AppInitializer
      user={data.user}
      preferences={preferences}
      workouts={workouts}
      exercises={exercises}
    >
      {children}
    </AppInitializer>
  );
}
