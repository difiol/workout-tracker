import { cn } from "@/lib/utils";
import React, { MouseEvent, ReactNode } from "react";

type Props = {
  text: string;
  onClick: (e: MouseEvent<HTMLElement>) => void;
  onRemove?: () => void;
  labelButton?: ReactNode;
  className?: string;
};

export function Label({ text, onClick, labelButton, className }: Props) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-max flex items-center gap-1 py-2 px-3 rounded-full border-slate-300 border transition-all duration-200 ease-in select-none",
        "dark:border-slate-600",
        className
      )}
    >
      <p className="capitalize-first">{text}</p>
      {labelButton}
    </button>
  );
}
