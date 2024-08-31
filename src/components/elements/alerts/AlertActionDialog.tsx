import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/elements/shadcn/alert-dialog";
import { useTranslations } from "next-intl";
import { useAlertStore } from "@/store/useAlert";

export function AlertActionDialog() {
  const t = useTranslations("Alerts");
  const {
    open,
    setOpen,
    title,
    description,
    confirmButtonText,
    cancelButtonText,
    onConfirm,
    onCancel,
  } = useAlertStore();

  const closeDialog = () => setOpen(false);

  const handleCancel = () => {
    onCancel?.();
    closeDialog();
  };
  const handleConfirm = () => {
    onConfirm?.();
    closeDialog();
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title ?? t("action-title")}</AlertDialogTitle>
          <AlertDialogDescription>
            {description ?? t("action-description")}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={handleCancel}>
            {cancelButtonText ?? t("cancel")}
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleConfirm}>
            {confirmButtonText ?? t("confirm")}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
