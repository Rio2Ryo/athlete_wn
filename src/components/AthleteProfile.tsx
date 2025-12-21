"use client";

import React from 'react';

export default function AthleteProfile() {
  return (
    <section className="py-20 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#4ade80] to-[#22c55e] bg-clip-text text-transparent">
          Featured Athlete
        </h2>

        {/* Profile Card */}
        <div className="relative rounded-2xl p-8 md:p-12 bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-[#4ade80]/20 hover:border-[#4ade80]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,222,128,0.2)]">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Left: Image */}
            <div className="md:col-span-1 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#4ade80] to-[#22c55e] rounded-2xl opacity-20 group-hover:opacity-30 blur-lg transition-opacity duration-300" />
                <div className="relative rounded-xl overflow-hidden border-2 border-[#4ade80]/30">
                  <img
                    src="/nagahara_wakana.webp"
                    alt="Wakana Nagahara"
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/nagahara_rakket.jpg";
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Right: Profile Info */}
            <div className="md:col-span-2 space-y-6">
              {/* Name and Title */}
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-[#4ade80] mb-2">
                  永原 和可那
                </h3>
                <p className="text-xl text-gray-400 mb-1">Wakana Nagahara</p>
                <p className="text-lg text-[#4ade80] font-semibold">2-Time World Badminton Champion</p>
              </div>

              {/* Biography */}
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  北海道十勝出身のバドミントン選手。BWF世界選手権女子ダブルスで2年連続（2018年、2019年）金メダルを獲得。「ナガマツペア」として世界の舞台で活躍し、東京とパリの2大会連続でオリンピックに出場。
                </p>
                <p className="leading-relaxed">
                  故郷十勝の誇りとして、スポーツを通じて地域社会に積極的に貢献している。
                </p>
              </div>

              {/* Achievements */}
              <div className="pt-4 border-t border-gray-700">
                <h4 className="text-lg font-semibold text-white mb-3">主な実績</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#4ade80] mt-1">🏆</span>
                    <span>BWF世界選手権 女子ダブルス 金メダル（2018年、2019年）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4ade80] mt-1">🏅</span>
                    <span>東京オリンピック 出場</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4ade80] mt-1">🏅</span>
                    <span>パリオリンピック 出場</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
