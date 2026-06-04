"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function DayNightSection() {
  return (
    <section id="day-night" className="relative min-h-[100svh] overflow-hidden py-28 md:py-36">
      <div className="absolute inset-0 -z-30 grid md:grid-cols-2">
        <div className="relative min-h-[50svh] md:min-h-0">
          <Image src="/images/day-mode.svg" alt="" fill className="object-cover opacity-70" />
        </div>
        <div className="relative min-h-[50svh] md:min-h-0">
          <Image src="/images/night-mode.svg" alt="" fill className="object-cover opacity-78" />
        </div>
      </div>
      <motion.div
        className="absolute inset-y-0 left-1/2 -z-20 w-40 -translate-x-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)] blur-3xl"
        animate={{ opacity: [0.3, 0.75, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_45%,rgba(5,5,16,0.05),rgba(5,5,16,0.62)_52%,#050510_100%)]" />

      <Container className="flex min-h-[calc(100svh-14rem)] items-center justify-center text-center">
        <MotionReveal className="max-w-6xl">
          <h2 className="font-display text-6xl font-extrabold leading-[0.9] text-white md:text-[9rem]">
            Днем — идеи. <br />
            <span className="text-gradient">Вечером — праздник.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-xl font-semibold leading-snug text-white/76 md:text-3xl">
            Один день меняет ритм. От разговоров к свету, музыке и моменту.
          </p>
        </MotionReveal>
      </Container>
    </section>
  );
}
