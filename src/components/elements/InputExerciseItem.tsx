import { cn } from "@/lib/utils";
import React, {
  FocusEventHandler,
  KeyboardEventHandler,
  useRef,
  useState,
} from "react";

type Props = {
  onChange: (value: string) => void;
  className?: string;
};

export function InputExerciseItem({ onChange, className }: Props) {
  const ref = useRef<HTMLInputElement>(null);

  const handleInput: FocusEventHandler<HTMLInputElement> = (e) => {
    if (!e.target.value) return;
    onChange(e.target.value);
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
        "w-full flex rounded-lg p-5 text-center text-2xl font-bold bg-slate-300",
        className
      )}
      ref={ref}
      onBlur={handleInput}
      onKeyDown={handleEnter}
    />
  );
}
