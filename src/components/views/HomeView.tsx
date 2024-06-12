"use client";
import React, { useEffect, useState } from "react";

import { WorkoutExercises } from "@/components/workouts/WorkoutExercises";
import { WorkoutsSlider } from "@/components/workouts/WorkoutsSlider";
import { SaveWorkoutTrigger } from "../dialogs/SaveWorkoutTrigger";
import { Dialog } from "../dialogs/dialog";
import { useWorkout } from "@/store/useWorkout";
import { Exercise } from "@/types/exercise";

type Props = {};

export function HomeView({}: Props) {
  const { activeWorkout } = useWorkout();

  const [todoExercises, setTodo] = useState<Exercise[]>(
    activeWorkout?.exercises ?? []
  );
  const [doneExercises, setDone] = useState<Exercise[]>([]);

  const addExercise = (exercise: Exercise) => {
    setTodo((prev) => [...prev, exercise]);
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
    <Dialog>
      <WorkoutsSlider className="mt-2" />
      <WorkoutExercises
        todo={todoExercises}
        done={doneExercises}
        addExercise={addExercise}
        markAsDone={markAdDone}
        removeExercise={removeExercise}
      />
      <div className="w-full flex justify-center mt-auto mt-6 mb-32">
        <SaveWorkoutTrigger
          exercisesToSave={[...todoExercises, ...doneExercises]}
        />
      </div>
    </Dialog>
  );
}
