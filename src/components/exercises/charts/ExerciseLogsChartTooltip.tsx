import { ExerciseLog } from "@/types/exercise";
import dayjs from "dayjs";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/elements/layout/Separator";
import Weight from "@/components/hoc/Weight";

interface Props {
  active?: boolean;
  payload?: {
    value: number;
    payload: ExerciseLog;
  }[];
  label?: string;
  yKey: "weight" | "reps" | "sets" | "time";
  size?: "sm" | "md" | "lg";
}

const timeFormat = {
  sm: "D MMM",
  md: "D MMMM - HH:mm",
  lg: "D MMMM YYYY - HH:mm",
};

export const ExerciseLogsChartTooltip = ({
  active,
  payload,
  label,
  yKey,
  size = "md",
}: Props) => {
  const t = useTranslations("Exercise");

  if (!active || !payload?.length) return null;

  const { weight, reps, sets, time } = payload[0].payload;

  return (
    <div className="z-50 flex flex-col gap-1 p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg">
      <h5 className="font-semibold text-lg">
        {dayjs(label).format(timeFormat[size])}
      </h5>
      <Separator className="mt-0" />
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
