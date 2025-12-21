"use client";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";

import type { RootState } from "@/redux";
import { setActiveSection } from "@/redux/slices/activeSection";

export default function Section({ id, children }: SectionProps) {
  const dispatch = useDispatch();
  const activeId = useSelector((state: RootState) => state.activeSection.id);

  const { ref, inView } = useInView({
    rootMargin: "-50% 0px -50% 0px",
    threshold: 0,
  });

  useEffect(() => {
    if (inView && activeId !== id) {
      dispatch(setActiveSection(id));
    }
  }, [inView, activeId, id, dispatch]);

  return (
    <section ref={ref} id={id} className="min-h-screen">
      {children}
    </section>
  );
}
