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

import images from "@/assets/images";
import icons from "@/assets/icons";
import animations from "@/assets/animations";
import Lottie from "lottie-react";

export default function Home() {
  const t = useTranslations("home");

  useEffect(() => {
    AOS.init({
      disable: () => window.innerWidth < 1024,
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row gap-10 items-center justify-around pt-20"
    >
      <div className="w-full lg:w-3/5 flex flex-col gap-6">
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
        <div
          data-aos="fade-right"
          data-aos-duration="900"
          className="flex gap-4"
        >
          <a
            href="https://github.com/khangdao0311"
            className="p-2 border-2 border-[theme(--primary-light)] group hover:bg-[theme(--primary-light)] bg-black rounded-lg hover:scale-125 transition-transform duration-200 cursor-pointer"
          >
            <FaGithub className="w-9 h-9 text-white group-hover:text-[theme(--primary-dark)]" />
          </a>
          <a
            href="https://www.linkedin.com/in/khangdao0311/"
            className="p-2 border-2 border-[theme(--primary-light)] group hover:bg-[theme(--primary-light)] bg-black rounded-lg hover:scale-125 transition-transform duration-200 cursor-pointer"
          >
            <FaLinkedinIn className="w-9 h-9 text-white group-hover:text-[theme(--primary-dark)]" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61564139123358"
            className="p-2 border-2 border-[theme(--primary-light)] group hover:bg-[theme(--primary-light)] bg-black rounded-lg hover:scale-125 transition-transform duration-200 cursor-pointer"
          >
            <FaFacebookF className="w-9 h-9 text-white group-hover:text-[theme(--primary-dark)]" />
          </a>
          <a
            href="https://zalo.me/84976382553"
            className="p-2 border-2 border-[theme(--primary-light)] group hover:bg-[theme(--primary-light)] bg-black rounded-lg hover:scale-125 transition-transform duration-200 cursor-pointer"
          >
            <icons.zalo className="w-9 h-9 text-white group-hover:text-[theme(--primary-dark)]" />
          </a>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="w-full lg:w-2/3 center-flex"
        >
          <a
            className="w-full text-2xl center-flex gap-2 font-bold text-nowrap py-4 rounded-lg bg-black hover:bg-[theme(--primary-light)] text-white hover:text-[theme(--primary-dark)] border border-[theme(--primary-light)] transition-transform hover:scale-105 duration-300"
            href={`/${t("cv")}`}
            download
          >
            <FaDownload />
            {t("download")}
          </a>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="w-full lg:w-2/5 aspect-[1/1.1] center-flex group select-none overflow-hidden"
      >
        <div className="relative center-flex w-[80%] aspect-square p-8 border-2 border-dashed border-white rounded-full">
          {/* item1 */}
          <div className="absolute inset-0 w-full aspect-square animate-spin-slow">
            <button className="w-[20%] !aspect-square animate-spin-reverse-slow absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 rounded-full border-2 border-[theme(--primary-light)] p-2">
              <span className="center-flex w-full !aspect-square bg-[theme(--primary-dark)] overflow-hidden rounded-full p-1">
                <icons.reactjs className="w-full h-full" />
              </span>
            </button>
            <button className="w-[20%] !aspect-square animate-spin-reverse-slow absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full border-2 border-[theme(--primary-light)] p-2">
              <span className="center-flex w-full !aspect-square bg-[theme(--primary-dark)] overflow-hidden rounded-full p-1">
                <icons.nodejs className="w-full h-full" />
              </span>
            </button>
            <button className="w-[20%] !aspect-square animate-spin-reverse-slow absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 rounded-full border-2 border-[theme(--primary-light)] p-2">
              <span className="center-flex w-full !aspect-square bg-[theme(--primary-dark)] overflow-hidden rounded-full p-1">
                <icons.tailwindcss className="w-full h-full" />
              </span>
            </button>
            <button className="w-[20%] !aspect-square animate-spin-reverse-slow absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full border-2 border-[theme(--primary-light)] p-2">
              <span className="center-flex w-full !aspect-square bg-[theme(--primary-dark)] overflow-hidden rounded-full p-1">
                <icons.figma className="w-full h-full" />
              </span>
            </button>
          </div>
          {/* item2 */}
          <div className="absolute inset-0 w-full aspect-square rotate-45 animate-spin-slow">
            <button className="w-[20%] !aspect-square animate-spin-reverse-slow -rotate-45 absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 rounded-full border-2 border-[theme(--primary-light)] p-2">
              <span className="center-flex w-full !aspect-square bg-[theme(--primary-dark)] overflow-hidden rounded-full p-1">
                <icons.nextjs className="w-full h-full" />
              </span>
            </button>
            <button className="w-[20%] !aspect-square animate-spin-reverse-slow -rotate-45 absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full border-2 border-[theme(--primary-light)] p-2">
              <span className="center-flex w-full !aspect-square bg-[theme(--primary-dark)] overflow-hidden rounded-full p-1">
                <icons.mongodb className="w-full h-full" />
              </span>
            </button>
            <button className="w-[20%] !aspect-square animate-spin-reverse-slow -rotate-45 absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 rounded-full border-2 border-[theme(--primary-light)] p-2">
              <span className="center-flex w-full !aspect-square bg-[theme(--primary-dark)] overflow-hidden rounded-full p-1">
                <icons.github className="w-full h-full" />
              </span>
            </button>
            <button className="w-[20%] !aspect-square animate-spin-reverse-slow -rotate-45 absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full border-2 border-[theme(--primary-light)] p-2">
              <span className="center-flex w-full !aspect-square bg-[theme(--primary-dark)] overflow-hidden rounded-full p-1">
                <icons.ts className="w-full h-full" />
              </span>
            </button>
          </div>
          {/* avatar */}
          <div className="relative center-flex bg-[radial-gradient(circle_at_center,_#000,_#162556)] w-4/5 aspect-square rounded-full border-4 border-[theme(--primary-light)]">
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
