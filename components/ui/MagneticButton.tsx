"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "ghost";
  className?: string;
};

const sizeClass = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-6 py-3.5 text-base",
  lg: "px-8 py-4 text-base md:px-9 md:py-5 md:text-lg"
};

export function MagneticButton({
  href,
  children,
  size = "md",
  variant = "primary",
  className = ""
}: MagneticButtonProps) {
  const base =
    "group inline-flex items-center justify-center rounded-full font-bold transition focus:outline-none focus:ring-2 focus:ring-[#05F2DB]/70";
  const styles =
    variant === "primary"
      ? "bg-[linear-gradient(100deg,#F205CB,#EE05F2_38%,#05C7F2)] text-white shadow-[0_0_35px_rgba(242,5,203,0.32),0_0_60px_rgba(5,199,242,0.18)] hover:shadow-[0_0_46px_rgba(242,5,203,0.52),0_0_80px_rgba(5,199,242,0.32)]"
      : "border border-white/15 bg-white/[0.04] text-white/88 backdrop-blur-xl hover:border-white/30 hover:bg-white/[0.08]";

  return (
    <motion.a
      href={href}
      whileHover={{ y: -2, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${styles} ${sizeClass[size]} ${className}`}
    >
      <span>{children}</span>
    </motion.a>
  );
}
