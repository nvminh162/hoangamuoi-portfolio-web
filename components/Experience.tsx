"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

interface SubImage {
  path: string;
  label: string;
}

interface ExperienceItem {
  id: string;
  company?: string;
  role: string;
  period: string;
  location?: string;
  mainImage: string;
  mainImageLabel: string;
  galleryTitle: string;
  subImages: SubImage[];
  bullets: string[];
}

interface MediaFrameProps {
  src: string;
  alt: string;
  type: "portrait" | "main";
  label: string;
}

function MediaFrame({ src, alt, type, label }: MediaFrameProps) {
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!src) {
      setHasError(true);
      setLoading(false);
      return;
    }
    const img = new window.Image();
    img.src = src;
    img.onload = () => {
      setLoading(false);
      setHasError(false);
    };
    img.onerror = () => {
      setLoading(false);
      setHasError(true);
    };
  }, [src]);

  // Define styling classes based on type
  let aspectClass = "aspect-square";
  if (type === "portrait") {
    aspectClass = "aspect-[3/4]";
  } else if (type === "main") {
    aspectClass = "aspect-[4/3]";
  }

  // Handle cases where src is empty or error
  const isPlaceholder = !src || hasError;

  return (
    <div className="w-full h-full flex flex-col items-center select-none">
      {/* Normal Portrait or Main Card */}
      <div className={`relative w-full ${aspectClass} rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-primary/10 bg-white/40 backdrop-blur-sm group transition-all duration-300`}>
        {isPlaceholder ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-3 border-2 border-dashed border-primary/15 rounded-2xl bg-primary/[0.01]">
            <span className="text-primary text-xl mb-1.5">{type === "main" ? "🖼️" : "📷"}</span>
            <span className="text-[10px] font-bold text-primary/80 uppercase tracking-wider px-1 leading-snug">{label}</span>
            <span className="text-[7.5px] font-mono text-black/50 mt-3 break-all px-1.5 bg-black/5 rounded py-0.5 max-w-[95%] leading-normal select-text">
              {src || `[Placeholder Path]`}
            </span>
          </div>
        ) : (
          <>
            {loading && (
              <div className="absolute inset-0 bg-[#EAE5D9]/50 flex items-center justify-center">
                <span className="text-[9px] text-primary/50 animate-pulse">Loading...</span>
              </div>
            )}
            <img
              src={src}
              alt={alt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onLoad={() => setLoading(false)}
              onError={() => setHasError(true)}
            />
          </>
        )}
      </div>
    </div>
  );
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
      mainImage: "/experiance/diemhang/logo.png",
      mainImageLabel: "Consulting Brand",
      galleryTitle: t("diem-hang.galleryTitle"),
      bullets: [
        t("diem-hang.bullets.0"),
        t("diem-hang.bullets.1"),
      ],
      subImages: [
        { path: "/experiance/diemhang/1.png", label: "Consulting App" },
        { path: "/experiance/diemhang/2.png", label: "Consultation Process" },
        { path: "/experiance/diemhang/3.png", label: "Client Care Service" },
        { path: "/experiance/diemhang/4.png", label: "Feedback Screenshot" },
      ],
    },
    {
      id: "private-tutor",
      role: t("private-tutor.role"),
      period: "6/2024 - Current",
      location: t("private-tutor.location"),
      mainImage: "/experiance/pet/logo_placeholder.png",
      mainImageLabel: "Private Tutor Brand",
      galleryTitle: t("private-tutor.galleryTitle"),
      bullets: [
        t("private-tutor.bullets.0"),
        t("private-tutor.bullets.1"),
        t("private-tutor.bullets.2"),
      ],
      subImages: [
        { path: "/experiance/pet/1_placeholder.png", label: "Quiz Interface" },
        { path: "/experiance/pet/2_placeholder.png", label: "Tutoring Material 1" },
        { path: "/experiance/pet/3_placeholder.png", label: "Tutoring Material 2" },
        { path: "/experiance/pet/4_placeholder.png", label: "Student Progress Track" },
      ],
    },
    {
      id: "bambi",
      company: "BAMBI ENGLISH",
      role: t("bambi.role"),
      period: "08/2023 - 01/2024",
      location: t("bambi.location"),
      mainImage: "/experiance/bambi/logo_placeholder.png",
      mainImageLabel: "Bambi English Center",
      galleryTitle: t("bambi.galleryTitle"),
      bullets: [
        t("bambi.bullets.0"),
        t("bambi.bullets.1"),
        t("bambi.bullets.2"),
      ],
      subImages: [
        { path: "/experiance/bambi/1_placeholder.png", label: "Vocabulary Games" },
        { path: "/experiance/bambi/2_placeholder.png", label: "Class Activities" },
        { path: "/experiance/bambi/3_placeholder.png", label: "Pronunciation Card" },
        { path: "/experiance/bambi/4_placeholder.png", label: "Speaking practice" },
      ],
    },
    {
      id: "tpp-academy",
      company: "TPP Academy",
      role: t("tpp-academy.role"),
      period: "11/2024 -5/2026",
      location: t("tpp-academy.location"),
      mainImage: "/experiance/tpp/logo_placeholder.png",
      mainImageLabel: "TPP Academy Logo",
      galleryTitle: t("tpp-academy.galleryTitle"),
      bullets: [
        t("tpp-academy.bullets.0"),
        t("tpp-academy.bullets.1"),
        t("tpp-academy.bullets.2"),
        t("tpp-academy.bullets.3"),
        t("tpp-academy.bullets.4"),
      ],
      subImages: [
        { path: "/experiance/tpp/1_placeholder.png", label: "Student Platform" },
        { path: "/experiance/tpp/2_placeholder.png", label: "Presentation Work" },
        { path: "/experiance/tpp/3_placeholder.png", label: "Class Exercises" },
        { path: "/experiance/tpp/4_placeholder.png", label: "Score Certificates" },
      ],
    },
    {
      id: "interpreter",
      role: t("interpreter.role"),
      period: "03/2025 – Current",
      mainImage: "/experiance/interpreter/logo.png",
      mainImageLabel: "Interpretation Service",
      galleryTitle: t("interpreter.galleryTitle"),
      bullets: [
        t("interpreter.bullets.0"),
        t("interpreter.bullets.1"),
        t("interpreter.bullets.2"),
      ],
      subImages: [
        { path: "/experiance/interpreter/1.png", label: "Translation Notes" },
        { path: "/experiance/interpreter/2.png", label: "Bilingual Resource" },
        { path: "/experiance/interpreter/3.png", label: "Conference Photo" },
        { path: "/experiance/interpreter/4.png", label: "Training Method Info" },
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
      <div className="flex-1 w-full max-w-5xl mx-auto px-8 md:px-12 py-12 flex flex-col justify-center gap-16 text-black">
        {/* Intro */}
        <div className="flex flex-col items-center text-center">
          <h3 className="font-playfair text-2xl md:text-3xl font-bold text-primary tracking-wider uppercase inline-block border-b border-primary/20 pb-2 mb-2">
            {t("subtitle")}
          </h3>
          <p className="text-xs md:text-sm font-semibold text-black/75 max-w-2xl leading-relaxed mt-2">
            {t("desc")}
          </p>
        </div>

        {/* Stack of experiences */}
        <div className="space-y-24">
          {experiences.map((exp, idx) => {
            return (
              <motion.div
                key={exp.id}
                className="flex flex-col gap-10 border-b border-primary/10 pb-16 last:border-b-0 last:pb-0"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
              >
                {/* Upper block: Title and text layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Left Column: Text info */}
                  <div className="lg:col-span-8 flex flex-col gap-4">
                    {/* Header */}
                    <div>
                      <h4 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-black text-primary leading-tight uppercase tracking-tight">
                        {exp.company || exp.role}
                      </h4>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mt-2 text-sm font-bold text-black/60">
                        {exp.company && (
                          <span className="text-black font-extrabold uppercase">
                            {exp.role}
                          </span>
                        )}
                        {exp.location && (
                          <span className="text-black/55">
                            • {exp.location}
                          </span>
                        )}
                        <span className="px-2.5 py-0.5 bg-primary/10 text-primary border border-primary/15 font-mono text-[10px] md:text-xs font-bold rounded uppercase tracking-wider">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Paragraphs (joined bullets) */}
                    <div className="space-y-4 mt-2 text-xs md:text-sm font-semibold text-black/80 leading-relaxed max-w-3xl text-justify">
                      {exp.bullets.map((bullet, bIdx) => (
                        <p key={bIdx}>
                          {bullet}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Main Image Frame */}
                  <div className="lg:col-span-4 w-full max-w-[280px] lg:max-w-none mx-auto">
                    <MediaFrame
                      src={exp.mainImage}
                      alt={exp.company || exp.role}
                      type="main"
                      label={exp.mainImageLabel}
                    />
                  </div>
                </div>

                {/* Lower block: Sub-gallery */}
                {exp.subImages && exp.subImages.length > 0 && (
                  <div className="flex flex-col gap-6 mt-4">
                    {/* Centered decorative gallery header */}
                    <div className="flex items-center justify-center gap-3">
                      <span className="h-[1px] w-8 md:w-16 bg-primary/20"></span>
                      <h5 className="font-playfair text-xs md:text-sm font-black text-primary uppercase tracking-[0.25em] whitespace-nowrap text-center">
                        {exp.galleryTitle}
                      </h5>
                      <span className="h-[1px] w-8 md:w-16 bg-primary/20"></span>
                    </div>

                    {/* Row of 4 items */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-end max-w-4xl mx-auto w-full">
                      {exp.subImages.map((subImg, sIdx) => (
                        <MediaFrame
                          key={sIdx}
                          src={subImg.path}
                          alt={`${exp.company || exp.role} gallery ${sIdx + 1}`}
                          type="portrait"
                          label={subImg.label}
                        />
                      ))}
                    </div>
                  </div>
                )}
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
