import { createClient } from "@/lib/supabase/client";
import {
  getSupabaseUserPreferences,
  updateSupabaseUserPreferences,
} from "@/lib/supabase/requests/preferences";
import {
  Languages,
  Preferences,
  Themes,
  WeightUnits,
} from "@/types/preferences";
import { getPreferredTheme } from "@/utils/theme";
import { create } from "zustand";

interface PreferencesStore extends Omit<Preferences, "id"> {
  id?: string;
  changeLanguage: (language: Languages) => void;
  changeTheme: (theme: Themes) => void;
  changeWeightUnit: (weightUnit: WeightUnits) => void;
  loadUserPreferences: () => Promise<void>;
}

const supabaseClient = createClient();

export const usePreferences = create<PreferencesStore>()((set, state) => ({
  id: undefined,
  lang: "en",
  theme: "light",
  weightUnit: "kg",

  changeLanguage: (lang) =>
    set(({ id }) => {
      updateSupabaseUserPreferences(supabaseClient, { id, lang });
      return { lang };
    }),

  changeTheme: (theme) => {
    set(({ id }) => {
      updateSupabaseUserPreferences(supabaseClient, { id, theme });
      return { theme };
    });
  },

  changeWeightUnit: (weightUnit) =>
    set(({ id }) => {
      updateSupabaseUserPreferences(supabaseClient, { id, weightUnit });
      return { weightUnit };
    }),

  loadUserPreferences: async () => {
    const preferences = await getSupabaseUserPreferences(supabaseClient);
    if (!preferences) return;

    const { id, lang, theme, weight_unit } = preferences;
    set({
      id,
      lang: lang ?? "en",
      theme: theme ?? getPreferredTheme(),
      weightUnit: weight_unit ?? "kg",
    });
  },
}));
