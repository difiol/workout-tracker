import React, { ChangeEventHandler, use, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../elements/shadcn/dialog";
import { WorkoutExercise } from "@/types/exercise";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import InputText from "../elements/forms/InputText";
import { useForm } from "react-hook-form";
import { useWorkouts } from "@/store/useWorkouts";
import { Button, buttonVariants } from "@/components/elements/shadcn/button";
import { ActionAlertDialog } from "../elements/alerts/ActionAlertDialog";

type Props = {
  exercisesToSave: WorkoutExercise[];
  className?: string;
};

interface SaveWorkoutInputs {
  workoutName: string;
}

export function SaveWorkoutTrigger({ exercisesToSave, className }: Props) {
  const t = useTranslations();
  const { register, handleSubmit } = useForm<SaveWorkoutInputs>();
  const { workouts, activeWorkout, addWorkout, updateWorkoutExercises } =
    useWorkouts();
  const [open, setOpen] = useState(false);
  const [alertIsDisabled, setAlertIsDisabled] = useState(false);

  const closeDialog = () => setOpen(false);

  const checkIfWorkoutNameExists: ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    const value = e.target.value.trim().toLowerCase();
    const exists = workouts.find(({ name }) => name.toLowerCase() === value);
    setAlertIsDisabled(!exists);
  };

  const onSaveWorkout = ({ workoutName }: SaveWorkoutInputs) => {
    if (!exercisesToSave.length) setOpen(false);

    const normalizedWorkoutName = workoutName.trim().toLowerCase();
    const workoutExist = workouts.find(
      (workout) => workout.name.toLowerCase() === normalizedWorkoutName
    );
    if (workoutExist?.id)
      updateWorkoutExercises({
        workoutId: workoutExist.id,
        exercises: exercisesToSave,
      });
    else
      addWorkout(
        {
          name: normalizedWorkoutName,
          exercises: exercisesToSave,
        },
        {
          messages: {
            success: t("Success.workout-created"),
            error: t("Errors.workout-not-created"),
          },
        }
      );
    closeDialog();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        className={cn(
          buttonVariants({ variant: "default", shadow: "md" }),
          className
        )}
      >
        {t("Actions.save-workout")}
      </DialogTrigger>
      <DialogContent hideCloseButton>
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {t("Actions.save-workout-as")}
          </DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(onSaveWorkout)}
          className="max-w-80 m-auto flex flex-col w-full gap-8 py-4"
        >
          <InputText
            name="workoutName"
            type="text"
            defaultValue={activeWorkout?.name}
            register={register}
            onChange={checkIfWorkoutNameExists}
          />
          <span className="flex justify-evenly">
            <ActionAlertDialog
              title={t("Alerts.override-workout.title")}
              description={t("Alerts.override-workout.description")}
              disabled={alertIsDisabled}
              onConfirm={handleSubmit(onSaveWorkout)}
            >
              <Button type="button">{t("Actions.save")}</Button>
            </ActionAlertDialog>
          </span>
        </form>
      </DialogContent>
    </Dialog>
  );
}
