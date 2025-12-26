"use client";

import HeaderMV from '@/components/HeaderMV';
import HeroSectionComplete from '@/components/HeroSectionComplete';
import ProductsSectionComplete from '@/components/ProductsSectionComplete';
import JapaneseMeaningSectionMV from '@/components/JapaneseMeaningSectionMV';
import CertificationSectionMV from '@/components/CertificationSectionMV';
import FoodFunctionSectionMV from '@/components/FoodFunctionSectionMV';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <HeaderMV />
      <HeroSectionComplete />
      <ProductsSectionComplete />
      <JapaneseMeaningSectionMV />
      <CertificationSectionMV />
      <FoodFunctionSectionMV />
    </div>
  );
}
