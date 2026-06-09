"use client";

import React from "react";
import { motion } from "framer-motion";

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  logo: string;
  bullets: string[];
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      id: "diem-hang",
      company: "DIEM HANG IELTS",
      role: "Consultant",
      period: "01/2023 - Present",
      logo: "/experiance/diemhangielts.png",
      bullets: [
        "Advised students and parents on IELTS preparation courses and path designs, helping them select the most effective learning strategies.",
        "Conducted initial proficiency assessments to analyze strengths and weaknesses, recommending appropriate class levels and personalized pathways.",
        "Maintained regular follow-ups to track students' progress, gathering feedback to continuously improve course quality and customer satisfaction.",
      ],
    },
    {
      id: "private-tutor",
      company: "PRIVATE TUTOR",
      role: "Private and Personal Tutor",
      period: "10/2023 - 09/2024",
      logo: "/experiance/tpp.jpg",
      bullets: [
        "Designed personalized English lesson plans tailored to individual student needs, learning speeds, and goals.",
        "Conducted intensive one-on-one sessions focusing on grammar correction, vocabulary expansion, and speaking confidence.",
        "Monitored, analyzed, and recorded student progress, adjusting teaching methodologies to achieve high learning outcomes.",
      ],
    },
    {
      id: "bambi",
      company: "BAMBI ENGLISH",
      role: "Teaching Assistant",
      period: "08/2023 - 01/2024",
      logo: "/experiance/bambi.jpg",
      bullets: [
        "Assisted primary teachers in managing classroom activities, ensuring a safe, interactive, and positive learning environment.",
        "Supported young learners in preparing for Cambridge Certificates (Starters, Movers, Flyers) through focused drills and games.",
        "Coordinated closely with lead teachers to evaluate student performance, providing detailed progress reports to parents.",
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
          {experiences.map((exp, idx) => (
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
              <div className="w-24 h-24 md:w-28 md:h-28 shrink-0 bg-white border border-primary/10 rounded-xl overflow-hidden shadow-sm flex items-center justify-center p-3">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Content Panel */}
              <div className="flex-1">
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-black leading-snug">
                    {exp.role}
                  </h4>
                  <span className="text-primary font-bold text-xs md:text-sm inline-block mt-0.5">
                    #{exp.company}
                  </span>
                  <p className="text-[10px] md:text-xs font-mono font-bold text-black/50 mt-0.5 uppercase tracking-wider">
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
          ))}
        </div>
      </div>

      {/* Spacer to push content to center */}
      <div className="h-4 shrink-0"></div>
    </section>
  );
}
