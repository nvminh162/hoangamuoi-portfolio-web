"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="w-full bg-black py-2.5 px-8 md:px-16 border-t border-white/5 flex items-center justify-center text-center select-none">
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <p className="text-[10px] font-sans font-light text-white/50 flex flex-wrap justify-center items-center gap-x-1 gap-y-0.5">
          <span>{t("text")}</span>
          <a
            href="https://nvminh162.id.vn"
            target="_blank"
            rel="noopener noreferrer"
            className="font-normal text-white/80 hover:text-white hover:underline transition-all duration-300"
          >
            @nvminh162
          </a>
          <span>❤️</span>
        </p>
      </motion.div>
    </footer>
  );
}
