"use client";

import React from 'react';

export default function AthleteEffects() {
  const effects = [
    {
      icon: "🧪",
      title: "Detoxifies additives",
      description: "体内の不要な添加物を排出し、クリーンな体内環境を維持します"
    },
    {
      icon: "💪",
      title: "Aids muscle recovery and improves endurance",
      description: "筋肉の回復を促進し、持久力を向上させます"
    },
    {
      icon: "⚡",
      title: "Provides efficient nutrient absorption",
      description: "栄養素を効率的に吸収し、トレーニング効果を最大化します"
    },
    {
      icon: "🔥",
      title: "Reduces inflammation and supports recovery",
      description: "炎症を抑制し、トレーニング後の回復をサポートします"
    },
    {
      icon: "🎯",
      title: "Enhances training effectiveness",
      description: "トレーニングの効果を高め、パフォーマンスを向上させます"
    }
  ];

  return (
    <section className="relative py-20 px-4 md:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#4ade80] to-[#22c55e] bg-clip-text text-transparent">
            For Athletes
          </h2>
          <p className="text-xl text-gray-300">アスリートのための特別な効果</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {effects.map((effect, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black border border-[#4ade80]/30 rounded-xl p-6 hover:border-[#4ade80]/60 hover:shadow-[0_0_30px_rgba(74,222,128,0.2)] transition-all duration-300"
            >
              <div className="text-5xl mb-4">{effect.icon}</div>
              <h3 className="text-[#4ade80] font-bold text-lg mb-3">{effect.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{effect.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
