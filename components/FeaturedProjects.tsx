import React from "react";

export default function FeaturedProjects() {
  return (
    <section id="featured-projects" className="w-full h-screen bg-brand-bg flex flex-col justify-between overflow-hidden">
      {/* Header Banner */}
      <div className="w-full bg-primary py-4 px-8 md:px-16 flex items-center gap-2 shrink-0">
        <span className="text-xl md:text-2xl text-brand-bg font-sans font-medium">+</span>
        <h2 className="text-xl md:text-2xl text-brand-bg font-serif font-bold tracking-widest uppercase">
          DỰ ÁN NỔI BẬT
        </h2>
      </div>

      {/* Main content links */}
      <div className="flex-1 flex flex-col items-center justify-center py-12 px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-primary font-bold">
          {/* Project 01 */}
          <div className="flex flex-col items-center gap-1">
            <span className="text-sm font-serif italic text-primary/70">01.</span>
            <a 
              href="#project-01" 
              className="px-8 py-2 border-2 border-primary rounded-full hover:bg-primary hover:text-brand-bg transition-colors font-serif uppercase tracking-wider text-sm"
            >
              HOW
            </a>
          </div>

          <span className="text-lg opacity-60 hidden md:inline font-sans">+</span>

          {/* Project 02 */}
          <div className="flex flex-col items-center gap-1">
            <span className="text-sm font-serif italic text-primary/70">02.</span>
            <a 
              href="#project-02" 
              className="px-8 py-2 border-2 border-primary rounded-full hover:bg-primary hover:text-brand-bg transition-colors font-serif uppercase tracking-wider text-sm"
            >
              ANYTIME
            </a>
          </div>

          <span className="text-lg opacity-60 hidden md:inline font-sans">+</span>

          {/* Project 03 */}
          <div className="flex flex-col items-center gap-1">
            <span className="text-sm font-serif italic text-primary/70">03.</span>
            <a 
              href="#project-03" 
              className="px-8 py-2 border-2 border-primary rounded-full hover:bg-primary hover:text-brand-bg transition-colors font-serif uppercase tracking-wider text-sm"
            >
              LIIVEE
            </a>
          </div>
        </div>
      </div>

      {/* Bottom height specifier */}
      <div className="flex justify-center py-4 text-xs opacity-50 font-mono tracking-widest text-primary shrink-0">
        [ FEATURED PROJECTS SECTION • HEIGHT: 100VH ]
      </div>
    </section>
  );
}
