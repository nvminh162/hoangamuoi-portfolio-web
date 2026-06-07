import React from "react";

export default function About() {
  return (
    <section id="about" className="w-full min-h-[100vh] bg-brand-bg flex flex-col">
      {/* Header Banner */}
      <div className="w-full bg-primary py-4 px-8 md:px-16 flex items-center gap-2">
        <span className="text-xl md:text-2xl text-brand-bg font-sans font-medium">+</span>
        <h2 className="text-xl md:text-2xl text-brand-bg font-serif font-bold tracking-widest uppercase">
          VỀ MÌNH
        </h2>
      </div>

      {/* Main Layout Grid */}
      <div className="flex-1 max-w-6xl w-full mx-auto px-8 md:px-16 py-12 grid grid-cols-1 md:grid-cols-12 gap-8 text-primary">
        {/* Left Side: Photo & Quick Info (4 cols) */}
        <div className="md:col-span-4 flex flex-col gap-8">
          {/* Portrait Image Placeholder */}
          <div className="aspect-[3/4] w-full bg-primary/10 border-2 border-primary rounded-lg flex flex-col items-center justify-center p-4 text-center">
            <span className="text-4xl font-serif mb-2">✦</span>
            <span className="font-semibold text-xs tracking-wider uppercase mb-1">[ 3:4 PORTRAIT IMAGE ]</span>
            <span className="text-[10px] opacity-60 font-mono">hoangamuoi-portfolio-web/public/portrait.jpg</span>
          </div>

          {/* LIÊN HỆ */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold tracking-widest text-sm border-b border-primary/30 pb-1">LIÊN HỆ</h3>
            <div className="text-xs space-y-1.5 font-medium">
              <div className="flex items-center gap-2"><span>📞</span> xxxxxxxxxx</div>
              <div className="flex items-center gap-2"><span>✉️</span> xxxxxxxxxx</div>
              <div className="flex items-center gap-2"><span>📍</span> Quận 12, TP.HCM</div>
              <div className="flex items-center gap-2"><span>🔗</span> Linkedin</div>
            </div>
          </div>

          {/* KINH NGHIỆM LÀM VIỆC */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold tracking-widest text-sm border-b border-primary/30 pb-1">KINH NGHIỆM LÀM VIỆC</h3>
            <div className="space-y-4 text-xs">
              <div>
                <div className="flex justify-between font-bold">
                  <span>HOW GROUP</span>
                  <span className="font-mono text-[10px] opacity-75">05/2025 - Hiện Tại</span>
                </div>
                <p className="italic text-[11px] opacity-80">Content Creator</p>
              </div>
              <div>
                <div className="flex justify-between font-bold">
                  <span>ANYTIME</span>
                  <span className="font-mono text-[10px] opacity-75">11/2024 - 04/2025</span>
                </div>
                <p className="italic text-[11px] opacity-80">Content Executive</p>
              </div>
              <div>
                <div className="flex justify-between font-bold">
                  <span>LIIVEE</span>
                  <span className="font-mono text-[10px] opacity-75">2022 - 2024</span>
                </div>
                <p className="italic text-[11px] opacity-80">Content & Media Executive</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Detailed Info (8 cols) */}
        <div className="md:col-span-8 flex flex-col justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight font-bold mb-4 uppercase">
              HOÀNG A MUỘI
            </h2>
            <p className="text-xs font-bold tracking-wider uppercase mb-6 opacity-90 border border-primary/30 px-3 py-1 rounded inline-block bg-primary/5">
              ENGLISH LANGUAGE
            </p>
            <div className="space-y-4 text-sm leading-relaxed text-justify">
              <p>
                Xin chào, mình là Hoàng A Muội – chuyên viên giảng dạy tiếng Anh (ELT) với đam mê phát triển phương pháp học tập sáng tạo và hiệu quả!
              </p>
              <p>
                Mình mạnh về xây dựng nội dung giảng dạy, thiết kế bài học tương tác sinh động, quản lý học tập và phát triển các tài liệu bổ trợ chuyên sâu. Mình luôn hướng tới việc tạo ra môi trường học tập truyền cảm hứng và giúp người học tự tin sử dụng ngôn ngữ một cách tự nhiên nhất.
              </p>
              <p>
                Hy vọng Portfolio này sẽ giúp mọi người nhìn thấy rõ hơn năng lực chuyên môn, tư duy sư phạm và tâm huyết của mình trong lĩnh vực giảng dạy tiếng Anh.
              </p>
            </div>
          </div>

          {/* HỌC VẤN / CHỨNG CHỈ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold tracking-widest text-sm border-b border-primary/30 pb-1 mb-3">HỌC VẤN</h3>
              <div className="text-xs">
                <p className="font-bold">QUAN HỆ CÔNG CHÚNG - TRUYỀN THÔNG</p>
                <p className="opacity-80">Đại học Văn Lang | 2020-2024</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold tracking-widest text-sm border-b border-primary/30 pb-1 mb-3">CHỨNG CHỈ</h3>
              <ul className="text-xs list-disc list-inside space-y-1 opacity-90">
                <li>APTIS ESOL B2 - British Council</li>
                <li>Marketing In Action - Career Prep</li>
                <li>Brand Development - Tomorrow Marketers</li>
              </ul>
            </div>
          </div>

          {/* CÔNG CỤ */}
          <div>
            <h3 className="font-bold tracking-widest text-sm border-b border-primary/30 pb-1 mb-4">CÔNG CỤ</h3>
            <div className="flex flex-wrap gap-3 items-center">
              <span className="text-xs font-semibold px-3 py-1.5 bg-primary text-brand-bg rounded-md font-mono">✦ Ps</span>
              <span className="text-xs font-semibold px-3 py-1.5 bg-primary text-brand-bg rounded-md font-mono">✦ Canva</span>
              <span className="text-xs font-semibold px-3 py-1.5 bg-primary text-brand-bg rounded-md font-mono">✦ CapCut</span>
              <span className="text-xs font-semibold px-3 py-1.5 bg-primary text-brand-bg rounded-md font-mono">✦ Word</span>
              <span className="text-xs font-semibold px-3 py-1.5 bg-primary text-brand-bg rounded-md font-mono">✦ PPT</span>
              <span className="text-xs font-semibold px-3 py-1.5 bg-primary text-brand-bg rounded-md font-mono">✦ Excel</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center py-4 text-xs opacity-50 font-mono tracking-widest text-primary mt-auto">
        [ ABOUT SECTION • HEIGHT: MIN-H-100VH ]
      </div>
    </section>
  );
}
