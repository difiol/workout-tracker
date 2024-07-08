"use client";

import { cn } from "@/lib/utils";
import { useExercises } from "@/store/useExercises";
import { usePreferences } from "@/store/usePreferences";
import { useUser } from "@/store/useUser";
import { useWorkouts } from "@/store/useWorkouts";
import { Exercise, WorkoutExercise } from "@/types/exercise";
import { Preferences } from "@/types/preferences";
import { Workout } from "@/types/workout";
import { getPreferredTheme } from "@/utils/theme";
import { AuthUser } from "@supabase/supabase-js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useEffect } from "react";

type Props = {
  user: AuthUser | null;
  preferences?: Preferences;
  workouts?: Workout[];
  exercises?: Exercise[] | null;
  doneExercises?: WorkoutExercise[];
  children: ReactNode;
};

const queryClient = new QueryClient();

export function AppInitializer({
  user,
  preferences,
  workouts,
  exercises,
  doneExercises,
  children,
}: Readonly<Props>) {
  useUser.setState({ user, isLoggedIn: !!user });
  usePreferences.setState({ ...preferences });
  if (workouts)
    useWorkouts.setState({
      workouts,
      activeWorkout: workouts[0],
      done: doneExercises,
    });
  useExercises.setState({ exercises: exercises ?? [] });

  useEffect(() => {
    if (!preferences?.theme) {
      //If user is not logged in, or does not have any theme preferences yet, use the browser's theme
      usePreferences.setState({
        theme: getPreferredTheme(),
      });
    }
    usePreferences.subscribe((state) => {
      document.body.className = state.theme === "dark" ? "dark" : "";
    });
  }, [preferences?.theme]);

  return (
    <body className={cn({ dark: preferences?.theme === "dark" })}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </body>
  );
}
