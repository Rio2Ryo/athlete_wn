"use client";

export default function FoodFunctionSection() {
  const nutrientCategories = [
    { title: "Essential Fatty Acids", count: "9 types" },
    { title: "Amino Acids", count: "10 types" },
    { title: "Vital Vitamins", count: "18 types" },
    { title: "Key Minerals For Balance", count: "3 types" },
    { title: "Other Functional Ingredients", count: "9 types" }
  ];

  const nutrientsList = "Potassium, sodium, magnesium, calcium, phosphorus, iron, manganese, zinc, copper, Vitamin A, B1, B2, B3, B5, B6, B9, C, E, K, tryptophan, threonine, leucine, isoleucine, lysine, methionine, phenylalanine, valine, histidine, arginine, cystine, tyrosine, alanine, aspartic acid, glutamic acid, serine, glycine, proline, saturated fatty acids, omega-3 fatty acids, omega-6 fatty acids, C-phycocyanin, chlorophyll a, total carotenoids, nucleic acids, spirulan, glycogen-like polysaccharides, β-glucan-like polysaccharides, cellulose.";

  const targetGroups = [
    {
      title: "Children",
      icon: "👶",
      benefits: [
        "Improves concentration",
        "Enhances learning ability",
        "Supports bone growth",
        "Boosts immunity",
        "Increases appetite"
      ]
    },
    {
      title: "Adults",
      icon: "🧑",
      benefits: [
        "Improves constipation and digestion",
        "Enhances sleep quality",
        "Reduces fatigue",
        "Suppresses cellular aging and inflammation",
        "Supports dieting*"
      ]
    },
    {
      title: "Seniors",
      icon: "👴",
      benefits: [
        "Improves sleep quality and blood circulation",
        "Boosts appetite and nutrient intake",
        "Supports internal organ function",
        "Promotes bone density"
      ]
    },
    {
      title: "Athletes",
      icon: "🏃",
      benefits: [
        "Detoxifies additives",
        "Aids muscle recovery and improves endurance",
        "Provides efficient nutrient absorption",
        "Reduces inflammation and supports recovery",
        "Enhances training effectiveness"
      ]
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* タイトル */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#4ade80] text-center mb-2">
          Food Function
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
          Achieve / Forever
        </h3>
        <p className="text-pink-500 text-center mb-12">TORIKOMU / MAZEKOMU</p>

        {/* 5つの栄養素カテゴリー */}
        <div className="relative max-w-5xl mx-auto mb-8">
          {/* 上部の括弧 */}
          <div className="absolute top-0 left-0 right-0 h-8 border-t-2 border-l-2 border-r-2 border-[#4ade80] rounded-t-full" />
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pt-12">
            {nutrientCategories.map((category, index) => (
              <div
                key={index}
                className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-green-600 to-green-800 flex flex-col items-center justify-center p-4"
              >
                <p className="text-white text-xs text-center font-bold mb-1">{category.title}</p>
                <p className="text-white text-sm font-bold">{category.count}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 48 Nutrients */}
        <h3 className="text-4xl md:text-5xl font-bold text-[#4ade80] text-center mb-8">
          48 Nutrients
        </h3>
        <p className="text-white text-center max-w-5xl mx-auto mb-16 leading-relaxed">
          {nutrientsList}
        </p>

        {/* 対象別効果 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {targetGroups.map((group, index) => (
            <div key={index} className="flex gap-6">
              {/* アイコン */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 text-6xl flex items-center justify-center opacity-50">
                  {group.icon}
                </div>
              </div>
              
              {/* コンテンツ */}
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-[#4ade80] mb-4">
                  {group.title}
                  <div className="h-0.5 bg-[#4ade80] mt-2 w-32" />
                </h4>
                <ul className="space-y-2">
                  {group.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-white text-sm flex items-start gap-2">
                      <span className="text-[#4ade80] mt-1">•</span>
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
