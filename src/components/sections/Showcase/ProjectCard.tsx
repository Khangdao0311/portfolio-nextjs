import { Image, Popover } from "antd";

import { openNewTab } from "@/utils/openNewTab";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="overflow-hidden relative p-4 rounded-xl group bg-[#111] lg:bg-transparent border border-[theme(--primary-light)] shadow-[0_0_5px_theme(--primary-light)] h-full hover:scale-105 transition-all duration-300">
      <div className="relative z-20 flex flex-col gap-2.5 ">
        <Image.PreviewGroup items={project.gallery}>
          <Image
            className="w-full aspect-square relative overflow-hidden rounded-md object-contain"
            src={project.image}
            alt={project.name}
          />
        </Image.PreviewGroup>
        <div
          onClick={() => openNewTab(project.href)}
          className="text-lg font-bold line-clamp-2 cursor-pointer text-[theme(--primary-light)] hover:text-[theme(--secondary)] transition-all duration-300"
        >
          {project.name}
        </div>
        <Popover
          placement="top"
          content={
            <div className="w-[300px]">
              <div
                onClick={() => openNewTab(project.href)}
                className="text-lg font-bold text-[theme(--primary-dark)] hover:text-[theme(--secondary)] transition-all duration-300 cursor-pointer"
              >
                {project.name}
              </div>
              <p
                className="text-justify overflow-y-auto max-h-[245px] scroll-visible"
                dangerouslySetInnerHTML={{
                  __html: project.description,
                }}
              />
            </div>
          }
        >
          <p className="text-base  line-clamp-3 font-light text-white cursor-pointer ">
            {project.description}
          </p>
        </Popover>
        <div className="w-full flex gap-2 flex-wrap">
          {project.technologies.map((t: string, iT: number) => (
            <p
              key={iT}
              className="px-2 py-1 text-xs font-bold rounded border border-[theme(--primary-light)]"
            >
              {t}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
