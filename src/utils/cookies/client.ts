const SUPABASE_COOKIES_NAME = "sb-iklssztmeskqgmwifeqq-auth-token";

export const getClientUser = (): string | null => {
  const rawCookie = getCookie(SUPABASE_COOKIES_NAME);
  if (!rawCookie) return null;
  const decodedCookies = decodeURIComponent(rawCookie);
  const cookies = JSON.parse(decodedCookies);
  return cookies?.user?.id;
};

function getCookie(key: string) {
  var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
  return b ? b.pop() : "";
}
