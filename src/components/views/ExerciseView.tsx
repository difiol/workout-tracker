"use client";
import React from "react";

import Navbar from "../navbar/Navbar";
import { Exercise, ExerciseLog } from "@/types/exercise";
import { cn } from "@/lib/utils";
type Props = {
  data: Exercise & {
    logs: ExerciseLog[];
  };
  className?: string;
};

export function ExerciseView({ data, className }: Props) {
  console.log(data);
  return (
    <div
      className={cn(
        "min-h-screen h-full w-full p-5 dark:bg-slate-800 dark:text-white",
        className
      )}
    >
      <Navbar />
      {data.name}
    </div>
  );
}
