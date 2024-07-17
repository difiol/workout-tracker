"use client";
import React, { useEffect, useState } from "react";

import { WorkoutExercises } from "@/components/workouts/WorkoutExercises";
import { WorkoutsSlider } from "@/components/workouts/WorkoutsSlider";
import { SaveWorkoutTrigger } from "../dialogs/SaveWorkoutTrigger";
import { Exercise, WorkoutExercise } from "@/types/exercise";
import { useWorkouts } from "@/store/useWorkouts";
type Props = {
  className?: string;
};

const generateTodoExercises = (
  workoutExercises: WorkoutExercise[],
  done: WorkoutExercise[]
) => {
  const result = workoutExercises.filter(
    (exercise) => !done.find((doneExercise) => doneExercise.id === exercise.id)
  );
  return result;
};

export function HomeView({ className }: Props) {
  const { done, activeWorkout, addExerciseToDone, removeExerciseFromDone } =
    useWorkouts();

  const [todoExercises, setTodo] = useState<WorkoutExercise[]>([]);

  const addExercise = ({ id, name }: Exercise) => {
    const exerciseToAdd: WorkoutExercise = {
      id,
      name,
      order: (todoExercises.at(-1)?.order ?? todoExercises.length) + 1,
      createdAt: new Date().toISOString(),
    };

    setTodo((prev) => [...prev, exerciseToAdd]);
  };

  const updateExercise = (exercise: WorkoutExercise) => {
    setTodo((prev) =>
      prev.map((ex) => (ex.id === exercise.id ? exercise : ex))
    );
  };

  const removeExercise = ({ id }: WorkoutExercise) => {
    setTodo((prev) => prev.filter((exercise) => exercise.id !== id));
  };

  const markAsDone = (exercise: WorkoutExercise) => {
    setTodo((prev) => prev.filter(({ id }) => id !== exercise.id));
    addExerciseToDone({ ...exercise, order: done.length }, activeWorkout?.id);
  };

  const markAsUndone = (exercise: WorkoutExercise) => {
    setTodo((prev) => [exercise, ...prev]);
    removeExerciseFromDone(exercise.logId ?? exercise.id);
  };

  useEffect(() => {
    setTodo(generateTodoExercises(activeWorkout?.exercises ?? [], done));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeWorkout]);

  return (
    <section className={className}>
      <WorkoutsSlider className="mt-2" />
      <WorkoutExercises
        todo={todoExercises}
        done={done}
        addExercise={addExercise}
        updateExercise={updateExercise}
        markAsDone={markAsDone}
        markAsUndone={markAsUndone}
        removeExercise={removeExercise}
        className="m-auto"
      />
      <div className="w-full flex justify-center mt-auto mt-6 mb-32">
        <SaveWorkoutTrigger exercisesToSave={[...todoExercises, ...done]} />
      </div>
    </section>
  );
}
