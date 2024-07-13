import React from "react";
import { usePreferences } from "@/store/usePreferences";
import { Switch } from "./Switch";
import { Languages } from "@/types/preferences";
import { usePathname, useRouter } from "next/navigation";

type Props = {};

export function LangSwitch() {
  const { lang, changeLanguage } = usePreferences();

  const router = useRouter();
  const pathname = usePathname();

  const handleChangeTheme = (value: string) => {
    changeLanguage(value as Languages);
    router.replace(pathname.replace(lang, value), { scroll: false });
  };

  return (
    <Switch
      options={[
        { label: "EN", value: "en" },
        { label: "ES", value: "es" },
      ]}
      selectedValue={lang}
      onChange={handleChangeTheme}
    />
  );
}
