import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { paymentHref } from "@/data/event";

const words = ["Предприниматели", "Креаторы", "Маркетологи", "Эксперты", "Друзья", "Партнеры"];

export function PeopleSection() {
  return (
    <section id="people" className="relative min-h-[100svh] overflow-hidden py-28 md:py-36">
      <Image src="/images/party-light.svg" alt="" fill className="absolute inset-0 -z-20 object-cover opacity-55" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#050510_0%,rgba(5,5,16,0.55)_44%,#050510_100%)]" />
      <Container className="flex min-h-[calc(100svh-14rem)] flex-col justify-center">
        <MotionReveal className="max-w-6xl">
          <h2 className="font-display text-5xl font-extrabold leading-[0.95] text-white md:text-8xl">
            Главная ценность этого дня — люди рядом.
          </h2>
        </MotionReveal>
        <MotionReveal delay={0.15} className="mt-12 flex max-w-5xl flex-wrap gap-x-6 gap-y-4">
          {words.map((word, index) => (
            <span
              key={word}
              className={`font-display text-3xl font-extrabold leading-none md:text-6xl ${
                index % 2 ? "text-white/42" : "text-gradient"
              }`}
            >
              {word}
            </span>
          ))}
        </MotionReveal>
        <MotionReveal delay={0.25} className="mt-14">
          <MagneticButton href={paymentHref} variant="ghost" size="lg">
            Быть внутри
          </MagneticButton>
        </MotionReveal>
      </Container>
    </section>
  );
}
