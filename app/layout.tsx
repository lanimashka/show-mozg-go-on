import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://show-mozg-go-on.vercel.app"),
  title: "SHOW МОЗГ GO ON | Birthday Event Екатерины Скоблик",
  description:
    "08 июня 2026, Москва. День рождения Екатерины Скоблик: идеи, сильное окружение, шоу и праздничная программа.",
  openGraph: {
    title: "SHOW МОЗГ GO ON",
    description:
      "Один день. Новые знакомства. Новые идеи. Новая орбита.",
    images: ["/images/hero-station.svg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
