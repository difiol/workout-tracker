import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

export function Separator({ className, size = "sm" }: Props) {
  return (
    <div
      className={cn(
        "w-full border-b-0 rounded-lg border-slate-300 dark:border-slate-500 my-2",
        { border: size === "sm" },
        { "border-2": size === "md" },
        { "border-4": size === "lg" },

        className
      )}
    />
  );
}
