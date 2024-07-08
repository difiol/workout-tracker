import { createClient } from "@/lib/supabase/client";
import { AuthUser, Session, User, WeakPassword } from "@supabase/supabase-js";
import { create } from "zustand";

type UserStore = {
  user: AuthUser | null;
  isLoggedIn: boolean;
  login: ({ email, password }: { email: string; password: string }) => Promise<{
    user: User;
    session: Session;
    weakPassword?: WeakPassword | undefined;
  }>;
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
      set({ user: null, isLoggedIn: false });
      throw error;
    } else {
      set({ user: data?.user, isLoggedIn: true });
    }
    return data;
  },
  logout: async () => {
    const { error } = await supabaseClient.auth.signOut();
    if (!error) set({ user: null, isLoggedIn: false });
  },
}));
