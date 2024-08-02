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

export function ExerciseAutocomplete({ onSubmit, onFocus, className }: Props) {
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
    const normalizedLabel = label.trim().toLowerCase();
    let selectedExercise = exercises.find(
      ({ name }) => name.toLowerCase() === normalizedLabel
    );
    if (!selectedExercise) {
      selectedExercise = await createExercise(normalizedLabel);
    }
    onSubmit(selectedExercise);
  };

  return (
    <AutoComplete
      name="exercise"
      placeholder={`${t("Actions.add-exercise-to-workout")}...`}
      emptyMessage={t("Errors.exercise-not-found")}
      options={mappedExercises}
      onValueChange={handleValueChange}
      classes={{
        container: cn(
          "w-full rounded-lg p-2 border-2 border-slate-200 bg-slate-100 shadow-lg",
          "dark:bg-slate-800 dark:border-slate-700",
          className
        ),
        input: cn(
          "w-full text-center text-xl font-semibold border-none",
          "max-w-[calc(100%-90px)] ml-[40px]"
        ),
        item: "text-lg capitalize-first",
      }}
      allowNotMatchingValue
      clearAfterSubmit
      noBorder
      inputIcon={false}
      onFocus={onFocus}
      inputButton={
        <div className="h-fit underline text-blue-400">
          {t("Actions.create")}
        </div>
      }
    />
  );
}
