"use client";

export default function OurTrustSection() {
  const certifications = [
    { name: "Achieve", description: "certified human grade food by Ministry of Health, Labour and Welfare (MHLW), Japan" },
    { name: "Confidence", description: 'certified cosmetic "The Japanese Standards of Quasi-Drug Ingredients (JSQI)" by MHLW, Japan' }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* タイトル */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#4ade80] text-center mb-12">
          Our Trust
          <div className="h-1 bg-gradient-to-r from-transparent via-[#4ade80] to-transparent mt-4 mx-auto w-64" />
        </h2>

        {/* 認証バッジ */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
            <div className="text-center">
              <p className="text-xs font-bold text-black">100%</p>
              <p className="text-xs font-bold text-black">ORGANIC</p>
            </div>
          </div>
          <div className="w-24 h-24 rounded-full border-4 border-white flex items-center justify-center">
            <div className="text-center">
              <p className="text-xs font-bold text-white">CERTIFIED</p>
              <p className="text-xs font-bold text-white">VEGAN</p>
              <p className="text-xs font-bold text-white">FOOD</p>
            </div>
          </div>
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
            <div className="text-center">
              <p className="text-xs font-bold text-white">GMP</p>
              <p className="text-xs font-bold text-white">CERTIFIED</p>
            </div>
          </div>
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
            <p className="text-xl font-bold text-white">HALAL</p>
          </div>
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
            <p className="text-xs font-bold text-white">HACCP</p>
          </div>
          <div className="w-24 h-24 flex items-center justify-center">
            <p className="text-2xl font-bold text-blue-500">JFRL</p>
          </div>
        </div>

        {/* 認証説明 */}
        <div className="max-w-4xl mx-auto space-y-4">
          {certifications.map((cert, index) => (
            <div key={index} className="text-center">
              <span className="text-[#4ade80] font-bold">{cert.name}</span>
              <span className="text-white ml-2">{cert.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
