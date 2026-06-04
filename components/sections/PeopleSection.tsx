import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function PeopleSection() {
  return (
    <section id="info" className="relative isolate min-h-[100svh] overflow-hidden py-36 md:py-48">
      <Image
        src="/images/mission-02.png"
        alt="Футуристический корабль среди планет и голограмм"
        fill
        sizes="100vw"
        className="absolute inset-0 z-0 scale-105 object-cover object-[62%_50%] opacity-95"
      />
      <div className="poster-ringed-world absolute -left-[20rem] bottom-[-22rem] z-[1] h-[48rem] w-[48rem] opacity-80 md:h-[64rem] md:w-[64rem]" />
      <div className="space-lane absolute left-[18%] top-[22%] z-[3] h-[12rem] w-[54vw] rotate-180 opacity-55" />
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_70%_32%,rgba(238,5,242,0.18),transparent_32rem),linear-gradient(90deg,rgba(5,5,16,0.84)_0%,rgba(5,5,16,0.38)_50%,rgba(5,5,16,0.8)_100%),linear-gradient(180deg,#050510_0%,rgba(5,5,16,0.48)_42%,#050510_100%)]" />
      <div className="hero-star-depth absolute inset-0 z-[3]" />
      <Container className="relative z-10 flex min-h-[calc(100svh-18rem)] items-center">
        <div className="grid w-full gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <MotionReveal>
            <p className="mb-6 text-xs font-black uppercase tracking-[0.26em] text-[#05F2DB]">
              Важная информация
            </p>
            <h2 className="font-display text-5xl font-extrabold leading-[0.95] text-white md:text-8xl">
              Записи останутся с вами.
            </h2>
          </MotionReveal>
          <MotionReveal delay={0.12} className="space-y-5">
            <div className="mission-panel">
              <p className="text-2xl font-extrabold text-white md:text-4xl">Все лекции будут доступны в записи.</p>
              <p className="mt-5 text-lg font-semibold leading-8 text-white/68">
                Если вы не сможете присутствовать на дневной программе, вы получите доступ ко всем выступлениям после мероприятия.
              </p>
            </div>
            <div className="mission-panel">
              <p className="text-2xl font-extrabold text-white md:text-4xl">Стоимость участия не является коммерческой оплатой.</p>
              <p className="mt-5 text-lg font-semibold leading-8 text-white/68">
                Складчина организована исключительно для покрытия расходов на площадку, техническое обеспечение, питание, артистов, подарки и организацию мероприятия.
              </p>
            </div>
          </MotionReveal>
        </div>
      </Container>
    </section>
  );
}
