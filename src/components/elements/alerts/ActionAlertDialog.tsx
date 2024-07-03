import React, { ReactNode, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/elements/shadcn/alert-dialog";
import { useTranslations } from "next-intl";

type Props = {
  children: ReactNode;
  onConfirm: () => void;
  onCancel?: () => void;
  title?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  disabled?: boolean;
  className?: string;
};

export function ActionAlertDialog({
  children,
  onConfirm,
  onCancel,
  title,
  description,
  confirmText,
  cancelText,
  disabled = false,
  className,
}: Props) {
  const t = useTranslations("Alerts");
  const [open, setOpen] = useState(false);
  const closeDialog = () => setOpen(false);
  const handleChange = () => {
    if (disabled) onConfirm();
    else setOpen(!open);
  };

  const handleCancel = () => {
    closeDialog();
    setTimeout(() => onCancel?.(), 300);
  };
  const handleConfirm = () => {
    closeDialog();
    setTimeout(() => onConfirm(), 300);
  };

  return (
    <AlertDialog open={open} onOpenChange={handleChange}>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent className={className}>
        <AlertDialogHeader>
          <AlertDialogTitle>{title ?? t("action-title")}</AlertDialogTitle>
          <AlertDialogDescription>
            {description ?? t("action-description")}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={handleCancel}>
            {cancelText ?? t("cancel")}
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleConfirm}>
            {confirmText ?? t("confirm")}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
