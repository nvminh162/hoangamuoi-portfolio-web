"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`z-50 transition-all duration-500 ease-in-out ${isScrolled
        ? "fixed top-18 right-2 flex flex-col items-center gap-3 p-4 bg-primary text-brand-bg rounded-2xl shadow-2xl border border-brand-bg/20 scale-95"
        : "absolute top-0 left-0 w-full flex flex-row justify-end gap-6 px-8 md:px-16 py-8 bg-transparent text-primary"
        }`}
    >
      {/* Decorative vertical/horizontal line to accent */}
      {isScrolled && (
        <span className="text-xs font-bold font-sans text-brand-bg/50 mb-1 select-none animate-pulse">
          ✦
        </span>
      )}

      {/* Nav links */}
      <nav
        className={`flex transition-all duration-500 ease-in-out ${isScrolled
          ? "flex-col items-center gap-4 text-xs font-bold tracking-widest"
          : "flex-row gap-6 text-sm font-semibold tracking-wider"
          }`}
      >
        <a
          href="#portfolio"
          className={`hover:opacity-80 transition-opacity ${isScrolled ? "text-brand-bg border-b border-brand-bg/25 pb-1 w-full text-center" : ""
            }`}
        >
          Portfolio
        </a>
        <a
          href="#about"
          className={`hover:opacity-80 transition-opacity ${isScrolled ? "text-brand-bg border-b border-brand-bg/25 pb-1 w-full text-center" : ""
            }`}
        >
          About Me
        </a>
        <a
          href="#contact"
          className={`hover:opacity-80 transition-opacity ${isScrolled ? "text-brand-bg pb-1 w-full text-center" : ""
            }`}
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
