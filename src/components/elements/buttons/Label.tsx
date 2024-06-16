import { cn } from "@/lib/utils";
import React, { MouseEvent } from "react";
import { IoCloseOutline } from "react-icons/io5";

type Props = {
  text: string;
  onClick: (e: MouseEvent<HTMLElement>) => void;
  onRemove?: () => void;
  isActive?: boolean;
};

export function Label({ text, onClick, onRemove, isActive = false }: Props) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-1 w-max py-2 px-3 rounded-full border-slate-300 border transition-all duration-200 ease-in select-none",
        "dark:border-slate-600",
        isActive && "bg-slate-100 dark:bg-slate-600"
      )}
    >
      <p>{text}</p>
      {isActive && onRemove && <IoCloseOutline size={18} onClick={onRemove} />}
    </button>
  );
}
