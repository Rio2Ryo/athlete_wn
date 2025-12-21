"use client";

import Image from "next/image";

export default function AthleteHeroSection() {
  return (
    <section className="py-20 bg-black border-t-2 border-[#4ade80]/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* 左側: 永原選手の画像 */}
          <div className="relative">
            <div className="relative w-full h-[600px] rounded-lg overflow-hidden border-4 border-[#4ade80] shadow-[0_0_50px_rgba(74,222,128,0.3)]">
              <Image
                src="/nagahara_rakket.jpg"
                alt="Wakana Nagahara - Badminton Champion"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* 右側: 紹介文 */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#4ade80] mb-6">
              Wakana Nagahara
              <div className="h-1 bg-gradient-to-r from-[#4ade80] to-transparent mt-4" />
            </h2>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              2-Time World Badminton Champion
            </h3>

            <div className="space-y-4 text-white">
              <p className="text-lg leading-relaxed">
                永原和可那選手は、バドミントン女子ダブルスの世界チャンピオンとして、国際舞台で輝かしい実績を残してきました。
              </p>
              
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#4ade80]">主な実績</h4>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-[#4ade80] mt-1">•</span>
                    <span>BWF世界選手権 女子ダブルス 金メダル（2018年、2019年）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4ade80] mt-1">•</span>
                    <span>東京オリンピック 出場</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4ade80] mt-1">•</span>
                    <span>パリオリンピック 出場</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4ade80] mt-1">•</span>
                    <span>BWFスーパーシリーズ 複数回優勝</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6">
                <h4 className="text-xl font-bold text-[#4ade80] mb-3">
                  マザーベジタブルプロジェクトに参画した理由
                </h4>
                <p className="leading-relaxed text-gray-300">
                  アスリートとして、日々のトレーニングと試合で最高のパフォーマンスを発揮するためには、体調管理が何よりも重要です。35億年前から存在する生命力を持つマザーベジタブルに出会い、その圧倒的な栄養価と自然由来の力に深く共感しました。48種類もの栄養素を一度に摂取できる利便性と、添加物を含まない安心感は、アスリートにとって理想的なサポートです。また、地球環境の再生に貢献できることも、次世代のアスリートたちのために重要だと感じています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
