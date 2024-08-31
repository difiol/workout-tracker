import React, { useEffect, useState } from "react";
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
import { useAlert } from "@/store/useAlert";

type Props = {
  exercisesToSave: WorkoutExercise[];
  children?: React.ReactNode;
  title?: string;
  description?: string;
  defaultValue?: string;
  allowOverride?: boolean;
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
  allowOverride = false,
  className,
}: Props) {
  const t = useTranslations();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset: resetForm,
  } = useForm<SaveWorkoutInputs>();

  const { workouts, addWorkout, updateWorkoutExercises } = useWorkouts();
  const [open, setOpen] = useState(false);
  const { displayAlert } = useAlert();

  const checkIfWorkoutNameExists = (value: string) =>
    workouts.find(
      ({ name }) => name.toLowerCase() === value.trim().toLowerCase()
    );

  const onSaveWorkout = ({ workoutName }: SaveWorkoutInputs) => {
    if (!exercisesToSave.length) setOpen(false);

    const normalizedWorkoutName = workoutName.trim().toLowerCase();
    const workoutExist = checkIfWorkoutNameExists(normalizedWorkoutName);

    if (workoutExist?.id) {
      displayAlert({
        onConfirm: () => {
          updateWorkoutExercises({
            workoutId: workoutExist.id,
            exercises: exercisesToSave,
          });
        },
      });
    } else {
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
    }
  };

  useEffect(() => {
    resetForm();
  }, [open]);

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
          className="max-w-80 m-auto flex flex-col w-full gap-4 py-2"
        >
          <InputText
            name="workoutName"
            type="text"
            defaultValue={defaultValue}
            register={register}
            required={t("Errors.empty-field")}
            validate={{
              notExists: (value: string) =>
                allowOverride ||
                !checkIfWorkoutNameExists(value) ||
                t("Errors.workout-exists"),
              notEmpty: (value: string) =>
                value.trim().length > 0 || t("Errors.empty-field"),
            }}
            errorMessage={errors.workoutName?.message}
            hideErrorMessageSpace
          />
          <span className="flex justify-evenly">
            <Button type="submit">{t("Actions.save")}</Button>
          </span>
        </form>
      </DialogContent>
    </Dialog>
  );
}
