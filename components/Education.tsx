"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import Lightbox from "./Lightbox";

export default function Education() {
  const t = useTranslations("Education");

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

  const certificates = [
    {
      title: "IELTS Academic",
      issuer: "IDP Center",
      logo: "/education/certificate/ielts.jpg",
    },
    {
      title: "HSK3 Certificate",
      logo: "/education/certificate/hsk.webp",
    },
    {
      title: "Microsoft Office Specialist (MOS)",
      logo: "/education/certificate/mos.png",
    },
  ];

  const educationImages = [
    {
      src: "/education/university/iuh.png",
      label: t("uni"),
    },
    ...certificates.map((cert) => ({
      src: cert.logo,
      label: `${t("certs." + cert.title)}${cert.issuer ? ` (${cert.issuer})` : ""}`,
    })),
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
          {t("title")}
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
                {t("subtitle")}
              </h3>
              <p className="text-[10px] md:text-xs text-black/60 font-semibold uppercase tracking-widest mt-1">
                {t("desc")}
              </p>
            </div>

            <motion.div 
              className="bg-white/50 border border-primary/15 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-row gap-5 items-start cursor-pointer"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={() => openLightbox(educationImages, 0)}
            >
              {/* University Logo Box */}
              <div className="w-12 h-12 bg-white border border-primary/10 rounded-xl overflow-hidden shadow-sm flex items-center justify-center p-1.5 shrink-0">
                <img
                  src="/education/university/iuh.png"
                  alt="Industrial University of Ho Chi Minh City"
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="flex-1 flex flex-col">
                <h4 className="font-bold text-black/90 text-sm md:text-base leading-snug">
                  {t("uni")}
                </h4>
                <p className="text-black/85 font-semibold text-xs md:text-sm mt-0.5">
                  {t("major")}
                </p>
                <p className="text-[11px] text-black/60 font-semibold mt-1">
                  {t("location")}
                </p>
                <div className="w-fit px-2 py-0.5 bg-primary/10 border border-primary/20 text-primary font-mono text-[10px] md:text-xs font-bold rounded mt-2">
                  {t("period")}
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
                {t("certTitle")}
              </h3>
              <p className="text-[10px] md:text-xs text-black/60 font-semibold uppercase tracking-widest mt-1">
                {t("certDesc")}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {certificates.map((cert, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white/50 border border-primary/10 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-center gap-5 cursor-pointer"
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  onClick={() => openLightbox(educationImages, idx + 1)}
                >
                  {/* Certificate Logo Box */}
                  <div className="w-12 h-12 bg-white border border-primary/10 rounded-xl overflow-hidden shadow-sm flex items-center justify-center p-1.5 shrink-0">
                    <img
                      src={cert.logo}
                      alt={cert.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex flex-col">
                    <span className="font-bold text-black/90 text-sm md:text-base leading-snug">
                      {t("certs." + cert.title)}
                    </span>
                    {cert.issuer && (
                      <span className="text-xs text-black/55 font-semibold font-mono mt-0.5 uppercase tracking-wide">
                        {cert.issuer}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

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
