import { Menu } from '@headlessui/react'

import React from 'react'
import { twMerge } from 'tailwind-merge'

interface MenuItemProps {
  onClick: () => void
  children: React.ReactNode
  className: string
}

export function MenuItem({ className, children, onClick }: MenuItemProps) {
  return (
    <Menu.Item>
      {({ active }) => (
        <li
          className={twMerge(
            `py-1 px-2 flex items-center gap-2 cursor-pointer ${
              active ? 'bg-slate-50 dark:bg-slate-600/30' : ''
            }`,
            className
          )}
          onClick={onClick}
        >
          {children}
        </li>
      )}
    </Menu.Item>
  )
}
