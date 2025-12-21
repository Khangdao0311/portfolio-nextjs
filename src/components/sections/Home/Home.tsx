import Image from "next/image";

import images from "@/assets/images";
import icons from "@/assets/icons";
import Section from "@/components/sections/Section";
import HeroContent from "./HeroContent";

export default function Home() {
  return (
    <Section id="home">
      <div className="pt-20 w-full relative min-h-screen flex flex-col lg:flex-row gap-10 items-center justify-around ">
        <div className="w-full lg:w-3/5 flex flex-col gap-6">
          <HeroContent />
        </div>
        {/*  */}
        <div
          data-aos="fade-up"
          className="w-full relative lg:w-2/5 aspect-[1/1.1] center-flex group select-none overflow-hidden"
        >
          <div className="relative center-flex w-[80%] aspect-square p-8 border-2 border-dashed border-white rounded-full">
            {/* item1 */}
            <div className="rounded-full absolute inset-0 w-full aspect-square animate-spin-slow">
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
            <div className="rounded-full absolute inset-0 w-full aspect-square rotate-45 animate-spin-slow">
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
              <div className="absolute bottom-0 w-full aspect-[4/6] object-center rounded-full select-none">
                <Image
                  fill
                  className="rounded-full select-none"
                  src={images.avatar4x6}
                  alt="Avatar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
