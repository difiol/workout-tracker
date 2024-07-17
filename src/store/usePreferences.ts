import { createClient } from "@/lib/supabase/client";
import {
  getSupabaseUserPreferences,
  updateSupabaseUserPreferences,
} from "@/lib/supabase/requests/preferences";
import {
  Preferences,
  Themes,
  WeightUnits,
} from "@/types/preferences";
import { getPreferredTheme } from "@/utils/theme";
import { create } from "zustand";

interface PreferencesStore extends Omit<Preferences, "id"> {
  id?: string;
  changeTheme: (theme: Themes) => void;
  changeWeightUnit: (weightUnit: WeightUnits) => void;
  loadUserPreferences: () => Promise<void>;
}

const supabaseClient = createClient();

export const usePreferences = create<PreferencesStore>()((set, state) => ({
  id: undefined,
  theme: "light",
  weightUnit: "kg",

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

    const { id, theme, weight_unit } = preferences;
    set({
      id,
      theme: theme ?? getPreferredTheme(),
      weightUnit: weight_unit ?? "kg",
    });
  },
}));
