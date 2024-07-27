import React from "react";
import { usePreferences } from "@/store/usePreferences";
import { Switch } from "./Switch";
import { WeightUnits } from "@/types/preferences";

export function WeightUnitSwitch() {
  const { weightUnit, changeWeightUnit } = usePreferences();

  const handleChangeTheme = (value: string) => {
    changeWeightUnit(value as WeightUnits);
  };

  return (
    <Switch
      options={[
        { label: "kg", value: "kg" },
        { label: "lbs", value: "lbs" },
      ]}
      selectedValue={weightUnit}
      onChange={handleChangeTheme}
    />
  );
}
