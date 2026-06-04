import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { paymentHref } from "@/data/event";

export function EntrySection() {
  return (
    <section id="entry" className="relative min-h-[100svh] overflow-hidden py-28 md:py-36">
      <Image src="/images/pass-visual.svg" alt="" fill className="absolute inset-0 -z-20 object-cover opacity-42" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_35%,rgba(242,5,203,0.2),transparent_34rem),linear-gradient(180deg,#050510_0%,rgba(5,5,16,0.72)_50%,#050510_100%)]" />
      <Container className="flex min-h-[calc(100svh-14rem)] items-center justify-center text-center">
        <MotionReveal className="max-w-5xl">
          <p className="mb-8 text-xs font-black uppercase tracking-[0.22em] text-[#05F2DB]">Вход на событие</p>
          <h2 className="font-display whitespace-nowrap text-[5.8rem] font-extrabold leading-none text-white md:text-[12rem]">
            3500&nbsp;₽
          </h2>
          <p className="mt-5 text-xl font-semibold uppercase tracking-[0.14em] text-white/58">организационный взнос</p>
          <p className="mx-auto mt-10 max-w-3xl text-2xl font-semibold leading-snug text-white/78 md:text-4xl">
            Внутри весь день: идеи, знакомства, вечерняя программа, фуршет, напитки и подарки партнеров.
          </p>
          <div className="mt-12">
            <MagneticButton href={paymentHref} size="lg">
              Присоединиться
            </MagneticButton>
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
}
