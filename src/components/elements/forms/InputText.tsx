import { cn } from "@/lib/utils";
import React, { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  register?: any;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  regExp?: RegExp;
  validate?: Function | Object;
  isInvalid?: boolean;
  errorMessage?: string;
  className?: string;
};

export default function InputText({
  name,
  type,
  label,
  register,
  required,
  minLength,
  maxLength,
  regExp,
  validate,
  className,
  ...rest
}: Props) {
  const input = (
    <input
      type={type}
      className={cn(
        "border border-neutral-400 rounded-md px-2",
        "dark:bg-slate-700"
      )}
      {...(register && {
        ...register(name, {
          minLength,
          maxLength,
          pattern: regExp,
          validate,
        }),
      })}
      {...rest}
    />
  );
  return !label ? (
    input
  ) : (
    <div className={cn("flex flex-col gap-1", className)}>
      {input}
      <label className="font-semibold">{label}</label>
    </div>
  );
}
