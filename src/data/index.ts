import Icons from "@/assets/Icon";
import images from "@/assets/image";

export const skills = [
  { icon: Icons.html, name: "HTML", level: "advanced" },
  { icon: Icons.css, name: "CSS", level: "advanced" },
  { icon: Icons.js, name: "JavaScript", level: "advanced" },
  { icon: Icons.ts, name: "TypeScript", level: "intermediate" },
  { icon: Icons.reactjs, name: "ReactJS", level: "intermediate" },
  { icon: Icons.nextjs, name: "NextJS", level: "intermediate" },
  { icon: Icons.nodejs, name: "ExpressJS", level: "intermediate" },
  { icon: Icons.mongodb, name: "MongoDB", level: "intermediate" },
  { icon: Icons.tailwindcss, name: "Tailwind CSS", level: "intermediate" },
  { icon: Icons.github, name: "GitHub", level: "intermediate" },
];

export const projects = [
  {
    image: images.portfolio,
    name: "My Portfolio",
    description:
      "The website introduces me, my professional skills, frameworks, experiences as well as my team and personal projects.",
    href: "https://khangdao0311-portfolio.vercel.app/",
    technologies: ["NextJS", "TailwindCSS"],
  },
  {
    image: images.elecking,
    name: "Elecking website",
    description:
      "This is an e-commerce website specializing in selling electronic products, fully integrating features such as searching, filtering, sorting products, shopping cart and online payment via VNPAY. <br/> Users can register, log in, recover passwords, update personal information, address and password, and are assigned permissions according to roles to ensure security. The system supports order management, applying discount codes and tracking delivery status. <br/> The administrator (Admin) has access to the monthly and yearly statistical dashboard, and performs management operations (CRUD) on data tables such as products, orders, categories, users, brands, etc. to ensure effective system operation and management.",
    href: "https://github.com/khangdao0311",
    technologies: ["NextJS", "TailwindCSS", "NodeJS (ExpressJS)", "MongoDB"],
  },
  {
    image: images.cellphones,
    name: "Cellphones - Clone",
    description:
      "Website design and development based on CellphoneS interface, integrating features such as search, filter, product sorting, shopping cart management, login, registration, password recovery and administration system with full CRUD functionality",
    href: "https://github.com/khangdao0311",
    technologies: ["NextJS", "NodeJS (ExpressJS)", "MongoDB"],
  },
  {
    image: images.chatApp,
    name: "Chat App",
    description:
      "Real-time chat app using Firebase, integrated with Google, login with Facebook, create chat rooms and invite others to the room.",
    href: "https://chat-app-0311.vercel.app/",
    technologies: ["NextJS", "TailwindCSS", "Firebase"],
  },
];
