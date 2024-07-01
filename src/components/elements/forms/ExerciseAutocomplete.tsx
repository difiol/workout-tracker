import React, { useMemo } from "react";
import { AutoComplete, Option } from "./Autocomplete";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { useExercises } from "@/store/useExercises";
import { Exercise } from "@/types/exercise";

type Props = {
  onSubmit: (exercise: Exercise) => void;
  onFocus?: () => void;
  className?: string;
};

export function ExerciseAutocomplete({
  onSubmit,
  onFocus,
  className,
  ...props
}: Props) {
  const t = useTranslations();

  const { exercises, createExercise } = useExercises();

  const mappedExercises = useMemo(
    () =>
      exercises.map((exercise) => ({
        label: exercise.name,
        value: exercise.id,
      })),
    [exercises]
  );

  const handleValueChange = async ({ label, value }: Option) => {
    console.log("Selected exercise: ", label, value);
    let selectedExercise = exercises.find(
      ({ name }) => name.toLowerCase() === label.toLowerCase()
    );
    if (!selectedExercise) {
      selectedExercise = await createExercise(label);
    }
    onSubmit(selectedExercise);
  };

  return (
    <AutoComplete
      placeholder={`${t("Actions.add-exercise-to-workout")}...`}
      emptyMessage={t("Errors.exercise-not-found")}
      options={mappedExercises}
      onValueChange={handleValueChange}
      classes={{
        container: cn(
          "w-full  rounded-lg p-2 border-2 border-slate-200 bg-slate-100 shadow-lg",
          "dark:bg-slate-800 dark:border-slate-700",
          className
        ),
        input: "w-full text-center text-xl font-semibold border-none",
        item: "text-lg",
      }}
      allowNotMatchingValue
      clearAfterSubmit
      noBorder
      inputIcon={false}
      onFocus={onFocus}
    />
  );
}
