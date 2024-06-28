import { UUID } from "crypto";

export type Languages = "en" | "es";
export type Themes = "light" | "dark";
export type WeightUnits = "kg" | "lbs";

export type Preferences = {
  id: UUID;
  lang: Languages;
  theme: Themes;
  weightUnit: WeightUnits;
};

export type UpdatePreferences = Partial<Preferences>;
