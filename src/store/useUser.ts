import { createClient } from "@/lib/supabase/client";
import { AuthUser, UserResponse } from "@supabase/supabase-js";
import { create } from "zustand";

type UserStore = {
  user: AuthUser | null;
  isLoggedIn: boolean;
};

export const useUser = create<UserStore>()((set) => ({
  user: null,
  isLoggedIn: false,
}));

const supabase = createClient();
supabase.auth.getUser().then(({ data, error }) => {
  if (!error) {
    useUser.setState({ user: data.user, isLoggedIn: true });
  } else {
    useUser.setState({ user: null, isLoggedIn: false });
  }
});
