"use client";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useCallback, useEffect, useState } from "react";

export function ThemeSelector() {
  const [selectedTheme, setSelectedTheme] = useState<
    "light" | "dark" | "system"
  >();

  useEffect(() => {
    setSelectedTheme(localStorage.theme);
  }, [setSelectedTheme]);

  const handleApplyTheme = useCallback(() => {
    if (!!selectedTheme) {
      localStorage.theme = selectedTheme;
    }

    if (selectedTheme === "system") {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
      } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        document.documentElement.classList.remove("dark");
      }
      setSelectedTheme("system");
    } else if (selectedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setSelectedTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setSelectedTheme("light");
    }
  }, [selectedTheme]);

  useEffect(() => {
    handleApplyTheme();
  }, [handleApplyTheme]);

  const addThemeChangeListner = useCallback(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleApplyTheme);
  }, [handleApplyTheme]);

  const removeThemeChangeListner = useCallback(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .removeEventListener("change", handleApplyTheme);
  }, [handleApplyTheme]);

  useEffect(() => {
    addThemeChangeListner();
    return () => {
      removeThemeChangeListner();
    };
  }, [addThemeChangeListner, removeThemeChangeListner]);

  return (
    <Menu>
      <Menu.Button>
        <span className="dark:hidden">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="w-6 h-6"
          >
            <path
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              className={
                selectedTheme === "light"
                  ? "fill-sky-400/20 stroke-sky-500"
                  : "stroke-slate-400 dark:stroke-slate-500"
              }
            ></path>
            <path
              d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
              className={
                selectedTheme === "light"
                  ? "stroke-sky-500"
                  : "stroke-slate-400 dark:stroke-slate-500"
              }
            ></path>
          </svg>
        </span>
        <span className="hidden dark:inline">
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
              className="fill-sky-400/20"
            ></path>
            <path
              d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
              className={
                selectedTheme === "dark"
                  ? "fill-sky-500"
                  : "fill-slate-400 dark:fill-slate-500"
              }
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
              className={
                selectedTheme === "dark"
                  ? "fill-sky-500"
                  : "fill-slate-400 dark:fill-slate-500"
              }
            ></path>
          </svg>
        </span>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          as="ul"
          className="absolute z-50 right-0 top-full bg-white rounded-lg ring-1 ring-slate-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-slate-700 font-semibold dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-300 mt-8"
        >
          <Menu.Item>
            {({ active }) => (
              <li
                className={`py-1 px-2 flex items-center cursor-pointer ${
                  active ? "bg-slate-50 dark:bg-slate-600/30" : ""
                } ${selectedTheme === "light" ? "text-sky-500" : ""}`}
                onClick={() => {
                  setSelectedTheme("light");
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-6 h-6 mr-2"
                >
                  <path
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    className={
                      selectedTheme === "light"
                        ? "fill-sky-400/20 stroke-sky-500"
                        : "stroke-slate-400 dark:stroke-slate-500"
                    }
                  ></path>
                  <path
                    d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                    className={
                      selectedTheme === "light"
                        ? "stroke-sky-500"
                        : "stroke-slate-400 dark:stroke-slate-500"
                    }
                  ></path>
                </svg>
                Light
              </li>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <li
                className={`py-1 px-2 flex items-center cursor-pointer ${
                  active ? "bg-slate-50 dark:bg-slate-600/30" : ""
                } ${selectedTheme === "dark" ? "text-sky-500" : ""}`}
                onClick={() => setSelectedTheme("dark")}
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 mr-2">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                    className="fill-transparent"
                  />
                  <path
                    d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                    className={
                      selectedTheme === "dark"
                        ? "fill-sky-500"
                        : "fill-slate-400 dark:fill-slate-500"
                    }
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                    className={
                      selectedTheme === "dark"
                        ? "fill-sky-500"
                        : "fill-slate-400 dark:fill-slate-500"
                    }
                  />
                </svg>
                Dark
              </li>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <li
                className={`py-1 px-2 flex items-center cursor-pointer ${
                  active ? "bg-slate-50 dark:bg-slate-600/30" : ""
                } ${selectedTheme === "system" ? "text-sky-500" : ""}`}
                onClick={() => setSelectedTheme("system")}
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 mr-2">
                  <path
                    d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z"
                    stroke-width="2"
                    stroke-linejoin="round"
                    className={
                      selectedTheme === "system"
                        ? "stroke-sky-500 fill-sky-400/20"
                        : "stroke-slate-400 dark:stroke-slate-500"
                    }
                  ></path>
                  <path
                    d="M14 15c0 3 2 5 2 5H8s2-2 2-5"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className={
                      selectedTheme === "system"
                        ? "stroke-sky-500"
                        : "stroke-slate-400 dark:stroke-slate-500"
                    }
                  ></path>
                </svg>
                System
              </li>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
