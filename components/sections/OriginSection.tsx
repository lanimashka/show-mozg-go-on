import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function OriginSection() {
  return (
    <section id="origin" className="relative min-h-[100svh] overflow-hidden py-28 md:py-36">
      <Image
        src="/images/cinematic-universe.svg"
        alt=""
        fill
        className="absolute inset-0 z-0 scale-125 object-cover object-center opacity-72 md:scale-105"
      />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_70%_45%,rgba(5,242,219,0.08),transparent_34%),linear-gradient(90deg,#050510_0%,rgba(5,5,16,0.76)_42%,rgba(5,5,16,0.28)_100%),linear-gradient(180deg,#050510_0%,transparent_30%,#050510_100%)]" />
      <div className="absolute left-[-12%] top-1/3 z-[2] h-[38rem] w-[38rem] rounded-full bg-[#F205CB]/18 blur-3xl" />
      <div className="absolute right-[-8%] top-[18%] z-[2] h-[34rem] w-[34rem] rounded-full border border-[#05F2DB]/18 shadow-[0_0_90px_rgba(5,242,219,0.16)]" />

      <Container className="relative z-10 flex min-h-[calc(100svh-14rem)] items-center">
        <MotionReveal className="max-w-5xl">
          <p className="mb-6 text-xs font-black uppercase tracking-[0.22em] text-[#05F2DB]">
            Екатерина Скоблик · 08 июня
          </p>
          <h2 className="font-display text-5xl font-extrabold leading-[0.9] text-white md:text-[8.5rem]">
            Не формат. <br />
            <span className="text-gradient">Вселенная вечера.</span>
          </h2>
          <p className="mt-8 max-w-3xl text-2xl font-semibold leading-snug text-white/76 md:text-4xl">
            День рождения Екатерины как премиальный запуск: свет, музыка, люди и ощущение закрытого круга.
          </p>
        </MotionReveal>
      </Container>
    </section>
  );
}
