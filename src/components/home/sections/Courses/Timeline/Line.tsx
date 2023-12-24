import React from 'react'

interface LineProps {
  children: React.ReactNode
}

export default function Line(props: LineProps) {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700 last:mb-0">
      {props.children}
    </ol>
  )
}
