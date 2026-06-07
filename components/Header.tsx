"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Portfolio", href: "portfolio" },
  { label: "About Me", href: "about" },
  { label: "Contact", href: "contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`z-50 transition-all duration-500 ease-in-out ${isScrolled
        ? "fixed top-18 right-2 flex flex-col items-center gap-3 p-4 bg-primary text-brand-bg rounded-2xl shadow-2xl border border-brand-bg/20 scale-95"
        : "absolute top-0 left-0 w-full flex flex-row justify-end gap-6 px-8 md:px-16 py-8 bg-transparent text-primary"
        }`}
    >
      {/* Decorative star accent when scrolled */}
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
        {NAV_LINKS.map((link, i) => (
          <a
            key={link.href}
            href={`#${link.href}`}
            onClick={(e) => handleNavClick(e, link.href)}
            className={`hover:opacity-80 transition-opacity ${
              isScrolled
                ? `text-brand-bg pb-1 w-full text-center ${i < NAV_LINKS.length - 1 ? "border-b border-brand-bg/25" : ""}`
                : ""
            }`}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
