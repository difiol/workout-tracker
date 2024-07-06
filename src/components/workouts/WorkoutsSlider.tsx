import { cn } from "@/lib/utils";
import React, { MouseEvent } from "react";
import { useTranslations } from "next-intl";
import { useWorkouts } from "@/store/useWorkouts";
import WorkoutLabel from "./WorkoutLabel";

type Props = {
  className?: string;
};

export function WorkoutsSlider({ className }: Props) {
  const t = useTranslations();
  const { workouts, activeWorkout, selectWorkout, deleteWorkout } =
    useWorkouts();

  const handleClickWorkoutLabel = (e: MouseEvent<HTMLElement>, id: string) => {
    selectWorkout(id);
    (e.target as HTMLElement).scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "end",
    });
  };

  return (
    <div className={cn("w-full overflow-x-auto", className)}>
      <div className="w-fit flex gap-2 mx-auto py-3">
        {workouts.length === 0 ? (
          <p className="text-neutral-600 dark:text-neutral-400 font-light"></p>
        ) : (
          workouts.map(({ id, name }) => (
            <WorkoutLabel
              key={id}
              name={name}
              onClick={(e) => handleClickWorkoutLabel(e, id)}
              isActive={activeWorkout?.id === id}
              onRemove={() =>
                deleteWorkout(id, {
                  messages: {
                    success: t("Success.workout-deleted"),
                    error: t("Errors.workout-not-deleted"),
                  },
                })
              }
            />
          ))
        )}
      </div>
    </div>
  );
}
