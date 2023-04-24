import Image from "next/image";
import { ThemeSelector } from "./_compose";
import Link from "next/link";
import LogoIcon from "@/app/assets/LogoIcon";

export const Header = () => {
  return (
    <header className="z-10 relative pt-6 lg:pt-8 flex items-center justify-between text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200">
      <LogoIcon className="w-auto h-5" />
      <div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
        <ThemeSelector />
      </div>
    </header>
  );
};
