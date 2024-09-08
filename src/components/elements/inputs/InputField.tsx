import React from "react";
import { cn } from "@/lib/utils";

type Props = {
  value?: string | number | null;
  unit?: string;
  min?: number;
  max?: number;
  onChange: (value: string) => void;
  className?: string;
  type?: "number" | "text";
  disabled?: boolean;
};

const fallbackValues = {
  number: "0",
  text: "-",
};

export function InputField({
  value,
  type = "number",
  unit,
  min,
  max,
  disabled,
  onChange,
  className,
}: Props) {
  const fallbackValue = fallbackValues[type];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value ?? fallbackValue);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };

  const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.currentTarget.blur();
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const targetValue = e.target.value;
    if (targetValue === "") {
      onChange(fallbackValue ?? targetValue);
    }
  };

  return (
    <span className="flex gap-1">
      <input
        type={type}
        className={cn("w-fit bg-transparent [field-sizing:content]", className)}
        value={value ?? fallbackValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleEnterKey}
        min={min}
        max={max}
        disabled={disabled}
      />
      {unit && <p>{unit}</p>}
    </span>
  );
}
