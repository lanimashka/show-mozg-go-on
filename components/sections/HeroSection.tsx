"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ParticleField } from "@/components/ui/ParticleField";
import { hero, paymentHref } from "@/data/event";

export function HeroSection() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 900], [0, 120]);
  const bgScale = useTransform(scrollY, [0, 900], [1.04, 1.18]);
  const titleY = useTransform(scrollY, [0, 700], [0, -80]);
  const glowOpacity = useTransform(scrollY, [0, 500], [0.55, 0.15]);

  return (
    <section id="hero" className="relative isolate h-[100svh] min-h-[760px] overflow-hidden bg-[#050510]">
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0 z-0">
        <Image
          src="/images/mission-01.png"
          alt="Космонавт, ракета и планета в футуристическом космопорту"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[52%_52%]"
        />
      </motion.div>
      <ParticleField />
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(5,5,16,0.82)_0%,rgba(5,5,16,0.28)_42%,rgba(5,5,16,0.82)_100%),linear-gradient(180deg,rgba(5,5,16,0.72)_0%,rgba(5,5,16,0.1)_42%,#050510_100%)]" />
      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute left-1/2 top-1/2 z-[2] h-[44rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#05C7F2]/20 blur-3xl"
      />
      <motion.div
        className="absolute right-[8%] top-[18%] z-[2] h-56 w-56 rounded-full border border-[#05F2DB]/35 shadow-[0_0_90px_rgba(5,242,219,0.22)]"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-[16%] left-[-8%] z-[2] h-px w-[70vw] rotate-[-10deg] bg-gradient-to-r from-transparent via-[#05F2DB]/80 to-[#F205CB]/70 shadow-[0_0_34px_rgba(5,242,219,0.45)]"
        animate={{ x: [-80, 80, -80], opacity: [0.35, 0.85, 0.35] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative z-10 flex h-full flex-col justify-end pb-10 pt-28 md:pb-14">
        <motion.div style={{ y: titleY }} className="max-w-6xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-[#05F2DB] md:text-sm"
          >
            {hero.date} · {hero.city}
          </motion.p>
          <h1 className="font-display glow-text text-[4.2rem] font-extrabold leading-[0.84] text-white md:text-[9rem] lg:text-[12rem]">
            {hero.title}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="mt-7 max-w-3xl text-xl font-semibold leading-snug text-white/82 md:text-3xl"
          >
            {hero.description}
          </motion.p>
          <div className="mt-8 grid max-w-4xl gap-3 text-sm font-bold uppercase tracking-[0.16em] text-white/70 md:grid-cols-2">
            <p className="glass-panel">{hero.day}</p>
            <p className="glass-panel">{hero.night}</p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8"
          >
            <MagneticButton href={paymentHref} size="lg">
              {hero.cta}
            </MagneticButton>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
