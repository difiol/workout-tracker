"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Exercise, WorkoutExercise } from "@/types/exercise";
import { ExerciseItem } from "../exercises/WorkoutExerciseItem/ExerciseItem";
import { createClient } from "@/lib/supabase/client";
import { ExerciseAutocomplete } from "../elements/forms/ExerciseAutocomplete";

type Props = {
  done: WorkoutExercise[];
  todo: WorkoutExercise[];
  markAsDone: (exercise: WorkoutExercise) => void;
  addExercise: (exercise: WorkoutExercise) => void;
  updateExercise: (exercise: WorkoutExercise) => void;
  removeExercise: (exercise: WorkoutExercise) => void;
  className?: string;
};

const supabaseClient = createClient();

export function WorkoutExercises({
  done,
  todo,
  markAsDone,
  className,
  addExercise,
  updateExercise,
  removeExercise,
}: Props) {
  const [active, setActive] = useState<string>("");

  const handleClick = (id: string) => {
    if (active === id) setActive("");
    else setActive(id);
  };

  const handleAddExercise = async ({ id, name }: Exercise) => {
    const newExercise = {
      id,
      name,
    };
    setActive(id);
    addExercise(newExercise);
  };

  const handleInputFocus = () => {
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
          onSwipeRight={markAsDone}
          onSwipeLeft={removeExercise}
          updateExercise={updateExercise}
          isActive={active === exercise.id}
        />
      ))}
      <ExerciseAutocomplete
        onSubmit={handleAddExercise}
        onFocus={handleInputFocus}
      />

      {done.map((exercise) => (
        <ExerciseItem
          key={exercise.id}
          exercise={exercise}
          onClick={handleClick}
          onSwipeRight={markAsDone}
          onSwipeLeft={removeExercise}
          updateExercise={updateExercise}
          isActive={active === exercise.id}
          isDone
        />
      ))}
    </section>
  );
}
