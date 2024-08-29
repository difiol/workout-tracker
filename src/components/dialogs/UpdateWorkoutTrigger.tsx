import React, { useEffect, useState } from "react";
import { WorkoutExercise } from "@/types/exercise";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useWorkouts } from "@/store/useWorkouts";
import { ActionAlertDialog } from "../elements/alerts/ActionAlertDialog";
import { Workout } from "@/types/workout";
import { Button } from "../elements/shadcn/button";

type Props = {
  exercisesToSave: WorkoutExercise[];
  children?: React.ReactNode;
  workout: Workout | null;
  description?: string;
  defaultValue?: string;
  className?: string;
};

export function UpdateWorkoutTrigger({
  children,
  exercisesToSave,
  workout,
  className,
}: Props) {
  const t = useTranslations();
  const { updateWorkoutExercises } = useWorkouts();

  const onSaveWorkout = () => {
    if (!workout) return;

    updateWorkoutExercises({
      workoutId: workout.id,
      exercises: exercisesToSave,
    });
  };

  const isWorkoutModified = () => {
    if (!workout) return false;

    const { exercises } = workout;
    if (exercises.length !== exercisesToSave.length) return true;

    return exercises.some((exercise, index) => {
      const modified = exercisesToSave[index];
      return exercise.id !== modified.id;
    });
  };

  return (
    isWorkoutModified() && (
      <ActionAlertDialog
        title={t("Alerts.update-workout.title")}
        description={t("Alerts.update-workout.description")}
        onConfirm={onSaveWorkout}
        className={className}
      >
        {children ?? (
          <Button variant="outline">{t("Actions.update-workout")}</Button>
        )}
      </ActionAlertDialog>
    )
  );
}
