import Icons from "@/assets/Icon";
import images from "@/assets/image";

export const skills = [
  { icon: Icons.html, name: "HTML", level: "advanced" },
  { icon: Icons.css, name: "CSS", level: "advanced" },
  { icon: Icons.js, name: "JavaScript", level: "advanced" },
  { icon: Icons.ts, name: "TypeScript", level: "intermediate" },
  { icon: Icons.reactjs, name: "ReactJS", level: "intermediate" },
  { icon: Icons.nextjs, name: "NextJS", level: "intermediate" },
  { icon: Icons.nodejs, name: "NodeJS", level: "intermediate" },
  { icon: Icons.mongodb, name: "MongoDB", level: "intermediate" },
  { icon: Icons.tailwindcss, name: "Tailwind CSS", level: "intermediate" },
  { icon: Icons.githup, name: "GitHub", level: "intermediate" },
];

export const projects = [
  {
    image: images.portfolio,
    name: "My Portfolio",
    description:
      "Website to introduce yourself, your professional skills, group projects and your staff.",
    href: "https://khangdao0311-portfolio.vercel.app/",
    technologies: ["NextJS", "TailwindCSS"],
  },
  {
    image: images.elecking,
    name: "Elecking website",
    description:
      "Is a website selling electronic products, supporting tools such as search, filter, sort, shopping cart and payment with integrated Vnpay, register login, forgot password, change information, address, order management, CRUD admin, dashboard, responsive,...",
    href: "https://github.com/khangdao0311",
    technologies: ["NextJS", "TailwindCSS", "NodeJS", "MongoDB"],
  },
  {
    image: images.cellphones,
    name: "Cellphones - Clone",
    description:
      "Clone website, implement search, filter, sort, cart, login login, forgot password, CRUD admin functions, using nextjs and nodejs expressjs technology",
    href: "https://github.com/khangdao0311",
    technologies: ["NextJS", "NodeJS", "MongoDB"],
  },
  {
    image: images.chatApp,
    name: "Chat App",
    description:
      "demo a real time chat application using firebase, integrated login with google, facebook",
    href: "https://chat-app-0311.vercel.app/",
    technologies: ["NextJS", "TailwindCSS", "Frirebase"],
  },
];
