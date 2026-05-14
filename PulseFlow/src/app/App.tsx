import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Benefits } from "./components/Benefits";
import { HowItWorks } from "./components/HowItWorks";
import { Features } from "./components/Features";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      <Header />
      <main className="pt-16 md:pt-20">
        <Hero />
        <section id="beneficios">
          <Benefits />
        </section>
        <HowItWorks />
        <section id="funcionalidades">
          <Features />
        </section>
        <Testimonials />
        <section id="precos">
          <Pricing />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <CTA />
      </main>
      <Footer />
    </div>
  );
}