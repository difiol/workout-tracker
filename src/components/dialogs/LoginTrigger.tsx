import React, { useState } from "react";
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
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className={className}>{children}</DialogTrigger>
      <DialogContent hideCloseButton>
        <DialogHeader>
          <DialogTitle className="text-2xl">{t("login")}</DialogTitle>
        </DialogHeader>
        <LoginForm
          onAfterLogin={() => {
            setOpen(false);
          }}
        />
      </DialogContent>
    </Dialog>
  );
}
