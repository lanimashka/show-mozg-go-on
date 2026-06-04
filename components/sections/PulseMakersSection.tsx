import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function PulseMakersSection() {
  return (
    <section id="makers" className="relative isolate min-h-[100svh] overflow-hidden py-28 md:py-36">
      <div className="absolute inset-0 z-0 bg-[#050510]" />
      <Image
        src="/images/cinematic-universe.svg"
        alt=""
        fill
        className="absolute inset-0 z-0 scale-125 object-cover object-[62%_50%] opacity-86 md:scale-105"
      />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_72%_44%,rgba(5,242,219,0.16),transparent_28%),linear-gradient(90deg,#050510_0%,rgba(5,5,16,0.62)_38%,rgba(5,5,16,0.12)_100%),linear-gradient(180deg,#050510_0%,transparent_34%,#050510_100%)]" />
      <div className="absolute right-[-16rem] top-1/2 z-[2] h-[58rem] w-[58rem] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_36%_32%,rgba(5,242,219,0.18),rgba(20,13,47,0.74)_36%,rgba(2,3,10,0.98)_70%)] opacity-95 shadow-[0_0_140px_rgba(5,199,242,0.18)]" />
      <div className="absolute right-[-13rem] top-1/2 z-[3] h-[60rem] w-[60rem] -translate-y-1/2 rounded-full border border-[#05F2DB]/34 shadow-[0_0_140px_rgba(5,199,242,0.24)]" />
      <div className="absolute right-[-4rem] top-[47%] z-[3] h-px w-[58rem] rotate-[-9deg] bg-gradient-to-r from-transparent via-[#05F2DB]/70 to-[#F205CB]/70 shadow-[0_0_32px_rgba(5,242,219,0.45)]" />
      <div className="absolute left-[8%] top-[18%] z-[2] h-96 w-96 rounded-full bg-[#F205CB]/22 blur-3xl" />

      <Container className="relative z-10 flex min-h-[calc(100svh-14rem)] items-center">
        <MotionReveal className="max-w-5xl">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#05F2DB]">Birthday host</p>
          <h2 className="mt-5 font-display text-5xl font-extrabold leading-[0.88] text-white md:text-[9rem]">
            Екатерина Скоблик
          </h2>
          <p className="mt-8 max-w-3xl text-2xl font-semibold leading-snug text-white/72 md:text-4xl">
            Главная причина вечера. Не персона на афише, а центр притяжения своего круга.
          </p>
        </MotionReveal>
      </Container>
    </section>
  );
}
