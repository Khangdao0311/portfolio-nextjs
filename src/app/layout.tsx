import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "metadata" });

  const baseUrl = "https://khangdao0311-portfolio.vercel.app";

  // Open Graph image theo locale
  const ogImages: Record<string, string> = {
    en: `${baseUrl}/portfolio-en.png`,
    vi: `${baseUrl}/portfolio-vi.png`,
  };

  // fallback về en nếu locale không hợp lệ
  const ogImage = ogImages[locale] ?? ogImages.en;

  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      "Đào",
      "Khang",
      "Đào Khang",
      "Khang Đào",
      "Front-End Developer",
      "ReactJS",
      "Next.js",
      "Portfolio",
      "khangdao311",
      "khangdao",
      "0311",
    ],
    metadataBase: new URL(baseUrl),
    openGraph: {
      title: t("title"),
      description: t("description"),
      images: [ogImage],
      url: locale === "en" ? baseUrl : `${baseUrl}/${locale}`,
      siteName: "Khang Đào Portfolio",
      type: "website",
    },
    other: {
      "google-site-verification": "k9plqj4p_Epg55DIWsjNnsh0sze1tnOnYQq90SQUg18",
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
