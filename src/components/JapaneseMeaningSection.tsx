"use client";

export default function JapaneseMeaningSection() {
  const meanings = [
    {
      romaji: "TORIKOMU",
      english: "means of having in Japanese as",
      japanese: "「取り込む」"
    },
    {
      romaji: "MAZEKOMU",
      english: "means of mixing in Japanese as",
      japanese: "「混ぜ込む」"
    },
    {
      romaji: "SURIKOMU",
      english: "means of rubbing in Japanese as",
      japanese: "「擦り込む」"
    }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {meanings.map((item, index) => (
            <div
              key={index}
              className="border-2 border-[#4ade80] rounded-lg p-6 bg-black/80 text-center"
            >
              <p className="text-pink-500 font-bold text-xl mb-2">'{item.romaji}'</p>
              <p className="text-white text-sm mb-1">{item.english}</p>
              <p className="text-white text-lg">{item.japanese}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
