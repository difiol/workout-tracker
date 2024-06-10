import { create } from "zustand";
import { Workout } from "@/types/workout";
import { Exercise } from "@/types/exercise";
import { defaultWorkouts } from "./data/workouts";

type ExerciseStore = {
  workouts: Workout[];
  activeWorkout: Workout | null;
  exercises: Exercise[];
  selectWorkout: (id: string) => void;
  deleteExercise: (id: string) => void;
  addExercise: (exercise: any) => void;
};

export const useWorkout = create<ExerciseStore>()((set) => ({
  workouts: defaultWorkouts,
  activeWorkout: defaultWorkouts[0],
  exercises: defaultWorkouts[0].exercises,
  selectWorkout: (id: string) =>
    set((state) => {
      const slectedWorkout = state.workouts.find(
        (workout) => workout.id === id
      );
      return {
        activeWorkout: slectedWorkout,
        exercises: slectedWorkout?.exercises ?? [],
      };
    }),
  deleteExercise: (id: string) =>
    set((state) => ({
      exercises: state.exercises.filter((exercise) => exercise.id !== id),
    })),
  addExercise: (exercise: any) =>
    set((state) => ({ exercises: [...state.exercises, exercise] })),
}));
