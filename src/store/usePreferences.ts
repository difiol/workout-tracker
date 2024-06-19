import { create } from "zustand";

type Languages = "en" | "es";
type Themes = "light" | "dark";
type WeightUnits = "kg" | "lbs";

type PreferencesStore = {
  language: Languages;
  theme: Themes;
  weightUnit: WeightUnits;
  changeLanguage: (language: Languages) => void;
  changeTheme: () => void;
  changeWeightUnit: (weightUnit: WeightUnits) => void;
};

export const usePreferences = create<PreferencesStore>()((set) => ({
  language: "es",
  theme: "light",
  weightUnit: "kg",
  changeLanguage: (language: Languages) => set({ language }),
  changeTheme: () =>
    set((state) => ({ theme: state.theme === "dark" ? "light" : "dark" })),
  changeWeightUnit: (weightUnit: WeightUnits) => set({ weightUnit }),
}));
