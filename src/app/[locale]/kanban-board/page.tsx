import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import KanbanBoard from "@/components/demos/KanbanBoard";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.kanbanBoard");
  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      // Vietnamese
      "kanban board",
      "bảng kanban",
      "bảng quản lý công việc",
      "quản lý công việc trực quan",
      "ứng dụng quản lý task",
      "quản lý dự án cá nhân",
      "bảng công việc kéo thả",
      "to do list nâng cao",
      "theo dõi tiến độ công việc",
      "phần mềm quản lý công việc",

      // English
      "kanban board app",
      "task management app",
      "project management tool",
      "drag and drop kanban",
      "trello clone",
      "productivity app",
      "workflow management",
      "agile task board",
      "react kanban board",
      "nextjs kanban project",
    ],
  };
}

function KanbanBoardPage() {
  return (
    <main className="container-custom px-2.5 xl:px-1">
      <KanbanBoard />
    </main>
  );
}

export default KanbanBoardPage;
