"use client";

import React from 'react';

export default function AthleteHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />
        <img
          src="/hero-earth-regeneration-Dnk2z_VF.png"
          alt="Earth Background"
          className="w-full h-full object-cover opacity-40"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#4ade80] to-[#22c55e] bg-clip-text text-transparent leading-tight">
              Mother Vegetable<br />
              Pro athletes<br />
              Foundation
            </h1>
            
            <div className="space-y-4 text-lg md:text-xl text-gray-300">
              <p className="text-[#4ade80]">The Vegetable from 3.5 billion years ago</p>
              <p className="text-2xl md:text-3xl font-semibold text-white">"Mother Vegetable"</p>
              <p className="text-[#4ade80]">Earth's life force, for you.</p>
            </div>
          </div>

          {/* Right: Athlete Image */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#4ade80] to-[#22c55e] rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-300" />
              <div className="relative rounded-2xl overflow-hidden border-4 border-[#4ade80]/30 shadow-[0_0_50px_rgba(74,222,128,0.3)]">
                <img
                  src="/nagahara_rakket.jpg"
                  alt="Wakana Nagahara - World Badminton Champion"
                  className="w-full h-auto max-w-md object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/600x800/1a1a1a/4ade80?text=Athlete";
                  }}
                />
              </div>
              
              {/* Athlete Name Badge */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-sm px-6 py-3 rounded-full border border-[#4ade80]/50">
                <p className="text-[#4ade80] font-semibold text-lg whitespace-nowrap">Wakana Nagahara</p>
                <p className="text-gray-400 text-sm text-center">World Champion</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#4ade80] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#4ade80] rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
