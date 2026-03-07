import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import Calculator from "@/components/demos/Calculator";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.calculator");
  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      // Vietnamese
      "calculator",
      "máy tính",
      "ứng dụng máy tính",
      "máy tính online",
      "máy tính cơ bản",
      "máy tính khoa học",
      "ứng dụng tính toán",
      "tính toán nhanh",
      "công cụ tính toán",
      "máy tính cộng trừ nhân chia",

      // English
      "calculator app",
      "online calculator",
      "basic calculator",
      "scientific calculator",
      "math calculator",
      "react calculator app",
      "nextjs calculator project",
      "javascript calculator",
      "frontend calculator project",
      "calculator with logic handling",
    ],
  };
}

function CalculatorPage() {
  return (
    <main className="container-custom px-2.5 xl:px-1">
      <Calculator />
    </main>
  );
}

export default CalculatorPage;
