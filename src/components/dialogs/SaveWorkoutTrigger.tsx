import React, { ChangeEventHandler, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../elements/shadcn/dialog";
import { WorkoutExercise } from "@/types/exercise";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { InputText } from "../elements/inputs/InputText";
import { useForm } from "react-hook-form";
import { useWorkouts } from "@/store/useWorkouts";
import { Button, buttonVariants } from "@/components/elements/shadcn/button";
import { ActionAlertDialog } from "../elements/alerts/ActionAlertDialog";

type Props = {
  exercisesToSave: WorkoutExercise[];
  children?: React.ReactNode;
  title?: string;
  description?: string;
  defaultValue?: string;
  className?: string;
};

interface SaveWorkoutInputs {
  workoutName: string;
}

export function SaveWorkoutTrigger({
  children,
  exercisesToSave,
  title,
  description,
  defaultValue,
  className,
}: Props) {
  const t = useTranslations();
  const { register, handleSubmit, formState } = useForm<SaveWorkoutInputs>();
  const { workouts, addWorkout, updateWorkoutExercises } = useWorkouts();
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
        {children ?? t("Actions.save-new-workout")}
      </DialogTrigger>
      <DialogContent hideCloseButton>
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {title ?? t("Actions.save-workout-as")}
          </DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(onSaveWorkout)}
          className="max-w-80 m-auto flex flex-col w-full gap-8 py-2"
        >
          <InputText
            name="workoutName"
            type="text"
            defaultValue={defaultValue}
            register={register}
            onChange={checkIfWorkoutNameExists}
            required
          />
          <span className="flex justify-evenly">
            <ActionAlertDialog
              title={t("Alerts.override-workout.title")}
              description={t("Alerts.override-workout.description")}
              disabled={alertIsDisabled}
              onConfirm={handleSubmit(onSaveWorkout)}
            >
              <Button type="button" disabled={!formState.isValid}>
                {t("Actions.save")}
              </Button>
            </ActionAlertDialog>
          </span>
        </form>
      </DialogContent>
    </Dialog>
  );
}
