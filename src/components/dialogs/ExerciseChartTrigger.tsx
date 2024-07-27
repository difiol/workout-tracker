import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../elements/shadcn/dialog";
import { useTranslations } from "next-intl";
import { ExerciseLogsChart } from "../exercises/charts/ExerciseLogsChart";
import { useQuery } from "@tanstack/react-query";
import { getLastExerciseLogs } from "@/lib/supabase/requests/exercises";
import { createClient } from "@/lib/supabase/client";
type Props = {
  children: React.ReactNode;
  exerciseId: string;
  className?: string;
};
const client = createClient();

export function ExerciseChartTrigger({
  children,
  className,
  exerciseId,
}: Props) {
  const t = useTranslations("ExerciseLogs");
  const [open, setOpen] = useState(false);
  const { data: logs } = useQuery({
    queryKey: ["exerciseLogs"],
    queryFn: () => getLastExerciseLogs(client, exerciseId),
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className={className}>{children}</DialogTrigger>
      <DialogContent hideCloseButton className="py-10">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-2xl">{t("last-logs")}</DialogTitle>
        </DialogHeader>
        {logs && <ExerciseLogsChart logs={logs} />}
      </DialogContent>
    </Dialog>
  );
}
