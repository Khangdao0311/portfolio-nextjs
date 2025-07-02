"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Drawer, Popover } from "antd";
import { FaList } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import { GrLanguage } from "react-icons/gr";
import { MdLanguage } from "react-icons/md";

import Icons from "@/assets/Icon";

function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const observer = useRef<any>(null);
  const t = useTranslations("header");

  useEffect(() => {
    // Tạo Intersection Observer
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            // Cập nhật section hiện tại
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null, // Viewport
        threshold: 0.6, // Section được coi là "hiển thị" khi 60% của nó trong viewport
      }
    );

    // Theo dõi tất cả các section
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.current.observe(section);
    });

    // Cleanup khi component unmount
    return () => {
      sections.forEach((section) => {
        observer.current.unobserve(section);
      });
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-black z-30">
      <div className="container-custom flex items-center justify-between px-2.5 xl:px-0 py-4 ">
        <a href="" className="text-4xl font-bold select-none">
          Portfolio
        </a>
        <div className="hidden lg:flex gap-2 lg:gap-5">
          <a
            href=""
            className={`relative text-lg font-bold px-4 py-2 select-none uppercase`}
          >
            {t("home")}
            <span
              className={`absolute bottom-0 left-0 h-[2px] transition-all duration-200 bg-white ${
                activeSection === "home" ? " w-full" : " w-[0%]"
              }`}
            ></span>
          </a>
          <a
            href="#about"
            className={`relative text-lg font-bold px-4 py-2 select-none uppercase`}
          >
            {t("about")}
            <span
              className={`absolute bottom-0 left-0 h-[2px] transition-all duration-200 bg-white ${
                activeSection === "about" ? " w-full" : " w-[0%]"
              }`}
            ></span>
          </a>
          <a
            href="#skills"
            className={`relative text-lg font-bold px-4 py-2 select-none uppercase`}
          >
            {t("skill")}
            <span
              className={`absolute bottom-0 left-0 h-[2px] transition-all duration-200 bg-white ${
                activeSection === "skills" ? " w-full" : " w-[0%]"
              }`}
            ></span>
          </a>
          <a
            href="#contact"
            className={`relative text-lg font-bold px-4 py-2 select-none uppercase`}
          >
            {t("contact")}
            <span
              className={`absolute bottom-0 left-0 h-[2px] transition-all duration-200 bg-white ${
                activeSection === "contact" ? " w-full" : " w-[0%]"
              }`}
            ></span>
          </a>
          <a
            href="https://github.com/Khangdao0311"
            className={`h-11 w-11 flex `}
          >
            <Icons.github />
          </a>
          <Popover
            content={
              <div className="flex flex-col gap-2 ">
                <Link href="/en" className="text-lg font-bold px-4">
                  {t("en")}
                </Link>
                <Link href="/vi" className="text-lg font-bold px-4">
                  {t("vi")}
                </Link>
              </div>
            }
          >
            <div className={`h-11 w-11 center-flex`}>
              <MdLanguage className="w-full h-full font-light" />
            </div>
          </Popover>
        </div>
        <div className="flex lg:hidden items-center gap-2">
          <Popover
            content={
              <div className="flex flex-col gap-2">
                <Link className="tex-lg font-medium text-black" href="/en">
                  {t("en")}
                </Link>
                <Link className="tex-lg font-medium text-black" href="/vi">
                  {t("vi")}
                </Link>
              </div>
            }
          >
            <div className={`flex px-4`}>
              <GrLanguage className=" w-7 h-7" />
            </div>
          </Popover>
          <div onClick={() => setOpenDrawer(true)} className="flex px-4">
            <FaList className=" w-7 h-7" />
          </div>
        </div>
        <Drawer
          title="Menu"
          placement={"right"}
          closable={true}
          onClose={() => setOpenDrawer(false)}
          open={openDrawer}
          key={"left"}
          zIndex={50}
          width="min(50vw, 300px)"
        >
          <div className="flex flex-col gap-4">
            <a
              href=""
              onClick={() => setOpenDrawer(false)}
              className={`text-lg font-bold px-4 py-2 select-none uppercase border-b-2 text-white  ${
                activeSection === "home" ? "border-white" : "border-transparent"
              }`}
            >
              {t("home")}
            </a>
            <a
              href="#about"
              onClick={() => setOpenDrawer(false)}
              className={`text-lg font-bold px-4 py-2 select-none uppercase border-b-2 text-white  ${
                activeSection === "about"
                  ? "border-white"
                  : "border-transparent"
              }`}
            >
              {t("about")}
            </a>
            <a
              href="#skills"
              onClick={() => setOpenDrawer(false)}
              className={`text-lg font-bold px-4 py-2 select-none uppercase border-b-2 text-white  ${
                activeSection === "skills"
                  ? "border-white"
                  : "border-transparent"
              }`}
            >
              {t("skill")}
            </a>
            <a
              href="#contact"
              onClick={() => setOpenDrawer(false)}
              className={`text-lg font-bold px-4 py-2 select-none uppercase border-b-2 text-white  ${
                activeSection === "contact"
                  ? "border-white"
                  : "border-transparent"
              }`}
            >
              {t("contact")}
            </a>
            <a
              href="https://github.com/Khangdao0311"
              onClick={() => setOpenDrawer(false)}
              className={`text-lg font-bold px-4 py-2 select-none uppercase border-b-2 text-white  ${
                activeSection === "contact"
                  ? "border-white"
                  : "border-transparent"
              }`}
            >
              GitHub
            </a>
          </div>
        </Drawer>
      </div>
    </header>
  );
}

export default Header;
