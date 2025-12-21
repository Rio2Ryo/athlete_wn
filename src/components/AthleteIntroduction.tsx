"use client";

import React from 'react';

export default function AthleteIntroduction() {
  return (
    <section className="relative py-20 px-4 md:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#4ade80] to-[#22c55e] rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-300" />
              <div className="relative rounded-2xl overflow-hidden border-4 border-[#4ade80]/30 shadow-[0_0_50px_rgba(74,222,128,0.3)]">
                <img
                  src="/nagahara_rakket.jpg"
                  alt="Wakana Nagahara"
                  className="w-full h-auto max-w-md object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/600x800/1a1a1a/4ade80?text=Athlete";
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right: Introduction */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-[#4ade80] to-[#22c55e] bg-clip-text text-transparent">
                永原 和可那
              </h2>
              <p className="text-2xl text-gray-400 mb-4">Wakana Nagahara</p>
              <p className="text-xl text-[#4ade80] font-semibold">2-Time World Badminton Champion</p>
            </div>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                北海道十勝出身のバドミントン選手。BWF世界選手権女子ダブルスで2年連続（2018年、2019年）金メダルを獲得。「ナガマツペア」として世界の舞台で活躍し、東京とパリの2大会連続でオリンピックに出場。
              </p>
              <p>
                故郷十勝の誇りとして、スポーツを通じて地域社会に積極的に貢献している。
              </p>
            </div>

            {/* Achievements */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#4ade80]/30 rounded-xl p-6">
              <h3 className="text-[#4ade80] font-bold text-xl mb-4">主な実績</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#4ade80] mr-2">🏆</span>
                  <span>BWF世界選手権 女子ダブルス 金メダル（2018年、2019年）</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4ade80] mr-2">🏅</span>
                  <span>東京オリンピック 出場</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4ade80] mr-2">🏅</span>
                  <span>パリオリンピック 出場</span>
                </li>
              </ul>
            </div>

            {/* Why Mother Vegetable */}
            <div className="bg-gradient-to-br from-[#4ade80]/10 to-[#22c55e]/10 border border-[#4ade80]/50 rounded-xl p-6">
              <h3 className="text-[#4ade80] font-bold text-xl mb-4">マザーベジタブルプロジェクトに参画した理由</h3>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  アスリートとして、体のコンディション管理は最も重要な課題の一つです。激しいトレーニングと試合の連続で、体には大きな負担がかかります。
                </p>
                <p>
                  マザーベジタブルと出会い、35億年前から存在する生命力の源を摂取することで、体の内側から本質的な健康を取り戻せると感じました。48種類もの栄養素が一度に摂れることで、サプリメントを何種類も飲む必要がなくなり、自然由来の成分で安心して続けられることも大きな魅力です。
                </p>
                <p>
                  また、このプロジェクトが地球環境の再生にも貢献していることを知り、アスリートとして、そして一人の人間として、未来の世代により良い地球を残したいという想いと共鳴しました。
                </p>
                <p className="text-[#4ade80] font-semibold">
                  スポーツを通じて社会に貢献するだけでなく、地球環境の再生にも参加できることに大きな意義を感じています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
