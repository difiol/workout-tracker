import { usePreferences } from "@/store/usePreferences";
import { convertWeightTo } from "@/utils/wieght";

type Props = {
  children: React.ReactNode;
  showUnit?: boolean;
};

export default function Weight({ children, showUnit = false }: Props) {
  const { weightUnit } = usePreferences();
  return (
    Number(convertWeightTo(Number(children), weightUnit)) +
    (showUnit ? ` ${weightUnit}` : "")
  );
}
