"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa6";

import images from "@/assets/image";
import Icon from "@/assets/Icon";

export default function Home() {
  const t = useTranslations("home");

  useEffect(() => {
    AOS.init({
      disable: () => window.innerWidth < 768,
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row gap-10 md:gap-5 items-center justify-around pt-20 "
    >
      <div data-aos="fade-right" className=" flex flex-col gap-6">
        <p className="text-3xl font-bold">{t("hello")}</p>
        <p className="text-4xl font-bold">{t("name")}</p>
        <p className="text-3xl font-bold">
          {t("a")}{" "}
          <Typewriter
            words={[t("webDeveloper"), t("frontEndDeveloper")]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>
        <p className=" text-xl font-medium">{t("welcome")}</p>

        <div className="flex gap-4">
          <a
            className="overflow-hidden w-48 p-2.5 h-14 bg-black border-2 border-[theme(--primary-light)] rounded-lg cursor-pointer relative z-10 group"
            href={`/${t("cv")}`}
            download
          >
            <span className="absolute w-52 h-32 -top-10 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left" />
            <span className="absolute w-52 h-32 -top-10 -left-2 bg-blue-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left" />
            <span className="absolute w-52 h-32 -top-10 -left-2 bg-[theme(--primary-dark)] rotate-12 transform scale-x-0 group-hover:scale-x-60 transition-transform group-hover:duration-1000 duration-500 origin-left" />
            <span className=" absolute center-fixed text-xl text-2xl font-bold text-nowrap">
              {t("download")}
            </span>
          </a>
        </div>
        <div className="flex gap-4">
          <a
            href="https://github.com/khangdao0311"
            className="p-2 border-4 border-[theme(--primary-light)] rounded-xl hover:scale-125 transition-transform duration-200 cursor-pointer"
          >
            <FaGithub className="w-9 h-9 fill-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/khangdao0311/"
            className="p-2 border-4 border-[theme(--primary-light)] rounded-xl hover:scale-125 transition-transform duration-200 cursor-pointer"
          >
            <FaLinkedinIn className="w-9 h-9 fill-white" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61564139123358"
            className="p-2 border-4 border-[theme(--primary-light)] rounded-xl hover:scale-125 transition-transform duration-200 cursor-pointer"
          >
            <FaFacebookF className="w-9 h-9 fill-white" />
          </a>
          <a
            href="https://zalo.me/84976382553"
            className="p-2 border-4 border-[theme(--primary-light)] rounded-xl hover:scale-125 transition-transform duration-200 cursor-pointer"
          >
            <Icon.zalo className="w-9 h-9 fill-white" />
          </a>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="w-3/4 aspect-square rounded-full md:w-1/3 h-full center-flex group select-none"
      >
        <div className="relative center-flex bg-[radial-gradient(circle_at_center,_#000,_#162556)] w-3/4 aspect-[1/1] translate-y-1/6 rounded-full z-10 shadow-[0_0_20px_#FFF] border-4 border-white shadow-white">
          <img
            className="absolute bottom-0 w-full h-auto object-center rounded-full select-none"
            src={images.avatar}
            alt="Avatar"
          />
        </div>
      </div>
    </section>
  );
}
