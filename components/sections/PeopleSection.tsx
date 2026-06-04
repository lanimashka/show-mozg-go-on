import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function PeopleSection() {
  return (
    <section id="info" className="relative isolate min-h-[92svh] overflow-hidden py-28 md:py-36">
      <Image
        src="/images/mission-02.png"
        alt="Футуристический корабль среди планет и голограмм"
        fill
        sizes="100vw"
        className="absolute inset-0 z-0 object-cover object-[62%_50%] opacity-70"
      />
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,#050510_0%,rgba(5,5,16,0.62)_42%,#050510_100%)]" />
      <Container className="relative z-10 flex min-h-[calc(92svh-14rem)] items-center">
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
