"use client";

import React from 'react';

export default function Nutrients48() {
  const nutrientCategories = [
    { title: "Essential Fatty Acids", count: "9 types", icon: "🔬" },
    { title: "Amino Acids", count: "10 types", icon: "🧬" },
    { title: "Vital Vitamins", count: "18 types", icon: "💊" },
    { title: "Key Minerals For Balance", count: "3 types", icon: "⚡" },
    { title: "Other Functional Ingredients", count: "9 types", icon: "🌿" },
  ];

  return (
    <section className="relative py-20 px-4 md:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#4ade80] to-[#22c55e] bg-clip-text text-transparent">
            48 Nutrients
          </h2>
          <p className="text-xl text-gray-300">TORIKOMU / MAZEKOMU</p>
        </div>

        {/* Nutrient Categories */}
        <div className="grid md:grid-cols-5 gap-6 mb-12">
          {nutrientCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black border border-[#4ade80]/30 rounded-xl p-6 text-center hover:border-[#4ade80]/60 transition-all duration-300"
            >
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="text-[#4ade80] font-bold text-lg mb-2">{category.title}</h3>
              <p className="text-gray-400 text-sm">{category.count}</p>
            </div>
          ))}
        </div>

        {/* Detailed List */}
        <div className="bg-gradient-to-br from-gray-900 to-black border border-[#4ade80]/30 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-[#4ade80] mb-6 text-center">Complete Nutrient List</h3>
          <div className="text-gray-300 leading-relaxed text-sm md:text-base">
            <p className="text-justify">
              Potassium, sodium, magnesium, calcium, phosphorus, iron, manganese, zinc, copper, 
              Vitamin A, B1, B2, B3, B5, B6, B9, C, E, K, tryptophan, threonine, leucine, 
              isoleucine, lysine, methionine, phenylalanine, valine, histidine, arginine, 
              cystine, tyrosine, alanine, aspartic acid, glutamic acid, serine, glycine, proline, 
              saturated fatty acids, omega-3 fatty acids, omega-6 fatty acids, C-phycocyanin, 
              chlorophyll a, total carotenoids, nucleic acids, spirulan, glycogen-like 
              polysaccharides, β-glucan-like polysaccharides, cellulose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
