"use client";

export default function JapaneseMeaningSectionMV() {
  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* TORIKOMU */}
          <div className="text-white">
            <p className="text-lg mb-2">
              <strong className="text-red-500">'TORIKOMU'</strong>{' '}
              <span>means of having in Japanese as</span>
            </p>
            <p className="text-2xl font-bold text-[#4ade80]">「取り込む」</p>
          </div>

          {/* MAZEKOMU */}
          <div className="text-white">
            <p className="text-lg mb-2">
              <strong className="text-red-500">'MAZEKOMU'</strong>{' '}
              <span>means of mixing in Japanese as</span>
            </p>
            <p className="text-2xl font-bold text-[#4ade80]">「混ぜ込む」</p>
          </div>

          {/* SURIKOMU */}
          <div className="text-white">
            <p className="text-lg mb-2">
              <strong className="text-red-500">'SURIKOMU'</strong>{' '}
              <span>means of rubbing in Japanese as</span>
            </p>
            <p className="text-2xl font-bold text-[#4ade80]">「擦り込む」</p>
          </div>
        </div>
      </div>
    </section>
  );
}
