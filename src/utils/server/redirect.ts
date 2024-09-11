import { createSSRClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export const redirectIfNotAuthenticated = async (path: string) => {
  const supabaseClient = createSSRClient();

  const {
    data: { user },
  } = await supabaseClient.auth.getUser();
  
  if (!user) redirect(path);
};

export const redirectIfAuthenticated = async (path: string) => {
  const supabaseClient = createSSRClient();

  const {
    data: { user },
  } = await supabaseClient.auth.getUser();

  if (user) redirect(path);
}