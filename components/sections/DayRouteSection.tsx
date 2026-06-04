import { Container } from "@/components/layout/Container";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { dressCode } from "@/data/event";

export function DayRouteSection() {
  return (
    <section id="dress-code" className="relative isolate overflow-hidden py-28 md:py-36">
      <div className="absolute inset-0 z-0 bg-[#050510]" />
      <div className="absolute left-1/2 top-0 z-[1] h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-[#05C7F2]/14 blur-3xl" />
      <div className="absolute bottom-[-20rem] right-[-10rem] z-[1] h-[44rem] w-[44rem] rounded-full bg-[#F205CB]/18 blur-3xl" />
      <Container className="relative z-10">
        <MotionReveal className="max-w-5xl">
          <p className="mb-6 text-xs font-black uppercase tracking-[0.26em] text-[#05F2DB]">Дресс-код</p>
          <h2 className="font-display text-5xl font-extrabold leading-[0.94] text-white md:text-8xl">
            Космический шик без обязательного протокола.
          </h2>
          <p className="mt-8 max-w-3xl text-2xl font-semibold leading-snug text-white/72 md:text-4xl">
            Мы не настаиваем на обязательном дресс-коде. Главное — выглядеть красиво и чувствовать себя комфортно.
          </p>
        </MotionReveal>
        <MotionReveal delay={0.12} className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {dressCode.map((item) => (
            <div key={item} className="mission-panel min-h-40 transition duration-500 hover:-translate-y-1 hover:border-[#05F2DB]/45 hover:shadow-[0_0_60px_rgba(5,242,219,0.18)]">
              <p className="font-display text-3xl font-extrabold capitalize text-white">{item}</p>
            </div>
          ))}
        </MotionReveal>
        <MotionReveal delay={0.18} className="mt-10 grid gap-5 md:grid-cols-2">
          <p className="mission-panel text-xl font-semibold leading-8 text-white/70">
            Вы можете взять с собой дополнительный комплект одежды и переодеться перед вечерней программой.
          </p>
          <p className="mission-panel text-xl font-semibold leading-8 text-white/70">
            Для девушек будет возможность подготовиться к вечеру прямо на площадке вместе со стилистом-визажистом.
          </p>
        </MotionReveal>
      </Container>
    </section>
  );
}
