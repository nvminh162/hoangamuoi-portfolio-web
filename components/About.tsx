import React from "react";
import { Calendar, Phone, Mail, MapPin, Linkedin } from "lucide-react";

const ContactIcon = ({ icon: Icon }: { icon: React.ComponentType<any> }) => (
  <span className="w-6 h-6 flex items-center justify-center bg-primary text-brand-bg rounded-full shrink-0">
    <Icon className="w-3.5 h-3.5" />
  </span>
);

export default function About() {
  return (
    <section id="about" className="w-full min-h-screen bg-brand-bg flex flex-col">
      {/* Header Banner */}
      <div className="w-full bg-primary py-4 px-8 md:px-16 flex items-center gap-2 shrink-0">
        <span className="text-xl md:text-2xl text-brand-bg font-sans font-medium">✦</span>
        <h2 className="text-xl md:text-2xl text-brand-bg font-serif font-bold tracking-widest uppercase">
          ABOUT ME
        </h2>
      </div>

      {/* Main Layout Grid */}
      <div className="flex-1 max-w-6xl w-full mx-auto px-8 md:px-16 py-8 grid grid-cols-1 md:grid-cols-12 gap-8 text-black">
        {/* Left Column (4 cols) - Compact & balanced */}
        <div className="md:col-span-4 flex flex-col gap-6">
          {/* Portrait Image */}
          <img
            src="/hoangamuoi.png"
            alt="HOANG A MUOI"
            className="w-full aspect-[3/4] object-cover border-2 border-primary rounded-none shadow-sm shrink-0"
          />

          {/* CONTACT */}
          <div className="flex flex-col gap-3 shrink-0">
            <h3 className="font-playfair text-xl font-bold text-primary tracking-wider uppercase border-b border-primary/20 pb-1">
              CONTACT
            </h3>
            <div className="text-xs space-y-2.5 font-medium">
              <div className="flex items-center gap-3">
                <ContactIcon icon={Calendar} />
                <span className="text-black font-semibold">19 November 2005</span>
              </div>
              <div className="flex items-center gap-3">
                <ContactIcon icon={Phone} />
                <span className="text-black font-semibold">+84 338673029</span>
              </div>
              <div className="flex items-center gap-3">
                <ContactIcon icon={Mail} />
                <a href="mailto:hoangsun1911@gmail.com" className="text-black font-semibold hover:underline">
                  hoangsun1911@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <ContactIcon icon={MapPin} />
                <span className="text-black font-semibold leading-tight">
                  Le Duc Tho, Go Vap, HCMC, Vietnam
                </span>
              </div>
              <div className="flex items-center gap-3">
                <ContactIcon icon={Linkedin} />
                <a
                  href="https://linkedin.com/in/hoangamuoi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black font-semibold hover:underline"
                >
                  linkedin.com/in/hoangamuoi
                </a>
              </div>
            </div>
          </div>

          {/* WORK EXPERIENCE */}
          <div className="flex flex-col gap-3 shrink-0">
            <h3 className="font-playfair text-xl font-bold text-primary tracking-wider uppercase border-b border-primary/20 pb-1">
              WORK EXPERIENCE
            </h3>
            <div className="space-y-3.5 text-xs">
              <div>
                <div className="flex justify-between font-bold text-black">
                  <span>DIEM HANG IELTS</span>
                  <span className="font-mono text-[10px] text-black/70 font-semibold">01/2023 - Present</span>
                </div>
                <p className="text-black/85 text-[11px] mt-0.5">Consultant</p>
              </div>
              <div>
                <div className="flex justify-between font-bold text-black">
                  <span>PRIVATE TUTOR</span>
                  <span className="font-mono text-[10px] text-black/70 font-semibold">10/2023 - 09/2024</span>
                </div>
                <p className="text-black/85 text-[11px] mt-0.5">Private and Personal Tutor</p>
              </div>
              <div>
                <div className="flex justify-between font-bold text-black">
                  <span>BAMBI ENGLISH</span>
                  <span className="font-mono text-[10px] text-black/70 font-semibold">08/2023 - 01/2024</span>
                </div>
                <p className="text-black/85 text-[11px] mt-0.5">Teaching Assistant</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (8 cols) - Structured, elegant and compact */}
        <div className="md:col-span-8 flex flex-col gap-8">
          {/* Header Info */}
          <div>
            <h2 className="text-5xl md:text-[5.5rem] font-playfair tracking-tight text-primary leading-none font-bold uppercase">
              HOANG A MUOI
            </h2>

            <p className="text-[10px] md:text-xs font-sans font-extrabold tracking-[0.18em] text-black uppercase mt-4 mb-6">
              TEACHING ASSISTANT | COURSE CONSULTANT | ENGLISH LINGUISTICS
            </p>

            <div className="space-y-4 text-xs md:text-sm leading-relaxed text-justify text-black/90 font-medium">
              <p>
                Hello, I am Hoang A Muoi – an English Language Teaching Assistant passionate about creating engaging and effective language learning environments!
              </p>
              <p>
                I am highly responsible, adaptable, and quick to absorb new methodologies. I specialize in class assistance, course consultation, and training children for Cambridge certificates (Starters, Movers, Flyers). Over my teaching journey, I have successfully supported students in improving their core communication skills and confidence.
              </p>
              <p>
                I hope this portfolio highlights my pedagogical mindset, dedication, and potential as a language education specialist ready to contribute maximum value.
              </p>
            </div>
          </div>

          {/* CAREER GOALS - Placed right below the introduction text */}
          <div className="flex flex-col gap-3">
            <h3 className="font-playfair text-xl font-bold text-primary tracking-wider uppercase border-b border-primary/20 pb-1">
              CAREER GOALS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-black/90 leading-relaxed">
              <div className="flex items-start gap-2">
                <span className="text-primary font-bold text-sm">✦</span>
                <p>Improve qualifications and soft skills to serve as a strong foundation for development in the teaching field.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary font-bold text-sm">✦</span>
                <p>Participate in specialized activities and modern seminars to learn and expand field-specific knowledge.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary font-bold text-sm">✦</span>
                <p>Leverage English Linguistics background (Honors) and IELTS 8.5 to provide excellent guidance.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary font-bold text-sm">✦</span>
                <p>Acquire a Master's degree in Applied Linguistics to advance as a university lecturer specializing in languages.</p>
              </div>
            </div>
          </div>

          {/* SUB-GRID: EDUCATION & CERTIFICATES, followed by LANGUAGES & SKILLS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            {/* Row 1: SKILLS & LANGUAGES */}
            <div>
              <h3 className="font-playfair text-xl font-bold text-primary tracking-wider uppercase border-b border-primary/20 pb-1 mb-3">
                SKILLS
              </h3>
              <ul className="text-xs space-y-1.5 text-black/90 font-semibold list-disc list-inside">
                <li>Teamwork</li>
                <li>Effective Communication</li>
                <li>Effective Multi-tasking</li>
                <li>Trilingual Capabilities</li>
                <li>MOS Certificate</li>
              </ul>
            </div>

            <div>
              <h3 className="font-playfair text-xl font-bold text-primary tracking-wider uppercase border-b border-primary/20 pb-1 mb-3">
                LANGUAGES
              </h3>
              <div className="text-xs space-y-2 font-semibold text-black/90">
                <div className="flex justify-between">
                  <span>Vietnamese</span>
                  <span className="text-black/60 font-mono text-[10px]">(Native)</span>
                </div>
                <div className="flex justify-between">
                  <span>English</span>
                  <span className="text-black/60 font-mono text-[10px]">(Advanced - IELTS 8.5)</span>
                </div>
                <div className="flex justify-between">
                  <span>Chinese</span>
                  <span className="text-black/60 font-mono text-[10px]">(Conversational)</span>
                </div>
              </div>
            </div>

            {/* Row 2: CERTIFICATES & EDUCATION */}
            <div>
              <h3 className="font-playfair text-xl font-bold text-primary tracking-wider uppercase border-b border-primary/20 pb-1 mb-3">
                CERTIFICATES
              </h3>
              <ul className="text-xs list-disc list-inside space-y-1 text-black/90 font-medium">
                <li>IELTS Academic - 8.5 (IDP Center)</li>
                <li>Microsoft Office Specialist (MOS)</li>
                <li>Vietnamese Teaching Methods training</li>
              </ul>
            </div>

            <div>
              <h3 className="font-playfair text-xl font-bold text-primary tracking-wider uppercase border-b border-primary/20 pb-1 mb-3">
                EDUCATION
              </h3>
              <div className="text-xs space-y-1">
                <p className="font-bold text-black uppercase text-[11px]">Industrial University of HCMC</p>
                <p className="text-black/80 font-medium">Bachelor of English Linguistics | 2023 - Present</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
