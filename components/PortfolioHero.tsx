import React from "react";

export default function PortfolioHero() {
  return (
    <section 
      id="portfolio"
      className="relative flex flex-col justify-between w-full h-[90vh] bg-brand-bg px-8 md:px-16 py-8 select-none"
    >
      {/* Space where header navigates */}
      <div className="h-8"></div>

      {/* Main Hero Content */}
      <div className="flex-1 flex flex-col items-center justify-center relative">
        <div className="relative flex flex-col items-center">
          {/* Main Title Container */}
          <div className="relative inline-block">
             {/* Gemini Icon on the left */}
            <img 
              src="/gemini.png" 
              alt="Gemini Star" 
              className="absolute -left-6 md:-left-12 -top-1 md:-top-3 w-6 h-6 md:w-10 md:h-10 select-none object-contain"
            />

            {/* Title */}
            <h1 className="text-6xl md:text-[9.5rem] font-serif tracking-tight text-primary leading-none select-none font-medium">
              PORTFOLIO
            </h1>

            {/* English Language Tag */}
            <span className="absolute -top-5 md:-top-[2.2rem] left-[62%] md:left-[66%] -rotate-[10deg] text-[9px] md:text-base font-playfair font-black italic text-black select-none whitespace-nowrap bg-brand-bg px-1.5 py-0.5 z-10">
              English Language
            </span>

            {/* 2026 Tag */}
            <span className="absolute top-[12%] md:top-[16%] -right-12 md:-right-20 rotate-[12deg] text-[9px] md:text-sm font-playfair font-bold border border-primary text-primary px-2.5 py-0.5 rounded-full bg-white select-none shadow-sm z-10">
              2026
            </span>
          </div>

          {/* Subtitle */}
          <p className="text-xs md:text-base font-extrabold tracking-[0.3em] text-black mt-6 uppercase select-none">
            Hoàng A Muội
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
