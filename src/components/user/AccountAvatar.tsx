import { useUser } from "@/store/useUser";
import React from "react";
import { UserAvatar } from "../elements/avatars/UserAvatar";
import UserPreferencesDropdown from "../elements/dropdowns/UserPreferencesDropdown";
import { LoginTrigger } from "../dialogs/LoginTrigger";

type Props = {};

export default function AccountAvatar({}: Props) {
  const { user } = useUser();

  return (
    <UserPreferencesDropdown>
      <UserAvatar username={user?.email} />
    </UserPreferencesDropdown>
  );
}
