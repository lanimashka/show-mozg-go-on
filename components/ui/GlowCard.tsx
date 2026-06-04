"use client";

import { motion } from "framer-motion";
import { ComponentPropsWithoutRef } from "react";

type GlowCardProps = ComponentPropsWithoutRef<typeof motion.div> & {
  tone?: "cyan" | "magenta" | "mixed" | "quiet";
};

const tones = {
  cyan: "before:bg-[#05C7F2]/45 hover:shadow-[0_0_55px_rgba(5,199,242,0.18)]",
  magenta: "before:bg-[#F205CB]/45 hover:shadow-[0_0_55px_rgba(242,5,203,0.2)]",
  mixed: "before:bg-[linear-gradient(90deg,#F205CB,#05C7F2)] hover:shadow-[0_0_60px_rgba(238,5,242,0.18)]",
  quiet: "before:bg-white/20 hover:shadow-[0_0_45px_rgba(255,255,255,0.08)]"
};

export function GlowCard({ className = "", tone = "mixed", children, ...props }: GlowCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className={`glass relative overflow-hidden rounded-[28px] p-6 before:absolute before:inset-x-8 before:top-0 before:h-px before:blur-sm ${tones[tone]} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
