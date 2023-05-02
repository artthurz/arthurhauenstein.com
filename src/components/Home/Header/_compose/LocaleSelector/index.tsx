'use client'
import { Menu, Transition } from '@headlessui/react'
import { TLocales, localeLabel } from '@src/i18n'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { Fragment } from 'react'

type LocaleSelctorProps = {
  className?: string
}

export default function LocaleSelector({ className }: LocaleSelctorProps) {
  const { pathname, push, locale } = useRouter()

  function handleChangeLocale(newLocale: TLocales) {
    push(pathname, pathname, { locale: newLocale })
  }

  return (
    <Menu>
      <Menu.Button className={className}>
        <Image
          className="w-5 h-5"
          src={`/img/locale/${locale}.svg`}
          alt="Locale"
          width={24}
          height={24}
        />
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
          className="absolute z-50 right-8 top-full bg-white rounded-lg ring-1 ring-slate-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-slate-700 font-semibold dark:bg-slate-800 dark:ring-0 dark:shadow-white/5 dark:text-slate-300 -mt-4"
        >
          <Menu.Item>
            {({ active }) => (
              <li
                className={`py-1 px-2 flex items-center cursor-pointer ${
                  active ? 'bg-slate-50 dark:bg-slate-600/30' : ''
                } ${locale === 'en' ? 'text-sky-500' : ''}`}
                onClick={() => handleChangeLocale('en')}
              >
                <Image
                  className="w-5 h-5 mr-2"
                  src="/img/locale/en.svg"
                  alt="Locale"
                  width={24}
                  height={24}
                />
                {localeLabel['en']}
              </li>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <li
                className={`py-1 px-2 flex items-center cursor-pointer ${
                  active ? 'bg-slate-50 dark:bg-slate-600/30' : ''
                } ${locale === 'pt' ? 'text-sky-500' : ''}`}
                onClick={() => handleChangeLocale('pt')}
              >
                <Image
                  className="w-5 h-5 mr-2"
                  src="/img/locale/pt.svg"
                  alt="Locale"
                  width={24}
                  height={24}
                />
                {localeLabel['pt']}
              </li>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <li
                className={`py-1 px-2 flex items-center cursor-pointer ${
                  active ? 'bg-slate-50 dark:bg-slate-600/30' : ''
                } ${locale === 'es' ? 'text-sky-500' : ''}`}
                onClick={() => handleChangeLocale('es')}
              >
                <Image
                  className="w-5 h-5 mr-2"
                  src="/img/locale/es.svg"
                  alt="Locale"
                  width={24}
                  height={24}
                />
                {localeLabel['es']}
              </li>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
