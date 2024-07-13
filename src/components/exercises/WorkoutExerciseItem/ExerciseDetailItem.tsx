import { useContentEditable } from "@/hooks/useContentEditable";
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
  onChange?: (value: string | number) => void;
  className?: string;
};

const fallbackValue = "-";

export function ExerciseDetailItem({
  icon,
  property,
  value,
  unit,
  exerciseLogs = [],
  hide = false,
  onChange,
  className,
}: Props) {
  const t = useTranslations("Exercise");
  const contentEditableProps = useContentEditable(
    (value) => onChange && onChange(value ?? fallbackValue),
    { isEditable: !!onChange, isMultiline: false }
  );

  const checkValue = value && value !== fallbackValue;

  if (hide) return null;

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
        <p {...contentEditableProps} className="w-fit">
          {value ?? fallbackValue}
        </p>
        {checkValue && unit && <p>{unit}</p>}
      </span>
      <div className="absolute top-0 -right-3 ">
        <ExerciseLastLogsDropdown
          exerciseLogs={exerciseLogs}
          exerciseProperty={property}
          unit={unit}
        >
          <MdHistory size={12} className="align-bottom text-green-500" />
        </ExerciseLastLogsDropdown>
      </div>
    </div>
  );
}
