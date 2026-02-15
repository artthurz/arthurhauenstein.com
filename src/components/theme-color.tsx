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
    if (!resolvedTheme) return;

    const isDark = resolvedTheme === "dark";
    const root = document.documentElement;
    const body = document.body;

    root.style.colorScheme = isDark ? "dark" : "light";
    body.style.colorScheme = isDark ? "dark" : "light";
    body.style.backgroundColor = isDark ? COLORS.dark : COLORS.light;
  }, [resolvedTheme]);

  return null;
}
