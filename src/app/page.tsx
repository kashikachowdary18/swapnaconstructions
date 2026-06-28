import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { StatisticsStrip } from "@/components/sections/StatisticsStrip";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { WorkWeSupport } from "@/components/sections/WorkWeSupport";
import { Machinery } from "@/components/sections/Machinery";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { SafetyQuality } from "@/components/sections/SafetyQuality";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatisticsStrip />
        <About />
        <Services />
        <WorkWeSupport />
        <Machinery />
        <WhyChooseUs />
        <SafetyQuality />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
