"use client";

import Image from "next/image";

interface ProductCardProps {
  title: string;
  subtitle: string;
  method: string;
  description: string;
  benefits: string[];
  howToUse: string;
  imageSrc: string;
}

function ProductCard({ title, subtitle, method, description, benefits, howToUse, imageSrc }: ProductCardProps) {
  return (
    <div className="border border-[#4ade80] rounded-lg p-6 bg-black/80 hover:border-[#4ade80]/60 transition-all duration-300">
      {/* 製品画像 */}
      <div className="relative w-full h-64 mb-6">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* タイトル */}
      <h3 className="text-3xl font-bold text-[#4ade80] mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{subtitle}</p>

      {/* 方法 */}
      <p className="text-red-500 font-bold mb-2">{method}</p>
      <p className="text-white mb-4">{description}</p>

      {/* 効果 */}
      <div className="space-y-2 mb-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start gap-2">
            <span className="text-[#4ade80] mt-1">✓</span>
            <span className="text-white text-sm">{benefit}</span>
          </div>
        ))}
      </div>

      {/* 使用方法 */}
      <div className="mb-6">
        <p className="text-gray-400 text-sm mb-2">How to use</p>
        <div className="flex items-start gap-2">
          <span className="text-[#4ade80]">✓</span>
          <span className="text-white text-sm">{howToUse}</span>
        </div>
      </div>

      {/* Shopボタン */}
      <button className="w-full bg-[#4ade80] hover:bg-[#22c55e] text-black font-bold py-3 px-6 rounded-lg transition-colors duration-300">
        Shop →
      </button>
    </div>
  );
}

export default function ProductsSection() {
  const products = [
    {
      title: "Achieve",
      subtitle: "for Body",
      method: "'TORIKOMU'",
      description: "48 different nutrients at once.",
      benefits: [
        "Supports a healthy gut, Regeneration of cells throughout the body.",
        "Helps relieve constipation, improve sleep, and aid weight management."
      ],
      howToUse: "Simply 'TORIKOMU' one capsule into your drink or meal.",
      imageSrc: "/001.jpg"
    },
    {
      title: "Confidence",
      subtitle: "for All Skin",
      method: "'SURIKOMU' , 'MAZEKOMU'",
      description: "Skin Healing Effect",
      benefits: [
        "Powerful anti-aging benefits.",
        "Helps improve dark spots, acne, odor, and skin damage."
      ],
      howToUse: "'SURIKOMU' directly or 'MAZEKOMU' into your current cosmetics.",
      imageSrc: "/002.jpg"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* タイトル */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#4ade80] text-center mb-4">
          Products
          <div className="h-1 bg-gradient-to-r from-transparent via-[#4ade80] to-transparent mt-4 mx-auto w-64" />
        </h2>

        {/* 製品カード */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
