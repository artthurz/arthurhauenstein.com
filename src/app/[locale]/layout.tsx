import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { getMessages } from "next-intl/server";
import React from "react";
import "./globals.css";
import Providers from "./providers";
import { cn } from "@/lib/utils";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const BASE_URL = "https://arthurhauenstein.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await getMessages({ locale })) as Record<string, Record<string, string>>;
  const meta = messages.metadata;

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        en: `${BASE_URL}/en`,
        pt: `${BASE_URL}/pt`,
        es: `${BASE_URL}/es`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: `${BASE_URL}/${locale}`,
      title: meta.title,
      description: meta.description,
      siteName: "Arthur Hauenstein",
      images: [
        {
          url: `${BASE_URL}/og-image.png`,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [`${BASE_URL}/og-image.png`],
    },
    icons: [
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        url: "/apple-touch-icon.png",
      },
      {
        rel: "icon",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
    ],
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={cn(poppins.className, "bg-slate-50 dark:bg-[#0B1120]")}>
        <Providers locale={locale}>
          <Header />
          {children}
          <Footer />
        </Providers>
        <JsonLd locale={locale} />
      </body>
      <SpeedInsights />
      <Analytics />
    </html>
  );
}
