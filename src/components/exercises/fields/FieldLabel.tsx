import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  icon: ReactNode;
  label: string;
  className?: string;
};

export function FieldLabel({ children, icon, label, className }: Props) {
  return (
    <div className="relative w-fit flex flex-col items-end text-md gap-1">
      <span className="flex items-center gap-2">
        {icon}
        <h5 className="font-semibold">{label}</h5>
      </span>
      <span className={cn("w-full flex gap-1 justify-end", className)}>
        {children}
      </span>
    </div>
  );
}
