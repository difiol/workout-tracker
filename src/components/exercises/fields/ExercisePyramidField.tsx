import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FieldLabel } from "./FieldLabel";
import { useTranslations } from "next-intl";
import { convertNumberToTime } from "@/utils/time";
import { InputTimer } from "@/components/elements/inputs/InputTimer";
import { InputField } from "../../elements/inputs/InputField";

type InputProps = {
  property: "weight" | "reps" | "time" | "sets" | "material";
  value?: string | number | null;
  onChange: (value: string) => void;
  type?: "number" | "text" | "time";
  unit?: string;
  min?: number;
  max?: number;
  disabled?: boolean;
  className?: string;
};

type Props = Omit<InputProps, "onChange"> & {
  icon: ReactNode;
  sets?: number;
  hide?: boolean;
  defaultValues?: (string | number)[] | null;
  onChange: (values: string[]) => void;
};

const genInput = ({
  type,
  value,
  onChange,
  unit,
  min,
  max,
  disabled,
}: InputProps) => {
  switch (type) {
    case "time":
      return (
        <InputTimer
          initialValue={convertNumberToTime(Number(value))}
          onChange={(value) => onChange(value.toString())}
          disabled={disabled}
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
          disabled={disabled}
          classes={{ container: "justify-end" }}
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
  defaultValues,
  onChange,
  type = "number",
  unit,
  min = 0,
  max,
  sets = 1,
  hide = false,
  disabled,
  className,
}: Props) {
  const t = useTranslations("Exercise");
  const [isToggled, setIsToggled] = useState(false);
  const [values, setValues] = useState<string[]>(
    defaultValues
      ? defaultValues.map((v) => v.toString())
      : Array.from({ length: sets }).map(
          () => value?.toString() ?? fallbackValues[type]
        )
  );

  const handleChange = (value: string, i: number) => {
    const newValues = [...values];
    newValues[i] = value;
    setValues(newValues);
  };

  const handleToggle = () => {
    setIsToggled((prev) => !prev);
  };

  useEffect(() => {
    onChange(values);
  }, [values]);

  if (hide) return null;

  return (
    <FieldLabel
      icon={icon}
      label={t(property)}
      classes={{
        container: className,
        input: "items-end gap-1",
      }}
    >
      <span className="flex items-end gap-1">
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
              disabled,
              className,
            })
          )}
        </span>
        <button
          onClick={handleToggle}
          className={cn("self-start mt-1", { hidden: sets <= 1 })}
        >
          {isToggled ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
      </span>
    </FieldLabel>
  );
}
