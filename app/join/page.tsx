import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { ParticleField } from "@/components/ui/ParticleField";
import { paymentUrl } from "@/data/event";

export const metadata: Metadata = {
  title: "Подтверждение участия | SHOW МОЗГ GO ON",
  description: "Подтверждение участия и переход к оплате SHOW МОЗГ GO ON."
};

const telegram = "@Maria_Garanina";

export default function JoinPage() {
  return (
    <main className="noise-mask relative isolate min-h-screen overflow-hidden bg-[#050510] text-white">
      <ParticleField />
      <Image
        src="/images/mission-02.png"
        alt="Футуристический космический корабль перед переходом к оплате"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 z-0 object-cover object-center"
      />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_68%_22%,rgba(5,242,219,0.12),transparent_28rem),radial-gradient(circle_at_16%_74%,rgba(242,5,203,0.22),transparent_34rem),linear-gradient(180deg,rgba(5,5,16,0.52),#050510_86%)]" />
      <div className="absolute left-1/2 top-16 z-[2] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#EE05F2]/18 blur-3xl" />

      <Container className="relative z-10 flex min-h-screen items-center py-24 md:py-28">
        <div className="grid w-full gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-end">
          <MotionReveal className="max-w-4xl">
            <Link
              href="/"
              className="mb-10 inline-flex rounded-full border border-white/15 bg-white/[0.05] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-white/78 backdrop-blur-xl transition hover:border-[#05F2DB]/40 hover:text-white"
            >
              Вернуться на сайт
            </Link>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#05F2DB]">
              08 июня 2026 • Москва
            </p>
            <h1 className="font-display mt-6 text-5xl font-extrabold leading-[0.9] text-white md:text-7xl lg:text-[6.8rem]">
              SHOW МОЗГ GO ON
            </h1>
            <div className="mt-8 inline-flex items-baseline gap-4 rounded-full border border-[#05F2DB]/25 bg-[#05F2DB]/10 px-6 py-3 shadow-[0_0_44px_rgba(5,242,219,0.14)] backdrop-blur-xl">
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-white/58">Участие</span>
              <span className="font-display text-3xl font-black text-white">3 500 ₽</span>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.14} className="mission-panel">
            <p className="text-lg leading-8 text-white/84">
              Складчина организована исключительно для покрытия расходов на площадку, техническое
              обеспечение, питание, артистов, подарки и организацию мероприятия.
            </p>
            <div className="mt-8">
              <MagneticButton href={paymentUrl} target="_blank" rel="noreferrer" size="lg" className="w-full">
                Оплатить участие • 3 500 ₽
              </MagneticButton>
            </div>
          </MotionReveal>
        </div>
      </Container>

      <Container className="relative z-10 pb-24">
        <div className="grid gap-5 md:grid-cols-3">
          <MotionReveal className="glass-panel">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#F205CB]">Важно</p>
            <p className="mt-4 text-base leading-7 text-white/82">
              Все лекции и выступления будут доступны в записи. Если вы не сможете присутствовать на
              дневной программе лично, вы получите доступ ко всем материалам после мероприятия.
            </p>
          </MotionReveal>

          <MotionReveal delay={0.08} className="glass-panel">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#05F2DB]">
              После оплаты обязательно напишите
            </p>
            <p className="mt-4 font-display text-2xl font-black text-white">{telegram}</p>
            <ul className="mt-5 space-y-3 text-base leading-7 text-white/82">
              <li>ваш ник в Telegram</li>
              <li>имя и фамилию</li>
              <li>скриншот оплаты</li>
            </ul>
            <p className="mt-5 text-sm leading-6 text-white/58">
              Только после этого мы добавим вас в список участников мероприятия.
            </p>
          </MotionReveal>

          <MotionReveal delay={0.16} className="glass-panel">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#05C7F2]">
              Если оплата не проходит
            </p>
            <p className="mt-4 text-base leading-7 text-white/82">
              Напишите {telegram}. Мы поможем решить вопрос вручную.
            </p>
          </MotionReveal>
        </div>
      </Container>
    </main>
  );
}
