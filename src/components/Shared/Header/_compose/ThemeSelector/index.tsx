'use client'
import { Menu, Transition } from '@headlessui/react'
import { useTheme } from 'next-themes'
import { Fragment, useEffect, useState } from 'react'
import { DarkIcon, LightIcon, SystemIcon, MenuItem } from './_compose'

export default function ThemeSelector() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Menu>
      <Menu.Button>
        <span className="dark:hidden">
          <LightIcon isActive={theme === 'light'} />
        </span>
        <span className="hidden dark:inline">
          <DarkIcon isActive={theme === 'dark'} />
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
          className="absolute z-50 right-8 top-full bg-white rounded-lg ring-1 ring-slate-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-slate-700 font-semibold dark:bg-slate-800 dark:ring-0 dark:shadow-white/5 dark:text-slate-300 -mt-4"
        >
          <MenuItem
            className={theme === 'light' ? 'text-sky-500' : ''}
            onClick={() => {
              setTheme('light')
            }}
          >
            <LightIcon isActive={theme === 'light'} />
            Light
          </MenuItem>
          <MenuItem
            className={theme === 'dark' ? 'text-sky-500' : ''}
            onClick={() => setTheme('dark')}
          >
            <DarkIcon isActive={theme === 'dark'} />
            Dark
          </MenuItem>
          <MenuItem
            className={theme === 'system' ? 'text-sky-500' : ''}
            onClick={() => setTheme('system')}
          >
            <SystemIcon isActive={theme === 'system'} />
            System
          </MenuItem>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
