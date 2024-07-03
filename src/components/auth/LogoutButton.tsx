import React from "react";
import { useTranslations } from "next-intl";
import { useUser } from "@/store/useUser";
import { Button, ButtonVariants } from "@/components/elements/shadcn/button";

type Props = {
  onAfterLogout?: () => void;
  className?: string;
} & ButtonVariants;
export function LogoutButton({ variant, onAfterLogout, className }: Props) {
  const t = useTranslations("Auth");
  const { logout } = useUser();

  const handleLogout = () => {
    logout();
    if (onAfterLogout) onAfterLogout();
  };
  return (
    <Button variant={variant} className={className} onClick={handleLogout}>
      {t("logout")}
    </Button>
  );
}
