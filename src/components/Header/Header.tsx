"use client";
import { useLocale } from "next-intl";
import { useInView } from "react-intersection-observer";

import Navigation from "./Navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import Sidebar from "./Sidebar";

function Header() {
  const locale = useLocale();

  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "0px 0px -64px 0px",
  });

  return (
    <>
      {/* Sentinel – mốc top */}
      <div ref={ref} className="h-1" />
      <header
        className={`fixed px-2 lg:px-0 top-0 left-0 right-0 w-full z-30 transition-all duration-300 ${
          !inView ? " bg-black/40 backdrop-blur" : "bg-transparent"
        }`}
      >
        <div className="container-custom flex items-center justify-between px-2.5 xl:px-0 py-4 ">
          {/* logo */}
          <a
            href={`/${locale}`}
            className="text-2xl font-black font select-none text-[theme(--primary-light)] text-shadow-[theme(--primary-light)]"
          >
            KhangDao0311
          </a>
          <div className="flex gap-2 items-center justify-center">
            <div className="hidden lg:flex">
              <Navigation />
            </div>
            <LanguageSwitcher />
            <div className="flex lg:hidden">
              <Sidebar />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
