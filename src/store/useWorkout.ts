import { create } from "zustand";
import { Workout } from "@/types/workout";
import { Exercise } from "@/types/exercise";
import { defaultWorkouts } from "./data/workouts";

type WorkoutStore = {
  workouts: Workout[];
  activeWorkout: Workout | null;
  exercises: Exercise[];
  selectWorkout: (id: string) => void;
};

export const useWorkout = create<WorkoutStore>()((set) => ({
  workouts: defaultWorkouts,
  activeWorkout: defaultWorkouts[0],
  exercises: defaultWorkouts[0].exercises,
  selectWorkout: (id: string) =>
    set((state) => {
      const slectedWorkout = state.workouts.find(
        (workout) => workout.id === id
      );
      return {
        ...state,
        ...(id !== state.activeWorkout?.id && {
          activeWorkout: slectedWorkout,
          exercises: slectedWorkout?.exercises ?? [],
        }),
      };
    }),
}));
