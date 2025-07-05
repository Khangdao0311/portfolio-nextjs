import { useTranslations } from "next-intl";
import images from "@/assets/image";

function About() {
  const t = useTranslations("about");
  return (
    <section
      id="about"
      className="min-h-screen center-flex flex-col lg:flex-row gap-10 pt-20"
    >
      <div
        data-aos="fade-down"
        data-aos-duration="1200"
        className="w-1/3 aspect-square hidden lg:flex items-center justify-center rounded-lg overflow-hidden"
      >
        <img
          className="h-full w-auto object-cover"
          src={images.code}
          alt="code"
        />
      </div>
      <div
        data-aos="fade-left"
        className="flex-1 h-full p-5 sm:p-10 flex justify-center flex-col gap-4 bg-[theme(--primary-dark)] rounded-2xl border-2 border-[theme(--primary-light)] md:border-transparent shadow-[0px_0px_10px_theme(--primary-light)] md:shadow-[20px_20px_2px_theme(--primary-light)]"
      >
        <p className="text-xl">{t("1")}</p>
        <p className="text-lg text-justify">
          {t("2")}
          <br />
          <br />
          {t("3")}
          <br />
          <br />
          {t("4")}
        </p>
      </div>
    </section>
  );
}

export default About;
