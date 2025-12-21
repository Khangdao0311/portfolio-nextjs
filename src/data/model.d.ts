interface Experience {
  time: string;
  position: string;
  company: string;
  description: string[];
  projects: {
    name: string;
    position: string;
    description: string;
    technologies: string[];
  }[];
}

interface Project {
  name: string;
  description: string;
  image: string;
  href: string;
  technologies: string[];
  gallery: { src: string; alt: string }[];
}

interface Demo {
  name: string;
  href: string;
  image: string;
}

interface Skill {
  name: string;
  level: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface SectionProps {
  id: string;
  children: ReactNode;
}
