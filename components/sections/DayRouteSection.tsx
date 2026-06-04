import { Container } from "@/components/layout/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { paymentHref } from "@/data/event";

const scenes = ["Сбор гостей", "Первые разговоры", "Идеи днем", "Birthday show", "Фуршет", "Музыка", "Свободное общение"];

export function DayRouteSection() {
  return (
    <section id="route" className="relative min-h-[100svh] overflow-hidden py-28 md:py-36">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_30%,rgba(5,199,242,0.16),transparent_30rem),radial-gradient(circle_at_20%_75%,rgba(242,5,203,0.18),transparent_34rem)]" />
      <Container className="flex min-h-[calc(100svh-14rem)] flex-col justify-center">
        <MotionReveal className="max-w-6xl">
          <h2 className="font-display text-5xl font-extrabold leading-[0.96] text-white md:text-8xl">
            День развивается как фильм.
          </h2>
        </MotionReveal>
        <MotionReveal delay={0.15} className="mt-12 flex max-w-6xl flex-wrap gap-x-6 gap-y-4">
          {scenes.map((scene, index) => (
            <span
              key={scene}
              className={`font-display text-3xl font-extrabold leading-none md:text-6xl ${
                index % 3 === 0 ? "text-gradient" : "text-white/46"
              }`}
            >
              {scene}
            </span>
          ))}
        </MotionReveal>
        <MotionReveal delay={0.25} className="mt-14">
          <MagneticButton href={paymentHref} variant="ghost" size="lg">
            Занять место
          </MagneticButton>
        </MotionReveal>
      </Container>
    </section>
  );
}
