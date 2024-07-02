import React, { useState } from "react";
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
import { Button, buttonVariants } from "../elements/buttons/Button";
import { useTranslations } from "next-intl";
import InputText from "../elements/forms/InputText";
import { useForm } from "react-hook-form";
import { useWorkouts } from "@/store/useWorkouts";

type Props = {
  exercisesToSave: WorkoutExercise[];
  className?: string;
};

interface SaveWorkoutInputs {
  workoutName: string;
}

export function SaveWorkoutTrigger({ exercisesToSave, className }: Props) {
  const t = useTranslations("Actions");
  const { register, handleSubmit } = useForm<SaveWorkoutInputs>();
  const { workouts, activeWorkout, addWorkout, updateWorkoutExercises } =
    useWorkouts();
  const [open, setOpen] = useState(false);

  const onSaveWorkout = ({ workoutName }: SaveWorkoutInputs) => {
    if (!exercisesToSave.length) setOpen(false);

    const workoutExist = workouts.find(
      (workout) => workout.name === workoutName
    );
    if (workoutExist?.id)
      updateWorkoutExercises({
        workoutId: workoutExist.id,
        exercises: exercisesToSave,
      });
    else
      addWorkout({
        name: workoutName,
        exercises: exercisesToSave,
      });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        className={cn("shadow-md", buttonVariants.base, className)}
      >
        {t("save-workout")}
      </DialogTrigger>
      <DialogContent hideCloseButton>
        <DialogHeader>
          <DialogTitle className="text-2xl">{t("save-workout-as")}</DialogTitle>
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
          />
          <span className="flex justify-evenly">
            <Button type="submit">{t("save")}</Button>
          </span>
        </form>
      </DialogContent>
    </Dialog>
  );
}
