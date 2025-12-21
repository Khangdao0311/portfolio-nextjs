import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";
import NotiProvider from "@/context/NotiProvider";
import ModalNotification from "@/components/ModalNotification";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ToastContainer } from "react-toastify";

import GroupBtn from "@/components/GroupBtn";
import ReduxProvider from "@/redux/index";
import AOSProvider from "@/components/AOSProvider";
import BackGroundParticles from "@/components/BackGroundParticles";

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
        <AntdRegistry>
          <NextIntlClientProvider>
            <ReduxProvider>
              <NotiProvider>
                <Header />
                <main className="container-custom px-4 lg:px-0">
                  {children}
                </main>
                <Footer />
                <GroupBtn />
                <ModalNotification />
                <ToastContainer
                  position="top-right"
                  autoClose={3000}
                  hideProgressBar={false}
                  newestOnTop={true}
                  closeOnClick
                  pauseOnHover
                  draggable
                  theme="colored"
                />
                <AOSProvider />
                <BackGroundParticles />
              </NotiProvider>
            </ReduxProvider>
          </NextIntlClientProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
