import React, { MouseEvent } from "react";
import { useTranslations } from "next-intl";
import { useWorkouts } from "@/store/useWorkouts";
import { WorkoutLabel } from "./WorkoutLabel";
import { SaveWorkoutTrigger } from "../dialogs/SaveWorkoutTrigger";
import { cn } from "@/lib/utils";
import { FaPlus } from "react-icons/fa6";
import { Workout } from "@/types/workout";
import { DragAndDropSortableList } from "../elements/dnd/DragAndDropSortableList";

type Props = {
  className?: string;
};

export function WorkoutsSlider({ className }: Props) {
  const t = useTranslations();
  const {
    workouts,
    activeWorkout,
    selectWorkout,
    updateWorkout,
    updateWorkouts,
    deleteWorkout,
  } = useWorkouts();

  const handleClickWorkoutLabel = (e: MouseEvent<HTMLElement>, id: string) => {
    selectWorkout(id);
    (e.target as HTMLElement).scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "end",
    });
  };

  const handleRemoveWorkout = (id: string) =>
    deleteWorkout(id, {
      messages: {
        success: t("Success.workout-deleted"),
        error: t("Errors.workout-not-deleted"),
      },
    });

  const handleChangeName = (name: string) => {
    if (activeWorkout)
      updateWorkout(
        { id: activeWorkout.id, name },
        {
          messages: {
            success: t("Success.workout-updated"),
            error: t("Errors.workout-not-updated"),
          },
        }
      );
  };

  const handleDragEnd = (resortedWorkouts: Workout[]) => {
    updateWorkouts(resortedWorkouts);
  };

  return (
    <div className={cn("w-full overflow-x-auto", className)}>
      <div className="w-full flex gap-2 mx-auto py-3">
        <SaveWorkoutTrigger
          exercisesToSave={[]}
          className="rounded-full w-fit h-fit p-3 self-center mr-2"
          title={t("Actions.create-new-workout")}
          description={t("Actions.create-new-workout-description")}
        >
          <FaPlus />
        </SaveWorkoutTrigger>
        {workouts?.length === 0 ? (
          <p className="self-center mx-2 text-neutral-600 dark:text-neutral-400 font-light">
            {t("Workout.no-workouts")}
          </p>
        ) : (
          <DragAndDropSortableList
            direction="horizontal"
            items={workouts}
            itemClass="w-fit"
            renderItem={({ id, name }: Workout) => (
              <WorkoutLabel
                key={id}
                name={name}
                onClick={(e) => handleClickWorkoutLabel(e, id)}
                isActive={activeWorkout?.id === id}
                onEdit={handleChangeName}
                onRemove={() => handleRemoveWorkout(id)}
              />
            )}
            onDragEnd={handleDragEnd}
            draggingClass="rounded-full"
          />
        )}
      </div>
    </div>
  );
}
