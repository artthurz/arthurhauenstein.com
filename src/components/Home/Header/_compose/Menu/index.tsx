'use client'
import { Dialog, Transition } from '@headlessui/react'
import { TLocales, localeLabel, locales } from '@src/i18n'
import { useRouter } from 'next/router'
import React, { useState, Fragment, useEffect } from 'react'

export default function Menu() {
  let [isOpen, setIsOpen] = useState(false)
  const { pathname, push, locale } = useRouter()
  const [selectedLanguage, setSelectedLanguage] = useState('')

  useEffect(() => {
    if (locale) {
      setSelectedLanguage(locale)
    }
  }, [locale])

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  function onLocalChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const locale = event.target.value as TLocales
    push(pathname, pathname, { locale: locale })
    closeModal()
  }

  return (
    <>
      <div className="-my-1 ml-2 -mr-1 md:hidden">
        <button
          type="button"
          onClick={openModal}
          className="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
        >
          <span className="sr-only">Navigation</span>
          <MoreIcon />
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80"
              onClick={closeModal}
            />
          </Transition.Child>
          <Transition.Child
            as="div"
            className="fixed top-4 right-4 w-full max-w-xs bg-white rounded-lg shadow-lg p-6 text-base font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:shadow-white/5"
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <button
              type="button"
              className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
              onClick={closeModal}
            >
              <CloseIcon />
            </button>
            <ul className="space-y-6">
              <li>
                <a
                  className="hover:text-sky-500 dark:hover:text-sky-400"
                  href="#academic"
                  onClick={closeModal}
                >
                  Formação
                </a>
              </li>
              <li>
                <a
                  className="hover:text-sky-500 dark:hover:text-sky-400"
                  href="#skills"
                  onClick={closeModal}
                >
                  Competências
                </a>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-200/10">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="language"
                  className="text-slate-700 font-normal dark:text-slate-400"
                >
                  Mudar idioma
                </label>
                <div className="relative flex items-center ring-1 ring-slate-900/10 rounded-lg shadow-sm p-2 text-slate-700 font-semibold dark:bg-slate-600 dark:ring-0 dark:text-slate-200 dark:shadow-white/5">
                  {localeLabel[locale as TLocales]}
                  <svg className="w-6 h-6 ml-2 text-slate-400" fill="none">
                    <path
                      d="m15 11-3 3-3-3"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <select
                    id="language"
                    className="absolute appearance-none inset-0 w-full h-full opacity-0"
                    value={selectedLanguage}
                    onChange={onLocalChange}
                  >
                    {locales.map(locale => (
                      <option key={locale} value={locale}>
                        {localeLabel[locale]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  )
}

const MoreIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
    />
  </svg>
)

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
)
