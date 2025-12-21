import { Timeline } from "antd";
import { useTranslations } from "next-intl";

import { getExperiences } from "@/data";
import Section from "../Section";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  const t = useTranslations("experience");
  const experiences = getExperiences(t);

  return (
    <Section id="experience">
      <div className="pt-20 w-full min-h-screen flex flex-col gap-10">
        <div data-aos="zoom-in" className="w-full center-flex flex-col gap-4">
          <h2 className="text-4xl font-bold border-b-2 w-full text-center py-4 border-[theme(--primary-light)]">
            {t("title")}
          </h2>
          <p className="w-full lg:w-2/3 text-base text-center">
            {t("description")}
          </p>
        </div>

        <div className="w-full hidden lg:flex">
          <Timeline
            className=" w-full [&_.ant-timeline-item-tail]:!border-[theme(--primary-light)] [&_.ant-timeline-item-head]:!bg-transparent [&_.ant-timeline-item-head-blue]:!border-none [&_.ant-timeline-item]:!pb-12"
            mode="alternate"
            items={[
              ...experiences.map((experience, index) => ({
                label: (
                  <p
                    data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                    className="px-4 text-2xl text-[theme(--primary-light)] font-black"
                  >
                    {experience.time}
                  </p>
                ),
                children: (
                  <div data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}>
                    <ExperienceCard experience={experience} />
                  </div>
                ),
                dot: (
                  <div className="w-3 h-3 bg-[theme(--primary-light)] rounded-full" />
                ),
              })),
              {},
            ]}
          />
        </div>

        <div className="w-full flex flex-col gap-8 lg:hidden">
          {experiences.map((experience, index) => (
            <div key={index} className="center-flex flex-col gap-1">
              <p className="px-4 text-2xl text-[theme(--primary-light)] font-black">
                {experience.time}
              </p>
              <ExperienceCard experience={experience} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Experience;
