"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

const COLORS = {
  light: "#f8fafc",
  dark: "#0B1120",
};

export function ThemeColor() {
  const { resolvedTheme, theme } = useTheme();

  useEffect(() => {
    const color = resolvedTheme === "dark" ? COLORS.dark : COLORS.light;
    const metas = document.querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]');

    if (theme === "system") {
      // Restore media queries so iOS picks the right one automatically
      metas.forEach((meta) => {
        const isDark = meta.getAttribute("media")?.includes("dark") ??
          meta.getAttribute("content") === COLORS.dark;
        meta.setAttribute("media", isDark
          ? "(prefers-color-scheme: dark)"
          : "(prefers-color-scheme: light)"
        );
        meta.setAttribute("content", isDark ? COLORS.dark : COLORS.light);
      });
    } else {
      // Manual theme: remove media so the single color applies
      metas.forEach((meta) => {
        meta.removeAttribute("media");
        meta.setAttribute("content", color);
      });
    }
  }, [resolvedTheme, theme]);

  return null;
}
