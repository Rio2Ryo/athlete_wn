"use client";

import Image from "next/image";

export default function TwoOnlyOnesSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* タイトル */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#4ade80] text-center mb-12">
          Two Only Ones
        </h2>

        {/* 説明文 */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-white text-lg leading-relaxed mb-4">
            The MOTHER VEGETABLE PROJECT is the world's only project that aims to restore the Earth and all life, centered around two one-of-a-kind businesses.
          </p>
          <p className="text-white text-lg leading-relaxed mb-4">
            In this process, each facility purifies the atmosphere by absorbing CO₂ and generating oxygen 24 hours a day, 365 days a year, while simultaneously contributing to improving the health of humans and living organisms through Mother Vegetable products and the aquaculture of fish and shellfish.
          </p>
          <p className="text-white text-lg leading-relaxed">
            Furthermore, by expanding these facilities around the world, it will develop into eight additional industrial sectors.
          </p>
        </div>

        {/* 2カラムレイアウト */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* I - Mother Vegetable */}
          <div className="border-2 border-[#4ade80] rounded-lg p-8 bg-black/80">
            <h3 className="text-3xl font-bold text-[#4ade80] mb-2">I</h3>
            <h4 className="text-2xl font-bold text-[#4ade80] mb-6">Mother Vegetable</h4>
            
            {/* 画像 */}
            <div className="relative w-full h-64 mb-6 bg-gray-800 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-500">Mother Vegetable Microscope Image</p>
              </div>
            </div>

            {/* 説明 */}
            <p className="text-white mb-4 leading-relaxed">
              By researching the evolutionary journey of Mother Vegetable, Earth's first vegetable, which culminated in humanity, we offer the following three types of Mother Vegetable products:
            </p>

            <div className="space-y-3">
              <div>
                <span className="text-[#4ade80] font-bold">① Food:</span>
                <p className="text-white text-sm ml-4">
                  Food derived from a single life form that provides all 48 nutrients essential for humanity.
                </p>
              </div>
              <div>
                <span className="text-[#4ade80] font-bold">② Skincare:</span>
                <p className="text-white text-sm ml-4">
                  Skincare products designed to promote reverse aging effects for the skin.
                </p>
              </div>
              <div>
                <span className="text-[#4ade80] font-bold">③ Aquaculture:</span>
                <p className="text-white text-sm ml-4">
                  Aquaculture of high-protein fish and shellfish raised with zero chemical inputs.
                </p>
              </div>
            </div>
          </div>

          {/* II - Small Earth Factory (SEF) */}
          <div className="border-2 border-[#4ade80] rounded-lg p-8 bg-black/80">
            <h3 className="text-3xl font-bold text-[#4ade80] mb-2">II</h3>
            <h4 className="text-2xl font-bold text-[#4ade80] mb-6">Small Earth Factory (SEF)</h4>
            
            {/* 画像 */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="relative w-full h-32 bg-gray-800 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-500 text-xs text-center">Solar Panels</p>
                </div>
              </div>
              <div className="relative w-full h-32 bg-gray-800 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-500 text-xs text-center">Cultivation Facility</p>
                </div>
              </div>
            </div>

            {/* 説明 */}
            <div className="space-y-4">
              <div>
                <span className="text-[#4ade80] font-bold">① CO₂ offset:</span>
                <p className="text-white text-sm ml-4 mt-1">
                  Recreating a small Earth through CO₂ absorption (700 times that of natural cedar) and O₂ emission by Mother Vegetable production.
                </p>
              </div>
              <div>
                <span className="text-[#4ade80] font-bold">② ZERO Emission:</span>
                <p className="text-white text-sm ml-4 mt-1">
                  Recreating a small Earth without relying on any CO₂-emitting energy sources, including external electricity or fossil fuels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
