"use client";
import { useCallback, useMemo } from "react";
import { Popover } from "antd";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { IoMail } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaGithub, FaPhone } from "react-icons/fa6";

import { useNotiContext } from "@/context/NotiProvider";
import { useTranslations } from "next-intl";

function Contact() {
  const { setLoading, setNotification } = useNotiContext()!;
  const t = useTranslations("contact");

  const validationSchema = useMemo(
    () =>
      Yup.object().shape({
        name: Yup.string()
          .matches(
            /^([A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚÝĂĐĨŨƠƯỲỴÝỶỸẰẮẲẴẶẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆÔỒỐỔỖỘƠỜỚỞỠỢƯỪỨỬỮỰ]+[a-zàáâãèéêìíòóôõùúýăđĩũơưỳỵỷỹằắẳẵặấầẩẫậèéẹẻẽêềếểễệôồốổỗộơờớởỡợưừứửữự]+(?:\s+)?)+$/,
            t("matchesName")
          )
          .required(t("requiredName")),

        email: Yup.string()
          .email(t("matchesEmail"))
          .required(t("requiredEmail")),
        message: Yup.string().required(t("requiredMessage")),
      }),
    []
  );

  const handleSubmit = useCallback(
    (values: any, { resetForm }: { resetForm: () => void }) => {
      setLoading(true);
      fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "Khangdao0311@gmail.com",
          subject: "Contact from Portfolio",
          html: `<main>
                <p>Name: ${values.name}</p>
                <p>Email: ${values.email}</p>
                <p>Message: ${values.message}</p>
              </main>`,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          setLoading(false);
          setNotification({
            status: true,
            message: t("notiSuccess"),
          });
          resetForm();
        })
        .catch((err) => {
          setLoading(false);
          setNotification({
            status: false,
            message: t("notiError"),
          });
        })
        .finally(() => {
          setTimeout(() => {
            setNotification({ status: null, message: "" });
          }, 2500);
        });
    },
    []
  );

  return (
    <section
      id="contact"
      className="min-h-screen center-flex flex-col lg:flex-row gap-20 pt-20"
    >
      <div data-aos="fade-right" className=" flex flex-col gap-10">
        <h2 className="text-4xl font-bold">{t("profile")}</h2>
        <div className="flex flex-col gap-10">
          <div className="flex gap-10 items-center">
            <IoMail className="w-10 h-10" />
            <span className="text-xl font-bold ">khangdao0311@gmail.com</span>
          </div>
          <div className="flex gap-10 items-center">
            <FaPhone className="w-10 h-10" />
            <span className="text-xl font-bold ">0976 382 553</span>
          </div>
          <div className="flex gap-10 items-center">
            <FaMapMarkerAlt className="w-10 h-10" />
            <span className="text-xl font-bold ">{t("address")}</span>
          </div>
          <a
            href="https://github.com/Khangdao0311"
            className="flex gap-10 items-center"
          >
            <FaGithub className="w-10 h-10" />
            <span className="text-xl font-bold ">github.com/khangdao0311</span>
          </a>
        </div>
      </div>
      <div
        data-aos="zoom-in-down"
        className="w-full max-w-[500px] p-6 sm:p-10 border-4 border-blue-800 shadow-[0_0_10px_#FFF] rounded-xl bg-white/5"
      >
        <h2 className="text-3xl font-semibold text-white mb-4 text-center">
          {t("contactMe")}
        </h2>
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
                  {t("yourName")}
                </label>
                <Popover
                  placement="bottom"
                  content={
                    <div className="text-red-500 text-sm font-semibold">
                      {errors.name}
                    </div>
                  }
                  open={!!(errors.name && touched.name)}
                >
                  <input
                    className="w-full px-4 py-2 rounded focus:outline-none ring-1 ring-white focus:ring-2 focus:ring-blue-800 transition duration-300"
                    placeholder={t("placeholderName")}
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
                  {t("yourEmail")}
                </label>
                <Popover
                  placement="bottom"
                  content={
                    <div className="text-red-500 text-sm font-semibold">
                      {errors.email}
                    </div>
                  }
                  open={!!(errors.email && touched.email)}
                >
                  <input
                    className="w-full px-4 py-2 rounded focus:outline-none ring-1 ring-white focus:ring-2 focus:ring-blue-800 transition duration-300"
                    placeholder={t("placeholderEmail")}
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
                  {t("yourMessage")}
                </label>
                <Popover
                  placement="bottom"
                  content={
                    <div className="text-red-500 text-sm font-semibold">
                      {errors.message}
                    </div>
                  }
                  open={!!(errors.message && touched.message)}
                >
                  <textarea
                    className="w-full px-4 py-2 rounded focus:outline-none ring-1 ring-white focus:ring-2 focus:ring-blue-800 transition duration-300"
                    rows={4}
                    placeholder={t("placeholderMessage")}
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
                {t("sendMessage")}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}

export default Contact;
