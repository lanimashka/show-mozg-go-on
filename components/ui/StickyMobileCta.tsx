"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { paymentHref } from "@/data/event";

export function StickyMobileCta() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.78, 0.86], [0, 1, 1, 0]);

  return (
    <motion.a
      href={paymentHref}
      style={{ opacity }}
      className="fixed inset-x-4 bottom-4 z-50 flex items-center justify-center rounded-full bg-[linear-gradient(100deg,#F205CB,#EE05F2_40%,#05C7F2)] px-6 py-4 text-sm font-extrabold text-white shadow-[0_0_50px_rgba(242,5,203,0.35)] md:hidden"
    >
      Занять место на борту
    </motion.a>
  );
}
