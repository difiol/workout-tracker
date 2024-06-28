import React from "react";
import { Button, ButtonVariants } from "../elements/buttons/Button";
import { useTranslations } from "next-intl";
import { useUser } from "@/store/useUser";

type Props = {
  variant?: ButtonVariants;
  className?: string;
};

export function LogoutButton({ variant = "danger", className }: Props) {
  const t = useTranslations("Auth");
  const { logout } = useUser();

  const handleLogout = () => {
    logout();
  };
  return (
    <Button variant={variant} className={className} onClick={handleLogout}>
      {t("logout")}
    </Button>
  );
}
