import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { ThemeSwitcher } from "../buttons/ThemeSwitcher";
import { LogoutButton } from "@/components/auth/LogoutButton";
import { LoginTrigger } from "@/components/dialogs/LoginTrigger";
import { useUser } from "@/store/useUser";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { buttonVariants } from "../shadcn/button";

type Props = {
  children: React.ReactNode;
};

export default function UserPreferencesDropdown({ children }: Props) {
  const { isLoggedIn } = useUser();
  const t = useTranslations("Auth");
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Preferences</DropdownMenuLabel>
        {isLoggedIn ? (
          <LogoutButton
            onAfterLogout={handleClose}
            variant="link"
            className="text-red-500 text-sm"
          />
        ) : (
          <LoginTrigger
            onAfterLogin={handleClose}
            className={cn(buttonVariants({ variant: "link" }), "text-sm")}
          >
            {t("login")}
          </LoginTrigger>
        )}
        <DropdownMenuSeparator />
        <ThemeSwitcher />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
