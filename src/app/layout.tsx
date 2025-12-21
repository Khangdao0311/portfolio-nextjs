import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "metadata" });
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
    metadataBase: new URL("https://khangdao0311-portfolio.vercel.app"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      images: ["https://khangdao0311-portfolio.vercel.app/portfolio.png"],
      url: "https://khangdao0311-portfolio.vercel.app",
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
