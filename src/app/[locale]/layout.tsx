import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";
import NotiProvider from "@/context/NotiProvider";
import ModalNotification from "@/components/ModalNotification";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body>
        <NotiProvider>
          <NextIntlClientProvider>
            <ModalNotification />
            <Header />
            <main className="container-custom px-2.5 xl:px-1">{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </NotiProvider>
      </body>
    </html>
  );
}
