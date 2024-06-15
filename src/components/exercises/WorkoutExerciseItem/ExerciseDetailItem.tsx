import { useContentEditable } from "@/hooks/useContentEditable";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  value: string | number;
  unit?: string;
  onChange?: (value: string | number) => void;
  className?: string;
};

export function ExerciseDetailItem({
  icon,
  value,
  unit,
  onChange,
  className,
}: Props) {
  const contentEditableProps = useContentEditable(
    (value) => onChange && onChange(value ?? ""),
    { isEditable: !!onChange, isMultiline: false }
  );
  const handleKeyDown = (e: React.KeyboardEvent<HTMLParagraphElement>) => {
    if (e.key === "Enter") {
      e.currentTarget.blur();
    }
  };

  return (
    <div className={cn("flex items-center gap-2 text-md", className)}>
      {icon}
      <span className="flex gap-1">
        <p {...contentEditableProps} className="w-fit">
          {value}
        </p>
        {unit && <p>{unit}</p>}
      </span>
    </div>
  );
}
