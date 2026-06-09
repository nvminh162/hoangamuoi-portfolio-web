"use client";

import React from "react";
import { motion } from "framer-motion";
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
  const experiences: ExperienceItem[] = [
    {
      id: "diem-hang",
      company: "DIEM HANG IELTS",
      role: "Consultant",
      period: "01/2023 - Current",
      location: "Hanoi, Vietnam (Online)",
      logo: "/experiance/diemhangielts.png",
      bullets: [
        "Provide course consultation appropriate to customers' qualifications and needs.",
        "Customer care.",
      ],
    },
    {
      id: "private-tutor",
      role: "Private English Tutor",
      period: "6/2024 - Current",
      location: "HCMC, Vietnam",
      logo: "/experiance/pet.jpg",
      bullets: [
        "Support students with weak academic performance to achieve basic communication skills",
        "Assist students in developing their listening, speaking, reading, and writing skills through personalized support.",
        "Monitor students' progress and offer constructive feedback to help them overcome learning difficulties.",
      ],
    },
    {
      id: "bambi",
      company: "BAMBI ENGLISH",
      role: "Teaching Assistant",
      period: "08/2023 - 01/2024",
      location: "HCMC, Vietnam",
      logo: "/experiance/bambi.jpg",
      bullets: [
        "Teaching English at the center for children to take Starters, Movers, and Flyers",
      ],
    },
    {
      id: "tpp-academy",
      company: "TPP Academy",
      role: "Teaching Assistant",
      period: "11/2024 – 05/2025",
      location: "HCMC, Vietnam",
      logo: "/experiance/tpp.jpg",
      bullets: [
        "Assisted teachers in preparing and delivering classroom activities and learning materials.",
        "Supported students in developing their English communication skills through in-class guidance and practice.",
        "Provided additional assistance to students with weak academic performance and monitored their learning progress.",
        "Helped manage classroom activities and maintained a positive learning environment.",
        "Assisted students in achieving their target scores, including TOEIC 600+ and VSTEP B1–B2 certifications.",
      ],
    },
    {
      id: "interpreter",
      role: "Interpreter",
      period: "03/2024 – Current",
      logo: "/experiance/interpreter.png",
      bullets: [
        "Provide accurate interpretation between Vietnamese and English in meetings, discussions, and daily communications.",
        "Facilitate effective communication between clients, partners, and team members from different linguistic backgrounds.",
        "Experience participating in training on Vietnamese language teaching methods for foreigners.",
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
          EXPERIENCE
        </h2>
      </motion.div>

      {/* Main Content Container (Centered) */}
      <div className="flex-1 w-full max-w-4xl mx-auto px-8 md:px-16 py-12 flex flex-col justify-center text-black">
        {/* Intro */}
        <div className="mb-12 flex flex-col items-center text-center">
          <h3 className="font-playfair text-2xl md:text-3xl font-bold text-primary tracking-wider uppercase inline-block border-b border-primary/20 pb-2 mb-2">
            PLACES I'VE WORKED
          </h3>
          <p className="text-xs md:text-sm font-semibold text-black/75 max-w-2xl leading-relaxed mt-2">
            Since 2023, I have had the privilege to work with educational centers and individual students, enabling me to hone my pedagogical mindset, communication skills, and linguistics capabilities.
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
