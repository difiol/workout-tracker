import { create } from "zustand";
import { Workout } from "@/types/workout";
import { defaultWorkouts } from "./data/workouts";

type WorkoutStore = {
  workouts: Workout[];
  activeWorkout: Workout | null;
  addWorkout: (workout: Workout) => void;
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
