import Header from "@/components/Header";
import PortfolioHero from "@/components/PortfolioHero";
import About from "@/components/About";
import FeaturedProjects from "@/components/FeaturedProjects";
import ProjectOne from "@/components/ProjectOne";
import ProjectTwo from "@/components/ProjectTwo";
import ProjectThree from "@/components/ProjectThree";
import ThankYou from "@/components/ThankYou";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-brand-bg flex flex-col scroll-smooth">
      <Header />
      <PortfolioHero />
      <About />
      <FeaturedProjects />
      <ProjectOne />
      <ProjectTwo />
      <ProjectThree />
      <ThankYou />
    </main>
  );
}


