import { ReactNode } from "react";
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
  icon: ReactNode;
  isPyramid?: boolean;
  sets?: number;
  hide?: boolean;
  disabled?: boolean;
  className?: string;
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
  disabled,
  className,
}: Props) {
  const t = useTranslations("Exercise");

  if (hide) return null;

  const input =
    type === "time" ? (
      <InputTimer
        initialValue={convertNumberToTime(Number(value))}
        onChange={(value) => onChange(value.toString())}
        disabled={disabled}
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
        disabled={disabled}
      />
    );

  return (
    <FieldLabel
      icon={icon}
      label={t(property)}
      classes={{
        container: className,
        input: "w-full",
      }}
    >
      {input}
    </FieldLabel>
  );
}
