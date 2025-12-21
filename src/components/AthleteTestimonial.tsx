"use client";

import React from 'react';

export default function AthleteTestimonial() {
  return (
    <section className="py-20 px-4 md:px-8 relative bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-[#4ade80] to-[#22c55e] bg-clip-text text-transparent">
          Athlete's Voice
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg">
          永原和可那選手の使用感想
        </p>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Achieve Testimonial */}
          <div className="relative rounded-2xl p-8 bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-[#4ade80]/30 hover:border-[#4ade80]/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,222,128,0.3)]">
            {/* Product Badge */}
            <div className="absolute -top-4 left-8 bg-[#4ade80] text-black px-6 py-2 rounded-full font-bold text-sm">
              Achieve
            </div>

            {/* Quote Icon */}
            <div className="text-[#4ade80] text-6xl opacity-20 mb-4">"</div>

            {/* Testimonial Content */}
            <div className="space-y-4 text-gray-300">
              <p className="text-lg leading-relaxed">
                トレーニング後の回復が驚くほど早くなりました。以前は翌日に疲れが残ることが多かったのですが、Achieveを摂取するようになってから、朝起きた時の体の軽さが全く違います。
              </p>
              <p className="text-lg leading-relaxed">
                48種類の栄養素が一度に摂れるので、サプリメントをいくつも飲む必要がなくなりました。自然由来の成分なので、体への負担も少なく、安心して続けられています。
              </p>
              <p className="text-lg leading-relaxed">
                特に、激しい練習の後でも筋肉痛が軽減され、次の日のパフォーマンスに影響が出にくくなったことが一番の変化です。
              </p>
            </div>

            {/* Author */}
            <div className="mt-6 pt-6 border-t border-gray-700 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4ade80] to-[#22c55e] flex items-center justify-center text-black font-bold">
                WN
              </div>
              <div>
                <p className="text-white font-semibold">永原 和可那</p>
                <p className="text-gray-400 text-sm">世界バドミントン選手権2度優勝</p>
              </div>
            </div>
          </div>

          {/* Confidence Testimonial */}
          <div className="relative rounded-2xl p-8 bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-[#4ade80]/30 hover:border-[#4ade80]/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,222,128,0.3)]">
            {/* Product Badge */}
            <div className="absolute -top-4 left-8 bg-[#4ade80] text-black px-6 py-2 rounded-full font-bold text-sm">
              Confidence
            </div>

            {/* Quote Icon */}
            <div className="text-[#4ade80] text-6xl opacity-20 mb-4">"</div>

            {/* Testimonial Content */}
            <div className="space-y-4 text-gray-300">
              <p className="text-lg leading-relaxed">
                アスリートとして、毎日激しいトレーニングをしていると、どうしても肌のケアが疎かになりがちでした。化粧をする時間もなく、汗をかくことも多いので、肌トラブルに悩んでいました。
              </p>
              <p className="text-lg leading-relaxed">
                Confidenceを使い始めてから、汗をかいても肌がベタつかず、清潔感を保てるようになりました。特に、トレーニング前に使うと、汗の量が抑えられて快適です。
              </p>
              <p className="text-lg leading-relaxed">
                肌のトーンも明るくなり、ニキビ跡も目立たなくなってきました。アスリートでも綺麗でいたいという願いを叶えてくれる製品だと思います。
              </p>
            </div>

            {/* Author */}
            <div className="mt-6 pt-6 border-t border-gray-700 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4ade80] to-[#22c55e] flex items-center justify-center text-black font-bold">
                WN
              </div>
              <div>
                <p className="text-white font-semibold">永原 和可那</p>
                <p className="text-gray-400 text-sm">世界バドミントン選手権2度優勝</p>
              </div>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm italic">
            ※ 個人の感想であり、効果を保証するものではありません。
          </p>
        </div>
      </div>
    </section>
  );
}
