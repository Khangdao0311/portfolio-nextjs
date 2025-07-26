import { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ToastContainer } from "react-toastify";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khang Đào | Front-End Developer",
  description:
    "Portfolio cá nhân của Khang Đào - Front-End Developer chuyên ReactJS, Next.js, TailwindCSS...",
  keywords: [
    "Khang Đào",
    "Front-End Developer",
    "Next.js",
    "Portfolio",
    "khangdao311",
    "ReactJS",
  ],
  metadataBase: new URL("https://khangdao0311-portfolio.vercel.app"),
  openGraph: {
    title: "Khang Đào | Front-End Developer",
    description:
      "Xem các dự án cá nhân và kỹ năng của Khang Đào - Lập trình viên giao diện hiện đại.",
    url: "https://khangdao0311-portfolio.vercel.app",
    siteName: "Khang Đào Portfolio",
    type: "website",
  },
  other: {
    "google-site-verification": "k9plqj4p_Epg55DIWsjNnsh0sze1tnOnYQq90SQUg18",
  },
};

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
