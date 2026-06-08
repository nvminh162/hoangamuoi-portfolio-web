"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full bg-brand-bg py-4 px-8 md:px-16 border-t border-black/5 flex items-center justify-center text-center select-none">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <p className="text-[11px] font-sans font-light text-black/50 flex flex-wrap justify-center items-center gap-x-1 gap-y-0.5">
          <span>Designed & Developed by</span>
          <a
            href="https://nvminh162.id.vn"
            target="_blank"
            rel="noopener noreferrer"
            className="font-normal text-primary hover:underline transition-all duration-300"
          >
            @nvminh162
          </a>
          <span>❤️</span>
        </p>
      </motion.div>
    </footer>
  );
}
