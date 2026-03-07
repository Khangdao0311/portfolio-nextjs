import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import TodoList from "@/components/demos/TodoList";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.todoList");
  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      // Vietnamese
      "todo list",
      "to do list",
      "danh sách công việc",
      "ứng dụng quản lý công việc",
      "ghi chú công việc",
      "quản lý task cá nhân",
      "theo dõi công việc hằng ngày",
      "ứng dụng năng suất",
      "lập kế hoạch công việc",
      "công cụ quản lý nhiệm vụ",

      // English
      "todo list app",
      "task management app",
      "daily planner app",
      "productivity app",
      "task tracker",
      "react todo app",
      "nextjs todo project",
      "typescript todo list",
      "frontend portfolio project",
      "crud application example",
    ],
  };
}

function TodoListPage() {
  return (
    <main className="container-custom px-2.5 xl:px-1">
      <TodoList />
    </main>
  );
}

export default TodoListPage;
