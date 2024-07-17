import React, { useState } from "react";
import { Switch } from "./Switch";
import { Languages } from "@/types/preferences";
import { usePathname, useRouter } from "@/navigation";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";

export function LangSwitch() {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();
  const params = useParams();

  const [lang, setLang] = useState<Languages>(locale as Languages);

  const handleChangeTheme = (value: string) => {
    const newLocale = value as Languages;
    setLang(newLocale);
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: newLocale }
    );
    router.refresh();
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
