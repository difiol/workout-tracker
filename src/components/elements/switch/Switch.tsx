import { cn } from "@/lib/utils";
import React, { MouseEvent, ReactNode, useEffect, useRef } from "react";

type Props = {
  options: { label: string | ReactNode; value: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
  classes?: {
    container?: string;
    option?: string;
    selector?: string;
  };
};

export function Switch({
  options,
  selectedValue,
  onChange,
  classes,
}: Readonly<Props>) {
  const selectorRef = useRef<HTMLSpanElement>(null);
  const handleClick = (e: MouseEvent<HTMLButtonElement>, value: string) => {
    selectorRef.current?.style.setProperty(
      "left",
      `${e.currentTarget.offsetLeft}px`
    );
    selectorRef.current?.style.setProperty(
      "width",
      `${e.currentTarget.offsetWidth}px`
    );
    onChange(value);
  };

  useEffect(() => {
    const selectedOption = options.find(
      (option) => option.value === selectedValue
    );
    if (selectedOption) {
      const index = options.indexOf(selectedOption);
      const option = options[index];
      selectorRef.current?.style.setProperty(
        "left",
        `${index * (100 / options.length)}%`
      );
      selectorRef.current?.style.setProperty(
        "width",
        `calc(100% / ${options.length})`
      );
    }
  }, [selectedValue]);

  return (
    <div className={cn("relative flex rounded-md border", classes?.container)}>
      {options.map((option) => (
        <button
          key={option.value}
          onClick={(e) => handleClick(e, option.value)}
          className={cn(
            "flex items-center justify-center text-xs p-2 z-10 font-thin opacity-70 grow",
            {
              "font-semibold opacity-100": option.value === selectedValue,
            },
            classes?.option
          )}
        >
          {option.label}
        </button>
      ))}
      <span
        ref={selectorRef}
        className={cn(
          "absolute h-full w-10 rounded-md border-none bg-slate-200 dark:bg-slate-600 transition-all duration-200",
          classes?.selector
        )}
      />
    </div>
  );
}
