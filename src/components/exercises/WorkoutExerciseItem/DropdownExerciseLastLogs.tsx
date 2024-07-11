import React from "react";
import {
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
} from "@/components/elements/dropdowns/dropdown-menu";
import { ExerciseLog } from "@/types/exercise";
import dayjs from "dayjs";
import { useTranslations } from "next-intl";

type Props = {
  children: React.ReactNode;
  exerciseLogs: ExerciseLog[];
  exerciseProperty: "weight" | "reps" | "sets" | "time" | "material";
  unit?: string;
  className?: string;
};

export function DropdownExerciseLastLogs({
  children,
  exerciseLogs,
  exerciseProperty,
  unit,
  className,
}: Props) {
  const t = useTranslations("ExerciseLogs");

  const propertyLogs = exerciseLogs?.filter(
    (log) => log[exerciseProperty] && log[exerciseProperty] !== "-"
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className={className}>
        <DropdownMenuLabel>{t("last-logs")}</DropdownMenuLabel>
        {!propertyLogs.length ? (
          <DropdownMenuItem className="opacity-80">
            {t("no-logs")}
          </DropdownMenuItem>
        ) : (
          propertyLogs?.map((log) => (
            <DropdownMenuItem key={log.id}>
              {`${log[exerciseProperty]} ${unit ? " " + unit : ""} -
            ${dayjs(log.createdAt).fromNow()}`}
            </DropdownMenuItem>
          ))
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
