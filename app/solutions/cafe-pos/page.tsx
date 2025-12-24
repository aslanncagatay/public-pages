import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kafe POS Sistemi | Kahve Dükkanları İçin POS Yazılımı",
  description: "Kahve dükkanları için özel tasarlanmış POS sistemi. Hızlı sipariş alma, stok takibi, müşteri sadakat programı ve detaylı raporlama. Kafe işletmenizi büyütün.",
  alternates: {
    canonical: "https://yourbrand.com/solutions/cafe-pos",
  },
  openGraph: {
    title: "Kafe POS Sistemi | Kahve Dükkanları İçin POS Yazılımı",
    description: "Kahve dükkanları için özel tasarlanmış POS sistemi. Hızlı sipariş alma, stok takibi ve müşteri sadakat programı.",
    type: "website",
    locale: "tr_TR",
    url: "https://yourbrand.com/solutions/cafe-pos",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kafe POS Sistemi | Kahve Dükkanları İçin POS Yazılımı",
    description: "Kahve dükkanları için özel tasarlanmış POS sistemi. Hızlı sipariş alma, stok takibi ve müşteri sadakat programı.",
  },
};

const cafeSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Kafe POS Sistemi",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, iOS, Android",
  offers: {
    "@type": "Offer",
    price: "299",
    priceCurrency: "TRY",
  },
  description: "Kahve dükkanları için özel tasarlanmış POS sistemi. Hızlı sipariş alma, stok takibi ve müşteri sadakat programı.",
  featureList: [
    "Hızlı Sipariş Alma",
    "Stok Takibi",
    "Müşteri Sadakat Programı",
    "QR Menü",
    "Online Sipariş",
    "Detaylı Raporlama",
  ],
};

export default function CafePOSPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cafeSchema) }}
      />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
                  ☕ Kahve Dükkanları İçin
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                  Kafe POS Sistemi
                </h1>
                <p className="text-xl sm:text-2xl text-white/90 mb-4 font-medium">
                  Hızlı sipariş alma, stok takibi ve müşteri sadakat programı ile kafe işletmenizi büyütün.
                </p>
                <p className="text-lg text-white/80 mb-8">
                  Sipariş alma sürenizi yarıya indirin, müşteri sadakatini artırın ve günlük operasyonlarınızı optimize edin.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/pricing"
                    className="bg-white text-orange-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl text-center"
                  >
                    Ücretsiz Dene →
                  </Link>
                  <Link
                    href="/contact"
                    className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl text-lg font-bold border-2 border-white/30 hover:bg-white/20 transition-all text-center"
                  >
                    Demo İste
                  </Link>
                </div>
              </div>
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center">
                  <span className="text-white/50 text-lg">Kafe POS Görseli</span>
                </div>
                {/* Placeholder for cafe image */}
              </div>
            </div>
          </div>
        </section>

        {/* Problem & Solution */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Kafe İşletmeciliğinde Karşılaştığınız Zorluklar
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Sabah Yoğunluğu Yönetimi</h3>
                      <p className="text-gray-600">Sabah saatlerinde kuyruk oluşuyor, sipariş alma süresi uzuyor ve müşteriler beklemek zorunda kalıyor.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Stok Takibi Zorluğu</h3>
                      <p className="text-gray-600">Kahve çekirdekleri, süt, şurup ve diğer malzemelerin stok takibi manuel yapılıyor, eksiklikler geç fark ediliyor.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Müşteri Sadakati Oluşturma</h3>
                      <p className="text-gray-600">Düzenli müşterileri takip etmek, sadakat programı yönetmek ve özel teklifler sunmak zorlaşıyor.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Özel Sipariş Yönetimi</h3>
                      <p className="text-gray-600">Süt alternatifleri, şeker seçenekleri, ekstra shot&apos;lar gibi özelleştirmeleri takip etmek karmaşık hale geliyor.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                  <span className="text-white/50 text-lg">Çözüm Görseli</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Kafe POS Sistemi Özellikleri
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Kahve dükkanları için özel olarak tasarlanmış özellikler
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hızlı Sipariş Alma</h3>
                <p className="text-gray-600 leading-relaxed">
                  Tablet tabanlı arayüz ile siparişleri 3 tıkla alın. Popüler ürünler ön planda, özel siparişler kolayca eklenir. Sabah yoğunluğunda bile hızlı servis.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Akıllı Stok Takibi</h3>
                <p className="text-gray-600 leading-relaxed">
                  Kahve çekirdekleri, süt, şurup ve diğer malzemelerin stok seviyelerini gerçek zamanlı takip edin. Düşük stok uyarıları ve otomatik sipariş önerileri.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Müşteri Sadakat Programı</h3>
                <p className="text-gray-600 leading-relaxed">
                  Puan toplama sistemi, özel indirimler ve doğum günü teklifleri. Düzenli müşterileri takip edin ve sadakati artırın.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Özel Sipariş Yönetimi</h3>
                <p className="text-gray-600 leading-relaxed">
                  Süt alternatifleri (badem, soya, yulaf), şeker seçenekleri, ekstra shot&apos;lar, köpük seviyesi. Her müşterinin tercihini kaydedin ve tek tıkla sipariş verin.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">QR Menü Entegrasyonu</h3>
                <p className="text-gray-600 leading-relaxed">
                  Müşteriler QR kod ile menüye erişsin, sipariş versin. Temassız deneyim, hızlı servis. <Link href="/qr-menu" className="text-amber-600 hover:underline">QR Menü özellikleri</Link> hakkında daha fazla bilgi.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Saatlik Satış Analizi</h3>
                <p className="text-gray-600 leading-relaxed">
                  Hangi saatlerde yoğunluk var? Hangi ürünler ne zaman satılıyor? Personel planlaması ve stok yönetimi için detaylı analitik.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Kafe İşletmenize Sağladığı Faydalar
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Operasyonel verimlilikten müşteri memnuniyetine kadar
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">%50 Daha Hızlı Sipariş Alma</h3>
                  <p className="text-gray-600">
                    Tablet tabanlı sipariş alma ile sabah yoğunluğunda bile sipariş alma süreniz yarıya iner. Kuyruk kısalır, müşteriler mutlu.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">%30 Daha Fazla Tekrar Ziyaret</h3>
                  <p className="text-gray-600">
                    Sadakat programı ve kişiselleştirilmiş teklifler ile düzenli müşteri sayınız artar. Müşteri başına gelir yükselir.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Stok Kaybı %40 Azalır</h3>
                  <p className="text-gray-600">
                    Gerçek zamanlı stok takibi ile eksiklikler erken fark edilir, otomatik sipariş önerileri ile stok kaybı minimize edilir.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Müşteri Tercihleri Kaydı</h3>
                  <p className="text-gray-600">
                    Her müşterinin tercihlerini kaydedin. Düzenli müşterilerin siparişlerini tek tıkla alın, kişiselleştirilmiş deneyim sunun.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Kimler Kullanıyor?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Farklı kafe tipleri için uygun çözümler
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Third Wave Kahve Dükkanları</h3>
                <p className="text-gray-600 mb-4">
                  Özel kahve çekirdekleri, pour-over, cold brew ve özel demleme yöntemleri için detaylı sipariş yönetimi.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Özel demleme yöntemleri
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Çekirdek bazlı takip
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Müşteri eğitimi notları
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Zincir Kafeler</h3>
                <p className="text-gray-600 mb-4">
                  Çok şubeli kafeler için merkezi yönetim, standart sipariş süreçleri ve şube bazlı raporlama.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Merkezi yönetim
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Şube bazlı raporlama
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Standart iş akışları
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pastane-Kafe Kombinasyonları</h3>
                <p className="text-gray-600 mb-4">
                  Kahve ve pastane ürünlerinin birlikte yönetimi, set menüler ve paket fiyatlandırma.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Kombine menü yönetimi
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Set menü önerileri
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Çapraz satış fırsatları
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Related Solutions */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Diğer Çözümlerimizi Keşfedin
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/solutions/restaurant-pos" className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all border-2 border-gray-200 hover:border-amber-300">
                <h3 className="font-bold text-gray-900 mb-2">Restoran POS</h3>
                <p className="text-sm text-gray-600">Tam servis restoranlar için</p>
              </Link>
              <Link href="/solutions/fast-food-pos" className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all border-2 border-gray-200 hover:border-amber-300">
                <h3 className="font-bold text-gray-900 mb-2">Fast Food POS</h3>
                <p className="text-sm text-gray-600">Hızlı servis için</p>
              </Link>
              <Link href="/solutions/bar-pos" className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all border-2 border-gray-200 hover:border-amber-300">
                <h3 className="font-bold text-gray-900 mb-2">Bar POS</h3>
                <p className="text-sm text-gray-600">Barlar için</p>
              </Link>
              <Link href="/solutions/hotel-pos" className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all border-2 border-gray-200 hover:border-amber-300">
                <h3 className="font-bold text-gray-900 mb-2">Otel POS</h3>
                <p className="text-sm text-gray-600">Oteller için</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Kafe İşletmenizi Dijitalleştirin
            </h2>
            <p className="text-xl mb-10 opacity-95">
              14 gün ücretsiz deneme ile başlayın. Kredi kartı gerektirmez.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="bg-white text-orange-600 px-10 py-5 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
              >
                Ücretsiz Dene →
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-xl text-lg font-bold border-2 border-white/30 hover:bg-white/20 transition-all"
              >
                Demo İste
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

