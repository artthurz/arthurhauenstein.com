"use client";

import { useTranslations } from "next-intl";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Nav() {
  const t = useTranslations("root.menu");

  return (
    <nav>
      <ul className="hidden md:flex items-center gap-x-8">
        <li>
          <button className="hover:text-accent cursor-pointer" onClick={() => scrollToSection("skills")}>
            {t("skills")}
          </button>
        </li>
        <li>
          <button className="hover:text-accent cursor-pointer" onClick={() => scrollToSection("academic")}>
            {t("graduation")}
          </button>
        </li>
        <li>
          <button className="hover:text-accent cursor-pointer" onClick={() => scrollToSection("courses")}>
            {t("courses")}
          </button>
        </li>
        <li>
          <button className="hover:text-accent cursor-pointer" onClick={() => scrollToSection("contact")}>
            {t("contact")}
          </button>
        </li>
      </ul>
    </nav>
  );
}
