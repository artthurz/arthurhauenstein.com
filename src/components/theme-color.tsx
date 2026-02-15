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

    // Remove existing theme-color meta tag
    const existing = document.querySelector('meta[name="theme-color"]');
    if (existing) existing.remove();

    // Create a brand new element — iOS Safari won't re-read a mutated one
    const meta = document.createElement("meta");
    meta.name = "theme-color";
    meta.content = color;
    document.head.appendChild(meta);
  }, [resolvedTheme]);

  return null;
}
