import LogoIcon from '@src/assets/LogoIcon'
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-900 pb-16 text-sm px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto divide-y mt-16 border-t border-t-slate-200 dark:border-t-slate-700">
        <div className="pt-10 divide-y ">
          <LogoIcon className="w-auto h-5" />
        </div>
      </div>
    </footer>
  )
}
