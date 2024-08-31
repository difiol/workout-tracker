import { cn } from "@/lib/utils";
import React, { InputHTMLAttributes } from "react";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "required"> & {
  label?: string;
  register?: any;
  required?: boolean | string;
  minLength?: number;
  maxLength?: number;
  regExp?: RegExp;
  validate?: Function | Object;
  isInvalid?: boolean;
  errorMessage?: string;
  hideErrorMessageSpace?: boolean;
  className?: string;
};

export function InputText({
  name,
  type,
  label,
  register,
  required,
  minLength,
  maxLength,
  regExp,
  validate,
  errorMessage,
  hideErrorMessageSpace = false,
  className,
  ...rest
}: Props) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      {label && <label className="font-semibold text-sm">{label}</label>}
      <input
        type={type}
        className={cn(
          "border border-neutral-400 rounded-md px-2 bg-neutral-100 autofill:shadow-[inset_0_0_0px_1000px] autofill:shadow-neutral-100",
          "dark:bg-slate-700 dark:autofill:shadow-slate-300",
          {
            "focus:outline-double border-red-400 outline-red-300 dark:border-red-400 dark:outline-red-500":
              errorMessage,
          }
        )}
        {...(register && {
          ...register(name, {
            minLength,
            maxLength,
            pattern: regExp,
            validate,
            required,
          }),
        })}
        {...rest}
      />
      {(!hideErrorMessageSpace || errorMessage) && (
        <span className="text-red-400/90 dark:text-red-500/90 font-semibold text-xs min-h-5">
          {errorMessage}
        </span>
      )}
    </div>
  );
}
