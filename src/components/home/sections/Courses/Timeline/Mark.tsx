import React, { useMemo } from 'react'
import { twMerge } from 'tailwind-merge'

interface MarkProps {
  name: string
  institution: string
  date: string
  description: string
  link: string
  children: React.ReactNode
  background: string
  textColor: string
}

export default function Mark(props: MarkProps) {
  return (
    <li className="mb-10 ms-6">
      <span
        className={twMerge(
          `absolute flex items-center justify-center w-6 h-6  rounded-full -start-3 ring-8 ring-white dark:ring-gray-900`,
          props.background
        )}
      >
        <Calendar {...props} />
      </span>
      <h3 className="flex justify-between sm:justify-normal items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
        {props.name}
        <div
          className={twMerge(
            'flex justify-center items-center gap-2 me-2 px-2.5 py-0.5 rounded ms-3',
            props.background
          )}
        >
          <span className={twMerge(`text-sm font-medium`, props.textColor)}>
            {props.institution}
          </span>
          <a href={props.link} target="_blank">
            <Link {...props} />
          </a>
        </div>
      </h3>
      <time className="flex items-center justify-between mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {props.date}
      </time>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {props.description}
      </p>
    </li>
  )
}

function Calendar(props: MarkProps) {
  return (
    <svg
      className={twMerge(`w-2.5 h-2.5`, props.textColor)}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
    </svg>
  )
}

function Link(props: MarkProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={twMerge('w-4 h-4', props.textColor)}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  )
}
