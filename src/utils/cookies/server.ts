import { cookies } from "next/headers";

const SUPABASE_COOKIES_NAME = "sb-iklssztmeskqgmwifeqq-auth-token";

export const getServerUser = (): string | null => {
  const cookieStore = cookies();
  const rawCookie = cookieStore.get(SUPABASE_COOKIES_NAME);
  if (!rawCookie) return null;
  const decodedCookies = decodeURIComponent(rawCookie.value);
  const cookie = JSON.parse(decodedCookies);
  return cookie?.user?.id;
};
