import { Container } from "@/components/layout/Container";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { faq } from "@/data/event";

export function EntrySection() {
  return (
    <section id="faq" className="relative isolate overflow-hidden py-28 md:py-36">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_20%,rgba(5,242,219,0.14),transparent_30rem),radial-gradient(circle_at_80%_70%,rgba(242,5,203,0.16),transparent_34rem),#050510]" />
      <Container className="relative z-10">
        <MotionReveal className="max-w-5xl">
          <p className="mb-6 text-xs font-black uppercase tracking-[0.26em] text-[#05F2DB]">FAQ</p>
          <h2 className="font-display text-5xl font-extrabold leading-[0.94] text-white md:text-8xl">
            Перед отправлением.
          </h2>
        </MotionReveal>
        <div className="mt-14 grid gap-4">
          {faq.map(([question, answer], index) => (
            <MotionReveal key={question} delay={index * 0.04} className="mission-panel grid gap-4 md:grid-cols-[1fr_0.8fr] md:items-center">
              <p className="text-2xl font-extrabold text-white md:text-3xl">{question}</p>
              <p className="text-xl font-semibold text-white/68">{answer}</p>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
