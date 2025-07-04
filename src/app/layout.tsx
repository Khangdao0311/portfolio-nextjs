import { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio - Khangdao0311",
  description: "information for me",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AntdRegistry>{children}</AntdRegistry>;
}
