"use client";

import HeroSectionMV from '@/components/HeroSectionMV';
import ProductsSectionMV from '@/components/ProductsSectionMV';
import JapaneseMeaningSectionMV from '@/components/JapaneseMeaningSectionMV';
import CertificationSectionMV from '@/components/CertificationSectionMV';
import FoodFunctionSectionMV from '@/components/FoodFunctionSectionMV';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSectionMV />
      <ProductsSectionMV />
      <JapaneseMeaningSectionMV />
      <CertificationSectionMV />
      <FoodFunctionSectionMV />
    </div>
  );
}
