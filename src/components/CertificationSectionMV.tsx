"use client";

export default function CertificationSectionMV() {
  const certifications = [
    { title: "100% ORGANIC", subtitle: "" },
    { title: "CERTIFIED VEGAN FOOD", subtitle: "" },
    { title: "GMP CERTIFIED", subtitle: "" },
    { title: "HALAL", subtitle: "" },
    { title: "HACCP", subtitle: "" },
    { title: "JFRL TESTED", subtitle: "" },
  ];

  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* 認証情報 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-white text-center">
          <div>
            <p className="text-sm">
              <strong className="text-[#4ade80]">Achieve</strong> certified human grade food by Ministry of Health, Labour and Welfare (MHLW), Japan
            </p>
          </div>
          <div>
            <p className="text-sm">
              <strong className="text-[#4ade80]">Confidence</strong> certified cosmetic "The Japanese Standards of Quasi-Drug Ingredients (JSQI)" by MHLW, Japan
            </p>
          </div>
          <div>
            <p className="text-sm">
              <strong className="text-[#4ade80]">Forever</strong> certified by pet grade food by Ministry of Agriculture, Forestry and Fisheries (MAFF), Japan
            </p>
          </div>
        </div>

        {/* 認証バッジ */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="aspect-square rounded-full border-2 border-[#4ade80] bg-[#4ade80]/20 flex flex-col items-center justify-center p-4"
            >
              <p className="text-white text-xs md:text-sm font-bold text-center">
                {cert.title}
              </p>
              {cert.subtitle && (
                <p className="text-white text-xs text-center mt-1">
                  {cert.subtitle}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
