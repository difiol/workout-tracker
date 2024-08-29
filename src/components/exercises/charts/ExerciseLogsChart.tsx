import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/elements/shadcn/chart";
import { ExerciseLog } from "@/types/exercise";
import dayjs from "dayjs";
import { useTranslations } from "next-intl";
import { convertWeightTo } from "@/utils/weight";
import { usePreferences } from "@/store/usePreferences";
import { ExerciseLogsChartTooltip } from "./ExerciseLogsChartTooltip";
import { useRef, useState } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";

const chartConfig = {} satisfies ChartConfig;

type YKeys = "weight" | "reps" | "sets" | "time";

type Props = {
  logs: ExerciseLog[];
  yKey?: YKeys;
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
  const [isActive, setIsActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => setIsActive(false));

  const checkKey = (key: YKeys): YKeys => {
    switch (key) {
      case "weight":
        return logs[0]?.weight ? "weight" : checkKey("reps");
      case "reps":
        return logs[0]?.reps ? "reps" : checkKey("time");
      case "time":
        return logs[0]?.time ? "time" : checkKey("weight");
      default:
        return key;
    }
  };

  if (!logs.length) return <p className="w-fit p-10 m-auto">{t("no-logs")}</p>;

  return (
    <ChartContainer config={chartConfig} className={className} ref={ref}>
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
          top: 4,
        }}
        onClick={() => setIsActive(true)}
      >
        <CartesianGrid vertical={false} />
        {showYAxis && (
          <YAxis
            width={30}
            tickMargin={8}
            dataKey={checkKey(yKey)}
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
        <ChartTooltip
          cursor={false}
          content={<ExerciseLogsChartTooltip yKey={checkKey(yKey)} size="sm" />}
          active={isActive}
        />
        <defs>
          <linearGradient id="fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="10%" stopColor="green" stopOpacity={1} />
            <stop offset="90%" stopColor="green" stopOpacity={0.2} />
          </linearGradient>
        </defs>
        <Area
          dataKey={checkKey(yKey)}
          type="monotoneX"
          fill="url(#fill)"
          fillOpacity={0.4}
          stroke="green"
          animationDuration={800}
          animationEasing="ease-in-out"
          dot={true}
        />
      </AreaChart>
    </ChartContainer>
  );
}
