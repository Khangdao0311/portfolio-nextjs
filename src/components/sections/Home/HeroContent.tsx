"use client";
import { Typewriter } from "react-simple-typewriter";
import { useTranslations } from "next-intl";
import Lottie from "lottie-react";
import {
  FaDownload,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";

import icons from "@/assets/icons";
import animations from "@/assets/animations";
import { openNewTab } from "@/utils/openNewTab";

function HeroContent() {
  const t = useTranslations("home");

  return (
    <>
      <div
        data-aos="fade-right"
        data-aos-duration="500"
        className=" text-3xl font-bold flex items-end gap-4"
      >
        {t("hello")}{" "}
        <Lottie
          className="w-16 h-16 transition-transform duration-300 hover:scale-125"
          animationData={animations.hey}
          loop
          autoplay
        />
      </div>
      <p
        data-aos="fade-right"
        data-aos-duration="600"
        className="text-3xl font-extrabold"
      >
        {t("name")}
      </p>
      <div
        data-aos="fade-right"
        data-aos-duration="700"
        className="text-3xl font-bold"
      >
        {t("a")}{" "}
        <span className="text-[theme(--primary-light)] font-black text-4xl">
          <Typewriter
            words={[t("webDeveloper"), t("frontEndDeveloper")]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </div>
      <p
        data-aos="fade-right"
        data-aos-duration="800"
        className=" text-xl font-medium"
      >
        {t("welcome")}
      </p>
      <div data-aos="fade-right" data-aos-duration="900" className="flex gap-4">
        <div
          onClick={() => openNewTab("https://github.com/Khangdao0311")}
          className="p-2 border-2 border-[theme(--primary-light)] group hover:bg-[theme(--primary-light)] rounded-lg hover:scale-125 transition-transform duration-200 cursor-pointer"
        >
          <FaGithub className="w-9 h-9 text-white group-hover:text-[theme(--primary-dark)]" />
        </div>
        <div
          onClick={() => openNewTab("https://www.linkedin.com/in/khangdao0311")}
          className="p-2 border-2 border-[theme(--primary-light)] group hover:bg-[theme(--primary-light)] rounded-lg hover:scale-125 transition-transform duration-200 cursor-pointer"
        >
          <FaLinkedinIn className="w-9 h-9 text-white group-hover:text-[theme(--primary-dark)]" />
        </div>
        <div
          onClick={() => openNewTab("https://www.facebook.com/khangdao0311")}
          className="p-2 border-2 border-[theme(--primary-light)] group hover:bg-[theme(--primary-light)] rounded-lg hover:scale-125 transition-transform duration-200 cursor-pointer"
        >
          <FaFacebookF className="w-9 h-9 text-white group-hover:text-[theme(--primary-dark)]" />
        </div>
        <div
          onClick={() => openNewTab("https://zalo.me/84976382553")}
          className="p-2 border-2 border-[theme(--primary-light)] group hover:bg-[theme(--primary-light)] rounded-lg hover:scale-125 transition-transform duration-200 cursor-pointer"
        >
          <icons.zalo className="w-9 h-9 text-white group-hover:text-[theme(--primary-dark)]" />
        </div>
      </div>
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="w-full lg:w-2/3 center-flex"
      >
        <a
          className="w-full text-2xl center-flex gap-2 font-bold text-nowrap py-4 rounded-lg hover:bg-[theme(--primary-light)] text-white hover:text-[theme(--primary-dark)] border border-[theme(--primary-light)] transition-transform hover:scale-105 duration-300"
          href={`/${t("cv")}`}
          download
        >
          <FaDownload />
          {t("download")}
        </a>
      </div>
    </>
  );
}

export default HeroContent;
