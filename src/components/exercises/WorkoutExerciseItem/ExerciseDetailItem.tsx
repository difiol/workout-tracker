import { useContentEditable } from "@/hooks/useContentEditable";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  name: string;
  value: string | number;
  unit?: string;
  onChange?: (value: string | number) => void;
  className?: string;
};

export function ExerciseDetailItem({
  icon,
  name,
  value,
  unit,
  onChange,
  className,
}: Props) {
  const contentEditableProps = useContentEditable(
    (value) => onChange && onChange(value ?? ""),
    { isEditable: !!onChange, isMultiline: false }
  );

  return (
    <div className={cn("w-fit mx-auto flex flex-col gap-2 text-md", className)}>
      <span className="flex items-center gap-2">
        {icon}
        <h5 className="font-semibold">{name}</h5>
      </span>
      <span className="w-full flex gap-1 justify-end">
        <p {...contentEditableProps} className="w-fit">
          {value}
        </p>
        {unit && <p>{unit}</p>}
      </span>
    </div>
  );
}
