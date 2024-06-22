import { cn } from "@/lib/utils";
import React, { MouseEvent } from "react";

export type ButtonVariants =
  | "base"
  | "primary"
  | "secondary"
  | "shadow"
  | "danger"
  | "link";

type Props = {
  children: string | JSX.Element;
  type?: "button" | "submit" | "reset" | undefined;
  variant?: ButtonVariants;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
};

export const buttonVariants = {
  base: "border py-2 px-4 rounded-lg bg-neutral-50 dark:bg-slate-800",
  primary: "bg-blue-500 text-white",
  secondary: "bg-white text-black",
  shadow: "shadow-md",
  danger: "bg-red-500 text-white",
  link: "text-blue-500 underline",
};

export function Button({ children, type, variant, onClick, className }: Props) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={cn(
        "w-fit border py-2 px-4 rounded-lg",
        buttonVariants[variant ?? "base"],
        className
      )}
    >
      {children}
    </button>
  );
}
