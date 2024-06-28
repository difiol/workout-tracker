"use client";
import { cn } from "@/lib/utils";
import { useWorkout } from "@/store/useWorkout";
import React from "react";
import { Label } from "../elements/buttons/Label";
import { useTranslations } from "next-intl";

type Props = {
  className?: string;
};

export function WorkoutsSlider({ className }: Props) {
  const t = useTranslations("Workout");
  const { workouts, activeWorkout, selectWorkout, deleteWorkout } =
    useWorkout();

  return (
    <div className={cn("w-full overflow-x-auto", className)}>
      <div className="w-fit flex gap-2 mx-auto py-3">
        {workouts.length === 0 ? (
          <p className="text-neutral-600 dark:text-neutral-400 font-light">
            {t("no-workouts")}
          </p>
        ) : (
          workouts.map(({ id, name }) => (
            <Label
              key={id}
              text={name}
              onClick={(e) => {
                selectWorkout(id);
                (e.target as HTMLElement).scrollIntoView({
                  behavior: "smooth",
                  block: "end",
                  inline: "end",
                });
              }}
              onRemove={() => deleteWorkout(id)}
              isActive={activeWorkout?.id === id}
            />
          ))
        )}
      </div>
    </div>
  );
}
