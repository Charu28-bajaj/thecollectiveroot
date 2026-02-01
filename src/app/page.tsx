import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Philosophy } from "@/components/Philosophy";
import { EmpatheticLeadership } from "@/components/EmpatheticLeadership";
import { FrameworkCards } from "@/components/FrameworkCards";
import { Sustainability } from "@/components/Sustainability";
import { ImpactSection } from "@/components/ImpactSection";
import { Timeline } from "@/components/Timeline";
import { Culture } from "@/components/Culture";
import { QuoteBlock } from "@/components/QuoteBlock";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Philosophy />
        <EmpatheticLeadership />
        <FrameworkCards />
        <Sustainability />
        <ImpactSection />
        <Timeline />
        <Culture />
        <QuoteBlock />
        <Footer />
      </main>
    </>
  );
}
