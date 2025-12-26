export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b-2 border-green-500" style={{ borderStyle: 'dashed' }}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center border-2 border-green-500 p-2" style={{ borderStyle: 'dashed' }}>
            <img 
              src="/Images/Assets/General/logo.png" 
              alt="Mother Vegetable Logo" 
              className="h-10"
            />
          </a>
          
          <nav className="hidden md:flex items-center space-x-1">
            <a href="#food" className="text-white hover:text-green-500 transition px-4 py-2 border-2 border-green-500" style={{ borderStyle: 'dashed' }}>Food</a>
            <a href="#cosmetic" className="text-white hover:text-green-500 transition px-4 py-2 border-2 border-green-500" style={{ borderStyle: 'dashed' }}>Cosmetic</a>
            <a href="#products" className="text-white hover:text-green-500 transition px-4 py-2 border-2 border-green-500" style={{ borderStyle: 'dashed' }}>Products</a>
            <a href="#howtouse" className="text-white hover:text-green-500 transition px-4 py-2 border-2 border-green-500 flex items-center" style={{ borderStyle: 'dashed' }}>
              How To Use <span className="ml-1">▼</span>
            </a>
            <a href="#instructor" className="text-white hover:text-green-500 transition px-4 py-2 border-2 border-green-500" style={{ borderStyle: 'dashed' }}>Certified Instructor</a>
          </nav>

          <div className="flex items-center space-x-2">
            <div className="px-3 py-1 border-2 border-red-500 text-white text-sm">Eng</div>
            <button className="p-2 border-2 border-green-500 text-white" style={{ borderStyle: 'dashed' }}>🛒</button>
            <button className="p-2 border-2 border-green-500 text-white" style={{ borderStyle: 'dashed' }}>👤</button>
          </div>
        </div>
      </header>

      {/* Hero Section - 長原選手 */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        </div>
        
        <div className="relative z-10 text-center space-y-6 px-4">
          <div className="mb-8">
            <img 
              src="/Images/Assets/General/logo.png" 
              alt="Mother Vegetable Logo" 
              className="h-20 mx-auto mb-6"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-green-500 tracking-wider">
            MOTHER VEGETABLE PRODUCTS
          </h1>
          
          <div className="w-48 h-1 bg-green-500 mx-auto"></div>
          
          <p className="text-xl md:text-2xl text-green-400">
            The vegetable from 3.5 billion years ago
          </p>
          
          <p className="text-2xl md:text-3xl text-green-500 font-semibold">
            &apos;Mother Vegetable&apos;
          </p>
          
          <p className="text-lg text-green-400">
            Earth&apos;s life <span className="text-red-500">force</span>, for you.
          </p>
          
          <div className="mt-8 pt-8 border-t-2 border-green-500" style={{ borderStyle: 'dashed' }}>
            <p className="text-2xl text-white font-bold mb-2">長原和那</p>
            <p className="text-lg text-gray-300">バドミントン日本代表選手</p>
          </div>
        </div>
      </section>

      {/* Japanese Explanation Section */}
      <section className="py-12 bg-black border-b-2 border-green-500" style={{ borderStyle: 'dashed' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto border-2 border-green-500 p-8" style={{ borderStyle: 'dashed' }}>
            <div className="space-y-4 text-center">
              <p className="text-lg">
                <span className="text-red-500 font-bold">&apos;TORIKOMU&apos;</span> means of having in Japanese as <span className="text-white">「取り込む」</span>
              </p>
              <p className="text-lg">
                <span className="text-red-500 font-bold">&apos;MAZEKOMU&apos;</span> means of mixing in Japanese as <span className="text-white">「混ぜ込む」</span>
              </p>
              <p className="text-lg">
                <span className="text-red-500 font-bold">&apos;SURIKOMU&apos;</span> means of rubbing in Japanese as <span className="text-white">「擦り込む」</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-black border-b-2 border-green-500" style={{ borderStyle: 'dashed' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-green-500 mb-6">Products</h2>
            <div className="w-48 h-1 bg-green-500 mx-auto"></div>
          </div>

          <div className="border-4 border-green-500 p-8" style={{ borderStyle: 'dashed' }}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Achieve Card */}
              <div className="border-4 border-green-500 p-6" style={{ borderStyle: 'dashed' }}>
                <div className="aspect-square mb-6 bg-black overflow-hidden flex items-center justify-center">
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-full object-contain"
                  >
                    <source src="https://mv-prod-1334776400.cos.ap-singapore.myqcloud.com/products/homepage/achieve_video.mp4" type="video/mp4" />
                  </video>
                </div>
                
                <h3 className="text-3xl font-bold text-green-500 mb-2">Achieve</h3>
                <p className="text-sm text-gray-400 mb-4">for Body</p>
                
                <p className="text-red-500 font-bold mb-2">&apos;TORIKOMU&apos;</p>
                <p className="text-white mb-4">48 different nutrients at once.</p>
                
                <div className="space-y-2 mb-6">
                  <p className="text-sm text-gray-300">✓ アスリートの体をサポート、全身の細胞再生を促進</p>
                  <p className="text-sm text-gray-300">✓ トレーニング後の疲労回復、睡眠の質向上</p>
                  <p className="text-sm text-gray-300">✓ 効率的な栄養吸収で持久力アップ</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-green-500 font-bold mb-2">How to use</h4>
                  <p className="text-sm text-gray-300">✓ Simply &apos;TORIKOMU&apos; one capsule into your drink or food.</p>
                </div>
                
                <div className="flex gap-4">
                  <a href="#" className="flex-1 text-center py-2 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition" style={{ borderStyle: 'dashed' }}>view more</a>
                  <a href="#" className="flex-1 text-center py-2 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition" style={{ borderStyle: 'dashed' }}>Shop</a>
                </div>
              </div>

              {/* Confidence Card */}
              <div className="border-4 border-red-500 p-6" style={{ borderStyle: 'dashed' }}>
                <div className="aspect-square mb-6 bg-black overflow-hidden flex items-center justify-center">
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-full object-contain"
                  >
                    <source src="https://mv-prod-1334776400.cos.ap-singapore.myqcloud.com/products/homepage/confidence_video.mp4" type="video/mp4" />
                  </video>
                </div>
                
                <h3 className="text-3xl font-bold text-red-500 mb-2">Confidence</h3>
                <p className="text-sm text-gray-400 mb-4">for All Skin</p>
                
                <p className="text-red-500 font-bold mb-2">&apos;SURIKOMU&apos;, &apos;MAZEKOMU&apos;</p>
                <p className="text-white mb-4">Skin Healing Capsule</p>
                
                <div className="space-y-2 mb-6">
                  <p className="text-sm text-gray-300">✓ トレーニング中の汗による肌トラブルを軽減</p>
                  <p className="text-sm text-gray-300">✓ 日焼けダメージのケア、肌の回復力向上</p>
                  <p className="text-sm text-gray-300">✓ アスリートの美肌維持をサポート</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-red-500 font-bold mb-2">How to use</h4>
                  <p className="text-sm text-gray-300">✓ &apos;SURIKOMU&apos; or &apos;MAZEKOMU&apos; into your current cosmetics.</p>
                </div>
                
                <div className="flex gap-4">
                  <a href="#" className="flex-1 text-center py-2 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition" style={{ borderStyle: 'dashed' }}>view more</a>
                  <a href="#" className="flex-1 text-center py-2 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition" style={{ borderStyle: 'dashed' }}>Shop</a>
                </div>
              </div>

              {/* Forever Card */}
              <div className="border-4 border-green-500 p-6" style={{ borderStyle: 'dashed' }}>
                <div className="aspect-square mb-6 bg-black overflow-hidden flex items-center justify-center">
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-full object-contain"
                  >
                    <source src="https://mv-prod-1334776400.cos.ap-singapore.myqcloud.com/products/homepage/forever_video.mp4" type="video/mp4" />
                  </video>
                </div>
                
                <h3 className="text-3xl font-bold text-green-500 mb-2">Forever</h3>
                <p className="text-sm text-gray-400 mb-4">for Pet</p>
                
                <p className="text-red-500 font-bold mb-2">&apos;MAZEKOMU&apos;</p>
                <p className="text-white mb-4">to extend your pet&apos;s healthy life.</p>
                
                <div className="space-y-2 mb-6">
                  <p className="text-sm text-gray-300">✓ Supports tear stain reduction and gut health.</p>
                  <p className="text-sm text-gray-300">✓ Helps reduce body and waste odors, boosts appetite.</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-green-500 font-bold mb-2">How to use</h4>
                  <p className="text-sm text-gray-300">✓ Simply &apos;MAZEKOMU&apos; one capsule into your pet&apos;s food.</p>
                </div>
                
                <div className="flex gap-4">
                  <a href="#" className="flex-1 text-center py-2 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition" style={{ borderStyle: 'dashed' }}>view more</a>
                  <a href="#" className="flex-1 text-center py-2 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition" style={{ borderStyle: 'dashed' }}>Shop</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Athlete Profile */}
      <section className="py-20 bg-black border-b-2 border-green-500" style={{ borderStyle: 'dashed' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-green-500 mb-6">Athlete Profile</h2>
            <div className="w-48 h-1 bg-green-500 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="border-4 border-green-500 p-4" style={{ borderStyle: 'dashed' }}>
                <img 
                  src="/nagahara_rakket.jpg" 
                  alt="Nagahara Wakana" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="md:w-1/2 space-y-6">
              <h3 className="text-4xl font-bold text-green-500">長原和那</h3>
              <p className="text-xl text-gray-300">Nagahara Wakana</p>
              <p className="text-lg text-white font-semibold">バドミントン日本代表選手</p>
              
              <p className="text-gray-300 leading-relaxed">
                世界トップレベルで活躍するバドミントン選手。日々のハードなトレーニングと試合で、最高のパフォーマンスを維持するためにMother Vegetable製品を愛用。
              </p>
              
              <div>
                <h4 className="text-xl font-bold text-green-500 mb-4 border-b-2 border-green-500 inline-block">主な実績</h4>
                <ul className="space-y-2 text-gray-300 mt-4">
                  <li>• 世界バドミントン選手権大会 出場</li>
                  <li>• 国際大会 多数優勝</li>
                  <li>• 日本代表として世界で活躍</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-black border-b-2 border-green-500" style={{ borderStyle: 'dashed' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-green-500 mb-6">Testimonial</h2>
            <div className="w-48 h-1 bg-green-500 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="border-4 border-green-500 p-8" style={{ borderStyle: 'dashed' }}>
              <h3 className="text-2xl font-bold text-green-500 mb-4">Achieve - 体のために</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                「トレーニング後の回復が早くなり、翌日のコンディションが全く違います。48種類の栄養素を一度に摂取できるので、忙しい遠征中でも栄養バランスを保てています。」
              </p>
              <p className="text-gray-400 text-sm">- 長原和那</p>
            </div>

            <div className="border-4 border-red-500 p-8" style={{ borderStyle: 'dashed' }}>
              <h3 className="text-2xl font-bold text-red-500 mb-4">Confidence - 肌のために</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                「練習で大量の汗をかくので肌トラブルが悩みでしたが、Confidenceを使い始めてから肌の調子が良くなりました。試合前でも自信を持って臨めます。」
              </p>
              <p className="text-gray-400 text-sm">- 長原和那</p>
            </div>
          </div>
        </div>
      </section>

      {/* 48 Nutrients */}
      <section className="py-20 bg-black border-b-2 border-green-500" style={{ borderStyle: 'dashed' }}>
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-8 mb-12 flex-wrap">
            {[
              { name: 'Essential Fatty Acids', count: '9 types' },
              { name: 'Amino Acids', count: '10 types' },
              { name: 'Vital Vitamins', count: '18 types' },
              { name: 'Key Minerals For Balance', count: '3 types' },
              { name: 'Other Functional Ingredients', count: '9 types' }
            ].map((item, index) => (
              <div key={index} className="w-32 h-32 rounded-full bg-gradient-to-br from-green-600 to-green-800 flex flex-col items-center justify-center text-center p-4">
                <p className="text-white text-xs font-bold mb-1">{item.name}</p>
                <p className="text-white text-sm">{item.count}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-green-500 mb-6">48 Nutrients</h2>
          </div>

          <div className="max-w-5xl mx-auto text-center">
            <p className="text-gray-400 text-sm leading-relaxed">
              Potassium, sodium, magnesium, calcium, phosphorus, iron, manganese, zinc, copper, Vitamin A, B1, B2, B3, B5, B6, B9, C, E, K, tryptophan, threonine, leucine, isoleucine, lysine, methionine, phenylalanine, valine, histidine, arginine, cystine, tyrosine, alanine, aspartic acid, glutamic acid, serine, glycine, proline, saturated fatty acids, omega-3 fatty acids, omega-6 fatty acids, C-phycocyanin, chlorophyll a, total carotenoids, nucleic acids, spirulan, glycogen-like polysaccharides, β-glucan-like polysaccharides, cellulose.
            </p>
          </div>
        </div>
      </section>

      {/* Athletes Section */}
      <section className="py-20 bg-black border-b-2 border-green-500" style={{ borderStyle: 'dashed' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-8 mb-8">
              <div className="text-6xl">🏃</div>
              <div>
                <h2 className="text-4xl font-bold text-green-500 border-b-2 border-green-500 inline-block">Athletes</h2>
              </div>
            </div>
            
            <ul className="space-y-3 text-gray-300">
              <li>• 添加物のデトックス効果</li>
              <li>• 筋肉回復を促進し、持久力を向上</li>
              <li>• 効率的な栄養吸収をサポート</li>
              <li>• 炎症を軽減し、回復をサポート</li>
              <li>• トレーニング効果を最大化</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t-2 border-green-500 py-12" style={{ borderStyle: 'dashed' }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-6">
            <img 
              src="/Images/Assets/General/logo.png" 
              alt="Mother Vegetable Logo" 
              className="h-12"
            />
            
            <p className="text-gray-400 text-sm">
              © 2024 Mother Vegetable. All rights reserved.
            </p>
            
            <p className="text-gray-400 text-sm">
              Athlete: 長原和那 (Nagahara Wakana)
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
