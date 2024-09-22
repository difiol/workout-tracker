import React, { InputHTMLAttributes, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Props = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
> & {
  value?: number;
  onChange: (value: number) => void;
  active?: boolean;
  max?: number;
  min?: number;
  leadingZeros?: number;
  classes?: {
    container?: string;
    input?: string;
    label?: string;
  };
};

const setLeadingZeros = (value: number, leadingZeros: number) => {
  return value.toString().padStart(leadingZeros, "0");
};

export function InputTime({
  value,
  onChange,
  active = true,
  max,
  min,
  leadingZeros = 0,
  classes,
  ...rest
}: Props) {
  const [inputValue, setInputValue] = useState(0);

  const updateValue = (value: number) => {
    setInputValue(value);
    onChange(value);
  };

  // const increment = () => {
  //   if (max !== undefined && inputValue >= max) updateValue(max);
  //   else updateValue(inputValue + 1);
  // };
  // const decrement = () => {
  //   if (min !== undefined && inputValue <= min) updateValue(min);
  //   else updateValue(inputValue - 1);
  // };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setInputValue(newValue);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (min !== undefined && inputValue <= min) updateValue(min);
    else if (max !== undefined && inputValue >= max) updateValue(max);
    else updateValue(newValue);
  };

  useEffect(() => {
    setInputValue(value || 0);
  }, [value]);

  return (
    <input
      type="number"
      value={setLeadingZeros(inputValue, leadingZeros)}
      max={max}
      min={min}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className={cn(
        "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
        "px-[1px] text-center border border-neutral-400 rounded-md bg-transparent",
        "w-6 [field-sizing:content]",
        "dark:autofill:shadow-slate-300",
        { "border-transparent": !active },
        classes?.input
      )}
      {...rest}
    />
  );
}
