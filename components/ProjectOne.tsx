import React from "react";

export default function ProjectOne() {
  return (
    <section id="project-01" className="w-full min-h-[100vh] bg-brand-bg flex flex-col justify-between">
      {/* Header Banner */}
      <div className="w-full bg-primary py-4 px-8 md:px-16 flex items-center gap-2">
        <span className="text-xl md:text-2xl text-brand-bg font-sans font-medium">+</span>
        <h2 className="text-xl md:text-2xl text-brand-bg font-serif font-bold tracking-widest uppercase">
          DỰ ÁN 01
        </h2>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl w-full mx-auto px-8 md:px-16 py-12 text-primary flex flex-col gap-16">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8 flex flex-col gap-4">
            <h3 className="text-4xl md:text-5xl font-serif font-bold tracking-tight uppercase">
              HOW SPA
            </h3>
            <div className="space-y-4 text-sm leading-relaxed text-justify max-w-2xl">
              <p>
                Trong dự án An'tay Spa, mình phụ trách sáng tạo và quản lý nội dung cho hai kênh chính (An'tay Spa & An'tay Center), đồng thời phối hợp sản xuất các ấn phẩm truyền thông để đảm bảo hình ảnh thương hiệu đồng nhất.
              </p>
              <p>
                Thực hiện viết content, kịch bản video, triển khai chiến dịch marketing, làm việc với KOL/KOC và xây dựng kế hoạch seeding TikTok nhằm tăng mức độ nhận diện và hỗ trợ chuyển đổi doanh thu.
              </p>
            </div>
          </div>
          
          {/* Top image placeholder */}
          <div className="md:col-span-4 aspect-video md:aspect-square bg-primary/10 border-2 border-primary rounded-lg flex flex-col items-center justify-center p-4 text-center">
            <span className="text-2xl mb-1">📷</span>
            <span className="font-semibold text-xs tracking-wider uppercase">[ PROJECT MAIN IMAGE ]</span>
            <span className="text-[9px] opacity-60 font-mono">public/how-spa-main.jpg</span>
          </div>
        </div>

        {/* SOCIAL POST Section */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase">
            <span>✦</span>
            <h4>SOCIAL POST</h4>
            <span>✦</span>
          </div>

          {/* Social Post mockup row */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 items-center justify-center">
            {/* Post 1 */}
            <div className="aspect-[3/4] bg-primary/10 border border-primary/50 rounded flex items-center justify-center p-2 text-center text-[10px] font-mono">
              [ POST IMAGE 1 ]
            </div>
            {/* Post 2 */}
            <div className="aspect-[3/4] bg-primary/10 border border-primary/50 rounded flex items-center justify-center p-2 text-center text-[10px] font-mono">
              [ POST IMAGE 2 ]
            </div>
            {/* Phone Mockup Center */}
            <div className="aspect-[9/19] bg-primary border-4 border-primary rounded-[24px] shadow-lg flex flex-col items-center justify-center p-2 text-center relative overflow-hidden text-[#F0EBDF]">
              <div className="absolute top-1 w-16 h-3.5 bg-brand-bg/25 rounded-full"></div>
              <span className="text-xl mb-1">📱</span>
              <span className="text-[10px] font-bold tracking-wider uppercase">[ PHONE MOCKUP ]</span>
              <span className="text-[8px] opacity-60 font-mono mt-1">how-spa-mockup.png</span>
            </div>
            {/* Post 3 */}
            <div className="aspect-[3/4] bg-primary/10 border border-primary/50 rounded flex items-center justify-center p-2 text-center text-[10px] font-mono">
              [ POST IMAGE 3 ]
            </div>
            {/* Post 4 */}
            <div className="aspect-[3/4] bg-primary/10 border border-primary/50 rounded flex items-center justify-center p-2 text-center text-[10px] font-mono">
              [ POST IMAGE 4 ]
            </div>
          </div>
        </div>

        {/* PRODUCTS Section */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase">
            <span>✦</span>
            <h4>PRODUCTS</h4>
            <span>✦</span>
          </div>

          {/* Product grid */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square bg-primary/10 border border-primary/50 rounded-lg flex flex-col items-center justify-center p-2 text-center text-[10px] font-mono">
              <span>🧴 Product 1</span>
            </div>
            <div className="aspect-square bg-primary/10 border border-primary/50 rounded-lg flex flex-col items-center justify-center p-2 text-center text-[10px] font-mono">
              <span>🧴 Product 2</span>
            </div>
            <div className="aspect-square bg-primary/10 border border-primary/50 rounded-lg flex flex-col items-center justify-center p-2 text-center text-[10px] font-mono">
              <span>🧴 Product 3</span>
            </div>
            <div className="aspect-square bg-primary/10 border border-primary/50 rounded-lg flex flex-col items-center justify-center p-2 text-center text-[10px] font-mono">
              <span>🧴 Product 4</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom spacer */}
      <div className="flex justify-center py-4 text-xs opacity-50 font-mono tracking-widest text-primary">
        [ PROJECT 01 SECTION • HEIGHT: MIN-H-100VH ]
      </div>
    </section>
  );
}
