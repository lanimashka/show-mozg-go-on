import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function OriginSection() {
  return (
    <section id="about" className="relative isolate min-h-[100svh] overflow-hidden py-36 md:py-48">
      <Image
        src="/images/mission-05.png"
        alt="Футуристический космический город с планетой и орбитальными станциями"
        fill
        sizes="100vw"
        className="absolute inset-0 z-0 scale-105 object-cover object-center"
      />
      <div className="poster-ringed-world absolute -right-[18rem] top-[4rem] z-[1] h-[44rem] w-[44rem] md:-right-[10rem] md:h-[58rem] md:w-[58rem]" />
      <div className="space-lane absolute right-0 top-[40%] z-[3] h-[14rem] w-[58vw] opacity-70" />
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_78%_24%,rgba(5,242,219,0.2),transparent_31rem),radial-gradient(circle_at_18%_68%,rgba(242,5,203,0.22),transparent_34rem),linear-gradient(90deg,#050510_0%,rgba(5,5,16,0.74)_42%,rgba(5,5,16,0.26)_100%),linear-gradient(180deg,#050510_0%,transparent_38%,#050510_100%)]" />
      <div className="hero-star-depth absolute inset-0 z-[3]" />
      <Container className="relative z-10 flex min-h-[calc(100svh-18rem)] items-center">
        <MotionReveal className="max-w-5xl">
          <p className="mb-6 text-xs font-black uppercase tracking-[0.26em] text-[#05F2DB]">
            О событии
          </p>
          <h2 className="font-display text-5xl font-extrabold leading-[0.92] text-white md:text-[8rem]">
            Это не просто конференция.
          </h2>
          <div className="mt-9 max-w-3xl space-y-5 text-xl font-semibold leading-snug text-white/76 md:text-3xl">
            <p>Это день, где встречаются предприниматели, маркетологи, специалисты, эксперты и друзья.</p>
            <p>Днем мы говорим о нейросетях, маркетинге, технологиях, рекламе и будущем бизнеса.</p>
            <p>Вечером превращаемся в большую компанию единомышленников, чтобы отметить день рождения Екатерины Скоблик.</p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3 text-sm font-black uppercase tracking-[0.18em] text-white/72">
            <span className="holo-chip">Много общения</span>
            <span className="holo-chip">Новые знакомства</span>
            <span className="holo-chip">Полезные связи</span>
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
}
