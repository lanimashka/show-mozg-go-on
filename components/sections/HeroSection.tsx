"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ParticleField } from "@/components/ui/ParticleField";
import { hero, paymentHref } from "@/data/event";

const heroPanels = [
  {
    code: "01",
    label: "Дневной модуль",
    text: hero.day
  },
  {
    code: "02",
    label: "Вечерний модуль",
    text: hero.night
  }
];

export function HeroSection() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 900], [0, 120]);
  const bgScale = useTransform(scrollY, [0, 900], [1.04, 1.18]);
  const titleY = useTransform(scrollY, [0, 700], [0, -80]);
  const glowOpacity = useTransform(scrollY, [0, 500], [0.55, 0.15]);

  return (
    <section id="hero" className="relative isolate min-h-[100svh] overflow-hidden bg-[#050510]">
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0 z-0">
        <Image
          src="/images/mission-01.png"
          alt="Космонавт, ракета и планета в футуристическом космопорту"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[35%_50%] md:object-[52%_52%]"
        />
      </motion.div>
      <ParticleField />
      <motion.div
        aria-hidden="true"
        className="real-planet-layer absolute -right-[32rem] -top-[18rem] z-[1] h-[70rem] w-[96rem] md:-right-[26rem] md:-top-[22rem] md:h-[84rem] md:w-[116rem]"
        animate={{ scale: [1, 1.03, 1], x: [0, -18, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/mission-02.png"
          alt=""
          fill
          sizes="92rem"
          className="object-cover object-[18%_35%]"
        />
      </motion.div>
      <motion.div
        aria-hidden="true"
        className="hero-astronaut-layer absolute bottom-0 left-[-17rem] z-[2] h-[100svh] w-[44rem] md:left-[-8rem] md:w-[58rem]"
        animate={{ y: [0, -10, 0], opacity: [0.68, 0.9, 0.68] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/mission-03.png"
          alt=""
          fill
          sizes="58rem"
          className="object-cover object-[45%_48%]"
        />
      </motion.div>
      <motion.div
        aria-hidden="true"
        className="absolute -right-[18rem] top-[2rem] z-[2] h-[20rem] w-[88rem] rotate-[-17deg] rounded-full border border-[#05F2DB]/45 shadow-[0_0_70px_rgba(5,242,219,0.36)] md:-right-[11rem] md:top-[3rem]"
        animate={{ rotate: [-17, -12, -17], opacity: [0.32, 0.74, 0.32] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -right-[15rem] top-[6rem] z-[2] h-[13rem] w-[72rem] rotate-[-17deg] rounded-full border border-[#F205CB]/36 shadow-[0_0_78px_rgba(242,5,203,0.38)] md:-right-[8rem]"
        animate={{ rotate: [-14, -20, -14], opacity: [0.26, 0.58, 0.26] }}
        transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="space-lane absolute right-0 top-[31%] z-[3] h-[16rem] w-[62vw]"
        animate={{ x: [38, -16, 38], opacity: [0.35, 0.9, 0.35] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="space-lane absolute bottom-[19%] right-[4%] z-[3] h-[10rem] w-[42vw] opacity-75"
        animate={{ x: [-26, 26, -26], opacity: [0.2, 0.74, 0.2] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="hero-astronaut-aura absolute left-[4%] top-[20%] z-[3] h-[56rem] w-[35rem] max-w-[46vw]"
        animate={{ opacity: [0.65, 1, 0.65] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_74%_18%,rgba(5,242,219,0.1),transparent_30rem),radial-gradient(circle_at_18%_58%,rgba(242,5,203,0.22),transparent_34rem),linear-gradient(90deg,rgba(5,5,16,0.84)_0%,rgba(5,5,16,0.24)_44%,rgba(5,5,16,0.64)_100%),linear-gradient(180deg,rgba(5,5,16,0.52)_0%,rgba(5,5,16,0.04)_42%,#050510_100%)]" />
      <div className="hero-star-depth absolute inset-0 z-[2]" />
      <div className="cosmic-cityline absolute bottom-0 right-0 z-[3] h-1/2 w-[64vw] opacity-70" />
      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute left-1/2 top-1/2 z-[3] h-[44rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#05C7F2]/20 blur-3xl"
      />
      <motion.div
        className="absolute bottom-[16%] left-[-8%] z-[3] h-px w-[70vw] rotate-[-10deg] bg-gradient-to-r from-transparent via-[#05F2DB]/80 to-[#F205CB]/70 shadow-[0_0_34px_rgba(5,242,219,0.45)]"
        animate={{ x: [-80, 80, -80], opacity: [0.35, 0.85, 0.35] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="hero-hud hero-hud-left absolute left-7 top-[22%] z-[4] hidden h-[23rem] w-36 md:block"
        animate={{ opacity: [0.32, 0.72, 0.32], x: [0, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="hero-hud hero-hud-right absolute bottom-[18%] right-8 z-[4] hidden h-[18rem] w-44 lg:block"
        animate={{ opacity: [0.28, 0.64, 0.28], x: [0, -10, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute right-[16%] top-[58%] z-[4] hidden h-28 w-28 rounded-full border border-[#EE05F2]/40 shadow-[0_0_50px_rgba(238,5,242,0.35)] md:block"
        animate={{ rotate: -360, scale: [1, 1.08, 1], opacity: [0.35, 0.78, 0.35] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute inset-4 rounded-full border border-[#05F2DB]/35" />
        <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#05F2DB]/35" />
        <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[#F205CB]/35" />
      </motion.div>

      <Container className="relative z-10 flex min-h-[100svh] flex-col justify-center pb-7 pt-20 md:pb-8 md:pt-28 lg:pt-24">
        <motion.div
          style={{ y: titleY }}
          className="flex w-full min-w-0 max-w-[22.5rem] flex-col py-3 sm:max-w-[38rem] md:max-w-6xl md:py-4"
        >
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#05F2DB] md:mb-5 md:text-sm"
          >
            {hero.date} · {hero.city}
          </motion.p>
          <h1 className="font-display glow-text max-w-full break-words text-[3.05rem] font-extrabold leading-[0.94] text-white sm:text-[4.05rem] md:text-[5.7rem] lg:text-[6.45rem] xl:text-[7.35rem] 2xl:text-[8.1rem]">
            <span className="block md:inline">SHOW МОЗГ</span>
            <span className="hidden md:inline"> </span>
            <span className="block md:inline">GO ON</span>
          </h1>
          <p className="mt-3 max-w-[92%] text-[0.72rem] font-black uppercase leading-relaxed tracking-[0.14em] text-[#05F2DB] drop-shadow-[0_0_18px_rgba(5,242,219,0.72)] md:mt-5 md:max-w-4xl md:text-sm md:tracking-[0.2em]">
            Нейросети · Маркетинг · День рождения · Образовательная программа · Шоу · Подарки
          </p>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="mt-3 max-w-[90%] break-words text-base font-extrabold leading-snug text-white drop-shadow-[0_0_26px_rgba(5,5,16,0.92)] md:mt-5 md:max-w-3xl md:text-xl md:text-white xl:text-2xl"
          >
            {hero.description}
          </motion.p>
          <div className="order-4 mt-4 grid w-full max-w-full gap-3 text-[0.68rem] font-bold uppercase tracking-[0.07em] text-white/76 md:order-3 md:mt-5 md:max-w-4xl md:grid-cols-2 md:text-xs md:tracking-[0.12em] xl:text-sm">
            {heroPanels.map((panel) => (
              <div key={panel.code} className="hero-holo-panel min-w-0">
                <span className="panel-corners" aria-hidden="true" />
                <div className="relative z-10 mb-4 flex items-center justify-between gap-4">
                  <span className="font-display text-2xl font-black text-[#05F2DB] drop-shadow-[0_0_18px_rgba(5,242,219,0.68)]">
                    {panel.code}
                  </span>
                  <span className="text-[0.65rem] tracking-[0.22em] text-white/58">{panel.label}</span>
                </div>
                <p className="relative z-10 break-words">{panel.text}</p>
              </div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="order-3 mt-5 md:order-4 md:mt-6"
          >
            <MagneticButton href={paymentHref} size="lg" className="w-[min(100%,23.5rem)] md:w-auto">
              {hero.cta}
            </MagneticButton>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
