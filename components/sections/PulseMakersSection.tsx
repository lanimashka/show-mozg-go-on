import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function PulseMakersSection() {
  return (
    <section id="docking" className="relative isolate min-h-[92svh] overflow-hidden py-28 md:py-36">
      <Image
        src="/images/mission-03.png"
        alt="Космонавт на неоновой планете с кристаллами и кольцами"
        fill
        sizes="100vw"
        className="absolute inset-0 z-0 object-cover object-center"
      />
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(5,5,16,0.78)_0%,rgba(5,5,16,0.44)_48%,rgba(5,5,16,0.82)_100%),linear-gradient(180deg,#050510_0%,transparent_42%,#050510_100%)]" />
      <div className="absolute bottom-[10%] left-[10%] z-[2] h-72 w-72 rounded-full bg-[#F205CB]/24 blur-3xl" />
      <Container className="relative z-10 flex min-h-[calc(92svh-14rem)] items-center">
        <MotionReveal className="max-w-5xl">
          <p className="mb-6 text-xs font-black uppercase tracking-[0.26em] text-[#05F2DB]">
            Космический докинг
          </p>
          <h2 className="font-display text-5xl font-extrabold leading-[0.92] text-white md:text-8xl">
            Лаунж будущего между дневной и вечерней частью.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="mission-panel">
              <p className="text-3xl font-extrabold text-white">Днем</p>
              <p className="mt-4 text-xl font-semibold leading-8 text-white/68">
                Кофе-брейк с потрясающими пирогами и горячими напитками.
              </p>
            </div>
            <div className="mission-panel">
              <p className="text-3xl font-extrabold text-white">Вечером</p>
              <p className="mt-4 text-xl font-semibold leading-8 text-white/68">
                Полноценный фуршет с закусками, горячительными и безалкогольными напитками.
              </p>
            </div>
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
}
