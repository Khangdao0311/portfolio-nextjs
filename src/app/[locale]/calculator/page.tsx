import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import Calculator from "@/components/demos/calculator";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.calculator");
  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      "calculator",
      "online calculator",
      "simple calculator",
      "basic calculator",
      "free calculator",
      "calculator app",
      "máy tính",
      "máy tính online",
      "máy tính đơn giản",
      "máy tính miễn phí",
      "ứng dụng máy tính",
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
