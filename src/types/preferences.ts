export type Languages = "en" | "es";
export type Themes = "light" | "dark";
export type WeightUnits = "kg" | "lb";

export type Preferences = {
  id: string;
  lang: Languages;
  theme: Themes;
  weightUnit: WeightUnits;
};

export type UpdatePreferences = Partial<Preferences>;
