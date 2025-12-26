"use client";

import Image from 'next/image';

export default function HeroSectionComplete() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black pt-16">
      {/* 背景画像（右側に配置） */}
      <div className="absolute right-0 top-0 bottom-0 w-3/5 z-0">
        <Image
          src="/bannerImg.png"
          alt="Earth Background"
          fill
          className="object-cover object-left"
          priority
        />
      </div>

      {/* コンテンツ（左寄せ） */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 w-full">
        <div className="max-w-2xl">
          {/* アイコン */}
          <div className="mb-8">
            <Image
              src="/mv-icon.png"
              alt="Mother Vegetable Icon"
              width={60}
              height={60}
              className="w-12 h-12 md:w-16 md:h-16"
            />
          </div>

          {/* メインタイトル */}
          <h1 className="mb-8">
            <span className="block text-[#4ade80] text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
              MOTHER VEGETABLE PRODUCTS
            </span>
            <div className="mb-6">
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
            <p className="text-base md:text-lg">
              The vegetable from 3.5 billion years ago
            </p>
            <p className="text-xl md:text-2xl font-semibold">
              'Mother Vegetable'
            </p>
            <p className="text-base md:text-lg">
              Earth's life force, for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
