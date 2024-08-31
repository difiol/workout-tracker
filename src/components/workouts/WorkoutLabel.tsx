import React, { MouseEvent } from "react";
import { Label } from "@/components/elements/buttons/Label";
import { ActionAlertDialog } from "@/components/elements/alerts/ActionAlertDialog";
import { IoCloseOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { EditableText } from "../elements/inputs/EditableText";
import { capitalize } from "@/utils/text/capitalize";

type Props = {
  name: string;
  isActive: boolean;
  onClick: (e: MouseEvent<HTMLElement>) => void;
  onRemove: () => void;
  onEdit?: (value: string) => void;
};

export function WorkoutLabel({
  name,
  isActive,
  onClick,
  onEdit,
  onRemove,
}: Props) {
  const t = useTranslations("Alerts.remove-workout");
  return (
    <Label
      onClick={onClick}
      className={cn({ "bg-slate-100 dark:bg-slate-600": isActive })}
    >
      <EditableText
        nonEditable={!isActive}
        notAllowNewLine
        onChange={onEdit}
        classes={{
          text: "capitalize-first",
        }}
      >
        {capitalize(name)}
      </EditableText>
      {isActive && onRemove && (
        <ActionAlertDialog
          title={t("title")}
          description={t("description")}
          onConfirm={onRemove}
        >
          <IoCloseOutline size={18} />
        </ActionAlertDialog>
      )}
    </Label>
  );
}
