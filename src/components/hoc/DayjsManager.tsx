import { useLocale } from "next-intl";
import { ReactNode } from "react";

import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";
import dayjs from "dayjs";

// Import locales to use (except english)
import "dayjs/locale/es";

// Load plugins
dayjs.extend(relativeTime);
dayjs.extend(updateLocale);

type Props = {
  children: ReactNode;
};

export function DayjsManager({ children }: Props) {
  const locale = useLocale();
  dayjs.locale(locale);

  return children;
}
