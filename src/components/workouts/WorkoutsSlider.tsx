"use client";
import { cn } from "@/lib/utils";
import { useWorkout } from "@/store/useWorkout";
import React from "react";
import { Label } from "../elements/buttons/Label";

type Props = {
  className?: string;
};

export function WorkoutsSlider({ className }: Props) {
  const { workouts, activeWorkout, selectWorkout, deleteWorkout } =
    useWorkout();

  return (
    <div className={cn("w-full overflow-x-auto", className)}>
      <div className="w-fit flex gap-2 mx-auto py-3">
        {workouts.map(({ id, name }) => (
          <Label
            key={id}
            text={name}
            onClick={() => selectWorkout(id)}
            onRemove={() => deleteWorkout(id)}
            isActive={activeWorkout?.id === id}
          />
        ))}
      </div>
    </div>
  );
}
