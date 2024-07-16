import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { AppInitializer } from "@/components/hoc/AppInitializer";
import { getSupabaseUserWorkouts } from "@/lib/supabase/requests/workouts";
import { getSupabaseUserPreferences } from "@/lib/supabase/requests/preferences";
import { createSSRClient } from "@/lib/supabase/server";
import {
  getSupabaseDoneExercisesBySession,
  getSupabaseExercises,
} from "@/lib/supabase/requests/exercises";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import pkg from "../../package.json";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Workout Tracker",
  description: "Control you exercise routine with ease",
  other: {
    version: pkg.version,
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
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
      getSupabaseDoneExercisesBySession(supabaseClient),
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
    <html lang={locale}>
      <AppInitializer
        user={data.user}
        preferences={preferences}
        workouts={workouts}
        exercises={exercises}
        doneExercises={doneExercises}
      >
        <NextIntlClientProvider
          messages={messages}
          locale={preferences?.language}
        >
          {children}
        </NextIntlClientProvider>

        <Toaster
          toastOptions={{
            classNames: {
              default:
                "dark:text-white dark:bg-slate-700/90 border-slate-100/90 dark:border-slate-700/90",
              error:
                "text-red-500 dark:text-red-300 bg-red-100 dark:bg-red-700/30",
              success:
                "text-green-700 dark:text-green-200 bg-green-200 dark:bg-green-800/40",

              warning:
                "text-yellow-500 dark:text-yellow-200 bg-yellow-50 dark:bg-yellow-800/40",
              info: "text-blue-500 dark:text-blue-200 bg-blue-100 dark:bg-blue-800/40",
            },
          }}
        />
      </AppInitializer>
    </html>
  );
}
