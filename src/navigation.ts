import { createNavigation } from "next-intl/navigation";
import { routing } from "./i18n/routing";

export const locales = routing.locales;

export const localeLabel = {
  en: "English",
  pt: "Português",
  es: "Español",
};

export type TLocales = "en" | "pt" | "es";

export const { Link, useRouter, usePathname, redirect } =
  createNavigation(routing);
