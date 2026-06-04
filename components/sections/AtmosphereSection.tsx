import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { eveningHighlights, partners } from "@/data/event";

export function AtmosphereSection() {
  return (
    <section id="evening" className="relative isolate min-h-[100svh] overflow-hidden py-28 md:py-36">
      <Image
        src="/images/mission-02.png"
        alt="Космический город, планета и орбитальные станции"
        fill
        sizes="100vw"
        className="absolute inset-0 z-0 object-cover object-center"
      />
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,#050510_0%,rgba(5,5,16,0.62)_46%,rgba(5,5,16,0.26)_100%),linear-gradient(180deg,#050510_0%,transparent_36%,#050510_100%)]" />
      <Container className="relative z-10 grid min-h-[calc(100svh-14rem)] gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <MotionReveal className="max-w-5xl">
          <p className="mb-6 text-xs font-black uppercase tracking-[0.26em] text-[#05F2DB]">Вечерняя программа</p>
          <h2 className="font-display text-5xl font-extrabold leading-[0.92] text-white md:text-8xl">
            С 18:00 станция переходит в режим праздника.
          </h2>
          <p className="mt-8 max-w-3xl text-2xl font-semibold leading-snug text-white/72 md:text-4xl">
            Фотографии, фуршет, лаунж-музыка в живом формате, общение и старт вечерней программы в 19:00.
          </p>
        </MotionReveal>
        <MotionReveal delay={0.12} className="space-y-6">
          <div className="mission-panel">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#05F2DB]">Вас ждут</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {eveningHighlights.map((item) => (
                <span key={item} className="holo-chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="mission-panel">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#05F2DB]">Подарки от партнеров</p>
            <div className="mt-6 space-y-5">
              {partners.map((partner) => (
                <div key={partner.name}>
                  <p className="font-display text-3xl font-extrabold text-white">{partner.name}</p>
                  <p className="mt-1 text-lg font-semibold text-white/62">{partner.text}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-xl font-bold leading-snug text-white/72">
            А еще любимые песни и треки от 2000-х и 2010-х, которые знают все.
          </p>
        </MotionReveal>
      </Container>
    </section>
  );
}
