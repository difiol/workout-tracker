import { create } from "zustand";
import { CreateWorkout, Workout } from "@/types/workout";
import { defaultWorkouts } from "./data/workouts";
import {
  addSupabaseExercisesToWorkout,
  createSupabaseWorkout,
  getSupabaseUserWorkouts,
  removeSupabaseWorkout,
} from "@/lib/supabase/requests/workouts";
import { createClient } from "@/lib/supabase/client";
import { getClientUser } from "@/utils/cookies/client";

type WorkoutStore = {
  workouts: Workout[];
  activeWorkout: Workout | null;
  addWorkout: (params: CreateWorkout) => void;
  deleteWorkout: (id: string) => void;
  selectWorkout: (id: string) => void;
  loadWorkouts: () => void;
};

const supabaseClient = createClient();

export const useWorkouts = create<WorkoutStore>()((set) => ({
  workouts: defaultWorkouts,
  activeWorkout: defaultWorkouts[0],
  addWorkout: async ({ name, exercises }: CreateWorkout) => {
    //Create the workout in the database
    const workout = await createSupabaseWorkout(supabaseClient, name);
    if (!workout) return;
    //Add the exercises to the workout in the database
    const exercisesToAdd = exercises.map(({ id }) => id);
    await addSupabaseExercisesToWorkout(supabaseClient, {
      workoutId: workout?.id,
      exercisesId: exercisesToAdd,
    });

    const newWorkout = { ...workout, exercises };
    set((state) => ({
      ...state,
      workouts: [newWorkout, ...state.workouts],
      activeWorkout: newWorkout,
    }));
  },
  deleteWorkout: async (id) => {
    if (getClientUser()) await removeSupabaseWorkout(supabaseClient, id);
    set((state) => {
      const newWorkouts = state.workouts.filter(
        (existingWorkout) => existingWorkout.id !== id
      );
      return {
        ...state,
        workouts: newWorkouts,
        activeWorkout:
          id === state.activeWorkout?.id ? null : state.activeWorkout,
      };
    });
  },

  selectWorkout: (id) =>
    set((state) => {
      const slectedWorkout = state.workouts.find(
        (workout) => workout.id === id
      );
      return {
        ...state,
        ...(id !== state.activeWorkout?.id && {
          activeWorkout: slectedWorkout,
        }),
      };
    }),
  loadWorkouts: async () => {
    if (!getClientUser()) return;
    const workouts = await getSupabaseUserWorkouts(supabaseClient);
    if (!workouts) {
      return set({ workouts: [], activeWorkout: null });
    }
    set({ workouts, activeWorkout: workouts[0] });
  },
}));
