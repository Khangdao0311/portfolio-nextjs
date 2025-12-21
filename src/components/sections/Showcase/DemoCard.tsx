import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

function DemoCard({ demo }: { demo: Demo }) {
  const locale = useLocale();
  return (
    <Link href={`/${locale}${demo.href}`}>
      <div className="w-full flex items-center gap-4 p-2.5 rounded-lg border-2 border-[theme(--primary-light)] shadow-[0_0_5px_theme(--primary-light)] overflow-hidden group select-none hover:scale-110 transition-all duration-300">
        <div className="w-1/4 aspect-square p-2 rounded center-flex relative">
          <Image fill src={demo.image} alt={demo.name} />
        </div>
        <p className="text-2xl sm:text-xl font-bold line-clamp-1 text-[theme(--primary-light)] sm:text-white group-hover:text-[theme(--primary-light)] transition-all duration-300">
          {demo.name}
        </p>
      </div>
    </Link>
  );
}

export default DemoCard;
