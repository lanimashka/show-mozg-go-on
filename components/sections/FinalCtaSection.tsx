import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { ParticleField } from "@/components/ui/ParticleField";
import { paymentHref } from "@/data/event";

export function FinalCtaSection() {
  return (
    <section id="final" className="noise-mask relative isolate min-h-[100svh] overflow-hidden py-28 md:py-36">
      <ParticleField />
      <Image
        src="/images/mission-05.png"
        alt="Космическая станция и старт ракет"
        fill
        sizes="100vw"
        className="absolute inset-0 z-0 object-cover object-center"
      />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_38%,rgba(5,242,219,0.08),rgba(5,5,16,0.58)_44%,#050510_100%),linear-gradient(180deg,#050510_0%,transparent_38%,#050510_100%)]" />
      <div className="absolute left-1/2 top-1/3 z-[2] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[#F205CB]/18 blur-3xl" />
      <Container className="relative z-10 flex min-h-[calc(100svh-14rem)] items-center justify-center text-center">
        <MotionReveal className="mx-auto max-w-6xl">
          <p className="mb-7 text-xs font-black uppercase tracking-[0.28em] text-[#05F2DB]">
            SHOW МОЗГ GO ON · 08 июня 2026 · Москва
          </p>
          <h2 className="font-display text-5xl font-extrabold leading-[0.9] text-white md:text-[8.5rem]">
            Готовы отправиться в эту космическую экспедицию вместе с нами?
          </h2>
          <div className="mt-12">
            <MagneticButton href={paymentHref} size="lg">
              Занять место на борту
            </MagneticButton>
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
}
