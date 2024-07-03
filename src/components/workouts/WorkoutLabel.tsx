import React, { MouseEvent } from "react";
import { Label } from "@/components/elements/buttons/Label";
import { ActionAlertDialog } from "@/components/elements/alerts/ActionAlertDialog";
import { IoCloseOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

type Props = {
  name: string;
  isActive: boolean;
  onClick: (e: MouseEvent<HTMLElement>) => void;
  onRemove: () => void;
};

export default function WorkoutLabel({
  name,
  isActive,
  onClick,
  onRemove,
}: Props) {
  const t = useTranslations("Alerts.remove-workout");
  return (
    <Label
      text={name}
      onClick={onClick}
      className={cn({ "bg-slate-100 dark:bg-slate-600": isActive })}
      labelButton={
        isActive &&
        onRemove && (
          <ActionAlertDialog
            title={t("title")}
            description={t("description")}
            onConfirm={onRemove}
          >
            <IoCloseOutline size={18} />
          </ActionAlertDialog>
        )
      }
    />
  );
}
