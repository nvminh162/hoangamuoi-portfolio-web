"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    { label: t("portfolio"), href: "portfolio" },
    { label: t("about"), href: "about" },
    { label: t("career"), href: "career" },
    { label: t("experience"), href: "experience" },
    { label: t("skills"), href: "skills" },
    { label: t("education"), href: "education" },
    { label: t("contact"), href: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    setIsOpen(false);
    handleNavClick(e, id);
  };

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    router.refresh();
  };

  return (
    <>
      <header
        className={`z-50 transition-all duration-300 ease-in-out fixed top-0 left-0 w-full flex flex-row justify-between items-center px-8 md:px-16 ${
          isScrolled
            ? "bg-brand-bg/90 backdrop-blur-md shadow-md border-b border-primary/10 py-4 text-primary"
            : "bg-transparent py-8 text-primary"
        }`}
      >
        {/* Left side spacer or logo if any, currently empty to keep nav right-aligned */}
        <div></div>

        <div className="flex flex-row items-center gap-6">
          {/* Nav links (Desktop) */}
          <nav className="hidden md:flex flex-row gap-6 text-xs md:text-sm font-semibold tracking-wider">
            {navLinks.map((link) => (
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

          {/* Language Switcher (Desktop) */}
          <div className="hidden md:flex flex-row items-center gap-2.5 text-xs md:text-sm font-bold border-l border-primary/20 pl-6 h-4 leading-none">
            {["en", "vi", "zh"].map((lang) => (
              <button
                key={lang}
                onClick={() => handleLocaleChange(lang)}
                className={`cursor-pointer transition-all leading-none pb-0.5 ${
                  locale === lang
                    ? "text-primary border-b border-primary"
                    : "text-black/45 hover:text-primary"
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Hamburger Button (Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[6px] cursor-pointer z-50 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="h-[2px] w-6 bg-primary rounded-full origin-center"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="h-[2px] w-6 bg-primary rounded-full"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="h-[2px] w-6 bg-primary rounded-full origin-center"
            />
          </button>
        </div>
      </header>

      {/* Drawer Menu (Mobile) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/25 backdrop-blur-sm md:hidden"
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed right-0 top-0 bottom-0 w-[70%] max-w-[280px] z-45 bg-brand-bg/95 backdrop-blur-md shadow-2xl border-l border-primary/10 flex flex-col justify-between p-8 pt-24 md:hidden"
            >
              {/* Navigation Links */}
              <nav className="flex flex-col gap-6 text-base font-bold tracking-wider text-primary">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.href}
                    href={`#${link.href}`}
                    onClick={(e) => handleMobileNavClick(e, link.href)}
                    className="hover:opacity-85 transition-opacity pb-2 border-b border-primary/5"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              {/* Language Switcher inside Drawer */}
              <div className="flex flex-col gap-3 mt-12 border-t border-primary/10 pt-5">
                <div className="flex flex-row items-center gap-3 text-sm font-bold">
                  {["en", "vi", "zh"].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => handleLocaleChange(lang)}
                      className={`cursor-pointer transition-all pb-1.5 ${
                        locale === lang
                          ? "text-primary border-b border-primary"
                          : "text-black/45 hover:text-primary"
                      }`}
                    >
                      {lang.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
