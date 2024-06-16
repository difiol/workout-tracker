"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Exercise } from "@/types/exercise";
import { InputExerciseItem } from "../elements/forms/InputExerciseItem";
import { ExerciseItem } from "../exercises/WorkoutExerciseItem/ExerciseItem";

type Props = {
  done: Exercise[];
  todo: Exercise[];
  markAsDone: (exercise: Exercise) => void;
  addExercise: (exercise: Exercise) => void;
  updateExercise: (exercise: Exercise) => void;
  removeExercise: (exercise: Exercise) => void;
  className?: string;
};

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

  const handleAddExercise = (name: string) => {
    const newExercise = {
      id: String(Math.random()),
      name,
      weight: 0,
      reps: 0,
      sets: 0,
      time: 0,
      material: "",
    };
    setActive(newExercise.id);
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
      <InputExerciseItem
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
