import LogoIcon from "@/app/assets/LogoIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="z-10 pb-16 text-sm leading-6">
      <div className="max-w-7xl mx-auto divide-y divide-slate-200 px-4 sm:px-6 md:px-8 dark:divide-slate-700">
        <div className="mt-16 pt-10 divide-y ">
          <LogoIcon className="w-auto h-5" />
        </div>
      </div>
    </footer>
  );
};
