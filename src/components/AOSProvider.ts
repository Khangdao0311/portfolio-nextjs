"use client";
import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";

export default function AOSProvider() {
  useEffect(() => {
    AOS.init({
      disable: () => window.innerWidth < 1024,
      duration: 1000,
      once: true,
    });
  }, []);

  return null;
}
