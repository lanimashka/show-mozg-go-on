import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { ParticleField } from "@/components/ui/ParticleField";
import { paymentHref } from "@/data/event";

export function FinalCtaSection() {
  return (
    <section id="final" className="noise-mask relative min-h-[100svh] overflow-hidden py-28 md:py-36">
      <ParticleField />
      <Image src="/images/hero-station.svg" alt="" fill className="absolute inset-0 -z-20 scale-110 object-contain object-center opacity-55" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_45%,transparent_0%,rgba(5,5,16,0.68)_52%,#050510_100%)]" />
      <Container className="flex min-h-[calc(100svh-14rem)] items-center justify-center text-center">
        <MotionReveal className="mx-auto max-w-6xl">
          <h2 className="font-display text-6xl font-extrabold leading-[0.9] text-white md:text-[9rem]">
            Не смотрите со стороны. <br />
            <span className="text-gradient">Будьте внутри.</span>
          </h2>
          <p className="mx-auto mt-10 max-w-3xl text-2xl font-semibold leading-snug text-white/70 md:text-4xl">
            08 июня · Москва · SHOW МОЗГ GO ON
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
