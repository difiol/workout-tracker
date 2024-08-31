import { create } from "zustand";

import { createClient } from "@/lib/supabase/client";
import { Exercise } from "@/types/exercise";
import {
  createSupabaseExercise,
  deleteSupabaseExercise,
  getSupabaseExercises,
  updateSupabaseExercise,
} from "@/lib/supabase/requests/exercises";
import { getClientUser } from "@/utils/cookies/client";
import { toast } from "sonner";

interface Options {
  messages?: {
    success: string;
    error: string;
  };
}

type ExercisesStore = {
  exercises: Exercise[];
  createExercise: (name: string, options?: Options) => Promise<Exercise>;
  updateExercise: (exercise: Partial<Exercise> & {id: string}, options?: Options) => void;
  deleteExercise: (id: string, options?: Options) => void;
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
        createdAt: new Date().toISOString(),
      };
      set((state) => ({ exercises: [...state.exercises, localExercise] }));
      return localExercise;
    }

    set((state) => ({ exercises: [...state.exercises, exercise] }));
    return exercise as Exercise;
  },
  updateExercise: async (exercise, options) => {
    if(getClientUser()){
      const updatedExercise = await updateSupabaseExercise(supabaseClient, exercise)
      if(!updatedExercise){
        options?.messages?.error && toast.error(options.messages.error);
        return;
        }
        else
          options?.messages?.success && toast.success(options.messages.success);
      }
    set((state) => ({
      exercises: state.exercises.map((ex) =>
        ex.id === exercise.id ? { ...ex, ...exercise } : ex
      ),
    }));
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
