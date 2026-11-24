import { Audience } from "@/components/Audience";
import { CaseStudy } from "@/components/CaseStudy";
import { Comparison } from "@/components/Comparison";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <CaseStudy />
        <Services />
        <Audience />
        <Process />
        <Comparison />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
