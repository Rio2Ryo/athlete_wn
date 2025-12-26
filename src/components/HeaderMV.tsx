"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function HeaderMV() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* ロゴ */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/mv-icon.png"
            alt="Mother Vegetable"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <div className="text-[#4ade80] font-bold text-sm leading-tight">
            <div>MOTHER</div>
            <div>VEGETABLE</div>
          </div>
        </Link>

        {/* ナビゲーション */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#food" className="text-white hover:text-[#4ade80] transition-colors">
            Food
          </Link>
          <Link href="#cosmetic" className="text-white hover:text-[#4ade80] transition-colors">
            Cosmetic
          </Link>
          <Link href="#products" className="text-white hover:text-[#4ade80] transition-colors">
            Products
          </Link>
          <Link href="#howto" className="text-white hover:text-[#4ade80] transition-colors">
            How To Use
          </Link>
          <Link href="#instructor" className="text-white hover:text-[#4ade80] transition-colors">
            Certified Instructor
          </Link>
        </nav>

        {/* 右側アイコン */}
        <div className="flex items-center gap-3">
          <button className="text-white hover:text-[#4ade80] transition-colors">
            Eng
          </button>
          <button className="w-8 h-8 flex items-center justify-center border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors">
            🛒
          </button>
          <button className="w-8 h-8 flex items-center justify-center border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white transition-colors">
            👤
          </button>
        </div>
      </div>
    </header>
  );
}
