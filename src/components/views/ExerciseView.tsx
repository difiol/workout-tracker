"use client";

import Navbar from "../navbar/Navbar";
import { Exercise, ExerciseLog } from "@/types/exercise";
import { cn } from "@/lib/utils";
import { ExerciseLogsChart } from "../exercises/charts/ExerciseLogsChart";
import { ExerciseDetails } from "../exercises/details/ExerciseDetails";

type Props = {
  data: Exercise & {
    logs: ExerciseLog[];
  };
  className?: string;
};

export function ExerciseView({ data, className }: Props) {
  return (
    <div
      className={cn(
        "min-h-screen h-full w-full p-5 dark:bg-slate-800 dark:text-white",
        className
      )}
    >
      <Navbar />
      <ExerciseDetails exercise={data} />
      <ExerciseLogsChart className="mx-auto my-10 max-w-4xl" logs={data.logs} />
    </div>
  );
}
