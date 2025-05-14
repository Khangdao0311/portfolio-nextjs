"use client";

import { useEffect, useRef } from "react";
import TypeIt from "typeit";
import "aos/dist/aos.css";
import AOS from "aos";
import { IoMail } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

import images from "./assets/image";
import Icons from "./assets/Icon";

const skills = [
  { icon: Icons.html, name: "HTML" },
  { icon: Icons.css, name: "CSS" },
  { icon: Icons.js, name: "JavaScript" },
  { icon: Icons.ts, name: "TypeScript" },
  { icon: Icons.reactjs, name: "ReactJS" },
  { icon: Icons.nextjs, name: "NextJS" },
  { icon: Icons.nodejs, name: "NodeJS" },
  { icon: Icons.mongodb, name: "MongoDB" },
  { icon: Icons.tailwindcss, name: "Tailwind CSS" },
  { icon: Icons.githup, name: "GitHup" },
];

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    if (!el.current) return;
    const instance = new TypeIt(el.current, {
      speed: 100,
      deleteSpeed: 50,
      loop: true,
      breakLines: false,
      waitUntilVisible: true,
    })
      .type("Web Developer")
      .pause(1200)
      .delete()
      .type("Front End Developer")
      .pause(1200)
      .delete()
      .go();

    return () => {
      instance.destroy();
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // 👈 Cho phép animate lại khi cuộn lên
    });
  }, []);

  return (
    <>
      <header className="fixed top-0 w-full bg-black z-[9999]">
        <div className="container-custom flex items-center justify-between py-4">
          <a href="" className="text-4xl font-bold select-none">
            Portfolio
          </a>
          <div className="flex gap-5">
            <a href="" className="text-lg font-bold px-4 py-2 rounded-lg select-none uppercase">
              home
            </a>
            <a
              href="#about"
              className="text-lg font-bold px-4 py-2 rounded-lg select-none uppercase"
            >
              about
            </a>
            <a
              href="#skills"
              className="text-lg font-bold px-4 py-2 rounded-lg select-none uppercase"
            >
              skills
            </a>
            <a
              href="#contact"
              className="text-lg font-bold px-4 py-2 rounded-lg select-none uppercase"
            >
              contact
            </a>
          </div>
        </div>
      </header>
      <main className="container-custom ">
        {/* HOME */}
        <section
          id="home"
          className="h-screen max-h-screen flex gap-5 items-center justify-around pt-20"
        >
          <div data-aos="fade-right" className=" flex flex-col gap-6">
            <p className="text-white text-4xl font-bold">Hello !</p>
            <p className=" text-5xl font-bold text-white">I'm DAO VINH KHANG</p>
            <p ref={el} className="text-white text-4xl font-bold"></p>
            <p className="text-white text-xl font-medium">Wellcome to my persanal website !</p>
            <div className="flex gap-4">
              <a
                className="overflow-hidden w-48 p-2 h-12 bg-black border-2 border-white text-white rounded-lg cursor-pointer relative z-10 group"
                href="/cv.pdf"
                download
              >
                <span className="absolute w-52 h-32 -top-10 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                <span className="absolute w-52 h-32 -top-10 -left-2 bg-blue-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                <span className="absolute w-52 h-32 -top-10 -left-2 bg-blue-800 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                <span className=" absolute center-fixed text-xl font-bold text-nowrap">
                  Download CV
                </span>
              </a>
            </div>
          </div>
          <div data-aos="fade-up" className="w-1/3 h-full center-flex group">
            {/* <div className="relative center-flex bg-blue-800 w-3/4 aspect-[4/6] group-hover:aspect-[1/1] group-hover:translate-y-1/6 duration-400 transition-all  rounded-full z-10 shadow-[0_0_80px_#193cb8] group-hover:shadow-[0_0_10px_#FFF] border-4 border-white shadow-white"> */}
            <div className="relative center-flex bg-blue-800 w-3/4 aspect-[1/1] translate-y-1/6 rounded-full z-10 shadow-[0_0_10px_#FFF] border-4 border-white shadow-white">
              <img
                className="absolute bottom-0 w-full h-auto object-center rounded-full "
                src={images.avatar}
                alt="Avatar"
              />
            </div>
          </div>
        </section>
        {/* ABOUT */}
        <section id="about" className="h-screen max-h-screen pt-20 center-flex gap-10">
          <div
            data-aos="fade-down"
            className="w-1/3 aspect-square center-flex rounded-lg overflow-hidden"
          >
            <img className="h-full w-auto object-cover" src={images.code} alt="" />
          </div>
          <div data-aos="fade-left" className="w-2/3 h-full p-4 flex justify-center flex-col gap-4">
            <p className="text-2xl">My name is Dao Vinh Khang, born on November 3, 2004.</p>
            <p className="text-lg">
              I graduated from FPT Polytechnic College. During my studies, I worked on individual
              and group projects, always completing them on time. I always attended seminars to
              further improve my professional knowledge.
              <br />
              <br />
              Although I am a fresh graduate, I have 4 months of experience working as a Front end
              developer at Tin Viet Software Solutions.
              <br />
              <br />I hope to find a place to practice, learn to improve my knowledge and also find
              a stable job.
            </p>
          </div>
        </section>
        {/* SKILLS */}
        <section
          id="skills"
          className="h-screen max-h-screen flex flex-col gap-5 justify-center pt-20"
        >
          <h2 data-aos="fade-right" className="text-4xl font-bold">
            Skills
          </h2>
          <div data-aos="fade-up" className="grid grid-cols-4 gap-10 ">
            {skills.map((skill: any, index: number) => {
              return (
                <div
                  className="flex px-4 py-3 gap-4 items-center border border-white rounded-lg"
                  key={index}
                >
                  <div className="w-1/4 aspect-square bg-white rounded-lg flex items-center justify-center">
                    <skill.icon className="w-[90%]" />
                  </div>
                  <p className="text-xl font-bold">{skill.name}</p>
                </div>
              );
            })}
          </div>
        </section>
        {/* CONTACT */}
        <section id="contact" className="h-screen max-h-screen center-flex gap-20 pt-20">
          <div data-aos="fade-right" className=" flex flex-col gap-10">
            <h2 className="text-4xl font-bold">Profile</h2>
            <div className="flex flex-col gap-10">
              <div className="flex gap-10 items-center">
                <IoMail className="w-10 h-10" />
                <span className="text-xl font-bold ">khangdao0311@gmail.com</span>
              </div>
              <div className="flex gap-10 items-center">
                <FaPhone className="w-10 h-10" />
                <span className="text-xl font-bold ">0976382553</span>
              </div>
              <div className="flex gap-10 items-center">
                <FaMapMarkerAlt className="w-10 h-10" />
                <span className="text-xl font-bold ">Quận 12, TP. Hồ Chí Minh</span>
              </div>
              <div className="flex gap-10 items-center">
                <FaGithub className="w-10 h-10" />
                <span className="text-xl font-bold ">github.com/khangdao0311</span>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in-down"
            className="w-full max-w-[500px] p-10 border-4 border-blue-800 shadow-[0_0_10px_#FFF] rounded-xl "
          >
            <h2 className="text-3xl font-semibold text-white mb-4 text-center">Contact Me</h2>
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="block text-white mb-1" htmlFor="name">
                  Your Name
                </label>
                <input
                  className="w-full px-4 py-2 rounded focus:outline-none ring-1 ring-white focus:ring-2 focus:ring-blue-800 transition duration-300"
                  placeholder="Enter your name"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="block text-white mb-1" htmlFor="email">
                  Your Email
                </label>
                <input
                  className="w-full px-4 py-2 rounded focus:outline-none ring-1 ring-white focus:ring-2 focus:ring-blue-800 transition duration-300"
                  placeholder="Enter your email"
                  name="email"
                  id="email"
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="block text-white mb-1" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  className="w-full px-4 py-2 rounded focus:outline-none ring-1 ring-white focus:ring-2 focus:ring-blue-800 transition duration-300"
                  rows={4}
                  placeholder="Enter your message"
                  name="message"
                  id="message"
                ></textarea>
              </div>
              <button className="mt-4 relative bg-slate-900 h-16 w-full text-center border-2 border-blue-600 text-white text-base font-bold rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:border-blue-800 hover:text-white p-3 before:absolute before:w-10 before:h-10 before:content[''] before:right-2 before:top-2 before:z-10 before:bg-indigo-500 before:rounded-full before:blur-lg before:transition-all before:duration-500 after:absolute after:z-10 after:w-16 after:h-16 after:content[''] after:bg-blue-400 after:right-6 after:top-4 after:rounded-full after:blur-lg after:transition-all after:duration-500 hover:before:right-10 hover:before:-bottom-4 hover:before:blur hover:after:-right-6 hover:after:scale-110">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
