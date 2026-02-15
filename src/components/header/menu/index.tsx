"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { MoreVerticalIcon, X } from "lucide-react";
import React from "react";
import { LocaleSelector } from "./locale-selector";
import { createPortal } from "react-dom";
import { useMounted } from "@/hooks/use-mounted";
import { useTranslations } from "next-intl";

export function Menu() {
  const t = useTranslations("root.menu");
  const dialogRef = React.useRef<HTMLDialogElement>(null);
  const mounted = useMounted();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop || !mounted) {
    return <React.Fragment />;
  }

  return (
    <React.Fragment>
      <button
        onClick={() => dialogRef.current?.showModal()}
        className="btn btn-ghost px-2"
      >
        <MoreVerticalIcon className="w-6 h-6 flex items-center justify-center hover:text-slate-600 dark:hover:text-slate-300" />
      </button>
      {createPortal(
        <dialog
          ref={dialogRef}
          className="modal modal-bottom sm:modal-middle"
          role="dialog"
        >
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                <X className="w-6 h-6" />
              </button>
            </form>
            <ul className="space-y-6">
              <li>
                <button
                  className="hover:text-accent cursor-pointer"
                  onClick={() => { dialogRef.current?.close(); document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" }); }}
                >
                  {t("skills")}
                </button>
              </li>
              <li>
                <button
                  className="hover:text-accent cursor-pointer"
                  onClick={() => { dialogRef.current?.close(); document.getElementById("academic")?.scrollIntoView({ behavior: "smooth" }); }}
                >
                  {t("graduation")}
                </button>
              </li>
              <li>
                <button
                  className="hover:text-accent cursor-pointer"
                  onClick={() => { dialogRef.current?.close(); document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" }); }}
                >
                  {t("courses")}
                </button>
              </li>
              <li>
                <button
                  className="hover:text-accent cursor-pointer"
                  onClick={() => { dialogRef.current?.close(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                >
                  {t("contact")}
                </button>
              </li>
            </ul>
            <LocaleSelector onSelect={() => dialogRef.current?.close()} />
          </div>
          <label
            className="modal-backdrop"
            onClick={() => dialogRef.current?.close()}
          >
            Close
          </label>
        </dialog>,
        document.body
      )}
    </React.Fragment>
  );
}
