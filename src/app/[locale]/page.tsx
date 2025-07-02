import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

import Home from "@/components/sections/Home";
import About from "@/components/sections/About";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Skill from "@/components/sections/Skill";
import Contact from "@/components/sections/Contact";
import ModalNotification from "@/components/ModalNotification";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

function Page() {
  return (
    <>
      <ModalNotification />
      <Header />
      <main className="container-custom px-2.5 xl:px-0">
        <Home />
        <About />
        <Skill />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Page;
