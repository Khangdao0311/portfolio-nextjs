"use client";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaDownload,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";

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
      className="min-h-screen flex flex-col md:flex-row gap-16 md:gap-10 items-center justify-around pt-20 "
    >
      <div
        data-aos="fade-right"
        className="w-full md:w-3/5 flex flex-col gap-6"
      >
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
            href="https://github.com/khangdao0311"
            className="p-2 border-2 border-[theme(--primary-light)] rounded-lg hover:scale-125 transition-transform duration-200 cursor-pointer"
          >
            <FaGithub className="w-9 h-9 fill-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/khangdao0311/"
            className="p-2 border-2 border-[theme(--primary-light)] rounded-lg hover:scale-125 transition-transform duration-200 cursor-pointer"
          >
            <FaLinkedinIn className="w-9 h-9 fill-white" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61564139123358"
            className="p-2 border-2 border-[theme(--primary-light)] rounded-lg hover:scale-125 transition-transform duration-200 cursor-pointer"
          >
            <FaFacebookF className="w-9 h-9 fill-white" />
          </a>
          <a
            href="https://zalo.me/84976382553"
            className="p-2 border-2 border-[theme(--primary-light)] rounded-lg hover:scale-125 transition-transform duration-200 cursor-pointer"
          >
            <Icon.zalo className="w-9 h-9 fill-white" />
          </a>
        </div>
        <a
          className="w-full md:w-2/3 text-2xl center-flex gap-2 font-bold text-nowrap py-4 rounded-lg bg-transparent hover:bg-[theme(--primary-light)] text-white hover:text-[theme(--primary-dark)] border border-[theme(--primary-light)] transition-all hover:scale-105 duration-300"
          href={`/${t("cv")}`}
          download
        >
          <FaDownload />
          {t("download")}
        </a>
      </div>
      <div
        data-aos="fade-up"
        className="w-full md:w-2/5 aspect-square h-full center-flex group select-none"
      >
        <div className="relative center-flex w-[90%] aspect-square p-8 border-2 border-dashed rounded-full">
          <div className="absolute inset-0 w-full aspect-square animate-spin-slow">
            <button className="animate-spin-reverse-slow absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 rounded-full bg-cover cursor-pointer border-2 border-gray-400 p-2 active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="center-flex w-12 !aspect-square transition-all duration-500 rounded-full z-[2] bg-[theme(--primary-dark)] p-1 overflow-hidden">
                <Icon.reactjs />
              </span>
            </button>
            <button className="animate-spin-reverse-slow absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 rounded-full bg-cover cursor-pointer border-2 border-gray-400 p-2 active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="center-flex w-12 !aspect-square transition-all duration-500 rounded-full z-[2] bg-[theme(--primary-dark)] p-1 overflow-hidden">
                <Icon.tailwindcss />
              </span>
            </button>
            <button className="animate-spin-reverse-slow absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full bg-cover cursor-pointer border-2 border-gray-400 p-2 active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="center-flex w-12 !aspect-square transition-all duration-500 rounded-full z-[2] bg-[theme(--primary-dark)] p-1 overflow-hidden">
                <Icon.figma />
              </span>
            </button>
            <button className="animate-spin-reverse-slow absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full bg-cover cursor-pointer border-2 border-gray-400 p-2 active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="center-flex w-12 !aspect-square transition-all duration-500 rounded-full z-[2] bg-[theme(--primary-dark)] p-1 overflow-hidden">
                <Icon.nodejs />
              </span>
            </button>
          </div>
          <div className="absolute inset-0 w-full aspect-square rotate-45 animate-spin-slow">
            <button className="animate-spin-reverse-slow -rotate-45 absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 rounded-full bg-cover cursor-pointer border-2 border-gray-400 p-2 active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="center-flex w-12 !aspect-square transition-all duration-500 rounded-full z-[2] bg-[theme(--primary-dark)] p-1 overflow-hidden">
                <Icon.nextjs />
              </span>
            </button>
            <button className="animate-spin-reverse-slow -rotate-45 absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 rounded-full bg-cover cursor-pointer border-2 border-gray-400 p-2 active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="center-flex w-12 !aspect-square transition-all duration-500 rounded-full z-[2] bg-[theme(--primary-dark)] p-1 overflow-hidden">
                <Icon.github />
              </span>
            </button>
            <button className="animate-spin-reverse-slow -rotate-45 absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full bg-cover cursor-pointer border-2 border-gray-400 p-2 active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="center-flex w-12 !aspect-square transition-all duration-500 rounded-full z-[2] bg-[theme(--primary-dark)] p-1 overflow-hidden">
                <Icon.ts />
              </span>
            </button>
            <button className="animate-spin-reverse-slow -rotate-45 absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full bg-cover cursor-pointer border-2 border-gray-400 p-2 active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="center-flex w-12 !aspect-square transition-all duration-500 rounded-full z-[2] bg-[theme(--primary-dark)] p-1 overflow-hidden">
                <Icon.mongodb />
              </span>
            </button>
          </div>
          <div className="relative center-flex bg-[radial-gradient(circle_at_center,_#000,_#162556)] w-4/5 aspect-square rounded-full border-2 border-[theme(--primary-light)]">
            <img
              className="absolute bottom-0 w-full h-auto object-center rounded-full select-none"
              src={images.avatar4x6}
              alt="Avatar"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
