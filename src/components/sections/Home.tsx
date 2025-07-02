"use client";
import AOS from "aos";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Typewriter } from "react-simple-typewriter";
import "aos/dist/aos.css";

import images from "@/assets/image";

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
            className="overflow-hidden w-48 p-2 h-12 bg-black border-2 border-white rounded-lg cursor-pointer relative z-10 group"
            href={`/${t("cv")}`}
            download
          >
            <span className="absolute w-52 h-32 -top-10 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
            <span className="absolute w-52 h-32 -top-10 -left-2 bg-blue-800 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
            <span className="absolute w-52 h-32 -top-10 -left-2 bg-blue-950 rotate-12 transform scale-x-0 group-hover:scale-x-60 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
            <span className=" absolute center-fixed text-xl font-bold text-nowrap">
              {t("download")}
            </span>
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
