"use client";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Popover } from "antd";

export default function TodoList() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [selectedTasks, setSelectedTasks] = useState<Set<number>>(new Set());
  const t = useTranslations("todolist");

  const addTask = (values: any, { resetForm }: { resetForm: () => void }) => {
    if (!values.task.trim()) return;
    setTasks([...tasks, values.task]);
    resetForm();
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
    setSelectedTasks((prev) => {
      const copy = new Set(prev);
      copy.delete(index);
      return new Set([...copy].map((i) => (i > index ? i - 1 : i)));
    });
  };

  const deleteSelectedTasks = () => {
    const newTasks = tasks.filter((_, i) => !selectedTasks.has(i));
    setTasks(newTasks);
    setSelectedTasks(new Set());
  };

  const toggleTask = (index: number) => {
    setSelectedTasks((prev) => {
      const copy = new Set(prev);
      copy.has(index) ? copy.delete(index) : copy.add(index);
      return copy;
    });
  };

  const toggleSelectAll = () => {
    if (selectedTasks.size === tasks.length) {
      setSelectedTasks(new Set());
    } else {
      setSelectedTasks(new Set(tasks.map((_, i) => i)));
    }
  };

  const validationSchema = useMemo(
    () =>
      Yup.object().shape({
        task: Yup.string().required(t("taskRequired")),
      }),
    []
  );

  return (
    <section className="h-screen center-flex pt-20 pb-4">
      <div className="max-w-[500px] w-[95%] h-full p-4 rounded-lg flex flex-col gap-4 border border-[theme(--primary-light)]">
        <h1 className="text-3xl w-full text-center font-bold">{t("title")}</h1>
        <Formik
          initialValues={{
            task: "",
          }}
          validationSchema={validationSchema}
          onSubmit={addTask}
        >
          {({ values, errors, touched, handleChange, handleBlur }) => (
            <Form className="w-full flex gap-2">
              <Popover
                placement="bottom"
                content={
                  <div className="text-red-500 text-sm font-semibold">
                    {errors.task}
                  </div>
                }
                open={!!(errors.task && touched.task)}
              >
                <input
                  name="task"
                  value={values.task}
                  type="text"
                  className="border border-gray-700 flex-1 px-4 py-2.5 rounded"
                  placeholder={t("taskPlaceholder")}
                  autoComplete="task"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Popover>

              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                {t("add")}
              </button>
            </Form>
          )}
        </Formik>

        <div className="border border-gray-700 rounded w-full flex flex-col flex-1 overflow-hidden">
          {tasks.length > 0 && (
            <div className="flex items-center gap-2 p-4 bg-gray-700">
              <input
                type="checkbox"
                checked={
                  tasks.length > 0 && selectedTasks.size === tasks.length
                }
                onChange={toggleSelectAll}
                className="w-5 aspect-square accent-[theme(--primary-light)]"
              />
              <p className="flex-1 px-2.5">{t("task")}</p>
              {selectedTasks.size > 0 && (
                <em
                  className="text-sm font-light underline text-gray-400 hover:text-gray-100 cursor-pointer transition-all duration-100"
                  onClick={deleteSelectedTasks}
                >
                  {t("deleteSelectedTasks")}
                </em>
              )}
            </div>
          )}

          <ul className="w-full flex h-full flex-col divide-y divide-gray-700 overflow-y-auto scroll-visible p-1.5">
            {tasks.length === 0 && (
              <li className="text-white center-flex h-full">{t("noTasks")}</li>
            )}
            {tasks.map((task, index) => (
              <motion.li
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                key={index}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2 px-2 py-2.5"
              >
                <input
                  className="w-5 aspect-square accent-[theme(--primary-light)]"
                  type="checkbox"
                  checked={selectedTasks.has(index)}
                  onChange={() => toggleTask(index)}
                />
                <label
                  htmlFor={task + index}
                  className="flex-1 overflow-hidden"
                >
                  <span className="w-full line-clamp-1 overflow-hidden px-2.5">
                    {task}
                  </span>
                </label>
                <button
                  onClick={() => deleteTask(index)}
                  className="text-red-500 hover:text-red-400 hover:underline"
                >
                  {t("deleteTask")}
                </button>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
