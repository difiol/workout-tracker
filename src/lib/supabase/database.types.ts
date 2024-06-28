export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      preferences: {
        Row: {
          // the data expected from .select()
          id: string;
          lang: string | null;
          theme: string | null;
          weight_unit: string | null;
          created_at: string;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          // the data to be passed to .insert()
          lang?: string;
          theme?: string;
          weight_unit?: string;
          user_id: string;
        };
        Update: {
          // the data to be passed to .update()
          lang?: string;
          theme?: string;
          weight_unit?: string;
        };
      };
    };
  };
}
