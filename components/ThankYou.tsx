"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ThankYou() {
  const t = useTranslations("ThankYou");

  return (
    <section 
      id="thankyou"
      className="relative flex flex-col justify-between w-full h-screen bg-brand-bg px-8 md:px-16 py-8 select-none"
    >
      {/* Spacer */}
      <div className="h-8"></div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center relative">
        <div className="relative flex flex-col items-center">
          {/* Title Container */}
          <div className="relative inline-block">
            {/* Gemini Star Icon */}
            <motion.img 
              src="/gemini.png" 
              alt="Gemini Star" 
              className="absolute -left-6 md:-left-12 -top-1 md:-top-3 w-6 h-6 md:w-10 md:h-10 select-none object-contain"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />

            {/* Title */}
            <motion.h1 
              className="text-5xl md:text-[8rem] font-serif tracking-tight text-primary leading-none select-none font-medium"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              {t("title")}
            </motion.h1>

            {/* Portfolio Tag */}
            <motion.span 
              className="absolute -top-5 md:-top-[2.4rem] left-[62%] md:left-[66%] -rotate-[10deg] text-[10px] md:text-[1.2rem] font-playfair font-black italic text-black select-none whitespace-nowrap bg-brand-bg px-1.5 py-0.5 z-10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t("tag")}
            </motion.span>

            {/* 2026 Tag */}
            <motion.span 
              className="absolute top-[12%] md:top-[16%] -right-12 md:-right-20 rotate-[12deg] text-[9px] md:text-sm font-playfair font-bold border border-primary text-primary px-2.5 py-0.5 rounded-full bg-white select-none shadow-sm z-10"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              2026
            </motion.span>
          </div>

          {/* Direct Contacts Row */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mt-16 max-w-4xl px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Phone Button */}
            <a
              href="tel:+84338673029"
              className="flex items-center gap-2.5 px-4 py-2.5 bg-white/60 border border-primary/10 rounded-full shadow-sm hover:shadow-md hover:bg-white/80 active:scale-95 transition-all duration-300"
            >
              <div className="w-6 h-6 flex items-center justify-center bg-white border border-primary/5 rounded-full overflow-hidden shrink-0 p-0.5 shadow-sm">
                <img
                  src="/contact/phone-call.png"
                  alt="Phone"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col text-left leading-none">
                <span className="text-[7.5px] font-bold tracking-wider text-black/40 uppercase">
                  {t("phone")}
                </span>
                <span className="text-[10.5px] font-semibold text-black/85 mt-0.5 font-mono">
                  +84 338673029
                </span>
              </div>
            </a>

            {/* Gmail Button */}
            <a
              href="mailto:hoangsun1911@gmail.com"
              className="flex items-center gap-2.5 px-4 py-2.5 bg-white/60 border border-primary/10 rounded-full shadow-sm hover:shadow-md hover:bg-white/80 active:scale-95 transition-all duration-300"
            >
              <div className="w-6 h-6 flex items-center justify-center bg-white border border-primary/5 rounded-full overflow-hidden shrink-0 p-0.5 shadow-sm">
                <img
                  src="/contact/gmail.png"
                  alt="Gmail"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col text-left leading-none">
                <span className="text-[7.5px] font-bold tracking-wider text-black/40 uppercase">
                  {t("gmail")}
                </span>
                <span className="text-[10.5px] font-semibold text-black/85 mt-0.5 font-mono">
                  hoangsun1911@gmail.com
                </span>
              </div>
            </a>

            {/* Facebook Button */}
            <a
              href="https://facebook.com/hoang.muoi.94402343"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-4 py-2.5 bg-white/60 border border-primary/10 rounded-full shadow-sm hover:shadow-md hover:bg-white/80 active:scale-95 transition-all duration-300"
            >
              <div className="w-6 h-6 flex items-center justify-center bg-white border border-primary/5 rounded-full overflow-hidden shrink-0 p-0.5 shadow-sm">
                <img
                  src="/contact/facebook.png"
                  alt="Facebook"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col text-left leading-none">
                <span className="text-[7.5px] font-bold tracking-wider text-black/40 uppercase">
                  Facebook
                </span>
                <span className="text-[10.5px] font-semibold text-black/85 mt-0.5">
                  Muội Hoàng
                </span>
              </div>
            </a>

            {/* Instagram Button */}
            <a
              href="https://instagram.com/amuoi_1119"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-4 py-2.5 bg-white/60 border border-primary/10 rounded-full shadow-sm hover:shadow-md hover:bg-white/80 active:scale-95 transition-all duration-300"
            >
              <div className="w-6 h-6 flex items-center justify-center bg-white border border-primary/5 rounded-full overflow-hidden shrink-0 p-0.5 shadow-sm">
                <img
                  src="/contact/instagram.png"
                  alt="Instagram"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col text-left leading-none">
                <span className="text-[7.5px] font-bold tracking-wider text-black/40 uppercase">
                  Instagram
                </span>
                <span className="text-[10.5px] font-semibold text-black/85 mt-0.5">
                  amuoi_1119
                </span>
              </div>
            </a>

            {/* Zalo Button */}
            <a
              href="https://zalo.me/0338673029"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-4 py-2.5 bg-white/60 border border-primary/10 rounded-full shadow-sm hover:shadow-md hover:bg-white/80 active:scale-95 transition-all duration-300"
            >
              <div className="w-6 h-6 flex items-center justify-center bg-white border border-primary/5 rounded-full overflow-hidden shrink-0 p-0.5 shadow-sm">
                <img
                  src="/contact/zalo.png"
                  alt="Zalo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col text-left leading-none">
                <span className="text-[7.5px] font-bold tracking-wider text-black/40 uppercase">
                  Zalo
                </span>
                <span className="text-[10.5px] font-semibold text-black/85 mt-0.5">
                  0338673029
                </span>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
