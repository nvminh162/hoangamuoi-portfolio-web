import Header from "@/components/Header";
import PortfolioHero from "@/components/PortfolioHero";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-brand-bg flex flex-col scroll-smooth">
      <Header />
      <PortfolioHero />
      <About />
    </main>
  );
}


