"use client";
import React, { useEffect, useState } from "react";

import { WorkoutExercises } from "@/components/workouts/WorkoutExercises";
import { WorkoutsSlider } from "@/components/workouts/WorkoutsSlider";
import { SaveWorkoutTrigger } from "../dialogs/SaveWorkoutTrigger";
import { WorkoutExercise } from "@/types/exercise";
import { useWorkouts } from "@/store/useWorkouts";
type Props = {
  className?: string;
};

export function HomeView({ className }: Props) {
  const { activeWorkout } = useWorkouts();

  const [todoExercises, setTodo] = useState<WorkoutExercise[]>(
    activeWorkout?.exercises ?? []
  );
  const [doneExercises, setDone] = useState<WorkoutExercise[]>([]);

  const addExercise = (exercise: WorkoutExercise) => {
    setTodo((prev) => [...prev, exercise]);
  };

  const updateExercise = (exercise: WorkoutExercise) => {
    setTodo((prev) =>
      prev.map((ex) => (ex.id === exercise.id ? exercise : ex))
    );
    setDone((prev) =>
      prev.map((ex) => (ex.id === exercise.id ? exercise : ex))
    );
  };

  const removeExercise = ({ id }: WorkoutExercise) => {
    setTodo((prev) => prev.filter((exercise) => exercise.id !== id));
    setDone((prev) => prev.filter((exercise) => exercise.id !== id));
  };

  const markAsDone = (exercise: WorkoutExercise) => {
    setTodo((prev) => prev.filter(({ id }) => id !== exercise.id));
    setDone((prev) => [...prev, exercise]);
  };

  const markAsUndone = (exercise: WorkoutExercise) => {
    setDone((prev) => prev.filter(({ id }) => id !== exercise.id));
    setTodo((prev) => [exercise, ...prev]);
  };

  useEffect(() => {
    setTodo(activeWorkout?.exercises ?? []);
    setDone([]);
  }, [activeWorkout]);

  return (
    <section className={className}>
      <WorkoutsSlider className="mt-2" />
      <WorkoutExercises
        todo={todoExercises}
        done={doneExercises}
        addExercise={addExercise}
        updateExercise={updateExercise}
        markAsDone={markAsDone}
        markAsUndone={markAsUndone}
        removeExercise={removeExercise}
        className="m-auto"
      />
      <div className="w-full flex justify-center mt-auto mt-6 mb-32">
        <SaveWorkoutTrigger
          exercisesToSave={[...todoExercises, ...doneExercises]}
        />
      </div>
    </section>
  );
}
