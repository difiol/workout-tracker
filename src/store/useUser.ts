import { createClient } from "@/lib/supabase/client";
import { AuthUser } from "@supabase/supabase-js";
import { create } from "zustand";

type UserStore = {
  user: AuthUser | null;
  isLoggedIn: boolean;
  error: string | null;
  login: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<{ isSuccess: boolean; error: string | undefined }>;
  logout: () => Promise<void>;
};

const supabaseClient = createClient();

export const useUser = create<UserStore>()((set) => ({
  user: null,
  isLoggedIn: false,
  error: null,
  login: async ({ email, password }) => {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      set({ user: null, isLoggedIn: false, error: error.message });
    } else {
      set({ user: data?.user, isLoggedIn: true, error: null });
    }
    return { isSuccess: !!data.user, error: error?.message };
  },
  logout: async () => {
    const { error } = await supabaseClient.auth.signOut();
    if (!error) set({ user: null, isLoggedIn: false, error: null });
  },
}));
