import { ThemeProvider } from "@/components/theme-provider";
import { ThemeColor } from "@/components/theme-color";
import { Toaster } from "sonner";
import React from "react";
import { NextIntlClientProvider, useMessages } from "next-intl";

export default function Providers({
  children,
  locale,
}: Readonly<{
  children: React.ReactNode;
  locale: string;
}>) {
  const messages = useMessages();
  return (
    <ThemeProvider attribute="data-theme" enableSystem defaultTheme="system" disableTransitionOnChange>
      <ThemeColor />
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
        <Toaster richColors />
      </NextIntlClientProvider>
    </ThemeProvider>
  );
}
