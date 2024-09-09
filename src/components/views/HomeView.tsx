"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { WorkoutExercises } from "@/components/workouts/WorkoutExercises";
import { WorkoutsSlider } from "@/components/workouts/WorkoutsSlider";
import { Exercise, WorkoutExercise } from "@/types/exercise";
import { useWorkouts } from "@/store/useWorkouts";
import { UpdateWorkoutTrigger } from "../dialogs/UpdateWorkoutTrigger";
import { autoAnimateBouncy } from "@/utils/autoanimate/bouncy";

type Props = {
  className?: string;
};

export function HomeView({ className }: Props) {
  const { done, activeWorkout, addExerciseToDone, removeExerciseFromDone } =
    useWorkouts();
  const [todoExercises, setTodoExercises] = useState<WorkoutExercise[]>([]);
  const buttonContainerRef = useRef(null);

  const addExercise = ({
    id,
    name,
    lastWeight,
    lastReps,
    lastSets,
    lastTime,
  }: Exercise) => {
    const exerciseToAdd: WorkoutExercise = {
      id,
      name,
      order: (todoExercises.at(-1)?.order ?? todoExercises.length) + 1,
      createdAt: new Date().toISOString(),
      weight: lastWeight,
      reps: lastReps,
      sets: lastSets,
      time: lastTime,
    };

    setTodoExercises((prev) => [...prev, exerciseToAdd]);
  };

  const updateExercise = (exercise: WorkoutExercise) => {
    setTodoExercises((prev) =>
      prev.map((ex) => (ex.id === exercise.id ? exercise : ex))
    );
  };

  const removeExercise = ({ id }: WorkoutExercise) => {
    setTodoExercises((prev) => prev.filter((exercise) => exercise.id !== id));
  };

  const markAsDone = (exercise: WorkoutExercise) => {
    addExerciseToDone({ ...exercise, order: done.length }, activeWorkout?.id);
  };

  const markAsUndone = (exercise: WorkoutExercise) => {
    removeExerciseFromDone(exercise.logId ?? exercise.id);
  };

  const isWorkoutModified = useCallback(() => {
    if (!activeWorkout) return false;

    const { exercises } = activeWorkout;
    if (exercises.length !== todoExercises.length) return true;

    return exercises.some((exercise, index) => {
      const modified = todoExercises[index];
      return exercise.id !== modified.id;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todoExercises]);

  useEffect(() => {
    setTodoExercises(activeWorkout?.exercises ?? []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeWorkout]);

  useEffect(() => {
    //Adds enter and exit animation to the button container
    buttonContainerRef.current && autoAnimateBouncy(buttonContainerRef.current);
  }, [buttonContainerRef]);

  return (
    <div className={className}>
      <WorkoutsSlider className="mt-2 px-5" />
      <WorkoutExercises
        todo={todoExercises}
        done={done}
        setTodo={setTodoExercises}
        addExercise={addExercise}
        updateExercise={updateExercise}
        markAsDone={markAsDone}
        markAsUndone={markAsUndone}
        removeExercise={removeExercise}
        className="m-auto px-5"
      />
      <div ref={buttonContainerRef} className="flex justify-center">
        {isWorkoutModified() && (
          <UpdateWorkoutTrigger
            exercisesToSave={todoExercises}
            workout={activeWorkout}
          />
        )}
      </div>
    </div>
  );
}
