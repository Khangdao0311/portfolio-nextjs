import { useTranslations } from "next-intl";

import Section from "../Section";
import icons from "@/assets/icons";

function About() {
  const t = useTranslations("about");
  return (
    <Section id="about">
      <div className="pt-20 w-full relative min-h-screen center-flex !flex-col gap-6">
        <h2
          data-aos="fade-left"
          className="text-4xl font-bold border-b-2 w-full lg:w-3/5 ml-auto text-center lg:text-start py-4 border-[theme(--primary-light)]"
        >
          {t("title")}
        </h2>
        <div className="w-full center-flex gap-4 lg:gap-0 !flex-col lg:!flex-row">
          <div data-aos="fade-right" className="flex w-full lg:w-2/5">
            <icons.about className=" w-full h-auto" />
          </div>
          <div className="w-full lg:w-3/5 flex flex-col gap-4">
            <div
              data-aos="fade-left"
              data-aos-duration="900"
              className="text-base text-gray-200 text-center lg:text-justify"
            >
              {t.rich("text-1", {
                strong: (chunks) => (
                  <strong className="font-black text-[theme(--primary-light)]">
                    {chunks}
                  </strong>
                ),
              })}
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="text-base text-gray-200 text-center lg:text-justify"
            >
              {t.rich("text-2", {
                strong: (chunks) => (
                  <strong className="font-black text-[theme(--primary-light)]">
                    {chunks}
                  </strong>
                ),
              })}
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1100"
              className="text-base text-gray-200 text-center lg:text-justify"
            >
              {t.rich("text-3", {
                strong: (chunks) => (
                  <strong className="font-black text-[theme(--primary-light)]">
                    {chunks}
                  </strong>
                ),
              })}
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1150"
              className="text-base text-gray-200 text-center lg:text-justify"
            >
              {t.rich("text-4", {
                strong: (chunks) => (
                  <strong className="font-black text-[theme(--primary-light)]">
                    {chunks}
                  </strong>
                ),
              })}
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1200"
              className="text-base text-gray-200 text-center lg:text-justify"
            >
              {t.rich("text-5", {
                strong: (chunks) => (
                  <strong className="font-black text-[theme(--primary-light)]">
                    {chunks}
                  </strong>
                ),
              })}
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1250"
              className="text-base text-gray-200 text-center lg:text-justify"
            >
              {t.rich("text-6", {
                strong: (chunks) => (
                  <strong className="font-black text-[theme(--primary-light)]">
                    {chunks}
                  </strong>
                ),
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;
