import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { paymentHref } from "@/data/event";

export function AtmosphereSection() {
  return (
    <section id="atmosphere" className="relative min-h-[100svh] overflow-hidden py-28 md:py-36">
      <Image src="/images/party-light.svg" alt="" fill className="absolute inset-0 -z-20 object-cover opacity-70" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#050510_0%,rgba(5,5,16,0.78)_42%,rgba(5,5,16,0.36)_100%),linear-gradient(180deg,#050510_0%,transparent_42%,#050510_100%)]" />
      <Container className="flex min-h-[calc(100svh-14rem)] items-center">
        <MotionReveal className="max-w-6xl">
          <h2 className="font-display text-6xl font-extrabold leading-[0.92] text-white md:text-[8.6rem]">
            Не банкет. <br />
            Не форум. <br />
            <span className="text-gradient">Событие.</span>
          </h2>
          <p className="mt-10 max-w-3xl text-2xl font-semibold leading-snug text-white/76 md:text-4xl">
            Вечер, который вспоминают не по расписанию, а по ощущениям.
          </p>
          <div className="mt-12">
            <MagneticButton href={paymentHref} size="lg">
              Присоединиться
            </MagneticButton>
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
}
