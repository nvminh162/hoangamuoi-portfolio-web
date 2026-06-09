"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
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

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    router.refresh();
  };

  return (
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
        {/* Nav links */}
        <nav className="flex flex-row gap-6 text-xs md:text-sm font-semibold tracking-wider">
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

        {/* Language Switcher */}
        <div className="flex flex-row items-center gap-2.5 text-xs md:text-sm font-bold border-l border-primary/20 pl-6 h-4 leading-none">
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
      </div>
    </header>
  );
}
