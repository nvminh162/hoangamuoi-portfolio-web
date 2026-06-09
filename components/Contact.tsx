"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Facebook, Instagram, MessageCircle } from "lucide-react";

export default function Contact() {
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

  const contactButtons = [
    {
      label: "Phone",
      value: "+84 338673029",
      href: "tel:+84338673029",
      icon: Phone,
      color: "hover:bg-primary/10 hover:border-primary",
    },
    {
      label: "Email",
      value: "hoangsun1911@gmail.com",
      href: "mailto:hoangsun1911@gmail.com",
      icon: Mail,
      color: "hover:bg-primary/10 hover:border-primary",
    },
    {
      label: "Facebook",
      value: "hoangsun1911",
      href: "https://facebook.com/hoangsun1911",
      icon: Facebook,
      color: "hover:bg-blue-50 hover:border-blue-500 hover:text-blue-600",
    },
    {
      label: "Instagram",
      value: "hoangsun1911",
      href: "https://instagram.com/hoangsun1911",
      icon: Instagram,
      color: "hover:bg-pink-50 hover:border-pink-500 hover:text-pink-600",
    },
    {
      label: "Zalo",
      value: "0338673029",
      href: "https://zalo.me/0338673029",
      icon: MessageCircle,
      color: "hover:bg-sky-50 hover:border-sky-500 hover:text-sky-600",
    },
  ];

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
          CONTACT
        </h2>
      </motion.div>

      {/* Grid Layout Container (Centered) */}
      <div className="flex-1 w-full max-w-6xl mx-auto px-8 md:px-16 py-12 flex items-center justify-center text-black">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start w-full">
          
          {/* Left Column: Form */}
          <motion.div
            className="lg:col-span-7 flex flex-col gap-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-primary tracking-wider uppercase border-b border-primary/20 pb-2 mb-2 inline-block">
                SEND A MESSAGE
              </h3>
              <p className="text-[10px] md:text-xs text-black/60 font-semibold uppercase tracking-widest mt-1">
                Fill in the details below to contact me
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
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  required
                  className="w-full bg-white/70 border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary text-black font-semibold text-sm px-4 py-3 rounded-xl outline-none shadow-sm transition-all"
                  placeholder="e.g. John Doe"
                />
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-black/75">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-white/70 border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary text-black font-semibold text-sm px-4 py-3 rounded-xl outline-none shadow-sm transition-all"
                  placeholder="e.g. johndoe@gmail.com"
                />
              </div>

              {/* Social Platform (Optional Input Group) */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="socialUsername" className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-black/75">
                  Social Platform (Optional)
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
                        ? "e.g. 0338673029 (Phone) or zalo.me link"
                        : `e.g. hoangsun1911 or ${socialType === "facebook" ? "facebook.com" : "instagram.com"} link`
                    }
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-black/75">
                  Your message for me
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-white/70 border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary text-black font-semibold text-sm px-4 py-3 rounded-xl outline-none shadow-sm transition-all resize-none"
                  placeholder="Type your message here..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-primary text-brand-bg hover:opacity-90 active:scale-[0.99] transition-all font-bold text-xs md:text-sm tracking-widest uppercase rounded-xl shadow-md disabled:opacity-50 mt-1"
              >
                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
              </button>

              {/* Status Feedback */}
              {status && (
                <div 
                  className={`p-3 rounded-xl text-xs font-bold tracking-wide text-center border ${
                    status.type === "success" 
                      ? "bg-green-50 text-green-800 border-green-200" 
                      : "bg-red-50 text-red-800 border-red-200"
                  }`}
                >
                  {status.message}
                </div>
              )}
            </form>
          </motion.div>

          {/* Right Column: Contact Links */}
          <motion.div
            className="lg:col-span-5 flex flex-col gap-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div>
              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-primary tracking-wider uppercase border-b border-primary/20 pb-2 mb-2 inline-block">
                DIRECT CONTACTS
              </h3>
              <p className="text-[10px] md:text-xs text-black/60 font-semibold uppercase tracking-widest mt-1">
                Reach out to me directly on these platforms
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {contactButtons.map((btn, idx) => {
                const IconComp = btn.icon;
                return (
                  <a
                    key={idx}
                    href={btn.href}
                    target={btn.label !== "Phone" && btn.label !== "Email" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3.5 p-3.5 bg-white/50 border border-primary/10 rounded-xl shadow-sm transition-all duration-300 ${btn.color} active:scale-[0.98]`}
                  >
                    <span className="w-10 h-10 flex items-center justify-center bg-primary text-brand-bg rounded-full shrink-0">
                      <IconComp className="w-5 h-5" />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-bold tracking-wider text-black/40 uppercase leading-none">
                        {btn.label}
                      </span>
                      <span className="text-sm md:text-base font-bold text-black/85 mt-1">
                        {btn.value}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Spacer to push content to center */}
      <div className="h-4 shrink-0"></div>
    </section>
  );
}
