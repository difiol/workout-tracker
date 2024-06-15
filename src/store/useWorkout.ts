import { create } from "zustand";
import { Workout } from "@/types/workout";
import { defaultWorkouts } from "./data/workouts";

type WorkoutStore = {
  workouts: Workout[];
  activeWorkout: Workout | null;
  addWorkout: (workout: Workout) => void;
  deleteWorkout: (workout: string) => void;
  selectWorkout: (id: string) => void;
};

export const useWorkout = create<WorkoutStore>()((set) => ({
  workouts: defaultWorkouts,
  activeWorkout: defaultWorkouts[0],
  addWorkout: (workout: Workout) =>
    set((state) => ({
      ...state,
      workouts: [workout, ...state.workouts],
      activeWorkout: workout,
    })),
  deleteWorkout: (id: string) =>
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
    }),

  selectWorkout: (id: string) =>
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
}));
