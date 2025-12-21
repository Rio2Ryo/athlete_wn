"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 背景: 宇宙と星 */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(2px 2px at 20% 30%, white, transparent),
                           radial-gradient(2px 2px at 60% 70%, white, transparent),
                           radial-gradient(1px 1px at 50% 50%, white, transparent),
                           radial-gradient(1px 1px at 80% 10%, white, transparent),
                           radial-gradient(2px 2px at 90% 60%, white, transparent),
                           radial-gradient(1px 1px at 33% 80%, white, transparent),
                           radial-gradient(1px 1px at 15% 90%, white, transparent)`,
          backgroundSize: '200% 200%',
          backgroundPosition: '0% 0%'
        }} />
      </div>

      {/* 地球の画像 */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-center">
        <div className="relative w-full h-full max-w-3xl">
          <Image
            src="/earth.png"
            alt="Earth"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          {/* ロゴ */}
          <div className="mb-12 flex justify-center md:justify-start">
            <div className="w-16 h-16 relative">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  d="M50 10 L30 30 L30 50 L50 70 L70 50 L70 30 Z M50 25 L40 35 L40 50 L50 60 L60 50 L60 35 Z"
                  fill="none"
                  stroke="#4ade80"
                  strokeWidth="3"
                />
                <path
                  d="M50 40 L45 50 L50 60 L55 50 Z"
                  fill="#4ade80"
                />
              </svg>
            </div>
          </div>

          {/* タイトル */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4ade80] mb-6 text-center md:text-left">
            MOTHER VEGETABLE PRODUCTS
            <div className="h-1 bg-gradient-to-r from-[#4ade80] to-transparent mt-4" />
          </h1>

          {/* サブタイトル */}
          <p className="text-lg md:text-xl text-[#4ade80] mb-8 text-center md:text-left">
            Vegetable at the beginning of Earth, 3.5 billion years ago
          </p>

          {/* キャッチフレーズ */}
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-center md:text-left">
            'Mother Vegetable'
          </p>

          {/* 説明 */}
          <p className="text-lg md:text-xl text-[#4ade80] text-center md:text-left">
            Bringing you the life force born from the Earth.
          </p>
        </div>
      </div>
    </section>
  );
}
