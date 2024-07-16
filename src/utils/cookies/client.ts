import { DEFAULT_SUPABASE_COOKIES } from "./constants";

export const getClientUser = (): string | null => {
  const rawCookie = getCookie(process.env.NEXT_PUBLIC_SUPABASE_COOKIES ?? DEFAULT_SUPABASE_COOKIES);
  if (!rawCookie) return null;
  const decodedCookies = decodeURIComponent(rawCookie);
  const cookies = JSON.parse(decodedCookies);
  return cookies?.user?.id;
};

function getCookie(key: string) {
  var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
  return b ? b.pop() : "";
}
