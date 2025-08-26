"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Drawer, FloatButton, Popover } from "antd";
import { FaAnglesUp, FaList, FaSquareGithub } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import { GrLanguage } from "react-icons/gr";
import { MdLanguage } from "react-icons/md";
import { usePathname } from "next/navigation";

import icons from "@/assets/icons";

function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const observer = useRef<any>(null);
  const t = useTranslations("header");

  const pathname = usePathname();

  const switchLocale = (locale: string) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    const newPath = segments.join("/");
    return newPath;
  };

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
    <>
      <FloatButton.Group shape="circle" style={{ insetInlineEnd: 24 }}>
        <FloatButton
          href="https://zalo.me/84976382553"
          icon={<icons.zalo className="text-white group-hover:text-black" />}
          className="group !border-2 !border-[theme(--primary-light)] [&_.ant-float-btn-body]:!bg-black [&_.ant-float-btn-body]:hover:!bg-[theme(--primary-light)] [&_.ant-float-btn-body]:shadow-[0_0_5px_theme(--primary-light)] hover:scale-120  !transition-all duration-300"
        />
        <FloatButton.BackTop
          visibilityHeight={200}
          duration={200}
          icon={<FaAnglesUp className="text-white group-hover:text-black" />}
          className="group !border-2 !border-[theme(--primary-light)] [&_.ant-float-btn-body]:!bg-black [&_.ant-float-btn-body]:hover:!bg-[theme(--primary-light)] [&_.ant-float-btn-body]:shadow-[0_0_5px_theme(--primary-light)] hover:scale-120  !transition-all duration-300"
        />
      </FloatButton.Group>
      <header className="fixed top-0 left-0 right-0 w-full bg-black/80 z-30">
        <div className="container-custom flex items-center justify-between px-2.5 xl:px-0 py-4 ">
          {/* logo */}
          <a
            href={`/${t("locale")}`}
            className="text-4xl font-black select-none text-[theme(--primary-light)] text-shadow-[theme(--primary-light)]"
          >
            Portfolio
          </a>
          {/* nav */}
          <div className="hidden lg:flex gap-2 lg:gap-5">
            <a
              href={`/${t("locale")}#`}
              className={`relative text-lg font-bold px-4 py-2 select-none uppercase text-white hover:text-[theme(--primary-light)] transition-all duration-300`}
            >
              {t("home")}
              <span
                className={`absolute bottom-0 left-0 h-[2px] transition-all duration-200 bg-white ${
                  activeSection === "home" ? " w-full" : " w-[0%]"
                }`}
              ></span>
            </a>
            <a
              href={`/${t("locale")}#about`}
              className={`relative text-lg font-bold px-4 py-2 select-none uppercase text-white hover:text-[theme(--primary-light)] transition-all duration-300`}
            >
              {t("about")}
              <span
                className={`absolute bottom-0 left-0 h-[2px] transition-all duration-200 bg-white ${
                  activeSection === "about" ? " w-full" : " w-[0%]"
                }`}
              ></span>
            </a>
            <a
              href={`/${t("locale")}#skills`}
              className={`relative text-lg font-bold px-4 py-2 select-none uppercase text-white hover:text-[theme(--primary-light)] transition-all duration-300`}
            >
              {t("skill")}
              <span
                className={`absolute bottom-0 left-0 h-[2px] transition-all duration-200 bg-white ${
                  activeSection === "skills" ? " w-full" : " w-[0%]"
                }`}
              ></span>
            </a>
            <a
              href={`/${t("locale")}#contact`}
              className={`relative text-lg font-bold px-4 py-2 select-none uppercase text-white hover:text-[theme(--primary-light)] transition-all duration-300`}
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
              className={`h-11 w-11 center-flex`}
            >
              <FaSquareGithub className="w-4/5 h-4/5 text-white hover:text-[theme(--primary-light)] transition-all duration-300" />
            </a>
            <Popover
              className="group"
              content={
                <div className="flex flex-col gap-2">
                  <Link
                    href={switchLocale("en")}
                    className="text-lg font-bold px-8 py-2 !text-black hover:!text-[theme(--primary-light)] hover:!bg-[theme(--primary-dark)] rounded-lg transition-all duration-300"
                  >
                    {t("en")}
                  </Link>
                  <Link
                    href={switchLocale("vi")}
                    className="text-lg font-bold px-8 py-2 !text-black hover:!text-[theme(--primary-light)] hover:!bg-[theme(--primary-dark)] rounded-lg transition-all duration-300"
                  >
                    {t("vi")}
                  </Link>
                </div>
              }
            >
              <div className={`h-11 w-11 center-flex`}>
                <MdLanguage className="w-4/5 h-4/5 text-white group-hover:text-[theme(--primary-light)] transition-all duration-300" />
              </div>
            </Popover>
          </div>
          {/*  */}
          <div className="flex lg:hidden items-center gap-2">
            <Popover
              content={
                <div className="flex flex-col gap-2">
                  <Link
                    className="text-lg font-bold px-8 py-2 !text-black hover:!text-[theme(--primary-light)] hover:!bg-[theme(--primary-dark)] rounded-lg transition-all duration-300"
                    href={switchLocale("en")}
                  >
                    {t("en")}
                  </Link>
                  <Link
                    className="text-lg font-bold px-8 py-2 !text-black hover:!text-[theme(--primary-light)] hover:!bg-[theme(--primary-dark)] rounded-lg transition-all duration-300"
                    href={switchLocale("vi")}
                  >
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
          {/*  */}
          <Drawer
            title="Menu"
            placement={"right"}
            closable={true}
            onClose={() => setOpenDrawer(false)}
            open={openDrawer}
            key={"left"}
            zIndex={50}
            width="min(70vw, 300px)"
          >
            <div className="flex flex-col gap-4">
              <a
                href={`/${t("locale")}#`}
                onClick={() => setOpenDrawer(false)}
                className={`text-lg font-bold px-4 py-2 select-none uppercase text-[theme(--primary-light)]`}
              >
                {t("home")}
              </a>
              <a
                href={`/${t("locale")}#about`}
                onClick={() => setOpenDrawer(false)}
                className={`text-lg font-bold px-4 py-2 select-none uppercase text-[theme(--primary-light)]`}
              >
                {t("about")}
              </a>
              <a
                href={`/${t("locale")}#skills`}
                onClick={() => setOpenDrawer(false)}
                className={`text-lg font-bold px-4 py-2 select-none uppercase text-[theme(--primary-light)]`}
              >
                {t("skill")}
              </a>
              <a
                href={`/${t("locale")}#contact`}
                onClick={() => setOpenDrawer(false)}
                className={`text-lg font-bold px-4 py-2 select-none uppercase text-[theme(--primary-light)]`}
              >
                {t("contact")}
              </a>
              <a
                href="https://github.com/Khangdao0311"
                onClick={() => setOpenDrawer(false)}
                className={`text-lg font-bold px-4 py-2 select-none uppercase text-[theme(--primary-light)]`}
              >
                GitHub
              </a>
            </div>
          </Drawer>
        </div>
      </header>
    </>
  );
}

export default Header;
