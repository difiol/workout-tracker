import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { FieldLabel } from "./FieldLabel";
import { useTranslations } from "next-intl";
import { convertNumberToTime } from "@/utils/time";
import { InputTimer } from "@/components/elements/inputs/InputTimer";
import { InputField } from "../../elements/inputs/InputField";

type Props = {
  property: "weight" | "reps" | "time" | "sets" | "material";
  value?: string | number | null;
  onChange: (value: string | string[]) => void;
  type?: "number" | "text" | "time";
  unit?: string;
  min?: number;
  max?: number;
  className?: string;
  icon: ReactNode;
  isPyramid?: boolean;
  sets?: number;
  hide?: boolean;
};

export function ExerciseField({
  icon,
  property,
  value,
  onChange,
  type = "number",
  unit,
  min = 0,
  max,
  hide = false,
  className,
}: Props) {
  const t = useTranslations("Exercise");

  if (hide) return null;

  const input =
    type === "time" ? (
      <InputTimer
        initialValue={convertNumberToTime(Number(value))}
        onChange={(value) => onChange(value.toString())}
        classes={{
          container: "w-fit justify-center",
          input: "text-right",
        }}
      />
    ) : (
      <InputField
        value={value?.toString()}
        type={type}
        unit={unit}
        min={min}
        max={max}
        onChange={onChange}
        className={cn("w-fit bg-transparent [field-sizing:content]", className)}
      />
    );

  return (
    <FieldLabel
      icon={icon}
      label={t(property)}
      className="flex flex-col items-end gap-1"
    >
      {input}
    </FieldLabel>
  );
}
