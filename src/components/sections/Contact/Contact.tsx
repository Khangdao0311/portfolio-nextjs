"use client";
import { useCallback, useMemo } from "react";
import { useTranslations } from "next-intl";
import { Popover } from "antd";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { IoMail } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaPhone } from "react-icons/fa6";

import { useNotiContext } from "@/context/NotiProvider";
import { openNewTab } from "@/utils/openNewTab";
import Section from "../Section";
import icons from "@/assets/icons";


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
          html: ` <main style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; background-color: #f8f9fa; padding: 20px; border-radius: 8px; border: 1px solid #ddd;">
                    <h2 style="color: #333; text-align: center; margin-bottom: 20px;">New Portfolio Contact</h2>
                    <div style="background: #fff; padding: 15px 20px; border-radius: 6px; border: 1px solid #eee;">
                      <p style="margin: 0 0 10px;"><strong>Name:</strong> ${values.name}</p>
                      <p style="margin: 0 0 10px;"><strong>Email:</strong> ${values.email}</p>
                      <p style="margin: 0;"><strong>Message:</strong></p>
                      <p style="background: #f1f1f1; padding: 10px; border-radius: 5px; white-space: pre-wrap;">${values.message}</p>
                    </div>
                    <footer style="margin-top: 20px; font-size: 12px; color: #000; text-align: center;">
                      This message was sent from your portfolio contact form.
                    </footer>
                  </main>`,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          setLoading(false);
          setNotification({
            status: "success",
            message: t("notiSuccess"),
          });
          resetForm();
        })
        .catch((err) => {
          setLoading(false);
          setNotification({
            status: "error",
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
    <Section id="contact">
      <div className="pt-20 w-full min-h-screen flex flex-col gap-10">
        <div data-aos="zoom-in" className="w-full center-flex flex-col gap-4">
          <h2 className="text-4xl font-bold border-b-2 w-full text-center py-4 border-[theme(--primary-light)]">
            {t("title")}
          </h2>
          <p className="w-full lg:w-2/3 text-base text-center">
            {t("description")}
          </p>
        </div>
        {/*  */}
        <div
          data-aos="zoom-in-down"
          className=" grid grid-cols-1 lg:grid-cols-3 gap-4 border border-[theme(--primary-light)] rounded-lg p-4"
        >
          <div className="flex items-center gap-2 ">
            <div className="center-flex w-12 h-12 shrink-0 rounded-full bg-[theme(--primary-light)]/20">
              <IoMail className="w-1/2 h-1/2 text-[theme(--primary-light)]" />
            </div>
            <div className="flex flex-col justify-around">
              <p className="text-sm font-black text-[theme(--primary-light)]">
                {t("email")}
              </p>
              <p className="text-base font-medium text-white text-wrap break-all">
                khangdao0311@gmail.com
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 cursor-pointer">
            <div className="center-flex w-12 h-12 shrink-0 rounded-full bg-[theme(--primary-light)]/20">
              <FaPhone className="w-1/2 h-1/2 text-[theme(--primary-light)]" />
            </div>
            <div className="flex flex-col justify-around">
              <p className="text-sm font-black text-[theme(--primary-light)]">
                {t("phone")}
              </p>
              <p className="text-base font-medium text-white text-wrap break-all">
                0976 382 553
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 cursor-pointer">
            <div className="center-flex w-12 h-12 shrink-0 rounded-full bg-[theme(--primary-light)]/20">
              <FaMapMarkerAlt className="w-1/2 h-1/2 text-[theme(--primary-light)]" />
            </div>
            <div className="flex flex-col justify-around">
              <p className="text-sm font-black text-[theme(--primary-light)]">
                {t("address")}
              </p>
              <p className="text-base font-medium text-white text-wrap break-all">
                {t("myAddress")}
              </p>
            </div>
          </div>
          <div
            onClick={() => openNewTab("https://github.com/Khangdao0311")}
            className="flex items-center gap-4 cursor-pointer"
          >
            <div className="center-flex w-12 h-12 shrink-0 rounded-full bg-[theme(--primary-light)]/20 cursor-pointer">
              <FaGithub className="w-1/2 h-1/2 text-[theme(--primary-light)]" />
            </div>
            <div className="flex flex-col justify-around">
              <p className="text-sm font-black text-[theme(--primary-light)]">
                GitHub
              </p>
              <p className="text-base font-medium text-white ">
                github.com/khangdao0311
              </p>
            </div>
          </div>
          <div
            onClick={() =>
              openNewTab("https://www.linkedin.com/in/khangdao0311")
            }
            className="flex items-center gap-4 cursor-pointer"
          >
            <div className="center-flex w-12 h-12 shrink-0 rounded-full bg-[theme(--primary-light)]/20 cursor-pointer">
              <FaLinkedinIn className="w-1/2 h-1/2 text-[theme(--primary-light)]" />
            </div>
            <div className="flex flex-col justify-around">
              <p className="text-sm font-black text-[theme(--primary-light)]">
                LinkedIn
              </p>
              <p className="text-base font-medium text-white ">
                linkedin.com/in/khangdao0311
              </p>
            </div>
          </div>
          <div
            onClick={() => openNewTab("https://www.facebook.com/khangdao0311")}
            className="flex items-center gap-4 cursor-pointer"
          >
            <div className="center-flex w-12 h-12 shrink-0 rounded-full bg-[theme(--primary-light)]/20">
              <FaFacebookF className="w-1/2 h-1/2 text-[theme(--primary-light)]" />
            </div>
            <div className="flex flex-col justify-around">
              <p className="text-sm font-black text-[theme(--primary-light)]">
                facebook
              </p>
              <p className="text-base font-medium text-white ">
                facebook.com/khangdao0311
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex items-center justify-around flex-col-reverse lg:flex-row gap-10">
          <div data-aos="zoom-in-right" className="w-full lg:w-2/5 center-flex">
            <icons.contact className="w-full h-auto" />
          </div>
          <div
            data-aos="zoom-in-left"
            className="w-full max-w-[512px] p-6 sm:p-10 border-2 border-[theme(--primary-light)] rounded-lg"
          >
            <h2 className="text-3xl font-semibold text-white mb-4 text-center">
              {t("title")}
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
        </div>
      </div>
    </Section>
  );
}

export default Contact;
