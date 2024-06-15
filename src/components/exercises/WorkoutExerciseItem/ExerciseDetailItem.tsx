import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  value: string | number;
  unit?: string;
  className?: string;
};

export function ExerciseDetailItem({ icon, value, unit, className }: Props) {
  return (
    <div className={cn("flex items-center gap-2 text-md", className)}>
      {icon}
      <span className="flex">
        <p>{value}</p>
        {/* <input className="bg-transparent w-fit" value={value} /> */}
        <p>{unit}</p>
      </span>
    </div>
  );
}
