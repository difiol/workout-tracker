import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../elements/shadcn/dialog";
import { useTranslations } from "next-intl";
import {
  ExerciseLogsChart,
  ExerciseLogsChartYKeys,
} from "../exercises/charts/ExerciseLogsChart";
import { useQuery } from "@tanstack/react-query";
import { getLastExerciseLogs } from "@/lib/supabase/requests/exercises";
import { createClient } from "@/lib/supabase/client";
import { WorkoutExercise } from "@/types/exercise";
import CustomSelect from "../elements/inputs/CustomSelect";
type Props = {
  children: React.ReactNode;
  exercise: WorkoutExercise;
  className?: string;
};
const client = createClient();

export function ExerciseChartTrigger({
  children,
  className,
  exercise: { id, name },
}: Props) {
  const t = useTranslations();
  const [open, setOpen] = useState(false);
  const { data: logs } = useQuery({
    queryKey: [`exerciseLogs${name}`],
    queryFn: () => getLastExerciseLogs(client, id, 5),
  });
  const [chartKey, setChartKey] = useState<ExerciseLogsChartYKeys>(
    ExerciseLogsChartYKeys.weight
  );

  const selectOptions = Object.keys(ExerciseLogsChartYKeys).map((key) => ({
    label: t(`Exercise.${key}`),
    value: key,
  }));

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className={className}>{children}</DialogTrigger>
      <DialogContent hideCloseButton className="py-10">
        <DialogHeader className="mb-4 flex flex-row items-center gap-2">
          <DialogTitle className="capitalize-first text-pretty text-2xl text-left">
            {name}
          </DialogTitle>
          <CustomSelect
            options={selectOptions}
            value={chartKey}
            onChange={(value) => setChartKey(value as ExerciseLogsChartYKeys)}
            classes={{ trigger: "w-fit h-fit ml-auto" }}
          />
        </DialogHeader>
        {logs && <ExerciseLogsChart logs={logs} yKey={chartKey} />}
      </DialogContent>
    </Dialog>
  );
}
