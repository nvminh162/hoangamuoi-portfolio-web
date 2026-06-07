import React from "react";

export default function About() {
  return (
    <section id="about" className="w-full h-screen bg-brand-bg flex flex-col overflow-hidden">
      {/* Header Banner */}
      <div className="w-full bg-primary py-4 px-8 md:px-16 flex items-center gap-2 shrink-0">
        <span className="text-xl md:text-2xl text-brand-bg font-sans font-medium">+</span>
        <h2 className="text-xl md:text-2xl text-brand-bg font-serif font-bold tracking-widest uppercase">
          ABOUT ME
        </h2>
      </div>

      {/* Main Layout Grid */}
      <div className="flex-1 max-w-6xl w-full mx-auto px-8 md:px-16 py-6 grid grid-cols-1 md:grid-cols-12 gap-8 text-black overflow-hidden">
        {/* Left Side: Photo & Info (4 cols) */}
        <div className="md:col-span-4 flex flex-col gap-6 overflow-y-auto pr-2">
          {/* Portrait Image */}
          <img
            src="/hoangamuoi.png"
            alt="HOANG A MUOI"
            className="aspect-[4/5] w-full max-w-[200px] mx-auto object-cover border-2 border-primary rounded-lg shrink-0 shadow-sm"
          />

          {/* CONTACT */}
          <div className="flex flex-col gap-2 shrink-0">
            <h3 className="font-bold tracking-widest text-xs border-b border-primary/30 pb-0.5 uppercase text-primary">CONTACT</h3>
            <div className="text-[11px] space-y-1 font-medium">
              <div className="flex items-center gap-2"><span>📞</span> +84 338673029</div>
              <div className="flex items-center gap-2"><span>✉️</span> hoangsun1911@gmail.com</div>
              <div className="flex items-center gap-2"><span>📍</span> Go Vap, HCMC, Vietnam</div>
              <div className="flex items-center gap-2"><span>🔗</span> linkedin.com/in/hoangamuoi</div>
            </div>
          </div>

          {/* LANGUAGES */}
          <div className="flex flex-col gap-2 shrink-0">
            <h3 className="font-bold tracking-widest text-xs border-b border-primary/30 pb-0.5 uppercase text-primary">LANGUAGES</h3>
            <div className="text-[11px] space-y-1 font-medium">
              <div className="flex justify-between"><span>Vietnamese</span> <span className="opacity-75 font-mono text-[9px]">(Native)</span></div>
              <div className="flex justify-between"><span>English</span> <span className="opacity-75 font-mono text-[9px]">(Advanced - IELTS 8.5)</span></div>
              <div className="flex justify-between"><span>Chinese</span> <span className="opacity-75 font-mono text-[9px]">(Conversational)</span></div>
            </div>
          </div>

          {/* SKILLS */}
          <div className="flex flex-col gap-2 shrink-0">
            <h3 className="font-bold tracking-widest text-xs border-b border-primary/30 pb-0.5 uppercase text-primary">SKILLS</h3>
            <div className="text-[11px] font-medium space-y-0.5">
              <p>✦ Teamwork & Effective Communication</p>
              <p>✦ Multi-tasking & Trilingual Capabilities</p>
              <p>✦ Microsoft Office Specialist (MOS)</p>
            </div>
          </div>
        </div>

        {/* Right Side: Detailed Info & Experience (8 cols) */}
        <div className="md:col-span-8 flex flex-col justify-between gap-6 overflow-y-auto pr-2">
          {/* Header Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif tracking-tight font-bold mb-2 uppercase text-primary">
              HOANG A MUOI
            </h2>
            <p className="text-[10px] font-bold tracking-wider uppercase mb-4 opacity-90 border border-primary/30 px-2 py-0.5 rounded inline-block bg-primary/5 text-primary">
              TEACHING ASSISTANT
            </p>
            <div className="space-y-3 text-xs leading-relaxed text-justify">
              <p>
                I am a highly responsible professional with strong adaptability and a quick learning curve. Passionate about language education, I am constantly seeking new methodologies to optimize students' learning experiences and contribute valuable results to the academic environment.
              </p>
            </div>
          </div>

          {/* WORK EXPERIENCE */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold tracking-widest text-xs border-b border-primary/30 pb-0.5 uppercase text-primary">WORK EXPERIENCE</h3>
            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between font-bold text-[11px]">
                  <span>DIEM HANG IELTS • Consultant</span>
                  <span className="font-mono text-[9px] opacity-75">01/2023 - Present</span>
                </div>
                <p className="text-[11px] opacity-85 mt-0.5">
                  Provide tailored course consultations based on student assessment and proficiency. Manage customer relations.
                </p>
              </div>
              <div>
                <div className="flex justify-between font-bold text-[11px]">
                  <span>PRIVATE AND PERSONAL TUTOR • Private Tutor</span>
                  <span className="font-mono text-[9px] opacity-75">10/2023 - 09/2024</span>
                </div>
                <p className="text-[11px] opacity-85 mt-0.5">
                  Supported students with weak academic performance to achieve core conversational and communication skills.
                </p>
              </div>
              <div>
                <div className="flex justify-between font-bold text-[11px]">
                  <span>BAMBI ENGLISH • Teaching Assistant</span>
                  <span className="font-mono text-[9px] opacity-75">08/2023 - 01/2024</span>
                </div>
                <p className="text-[11px] opacity-85 mt-0.5">
                  Taught English classes at the center for children preparing for Cambridge Starters, Movers, and Flyers.
                </p>
              </div>
            </div>
          </div>

          {/* EDUCATION & TOOLS */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-end">
            <div className="sm:col-span-7">
              <h3 className="font-bold tracking-widest text-xs border-b border-primary/30 pb-0.5 mb-2 uppercase text-primary">EDUCATION</h3>
              <div className="text-xs space-y-2">
                <div>
                  <p className="font-bold text-[11px] uppercase">Industrial University of HCMC</p>
                  <p className="opacity-80">Bachelor of English Linguistics (Honors)</p>
                </div>
                <div>
                  <p className="font-bold text-[11px] uppercase">IDP Center</p>
                  <p className="opacity-80">IELTS Academic Certificate - Band 8.5</p>
                </div>
              </div>
            </div>

            <div className="sm:col-span-5">
              <h3 className="font-bold tracking-widest text-xs border-b border-primary/30 pb-0.5 mb-2 uppercase text-primary">TOOLS</h3>
              <div className="flex flex-wrap gap-2">
                <span className="text-[9px] font-semibold px-2 py-1 bg-primary text-brand-bg rounded font-mono">✦ Ps</span>
                <span className="text-[9px] font-semibold px-2 py-1 bg-primary text-brand-bg rounded font-mono">✦ Canva</span>
                <span className="text-[9px] font-semibold px-2 py-1 bg-primary text-brand-bg rounded font-mono">✦ CapCut</span>
                <span className="text-[9px] font-semibold px-2 py-1 bg-primary text-brand-bg rounded font-mono">✦ Word</span>
                <span className="text-[9px] font-semibold px-2 py-1 bg-primary text-brand-bg rounded font-mono">✦ PPT</span>
                <span className="text-[9px] font-semibold px-2 py-1 bg-primary text-brand-bg rounded font-mono">✦ Excel</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom spacer */}
      <div className="flex justify-center py-4 text-xs opacity-50 font-mono tracking-widest text-primary mt-auto shrink-0">
        [ ABOUT SECTION • HEIGHT: 100VH ]
      </div>
    </section>
  );
}
