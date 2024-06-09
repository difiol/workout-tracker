import { create } from "zustand";

type ExerciseStore = {
  exercises: any[];
  deleteExercise: (id: string) => void;
  addExercise: (exercise: any) => void;
};

export const useWorkout = create<ExerciseStore>()((set) => ({
  exercises: [
    {
      id: "1",
      name: "Bench Press",
      sets: 3,
      reps: 10,
      weight: 135,
      time: 0,
      material: "barbell",
    },
    {
      id: "2",
      name: "Squat",
      sets: 3,
      reps: 10,
      weight: 135,
      time: 0,
      material: "barbell",
    },
    {
      id: "3",
      name: "Deadlift",
      sets: 3,
      reps: 10,
      weight: 135,
      time: 0,
      material: "barbell",
    },
    {
      id: "4",
      name: "Pull Up",
      sets: 3,
      reps: 10,
      weight: 0,
      time: 0,
      material: "body weight",
    },
    {
      id: "5",
      name: "Push Up",
      sets: 3,
      reps: 10,
      weight: 0,
      time: 0,
      material: "body weight",
    },
    {
      id: "6",
      name: "Sit Up",
      sets: 3,
      reps: 10,
      weight: 0,
      time: 0,
      material: "body weight",
    },
  ],
  deleteExercise: (id: string) =>
    set((state) => ({
      exercises: state.exercises.filter((exercise) => exercise.id !== id),
    })),
  addExercise: (exercise: any) =>
    set((state) => ({ exercises: [...state.exercises, exercise] })),
}));
