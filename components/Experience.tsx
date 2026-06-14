"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Lightbox from "./Lightbox";

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
  onClick?: () => void;
}

function MediaFrame({ src, alt, type, label, onClick }: MediaFrameProps) {
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

  // Handle cases where src is empty or error
  const isPlaceholder = !src || hasError;

  if (type === "main") {
    return (
      <div className="w-full h-full flex flex-col items-center select-none">
        <div 
          onClick={onClick}
          className={`relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-primary/10 bg-white/40 backdrop-blur-sm group transition-all duration-300 ${onClick ? "cursor-pointer" : ""}`}
        >
          {isPlaceholder ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-3 border-2 border-dashed border-primary/15 rounded-2xl bg-primary/[0.01]">
              <span className="text-primary text-xl mb-1.5">🖼️</span>
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

  // Polaroid Scrapbook Style for sub-gallery items
  return (
    <div className="w-full h-full flex flex-col items-center select-none">
      {/* Polaroid Card container */}
      <div 
        onClick={onClick}
        className={`w-full max-w-[260px] md:max-w-none bg-white border border-primary/10 p-1.5 rounded-sm shadow-md hover:shadow-xl hover:scale-105 hover:rotate-0 transition-all duration-300 flex flex-col bg-gradient-to-b from-white to-neutral-50/50 ${onClick ? "cursor-pointer" : ""}`}
      >
        
        {/* Photo area */}
        <div className="relative w-full aspect-[3/4] overflow-hidden bg-neutral-100 border border-black/5 shadow-inner">
          {isPlaceholder ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2 bg-primary/[0.02]">
              <span className="text-primary text-lg mb-1">📷</span>
              <span className="text-[7px] font-mono text-black/40 break-all px-1 bg-black/5 rounded py-0.5 leading-normal select-text max-w-[90%]">
                {src || `[Placeholder Path]`}
              </span>
            </div>
          ) : (
            <>
              {loading && (
                <div className="absolute inset-0 bg-neutral-100 flex items-center justify-center">
                  <span className="text-[8px] text-primary/40 animate-pulse">Loading...</span>
                </div>
              )}
              <img
                src={src}
                alt={alt}
                className="absolute inset-0 w-full h-full object-cover"
                onLoad={() => setLoading(false)}
                onError={() => setHasError(true)}
              />
            </>
          )}
        </div>

      </div>
    </div>
  );
}

export default function Experience() {
  const t = useTranslations("Experience");

  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    images: { src: string; label: string }[];
    initialIndex: number;
  }>({
    isOpen: false,
    images: [],
    initialIndex: 0,
  });

  const openLightbox = (images: { src: string; label: string }[], index: number) => {
    setLightboxState({
      isOpen: true,
      images,
      initialIndex: index,
    });
  };

  const getExperienceImages = (exp: ExperienceItem) => {
    const list: { src: string; label: string }[] = [];
    if (exp.mainImage) {
      list.push({ src: exp.mainImage, label: exp.mainImageLabel });
    }
    if (exp.subImages && exp.subImages.length > 0) {
      exp.subImages.forEach((img) => {
        list.push({ src: img.path, label: img.label });
      });
    }
    return list;
  };

  const experiences: ExperienceItem[] = [
    {
      id: "diem-hang",
      company: "DIEM HANG IELTS",
      role: t("diem-hang.role"),
      period: "01/2023 - Current",
      location: t("diem-hang.location"),
      mainImage: "/experiance/diemhangielts_logo.png",
      mainImageLabel: "Diem Hang IELTS Logo",
      galleryTitle: "",
      bullets: [
        t("diem-hang.bullets.0"),
        t("diem-hang.bullets.1"),
      ],
      subImages: [],
    },
    {
      id: "interpreter",
      role: t("interpreter.role"),
      period: "03/2025 – Current",
      mainImage: "/experiance/interpreter_logo.png",
      mainImageLabel: "Interpreter Logo",
      galleryTitle: "",
      bullets: [
        t("interpreter.bullets.0"),
        t("interpreter.bullets.1"),
        t("interpreter.bullets.2"),
      ],
      subImages: [],
    },
    {
      id: "bambi",
      company: "BAMBI ENGLISH",
      role: t("bambi.role"),
      period: "08/2023 - 01/2024",
      location: t("bambi.location"),
      mainImage: "/experiance/bambi/logo.jpg",
      mainImageLabel: "Bambi English Center",
      galleryTitle: t("bambi.galleryTitle"),
      bullets: [
        t("bambi.bullets.0"),
        t("bambi.bullets.1"),
        t("bambi.bullets.2"),
      ],
      subImages: [
        { path: "/experiance/bambi/1.png", label: "Vocabulary Games" },
        { path: "/experiance/bambi/2.png", label: "Class Activities" },
        { path: "/experiance/bambi/3.png", label: "Pronunciation Card" },
        { path: "/experiance/bambi/4.png", label: "Speaking practice" },
      ],
    },
    {
      id: "private-tutor",
      role: t("private-tutor.role"),
      period: "6/2024 - Current",
      location: t("private-tutor.location"),
      mainImage: "/experiance/pet/logo.jpg",
      mainImageLabel: "Private Tutor Brand",
      galleryTitle: t("private-tutor.galleryTitle"),
      bullets: [
        t("private-tutor.bullets.0"),
        t("private-tutor.bullets.1"),
        t("private-tutor.bullets.2"),
      ],
      subImages: [
        { path: "/experiance/pet/1.png", label: "Quiz Interface" },
        { path: "/experiance/pet/2.png", label: "Tutoring Material 1" },
        { path: "/experiance/pet/3.png", label: "Tutoring Material 2" },
        { path: "/experiance/pet/4.png", label: "Student Progress Track" },
        { path: "/experiance/pet/5.png", label: "Grammar Activity" },
        { path: "/experiance/pet/6.png", label: "Speaking practice" },
        { path: "/experiance/pet/7.png", label: "Listening Quiz" },
        { path: "/experiance/pet/8.png", label: "Student Graduation" },
      ],
    },
    {
      id: "tpp-academy",
      company: "TPP Academy",
      role: t("tpp-academy.role"),
      period: "11/2024 -5/2026",
      location: t("tpp-academy.location"),
      mainImage: "/experiance/tpp/logo.jpg",
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
        { path: "/experiance/tpp/1.png", label: "Student Platform" },
        { path: "/experiance/tpp/2.png", label: "Presentation Work" },
        { path: "/experiance/tpp/3.png", label: "Class Exercises" },
        { path: "/experiance/tpp/4.png", label: "Score Certificates" },
        { path: "/experiance/tpp/5.png", label: "Grammar Test Sheet" },
        { path: "/experiance/tpp/6.png", label: "Classroom Speech" },
        { path: "/experiance/tpp/7.png", label: "Interactive Activity" },
        { path: "/experiance/tpp/8.png", label: "Vocabulary Board Game" },
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
                  <div className={exp.mainImage ? "lg:col-span-8 flex flex-col gap-4" : "lg:col-span-12 flex flex-col gap-4"}>
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
                  {exp.mainImage && (
                    <div className="lg:col-span-4 w-full max-w-[280px] lg:max-w-none mx-auto">
                      <MediaFrame
                        src={exp.mainImage}
                        alt={exp.company || exp.role}
                        type="main"
                        label={exp.mainImageLabel}
                        onClick={() => {
                          const imgs = getExperienceImages(exp);
                          openLightbox(imgs, 0);
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* Lower block: Sub-gallery */}
                {exp.subImages && exp.subImages.length > 0 && (
                  <div className="flex flex-col gap-6 mt-4">
                    {/* Centered decorative gallery header */}
                    <div className="flex items-center justify-center gap-2 md:gap-3 w-full px-4 overflow-hidden">
                      <span className="h-[1px] w-8 md:w-16 bg-primary/20 shrink-0"></span>
                      <h5 className="font-playfair text-xs md:text-sm font-black text-primary uppercase tracking-[0.25em] whitespace-normal md:whitespace-nowrap text-center px-1">
                        {exp.galleryTitle}
                      </h5>
                      <span className="h-[1px] w-8 md:w-16 bg-primary/20 shrink-0"></span>
                    </div>

                    {exp.id === "bambi" ? (
                      /* Bambi Freestyle: Polaroid layout (4 items) */
                      <>
                        {/* Mobile Layout (2x2 grid) */}
                        <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto w-full pt-4 pb-6 md:hidden">
                          <div className="rotate-[-2deg] translate-y-1 hover:rotate-0 transition-transform duration-300">
                            <MediaFrame
                              src={exp.subImages[0].path}
                              alt={`${exp.company || exp.role} gallery 1`}
                              type="portrait"
                              label={exp.subImages[0].label}
                              onClick={() => {
                                const imgs = getExperienceImages(exp);
                                const idx = exp.mainImage ? 1 : 0;
                                openLightbox(imgs, idx);
                              }}
                            />
                          </div>
                          <div className="rotate-[1.5deg] -translate-y-2 hover:rotate-0 transition-transform duration-300">
                            <MediaFrame
                              src={exp.subImages[1].path}
                              alt={`${exp.company || exp.role} gallery 2`}
                              type="portrait"
                              label={exp.subImages[1].label}
                              onClick={() => {
                                const imgs = getExperienceImages(exp);
                                const idx = exp.mainImage ? 2 : 1;
                                openLightbox(imgs, idx);
                              }}
                            />
                          </div>
                          <div className="rotate-[-1deg] translate-y-2 hover:rotate-0 transition-transform duration-300">
                            <MediaFrame
                              src={exp.subImages[2].path}
                              alt={`${exp.company || exp.role} gallery 3`}
                              type="portrait"
                              label={exp.subImages[2].label}
                              onClick={() => {
                                const imgs = getExperienceImages(exp);
                                const idx = exp.mainImage ? 3 : 2;
                                openLightbox(imgs, idx);
                              }}
                            />
                          </div>
                          <div className="rotate-[2deg] -translate-y-1 hover:rotate-0 transition-transform duration-300">
                            <MediaFrame
                              src={exp.subImages[3].path}
                              alt={`${exp.company || exp.role} gallery 4`}
                              type="portrait"
                              label={exp.subImages[3].label}
                              onClick={() => {
                                const imgs = getExperienceImages(exp);
                                const idx = exp.mainImage ? 4 : 3;
                                openLightbox(imgs, idx);
                              }}
                            />
                          </div>
                        </div>

                        {/* Desktop Layout (Current layout) */}
                        <div className="hidden md:grid grid-cols-12 gap-6 items-center max-w-4xl mx-auto w-full pt-4 pb-6">
                          {/* Column 1: Polaroid (Col span 4) */}
                          <div className="col-span-4 flex justify-center rotate-[-2deg] translate-y-1 hover:rotate-0 transition-transform duration-300">
                            <MediaFrame
                              src={exp.subImages[0].path}
                              alt={`${exp.company || exp.role} gallery 1`}
                              type="portrait"
                              label={exp.subImages[0].label}
                              onClick={() => {
                                const imgs = getExperienceImages(exp);
                                const idx = exp.mainImage ? 1 : 0;
                                openLightbox(imgs, idx);
                              }}
                            />
                          </div>
                          {/* Column 2: Stack of 2 portrait cards (Col span 4) */}
                          <div className="col-span-4 flex flex-col gap-6 justify-center">
                            <div className="rotate-[1.5deg] -translate-y-2 hover:rotate-0 transition-transform duration-300">
                              <MediaFrame
                                src={exp.subImages[1].path}
                                alt={`${exp.company || exp.role} gallery 2`}
                                type="portrait"
                                label={exp.subImages[1].label}
                                onClick={() => {
                                  const imgs = getExperienceImages(exp);
                                  const idx = exp.mainImage ? 2 : 1;
                                  openLightbox(imgs, idx);
                                }}
                              />
                            </div>
                            <div className="rotate-[-1deg] translate-y-2 hover:rotate-0 transition-transform duration-300">
                              <MediaFrame
                                src={exp.subImages[2].path}
                                alt={`${exp.company || exp.role} gallery 3`}
                                type="portrait"
                                label={exp.subImages[2].label}
                                onClick={() => {
                                  const imgs = getExperienceImages(exp);
                                  const idx = exp.mainImage ? 3 : 2;
                                  openLightbox(imgs, idx);
                                }}
                              />
                            </div>
                          </div>
                          {/* Column 3: Standard Portrait Card (Col span 4) */}
                          <div className="col-span-4 flex justify-center rotate-[2deg] -translate-y-1 hover:rotate-0 transition-transform duration-300">
                            <MediaFrame
                              src={exp.subImages[3].path}
                              alt={`${exp.company || exp.role} gallery 4`}
                              type="portrait"
                              label={exp.subImages[3].label}
                              onClick={() => {
                                const imgs = getExperienceImages(exp);
                                const idx = exp.mainImage ? 4 : 3;
                                openLightbox(imgs, idx);
                              }}
                            />
                          </div>
                        </div>
                      </>
                    ) : (
                      /* Pet and TPP Freestyle: 8 items in 2 custom rows */
                      <div className="flex flex-col gap-10 max-w-4xl mx-auto w-full pt-4 pb-6">
                        {/* Row 1: Social Post freestyle layout with staggered polaroids */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-end">
                          <div className="rotate-[-1.5deg] translate-y-2 hover:rotate-0 transition-transform duration-300">
                            <MediaFrame
                              src={exp.subImages[0].path}
                              alt={`${exp.company || exp.role} gallery 1`}
                              type="portrait"
                              label={exp.subImages[0].label}
                              onClick={() => {
                                const imgs = getExperienceImages(exp);
                                const idx = exp.mainImage ? 1 : 0;
                                openLightbox(imgs, idx);
                              }}
                            />
                          </div>
                          <div className="rotate-[2.5deg] -translate-y-2 hover:rotate-0 transition-transform duration-300">
                            <MediaFrame
                              src={exp.subImages[1].path}
                              alt={`${exp.company || exp.role} gallery 2`}
                              type="portrait"
                              label={exp.subImages[1].label}
                              onClick={() => {
                                const imgs = getExperienceImages(exp);
                                const idx = exp.mainImage ? 2 : 1;
                                openLightbox(imgs, idx);
                              }}
                            />
                          </div>
                          <div className="rotate-[-2deg] translate-y-1 hover:rotate-0 transition-transform duration-300">
                            <MediaFrame
                              src={exp.subImages[2].path}
                              alt={`${exp.company || exp.role} gallery 3`}
                              type="portrait"
                              label={exp.subImages[2].label}
                              onClick={() => {
                                const imgs = getExperienceImages(exp);
                                const idx = exp.mainImage ? 3 : 2;
                                openLightbox(imgs, idx);
                              }}
                            />
                          </div>
                          <div className="rotate-[1.5deg] -translate-y-1 hover:rotate-0 transition-transform duration-300">
                            <MediaFrame
                              src={exp.subImages[3].path}
                              alt={`${exp.company || exp.role} gallery 4`}
                              type="portrait"
                              label={exp.subImages[3].label}
                              onClick={() => {
                                const imgs = getExperienceImages(exp);
                                const idx = exp.mainImage ? 4 : 3;
                                openLightbox(imgs, idx);
                              }}
                            />
                          </div>
                        </div>

                        {/* Row 2: Grid of 4 standard portrait cards */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-end">
                          {exp.subImages.slice(4, 8).map((subImg, sIdx) => {
                            const transformClass = sIdx === 0 ? "rotate-[2deg] -translate-y-1" :
                                                   sIdx === 1 ? "rotate-[-2.5deg] translate-y-2" :
                                                   sIdx === 2 ? "rotate-[1deg] -translate-y-2" :
                                                                "rotate-[-1.5deg] translate-y-1";
                            return (
                              <div key={sIdx + 4} className={`${transformClass} hover:rotate-0 transition-transform duration-300`}>
                                <MediaFrame
                                  src={subImg.path}
                                  alt={`${exp.company || exp.role} gallery ${sIdx + 5}`}
                                  type="portrait"
                                  label={subImg.label}
                                  onClick={() => {
                                    const imgs = getExperienceImages(exp);
                                    const idx = exp.mainImage ? sIdx + 5 : sIdx + 4;
                                    openLightbox(imgs, idx);
                                  }}
                                />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Spacer to push content to center */}
      <div className="h-4 shrink-0"></div>

      <AnimatePresence>
        {lightboxState.isOpen && (
          <Lightbox
            images={lightboxState.images}
            initialIndex={lightboxState.initialIndex}
            onClose={() => setLightboxState((prev) => ({ ...prev, isOpen: false }))}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
