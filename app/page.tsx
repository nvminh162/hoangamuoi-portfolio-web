import Header from "@/components/Header";
import PortfolioHero from "@/components/PortfolioHero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ThankYou from "@/components/ThankYou";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-brand-bg flex flex-col scroll-smooth">
      <Header />
      <PortfolioHero />
      <About />
      <Contact />
      <ThankYou />
      <Footer />
    </main>
  );
}



