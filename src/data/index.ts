import icons from "@/assets/icons";
import images from "@/assets/images";

export const getSkills = (t: (key: string) => string) => [
  {
    icon: icons.html,
    name: t("skillList.html.name"),
    level: t("skillList.html.level"),
  },
  {
    icon: icons.css,
    name: t("skillList.css.name"),
    level: t("skillList.css.level"),
  },
  {
    icon: icons.js,
    name: t("skillList.js.name"),
    level: t("skillList.js.level"),
  },
  {
    icon: icons.ts,
    name: t("skillList.ts.name"),
    level: t("skillList.ts.level"),
  },
  {
    icon: icons.reactjs,
    name: t("skillList.reactjs.name"),
    level: t("skillList.reactjs.level"),
  },
  {
    icon: icons.nextjs,
    name: t("skillList.nextjs.name"),
    level: t("skillList.nextjs.level"),
  },
  {
    icon: icons.nodejs,
    name: t("skillList.expressjs.name"),
    level: t("skillList.expressjs.level"),
  },
  {
    icon: icons.mongodb,
    name: t("skillList.mongodb.name"),
    level: t("skillList.mongodb.level"),
  },
  {
    icon: icons.tailwindcss,
    name: t("skillList.tailwindcss.name"),
    level: t("skillList.tailwindcss.level"),
  },
  {
    icon: icons.github,
    name: t("skillList.github.name"),
    level: t("skillList.github.level"),
  },
  {
    icon: icons.figma,
    name: t("skillList.figma.name"),
    level: t("skillList.figma.level"),
  },
];

export const getProjects = (t: (key: string) => string) => [
  {
    image: images.elecking,
    gallery: [
      images.elecking,
      images.elecking1,
      images.elecking2,
      images.elecking3,
      images.elecking4,
      images.elecking5,
      images.elecking6,
      images.elecking7,
      images.elecking8,
      images.elecking9,
      images.elecking10,
      images.elecking11,
      images.elecking12,
      images.elecking13,
      images.elecking14,
      images.elecking15,
      images.elecking16,
      images.elecking17,
      images.elecking18,
      images.elecking19,
      images.elecking20,
      images.elecking21,
      images.elecking22,
      images.elecking23,
      images.elecking24,
      images.elecking25,
      images.elecking26,
      images.elecking27,
      images.elecking28,
      images.elecking29,
      images.elecking30,
      images.elecking31,
      images.elecking32,
      images.elecking33,
      images.elecking34,
      images.elecking35,
      images.elecking36,
      images.elecking37,
    ],
    name: t("projectList.elecking.name"),
    description: t("projectList.elecking.description"),
    href: "https://drive.google.com/drive/folders/1bxCf7-tPVTShcKCbEmHsKIosJrjkWbw7?usp=drive_link",
    technologies: ["NextJS", "TailwindCSS", "NodeJS (ExpressJS)", "MongoDB"],
  },
  {
    image: images.portfolio,
    gallery: [images.portfolio],
    name: t("projectList.portfolio.name"),
    description: t("projectList.portfolio.description"),
    href: "https://khangdao0311-portfolio.vercel.app/",
    technologies: ["NextJS", "TailwindCSS"],
  },
  {
    image: images.cellphones,
    gallery: [images.cellphones],
    name: t("projectList.cellphones.name"),
    description: t("projectList.cellphones.description"),
    href: "https://github.com/khangdao0311",
    technologies: ["NextJS", "NodeJS (ExpressJS)", "MongoDB"],
  },
  {
    image: images.chatApp,
    gallery: [images.chatApp],
    name: t("projectList.chatApp.name"),
    description: t("projectList.chatApp.description"),
    href: "https://chat-app-0311.vercel.app/",
    technologies: ["NextJS", "TailwindCSS", "Firebase"],
  },
];

export const getDemos = (t: (key: string) => string) => [
  {
    image: images.calculator,
    name: t("demoList.calculator.name"),
    link: "/calculator",
  },
  {
    image: images.xo3x3,
    name: t("demoList.xo3x3.name"),
    link: "/xo-3x3",
  },
  {
    image: images.todolist,
    name: t("demoList.todolist.name"),
    link: "/todo-list",
  },
];
