import { cn } from "@/lib/utils";
import React, { MouseEvent } from "react";

type Props = {
  children: string | JSX.Element;
  type: "button" | "submit" | "reset" | undefined;
  variant?: "primary" | "secondary";
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
};

const variants = {
  base: "bg-neutral-50",
  primary: "bg-blue-500 text-white",
  secondary: "bg-white text-black",
  shadow: "shadow-md",
};

export function Button({ children, type, variant, onClick, className }: Props) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={cn(
        "border py-3 px-4 rounded-lg",
        variants[variant ?? "base"],
        className
      )}
    >
      {children}
    </button>
  );
}
