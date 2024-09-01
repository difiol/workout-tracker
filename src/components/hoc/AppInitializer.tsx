"use client";

import { AuthUser } from "@supabase/supabase-js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { cn } from "@/lib/utils";
import { useExercises } from "@/store/useExercises";
import { usePreferences } from "@/store/usePreferences";
import { useUser } from "@/store/useUser";
import { useWorkouts } from "@/store/useWorkouts";
import { Exercise, WorkoutExercise } from "@/types/exercise";
import { Preferences } from "@/types/preferences";
import { Workout } from "@/types/workout";
import { getPreferredTheme } from "@/utils/theme";
import { ReactNode, useEffect } from "react";
import { DayjsManager } from "./DayjsManager";
import { AlertActionDialog } from "../elements/alerts/AlertActionDialog";

type Props = {
  user?: AuthUser | null;
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
      //If user is not logged in, use the browser's theme
      const theme = getPreferredTheme();
      usePreferences.setState({
        theme,
      });
      document.body.className = theme === "dark" ? "dark" : "";
    }

    // Add or remove "dark" class when state changes
    usePreferences.subscribe((state) => {
      document.body.className = state.theme === "dark" ? "dark" : "";
    });
  }, [preferences?.theme]);

  return (
    <body className={cn({ dark: preferences?.theme === "dark" })}>
      <DayjsManager>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </DayjsManager>
      <AlertActionDialog />
    </body>
  );
}
