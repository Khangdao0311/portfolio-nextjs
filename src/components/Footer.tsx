import { useMemo } from "react";

function Footer() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="container-custom center-flex p-10 mt-5">
      © {currentYear} - Portfolio Khangdao0311
    </footer>
  );
}

export default Footer;
