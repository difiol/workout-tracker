import React from "react";
import { UserAvatar } from "../avatars/UserAvatar";
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
import { buttonVariants } from "../buttons/Button";

type Props = {
  children: React.ReactNode;
};

export default function UserPreferencesDropdown({ children }: Props) {
  const { isLoggedIn, user } = useUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
        {isLoggedIn ? (
          <LogoutButton variant="link" className="text-red-500 text-sm" />
        ) : (
          <LoginTrigger className={cn(buttonVariants.link, "text-sm")}>
            Login
          </LoginTrigger>
        )}
        <DropdownMenuSeparator />
        <ThemeSwitcher />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
