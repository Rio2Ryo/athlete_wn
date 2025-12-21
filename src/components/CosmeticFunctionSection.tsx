"use client";

export default function CosmeticFunctionSection() {
  const effects = [
    { title: "Dark Spots", subtitle: "Freckles" },
    { title: "Acne", subtitle: "Acne scars" },
    { title: "Wounds", subtitle: "Scars, Burn Marks" },
    { title: "Odor", subtitle: "Face, Neck, Underarms, V-Zone, Feet" },
    { title: "Shine", subtitle: "Maintains A Clean Look, Natural/ Earth Tones" }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* タイトル */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#4ade80] text-center mb-4">
          Cosmetic Function
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
          Confidence
          <div className="h-1 bg-[#4ade80] mt-2 mx-auto w-48" />
        </h3>
        <p className="text-pink-500 text-center mb-12">SURIKOMU / MAZEKOMU</p>

        {/* 5つの効果バッジ */}
        <div className="relative max-w-5xl mx-auto mb-12">
          {/* 上部の括弧 */}
          <div className="absolute top-0 left-0 right-0 h-8 border-t-2 border-l-2 border-r-2 border-[#4ade80] rounded-t-full" />
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pt-12">
            {effects.map((effect, index) => (
              <div
                key={index}
                className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-green-600 to-green-800 flex flex-col items-center justify-center p-4"
              >
                <p className="text-white text-sm text-center font-bold mb-1">{effect.title}</p>
                <p className="text-white text-xs text-center">{effect.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 説明文 */}
        <p className="text-white text-center max-w-4xl mx-auto mb-12 leading-relaxed">
          Mother Vegetable, certified as a medical-grade quasi-drug, is trusted by medical institutions worldwide for its healing properties — used in post-surgery recovery, burn scar improvement, cancer care, and even to help control skin shine. It supports the skin's natural ability to heal and restore balance.
        </p>

        {/* Before & After 画像 */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative w-full h-96 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg overflow-hidden">
            {/* プレースホルダー画像 */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-500 text-lg">Confidence Before & After Image</p>
            </div>
          </div>
        </div>

        {/* Before & After ボタン */}
        <div className="text-center">
          <button className="border-2 border-[#4ade80] text-white px-8 py-3 rounded-full hover:bg-[#4ade80] hover:text-black transition-colors duration-300">
            ✓ Before & After
          </button>
        </div>
      </div>
    </section>
  );
}
