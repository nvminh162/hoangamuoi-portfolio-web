"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

interface ExperienceItem {
  id: string;
  company?: string;
  role: string;
  period: string;
  location?: string;
  logo?: string;
  bullets: string[];
}

export default function Experience() {
  const t = useTranslations("Experience");

  const experiences: ExperienceItem[] = [
    {
      id: "diem-hang",
      company: "DIEM HANG IELTS",
      role: t("diem-hang.role"),
      period: "01/2023 - Current",
      location: t("diem-hang.location"),
      logo: "/experiance/diemhangielts.png",
      bullets: [
        t("diem-hang.bullets.0"),
        t("diem-hang.bullets.1"),
      ],
    },
    {
      id: "private-tutor",
      role: t("private-tutor.role"),
      period: "6/2024 - Current",
      location: t("private-tutor.location"),
      logo: "/experiance/pet.jpg",
      bullets: [
        t("private-tutor.bullets.0"),
        t("private-tutor.bullets.1"),
        t("private-tutor.bullets.2"),
      ],
    },
    {
      id: "bambi",
      company: "BAMBI ENGLISH",
      role: t("bambi.role"),
      period: "08/2023 - 01/2024",
      location: t("bambi.location"),
      logo: "/experiance/bambi.jpg",
      bullets: [
        t("bambi.bullets.0"),
        t("bambi.bullets.1"),
        t("bambi.bullets.2"),
      ],
    },
    {
      id: "tpp-academy",
      company: "TPP Academy",
      role: t("tpp-academy.role"),
      period: "11/2024 -5/2026",
      location: t("tpp-academy.location"),
      logo: "/experiance/tpp.jpg",
      bullets: [
        t("tpp-academy.bullets.0"),
        t("tpp-academy.bullets.1"),
        t("tpp-academy.bullets.2"),
        t("tpp-academy.bullets.3"),
        t("tpp-academy.bullets.4"),
      ],
    },
    {
      id: "interpreter",
      role: t("interpreter.role"),
      period: "03/2025 – Current",
      logo: "/experiance/interpreter.png",
      bullets: [
        t("interpreter.bullets.0"),
        t("interpreter.bullets.1"),
        t("interpreter.bullets.2"),
      ],
    },
  ];

  return (
    <section id="experience" className="w-full min-h-screen bg-brand-bg flex flex-col justify-between select-none">
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

      {/* Main Content Container (Centered) */}
      <div className="flex-1 w-full max-w-4xl mx-auto px-8 md:px-16 py-12 flex flex-col justify-center text-black">
        {/* Intro */}
        <div className="mb-12 flex flex-col items-center text-center">
          <h3 className="font-playfair text-2xl md:text-3xl font-bold text-primary tracking-wider uppercase inline-block border-b border-primary/20 pb-2 mb-2">
            {t("subtitle")}
          </h3>
          <p className="text-xs md:text-sm font-semibold text-black/75 max-w-2xl leading-relaxed mt-2">
            {t("desc")}
          </p>
        </div>

        {/* Stack of experiences */}
        <div className="relative border-l-2 border-primary/20 pl-6 md:pl-10 space-y-12">
          {experiences.map((exp, idx) => {
            return (
              <motion.div
                key={exp.id}
                className="flex flex-col md:flex-row gap-6 md:gap-8 items-start relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                {/* Dot indicator on the vertical timeline line */}
                <div className="absolute -left-[33px] md:-left-[47px] top-6 w-3 h-3 rounded-full bg-primary border-2 border-brand-bg"></div>

                {/* Logo / Company Identity */}
                {exp.logo && (
                  <div className="w-24 h-24 md:w-28 md:h-28 shrink-0 bg-white border border-primary/10 rounded-xl overflow-hidden shadow-sm flex items-center justify-center p-3">
                    <img
                      src={exp.logo}
                      alt={exp.company || exp.role}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}

                {/* Content Panel */}
                <div className="flex-1">
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-black leading-snug">
                      {exp.role}
                    </h4>
                    {(exp.company || exp.location) && (
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-0.5">
                        {exp.company && (
                          <span className="text-primary font-bold text-xs md:text-sm">
                            {exp.company}
                          </span>
                        )}
                        {exp.location && (
                          <span className="text-black/60 text-xs font-semibold">
                            {exp.company ? `• ${exp.location}` : exp.location}
                          </span>
                        )}
                      </div>
                    )}
                    <p className="text-[10px] md:text-xs font-mono font-bold text-black/50 mt-1 uppercase tracking-wider">
                      {exp.period}
                    </p>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2 mt-4 text-xs md:text-sm leading-relaxed text-black/90 font-semibold">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <span className="text-primary font-black text-xs select-none shrink-0 mt-0.5">
                          ▷
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Spacer to push content to center */}
      <div className="h-4 shrink-0"></div>
    </section>
  );
}
