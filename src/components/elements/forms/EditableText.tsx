import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import React, { useRef, useState } from "react";
import { FaEdit, FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

type Props = {
  children: string;
  classes?: {
    container?: ClassValue;
    text?: ClassValue;
    icons?: ClassValue;
  };
  onChange?: (value: string) => void;
  nonEditable?: boolean;
};

export function EditableText({
  children,
  classes,
  onChange,
  nonEditable = false,
}: Props) {
  const [value, setValue] = useState(children);
  const [isEditing, setIsEditing] = useState(false);
  const ref = useRef<HTMLTextAreaElement>(null);

  const handleEdit = () => {
    setIsEditing(true);
    setTimeout(() => {
      ref.current?.focus();
      ref.current?.select();
    }, 0);
  };

  const handleDone = () => {
    setIsEditing(false);
    onChange?.(value);
  };

  const handleReset = () => {
    setIsEditing(false);
    setValue(children);
  };

  return (
    <span className={cn("flex pt-10 items-center gap-2")}>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!isEditing}
        className={cn(
          "bg-transparent rounded-lg resize-none [field-sizing:content]",
          { "px-2 border-2 dark:border-slate-400": isEditing },
          classes?.text
        )}
        ref={ref}
      />
      <span className="flex items-center gap-2">
        {!isEditing ? (
          <FaEdit onClick={handleEdit} />
        ) : (
          <>
            <FaCheck onClick={handleDone} className="text-green-500" />
            <IoClose size={20} onClick={handleReset} className="text-red-500" />
          </>
        )}
      </span>
    </span>
  );
}
