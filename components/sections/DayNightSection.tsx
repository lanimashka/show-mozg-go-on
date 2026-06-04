import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { program } from "@/data/event";

export function DayNightSection() {
  return (
    <section id="program" className="relative isolate overflow-hidden py-28 md:py-40">
      <Image
        src="/images/mission-05.png"
        alt="Огромная космическая станция и старт ракет"
        fill
        sizes="100vw"
        className="absolute inset-0 z-0 object-cover object-center opacity-48"
      />
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,#050510_0%,rgba(5,5,16,0.78)_18%,rgba(5,5,16,0.9)_72%,#050510_100%)]" />
      <Container className="relative z-10">
        <MotionReveal className="max-w-5xl">
          <p className="mb-6 text-xs font-black uppercase tracking-[0.26em] text-[#05F2DB]">
            Программа дня
          </p>
          <h2 className="font-display text-5xl font-extrabold leading-[0.95] text-white md:text-8xl">
            Маршрут дневной экспедиции.
          </h2>
        </MotionReveal>
        <div className="mt-16 space-y-5">
          {program.map((item, index) => (
            <MotionReveal key={`${item.time}-${item.name}`} delay={index * 0.035} className="group relative">
              <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-[#05F2DB]/0 via-[#05F2DB]/45 to-[#F205CB]/0 md:block" />
              <div className="mission-panel relative grid gap-6 md:grid-cols-[10rem_1fr] md:items-start">
                <div>
                  <p className="font-display text-3xl font-extrabold text-gradient md:text-4xl">{item.time}</p>
                  <div className="mt-4 h-3 w-3 rounded-full bg-[#05F2DB] shadow-[0_0_28px_rgba(5,242,219,0.95)] transition group-hover:scale-150" />
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-white md:text-4xl">{item.name}</p>
                  <p className="mt-2 text-sm font-black uppercase tracking-[0.18em] text-[#05F2DB]">{item.role}</p>
                  <h3 className="mt-5 max-w-5xl text-xl font-bold leading-snug text-white/88 md:text-3xl">{item.title}</h3>
                  {item.note ? <p className="mt-4 text-lg font-semibold leading-8 text-white/58">{item.note}</p> : null}
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
