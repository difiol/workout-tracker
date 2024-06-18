"use client";
import React, { useEffect, useState } from "react";

import { WorkoutExercises } from "@/components/workouts/WorkoutExercises";
import { WorkoutsSlider } from "@/components/workouts/WorkoutsSlider";
import { SaveWorkoutTrigger } from "../dialogs/SaveWorkoutTrigger";
import { Dialog } from "../dialogs/dialog";
import { useWorkout } from "@/store/useWorkout";
import { Exercise } from "@/types/exercise";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export function HomeView({ className }: Props) {
  const { activeWorkout } = useWorkout();

  const [todoExercises, setTodo] = useState<Exercise[]>(
    activeWorkout?.exercises ?? []
  );
  const [doneExercises, setDone] = useState<Exercise[]>([]);

  const addExercise = (exercise: Exercise) => {
    setTodo((prev) => [...prev, exercise]);
  };

  const updateExercise = (exercise: Exercise) => {
    setTodo((prev) =>
      prev.map((ex) => (ex.id === exercise.id ? exercise : ex))
    );
    setDone((prev) =>
      prev.map((ex) => (ex.id === exercise.id ? exercise : ex))
    );
  };

  const removeExercise = ({ id }: Exercise) => {
    setTodo((prev) => prev.filter((exercise) => exercise.id !== id));
    setDone((prev) => prev.filter((exercise) => exercise.id !== id));
  };

  const markAdDone = (exercise: Exercise) => {
    if (doneExercises.filter(({ id }) => id === exercise.id).length) {
      setDone((prev) => prev.filter(({ id }) => id !== exercise.id));
      setTodo((prev) => [exercise, ...prev]);
    } else {
      setTodo((prev) => prev.filter(({ id }) => id !== exercise.id));
      setDone((prev) => [...prev, exercise]);
    }
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
        markAsDone={markAdDone}
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
