import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { venue } from "@/data/event";

export function VenueSection() {
  return (
    <section id="venue" className="relative min-h-[100svh] overflow-hidden py-28 md:py-36">
      <Image src="/images/map-taganka.svg" alt="" fill className="absolute inset-0 -z-20 object-cover opacity-70" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#050510_0%,rgba(5,5,16,0.7)_48%,rgba(5,5,16,0.2)_100%),linear-gradient(180deg,#050510_0%,transparent_36%,#050510_100%)]" />
      <Container className="flex min-h-[calc(100svh-14rem)] items-center">
        <MotionReveal className="max-w-5xl">
          <p className="mb-7 text-xs font-black uppercase tracking-[0.22em] text-[#05F2DB]">
            Москва · 08 июня 2026
          </p>
          <h2 className="font-display text-5xl font-extrabold leading-[0.96] text-white md:text-8xl">
            {venue.title}
          </h2>
          <p className="mt-8 max-w-2xl text-2xl font-semibold leading-snug text-white/70 md:text-4xl">
            Место, где день начнется с идей и продолжится праздником.
          </p>
          <div className="mt-12">
            <MagneticButton href={venue.mapHref} variant="ghost" size="lg">
              Открыть на карте
            </MagneticButton>
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
}
