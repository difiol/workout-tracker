"use client";

import React, { FocusEventHandler, useEffect, useState } from "react";
import { ExerciseItem } from "../exercises/ExerciseItem";
import { useWorkout } from "@/store/useWorkout";
import { cn } from "@/lib/utils";
import { Exercise } from "@/types/exercise";
import { InputExerciseItem } from "../elements/InputExerciseItem";

type Props = {
  className?: string;
};

export function WorkoutExercises({ className }: Props) {
  const { exercises, activeWorkout } = useWorkout();
  const [active, setActive] = useState<string>("");
  const [todo, setTodo] = useState<Exercise[]>(exercises);
  const [done, setDone] = useState<Exercise[]>([]);

  const handleClick = (id: string) => {
    if (active === id) setActive("");
    else setActive(id);
  };

  const handleDone = (exercise: Exercise) => {
    if (done.filter(({ id }) => id === exercise.id).length) {
      setDone((prev) => prev.filter(({ id }) => id !== exercise.id));
      setTodo((prev) => [exercise, ...prev]);
    } else {
      setTodo((prev) => prev.filter(({ id }) => id !== exercise.id));
      setDone((prev) => [...prev, exercise]);
    }
  };

  const handleDelete = (id: string) => {
    setTodo((prev) => prev.filter((exercise) => exercise.id !== id));
    setDone((prev) => prev.filter((exercise) => exercise.id !== id));
  };

  const handleAddExercise = (name: string) => {
    const id = String(Math.random());
    setTodo((prev) => [
      ...prev,
      {
        id,
        name: name,
        weight: 0,
        reps: 0,
        sets: 0,
        time: 0,
        material: "",
      },
    ]);
    setActive(id);
  };

  useEffect(() => {
    setTodo(exercises);
    setDone([]);
  }, [activeWorkout]);

  return (
    <section
      className={cn(
        "w-full max-w-xl flex flex-col items-center gap-4 py-10",
        className
      )}
    >
      {todo.map(({ id, name, weight, reps, sets, time, material }) => (
        <ExerciseItem
          key={id}
          id={id}
          name={name}
          weight={weight}
          reps={reps}
          sets={sets}
          time={time}
          material={material}
          onClick={handleClick}
          onSwipeRight={handleDone}
          onSwipeLeft={handleDelete}
          isActive={active === id}
        />
      ))}
      <InputExerciseItem onChange={handleAddExercise} />
      {done.map(({ id, name, weight, reps, sets, time, material }) => (
        <ExerciseItem
          key={id}
          id={id}
          name={name}
          weight={weight}
          reps={reps}
          sets={sets}
          time={time}
          material={material}
          onClick={handleClick}
          onSwipeRight={handleDone}
          onSwipeLeft={handleDelete}
          isActive={active === id}
          isDone
        />
      ))}
    </section>
  );
}
