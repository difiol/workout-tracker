import { cn } from "@/lib/utils";
import { ExerciseLog } from "@/types/exercise";
import React, { ReactNode } from "react";
import { ExerciseLastLogsDropdown } from "./DropdownExerciseLastLogs";
import { useTranslations } from "next-intl";

import { MdHistory } from "react-icons/md";

type Props = {
  icon: ReactNode;
  property: "weight" | "reps" | "sets" | "time" | "material";
  value?: string | number | null;
  unit?: string;
  exerciseLogs?: ExerciseLog[];
  hide?: boolean;
  onChange?: (value: string) => void;
  className?: string;
  type?: "number" | "text";
};

const fallbackValues = {
  number: "0",
  text: "-",
};

export function ExerciseDetailItem({
  icon,
  property,
  value,
  type = "number",
  unit,
  exerciseLogs = [],
  hide = false,
  onChange,
  className,
}: Props) {
  const t = useTranslations("Exercise");
  const fallbackValue = fallbackValues[type];

  if (hide) return null;

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (!newValue) {
      e.target.value = fallbackValue;
      onChange?.(fallbackValue);
    } else onChange?.(newValue);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };

  const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.currentTarget.blur();
    }
  };

  return (
    <div
      className={cn(
        "relative w-fit mx-auto flex flex-col gap-2 text-md",
        className
      )}
    >
      <span className="flex items-center gap-2">
        {icon}
        <h5 className="font-semibold">{t(property)}</h5>
      </span>
      <span className="w-full flex gap-1 justify-end">
        <input
          type={type}
          className="w-fit bg-transparent [field-sizing:content]"
          defaultValue={value ?? fallbackValue}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onKeyDown={handleEnterKey}
        />
        {unit && <p>{unit}</p>}
      </span>
    </div>
  );
}
