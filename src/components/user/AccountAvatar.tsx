import { useUser } from "@/store/useUser";
import React from "react";
import { UserAvatar } from "../elements/avatars/UserAvatar";
import UserPreferencesDropdown from "./UserPreferencesDropdown";

type Props = {};

export default function AccountAvatar({}: Props) {
  const { user } = useUser();

  return (
    <UserPreferencesDropdown classes={{ trigger: "rounded-full" }}>
      <UserAvatar username={user?.email} />
    </UserPreferencesDropdown>
  );
}
