import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";
import { Header, Footer } from "./_compose";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Arthur Hauenstein",
  description:
    "This is my personal page, where I will update my portfolio and bring news about myself.",
  icons: {
    icon: { url: "/img/favicon.ico", type: "image/svg" },
  },
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
      <body
        className={`${inter.className} min-h-full flex flex-col px-4 sm:px-6 md:px-8 antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 [overflow-anchor:none]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
