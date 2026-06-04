"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ParticleField } from "@/components/ui/ParticleField";
import { hero, paymentHref } from "@/data/event";

export function HeroSection() {
  const { scrollY } = useScroll();
  const stationY = useTransform(scrollY, [0, 900], [0, 170]);
  const stationScale = useTransform(scrollY, [0, 900], [1, 1.18]);
  const contentY = useTransform(scrollY, [0, 700], [0, -70]);
  const veilOpacity = useTransform(scrollY, [0, 540], [0.24, 0.9]);

  return (
    <section id="hero" className="noise-mask relative h-[100svh] min-h-[760px] overflow-hidden md:min-h-[820px]">
      <ParticleField />
      <div className="absolute inset-0 -z-20 bg-[#02020a]" />
      <motion.div
        style={{ y: stationY, scale: stationScale }}
        className="pointer-events-none absolute inset-0 z-0 opacity-90"
      >
        <Image
          src="/images/cinematic-universe.svg"
          alt=""
          fill
          priority
          className="scale-[1.18] object-cover object-center md:scale-100"
        />
      </motion.div>
      <motion.div
        style={{ y: stationY, scale: stationScale }}
        className="pointer-events-none absolute inset-0 z-[1] mx-auto opacity-75 mix-blend-screen"
      >
        <Image
          src="/images/hero-station.svg"
          alt="Футуристическая космическая станция SHOW МОЗГ GO ON"
          fill
          priority
          className="scale-[1.34] object-contain object-center md:scale-[1.14]"
        />
      </motion.div>
      <motion.div
        className="absolute left-[8%] top-[18%] z-[2] h-48 w-48 rounded-full bg-[#05F2DB]/18 blur-3xl md:h-80 md:w-80"
        animate={{ opacity: [0.28, 0.62, 0.28], scale: [1, 1.16, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[10%] right-[7%] z-[2] h-56 w-56 rounded-full bg-[#F205CB]/18 blur-3xl md:h-96 md:w-96"
        animate={{ opacity: [0.25, 0.72, 0.25], scale: [1.12, 1, 1.12] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{ opacity: veilOpacity }}
        className="absolute inset-0 z-[3] bg-[radial-gradient(circle_at_50%_42%,transparent_0%,rgba(5,5,16,0.2)_36%,rgba(5,5,16,0.84)_82%),linear-gradient(180deg,rgba(5,5,16,0.15)_0%,rgba(5,5,16,0.08)_42%,#050510_100%)]"
      />
      <div className="absolute inset-x-0 top-0 z-[4] h-48 bg-gradient-to-b from-[#050510]/85 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-[4] h-72 bg-gradient-to-t from-[#050510] to-transparent" />

      <Container className="relative z-10 flex h-full flex-col justify-between pb-8 pt-28 md:pb-12">
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15 }}
          className="flex flex-col gap-2 text-xs font-black uppercase tracking-[0.18em] text-white/62 md:flex-row md:items-center md:justify-between"
        >
          <span>{hero.dateLine}</span>
          <span className="text-[#05F2DB]">{hero.label}</span>
        </motion.div>

        <motion.div style={{ y: contentY }} className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
          <h1 className="font-display glow-text text-[4.15rem] font-extrabold leading-[0.82] text-white md:text-[9.4rem] lg:text-[12.2rem]">
            {hero.title.split(" ").map((word, index) => (
              <motion.span
                key={word}
                initial={{ opacity: 0.2, y: 24, filter: "blur(5px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.62, delay: 0.16 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="mx-[0.045em] inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <div className="mt-8 flex max-w-4xl flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xl font-semibold leading-tight text-white md:text-3xl">
            {hero.offer.map((line, index) => (
              <motion.p
                key={line}
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 1.05 + index * 0.12 }}
                className={index === hero.offer.length - 1 ? "text-gradient" : ""}
              >
                {line}
              </motion.p>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.68 }}
            className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/70 md:text-xl"
          >
            {hero.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.88 }}
            className="mt-8 flex flex-col items-center gap-4"
          >
            <MagneticButton href={paymentHref} size="lg">
              {hero.cta}
            </MagneticButton>
            <p className="max-w-md text-sm font-semibold uppercase tracking-[0.13em] text-white/62">{hero.price}</p>
          </motion.div>
        </motion.div>

        <motion.a
          href="#origin"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="mx-auto h-12 w-px bg-gradient-to-b from-white/0 via-white/60 to-white/0"
        >
        </motion.a>
      </Container>
    </section>
  );
}
