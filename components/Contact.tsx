"use client";

import React, { useState } from "react";

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

  return (
    <section 
      id="contact"
      className="relative flex flex-col w-full min-h-screen bg-brand-bg select-none"
    >
      {/* Header Banner */}
      <div className="w-full bg-primary py-4 px-8 md:px-16 flex items-center gap-2 shrink-0">
        <span className="text-xl md:text-2xl text-brand-bg font-sans font-medium">✦</span>
        <h2 className="text-xl md:text-2xl text-brand-bg font-serif font-bold tracking-widest uppercase">
          CONTACT
        </h2>
      </div>

      <div className="flex-1 max-w-2xl w-full mx-auto flex flex-col justify-center px-8 md:px-16 py-12 gap-8">
        {/* Header/Title */}
        <div className="text-center">
          <h3 className="font-playfair text-3xl font-bold text-primary tracking-wider uppercase border-b border-primary/20 pb-2 mb-3 inline-block">
            SEND A MESSAGE
          </h3>
          <p className="text-xs md:text-sm text-black/60 font-bold uppercase tracking-widest mt-1">
            Fill in the details below to contact me
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-transparent">
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
          <div>
            <label htmlFor="fullname" className="block text-xs font-bold uppercase tracking-wider text-black mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              required
              className="w-full bg-transparent border-b-2 border-primary/45 focus:border-primary text-black font-semibold text-sm py-2 outline-none transition-colors"
              placeholder="e.g. John Doe"
            />
          </div>

          {/* Email Address */}
          <div>
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-black mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-transparent border-b-2 border-primary/45 focus:border-primary text-black font-semibold text-sm py-2 outline-none transition-colors"
              placeholder="e.g. johndoe@gmail.com"
            />
          </div>

          {/* Social Platform (Optional Selector) */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1.5">
              Social Platform (Optional)
            </label>
            <div className="flex gap-2 mb-2">
              {["facebook", "instagram", "zalo"].map((platform) => (
                <button
                  key={platform}
                  type="button"
                  onClick={() => setSocialType(platform)}
                  className={`flex-1 py-1.5 px-3 text-xs font-bold rounded-lg border-2 uppercase transition-all ${
                    socialType === platform
                      ? "bg-primary text-brand-bg border-primary"
                      : "bg-transparent text-primary/70 border-primary/20 hover:border-primary/40"
                  }`}
                >
                  {platform}
                </button>
              ))}
            </div>
            <input
              type="text"
              id="socialUsername"
              name="socialUsername"
              value={socialUsername}
              onChange={(e) => setSocialUsername(e.target.value)}
              className="w-full bg-transparent border-b-2 border-primary/45 focus:border-primary text-black font-semibold text-sm py-2 outline-none transition-colors"
              placeholder={
                socialType === "zalo"
                  ? "e.g. 0338673029 (Phone number)"
                  : `e.g. hoangsun1911 (${socialType === "facebook" ? "Facebook" : "Instagram"} username)`
              }
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-black mb-1.5">
              Your message for me
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full bg-transparent border-b-2 border-primary/45 focus:border-primary text-black font-semibold text-sm py-2 outline-none transition-colors resize-none"
              placeholder="Type your message here..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 bg-primary text-brand-bg hover:opacity-90 active:scale-[0.99] transition-all font-bold text-sm tracking-widest uppercase rounded-lg shadow-md disabled:opacity-50 mt-2"
          >
            {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
          </button>

          {/* Status Feedback */}
          {status && (
            <div 
              className={`p-3 rounded-lg text-xs font-bold tracking-wide text-center border ${
                status.type === "success" 
                  ? "bg-green-50 text-green-800 border-green-200" 
                  : "bg-red-50 text-red-800 border-red-200"
              }`}
            >
              {status.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
