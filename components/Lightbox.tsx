"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxImage {
  src: string;
  label: string;
}

interface LightboxProps {
  images: LightboxImage[];
  initialIndex: number;
  onClose: () => void;
}

export default function Lightbox({ images, initialIndex, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Sync state if initialIndex changes when opening
  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  // Handle arrow key and escape key bindings
  useEffect(() => {
    if (images.length === 0) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, images]);

  if (images.length === 0) return null;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const activeImage = images[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/60 backdrop-blur-md select-none"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white/80 hover:text-white rounded-full transition-all duration-300 z-50 border border-white/5 shadow-lg active:scale-95"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Main Content Area */}
      <div
        className="relative flex flex-col items-center justify-center max-w-[90vw] max-h-[80vh] md:max-w-4xl md:max-h-[85vh] p-2"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Navigation Arrow */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-[-16px] md:left-[-72px] top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white/80 hover:text-white rounded-full transition-all duration-300 z-40 border border-white/5 shadow-lg active:scale-95 cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Image Showcase */}
        <div className="relative overflow-hidden flex items-center justify-center rounded bg-black/10 border border-white/10 shadow-2xl">
          <motion.img
            key={currentIndex}
            src={activeImage.src}
            alt={activeImage.label}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="max-w-full max-h-[70vh] md:max-h-[75vh] object-contain select-none pointer-events-none"
          />
        </div>

        {/* Right Navigation Arrow */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-[-16px] md:right-[-72px] top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white/80 hover:text-white rounded-full transition-all duration-300 z-40 border border-white/5 shadow-lg active:scale-95 cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Caption & Metadata */}
        <div className="mt-6 flex flex-col items-center gap-1.5 text-center">
          <span className="text-white/95 font-serif text-sm md:text-lg font-black tracking-wide uppercase max-w-2xl px-4 leading-snug">
            {activeImage.label}
          </span>
          {images.length > 1 && (
            <span className="text-white/40 font-mono text-[11px] font-bold tracking-widest uppercase bg-white/5 px-2.5 py-0.5 rounded border border-white/5 mt-1">
              {currentIndex + 1} / {images.length}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
