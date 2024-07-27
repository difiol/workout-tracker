"use client";

import React, { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { Exercise, WorkoutExercise } from "@/types/exercise";
import { ExerciseItem } from "../exercises/WorkoutExerciseItem/ExerciseItem";
import { ExerciseAutocomplete } from "../elements/forms/ExerciseAutocomplete";
import { useTranslations } from "next-intl";

type Props = {
  done: WorkoutExercise[];
  todo: WorkoutExercise[];
  markAsDone: (exerciseLog: WorkoutExercise) => void;
  markAsUndone: (exercise: WorkoutExercise) => void;
  addExercise: (exercise: Exercise) => void;
  updateExercise: (exercise: WorkoutExercise) => void;
  removeExercise: (exercise: WorkoutExercise) => void;
  className?: string;
};

const commonSwipeElementClasses =
  "w-full h-full flex items-center text-lg font-semibold bg-opacity-90";

export function WorkoutExercises({
  done,
  todo,
  className,
  addExercise,
  markAsDone,
  markAsUndone,
  updateExercise,
  removeExercise,
}: Props) {
  const t = useTranslations("Actions");
  const [active, setActive] = useState<string>("");

  const removeExerciseSwipeElement = useMemo(
    () => (
      <span
        className={cn(commonSwipeElementClasses, "pl-5 text-white bg-red-400")}
      >
        {t("remove-from-workout")}
      </span>
    ),
    [t]
  );
  const markDoneExerciseSwipeElement = useMemo(
    () => (
      <span
        className={cn(
          commonSwipeElementClasses,
          "justify-end pr-5 text-black bg-green-300"
        )}
      >
        {t("mark-as-done")}
      </span>
    ),
    [t]
  );
  const markUndoneExerciseSwipeElement = useMemo(
    () => (
      <span
        className={cn(
          commonSwipeElementClasses,
          "pl-5 text-white bg-orange-300"
        )}
      >
        {t("mark-as-undone")}
      </span>
    ),
    [t]
  );

  const handleClick = (id: string) => {
    if (active === id) setActive("");
    else setActive(id);
  };

  const handleAddExercise = async (exercise: Exercise) => {
    setActive(exercise.id);
    addExercise(exercise);
  };

  const clearActiveExercise = () => {
    setActive("");
  };

  return (
    <section
      className={cn(
        "w-full max-w-xl flex flex-col items-center gap-4 py-6",
        className
      )}
    >
      {todo.map((exercise) => (
        <ExerciseItem
          key={exercise.id}
          exercise={exercise}
          onClick={handleClick}
          swipeRightElement={markDoneExerciseSwipeElement}
          onSwipeRight={markAsDone}
          swipeLeftElement={removeExerciseSwipeElement}
          onSwipeLeft={removeExercise}
          updateExercise={updateExercise}
          isActive={active === exercise.id}
        />
      ))}
      <ExerciseAutocomplete
        onSubmit={handleAddExercise}
        onFocus={clearActiveExercise}
      />

      {done.map((exercise) => (
        <ExerciseItem
          key={exercise.id}
          exercise={exercise}
          swipeLeftElement={markUndoneExerciseSwipeElement}
          onSwipeLeft={markAsUndone}
          isDone
        />
      ))}
    </section>
  );
}
