import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { LoginForm } from "../auth/LoginForm";
import { useTranslations } from "next-intl";
type Props = {
  children: React.ReactNode;
  className?: string;
};

export function LoginTrigger({ children, className }: Props) {
  const t = useTranslations("Auth");
  return (
    <Dialog>
      <DialogTrigger className={className}>{children}</DialogTrigger>
      <DialogContent hideCloseButton>
        <DialogHeader>
          <DialogTitle className="text-2xl">{t("login")}</DialogTitle>
        </DialogHeader>
        <LoginForm
          onAfterLogin={() => {
            window.location.reload();
          }}
        />
      </DialogContent>
    </Dialog>
  );
}
