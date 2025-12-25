"use client";

import Image from 'next/image';

export default function FoodFunctionSectionMV() {
  const nutrientCategories = [
    { title: "Essential Fatty Acids", count: "9 types" },
    { title: "Amino Acids", count: "10 types" },
    { title: "Vital Vitamins", count: "18 types" },
    { title: "Key Minerals For Balance", count: "3 types" },
    { title: "Other Functional Ingredients", count: "9 types" },
  ];

  const targetGroups = [
    {
      title: "Children",
      benefits: [
        "Improves concentration",
        "Enhances learning ability",
        "Supports bone growth",
        "Boosts immunity",
        "Increases appetite",
      ],
    },
    {
      title: "Adults",
      benefits: [
        "Improves constipation and digestion",
        "Enhances sleep quality",
        "Reduces fatigue",
        "Suppresses cellular aging and inflammation",
        "Supports dieting",
      ],
    },
    {
      title: "Seniors",
      benefits: [
        "Improves sleep quality and blood circulation",
        "Boosts appetite and nutrient intake",
        "Supports internal organ function",
        "Promotes bone density",
      ],
    },
    {
      title: "Athletes",
      benefits: [
        "Detoxifies additives",
        "Aids muscle recovery and improves endurance",
        "Provides efficient nutrient absorption",
        "Reduces inflammation and supports recovery",
        "Enhances training effectiveness",
      ],
    },
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* セクションタイトル */}
        <div className="text-center mb-12">
          <h2 className="text-[#4ade80] text-5xl md:text-6xl font-bold mb-6">
            Food Function
          </h2>
          <h3 className="text-white text-2xl md:text-3xl mb-2">
            Achieve / Forever
          </h3>
          <div className="flex justify-center mb-4">
            <Image
              src="/underline.png"
              alt="Underline"
              width={400}
              height={10}
              className="w-64 md:w-96 h-auto"
            />
          </div>
          <p className="text-red-500 text-xl font-semibold">
            TORIKOMU / MAZEKOMU
          </p>
        </div>

        {/* 栄養素カテゴリー（5つの円形バッジ） */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {nutrientCategories.map((category, index) => (
            <div
              key={index}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-[#4ade80] bg-[#4ade80]/30 flex flex-col items-center justify-center p-4"
            >
              <p className="text-white text-xs md:text-sm font-bold text-center">
                {category.title}
              </p>
              <p className="text-white text-xs text-center mt-1">
                {category.count}
              </p>
            </div>
          ))}
        </div>

        {/* 48 Nutrients */}
        <div className="text-center mb-16">
          <h3 className="text-[#4ade80] text-4xl md:text-5xl font-bold mb-6">
            48 Nutrients
          </h3>
          <p className="text-white text-sm md:text-base leading-relaxed max-w-5xl mx-auto">
            Potassium, sodium, magnesium, calcium, phosphorus, iron, manganese, zinc, copper, Vitamin A, B1, B2, B3, B5, B6, B9, C, E, K, tryptophan, threonine, leucine, isoleucine, lysine, methionine, phenylalanine, valine, histidine, arginine, cystine, tyrosine, alanine, aspartic acid, glutamic acid, serine, glycine, proline, saturated fatty acids, omega-3 fatty acids, omega-6 fatty acids, C-phycocyanin, chlorophyll a, total carotenoids, nucleic acids, spirulan, glycogen-like polysaccharides, β-glucan-like polysaccharides, cellulose.
          </p>
        </div>

        {/* 対象別効果（2カラムグリッド） */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {targetGroups.map((group, index) => (
            <div key={index} className="flex gap-4">
              {/* アイコン */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[#4ade80]/20 border-2 border-[#4ade80] flex items-center justify-center">
                  <span className="text-[#4ade80] text-2xl">👤</span>
                </div>
              </div>
              {/* コンテンツ */}
              <div className="flex-1">
                <h4 className="text-[#4ade80] text-2xl font-bold mb-2">
                  {group.title}
                </h4>
                <div className="h-1 w-24 bg-[#4ade80] mb-4"></div>
                <ul className="space-y-2 text-white">
                  {group.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
