function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="relative z-20 flex px-4 py-3 gap-4 items-center justify-center w-full h-full rounded-lg border-2 border-[theme(--primary-light)] shadow-[0_0_5px_theme(--primary-light)] overflow-hidden group select-none hover:scale-110 transition-all duration-300">
      <div className="z-20 w-1/4 shrink-0 aspect-square rounded-lg flex items-center justify-center transition-all duration-300 border-2 border-transparent group-hover:border-[theme(--primary-light)]">
        <skill.icon className="w-[90%] shrink-0" />
      </div>
      <div className="z-20 w-full h-full relative flex flex-col transition-all overflow-hidden">
        <p className="absolute left-0 top-1/2 -translate-y-full sm:-translate-y-1/2 group-hover:-translate-y-full text-[theme(--primary-light)] sm:text-white group-hover:text-[theme(--primary-light)] transition-all duration-300 text-2xl sm:text-xl font-bold line-clamp-1">
          {skill.name}
        </p>
        <p className="absolute left-0 top-1/2 sm:top-full group-hover:top-1/2 transition-all duration-500 text-base sm:text-md font-medium line-clamp-1">
          {skill.level}
        </p>
      </div>
    </div>
  );
}

export default SkillCard;
