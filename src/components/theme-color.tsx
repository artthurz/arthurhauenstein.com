"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

const COLORS = {
  light: "#f8fafc",
  dark: "#0B1120",
};

export function ThemeColor() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const color = resolvedTheme === "dark" ? COLORS.dark : COLORS.light;
    const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    if (!meta) return;

    meta.setAttribute("content", color);

    // Force iOS Safari to re-read the meta tag
    meta.remove();
    document.head.appendChild(meta);
  }, [resolvedTheme]);

  return null;
}
