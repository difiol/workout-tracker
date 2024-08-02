import { cn } from "@/lib/utils";
import { ExerciseLog } from "@/types/exercise";
import React, { ReactNode } from "react";
import { useTranslations } from "next-intl";
import InputField from "../fields/InputField";
import { InputTimer } from "@/components/elements/inputs/InputTimer";
import { convertNumberToTime } from "@/utils/time";

type Props = {
  icon: ReactNode;
  property: "weight" | "reps" | "sets" | "time" | "material";
  value?: string | number | null;
  unit?: string;
  exerciseLogs?: ExerciseLog[];
  hide?: boolean;
  onChange?: (value: string) => void;
  className?: string;
  type?: "number" | "text" | "time";
};

const fallbackValues = {
  number: "0",
  text: "-",
  time: "0",
};

export function ExerciseDetailItem({
  icon,
  property,
  value,
  type = "number",
  unit,
  hide = false,
  onChange,
  className,
}: Props) {
  const t = useTranslations("Exercise");
  const fallbackValue = fallbackValues[type];

  if (hide) return null;

  const handleChange = (value: string) => {
    onChange?.(value);
  };

  const fields = {
    text: (
      <InputField
        type="text"
        className="w-fit bg-transparent [field-sizing:content]"
        value={value ?? fallbackValue}
        fallbackValue={fallbackValue}
        onChange={handleChange}
      />
    ),
    number: (
      <InputField
        type="number"
        className="w-fit bg-transparent [field-sizing:content]"
        value={value ?? fallbackValue}
        onChange={handleChange}
        unit={unit}
      />
    ),
    time: (
      <InputTimer
        initialValue={convertNumberToTime(Number(value))}
        onChange={(value) => onChange?.(value.toString())}
        classes={{
          container: "w-fit justify-center",
          input: "text-right",
        }}
      />
    ),
  };

  return (
    <div
      className={cn(
        "relative w-fit flex flex-col text-md",
        { "gap-2": type !== "time" },
        className
      )}
    >
      <span className="flex items-center gap-2">
        {icon}
        <h5 className="font-semibold">{t(property)}</h5>
      </span>
      <span className="w-full flex gap-1 justify-end">{fields[type]}</span>
    </div>
  );
}
