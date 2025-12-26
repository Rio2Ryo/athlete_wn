"use client";

import Image from 'next/image';

export default function ProductsSectionComplete() {
  const products = [
    {
      name: "Achieve",
      subtitle: "for Body",
      videoSrc: "/achieve_video.mp4",
      imageFallback: "/nagahara_rakket.jpg",
      tagline: "'TORIKOMU'",
      description: "48 different nutrients at once.",
      benefits: [
        "Supports a healthy gut, Regeneration of cells throughout the body.",
        "Helps relieve constipation, improve sleep, and aid weight management."
      ],
      howToUse: "Simply 'TORIKOMU' one capsule into your drink or meal."
    },
    {
      name: "Confidence",
      subtitle: "for All Skin",
      videoSrc: "/confidence_video.mp4",
      imageFallback: "/nagahara_rakket.jpg",
      tagline: "'SURIKOMU' , 'MAZEKOMU'",
      description: "Skin Healing Effect",
      benefits: [
        "Powerful anti-aging benefits.",
        "Helps improve dark spots, acne, odor, and skin damage."
      ],
      howToUse: "'SURIKOMU' directly or 'MAZEKOMU' into your skincare cosmetics."
    }
  ];

  return (
    <section className="py-20 px-4 bg-black border-2 border-[#4ade80] mx-4 my-8 rounded-lg">
      <div className="max-w-7xl mx-auto">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <h2 className="text-[#4ade80] text-5xl md:text-6xl font-bold mb-4">
            Products
          </h2>
          <div className="flex justify-center">
            <Image
              src="/underline.png"
              alt="Underline"
              width={400}
              height={10}
              className="w-64 md:w-96 h-auto"
            />
          </div>
        </div>

        {/* 製品グリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div key={index} className="border border-[#4ade80] bg-black p-6 rounded-lg">
              {/* 製品画像/動画 */}
              <div className="mb-6 bg-black rounded overflow-hidden h-64 flex items-center justify-center">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const img = e.currentTarget.nextElementSibling as HTMLImageElement;
                    if (img) img.style.display = 'block';
                  }}
                >
                  <source src={product.videoSrc} type="video/mp4" />
                </video>
                <Image
                  src={product.imageFallback}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover hidden"
                />
              </div>

              {/* 製品名 */}
              <h3 className="text-center mb-2">
                <span className="block text-[#4ade80] text-3xl font-bold">{product.name}</span>
                <span className="block text-gray-400 text-lg">{product.subtitle}</span>
              </h3>

              {/* キャッチフレーズ */}
              <p className="text-center mb-6">
                <strong className="text-red-500">{product.tagline}</strong>{' '}
                <span className="text-white">{product.description}</span>
              </p>

              {/* 効果リスト */}
              <div className="space-y-3 text-white mb-6">
                {product.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className="text-[#4ade80] mr-3 text-xl">✓</span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* How to use */}
              <div className="mb-6">
                <h4 className="text-[#4ade80] text-lg font-bold mb-2">How to use</h4>
                <p className="text-white text-sm">{product.howToUse}</p>
              </div>

              {/* ボタン */}
              <div className="flex gap-4">
                <button className="flex-1 bg-transparent border border-[#4ade80] text-[#4ade80] py-2 px-4 rounded hover:bg-[#4ade80] hover:text-black transition-colors">
                  view more
                </button>
                <button className="flex-1 bg-[#4ade80] text-black py-2 px-4 rounded hover:bg-[#4ade80]/80 transition-colors">
                  Shop
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
