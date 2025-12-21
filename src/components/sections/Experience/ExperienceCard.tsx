import { MdBusinessCenter } from "react-icons/md";

function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <div className="m-0 lg:mx-4 p-4 flex flex-col gap-4 border-1 rounded-lg border-[theme(--primary-light)]">
      <div className="flex gap-4">
        <div className="w-12 h-12 rounded-full bg-[theme(--primary-light)]/20 center-flex">
          <MdBusinessCenter className="text-[theme(--primary-light)] w-1/2 h-1/2" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="!text-start font-bold text-white text-lg">
            {experience.position}
          </p>
          <span className="!text-start text-sm font-bold text-gray-300">
            {experience.company}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {experience.description.map((desc, index) => (
          <div
            key={index}
            className="text-gray-200 font-light text-sm text-justify"
          >
            {desc}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        {/*  */}
        {experience.projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col gap-1 p-2 border-1 border-[theme(--primary-light)] rounded"
          >
            <div className="flex flex-col gap-0">
              <p className="font-bold text-lg text-start text-[theme(--primary-light)]">
                {project.name}
              </p>
              <span className="text-xs text-start font-bold text-gray-300">
                {project.position}
              </span>
            </div>
            <div className="text-justify text-sm text-gray-200">
              {project.description}
            </div>
            <div className="flex items-start flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="px-2 py-1 text-white text-xs font-bold rounded border border-[theme(--primary-light)]"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        ))}
        {/*  */}
      </div>
    </div>
    // </div>
  );
}

export default ExperienceCard;
