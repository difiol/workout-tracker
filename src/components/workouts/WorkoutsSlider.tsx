import { cn } from "@/lib/utils";
import React from "react";
import { Label } from "../elements/buttons/Label";
import { useTranslations } from "next-intl";
import { useWorkouts } from "@/store/useWorkouts";
import { IoCloseOutline } from "react-icons/io5";
import { ActionAlertDialog } from "../elements/alerts/ActionAlertDialog";
import WorkoutLabel from "./WorkoutLabel";

type Props = {
  className?: string;
};

export function WorkoutsSlider({ className }: Props) {
  const t = useTranslations("Workout");
  const { workouts, activeWorkout, selectWorkout, deleteWorkout } =
    useWorkouts();

  return (
    <div className={cn("w-full overflow-x-auto", className)}>
      <div className="w-fit flex gap-2 mx-auto py-3">
        {workouts.length === 0 ? (
          <p className="text-neutral-600 dark:text-neutral-400 font-light">
            {t("no-workouts")}
          </p>
        ) : (
          workouts.map(({ id, name }) => (
            <WorkoutLabel
              key={id}
              name={name}
              onClick={(e) => {
                selectWorkout(id);
                (e.target as HTMLElement).scrollIntoView({
                  behavior: "smooth",
                  block: "end",
                  inline: "end",
                });
              }}
              isActive={activeWorkout?.id === id}
              onRemove={() => deleteWorkout(id)}
            />
          ))
        )}
      </div>
    </div>
  );
}
