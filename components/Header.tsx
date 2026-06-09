"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Portfolio", href: "portfolio" },
  { label: "About", href: "about" },
  { label: "Goals", href: "career" },
  { label: "Experience", href: "experience" },
  { label: "Skills", href: "skills" },
  { label: "Education", href: "education" },
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
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - 60; // subtract header height offset
      
      const startPosition = window.scrollY;
      const distance = offsetPosition - startPosition;
      const duration = 800; // duration in ms
      let startTime: number | null = null;

      const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        } else {
          window.scrollTo(0, offsetPosition);
        }
      };

      requestAnimationFrame(animation);
    }
  };

  return (
    <header
      className={`z-50 transition-all duration-300 ease-in-out fixed top-0 left-0 w-full flex flex-row justify-end gap-6 px-8 md:px-16 ${
        isScrolled
          ? "bg-brand-bg/90 backdrop-blur-md shadow-md border-b border-primary/10 py-4 text-primary"
          : "bg-transparent py-8 text-primary"
      }`}
    >
      {/* Nav links */}
      <nav className="flex flex-row gap-6 text-xs md:text-sm font-semibold tracking-wider">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={`#${link.href}`}
            onClick={(e) => handleNavClick(e, link.href)}
            className="hover:opacity-80 transition-opacity"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
