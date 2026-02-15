"use client";

import LogoIcon from "@/assets/LogoIcon";

export function LogoButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="cursor-pointer"
    >
      <LogoIcon className="w-auto h-5" />
    </button>
  );
}
