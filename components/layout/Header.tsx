"use client";

import { motion } from "framer-motion";
import { paymentHref } from "@/data/event";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 px-5 py-5 md:px-10 md:py-7"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="#hero" className="font-display text-sm font-extrabold tracking-[0.08em] text-white md:text-base">
          SHOW МОЗГ GO ON
        </a>
        <span className="hidden text-xs font-black uppercase tracking-[0.18em] text-white/48 md:block">
          08 июня · Москва
        </span>
        <div className="hidden md:block">
          <MagneticButton href={paymentHref} size="sm">
            На борт
          </MagneticButton>
        </div>
        <a
          href={paymentHref}
          className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white/90 md:hidden"
        >
          На борт
        </a>
      </div>
    </motion.header>
  );
}
