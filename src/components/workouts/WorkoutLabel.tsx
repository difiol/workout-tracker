import React, { MouseEvent } from "react";
import { Label } from "@/components/elements/buttons/Label";
import { IoCloseOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { EditableText } from "../elements/inputs/EditableText";
import { capitalize } from "@/utils/text/capitalize";
import { useAlert } from "@/store/useAlert";

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
  const t = useTranslations();
  const { displayAlert } = useAlert();

  const handleClick = () => {
    displayAlert({
      title: t("Alerts.update-workout.title"),
      description: t("Alerts.update-workout.description"),
      onConfirm: onRemove,
    });
  };
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
      {isActive && (
        <button onClick={handleClick}>
          <IoCloseOutline size={18} />
        </button>
      )}
    </Label>
  );
}
