import { cn } from "@/lib/utils";
import React, { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";

type Props = {
  name: string;
  type: HTMLInputTypeAttribute;
  label: string;
  register: any;
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
}: Props) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <label className="font-semibold">{label}</label>
      <input
        type={type}
        className={cn("border border-neutral-400 rounded-md px-2")}
        {...register(name, {
          minLength,
          maxLength,
          pattern: regExp,
          validate,
        })}
      />
    </div>
  );
}
