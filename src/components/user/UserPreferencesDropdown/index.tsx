import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../elements/shadcn/dropdown-menu";
import { LogoutButton } from "@/components/auth/LogoutButton";
import { LoginTrigger } from "@/components/dialogs/LoginTrigger";
import { useUser } from "@/store/useUser";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { buttonVariants } from "../../elements/shadcn/button";
import { ThemeSwitch } from "../../elements/switch/ThemeSwitch";
import { LangSwitch } from "../../elements/switch/LangSwitch";
import { WeightUnitSwitch } from "../../elements/switch/WeightUnitSwitch";
import { PreferencesDropdownItem } from "./PreferencesDropdownItem";

type Props = {
  children: React.ReactNode;
  classes?: {
    trigger?: string;
    content?: string;
  };
};

export default function UserPreferencesDropdown({ children, classes }: Props) {
  const { isLoggedIn } = useUser();
  const t = useTranslations();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger className={classes?.trigger}>
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent className={classes?.content}>
        {isLoggedIn ? (
          <LogoutButton
            onAfterLogout={handleClose}
            variant="link"
            className="w-full text-red-500 text-sm"
          />
        ) : (
          <LoginTrigger
            onAfterLogin={handleClose}
            className={cn(
              buttonVariants({ variant: "link" }),
              "w-full text-sm m-auto"
            )}
          >
            {t("Auth.login")}
          </LoginTrigger>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuLabel>{t("Preferences.preferences")}</DropdownMenuLabel>
        <DropdownMenuGroup className="flex flex-col gap-3 p-2">
          <PreferencesDropdownItem label={t("Preferences.weight-unit")}>
            <WeightUnitSwitch />
          </PreferencesDropdownItem>
          <PreferencesDropdownItem label={t("Preferences.language")}>
            <LangSwitch />
          </PreferencesDropdownItem>
          <PreferencesDropdownItem label={t("Preferences.theme")}>
            <ThemeSwitch />
          </PreferencesDropdownItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
