import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import XO3x3 from "@/components/demos/XO3x3";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.xo3x3Game");
  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      // Vietnamese
      "xo 3x3",
      "cờ caro 3x3",
      "game xo",
      "trò chơi xo",
      "tic tac toe",
      "game cờ caro online",
      "game hai người",
      "trò chơi logic đơn giản",
      "game javascript",
      "game frontend project",

      // English
      "tic tac toe game",
      "tic tac toe 3x3",
      "react tic tac toe",
      "nextjs game project",
      "javascript game logic",
      "two player game",
      "frontend mini game",
      "game state management",
      "algorithm based game",
      "portfolio game project",
    ],
  };
}

function XO3x3Page() {
  return (
    <main className="container-custom px-2.5 xl:px-1">
      <XO3x3 />
    </main>
  );
}

export default XO3x3Page;
