import { create } from "zustand";

import { createClient } from "@/lib/supabase/client";
import { Exercise } from "@/types/exercise";
import { createSupabaseWorkout } from "@/lib/supabase/requests/workouts";
import {
  createSupabaseExercise,
  deleteSupabaseExercise,
  getSupabaseExercises,
} from "@/lib/supabase/requests/exercises";
import { getClientUser } from "@/utils/cookies/client";

type ExercisesStore = {
  exercises: Exercise[];
  createExercise: (name: string) => Promise<Exercise>;
  deleteExercise: (id: string) => void;
  loadExercises: () => void;
};

const supabaseClient = createClient();

export const useExercises = create<ExercisesStore>()((set) => ({
  exercises: [],
  createExercise: async (name) => {
    let exercise;
    if (getClientUser())
      exercise = await createSupabaseExercise(supabaseClient, name);

    if (!exercise) {
      const localExercise: Exercise = {
        id: Math.random().toString(36).substring(7),
        name,
        created_at: new Date().toISOString(),
      };
      set((state) => ({ exercises: [...state.exercises, localExercise] }));
      return localExercise;
    }

    set((state) => ({ exercises: [...state.exercises, exercise] }));
    return exercise as Exercise;
  },
  deleteExercise: async (id) => {
    await deleteSupabaseExercise(supabaseClient, id);
    set((state) => ({
      exercises: state.exercises.filter((exercise) => exercise.id !== id),
    }));
  },
  loadExercises: async () => {
    const exercises = await getSupabaseExercises(supabaseClient);
    set({ exercises });
  },
}));
