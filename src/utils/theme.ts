export const getPreferredTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
