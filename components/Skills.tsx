"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "Teamwork", level: 95 },
    { name: "Effective Communication", level: 90 },
    { name: "Effective Multi-tasking", level: 85 },
    { name: "Trilingual Capabilities", level: 80 },
    { name: "MOS Certificate", level: 95 }
  ];

  const languages = [
    { name: "Vietnamese", desc: "Native Speaker", flag: "/skill/vietnam.png" },
    { name: "English", desc: "Advanced", flag: "/skill/english.png" },
    { name: "Chinese", desc: "Conversational", flag: "/skill/china.png" }
  ];

  return (
    <section id="skills" className="w-full min-h-screen bg-brand-bg flex flex-col justify-between select-none">
      {/* Header Banner */}
      <motion.div
        className="w-full bg-primary py-4 px-8 md:px-16 flex items-center justify-center shrink-0"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-brand-bg font-serif font-bold tracking-[0.2em] uppercase text-center">
          SKILLS
        </h2>
      </motion.div>

      <div className="flex-1 w-full max-w-6xl mx-auto px-8 md:px-16 py-12 flex items-center justify-center text-black">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 w-full items-start">

          {/* Skills (Left Column - 7 cols) */}
          <motion.div
            className="lg:col-span-7 flex flex-col gap-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-primary tracking-wider uppercase inline-block border-b border-primary/20 pb-2 mb-2">
                PROFESSIONAL SKILLS
              </h3>
              <p className="text-[10px] md:text-xs text-black/60 font-semibold uppercase tracking-widest mt-1">
                Core competencies and capabilities
            </p>
            </div>

            <div className="space-y-5 mt-4">
              {skills.map((skill, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between items-center text-sm font-bold text-black/90">
                    <span>{skill.name}</span>
                    <span className="text-primary font-mono text-xs">{skill.level}%</span>
                  </div>
                  {/* Progress Bar Container */}
                  <div className="w-full h-2 bg-primary/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Languages (Right Column - 5 cols) */}
          <motion.div
            className="lg:col-span-5 flex flex-col gap-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div>
              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-primary tracking-wider uppercase inline-block border-b border-primary/20 pb-2 mb-2">
                LANGUAGES
              </h3>
              <p className="text-[10px] md:text-xs text-black/60 font-semibold uppercase tracking-widest mt-1">
                Linguistic proficiencies
              </p>
            </div>

            {/* Flags container */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-6 mt-6">
              {languages.map((lang, idx) => {
                return (
                  <div key={idx} className="flex items-center gap-4 bg-white/40 border border-primary/5 p-4 rounded-2xl shadow-sm hover:shadow transition-shadow flex-1">
                    {/* Flag Image */}
                    <div className="w-14 h-14 shrink-0 bg-white border border-primary/10 rounded-xl overflow-hidden shadow-sm flex items-center justify-center p-2">
                      <img
                        src={lang.flag}
                        alt={lang.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="flex flex-col">
                      <span className="font-bold text-black/95 text-base leading-snug">
                        {lang.name}
                      </span>
                      <span className="text-xs text-black/60 font-semibold font-mono tracking-wide mt-0.5">
                        {lang.desc}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Spacer to push content to center */}
      <div className="h-4 shrink-0"></div>
    </section>
  );
}
