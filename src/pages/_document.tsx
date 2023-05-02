import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className={
          'bg-white dark:bg-slate-900 min-h-full flex flex-col antialiased [overflow-anchor:none]'
        }
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
