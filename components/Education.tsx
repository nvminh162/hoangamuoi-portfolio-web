"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  const certificates = [
    {
      title: "IELTS Academic - 8.5",
      issuer: "IDP Center",
    },
    {
      title: "Microsoft Office Specialist (MOS)",
      issuer: "Microsoft Certification",
    },
    {
      title: "Vietnamese Teaching Methods training",
      issuer: "Pedagogical Training Program",
    },
  ];

  return (
    <section id="education" className="w-full min-h-screen bg-brand-bg flex flex-col justify-between select-none">
      {/* Header Banner */}
      <motion.div
        className="w-full bg-primary py-4 px-8 md:px-16 flex items-center justify-center shrink-0"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-brand-bg font-serif font-bold tracking-[0.2em] uppercase text-center">
          EDUCATION
        </h2>
      </motion.div>

      {/* Main Content (Centered) */}
      <div className="flex-1 w-full max-w-6xl mx-auto px-8 md:px-16 py-12 flex items-center justify-center text-black">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 w-full items-start">
          
          {/* Education Column (Left - 6 cols) */}
          <motion.div
            className="lg:col-span-6 flex flex-col gap-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-primary tracking-wider uppercase inline-block border-b border-primary/20 pb-2 mb-2">
                EDUCATION
              </h3>
              <p className="text-[10px] md:text-xs text-black/60 font-semibold uppercase tracking-widest mt-1">
                Academic background
              </p>
            </div>

            <motion.div 
              className="bg-white/50 border border-primary/15 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col md:flex-row gap-6 items-start"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Cap Icon Box */}
              <div className="w-14 h-14 bg-primary text-brand-bg rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                <GraduationCap className="w-8 h-8" />
              </div>
              
              <div className="space-y-2.5">
                <h4 className="font-extrabold text-black uppercase text-lg md:text-xl leading-snug">
                  Industrial University of HCMC
                </h4>
                <p className="text-black/85 font-semibold text-sm md:text-base">
                  Bachelor of English Linguistics
                </p>
                <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 text-primary font-mono text-xs md:text-sm font-bold rounded-lg mt-1">
                  2023 - Present
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Certificates Column (Right - 6 cols) */}
          <motion.div
            className="lg:col-span-6 flex flex-col gap-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div>
              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-primary tracking-wider uppercase inline-block border-b border-primary/20 pb-2 mb-2">
                CERTIFICATES
              </h3>
              <p className="text-[10px] md:text-xs text-black/60 font-semibold uppercase tracking-widest mt-1">
                Professional certifications
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {certificates.map((cert, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white/50 border border-primary/10 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-center gap-5"
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Award Icon Box */}
                  <div className="w-11 h-11 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6" />
                  </div>

                  <div className="flex flex-col">
                    <span className="font-bold text-black/90 text-sm md:text-base leading-snug">
                      {cert.title}
                    </span>
                    <span className="text-xs text-black/55 font-semibold font-mono mt-0.5 uppercase tracking-wide">
                      {cert.issuer}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Spacer to push content to center */}
      <div className="h-4 shrink-0"></div>
    </section>
  );
}
