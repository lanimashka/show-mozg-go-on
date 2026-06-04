import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { venue } from "@/data/event";

export function VenueSection() {
  return (
    <section id="venue" className="relative isolate min-h-[100svh] overflow-hidden py-28 md:py-36">
      <Image src="/images/map-taganka.svg" alt="" fill className="absolute inset-0 z-0 object-cover opacity-82" />
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,#050510_0%,rgba(5,5,16,0.76)_46%,rgba(5,5,16,0.34)_100%),linear-gradient(180deg,#050510_0%,transparent_36%,#050510_100%)]" />
      <Container className="relative z-10 grid min-h-[calc(100svh-14rem)] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <MotionReveal className="max-w-5xl">
          <p className="mb-7 text-xs font-black uppercase tracking-[0.26em] text-[#05F2DB]">
            Навигация по станции
          </p>
          <h2 className="font-display text-5xl font-extrabold leading-[0.96] text-white md:text-8xl">
            {venue.title}
          </h2>
          <p className="mt-8 max-w-2xl text-2xl font-semibold leading-snug text-white/70 md:text-4xl">
            {venue.address}
          </p>
          <div className="mt-12">
            <MagneticButton href={venue.mapHref} variant="ghost" size="lg">
              Открыть на карте
            </MagneticButton>
          </div>
        </MotionReveal>
        <MotionReveal delay={0.14} className="mission-panel relative min-h-[430px] overflow-hidden">
          <div className="absolute inset-8 rounded-full border border-[#05F2DB]/24" />
          <div className="absolute inset-16 rounded-full border border-[#F205CB]/20" />
          <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#05F2DB] shadow-[0_0_36px_rgba(5,242,219,0.95)]" />
          <div className="relative z-10 flex h-full flex-col justify-end">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#05F2DB]">Ближайшие станции метро</p>
            <div className="mt-6 grid gap-3">
              {venue.metro.map((station) => (
                <div key={station} className="flex items-center gap-3 text-2xl font-extrabold text-white">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F205CB] shadow-[0_0_22px_rgba(242,5,203,0.9)]" />
                  {station}
                </div>
              ))}
            </div>
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
}
