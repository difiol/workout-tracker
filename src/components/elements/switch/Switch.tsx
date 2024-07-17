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
    if (selectedValue === value) return;

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
      selectorRef.current?.style.setProperty(
        "left",
        `${index * (100 / options.length)}%`
      );
      selectorRef.current?.style.setProperty(
        "width",
        `calc(100% / ${options.length})`
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedValue]);

  return (
    <div
      className={cn(
        "relative flex rounded-md border-none bg-slate-100 dark:bg-slate-700 shadow-inner shadow-slate-300 dark:shadow-slate-900",
        classes?.container
      )}
    >
      {options.map((option) => (
        <button
          key={option.value}
          onClick={(e) => handleClick(e, option.value)}
          className={cn(
            "flex items-center justify-center text-xs p-2 z-10 grow text-slate-500",
            {
              "text-black dark:text-white": option.value === selectedValue,
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
          "absolute h-full w-10 rounded-md border-none bg-white dark:bg-slate-800 transition-all duration-200 shadow shadow-slate-900/20 dark:shadow-slate-900/80",
          classes?.selector
        )}
      />
    </div>
  );
}
