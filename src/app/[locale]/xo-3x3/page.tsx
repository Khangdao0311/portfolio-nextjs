import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import XO3x3 from "@/components/demos/xo3x3";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.xo3x3Game");
  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      "tic tac toe",
      "xo game",
      "x o game",
      "xo 3x3",
      "tic tac toe 3x3",
      "xo board game",
      "tic tac toe online",
      "tic tac toe app",
      "simple xo game",
      "classic tic tac toe",
      "free tic tac toe",
      "play xo",
      "trò chơi caro",
      "game caro",
      "caro 3x3",
      "trò chơi x o",
      "game x o đơn giản",
      "trò chơi ô vuông",
      "game giải trí ngắn",
      "game vui đơn giản",
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
