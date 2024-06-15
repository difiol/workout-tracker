import { cn } from "@/lib/utils";
import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

type Props = {
  text: string;
  onClick: () => void;
  onRemove?: () => void;
  isActive?: boolean;
};

export function Label({ text, onClick, onRemove, isActive = false }: Props) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 w-max py-2 px-3 rounded-full border-slate-300 border transition-all duration-200 ease-in select-none",
        isActive && "bg-slate-100"
      )}
    >
      <p>{text}</p>
      {isActive && onRemove && (
        <IoCloseCircleOutline size={18} onClick={onRemove} />
      )}
    </button>
  );
}
