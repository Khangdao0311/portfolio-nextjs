import { useMemo } from "react";

function Footer() {
  const currentYear = useMemo(() => {
    return new Date().getFullYear();
  }, []);

  return (
    <footer className="container-custom center-flex p-10 mt-5">
      © {currentYear} - Portfilio Khangdao0311
    </footer>
  );
}

export default Footer;
