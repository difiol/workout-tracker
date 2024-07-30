"use client";
import React, { useEffect, useState } from "react";
import { WorkoutExercises } from "@/components/workouts/WorkoutExercises";
import { WorkoutsSlider } from "@/components/workouts/WorkoutsSlider";
import { SaveWorkoutTrigger } from "../dialogs/SaveWorkoutTrigger";
import { Exercise, WorkoutExercise } from "@/types/exercise";
import { useWorkouts } from "@/store/useWorkouts";
import { useTranslations } from "next-intl";
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
  const t = useTranslations("Actions");
  const { done, activeWorkout, addExerciseToDone, removeExerciseFromDone } =
    useWorkouts();
  const [todoExercises, setTodoExercises] = useState<WorkoutExercise[]>([]);

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
    setTodoExercises((prev) => prev.filter(({ id }) => id !== exercise.id));
    addExerciseToDone({ ...exercise, order: done.length }, activeWorkout?.id);
  };

  const markAsUndone = (exercise: WorkoutExercise) => {
    setTodoExercises((prev) => [exercise, ...prev]);
    removeExerciseFromDone(exercise.logId ?? exercise.id);
  };

  useEffect(() => {
    setTodoExercises(
      generateTodoExercises(activeWorkout?.exercises ?? [], done)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeWorkout]);

  return (
    <section className={className}>
      <WorkoutsSlider className="mt-2 px-5" />
      <WorkoutExercises
        todo={todoExercises}
        done={done}
        addExercise={addExercise}
        updateExercise={updateExercise}
        markAsDone={markAsDone}
        markAsUndone={markAsUndone}
        removeExercise={removeExercise}
        className="m-auto px-5"
      />
      <div className="w-full flex justify-center mt-auto mt-6 mb-32">
        <SaveWorkoutTrigger
          exercisesToSave={[...todoExercises, ...done]}
          description={t("save-workout-as-description")}
          defaultValue={activeWorkout?.name}
        />
      </div>
    </section>
  );
}
