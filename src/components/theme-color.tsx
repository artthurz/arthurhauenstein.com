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
    const root = document.documentElement;
    if (resolvedTheme === "dark") {
      root.style.colorScheme = "dark";
      root.style.backgroundColor = COLORS.dark;
    } else {
      root.style.colorScheme = "light";
      root.style.backgroundColor = COLORS.light;
    }
  }, [resolvedTheme]);

  return null;
}
