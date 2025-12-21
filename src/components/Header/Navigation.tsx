"use client";
import { useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useDispatch, useSelector } from "react-redux";

import { getNavItems } from "@/data";
import { RootState } from "@/redux";
import { setActiveSection } from "@/redux/slices/activeSection";

function Navigation() {
  const locale = useLocale();
  const pathname = usePathname();
  const dispatch = useDispatch();

  const t = useTranslations("navigation");
  const NavItems = useMemo(() => getNavItems(t), [t]);

  const activeSection = useSelector(
    (state: RootState) => state.activeSection.id
  );

  useEffect(() => {
    if (pathname !== "/") {
      dispatch(setActiveSection(""));
    }
  }, [pathname, dispatch]);

  return (
    <div className="flex flex-col lg:flex-row gap-2 items-start lg:items-center justify-center">
      {NavItems.map((item) => (
        <a
          key={item.id}
          href={`/${locale}#${item.id}`}
          className={`w-full lg:w-auto group relative font-semibold pl-0 lg:!px-4 py-2 select-none !text-white hover:!text-[theme(--primary-light)] transition-all duration-300 ${
            activeSection === item.id ? "!pl-5" : ""
          }`}
        >
          {item.name}
          <span
            className={`absolute bottom-0 left-0 h-[1px] transition-all duration-200 bg-white group-hover:bg-[theme(--primary-light)] rounded-full ${
              activeSection === item.id ? "w-full" : " w-[0%]"
            }`}
          ></span>
        </a>
      ))}
    </div>
  );
}

export default Navigation;
