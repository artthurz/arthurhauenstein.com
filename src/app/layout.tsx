import "./globals.css";
import { Inter } from "next/font/google";
import { Header, Footer } from "./_compose";
import Providers from "./providers";
import { Metadata } from "next";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arthur Hauenstein",
  description:
    "This is my personal page, where I will update my portfolio and bring news about myself.",
  icons: {
    icon: { url: "/img/favicon.ico", type: "image/svg" },
  },
  themeColor: [
    { media: "dark", color: "rgb(15 23 42)" },
    { media: "light", color: "rgb(255 255 255)" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="[--scroll-mt:9.875rem] lg:[--scroll-mt:6.3125rem] js-focus-visible"
    >
      <body>
        <Providers>
          <main
            className={`${inter.className} min-h-full flex flex-col antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 [overflow-anchor:none]`}
          >
            <Header />
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
