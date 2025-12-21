import { useTranslations } from "next-intl";
import Image from "next/image";

import Section from "../Section";
import images from "@/assets/images";

function Education() {
  const t = useTranslations("education");

  return (
    <Section id="education">
      <div className="pt-20 w-full flex flex-col relative min-h-screen gap-8">
        <div data-aos="fade-down" className="w-full center-flex flex-col gap-4">
          <h2 className="text-4xl font-bold border-b-2 w-full mr-auto text-center py-4 border-[theme(--primary-light)]">
            {t("title")}
          </h2>
          <p className="w-full text-base text-center mr-auto ">
            {t("description")}
          </p>
        </div>
        {/*  */}
        <div className="w-full center-flex gap-2 lg:gap-0 !flex-col lg:!flex-row">
          <div className="w-full lg:w-1/2 flex flex-col gap-4 relative z-10">
            <div
              data-aos="fade-up"
              data-aos-duration="900"
              className="flex flex-col gap-0 relative "
            >
              <div className="text-lg font-bold text-center lg:text-justify text-[theme(--primary-light)]">
                {t("fpoly.nameSchool")}
              </div>
              <div className="text-sm font-black text-center lg:text-justify text-gray-300">
                {t("fpoly.major")}: {t("fpoly.myMajor")} | {t("fpoly.time")}
              </div>
              <div className="text-sm font-black text-center lg:text-justify text-gray-300">
                GPA: 3.75/4
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col gap-2">
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-gray-200 text-sm text-center lg:text-justify"
              >
                {t.rich("fpoly.text-1", {
                  strong: (chunks) => (
                    <strong className="font-black text-[theme(--primary-light)]">
                      {chunks}
                    </strong>
                  ),
                })}
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1100"
                className="text-gray-200 text-sm text-center lg:text-justify"
              >
                {t.rich("fpoly.text-2", {
                  strong: (chunks) => (
                    <strong className="font-black text-[theme(--primary-light)]">
                      {chunks}
                    </strong>
                  ),
                })}
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1150"
                className="text-gray-200 text-sm text-center lg:text-justify"
              >
                {t.rich("fpoly.text-3", {
                  strong: (chunks) => (
                    <strong className="font-black text-[theme(--primary-light)]">
                      {chunks}
                    </strong>
                  ),
                })}
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1200"
                className="text-gray-200 text-sm text-center lg:text-justify"
              >
                {t.rich("fpoly.text-4", {
                  strong: (chunks) => (
                    <strong className="font-black text-[theme(--primary-light)]">
                      {chunks}
                    </strong>
                  ),
                })}
              </div>
            </div>
          </div>
          {/*  */}
          <div className="relative flex flex-col w-full aspect-[2/1] self-stretch lg:w-1/2">
            <div
              data-aos="zoom-in-left"
              className="absolute top-1/2 right-1/2 translate-x-3/4 lg:translate-x-3/5 -translate-y-4/5 rounded-lg border-2 border-[theme(--primary-light)] shadow-[2px_-2px_5px_0px_theme(--primary-light)] w-[60%] lg:w-full max-w-[450px] aspect-2/1 overflow-hidden"
            >
              <Image src={images.fpolyF} alt="Education" fill />
            </div>
            <div
              data-aos="zoom-in-right"
              className="absolute bottom-1/2 left-1/2 -translate-x-3/4 lg:-translate-x-3/5 translate-y-[90%] rounded-lg border-2 border-[theme(--primary-light)] shadow-[-2px_2px_5px_0px_theme(--primary-light)] w-[60%] lg:w-full max-w-[450px] aspect-2/1 overflow-hidden"
            >
              <Image src={images.fpolyP} alt="Education" fill />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Education;
