"use client";

import { useEffect, useRef, useState } from "react";
import TypeIt from "typeit";
import "aos/dist/aos.css";
import AOS from "aos";
import { IoMail } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaGithub, FaList, FaPhone } from "react-icons/fa6";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import images from "./assets/image";
import Icons from "./assets/Icon";
import { Drawer, Popover, Tabs } from "antd";

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

const projects = [
  {
    image: images.elecking,
    name: "Website bán hàng Elecking",
    description:
      "Là một website bán hàng các sản phẩm điện tử, hộ trợ các công cụ như tìm kiếm, lọc, sắp xếp, giỏ hàng và thanh toán có tích hợp Vnpay, đăng ký đăng nhập, quên mật khẩu, thay dổi thông tin, địa chỉ, quản lý đơn hàng, CRUD admin, dashboard, reponsive,...",
    href: "http://elecking.click/home",
    technologies: ["NextJS", "TailwindCSS", "NodeJS", "MongoDB"],
  },
  {
    image: images.cellphones,
    name: "Cellphones - Clone",
    description:
      "Sao chép website cellphoneS sử dụn công nghệ nextjs và nodejs expressjs, thực hiện các chức năng tìm kiếm, lọc, sắp xếp, giỏ hàng, đăng ký đăng nhập, quên mật khẩu, CRUD admin",
    href: "https://github.com/khangdao0311",
    technologies: ["NextJS", "NodeJS", "MongoDB"],
  },
];

export default function Home() {
  const [openDrawer, setOpenDrawer] = useState(false);

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

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(
        /^([A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚÝĂĐĨŨƠƯỲỴÝỶỸẰẮẲẴẶẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆÔỒỐỔỖỘƠỜỚỞỠỢƯỪỨỬỮỰ]+[a-zàáâãèéêìíòóôõùúýăđĩũơưỳỵỷỹằắẳẵặấầẩẫậèéẹẻẽêềếểễệôồốổỗộơờớởỡợưừứửữự]+(?:\s+)?)+$/,
        "Họ tên không hợp lệ. Vui lòng viết đúng định dạng (có dấu, viết hoa đầu mỗi chữ)."
      )
      .required("Vui lòng nhập Họ và Tên"),

    email: Yup.string().email("Email không hợp lệ").required("Vui lòng nhập email của bạn"),
    message: Yup.string().required("Vui lòng nhập tin nhắn cho tôi"),
  });

  async function handleSubmit(values: any, { resetForm }: { resetForm: () => void }) {
    console.log(values);

    const res = await fetch("/api/sendMail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: "Khangdao0311@gmail.com",
        subject: "Contact from Portfolio",
        text: "This email is sent via API route",
      }),
    });

    const data = await res.json();
    if (res.ok) alert("Email sent");
    else alert("Error sending email: " + data.error);

    resetForm();
  }

  const currentYear = new Date().getFullYear();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full bg-black z-30">
        <div className="container-custom flex items-center justify-between px-2.5 xl:px-0 py-4 ">
          <a href="" className="text-4xl font-bold select-none">
            Portfolio
          </a>
          <div className="hidden sm:flex gap-2 lg:gap-5">
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
          <div onClick={() => setOpenDrawer(true)} className="flex sm:hidden px-4">
            <FaList className=" w-7 h-7" />
          </div>
          <Drawer
            title="Menu"
            placement={"right"}
            closable={true}
            onClose={() => setOpenDrawer(false)}
            open={openDrawer}
            key={"left"}
            zIndex={50}
            width="min(50vw, 300px)"
          >
            <div className="flex flex-col gap-4">
              <a
                href=""
                onClick={() => setOpenDrawer(false)}
                className="text-lg font-bold px-4 py-2 rounded-lg select-none uppercase"
              >
                home
              </a>
              <a
                href="#about"
                onClick={() => setOpenDrawer(false)}
                className="text-lg font-bold px-4 py-2 rounded-lg select-none uppercase"
              >
                about
              </a>
              <a
                href="#skills"
                onClick={() => setOpenDrawer(false)}
                className="text-lg font-bold px-4 py-2 rounded-lg select-none uppercase"
              >
                skills
              </a>
              <a
                href="#contact"
                onClick={() => setOpenDrawer(false)}
                className="text-lg font-bold px-4 py-2 rounded-lg select-none uppercase"
              >
                contact
              </a>
            </div>
          </Drawer>
        </div>
      </header>
      <main className="container-custom px-2.5 xl:px-0">
        {/* HOME */}
        <section
          id="home"
          className="min-h-screen flex flex-col md:flex-row gap-10 md:gap-5 items-center justify-around pt-20 "
        >
          <div data-aos="fade-right" className=" flex flex-col gap-6">
            <p className="text-white text-3xl font-bold">Hello !</p>
            <p className=" text-4xl font-bold text-white">I'm DAO VINH KHANG</p>
            <p ref={el} className="text-white text-3xl font-bold"></p>
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
          <div data-aos="fade-up" className="w-3/4 aspect-square md:w-1/3 h-full center-flex group">
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
        <section id="about" className="min-h-screen center-flex flex-col md:flex-row gap-10 pt-20">
          <div
            data-aos="fade-right"
            data-aos-duration="1200"
            className="w-1/3 aspect-square hidden md:flex items-center justify-center rounded-lg overflow-hidden"
          >
            <img className="h-full w-auto object-cover" src={images.code} alt="" />
          </div>
          <div
            data-aos="fade-right"
            className="flex-1 h-full p-4 flex justify-center flex-col gap-4"
          >
            <p className="text-2xl">My name is Dao Vinh Khang, born on November 3, 2004.</p>
            <p className="text-lg text-justify">
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
        <section id="skills" className="min-h-screen center-flex pt-20 ">
          <Tabs
            className="w-full  min-h-[80vh] [&_.ant-tabs-nav::before]:hidden"
            defaultActiveKey="1"
            style={{ color: "white" }}
            items={[
              {
                key: "1",
                label: (
                  <h2 data-aos="fade-down" className="text-white text-2xl font-bold">
                    Skills
                  </h2>
                ),
                children: (
                  <div
                    data-aos="fade-up"
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8 lg:gap-10 pt-5"
                  >
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
                ),
              },
              {
                key: "2",
                label: (
                  <h2 data-aos="fade-down" className="text-white text-2xl font-bold">
                    Projects
                  </h2>
                ),
                children: (
                  <div
                    data-aos="fade-up"
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-5 md:gap-10 pt-5"
                  >
                    {projects.map((e: any, i: number) => (
                      <a
                        href={e.href}
                        key={i}
                        className="flex flex-col gap-2.5 p-4 border border-white rounded-xl"
                      >
                        <div className="w-full aspect-square overflow-hidden rounded-md">
                          <img
                            className="w-full h-full object-contain"
                            src={e.image}
                            alt={e.name}
                          />
                        </div>
                        <h3 className="text-lg font-bold text-white line-clamp-2 h-14">{e.name}</h3>
                        <p className="text-base text-justify line-clamp-3 font-light text-white h-[72px ]">
                          {e.description}
                        </p>
                        <div className="w-full flex gap-2 flex-wrap">
                          {e.technologies.map((t: string, iT: number) => (
                            <p
                              key={iT}
                              className="px-2 py-1 text-xs font-bold rounded border border-blue-500"
                            >
                              {t}
                            </p>
                          ))}
                        </div>
                      </a>
                    ))}
                  </div>
                ),
              },
            ]}
          />
        </section>
        {/* CONTACT */}
        <section
          id="contact"
          className="min-h-screen center-flex flex-col lg:flex-row gap-20 pt-20"
        >
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
            className="w-full max-w-[500px] p-6 sm:p-10 border-4 border-blue-800 shadow-[0_0_10px_#FFF] rounded-xl "
          >
            <h2 className="text-3xl font-semibold text-white mb-4 text-center">Contact Me</h2>
            <Formik
              initialValues={{
                name: "",
                email: "",
                message: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ values, errors, touched, handleChange, handleBlur }) => (
                <Form className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="block text-white mb-1" htmlFor="name">
                      Your Name
                    </label>
                    <Popover
                      placement="bottom"
                      content={
                        <div className="text-red-500 text-sm font-semibold">{errors.name}</div>
                      }
                      open={!!(errors.name && touched.name)}
                    >
                      <input
                        className="w-full px-4 py-2 rounded focus:outline-none ring-1 ring-white focus:ring-2 focus:ring-blue-800 transition duration-300"
                        placeholder="Enter your name"
                        type="text"
                        name="name"
                        value={values.name}
                        autoComplete="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Popover>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="block text-white mb-1" htmlFor="email">
                      Your Email
                    </label>
                    <Popover
                      placement="bottom"
                      content={
                        <div className="text-red-500 text-sm font-semibold">{errors.email}</div>
                      }
                      open={!!(errors.email && touched.email)}
                    >
                      <input
                        className="w-full px-4 py-2 rounded focus:outline-none ring-1 ring-white focus:ring-2 focus:ring-blue-800 transition duration-300"
                        placeholder="Enter your email"
                        name="email"
                        id="email"
                        type="email"
                        value={values.email}
                        autoComplete="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Popover>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="block text-white mb-1" htmlFor="message">
                      Your Message
                    </label>
                    <Popover
                      placement="bottom"
                      content={
                        <div className="text-red-500 text-sm font-semibold">{errors.message}</div>
                      }
                      open={!!(errors.message && touched.message)}
                    >
                      <textarea
                        className="w-full px-4 py-2 rounded focus:outline-none ring-1 ring-white focus:ring-2 focus:ring-blue-800 transition duration-300"
                        rows={4}
                        placeholder="Enter your message"
                        name="message"
                        id="message"
                        value={values.message}
                        autoComplete="message"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></textarea>
                    </Popover>
                  </div>
                  <button className="mt-4 relative bg-slate-900 h-16 w-full text-center border-2 border-blue-600 text-white text-base font-bold rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:border-blue-800 hover:text-white p-3 before:absolute before:w-10 before:h-10 before:content[''] before:right-2 before:top-2 before:z-10 before:bg-indigo-500 before:rounded-full before:blur-lg before:transition-all before:duration-500 after:absolute after:z-10 after:w-16 after:h-16 after:content[''] after:bg-blue-400 after:right-6 after:top-4 after:rounded-full after:blur-lg after:transition-all after:duration-500 hover:before:right-10 hover:before:-bottom-4 hover:before:blur hover:after:-right-6 hover:after:scale-110">
                    Send Message
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </section>
      </main>
      <footer className="containẻ-custom center-flex p-10 mt-5">
        © {currentYear} - Profile Khangdao0311
      </footer>
    </>
  );
}
