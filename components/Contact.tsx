"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("Contact");
  const [socialType, setSocialType] = useState<string>("facebook");
  const [socialUsername, setSocialUsername] = useState<string>("");
  const [honeypot, setHoneypot] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);
    const fullname = formData.get("fullname") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname,
          email,
          socialType,
          socialUsername,
          message,
          website: honeypot, // Honeypot
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus({ type: "success", message: data.message });
      // Reset form fields
      (e.target as HTMLFormElement).reset();
      setSocialUsername("");
    } catch (err: any) {
      setStatus({ type: "error", message: err.message });
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <section
      id="contact"
      className="relative flex flex-col w-full min-h-screen bg-brand-bg select-none justify-between"
    >
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

      {/* Form Container (Centered) */}
      <div className="flex-1 w-full max-w-xl mx-auto px-8 py-12 flex items-center justify-center text-black">
        <motion.div
          className="w-full flex flex-col gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center text-center">
            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-primary tracking-wider uppercase border-b border-primary/20 pb-2 mb-2 inline-block">
              {t("subtitle")}
            </h3>
            <p className="text-[10px] md:text-xs text-black/60 font-semibold uppercase tracking-widest mt-1">
              {t("desc")}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5 bg-transparent">
            {/* Honeypot field (hidden from users) */}
            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              className="hidden"
              autoComplete="off"
            />

            {/* Full Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="fullname" className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-black/75">
                {t("form.name")}
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                required
                className="w-full bg-white/70 border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary text-black font-semibold text-sm px-4 py-3 rounded-xl outline-none shadow-sm transition-all"
                placeholder={t("form.name_placeholder")}
              />
            </div>

            {/* Email Address */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-black/75">
                {t("form.email")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-white/70 border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary text-black font-semibold text-sm px-4 py-3 rounded-xl outline-none shadow-sm transition-all"
                placeholder={t("form.email_placeholder")}
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-black/75">
                {t("form.message")}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full bg-white/70 border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary text-black font-semibold text-sm px-4 py-3 rounded-xl outline-none shadow-sm transition-all resize-none"
                placeholder={t("form.message_placeholder")}
              />
            </div>

            {/* Social Platform (Optional Input Group) */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="socialUsername" className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-black/75">
                {t("form.social")}
              </label>
              <div className="flex rounded-xl overflow-hidden border border-primary/20 bg-white/70 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary shadow-sm transition-all">
                <select
                  value={socialType}
                  onChange={(e) => setSocialType(e.target.value)}
                  className="appearance-none bg-primary/5 text-primary font-bold text-xs uppercase px-4 py-3 border-r border-primary/20 outline-none cursor-pointer hover:bg-primary/10 transition-colors text-center"
                >
                  <option value="facebook" className="bg-brand-bg text-black">Facebook</option>
                  <option value="instagram" className="bg-brand-bg text-black">Instagram</option>
                  <option value="zalo" className="bg-brand-bg text-black">Zalo</option>
                </select>
                <input
                  type="text"
                  id="socialUsername"
                  name="socialUsername"
                  value={socialUsername}
                  onChange={(e) => setSocialUsername(e.target.value)}
                  className="flex-1 bg-transparent text-black font-semibold text-sm px-4 py-3 outline-none"
                  placeholder={
                    socialType === "zalo"
                      ? t("form.social_placeholder_zalo")
                      : t("form.social_placeholder_other")
                  }
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-primary text-brand-bg hover:opacity-90 active:scale-[0.99] transition-all font-bold text-xs md:text-sm tracking-widest uppercase rounded-xl shadow-md disabled:opacity-50 mt-1"
            >
              {isSubmitting ? t("form.submitting") : t("form.submit")}
            </button>

            {/* Status Feedback */}
            {status && (
              <div
                className={`p-3 rounded-xl text-xs font-bold tracking-wide text-center border ${status.type === "success"
                  ? "bg-green-50 text-green-800 border-green-200"
                  : "bg-red-50 text-red-800 border-red-200"
                  }`}
              >
                {status.message}
              </div>
            )}
          </form>
        </motion.div>
      </div>

      {/* Spacer to push content to center */}
      <div className="h-4 shrink-0"></div>
    </section>
  );
}
