import { usePreferences } from "@/store/usePreferences";
import React from "react";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa6";
import { cn } from "@/lib/utils";

type Props = {
  size?: number;
};

export function ThemeSwitcher({ size = 18 }: Props) {
  const { theme, changeTheme } = usePreferences();

  const handleChangeTheme = () => {
    changeTheme(theme === "dark" ? "light" : "dark");
  };
  const icon =
    theme === "dark" ? <MdSunny size={size} /> : <FaMoon size={size} />;

  return (
    <button
      className={cn(
        "flex items-center gap-2 rounded-full border-2 border-slate-200 p-1 transition-all duration-200 ease-in-out ",
        "dark:bg-slate-700 dark:border-slate-600",
        "hover:scale-95 hover:bg-slate-100 dark:hover:bg-slate-600"
      )}
      onClick={handleChangeTheme}
    >
      {icon}
    </button>
  );
}
