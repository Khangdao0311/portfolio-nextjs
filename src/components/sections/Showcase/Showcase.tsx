"use client";
import { Tabs } from "antd";
import { useMemo, useState } from "react";
import { AnimatePresence } from "motion/react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

import { getProjects, getSkills, getDemos } from "@/data";
import Section from "../Section";
import ProjectCard from "./ProjectCard";
import SkillCard from "./SkillCard";
import DemoCard from "./DemoCard";

function Showcase() {
  const [activeTabKey, setActiveTabKey] = useState("1");
  const t = useTranslations("showcase");

  const skills = useMemo(() => getSkills(t), [t]);
  const projects = useMemo(() => getProjects(t), [t]);
  const demos = useMemo(() => getDemos(t), [t]);

  return (
    <Section id="showcase">
      <div className="pt-20 w-full min-h-screen flex flex-col gap-10">
        <div
          data-aos="zoom-out-down"
          className="w-full center-flex flex-col gap-4"
        >
          <h2 className="text-4xl font-bold border-b-2 w-full text-center py-4 border-[theme(--primary-light)]">
            {t("title")}
          </h2>
          <p className="w-full lg:w-2/3 text-base text-center">
            {t("description")}
          </p>
        </div>
        <Tabs
          className="w-full min-h-[80vh] [&_.ant-tabs-nav::before]:hidden [&_.ant-tabs-ink-bar]:!bg-[theme(--primary-light)] [&_.ant-tabs-tab]:!px-4"
          defaultActiveKey="1"
          centered
          activeKey={activeTabKey}
          onChange={setActiveTabKey}
          style={{ color: "white" }}
          items={[
            {
              key: "1",
              label: (
                <h2
                  data-aos="zoom-in"
                  className="text-white text-2xl font-bold"
                >
                  {t("skills")}
                </h2>
              ),
              children: (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-8 pt-5">
                  <AnimatePresence>
                    {skills.map((skill: any, index: number) => {
                      return (
                        <motion.div
                          initial={{ y: 30, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          viewport={{ once: true, amount: 0.1 }}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.05,
                          }}
                          key={`${activeTabKey}-${index}`}
                        >
                          <SkillCard skill={skill} />
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              ),
            },
            {
              key: "2",
              label: (
                <h2
                  data-aos="zoom-in"
                  className="text-white text-2xl font-bold"
                >
                  {t("projects")}
                </h2>
              ),
              children: (
                <>
                  <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8 pt-5">
                    <AnimatePresence>
                      {projects.map((project: any, index: number) => (
                        <motion.div
                          initial={{ y: 40, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          viewport={{ once: true, amount: 0.1 }}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.1,
                          }}
                          key={`${activeTabKey}-${index}`}
                        >
                          <ProjectCard project={project} />
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                  <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="!flex sm:!hidden !px-6 !h-full"
                  >
                    {projects.map((project: any, index: number) => (
                      <SwiperSlide key={index}>
                        <ProjectCard project={project} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </>
              ),
            },
            {
              key: "3",
              label: (
                <h2
                  data-aos="zoom-in"
                  className="text-white text-2xl font-bold"
                >
                  {t("demos")}
                </h2>
              ),
              children: (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-8 pt-5">
                  <AnimatePresence>
                    {demos.map((demo: any, index: number) => (
                      <motion.div
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1,
                        }}
                        key={`${activeTabKey}-${index}`}
                      >
                        <DemoCard demo={demo} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              ),
            },
          ]}
        />
      </div>
    </Section>
  );
}

export default Showcase;
