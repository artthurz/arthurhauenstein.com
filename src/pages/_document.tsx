import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className={
          'bg-slate-50 dark:bg-[#0B1120] min-h-full flex flex-col antialiased [overflow-anchor:none]'
        }
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
