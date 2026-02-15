
import { LocaleSelector } from "./locale-selector";
import { ThemeSelector } from "./theme-selector";
import { Nav } from "./nav";
import { Menu } from "./menu";
import { LogoButton } from "./logo-button";

export function Header() {
  return (
    <header className="w-full flex items-center justify-between sticky top-0 z-30 h-18 px-4 sm:px-6 md:px-8 bg-slate-50/85 dark:bg-[#0B1120]/85 backdrop-blur dark:backdrop-blur dark:backdrop-filter text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200">
      <LogoButton />
      <div className="flex items-center">
        <Nav />
        <div className="flex items-center gap-1 md:gap-2 md:border-l md:border-slate-200 ml-6 pl-6 md:dark:border-slate-800">
          <ThemeSelector />
          <LocaleSelector className="hidden md:flex px-2" />
          <Menu />
        </div>
      </div>
    </header>
  );
}
