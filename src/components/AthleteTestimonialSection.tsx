"use client";

export default function AthleteTestimonialSection() {
  return (
    <section className="py-20 bg-black border-t-2 border-[#4ade80]/20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* タイトル */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#4ade80] text-center mb-4">
            Athlete's Voice
            <div className="h-1 bg-gradient-to-r from-transparent via-[#4ade80] to-transparent mt-4 mx-auto w-64" />
          </h2>
          <p className="text-center text-gray-400 mb-12">永原和可那選手の使用感想</p>

          {/* Achieve使用感想 */}
          <div className="mb-12 border-2 border-[#4ade80] rounded-lg p-8 bg-black/80">
            <h3 className="text-2xl font-bold text-[#4ade80] mb-4 flex items-center gap-3">
              <span className="text-3xl">💊</span>
              Achieveを使ってみて
            </h3>
            <div className="space-y-4 text-white">
              <p className="leading-relaxed">
                トレーニング後の回復が驚くほど早くなりました。以前は激しい練習の翌日は体が重く感じることが多かったのですが、Achieveを摂取し始めてからは、翌朝の目覚めが全く違います。
              </p>
              <p className="leading-relaxed">
                48種類もの栄養素が一度に摂れるというのは、忙しいアスリート生活の中で本当に助かっています。食事だけでこれだけの栄養を摂ろうとすると、かなりの量と種類を食べなければならず、時間も手間もかかります。Achieveなら、カプセル一つで完結するので、遠征先でも簡単に続けられます。
              </p>
              <p className="leading-relaxed">
                特に感じているのは、筋肉痛が軽減されたことです。ハードなトレーニングをしても、以前ほど筋肉痛が残らず、次の日のパフォーマンスに影響が出にくくなりました。これは試合前の調整期間でも非常に重要です。
              </p>
            </div>
          </div>

          {/* Confidence使用感想 */}
          <div className="border-2 border-[#4ade80] rounded-lg p-8 bg-black/80">
            <h3 className="text-2xl font-bold text-[#4ade80] mb-4 flex items-center gap-3">
              <span className="text-3xl">✨</span>
              Confidenceを使ってみて
            </h3>
            <div className="space-y-4 text-white">
              <p className="leading-relaxed">
                アスリートとして、日々激しいトレーニングをしていると、どうしても肌のケアが後回しになりがちです。特に、化粧をする時間もないほど忙しい日々が続くと、肌トラブルに悩まされることが多かったのですが、Confidenceを使い始めてからは、そういった悩みがほとんどなくなりました。
              </p>
              <p className="leading-relaxed">
                練習中は大量の汗をかきますが、Confidenceを使うようになってから、汗の量が抑えられているように感じます。また、汗をかいても肌がベタつかず、清潔感を保てるようになりました。これは試合前のメンタル面でも大きなプラスです。
              </p>
              <p className="leading-relaxed">
                肌のトーンが明るくなり、ニキビ跡も目立たなくなってきました。アスリートでも綺麗でいたいという願いを、Confidenceが叶えてくれています。自然由来の成分で肌を整えられるので、安心して毎日使えるのも嬉しいポイントです。
              </p>
            </div>
          </div>

          {/* 署名 */}
          <div className="mt-8 text-right">
            <p className="text-[#4ade80] font-bold text-xl">永原和可那</p>
            <p className="text-gray-400">Wakana Nagahara</p>
            <p className="text-gray-400 text-sm">2-Time World Badminton Champion</p>
          </div>
        </div>
      </div>
    </section>
  );
}
