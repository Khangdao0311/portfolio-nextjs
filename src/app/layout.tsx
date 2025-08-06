import { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import { getLocale, getTranslations } from "next-intl/server";

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
      title: "Khang Đào | Front-End Developer",
      description:
        "Xem các dự án cá nhân và kỹ năng của Khang Đào - Lập trình viên giao diện website.",
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
  return (
    <AntdRegistry>
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
      {children}
    </AntdRegistry>
  );
}
