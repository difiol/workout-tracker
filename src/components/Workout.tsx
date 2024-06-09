"use client";

import React, { useState } from "react";
import Exercise from "./exercises/ExerciseItem";
import { useWorkout } from "@/store/useWorkout";
import { cn } from "@/lib/utils";

type Props = {};

export function Workout() {
  const { exercises, addExercise, deleteExercise } = useWorkout();
  const [active, setActive] = useState<string>("");
  const [done, setDone] = useState<string[]>([]);

  const handleClick = (id: string) => {
    if (active === id) setActive("");
    else setActive(id);
  };

  const handleDone = (id: string) => {
    if (done.includes(id))
      setDone((prev) => prev.filter((item) => item !== id));
    else setDone((prev) => [...prev, id]);
  };

  const handleDelete = (id: string) => {
    deleteExercise(id);
  };

  return (
    <section
      className={cn("w-full max-w-xl flex flex-col items-center gap-4 py-10")}
    >
      {exercises.map(({ id, name, weight, reps, sets, time, material }) => (
        <Exercise
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
          isDone={done.includes(id)}
        />
      ))}
    </section>
  );
}
