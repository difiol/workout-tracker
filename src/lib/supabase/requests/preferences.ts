import { UpdatePreferences } from "@/types/preferences";
import { SupabaseClient } from "@supabase/supabase-js";

export const PREFERENCES_TABLE = "preferences";

export const getSupabaseUserPreferences = async (client: SupabaseClient) => {
  const preferences = await client.from(PREFERENCES_TABLE).select().single();
  return preferences.data;
};

export const updateSupabaseUserPreferences = async (
  client: SupabaseClient,
  { id, lang, theme, weightUnit }: UpdatePreferences
) => {
  const { data, error } = await client.auth.getUser();

  if (error) return;

  return client
    .from(PREFERENCES_TABLE)
    .upsert({
      id,
      lang,
      theme,
      weight_unit: weightUnit,
      user_id: data.user.id,
    });
};
