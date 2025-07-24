import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

import Home from "@/components/sections/Home";
import About from "@/components/sections/About";
import Skill from "@/components/sections/Skill";
import Contact from "@/components/sections/Contact";

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
      <Home />
      <About />
      <Skill />
      <Contact />
    </>
  );
}

export default Page;
