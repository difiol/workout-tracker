"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/elements/shadcn/chart";
import { ExerciseLog } from "@/types/exercise";
import dayjs from "dayjs";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/elements/layout/Separator";
import Weight from "@/components/hoc/Weight";
import { convertWeightTo } from "@/utils/wieght";
import { usePreferences } from "@/store/usePreferences";

const chartConfig = {} satisfies ChartConfig;

const CustomTooltip = ({
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
    <div className="flex flex-col gap-1 p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg">
      <h5 className="font-semibold text-lg">
        {dayjs(label).format("D MMMM - HH:mm")}
      </h5>
      <Separator className="mb-3" />
      {weight && (
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
      {reps && (
        <span className="flex gap-2 text-xs">
          <div>{t("reps")}:</div>
          <p>{reps}</p>
        </span>
      )}
      {sets && (
        <span className="flex gap-2 text-xs">
          <div>{t("sets")}:</div>
          <p>{sets}</p>
        </span>
      )}
      {time && (
        <span className="flex gap-2 text-xs">
          <div>{t("time")}:</div>
          <p>{time}</p>
        </span>
      )}
    </div>
  );
};

type Props = {
  logs: ExerciseLog[];
  yKey?: "weight" | "reps" | "sets" | "time";
  showYAxis?: boolean;
  className?: string;
};

export function ExerciseLogsChart({
  logs,
  yKey = "weight",
  showYAxis = false,
  className,
}: Props) {
  const t = useTranslations("ExerciseLogs");
  const { weightUnit } = usePreferences();

  if (!logs.length) return <p className="w-fit p-10 m-auto">{t("no-logs")}</p>;

  return (
    <ChartContainer config={chartConfig} className={className}>
      <AreaChart
        accessibilityLayer
        data={logs.map((log) => ({
          ...log,
          weight: convertWeightTo(Number(log.weight), weightUnit),
          createdAt: dayjs(log.createdAt).toDate().getTime(),
        }))}
        margin={{
          left: 4,
          right: 4,
        }}
      >
        <CartesianGrid vertical={false} />
        {showYAxis && (
          <YAxis
            width={30}
            tickMargin={8}
            dataKey={yKey}
            tickLine={false}
            axisLine={false}
            domain={["dataMin", "auto"]}
          />
        )}
        <XAxis
          interval="preserveStartEnd"
          dataKey="createdAt"
          tickLine={false}
          axisLine
          tickMargin={12}
          scale="time"
          type="number"
          domain={["dataMin", "dataMax"]}
          tickFormatter={(value) => dayjs(value).format("D MMM")}
        />
        <ChartTooltip cursor={false} content={<CustomTooltip yKey={yKey} />} />
        <defs>
          <linearGradient id="fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="10%" stopColor="green" stopOpacity={1} />
            <stop offset="90%" stopColor="green" stopOpacity={0.2} />
          </linearGradient>
        </defs>
        <Area
          dataKey={yKey}
          type="monotoneX"
          fill="url(#fill)"
          fillOpacity={0.4}
          stroke="green"
          dot={true}
        />
      </AreaChart>
    </ChartContainer>
  );
}
