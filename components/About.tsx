"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="w-full min-h-screen bg-brand-bg flex flex-col justify-between">
      {/* Header Banner */}
      <motion.div
        className="w-full bg-primary py-4 px-8 md:px-16 flex items-center justify-center shrink-0"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-brand-bg font-serif font-bold tracking-[0.2em] uppercase text-center">
          ABOUT
        </h2>
      </motion.div>

      {/* Main Layout Grid (Centered) */}
      <div className="flex-1 w-full max-w-6xl mx-auto px-8 md:px-16 py-12 flex items-center justify-center text-black">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center w-full">
          {/* Left Column (Photo) */}
          <motion.div
            className="md:col-span-5 lg:col-span-4 flex flex-col items-center justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Portrait Image */}
            <img
              src="/hoangamuoi.png"
              alt="HOANG A MUOI"
              className="w-full max-w-[280px] md:max-w-full aspect-[3/4] object-cover border-2 border-primary rounded-none shadow-md"
            />
          </motion.div>

          {/* Right Column (Bio) */}
          <motion.div
            className="md:col-span-7 lg:col-span-8 flex flex-col gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Header Info */}
            <div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-playfair tracking-tight text-primary leading-none font-bold uppercase">
                HOANG A MUOI
              </h2>
              
              <p className="text-xs md:text-sm font-sans font-black tracking-[0.18em] text-black uppercase mt-3 mb-5">
                TEACHING ASSISTANT
              </p>
              
              <div className="space-y-4 text-sm md:text-base leading-relaxed text-justify text-black/90 font-semibold">
                <p>
                  I am a responsible person and have the ability to integrate quickly. I am always ready to learn new things and can absorb them quickly. I hope that I can achieve great achievements in my work as well as bring many benefits to the company.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Spacer to push content to center */}
      <div className="h-4 shrink-0"></div>
    </section>
  );
}
