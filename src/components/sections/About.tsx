import { useTranslations } from "next-intl";
import { FaCode, FaGraduationCap } from "react-icons/fa6";

function About() {
  const t = useTranslations("about");
  return (
    <section id="about" className="relative min-h-screen center-flex pt-20">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
        {/* 1 */}
        <div
          data-aos="fade-down-right"
          data-aos-duration="500"
          className="w-full h-auto center-flex"
        >
          <div className="w-full h-full bg-black center-flex gap-4 shadow-[0_0_5px_theme(--primary-light)] rounded-b-xl  border-t-4 border-[theme(--primary-light)] py-6 px-10 hover:scale-105 transition-all duration-300">
            <div className="w-20 aspect-square">
              <FaGraduationCap className="w-full h-full text-[theme(--secondary)]" />
            </div>
            <p className="flex-1 text-justify">{t("1")}</p>
          </div>
        </div>
        {/* 2 */}
        <div
          data-aos="fade-down-left"
          data-aos-duration="650"
          className="w-full h-auto center-flex"
        >
          <div className="w-full h-full bg-black center-flex gap-4 shadow-[0_0_5px_theme(--primary-light)] rounded-b-xl  border-t-4 border-[theme(--primary-light)] py-6 px-10 hover:scale-105 transition-all duration-300">
            <p className="flex-1 text-justify">{t("2")}</p>
          </div>
        </div>
        {/* 3 */}
        <div
          data-aos="fade-up-right"
          data-aos-duration="800"
          className="w-full h-auto center-flex"
        >
          <div className="w-full h-full bg-black center-flex gap-4 shadow-[0_0_5px_theme(--primary-light)] rounded-b-xl  border-t-4 border-[theme(--primary-light)] py-6 px-10 hover:scale-105 transition-all duration-300">
            <p className="flex-1 text-justify">{t("3")}</p>
          </div>
        </div>
        {/* 4 */}
        <div
          data-aos="fade-up-left"
          data-aos-duration="950"
          className="w-full h-auto center-flex"
        >
          <div className="w-full h-full bg-black center-flex gap-4 shadow-[0_0_5px_theme(--primary-light)] rounded-b-xl  border-t-4 border-[theme(--primary-light)] py-6 px-10 hover:scale-105 transition-all duration-300">
            <div className="w-20 aspect-square">
              <FaCode className="w-full h-full text-[theme(--secondary)]" />
            </div>
            <p className="flex-1 text-justify">{t("4")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
