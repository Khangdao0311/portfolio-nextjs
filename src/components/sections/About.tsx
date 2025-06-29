import images from "@/assets/image";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen center-flex flex-col md:flex-row gap-10 pt-20"
    >
      <div
        data-aos="fade-down"
        data-aos-duration="1200"
        className="w-1/3 aspect-square hidden md:flex items-center justify-center rounded-lg overflow-hidden"
      >
        <img
          className="h-full w-auto object-cover"
          src={images.code}
          alt="code"
        />
      </div>
      <div
        data-aos="fade-left"
        className="flex-1 h-full p-5 sm:p-10 flex justify-center flex-col gap-4 bg-blue-950/10 rounded-2xl border border-white/35 shadow-[0px_0px_10px_#162556] md:shadow-[20px_20px_2px_#091934]"
      >
        <p className="text-xl">
          Hi ! My name is Dao Vinh Khang, born in 2004, graduated from FPT
          Polytechnic College with a major in Web Development.
        </p>
        <p className="text-lg text-justify">
          Currently, I am looking for a Fresher Front-End Developer position to
          have the opportunity to learn, practice and improve my professional
          knowledge. In the next 1-2 years, I hope to work in the position of
          Junior Front-End Developer to improve my professional skills, get
          acquainted with the real environment and accumulate experience and
          gradually develop into a Fullstack programmer in the future.
          <br />
          <br />
          I am a cheerful, sociable, responsible person at work and always ready
          to learn new knowledge. I wish to work in a professional environment
          where I can apply the knowledge I have learned and develop practical
          skills, while contributing to the overall development of the team and
          the company.
          <br />
          <br />
          Although I have just graduated, I have 4 months of experience
          interning as a Front end developer at Tin Viet Software Solutions.
        </p>
      </div>
    </section>
  );
}

export default About;
