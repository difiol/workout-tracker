import { usePreferences } from "@/store/usePreferences";
import { convertWeightTo } from "@/utils/weight";

type Props = {
  children: number | number[];
  showUnit?: boolean;
};

export default function Weight({ children, showUnit = false }: Props) {
  const { weightUnit } = usePreferences();

  const convert = (value: number | number[]) => {
    let resultConversion = convertWeightTo(
      Number(value),
      weightUnit
    ).toString();

    if (Array.isArray(children)) {
      resultConversion = children
        .map((value, i) =>
          convertWeightTo(Number(value), weightUnit).toString()
        )
        .join(", ");
    }

    return resultConversion + (showUnit ? ` ${weightUnit}` : "");
  };

  return convert(children);
}
