"use client";

import React from 'react';

export default function ProductsNew() {
  return (
    <section className="relative py-20 px-4 md:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#4ade80] to-[#22c55e] bg-clip-text text-transparent">
            Products
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Achieve */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-[#4ade80]/30 rounded-2xl p-8 hover:border-[#4ade80]/60 hover:shadow-[0_0_50px_rgba(74,222,128,0.2)] transition-all duration-300">
            <div className="flex justify-center mb-6">
              <img
                src="/001.jpg"
                alt="Achieve Product"
                className="w-48 h-48 object-contain"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/400x400/1a1a1a/4ade80?text=Achieve";
                }}
              />
            </div>
            
            <h3 className="text-3xl font-bold text-[#4ade80] text-center mb-2">Achieve</h3>
            <p className="text-gray-400 text-center mb-4">for Body</p>
            <p className="text-[#4ade80] text-center font-semibold mb-6">'TORIKOMU'</p>
            
            <p className="text-white text-center text-lg font-semibold mb-6">
              48 different nutrients at once.
            </p>
            
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start">
                <span className="text-[#4ade80] mr-2 mt-1">✓</span>
                <p>Supports a healthy gut, Regeneration of cells throughout the body.</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#4ade80] mr-2 mt-1">✓</span>
                <p>Helps relieve constipation, improve sleep, and aid weight management.</p>
              </div>
            </div>
          </div>

          {/* Confidence */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-[#4ade80]/30 rounded-2xl p-8 hover:border-[#4ade80]/60 hover:shadow-[0_0_50px_rgba(74,222,128,0.2)] transition-all duration-300">
            <div className="flex justify-center mb-6">
              <img
                src="/002.jpg"
                alt="Confidence Product"
                className="w-48 h-48 object-contain"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/400x400/1a1a1a/4ade80?text=Confidence";
                }}
              />
            </div>
            
            <h3 className="text-3xl font-bold text-[#4ade80] text-center mb-2">Confidence</h3>
            <p className="text-gray-400 text-center mb-4">for All Skin</p>
            <p className="text-[#4ade80] text-center font-semibold mb-6">'SURIKOMU' , 'MAZEKOMU'</p>
            
            <p className="text-white text-center text-lg font-semibold mb-6">
              Skin Healing Effect
            </p>
            
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start">
                <span className="text-[#4ade80] mr-2 mt-1">✓</span>
                <p>Powerful anti-aging benefits.</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#4ade80] mr-2 mt-1">✓</span>
                <p>Helps improve dark spots, acne, odor, and skin damage.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Confidence Details */}
        <div className="max-w-6xl mx-auto mt-12 bg-gradient-to-br from-gray-900 to-black border border-[#4ade80]/30 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-[#4ade80] mb-6 text-center">Confidence - Medical Grade Quasi-Drug</h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-[#4ade80] font-semibold text-lg mb-4">効果</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#4ade80] mr-2">•</span>
                  <span>Dark Spots Freckles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4ade80] mr-2">•</span>
                  <span>Acne Acne scars</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4ade80] mr-2">•</span>
                  <span>Wounds Scars, Burn Marks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4ade80] mr-2">•</span>
                  <span>Odor Face, Neck, Underarms, V-Zone, Feet</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4ade80] mr-2">•</span>
                  <span>Shine Maintains A Clean Look, Natural/ Earth Tones</span>
                </li>
              </ul>
            </div>
            
            <div>
              <p className="text-gray-300 leading-relaxed">
                Mother Vegetable, certified as a medical-grade quasi-drug, is trusted by medical institutions worldwide for its healing properties — used in post-surgery recovery, burn scar improvement, cancer care, and even to help control skin shine. It supports the skin's natural ability to heal and restore balance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
