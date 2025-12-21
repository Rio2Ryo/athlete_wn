"use client";

import React from 'react';

export default function MotherVegetableProject() {
  return (
    <section className="relative py-20 px-4 md:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#4ade80] to-[#22c55e] bg-clip-text text-transparent">
            MOTHER VEGETABLE PROJECT
          </h2>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black border border-[#4ade80]/30 rounded-2xl p-8 md:p-12">
          <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
            <p>
              The MOTHER VEGETABLE PROJECT is the world's only project that aims to restore the Earth and all life, centered around two one-of-a-kind businesses.
            </p>
            <p>
              In this process, each facility purifies the atmosphere by absorbing CO2 and generating oxygen 24 hours a day, 365 days a year, while simultaneously contributing to improving the health of humans and living organisms through Mother Vegetable products and the aquaculture of fish and shellfish.
            </p>
            <p>
              Furthermore, by expanding these facilities around the world, it will develop into eight additional industrial sectors.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-black/50 rounded-xl border border-[#4ade80]/20">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-[#4ade80] font-bold text-lg mb-2">Earth Restoration</h3>
              <p className="text-gray-400 text-sm">地球環境の再生</p>
            </div>
            
            <div className="text-center p-6 bg-black/50 rounded-xl border border-[#4ade80]/20">
              <div className="text-5xl mb-4">💚</div>
              <h3 className="text-[#4ade80] font-bold text-lg mb-2">Health Improvement</h3>
              <p className="text-gray-400 text-sm">人類と生物の健康向上</p>
            </div>
            
            <div className="text-center p-6 bg-black/50 rounded-xl border border-[#4ade80]/20">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-[#4ade80] font-bold text-lg mb-2">CO2 Absorption</h3>
              <p className="text-gray-400 text-sm">24時間365日のCO2吸収</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
