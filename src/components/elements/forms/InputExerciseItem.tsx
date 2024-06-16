import { cn } from "@/lib/utils";
import React, {
  FocusEventHandler,
  KeyboardEventHandler,
  useRef,
  useState,
} from "react";

type Props = {
  onSubmit: (value: string) => void;
  onFocus?: () => void;
  className?: string;
};

export function InputExerciseItem({ onSubmit, onFocus, className }: Props) {
  const ref = useRef<HTMLInputElement>(null);

  const handleInput: FocusEventHandler<HTMLInputElement> = (e) => {
    if (!e.target.value) return;
    onSubmit(e.target.value);
    e.target.value = "";
  };

  const handleEnter: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      ref.current?.blur();
    }
  };

  return (
    <input
      type="text"
      placeholder="Add new exercise..."
      className={cn(
        "w-full flex rounded-lg p-3 text-center text-lg font-semibold border-2 border-slate-200 bg-slate-100 shadow-lg",
        "dark:bg-slate-800 dark:border-slate-700",
        className
      )}
      ref={ref}
      onBlur={handleInput}
      onKeyDown={handleEnter}
      onFocus={onFocus}
    />
  );
}
