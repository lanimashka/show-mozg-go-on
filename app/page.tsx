import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCta } from "@/components/ui/StickyMobileCta";
import { HeroSection } from "@/components/sections/HeroSection";
import { OriginSection } from "@/components/sections/OriginSection";
import { PeopleSection } from "@/components/sections/PeopleSection";
import { DayNightSection } from "@/components/sections/DayNightSection";
import { AtmosphereSection } from "@/components/sections/AtmosphereSection";
import { PulseMakersSection } from "@/components/sections/PulseMakersSection";
import { DayRouteSection } from "@/components/sections/DayRouteSection";
import { EntrySection } from "@/components/sections/EntrySection";
import { VenueSection } from "@/components/sections/VenueSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <OriginSection />
        <PeopleSection />
        <DayNightSection />
        <AtmosphereSection />
        <PulseMakersSection />
        <DayRouteSection />
        <EntrySection />
        <VenueSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
