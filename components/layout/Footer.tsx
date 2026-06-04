import { Container } from "@/components/layout/Container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050510] py-8">
      <Container className="flex flex-col gap-3 text-sm text-white/48 md:flex-row md:items-center md:justify-between">
        <p>SHOW МОЗГ GO ON · Birthday event Екатерины Скоблик</p>
        <p>08 июня 2026 · Москва</p>
      </Container>
    </footer>
  );
}
