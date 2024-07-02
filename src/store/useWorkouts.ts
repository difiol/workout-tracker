import { create } from "zustand";
import {
  CreateWorkout,
  UpdateWorkoutExercises,
  Workout,
} from "@/types/workout";
import { defaultWorkouts } from "./data/workouts";
import {
  addSupabaseExercisesToWorkout,
  createSupabaseWorkout,
  getSupabaseUserWorkouts,
  removeAllSupabaseExercisesFromWorkout,
  removeSupabaseWorkout,
} from "@/lib/supabase/requests/workouts";
import { createClient } from "@/lib/supabase/client";
import { getClientUser } from "@/utils/cookies/client";

type WorkoutStore = {
  workouts: Workout[];
  activeWorkout: Workout | null;
  addWorkout: (params: CreateWorkout) => void;
  updateWorkoutExercises: (params: UpdateWorkoutExercises) => void;
  deleteWorkout: (id: string) => void;
  selectWorkout: (id: string) => void;
  loadWorkouts: () => void;
};

const supabaseClient = createClient();

export const useWorkouts = create<WorkoutStore>()((set) => ({
  workouts: defaultWorkouts,
  activeWorkout: defaultWorkouts[0],
  addWorkout: async ({ name, exercises }: CreateWorkout) => {
    //Create the workout in the database only if it doesn't exist
    const workout = await createSupabaseWorkout(supabaseClient, name);
    if (!workout) return;
    //Add the exercises to the workout in the database
    await addSupabaseExercisesToWorkout(supabaseClient, {
      workoutId: workout?.id,
      exercises,
    });

    const newWorkout = { ...workout, exercises };
    set((state) => ({
      workouts: [newWorkout, ...state.workouts],
      activeWorkout: newWorkout,
    }));
  },
  updateWorkoutExercises: async ({ workoutId, exercises }) => {
    if (getClientUser()) {
      console.log(workoutId, exercises);
      //Remove all workout exercises
      await removeAllSupabaseExercisesFromWorkout(supabaseClient, workoutId);
      //Add new workout exercises
      await addSupabaseExercisesToWorkout(supabaseClient, {
        workoutId,
        exercises,
      });
    }

    set((state) => {
      const updatedWorkouts = state.workouts.map((workout) =>
        workout.id === workoutId ? { ...workout, exercises } : workout
      );
      return {
        workouts: updatedWorkouts,
        activeWorkout: updatedWorkouts.find(({ id }) => id === workoutId),
      };
    });
  },
  deleteWorkout: async (id) => {
    if (getClientUser()) await removeSupabaseWorkout(supabaseClient, id);
    set((state) => {
      const newWorkouts = state.workouts.filter(
        (existingWorkout) => existingWorkout.id !== id
      );
      return {
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
