"use client";

import Image from 'next/image';

export default function ProductsSectionMV() {
  return (
    <section className="py-20 px-4 bg-black">
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

        {/* 製品グリッド（Foreverは除外） */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Achieve */}
          <div className="border border-[#4ade80] bg-black p-8 rounded-lg">
            <div className="mb-6">
              <Image
                src="/nagahara_rakket.jpg"
                alt="Achieve Product"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded"
              />
            </div>
            <h3 className="text-center mb-2">
              <span className="block text-[#4ade80] text-3xl font-bold">Achieve</span>
              <span className="block text-gray-400 text-lg">for Body</span>
            </h3>
            <p className="text-center mb-6">
              <strong className="text-red-500">'TORIKOMU'</strong>{' '}
              <span className="text-white">48 different nutrients at once.</span>
            </p>
            <div className="space-y-3 text-white">
              <div className="flex items-start">
                <span className="text-[#4ade80] mr-3 text-xl">✓</span>
                <span>Supports a healthy gut, Regeneration of cells throughout the body.</span>
              </div>
              <div className="flex items-start">
                <span className="text-[#4ade80] mr-3 text-xl">✓</span>
                <span>Helps relieve constipation, improve sleep, and aid weight management.</span>
              </div>
            </div>
          </div>

          {/* Confidence */}
          <div className="border border-[#4ade80] bg-black p-8 rounded-lg">
            <div className="mb-6">
              <Image
                src="/nagahara_rakket.jpg"
                alt="Confidence Product"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded"
              />
            </div>
            <h3 className="text-center mb-2">
              <span className="block text-[#4ade80] text-3xl font-bold">Confidence</span>
              <span className="block text-gray-400 text-lg">for All Skin</span>
            </h3>
            <p className="text-center mb-6">
              <strong className="text-red-500">'SURIKOMU'</strong>{' '}
              <strong className="text-red-500">, 'MAZEKOMU'</strong>{' '}
              <span className="text-white">Skin Healing Effect</span>
            </p>
            <div className="space-y-3 text-white">
              <div className="flex items-start">
                <span className="text-[#4ade80] mr-3 text-xl">✓</span>
                <span>Powerful anti-aging benefits.</span>
              </div>
              <div className="flex items-start">
                <span className="text-[#4ade80] mr-3 text-xl">✓</span>
                <span>Helps improve dark spots, acne, odor, and skin damage.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
