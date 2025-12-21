import icons from "@/assets/icons";
import images from "@/assets/images";

export const getSkills = (t: (key: string) => any) => [
  {
    icon: icons.html,
    name: t("showcaseList.html.name"),
    level: t("showcaseList.html.level"),
  },
  {
    icon: icons.css,
    name: t("showcaseList.css.name"),
    level: t("showcaseList.css.level"),
  },
  {
    icon: icons.js,
    name: t("showcaseList.js.name"),
    level: t("showcaseList.js.level"),
  },
  {
    icon: icons.ts,
    name: t("showcaseList.ts.name"),
    level: t("showcaseList.ts.level"),
  },
  {
    icon: icons.reactjs,
    name: t("showcaseList.reactjs.name"),
    level: t("showcaseList.reactjs.level"),
  },
  {
    icon: icons.nextjs,
    name: t("showcaseList.nextjs.name"),
    level: t("showcaseList.nextjs.level"),
  },
  {
    icon: icons.nodejs,
    name: t("showcaseList.expressjs.name"),
    level: t("showcaseList.expressjs.level"),
  },
  {
    icon: icons.mongodb,
    name: t("showcaseList.mongodb.name"),
    level: t("showcaseList.mongodb.level"),
  },
  {
    icon: icons.tailwindcss,
    name: t("showcaseList.tailwindcss.name"),
    level: t("showcaseList.tailwindcss.level"),
  },
  {
    icon: icons.github,
    name: t("showcaseList.github.name"),
    level: t("showcaseList.github.level"),
  },
  {
    icon: icons.figma,
    name: t("showcaseList.figma.name"),
    level: t("showcaseList.figma.level"),
  },
];

export const getProjects = (t: (key: string) => any) => [
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
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Node.js (Express.js)",
      "MongoDB",
    ],
  },
  {
    image: images.portfolio,
    gallery: [images.portfolio],
    name: t("projectList.portfolio.name"),
    description: t("projectList.portfolio.description"),
    href: "https://khangdao0311-portfolio.vercel.app/",
    technologies: ["Next.js", "Tailwind CSS"],
  },
  {
    image: images.cellphones,
    gallery: [images.cellphones],
    name: t("projectList.cellphones.name"),
    description: t("projectList.cellphones.description"),
    href: "https://github.com/khangdao0311",
    technologies: ["Next.js", "Node.js (Express.js)", "MongoDB"],
  },
  {
    image: images.chatApp,
    gallery: [images.chatApp],
    name: t("projectList.chatApp.name"),
    description: t("projectList.chatApp.description"),
    href: "https://chat-app-0311.vercel.app/",
    technologies: ["Next.js", "Tailwind CSS", "Firebase"],
  },
];

export const getDemos = (t: (key: string) => any) => [
  {
    image: images.calculator,
    name: t("demoList.calculator.name"),
    href: "/calculator",
  },
  {
    image: images.xo3x3,
    name: t("demoList.xo3x3.name"),
    href: "/xo-3x3",
  },
  {
    image: images.todolist,
    name: t("demoList.todolist.name"),
    href: "/todo-list",
  },
];

export const getNavItems = (t: (key: string) => any) => [
  {
    name: t("home"),
    id: `home`,
  },
  {
    name: t("about"),
    id: `about`,
  },
  {
    name: t("showcase"),
    id: `showcase`,
  },
  {
    name: t("experience"),
    id: `experience`,
  },
  {
    name: t("education"),
    id: `education`,
  },
  {
    name: t("contact"),
    id: `contact`,
  },
];

export const getExperiences = (t: (key: string) => any) => [
  {
    time: t("workStages.tinviet.time"),
    position: t("workStages.tinviet.position"),
    company: t("workStages.tinviet.company"),
    description: [
      t("workStages.tinviet.description.text-1"),
      t("workStages.tinviet.description.text-2"),
      t("workStages.tinviet.description.text-3"),
    ],
    projects: [
      {
        name: t("workStages.tinviet.projects.vieclamsanxuat.name"),
        position: t("workStages.tinviet.projects.vieclamsanxuat.position"),
        description: t(
          "workStages.tinviet.projects.vieclamsanxuat.description"
        ),
        technologies: ["React.js", "Tailwind CSS", "Bootstrap", "Ant Design"],
      },
    ],
  },
  {
    time: t("workStages.dxdlabs.time"),
    position: t("workStages.dxdlabs.position"),
    company: t("workStages.dxdlabs.company"),
    description: [
      t("workStages.dxdlabs.description.text-1"),
      t("workStages.dxdlabs.description.text-2"),
    ],
    projects: [
      {
        name: t("workStages.dxdlabs.projects.luxdao.name"),
        position: t("workStages.dxdlabs.projects.luxdao.position"),
        description: t("workStages.dxdlabs.projects.luxdao.description"),
        technologies: ["React.js", "SCSS", "Ant Design"],
      },
      {
        name: t("workStages.dxdlabs.projects.vangxanh.name"),
        position: t("workStages.dxdlabs.projects.vangxanh.position"),
        description: t("workStages.dxdlabs.projects.vangxanh.description"),
        technologies: ["Next.js", "SCSS", "Ant Design"],
      },
    ],
  },
];
