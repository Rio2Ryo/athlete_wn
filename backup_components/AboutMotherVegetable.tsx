"use client";

import React from 'react';

export default function AboutMotherVegetable() {
  return (
    <section className="relative py-20 px-4 md:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="w-20 h-20 mx-auto mb-4">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  d="M50 10 L30 30 Q25 35 30 40 L45 55 L45 90 L55 90 L55 55 L70 40 Q75 35 70 30 Z"
                  fill="#4ade80"
                  stroke="#22c55e"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#4ade80] to-[#22c55e] bg-clip-text text-transparent">
            MOTHER VEGETABLE PRODUCTS
          </h2>
          
          <div className="space-y-4 text-lg md:text-xl">
            <p className="text-[#4ade80]">
              Vegetable at the beginning of Earth, 3.5 billion years ago
            </p>
            <p className="text-2xl md:text-3xl font-semibold text-white">
              'Mother Vegetable'
            </p>
            <p className="text-[#4ade80]">
              Bringing you the life force born from the Earth.
            </p>
          </div>
        </div>

        {/* Japanese Meanings */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-[#4ade80]/30 rounded-xl p-6 text-center">
            <p className="text-[#4ade80] font-bold text-xl mb-2">'TORIKOMU'</p>
            <p className="text-gray-400 text-sm">means of having in Japanese</p>
            <p className="text-white text-lg mt-2">「取り込む」</p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900 to-black border border-[#4ade80]/30 rounded-xl p-6 text-center">
            <p className="text-[#4ade80] font-bold text-xl mb-2">'MAZEKOMU'</p>
            <p className="text-gray-400 text-sm">means of mixing in Japanese</p>
            <p className="text-white text-lg mt-2">「混ぜ込む」</p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900 to-black border border-[#4ade80]/30 rounded-xl p-6 text-center">
            <p className="text-[#4ade80] font-bold text-xl mb-2">'SURIKOMU'</p>
            <p className="text-gray-400 text-sm">means of rubbing in Japanese</p>
            <p className="text-white text-lg mt-2">「擦り込む」</p>
          </div>
        </div>

        {/* Certifications */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-[#4ade80]/30 rounded-xl p-8">
            <h3 className="text-[#4ade80] font-bold text-2xl mb-4">Achieve</h3>
            <p className="text-gray-300 leading-relaxed">
              certified human grade food by Ministry of Health, Labour and Welfare (MHLW), Japan
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900 to-black border border-[#4ade80]/30 rounded-xl p-8">
            <h3 className="text-[#4ade80] font-bold text-2xl mb-4">Confidence</h3>
            <p className="text-gray-300 leading-relaxed">
              certified cosmetic "The Japanese Standards of Quasi-Drug Ingredients (JSQI)" by MHLW, Japan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
