import { UpdatePreferences } from "@/types/preferences";
import { SupabaseClient } from "@supabase/supabase-js";

export const PREFERENCES_TABLE = "preferences";

export const getSupabaseUserPreferences = async (
  client: SupabaseClient<SupabaseDatabase>
) => {
  const { data, error } = await client
    .from(PREFERENCES_TABLE)
    .select()
    .single();

  if (error) throw error;

  return data;
};

export const updateSupabaseUserPreferences = async (
  client: SupabaseClient<SupabaseDatabase>,
  { id, lang, theme, weightUnit }: UpdatePreferences
) => {
  const { error } = await client.from(PREFERENCES_TABLE).upsert({
    id,
    lang,
    theme,
    weight_unit: weightUnit,
  });
  if (error) throw error;
};
