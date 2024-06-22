import React from "react";
import { Button, ButtonVariants } from "../elements/buttons/Button";
import { createClient } from "@/lib/supabase/client";
import { useTranslations } from "next-intl";

type Props = {
  variant?: ButtonVariants;
  className?: string;
};

export function LogoutButton({ variant = "danger", className }: Props) {
  const t = useTranslations("Auth");
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };
  return (
    <Button variant={variant} className={className} onClick={handleLogout}>
      {t("logout")}
    </Button>
  );
}
