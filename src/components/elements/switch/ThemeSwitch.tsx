import React from "react";
import { usePreferences } from "@/store/usePreferences";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa6";
import { Switch } from "./Switch";
import { Themes } from "@/types/preferences";

type Props = {
  size?: number;
};

export function ThemeSwitch({ size = 18 }: Props) {
  const { theme, changeTheme } = usePreferences();

  const handleChangeTheme = (value: string) => {
    changeTheme(value as Themes);
  };

  return (
    <Switch
      options={[
        { label: <MdSunny size={size} />, value: "light" },
        { label: <FaMoon size={size} />, value: "dark" },
      ]}
      selectedValue={theme}
      onChange={handleChangeTheme}
    />
  );
}
