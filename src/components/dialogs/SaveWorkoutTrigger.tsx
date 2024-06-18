import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { useWorkout } from "@/store/useWorkout";
import { Exercise } from "@/types/exercise";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "../elements/buttons/Button";

type Props = {
  exercisesToSave: Exercise[];
  className?: string;
};

export function SaveWorkoutTrigger({ exercisesToSave, className }: Props) {
  const { activeWorkout, addWorkout } = useWorkout();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const target = e.target as HTMLFormElement;
    addWorkout({
      id: String(Math.random()),
      name: target.workoutName.value,
      exercises: exercisesToSave,
    });
    e.preventDefault();
  };

  return (
    <Dialog>
      <DialogTrigger
        className={cn("shadow-md", buttonVariants.base, className)}
      >
        Save workout
      </DialogTrigger>
      <DialogContent hideCloseButton>
        <DialogHeader>
          <DialogTitle className="text-2xl">Save workout as</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleSubmit}
          className="max-w-80 m-auto flex flex-col w-full gap-8 py-4"
        >
          <input
            type="text"
            name="workoutName"
            defaultValue={activeWorkout?.name}
            className="w-full border-2 rounded-md text-xl"
          />
          <span className="flex justify-evenly">
            <DialogClose type="submit" className={buttonVariants.base}>
              Save
            </DialogClose>
          </span>
        </form>
      </DialogContent>
    </Dialog>
  );
}
