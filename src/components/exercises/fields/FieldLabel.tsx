import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  icon: ReactNode;
  label: string;
  classes?: {
    container?: string;
    label?: string;
    input?: string;
  };
};

export function FieldLabel({ children, icon, label, classes }: Props) {
  return (
    <div
      className={cn(
        "w-full relative flex flex-col items-end text-md gap-1",
        classes?.container
      )}
    >
      <span className={cn("flex items-center gap-2", classes?.label)}>
        {icon}
        <h5 className="font-semibold">{label}</h5>
      </span>
      <span className={cn("flex gap-1 justify-end", classes?.input)}>
        {children}
      </span>
    </div>
  );
}
