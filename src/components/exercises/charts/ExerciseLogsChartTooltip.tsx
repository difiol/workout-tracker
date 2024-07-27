import { ExerciseLog } from "@/types/exercise";
import dayjs from "dayjs";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/elements/layout/Separator";
import Weight from "@/components/hoc/Weight";

export const ExerciseLogsChartTooltip = ({
  active,
  payload,
  label,
  yKey,
}: {
  active?: boolean;
  payload?: {
    value: number;
    payload: ExerciseLog;
  }[];
  label?: string;
  yKey: "weight" | "reps" | "sets" | "time";
}) => {
  const t = useTranslations("Exercise");

  if (!active || !payload?.length) return null;

  const { weight, reps, sets, time } = payload[0].payload;

  return (
    <div className="flex flex-col gap-1 p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg">
      <h5 className="font-semibold text-lg">
        {dayjs(label).format("D MMMM - HH:mm")}
      </h5>
      <Separator className="mb-3" />
      {!!weight && (
        <span
          className={cn("flex gap-2 text-xs", {
            "font-bold text-sm": yKey === "weight",
          })}
        >
          <div>{t("weight")}:</div>
          <p>
            <Weight showUnit>{weight}</Weight>
          </p>
        </span>
      )}
      {!!reps && (
        <span
          className={cn("flex gap-2 text-xs", {
            "font-bold text-sm": yKey === "reps",
          })}
        >
          <div>{t("reps")}:</div>
          <p>{reps}</p>
        </span>
      )}
      {!!sets && (
        <span
          className={cn("flex gap-2 text-xs", {
            "font-bold text-sm": yKey === "sets",
          })}
        >
          <div>{t("sets")}:</div>
          <p>{sets}</p>
        </span>
      )}
      {!!time && (
        <span
          className={cn("flex gap-2 text-xs", {
            "font-bold text-sm": yKey === "time",
          })}
        >
          <div>{t("time")}:</div>
          <p>{time}</p>
        </span>
      )}
    </div>
  );
};
