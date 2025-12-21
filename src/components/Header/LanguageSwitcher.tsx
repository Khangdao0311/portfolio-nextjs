"use client";
import { Popover } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { useTranslations } from "use-intl";
import { FaCaretDown } from "react-icons/fa";

function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations("header");

  const pathname = usePathname();
  const switchLocale = (locale: string) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    const newPath = segments.join("/");
    return newPath;
  };

  return (
    <Popover
      className="group"
      content={
        <div className="flex flex-col gap-2">
          <Link
            href={switchLocale("en")}
            className={`text-lg font-bold px-8 py-2 ${
              locale === "en"
                ? "!text-[theme(--primary-light)] !bg-[theme(--primary-dark)]"
                : "!text-black hover:!text-[theme(--primary-light)] hover:!bg-[theme(--primary-dark)]"
            }  rounded-lg transition-all duration-300`}
          >
            {t("en")}
          </Link>
          <Link
            href={switchLocale("vi")}
            className={`text-lg font-bold px-8 py-2 ${
              locale === "vi"
                ? "!text-[theme(--primary-light)] !bg-[theme(--primary-dark)]"
                : "!text-black hover:!text-[theme(--primary-light)] hover:!bg-[theme(--primary-dark)]"
            }  rounded-lg transition-all duration-300`}
          >
            {t("vi")}
          </Link>
        </div>
      }
    >
      <div className={`group relative center-flex gap-1 px-4 py-2 select-none`}>
        <p className="font-semibold text-white group-hover:text-[theme(--primary-light)] transition-all duration-300">
          {locale.toLocaleUpperCase()}
        </p>
        <FaCaretDown className="text-white group-hover:text-[theme(--primary-light)] transition-all duration-300" />
      </div>
    </Popover>
  );
}

export default LanguageSwitcher;
