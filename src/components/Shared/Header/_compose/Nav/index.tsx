import React from 'react'

export default function Nav() {
  return (
    <nav>
      <ul className="hidden md:flex items-center gap-x-8">
        <li>
          <a
            className="hover:text-sky-500 dark:hover:text-sky-400"
            href="#academic"
          >
            Formação
          </a>
        </li>
        <li>
          <a
            className="hover:text-sky-500 dark:hover:text-sky-400"
            href="#skills"
          >
            Competências
          </a>
        </li>
      </ul>
    </nav>
  )
}
