import { useMemo } from "react";
import { useTranslations } from "next-intl";

function Footer() {
  const t = useTranslations("footer");
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="container-custom center-flex p-10 mt-5 text-center">
      {t("text", { year: currentYear })}
    </footer>
  );
}

export default Footer;
