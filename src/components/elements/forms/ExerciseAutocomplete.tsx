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
    const trimmedLabel = label.trim();
    let selectedExercise = exercises.find(
      ({ name }) => name.toLowerCase() === trimmedLabel.toLowerCase()
    );
    if (!selectedExercise) {
      selectedExercise = await createExercise(trimmedLabel);
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
          "w-full  rounded-lg p-2 border-2 border-slate-200 bg-slate-100 shadow-lg",
          "dark:bg-slate-800 dark:border-slate-700",
          className
        ),
        input: cn(
          "w-full text-center text-xl font-semibold border-none",
          "max-w-[calc(100%-90px)] ml-[45px]"
        ),
        item: "text-lg",
      }}
      allowNotMatchingValue
      clearAfterSubmit
      noBorder
      inputIcon={false}
      onFocus={onFocus}
      inputButton={
        <div className="h-fit absolute top-0 bottom-0 right-2 m-auto underline text-blue-400">
          {t("Actions.create")}
        </div>
      }
    />
  );
}