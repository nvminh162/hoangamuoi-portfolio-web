"use client";

import { motion } from "framer-motion";

export default function ThankYou() {
  return (
    <section 
      id="thankyou"
      className="relative flex flex-col justify-between w-full h-screen bg-brand-bg px-8 md:px-16 py-8 select-none"
    >
      {/* Spacer */}
      <div className="h-8"></div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center relative">
        <div className="relative flex flex-col items-center">
          {/* Title Container */}
          <div className="relative inline-block">
            {/* Gemini Star Icon */}
            <motion.img 
              src="/gemini.png" 
              alt="Gemini Star" 
              className="absolute -left-6 md:-left-12 -top-1 md:-top-3 w-6 h-6 md:w-10 md:h-10 select-none object-contain"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />

            {/* Title */}
            <motion.h1 
              className="text-5xl md:text-[8rem] font-serif tracking-tight text-primary leading-none select-none font-medium"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              THANK YOU
            </motion.h1>

            {/* Portfolio Tag */}
            <motion.span 
              className="absolute -top-5 md:-top-[2.4rem] left-[62%] md:left-[66%] -rotate-[10deg] text-[10px] md:text-[1.2rem] font-playfair font-black italic text-black select-none whitespace-nowrap bg-brand-bg px-1.5 py-0.5 z-10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              PORTFOLIO
            </motion.span>

            {/* 2026 Tag */}
            <motion.span 
              className="absolute top-[12%] md:top-[16%] -right-12 md:-right-20 rotate-[12deg] text-[9px] md:text-sm font-playfair font-bold border border-primary text-primary px-2.5 py-0.5 rounded-full bg-white select-none shadow-sm z-10"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              2026
            </motion.span>
          </div>
        </div>
      </div>
    </section>
  );
}
