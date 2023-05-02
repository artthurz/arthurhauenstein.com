import '@src/styles/globals.css'
import type { AppProps } from 'next/app'
import Providers from './providers'
import { Footer, Header } from '@src/components'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <title>Arthur Hauenstein</title>
        <meta name="author" content="Arthur Hauenstein" />
        <meta
          name="description"
          content="I`m a Software Enginner and this is my personal page, where I will update my portfolio and bring news about myself."
        />
        <meta
          name="keywords"
          content="Arthur Hauenstein, Arthur, Hauenstein, Desenvolvedor, Engenheiro de Software, Software Engineer, Developer, Software, React, Node, Native, HTML, CSS, JavaScript, Typescript"
        />
        <link rel="manifest" href="/wmanifest.json" />
        <link
          rel="alternate"
          hrefLang="pt"
          href="https://arthurhauenstein.com/pt"
        />
        <link
          rel="alternate"
          hrefLang="es"
          href="https://arthurhauenstein.com/es"
        />

        <link rel="shortcut icon" href="/img/apple-touch-icon.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/img/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/img/favicon-16x16.png"
        />
      </Head>
      <main className={`${inter.className} bg-white dark:bg-slate-900`}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
    </Providers>
  )
}
