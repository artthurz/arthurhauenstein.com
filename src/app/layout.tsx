import './globals.css'
import { Inter } from 'next/font/google'
import { Header, Footer } from './_compose'
import Providers from './providers'
import { Metadata } from 'next'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arthur Hauenstein',
  description:
    'This is my personal page, where I will update my portfolio and bring news about myself.',
  icons: {
    icon: { url: '/img/favicon.ico', type: 'image/svg' }
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-full flex flex-col antialiased [overflow-anchor:none]`}
      >
        <Providers>
          <Header />
          <main className={`bg-white dark:bg-slate-900`}>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
