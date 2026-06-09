"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function PortfolioHero() {
  const t = useTranslations("PortfolioHero");

  return (
    <section 
      id="portfolio"
      className="relative flex flex-col justify-between w-full h-screen bg-brand-bg px-8 md:px-16 py-8 select-none overflow-hidden"
    >
      {/* Space where header navigates */}
      <div className="h-8"></div>

      {/* Main Hero Content */}
      <div className="flex-1 flex flex-col items-center justify-center relative">
        <div className="relative flex flex-col items-center">
          {/* Main Title Container */}
          <div className="relative inline-block">
            {/* Gemini Icon on the left */}
            <motion.img 
              src="/gemini.png" 
              alt="Gemini Star" 
              className="absolute -left-6 md:-left-12 -top-1 md:-top-3 w-6 h-6 md:w-10 md:h-10 select-none object-contain"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            />

            {/* Title */}
            <motion.h1 
              className="text-5xl md:text-[8rem] font-serif tracking-tight text-primary leading-none select-none font-medium"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              {t("title")}
            </motion.h1>

            {/* English Language Tag */}
            <motion.span 
              className="absolute -top-5 md:-top-[2.4rem] left-[62%] md:left-[66%] -rotate-[10deg] text-[10px] md:text-[1.2rem] font-playfair font-black italic text-black select-none whitespace-nowrap bg-brand-bg px-1.5 py-0.5 z-10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {t("tag")}
            </motion.span>

            {/* 2026 Tag */}
            <motion.span 
              className="absolute top-[12%] md:top-[16%] -right-12 md:-right-20 rotate-[12deg] text-[9px] md:text-sm font-playfair font-bold border border-primary text-primary px-2.5 py-0.5 rounded-full bg-white select-none shadow-sm z-10"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              2026
            </motion.span>
          </div>

          {/* Subtitle */}
          <motion.p 
            className="text-sm md:text-[1.25rem] font-extrabold tracking-[0.3em] text-black mt-6 uppercase select-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            HOANG A MUOI
          </motion.p>
        </div>
      </div>
    </section>
  );
}
