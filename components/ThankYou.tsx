import React from "react";

export default function ThankYou() {
  return (
    <section className="w-full h-screen bg-brand-bg flex flex-col justify-between border-t border-primary/20 overflow-hidden">
      
      {/* Spacer to push content down */}
      <div className="h-12"></div>

      {/* Main thank you title with tilted tag */}
      <div className="flex-1 flex flex-col items-center justify-center relative select-none">
        
        {/* Tilted PREMIUM tag */}
        <span className="absolute top-[25%] md:top-[28%] left-[58%] md:left-[60%] text-[9px] md:text-[10px] font-mono border border-primary text-primary px-2 py-0.5 rounded-full rotate-[12deg] bg-brand-bg uppercase">
          Premium
        </span>

        {/* Large title */}
        <div className="text-center">
          <h2 className="text-5xl md:text-7xl font-serif tracking-tight text-primary flex items-center justify-center gap-2">
            <span className="text-2xl md:text-4xl font-sans relative -top-3 md:-top-4">+</span>
            THANK YOU
          </h2>
        </div>
      </div>

      {/* Bottom section: Links & Footer */}
      <div className="w-full px-8 md:px-16 pb-8 text-primary flex flex-col gap-8">
        
        {/* Social Links Row */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 md:gap-16 text-center">
          <div>
            <h4 className="text-[10px] font-bold tracking-widest uppercase opacity-70 mb-1">Phone</h4>
            <p className="text-xs font-semibold">0398 678 xxx</p>
          </div>
          <div>
            <h4 className="text-[10px] font-bold tracking-widest uppercase opacity-70 mb-1">Email</h4>
            <p className="text-xs font-semibold">thunminh@gmail.com</p>
          </div>
          <div>
            <h4 className="text-[10px] font-bold tracking-widest uppercase opacity-70 mb-1">LinkedIn</h4>
            <p className="text-xs font-semibold">linkedin.com/in/thunminh</p>
          </div>
        </div>

        {/* Footer Meta Row */}
        <div className="border-t border-primary/20 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] tracking-wider font-medium opacity-85">
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Terms & Support</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
          <div>
            <span>Designed by Hoàng A Muội • 2026</span>
          </div>
        </div>
      </div>

    </section>
  );
}
