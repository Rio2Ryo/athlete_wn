"use client";

import Header from '@/components/Header';
import AthleteHero from '@/components/AthleteHero';
import AboutMotherVegetable from '@/components/AboutMotherVegetable';
import ProductsNew from '@/components/ProductsNew';
import Nutrients48 from '@/components/Nutrients48';
import AthleteEffects from '@/components/AthleteEffects';
import AthleteTestimonial from '@/components/AthleteTestimonial';
import AthleteIntroduction from '@/components/AthleteIntroduction';
import MotherVegetableProject from '@/components/MotherVegetableProject';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white font-sans selection:bg-[#4ade80] selection:text-black">
        <Header />
        <main>
          {/* Hero Section with Athlete Image */}
          <AthleteHero />
          
          {/* About Mother Vegetable */}
          <AboutMotherVegetable />
          
          {/* Products Section */}
          <ProductsNew />
          
          {/* 48 Nutrients */}
          <Nutrients48 />
          
          {/* Athlete Effects */}
          <AthleteEffects />
          
          {/* Athlete Testimonials */}
          <AthleteTestimonial />
          
          {/* Athlete Introduction & Why Mother Vegetable */}
          <AthleteIntroduction />
          
          {/* Mother Vegetable Project */}
          <MotherVegetableProject />
          
          {/* Partners */}
          <Partners />
        </main>
        <Footer />
        
        {/* Mazavege-chan Fixed Widget */}
        <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center pointer-events-none">
          <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-gray-800 border-2 border-[#4ade80] overflow-hidden shadow-[0_0_20px_rgba(74,222,128,0.3)]">
            <img
              src="/mazavegechan.gif"
              alt="Mazavege-chan"
              className="w-full h-full object-cover"
              onError={(e) => e.currentTarget.src = "https://placehold.co/100x100/000000/4ade80?text=AI"}
            />
          </div>
          <div className="text-white text-xs text-center mt-2 bg-black/50 backdrop-blur px-2 py-1 rounded">
            <p>Mazavege-chan</p>
            <p>AI Agent</p>
            <p>Coming Soon!!</p>
          </div>
        </div>
      </div>
    </LanguageProvider>
  );
}
