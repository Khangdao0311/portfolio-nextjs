import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import TodoList from "@/components/demos/todoList";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.todoList");
  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      "todo list",
      "to-do list",
      "task manager",
      "task list",
      "daily planner",
      "checklist app",
      "todo app",
      "productivity app",
      "task tracker",
      "personal organizer",
      "note and task app",
      "simple todo list",
      "free todo app",
      "ứng dụng ghi chú",
      "ứng dụng việc cần làm",
      "quản lý công việc",
      "danh sách việc cần làm",
      "ứng dụng nhắc việc",
      "trình quản lý nhiệm vụ",
      "lập kế hoạch cá nhân",
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
