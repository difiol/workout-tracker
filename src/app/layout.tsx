import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppInitializer } from "@/components/hoc/AppInitializer";
import { getSupabaseUserWorkouts } from "@/lib/supabase/requests/workouts";
import { getSupabaseUserPreferences } from "@/lib/supabase/requests/preferences";
import { createSSRClient } from "@/lib/supabase/server";

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
  let preferences, workouts;

  if (!error) {
    const [preferencesResponse, workoutsResponse] = await Promise.allSettled([
      getSupabaseUserPreferences(supabaseClient),
      getSupabaseUserWorkouts(supabaseClient),
    ]);
    preferences =
      preferencesResponse.status === "fulfilled"
        ? preferencesResponse.value
        : null;
    workouts =
      workoutsResponse.status === "fulfilled" ? workoutsResponse.value : null;
  }

  return (
    <AppInitializer
      user={data.user}
      preferences={preferences}
      workouts={workouts}
    >
      {children}
    </AppInitializer>
  );
}
