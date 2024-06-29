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
  onAfterLogin?: () => void;
};

export function LoginTrigger({ children, className, onAfterLogin }: Props) {
  const t = useTranslations("Auth");
  const [open, setOpen] = useState(false);

  const handleAfterLogin = () => {
    setOpen(false);
    if (onAfterLogin) onAfterLogin();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className={className}>{children}</DialogTrigger>
      <DialogContent hideCloseButton>
        <DialogHeader>
          <DialogTitle className="text-2xl">{t("login")}</DialogTitle>
        </DialogHeader>
        <LoginForm onAfterLogin={handleAfterLogin} />
      </DialogContent>
    </Dialog>
  );
}
