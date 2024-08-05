import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FieldLabel } from "./FieldLabel";
import { useTranslations } from "next-intl";
import { convertNumberToTime } from "@/utils/time";
import { InputTimer } from "@/components/elements/inputs/InputTimer";
import { InputField } from "../../elements/inputs/InputField";
import { set } from "react-hook-form";

type InputProps = {
  property: "weight" | "reps" | "time" | "sets" | "material";
  value?: string | number | null;
  onChange: (value: string) => void;
  type?: "number" | "text" | "time";
  unit?: string;
  min?: number;
  max?: number;
  className?: string;
};

type Props = Omit<InputProps, "onChange"> & {
  icon: ReactNode;
  sets?: number;
  hide?: boolean;
  onChange: (values: string[]) => void;
};

const genInput = ({
  type,
  value,
  onChange,
  unit,
  min,
  max,
  className,
}: InputProps) => {
  switch (type) {
    case "time":
      return (
        <InputTimer
          initialValue={convertNumberToTime(Number(value))}
          onChange={(value) => onChange(value.toString())}
          classes={{
            container: "w-fit justify-center",
            input: "text-right",
          }}
        />
      );
    default:
      return (
        <InputField
          value={value?.toString()}
          type={type}
          unit={unit}
          min={min}
          max={max}
          onChange={onChange}
          className={cn(
            "w-fit bg-transparent [field-sizing:content]",
            className
          )}
        />
      );
  }
};

const fallbackValues: Record<string, string> = {
  number: "0",
  text: "-",
};

export function ExercisePyramidField({
  icon,
  property,
  value,
  onChange,
  type = "number",
  unit,
  min = 0,
  max,
  sets = 1,
  hide = false,
  className,
}: Props) {
  const t = useTranslations("Exercise");
  const [isToggled, setIsToggled] = useState(false);
  const [values, setValues] = useState<string[]>([
    value?.toString() ?? fallbackValues[type],
  ]);

  const handleChange = (value: string, i: number) => {
    const newValues = [...values];
    newValues[i] = value;
    setValues(newValues);
  };

  useEffect(() => {
    onChange(values);
  }, [values]);

  useEffect(() => {
    if (isToggled) setValues(Array.from({ length: sets }).map(() => values[0]));
    else setValues([values[0]]);
  }, [isToggled]);

  if (hide) return null;

  return (
    <FieldLabel
      icon={icon}
      label={t(property)}
      className="flex flex-col items-end gap-1"
    >
      <span className="flex items-center gap-2">
        <button
          onClick={() => {
            setIsToggled((prev) => !prev);
          }}
          className={cn("self-start mt-1", { hidden: sets <= 1 })}
        >
          {isToggled ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
        <span>
          {Array.from({ length: isToggled ? sets : 1 }).map((_, i) =>
            genInput({
              property,
              type,
              value: values[i],
              onChange: (value) => handleChange(value, i),
              unit,
              min,
              max,
              className,
            })
          )}
        </span>
      </span>
    </FieldLabel>
  );
}
