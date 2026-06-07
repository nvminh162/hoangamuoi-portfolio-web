"use client";

import { motion } from "framer-motion";
import { Calendar, Phone, Mail, MapPin, Linkedin } from "lucide-react";

const ContactIcon = ({ icon: Icon }: { icon: React.ComponentType<any> }) => (
  <span className="w-7 h-7 flex items-center justify-center bg-primary text-brand-bg rounded-full shrink-0">
    <Icon className="w-4 h-4" />
  </span>
);

export default function About() {
  return (
    <section id="about" className="w-full min-h-screen bg-brand-bg flex flex-col">
      {/* Header Banner */}
      <motion.div
        className="w-full bg-primary py-4 px-8 md:px-16 flex items-center gap-2 shrink-0"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-xl md:text-2xl text-brand-bg font-sans font-medium">✦</span>
        <h2 className="text-xl md:text-2xl text-brand-bg font-serif font-bold tracking-widest uppercase">
          ABOUT ME
        </h2>
      </motion.div>

      {/*
        Layout strategy (mobile-first):
          order-1: Photo          → top on mobile,  col-span-4 row-1 on desktop
          order-2: Right column   → second on mobile, col-span-8 rows 1-2 on desktop
          order-3: Contact + Work → bottom on mobile, col-span-4 row-2 on desktop
        Desktop uses explicit grid placement so photo & right column share row 1,
        and contact/work sits below photo in the same left column (row 2).
      */}
      <div className="flex-1 max-w-6xl w-full mx-auto px-8 md:px-16 py-8 grid grid-cols-1 md:grid-cols-12 md:grid-rows-[auto_1fr] gap-10 text-black">

        {/* ── Photo ── order-1 on mobile │ col 1-4, row 1 on desktop */}
        <motion.div
          className="order-1 md:col-span-4 md:row-start-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <img
            src="/hoangamuoi.png"
            alt="HOANG A MUOI"
            className="w-full aspect-[3/4] object-cover border-2 border-primary rounded-none shadow-sm"
          />
        </motion.div>

        {/* ── Right Column ── order-2 on mobile │ col 5-12, rows 1-2 on desktop */}
        <motion.div
          className="order-2 md:col-span-8 md:row-start-1 md:row-span-2 flex flex-col gap-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Header Info */}
          <div>
            <h2 className="text-5xl md:text-[5.5rem] font-playfair tracking-tight text-primary leading-none font-bold uppercase">
              HOANG A MUOI
            </h2>
            
            <p className="text-xs md:text-sm font-sans font-black tracking-[0.18em] text-black uppercase mt-4 mb-6">
              TEACHING ASSISTANT | COURSE CONSULTANT | ENGLISH LINGUISTICS
            </p>
            
            <div className="space-y-5 text-sm md:text-base leading-relaxed text-justify text-black/90 font-semibold">
              <p>
                Hello, I am Hoang A Muoi – an English Language Teaching Assistant passionate about creating engaging and effective language learning environments!
              </p>
              <p>
                I am highly responsible, adaptable, and quick to absorb new methodologies. I specialize in class assistance, course consultation, and training children for Cambridge certificates (Starters, Movers, Flyers). Over my teaching journey, I have successfully supported students in improving their core communication skills and confidence.
              </p>
              <p>
                I hope this portfolio highlights my pedagogical mindset, dedication, and potential as a language education specialist ready to contribute maximum value.
              </p>
            </div>
          </div>

          {/* CAREER GOALS */}
          <div className="flex flex-col gap-4">
            <h3 className="font-playfair text-2xl font-bold text-primary tracking-wider uppercase border-b border-primary/20 pb-1.5">
              CAREER GOALS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm font-bold text-black/90 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <span className="text-primary font-black text-base">✦</span>
                <p>Improve qualifications and soft skills to serve as a strong foundation for development in the teaching field.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-primary font-black text-base">✦</span>
                <p>Participate in specialized activities and modern seminars to learn and expand field-specific knowledge.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-primary font-black text-base">✦</span>
                <p>Leverage English Linguistics background (Honors) and IELTS 8.5 to provide excellent guidance.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-primary font-black text-base">✦</span>
                <p>Acquire a Master's degree in Applied Linguistics to advance as a university lecturer specializing in languages.</p>
              </div>
            </div>
          </div>

          {/* SUB-GRID: 2x2 flat layout for perfect horizontal alignment */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
            {/* SKILLS */}
            <div className="flex flex-col gap-2">
              <h3 className="font-playfair text-2xl font-bold text-primary tracking-wider uppercase border-b border-primary/20 pb-1.5 mb-2">
                SKILLS
              </h3>
              <ul className="text-sm space-y-2 text-black/95 font-bold list-disc list-inside">
                <li>Teamwork</li>
                <li>Effective Communication</li>
                <li>Effective Multi-tasking</li>
                <li>Trilingual Capabilities</li>
                <li>MOS Certificate</li>
              </ul>
            </div>

            {/* LANGUAGES */}
            <div className="flex flex-col gap-2">
              <h3 className="font-playfair text-2xl font-bold text-primary tracking-wider uppercase border-b border-primary/20 pb-1.5 mb-2">
                LANGUAGES
              </h3>
              <div className="text-sm space-y-2.5 font-bold text-black/95">
                <div className="flex justify-between">
                  <span>Vietnamese</span>
                  <span className="text-black/60 font-mono text-xs">(Native)</span>
                </div>
                <div className="flex justify-between">
                  <span>English</span>
                  <span className="text-black/60 font-mono text-xs">(Advanced - IELTS 8.5)</span>
                </div>
                <div className="flex justify-between">
                  <span>Chinese</span>
                  <span className="text-black/60 font-mono text-xs">(Conversational)</span>
                </div>
              </div>
            </div>

            {/* CERTIFICATES */}
            <div className="flex flex-col gap-2">
              <h3 className="font-playfair text-2xl font-bold text-primary tracking-wider uppercase border-b border-primary/20 pb-1.5 mb-2">
                CERTIFICATES
              </h3>
              <ul className="text-sm list-disc list-inside space-y-2 text-black/95 font-bold">
                <li>IELTS Academic - 8.5 (IDP Center)</li>
                <li>Microsoft Office Specialist (MOS)</li>
                <li>Vietnamese Teaching Methods training</li>
              </ul>
            </div>

            {/* EDUCATION */}
            <div className="flex flex-col gap-2">
              <h3 className="font-playfair text-2xl font-bold text-primary tracking-wider uppercase border-b border-primary/20 pb-1.5 mb-2">
                EDUCATION
              </h3>
              <div className="text-sm space-y-1.5 font-bold text-black/95">
                <p className="font-extrabold text-black uppercase text-sm">Industrial University of HCMC</p>
                <p className="text-black/85">Bachelor of English Linguistics | 2023 - Present</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Contact + Work Experience ── order-3 on mobile │ col 1-4, row 2 on desktop */}
        <motion.div
          className="order-3 md:col-span-4 md:row-start-2 flex flex-col gap-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* CONTACT */}
          <div className="flex flex-col gap-4 shrink-0">
            <h3 className="font-playfair text-2xl font-bold text-primary tracking-wider uppercase border-b border-primary/20 pb-1.5">
              CONTACT
            </h3>
            <div className="text-sm space-y-3 font-semibold text-black/90">
              <div className="flex items-center gap-3">
                <ContactIcon icon={Calendar} />
                <span>19 November 2005</span>
              </div>
              <div className="flex items-center gap-3">
                <ContactIcon icon={Phone} />
                <span>+84 338673029</span>
              </div>
              <div className="flex items-center gap-3">
                <ContactIcon icon={Mail} />
                <a href="mailto:hoangsun1911@gmail.com" className="hover:underline">
                  hoangsun1911@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <ContactIcon icon={MapPin} />
                <span className="leading-snug">Le Duc Tho, Go Vap, HCMC, Vietnam</span>
              </div>
              <div className="flex items-center gap-3">
                <ContactIcon icon={Linkedin} />
                <a
                  href="https://linkedin.com/in/hoangamuoi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  linkedin.com/in/hoangamuoi
                </a>
              </div>
            </div>
          </div>

          {/* WORK EXPERIENCE */}
          <div className="flex flex-col gap-4 shrink-0">
            <h3 className="font-playfair text-2xl font-bold text-primary tracking-wider uppercase border-b border-primary/20 pb-1.5">
              WORK EXPERIENCE
            </h3>
            <div className="space-y-4 text-sm">
              <div>
                <div className="flex justify-between font-bold text-black text-sm md:text-[0.95rem]">
                  <span>DIEM HANG IELTS</span>
                  <span className="font-mono text-xs text-black/70 font-semibold">01/2023 - Present</span>
                </div>
                <p className="text-black/85 font-semibold mt-0.5">Consultant</p>
              </div>
              <div>
                <div className="flex justify-between font-bold text-black text-sm md:text-[0.95rem]">
                  <span>PRIVATE TUTOR</span>
                  <span className="font-mono text-xs text-black/70 font-semibold">10/2023 - 09/2024</span>
                </div>
                <p className="text-black/85 font-semibold mt-0.5">Private and Personal Tutor</p>
              </div>
              <div>
                <div className="flex justify-between font-bold text-black text-sm md:text-[0.95rem]">
                  <span>BAMBI ENGLISH</span>
                  <span className="font-mono text-xs text-black/70 font-semibold">08/2023 - 01/2024</span>
                </div>
                <p className="text-black/85 font-semibold mt-0.5">Teaching Assistant</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
