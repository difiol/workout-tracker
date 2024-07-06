import { Database } from "@/lib/supabase/database.types";

declare global {
  type SupabaseDatabase = Database;
}
