import React from "react";

export default function ProjectThree() {
  return (
    <section id="project-03" className="w-full min-h-[100vh] bg-brand-bg flex flex-col justify-between">
      {/* Header Banner */}
      <div className="w-full bg-primary py-4 px-8 md:px-16 flex items-center gap-2">
        <span className="text-xl md:text-2xl text-brand-bg font-sans font-medium">+</span>
        <h2 className="text-xl md:text-2xl text-brand-bg font-serif font-bold tracking-widest uppercase">
          DỰ ÁN 03
        </h2>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl w-full mx-auto px-8 md:px-16 py-12 text-primary flex flex-col gap-16">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8 flex flex-col gap-4">
            <h3 className="text-4xl md:text-5xl font-serif font-bold tracking-tight uppercase">
              LIIVEE
            </h3>
            <div className="space-y-4 text-sm leading-relaxed text-justify max-w-2xl">
              <p>
                Trong dự án Liivee, mình chịu trách nhiệm xây dựng nội dung cho các nền tảng Facebook, Instagram, TikTok, đồng thời lên ý tưởng kịch bản quay/shooting cho các bộ sưu tập mới. Làm việc với model và stylist để cho ra những concept chất lượng phù hợp định hướng thương hiệu.
              </p>
              <p>
                Hỗ trợ các chiến dịch seeding, thúc đẩy đơn hàng và tăng tỷ lệ tiếp cận cũng như tương tác trên các nền tảng xã hội.
              </p>
            </div>
          </div>
          
          {/* Top image placeholder */}
          <div className="md:col-span-4 aspect-video md:aspect-square bg-primary/10 border-2 border-primary rounded-lg flex flex-col items-center justify-center p-4 text-center">
            <span className="text-2xl mb-1">👗</span>
            <span className="font-semibold text-xs tracking-wider uppercase">[ LIIVEE COVER IMAGE ]</span>
            <span className="text-[9px] opacity-60 font-mono">public/liivee-main.jpg</span>
          </div>
        </div>

        {/* FASHION MARKETING Section */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase">
            <span>✦</span>
            <h4>FASHION MARKETING</h4>
            <span>✦</span>
          </div>

          {/* Social Post mockup grid: Phone on left, 6 posts on right (2 rows of 3) */}
          <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Phone mockup left side (3 cols) */}
            <div className="md:col-span-3 flex justify-center">
              <div className="w-[180px] aspect-[9/19] bg-primary border-4 border-primary rounded-[24px] shadow-lg flex flex-col items-center justify-center p-2 text-center relative overflow-hidden text-[#F0EBDF]">
                <div className="absolute top-1 w-12 h-3 bg-brand-bg/25 rounded-full"></div>
                <span className="text-xl mb-1">📱</span>
                <span className="text-[10px] font-bold tracking-wider uppercase">[ PHONE MOCKUP ]</span>
                <span className="text-[8px] opacity-60 font-mono mt-1">liivee-mockup.png</span>
              </div>
            </div>

            {/* Grid of posts on right side (9 cols) */}
            <div className="md:col-span-9 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="aspect-[3/4] bg-primary/10 border border-primary/50 rounded flex flex-col items-center justify-center p-2 text-center text-xs font-mono">
                <span>👗 Look 1</span>
              </div>
              <div className="aspect-[3/4] bg-primary/10 border border-primary/50 rounded flex flex-col items-center justify-center p-2 text-center text-xs font-mono">
                <span>🧥 Look 2</span>
              </div>
              <div className="aspect-[3/4] bg-primary/10 border border-primary/50 rounded flex flex-col items-center justify-center p-2 text-center text-xs font-mono">
                <span>👒 Look 3</span>
              </div>
              <div className="aspect-[3/4] bg-primary/10 border border-primary/50 rounded flex flex-col items-center justify-center p-2 text-center text-xs font-mono">
                <span>👢 Look 4</span>
              </div>
              <div className="aspect-[3/4] bg-primary/10 border border-primary/50 rounded flex flex-col items-center justify-center p-2 text-center text-xs font-mono">
                <span>👜 Look 5</span>
              </div>
              <div className="aspect-[3/4] bg-primary/10 border border-primary/50 rounded flex flex-col items-center justify-center p-2 text-center text-xs font-mono">
                <span>✨ Look 6</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom spacer */}
      <div className="flex justify-center py-4 text-xs opacity-50 font-mono tracking-widest text-primary">
        [ PROJECT 03 SECTION • HEIGHT: MIN-H-100VH ]
      </div>
    </section>
  );
}
