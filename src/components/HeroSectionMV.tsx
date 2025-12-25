"use client";

import Image from 'next/image';

export default function HeroSectionMV() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* 背景画像 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bannerImg.png"
          alt="Cosmic Earth Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 text-center px-4 py-20">
        {/* アイコン */}
        <div className="flex justify-center mb-8">
          <Image
            src="/mv-icon.png"
            alt="Mother Vegetable Icon"
            width={80}
            height={80}
            className="w-16 h-16 md:w-20 md:h-20"
          />
        </div>

        {/* メインタイトル */}
        <h1 className="mb-12">
          <span className="block text-[#4ade80] text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            MOTHER VEGETABLE PRODUCTS
          </span>
          <div className="flex justify-center">
            <Image
              src="/underline.png"
              alt="Underline"
              width={400}
              height={10}
              className="w-64 md:w-96 h-auto"
            />
          </div>
        </h1>

        {/* 説明文 */}
        <div className="space-y-4 text-[#4ade80]">
          <p className="text-lg md:text-xl lg:text-2xl">
            Vegetable at the beginning of Earth, 3.5 billion years ago
          </p>
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            'Mother Vegetable'
          </p>
          <p className="text-lg md:text-xl">
            Bringing you the life force born from the Earth.
          </p>
        </div>
      </div>
    </section>
  );
}
