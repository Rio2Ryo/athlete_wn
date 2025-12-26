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
            <a href="#athlete" className="text-white hover:text-green-500 transition px-4 py-2 border-2 border-green-500" style={{ borderStyle: 'dashed' }}>Athlete</a>
            <a href="#instructor" className="text-white hover:text-green-500 transition px-4 py-2 border-2 border-green-500" style={{ borderStyle: 'dashed' }}>Certified Instructor</a>
          </nav>

          <div className="flex items-center space-x-2">
            <div className="px-3 py-1 border-2 border-red-500 text-white text-sm">Eng</div>
            <button className="p-2 border-2 border-white text-white">🛒</button>
            <button className="p-2 border-2 border-white text-white">👤</button>
          </div>
        </div>
      </header>

      {/* Hero Section - 長原選手 */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/nagahara_rakket.jpg" 
            alt="Nagahara Wakana with Badminton Racket" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
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
          
          <div className="mt-8 pt-8 border-t-2 border-green-500">
            <p className="text-2xl text-white font-bold mb-2">長原和那</p>
            <p className="text-lg text-gray-300">バドミントン日本代表選手</p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-green-500 mb-6">Products</h2>
            <img 
              src="/Images/Assets/homepage/underline.png" 
              alt="Underline" 
              className="mx-auto h-2"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Achieve Card */}
            <div className="border-4 border-green-500 p-8" style={{ borderStyle: 'dashed', borderSpacing: '10px' }}>
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
              
              <h3 className="text-4xl font-bold text-green-500 mb-2 text-center">Achieve</h3>
              <p className="text-sm text-gray-400 mb-6 text-center">for Body</p>
              
              <p className="text-red-500 font-bold mb-4 text-center">&apos;TORIKOMU&apos;</p>
              <p className="text-white mb-8 text-center">48 different nutrients at once.</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <p className="text-sm text-white">アスリートの体をサポート、全身の細胞再生を促進</p>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <p className="text-sm text-white">トレーニング後の疲労回復、睡眠の質向上</p>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <p className="text-sm text-white">効率的な栄養吸収で持久力アップ</p>
                </div>
              </div>

              <div className="border-t-2 border-green-500 pt-6">
                <h4 className="text-xl font-bold text-green-500 mb-4">How to use</h4>
                <div className="flex items-start mb-6">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <p className="text-sm text-white">Simply &apos;TORIKOMU&apos; one capsule into your drink or food.</p>
                </div>
                <a href="#" className="text-green-500 hover:underline text-sm font-semibold">view more</a>
              </div>
            </div>

            {/* Confidence Card */}
            <div className="border-4 border-red-500 p-8" style={{ borderStyle: 'dashed', borderSpacing: '10px' }}>
              <div className="aspect-square mb-6 bg-black overflow-hidden flex items-center justify-center">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-contain"
                >
                  <source src="https://mv-prod-1334776400.cos.ap-singapore.myqcloud.com/products/homepage/confidence_v2.mp4" type="video/mp4" />
                </video>
              </div>
              
              <h3 className="text-4xl font-bold text-green-500 mb-2 text-center">Confidence</h3>
              <p className="text-sm text-gray-400 mb-6 text-center">for All Skin</p>
              
              <p className="text-red-500 font-bold mb-4 text-center">&apos;SURIKOMU&apos;, &apos;MAZEKOMU&apos;</p>
              <p className="text-white mb-8 text-center">Skin Healing Capsule</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <p className="text-sm text-white">トレーニング中の汗による肌トラブルを軽減</p>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <p className="text-sm text-white">日焼けダメージのケア、肌の回復力向上</p>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <p className="text-sm text-white">アスリートの美肌維持をサポート</p>
                </div>
              </div>

              <div className="border-t-2 border-red-500 pt-6">
                <h4 className="text-xl font-bold text-green-500 mb-4">How to use</h4>
                <div className="flex items-start mb-6">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <p className="text-sm text-white">&apos;SURIKOMU&apos; or &apos;MAZEKOMU&apos; into your current cosmetics.</p>
                </div>
                <a href="#" className="text-green-500 hover:underline text-sm font-semibold">view more</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Athlete Profile Section */}
      <section id="athlete" className="py-20 bg-black border-t-2 border-green-500" style={{ borderStyle: 'dashed' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-5xl md:text-6xl font-bold text-green-500 text-center mb-16">Athlete Profile</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/nagahara_rakket.jpg" 
                alt="長原和那" 
                className="w-full rounded-lg border-4 border-green-500"
                style={{ borderStyle: 'dashed' }}
              />
            </div>
            
            <div className="space-y-6">
              <h3 className="text-4xl font-bold text-green-500">長原和那</h3>
              <p className="text-xl text-gray-300">Nagahara Wakana</p>
              
              <div className="space-y-4 text-white">
                <p className="text-lg">バドミントン日本代表選手</p>
                <p className="text-sm text-gray-400">
                  世界トップレベルで活躍するバドミントン選手。日々のハードなトレーニングと試合で、最高のパフォーマンスを維持するためにMother Vegetable製品を愛用。
                </p>
              </div>
              
              <div className="pt-6 border-t-2 border-green-500">
                <h4 className="text-2xl font-bold text-green-500 mb-4">主な実績</h4>
                <ul className="space-y-2 text-sm text-white">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>世界バドミントン選手権大会 出場</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>国際大会 多数優勝</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>日本代表として世界で活躍</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-black border-t-2 border-green-500" style={{ borderStyle: 'dashed' }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-bold text-green-500 text-center mb-16">Testimonial</h2>
          
          <div className="space-y-12">
            {/* Achieve Testimonial */}
            <div className="border-4 border-green-500 p-8" style={{ borderStyle: 'dashed' }}>
              <h3 className="text-3xl font-bold text-green-500 mb-6">Achieve - 体のために</h3>
              <p className="text-white leading-relaxed mb-4">
                「トレーニング後の回復が早くなり、翌日のコンディションが全く違います。48種類の栄養素を一度に摂取できるので、忙しい遠征中でも栄養バランスを保てています。」
              </p>
              <p className="text-gray-400 text-sm">- 長原和那</p>
            </div>
            
            {/* Confidence Testimonial */}
            <div className="border-4 border-red-500 p-8" style={{ borderStyle: 'dashed' }}>
              <h3 className="text-3xl font-bold text-green-500 mb-6">Confidence - 肌のために</h3>
              <p className="text-white leading-relaxed mb-4">
                「練習で大量の汗をかくので肌トラブルが悩みでしたが、Confidenceを使い始めてから肌の調子が良くなりました。試合前でも自信を持って臨めます。」
              </p>
              <p className="text-gray-400 text-sm">- 長原和那</p>
            </div>
          </div>
        </div>
      </section>

      {/* 48 Nutrients Section */}
      <section className="py-20 bg-black border-t-2 border-green-500" style={{ borderStyle: 'dashed' }}>
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-6 mb-16 flex-wrap">
            {[
              { title: 'Essential Fatty Acids', count: '9 types' },
              { title: 'Amino Acids', count: '10 types' },
              { title: 'Vital Vitamins', count: '18 types' },
              { title: 'Key Minerals For Balance', count: '3 types' },
              { title: 'Other Functional Ingredients', count: '9 types' }
            ].map((item, index) => (
              <div key={index} className="w-44 h-44 rounded-full bg-gradient-to-br from-green-600 to-green-800 flex flex-col items-center justify-center text-center p-6 shadow-lg">
                <p className="text-white text-sm font-bold mb-2 leading-tight">{item.title}</p>
                <p className="text-white text-xs">{item.count}</p>
              </div>
            ))}
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-green-500 text-center mb-12">48 Nutrients</h2>
          
          <p className="text-center text-gray-300 max-w-5xl mx-auto leading-relaxed text-sm">
            Potassium, sodium, magnesium, calcium, phosphorus, iron, manganese, zinc, copper, Vitamin A, B1, B2, B3, B5, B6, B9, C, E, K, tryptophan, threonine, leucine, isoleucine, lysine, methionine, phenylalanine, valine, histidine, arginine, cystine, tyrosine, alanine, aspartic acid, glutamic acid, serine, glycine, proline, saturated fatty acids, omega-3 fatty acids, omega-6 fatty acids, C-phycocyanin, chlorophyll a, total carotenoids, nucleic acids, spirulan, glycogen-like polysaccharides, β-glucan-like polysaccharides, cellulose.
          </p>
        </div>
      </section>

      {/* Athletes Section */}
      <section className="py-20 bg-black border-t-2 border-green-500" style={{ borderStyle: 'dashed' }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex gap-6 items-start">
            <img src="/Images/Assets/homepage/foodFunction/athletes.png" alt="Athletes" className="w-24 h-24 object-contain flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-4xl font-bold text-green-500 mb-6 pb-2 border-b-2 border-green-500">Athletes</h3>
              <ul className="space-y-3 text-base">
                <li className="flex items-start"><span className="mr-3 text-white">•</span><span className="text-white">添加物のデトックス効果</span></li>
                <li className="flex items-start"><span className="mr-3 text-white">•</span><span className="text-white">筋肉回復を促進し、持久力を向上</span></li>
                <li className="flex items-start"><span className="mr-3 text-white">•</span><span className="text-white">効率的な栄養吸収をサポート</span></li>
                <li className="flex items-start"><span className="mr-3 text-white">•</span><span className="text-white">炎症を軽減し、回復をサポート</span></li>
                <li className="flex items-start"><span className="mr-3 text-white">•</span><span className="text-white">トレーニング効果を最大化</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t-2 border-green-500 bg-black" style={{ borderStyle: 'dashed' }}>
        <div className="container mx-auto px-4 text-center">
          <img 
            src="/Images/Assets/General/logo.png" 
            alt="Mother Vegetable Logo" 
            className="h-12 mx-auto mb-6"
          />
          <p className="text-gray-400 text-sm mb-2">
            © 2024 Mother Vegetable. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Athlete: 長原和那 (Nagahara Wakana)
          </p>
        </div>
      </footer>
    </div>
  );
}
