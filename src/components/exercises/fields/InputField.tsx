import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  value: string | number;
  onChange: (value: string) => void;
  fallbackValue?: string;
  unit?: string;
  type?: "number" | "text";
  min?: number;
  max?: number;
  className?: string;
};

export default function InputField({
  value,
  onChange,
  fallbackValue,
  unit,
  type = "number",
  min = 0,
  max,
  className,
}: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
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
    <>
      <input
        type={type}
        className={cn("w-fit bg-transparent [field-sizing:content]", className)}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleEnterKey}
        min={min}
        max={max}
      />
      {unit && <p>{unit}</p>}
    </>
  );
}
