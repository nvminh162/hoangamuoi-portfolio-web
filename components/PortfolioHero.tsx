import React from "react";

export default function PortfolioHero() {
  return (
    <section 
      id="portfolio"
      className="relative flex flex-col justify-between w-full h-[90vh] bg-brand-bg px-8 md:px-16 py-8 select-none"
    >
      {/* Top Navigation Bar */}
      <nav className="flex justify-end gap-6 text-sm font-semibold tracking-wider text-primary">
        <a href="#portfolio" className="hover:opacity-80 transition-opacity">Portfolio!</a>
        <a href="#about" className="hover:opacity-80 transition-opacity">Về mình</a>
        <a href="#project-01" className="hover:opacity-80 transition-opacity">01. HOW</a>
        <a href="#project-02" className="hover:opacity-80 transition-opacity">02. ANYTIME</a>
        <a href="#project-03" className="hover:opacity-80 transition-opacity">03. LIIVEE</a>
      </nav>

      {/* Main Hero Content */}
      <div className="flex-1 flex flex-col items-center justify-center relative">
        {/* Tilted Tags */}
        <div className="absolute top-[35%] md:top-[38%] left-[55%] md:left-[58%] flex flex-col items-start gap-1">
          <span className="text-[10px] md:text-xs font-mono border border-primary text-primary px-2 py-0.5 rounded-full rotate-[12deg] bg-brand-bg">
            Marketing
          </span>
          <span className="text-[10px] md:text-xs font-mono border border-primary text-primary px-2 py-0.5 rounded-full rotate-[12deg] bg-brand-bg ml-6">
            2026
          </span>
        </div>

        {/* Title */}
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-serif tracking-tight text-primary flex items-center justify-center gap-2">
            <span className="text-3xl md:text-5xl font-sans relative -top-4 md:-top-6">+</span>
            PORTFOLIO
          </h1>
          <p className="text-sm md:text-base font-bold tracking-[0.25em] text-primary mt-2 uppercase">
            Emmi Nguyễn
          </p>
        </div>
      </div>

      {/* Bottom spacing indicator */}
      <div className="flex justify-center text-xs opacity-50 font-mono tracking-widest text-primary">
        [ PORTFOLIO HERO SECTION • HEIGHT: 90VH ]
      </div>
    </section>
  );
}
