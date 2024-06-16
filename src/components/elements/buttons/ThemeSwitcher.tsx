import { usePreferences } from "@/store/usePreferences";
import React from "react";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa6";

type Props = {};

export function ThemeSwitcher({}: Props) {
  const { theme, changeTheme } = usePreferences();
  return (
    <button onClick={changeTheme}>
      {theme === "dark" ? <MdSunny /> : <FaMoon />}
    </button>
  );
}
