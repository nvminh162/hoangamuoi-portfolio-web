import Header from "@/components/Header";
import PortfolioHero from "@/components/PortfolioHero";
import About from "@/components/About";
import Career from "@/components/Career";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import ThankYou from "@/components/ThankYou";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-brand-bg flex flex-col scroll-smooth">
      <Header />
      <PortfolioHero />
      <About />
      <Career />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <ThankYou />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
