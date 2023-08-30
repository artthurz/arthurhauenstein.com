'use client'
import { TLocales, localeLabel, locales } from '@src/i18n'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

type LocaleSelctorProps = {
  onSelect?: () => void
}

export function LocaleSelector({ onSelect }: LocaleSelctorProps) {
  const { pathname, push, locale } = useRouter()
  const [selectedLanguage, setSelectedLanguage] = useState('')

  useEffect(() => {
    if (locale) {
      setSelectedLanguage(locale)
    }
  }, [locale])

  function onLocalChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const newLocale = event.target.value as TLocales
    setSelectedLanguage(newLocale)
    push(pathname, pathname, { locale: newLocale })
    onSelect && onSelect()
  }

  return (
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
  )
}
