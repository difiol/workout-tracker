import { cookies } from "next/headers";
import { DEFAULT_SUPABASE_COOKIES } from "./constants";

export const getServerUser = (): string | null => {
  const cookieStore = cookies();
  const rawCookie = cookieStore.get(process.env.NEXT_PUBLIC_SUPABASE_COOKIES ?? DEFAULT_SUPABASE_COOKIES);
  if (!rawCookie) return null;
  const decodedCookies = decodeURIComponent(rawCookie.value);
  const cookie = JSON.parse(decodedCookies);
  return cookie?.user?.id;
};
