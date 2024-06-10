"use client";
import { cn } from "@/lib/utils";
import { useWorkout } from "@/store/useWorkout";
import React from "react";

type Props = {};

export function WorkoutsSlider({}: Props) {
  const { workouts, activeWorkout, selectWorkout } = useWorkout();

  const handleClick = (id: string) => {
    selectWorkout(id);
  };

  return (
    <div className="w-full overflow-x-scroll mt-8">
      <div className="w-fit flex gap-2 ">
        {workouts.map(({ id, name }) => (
          <button
            onClick={() => handleClick(id)}
            className={cn(
              "w-max py-1 px-2 rounded-full border-slate-300 border",
              activeWorkout?.id === id && "bg-slate-300"
            )}
            key={id}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
}
