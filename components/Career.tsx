"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Career() {
  const t = useTranslations("Career");
  const goals = [
    t("goals.0"),
    t("goals.1"),
    t("goals.2"),
    t("goals.3")
  ];

  return (
    <section id="career" className="w-full min-h-screen bg-brand-bg flex flex-col justify-between select-none">
      {/* Header Banner */}
      <motion.div
        className="w-full bg-primary py-4 px-8 md:px-16 flex items-center justify-center shrink-0"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-brand-bg font-serif font-bold tracking-[0.2em] uppercase text-center">
          {t("title")}
        </h2>
      </motion.div>

      {/* Timeline Content (Centered) */}
      <div className="flex-1 w-full max-w-5xl mx-auto px-8 md:px-16 py-12 flex flex-col justify-center text-black">
        {/* Intro */}
        <div className="mb-12 flex flex-col items-center text-center">
          <h3 className="font-playfair text-2xl md:text-3xl font-bold text-primary tracking-wider uppercase inline-block border-b border-primary/20 pb-2 mb-2">
            {t("subtitle")}
          </h3>
          <p className="text-xs md:text-sm font-semibold text-black/75 max-w-xl leading-relaxed mt-2">
            {t("desc")}
          </p>
        </div>

        <div className="w-full relative py-8">
          {/* Center Vertical Line */}
          <div className="absolute left-[35px] md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20"></div>

          <div className="space-y-12 md:space-y-16 relative">
            {goals.map((goal, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-start md:items-center ${isLeft ? "md:flex-row-reverse" : ""
                    }`}
                >
                  {/* Spacer (Desktop Only) */}
                  <div className="w-full md:w-1/2 hidden md:block"></div>

                  {/* Timeline Node Dot */}
                  <motion.div
                    className="absolute left-[26px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-brand-bg z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 300, delay: idx * 0.1 }}
                  />

                  {/* Card Container */}
                  <motion.div
                    className="w-full md:w-1/2 pl-12 md:pl-8 pr-2 md:pr-8"
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                  >
                    <motion.div
                      className="p-6 bg-white/50 border border-primary/10 rounded-xl shadow-sm hover:shadow-md transition-shadow relative"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <p className="text-sm md:text-base font-bold text-black/90 leading-relaxed">
                        {goal}
                      </p>
                    </motion.div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Spacer to push content to center */}
      <div className="h-4 shrink-0"></div>
    </section>
  );
}
