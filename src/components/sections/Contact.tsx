"use client";
import { useCallback, useMemo } from "react";
import { Popover } from "antd";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { IoMail } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaGithub, FaPhone } from "react-icons/fa6";
import { useTranslations } from "next-intl";

import { useNotiContext } from "@/context/NotiProvider";

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
      <div className=" flex flex-col gap-10">
        <h2
          data-aos="fade-right"
          data-aos-duration="400"
          className="text-4xl font-bold"
        >
          {t("profile")}
        </h2>
        <div className="flex flex-col gap-10">
          <div
            data-aos="fade-right"
            data-aos-duration="500"
            className="flex gap-10 items-center"
          >
            <IoMail className="w-10 h-10" />
            <span className="text-xl font-bold ">khangdao0311@gmail.com</span>
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="600"
            className="flex gap-10 items-center"
          >
            <FaPhone className="w-10 h-10" />
            <span className="text-xl font-bold ">0976 382 553</span>
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="700"
            className="flex gap-10 items-center"
          >
            <FaMapMarkerAlt className="w-10 h-10" />
            <span className="text-xl font-bold ">{t("address")}</span>
          </div>
          <a
            data-aos="fade-right"
            data-aos-duration="800"
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
        className="w-full max-w-[500px] p-6 sm:p-10 border-2 border-[theme(--primary-light)] rounded-xl"
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
                    className="w-full px-4 py-2 rounded focus:outline-none ring-1 ring-white focus:ring-2 focus:ring-[theme(--primary-light)] transition duration-300"
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
                    className="w-full px-4 py-2 rounded focus:outline-none ring-1 ring-white focus:ring-2 focus:ring-[theme(--primary-light)] transition duration-300"
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
                    className="w-full px-4 py-2 rounded focus:outline-none ring-1 ring-white focus:ring-2 focus:ring-[theme(--primary-light)] transition duration-300"
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
              <button className="w-full center-flex gap-2 text-2xl font-bold text-nowrap py-4 rounded-lg bg-transparent hover:bg-[theme(--primary-light)] text-white hover:text-[theme(--primary-dark)] border-2 border-[theme(--primary-light)] transition-all hover:scale-105 duration-300">
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
