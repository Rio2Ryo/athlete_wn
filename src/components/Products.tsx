"use client";

import React from 'react';

export default function Products() {
  return (
    <section className="py-20 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#4ade80] to-[#22c55e] bg-clip-text text-transparent">
          Products
        </h2>

        {/* Products Grid - 2 columns */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Achieve Product */}
          <div className="group relative rounded-2xl p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-[#4ade80]/20 hover:border-[#4ade80]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,222,128,0.2)]">
            {/* Product Image */}
            <div className="mb-6 flex justify-center">
              <div className="w-48 h-48 relative">
                <img
                  src="/001.jpg"
                  alt="Achieve"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/400x400/1a1a1a/4ade80?text=Achieve";
                  }}
                />
              </div>
            </div>

            {/* Product Title */}
            <h3 className="text-3xl font-bold text-[#4ade80] mb-2 text-center">Achieve</h3>
            <p className="text-gray-400 text-center mb-4">for Body</p>
            
            {/* Japanese Method */}
            <p className="text-[#4ade80] text-center mb-4 font-medium">'TORIKOMU' / 'MAZEKOMU'</p>
            
            {/* Main Description */}
            <p className="text-white text-center mb-6 font-semibold">48 different nutrients at once.</p>
            
            {/* Certification */}
            <p className="text-gray-400 text-sm text-center mb-6 italic">
              certified human grade food by Ministry of Health, Labour and Welfare (MHLW), Japan
            </p>

            {/* Benefits for Athletes */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-[#4ade80] mt-1">✓</span>
                <p className="text-gray-300 text-sm">
                  <strong className="text-white">体に必要な48種類の栄養素を一度に摂取。</strong>
                  激しいトレーニングで消耗した体を、地球が35億年かけて育んだ生命力で満たします。
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#4ade80] mt-1">✓</span>
                <p className="text-gray-300 text-sm">
                  <strong className="text-white">圧倒的な回復力と持久力の向上。</strong>
                  必須脂肪酸、アミノ酸、ビタミン、ミネラルが筋肉の回復を促進し、翌日のパフォーマンスを最大化します。
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#4ade80] mt-1">✓</span>
                <p className="text-gray-300 text-sm">
                  <strong className="text-white">添加物のデトックスと炎症の抑制。</strong>
                  体内の不要な物質を排出し、トレーニング後の炎症を軽減。怪我に強い体を作ります。
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#4ade80] mt-1">✓</span>
                <p className="text-gray-300 text-sm">
                  <strong className="text-white">効率的な栄養吸収で、トレーニング効果を最大化。</strong>
                  消化吸収に優れた天然成分が、体の隅々まで栄養を届けます。
                </p>
              </div>
            </div>

            {/* Nutrients Summary */}
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-sm text-gray-400 text-center mb-3">48 Nutrients</p>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
                <div>• Essential Fatty Acids <span className="text-[#4ade80]">9 types</span></div>
                <div>• Amino Acids <span className="text-[#4ade80]">10 types</span></div>
                <div>• Vital Vitamins <span className="text-[#4ade80]">18 types</span></div>
                <div>• Key Minerals <span className="text-[#4ade80]">3 types</span></div>
                <div className="col-span-2">• Other Functional Ingredients <span className="text-[#4ade80]">9 types</span></div>
              </div>
            </div>
          </div>

          {/* Confidence Product */}
          <div className="group relative rounded-2xl p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-[#4ade80]/20 hover:border-[#4ade80]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,222,128,0.2)]">
            {/* Product Image */}
            <div className="mb-6 flex justify-center">
              <div className="w-48 h-48 relative">
                <img
                  src="/002.jpg"
                  alt="Confidence"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/400x400/1a1a1a/4ade80?text=Confidence";
                  }}
                />
              </div>
            </div>

            {/* Product Title */}
            <h3 className="text-3xl font-bold text-[#4ade80] mb-2 text-center">Confidence</h3>
            <p className="text-gray-400 text-center mb-4">for All Skin</p>
            
            {/* Japanese Method */}
            <p className="text-[#4ade80] text-center mb-4 font-medium">'SURIKOMU' , 'MAZEKOMU'</p>
            
            {/* Main Description */}
            <p className="text-white text-center mb-6 font-semibold">Skin Healing Effect</p>
            
            {/* Certification */}
            <p className="text-gray-400 text-sm text-center mb-6 italic">
              certified cosmetic "The Japanese Standards of Quasi-Drug Ingredients (JSQI)" by MHLW, Japan
            </p>

            {/* Benefits for Athletes */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-[#4ade80] mt-1">✓</span>
                <p className="text-gray-300 text-sm">
                  <strong className="text-white">アスリートも綺麗でありたい。</strong>
                  激しいトレーニングで汗をかき、化粧ができない日々でも、美しい肌を保ちたいというニーズに応えます。
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#4ade80] mt-1">✓</span>
                <p className="text-gray-300 text-sm">
                  <strong className="text-white">汗を軽減し、清潔感を保つ。</strong>
                  顔、首、脇、Vゾーン、足など、気になる部分の汗とニオイを抑え、トレーニング中も自信を持って過ごせます。
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#4ade80] mt-1">✓</span>
                <p className="text-gray-300 text-sm">
                  <strong className="text-white">シミ、ニキビ、傷跡を改善。</strong>
                  医療機関でも使用される準医薬品として、術後回復、火傷痕の改善、がんケアにも信頼されています。
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#4ade80] mt-1">✓</span>
                <p className="text-gray-300 text-sm">
                  <strong className="text-white">強力なアンチエイジング効果。</strong>
                  肌の自然な治癒力とバランスを取り戻し、ナチュラルで健康的な美しさを実現します。
                </p>
              </div>
            </div>

            {/* Skin Issues */}
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-sm text-gray-400 text-center mb-3">Addresses</p>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
                <div>• Dark Spots & Freckles</div>
                <div>• Acne & Acne scars</div>
                <div>• Wounds & Burn Marks</div>
                <div>• Odor Control</div>
                <div className="col-span-2">• Shine Control (Natural/Earth Tones)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
