import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quick Order | Karşılaştırma ve Fiyat Analizi 2024",
  description: "Quick Order karşılaştırması. Fiyat, özellikler, kullanım kolaylığı ve müşteri desteği açısından detaylı analiz.",
  alternates: {
    canonical: "https://quickorder.com.tr/resources/comparisons",
  },
  openGraph: {
    title: "Quick Order | Karşılaştırma ve Fiyat Analizi",
    description: "Quick Order karşılaştırması. Fiyat, özellikler ve kullanım kolaylığı açısından detaylı analiz.",
    type: "article",
    locale: "tr_TR",
    url: "https://quickorder.com.tr/resources/comparisons",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quick Order | Karşılaştırma ve Fiyat Analizi",
    description: "Quick Order karşılaştırması.",
  },
};

const comparisonSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Quick Order Karşılaştırması",
  description: "Quick Order sisteminin detaylı karşılaştırması. Fiyat, özellikler ve kullanım kolaylığı analizi.",
  author: {
    "@type": "Organization",
    name: "Quick Order",
    sameAs: [
      "https://www.facebook.com/people/QuickOrder/",
      "https://x.com/QuickorderPostr",
      "https://linkedin.com/company/quickorderpossistemi",
      "https://www.instagram.com/quickorderpossistemleri/",
      "https://www.youtube.com/@QuickorderAdisyonSistemi",
      "https://t.me/quickorderpos",
      "https://whatsapp.com/channel/0029VazJewhJJhzajgDKnf1p",
    ],
  },
  datePublished: "2024-01-01",
  dateModified: "2024-01-01",
};

export default function Comparisons() {
  const comparisonPoints = [
    {
      feature: "Fiyatlandırma",
      competitor: "Yüksek aylık ücretler, ek özellikler için ek ücret, yüksek başlangıç maliyeti",
      yourbrand: "Düşük başlangıç maliyeti, esnek fiyatlandırma, 14 gün ücretsiz deneme",
      winner: "yourbrand",
    },
    {
      feature: "Kurulum Süresi",
      competitor: "Birkaç saat - 1-2 gün, teknik destek gerektirir",
      yourbrand: "5-10 dakika, kendi kendine kurulum",
      winner: "yourbrand",
    },
    {
      feature: "Bulut Tabanlı",
      competitor: "Kısmen, bazı özellikler için sunucu gerekli",
      yourbrand: "Tamamen bulut tabanlı, sunucu gerektirmez",
      winner: "yourbrand",
    },
    {
      feature: "QR Menü",
      competitor: "Temel QR menü özellikleri, ek ücret ile mevcut",
      yourbrand: "Gelişmiş QR menü, çoklu dil, online sipariş entegrasyonu, dahil ve ücretsiz",
      winner: "yourbrand",
    },
    {
      feature: "Online Sipariş",
      competitor: "Sınırlı online sipariş özellikleri",
      yourbrand: "Tam özellikli online sipariş sistemi, delivery platform entegrasyonu",
      winner: "yourbrand",
    },
    {
      feature: "Mobil Uygulama",
      competitor: "Temel mobil özellikler, sınırlı özellikler",
      yourbrand: "Tam özellikli iOS ve Android uygulamaları, offline mod",
      winner: "yourbrand",
    },
    {
      feature: "Raporlama",
      competitor: "Temel satış raporları, temel raporlar",
      yourbrand: "Gelişmiş analitik, gerçek zamanlı raporlar, müşteri analizi",
      winner: "yourbrand",
    },
    {
      feature: "Stok Yönetimi",
      competitor: "Temel stok takibi",
      yourbrand: "Gelişmiş stok yönetimi, otomatik uyarılar, çoklu depo",
      winner: "yourbrand",
    },
    {
      feature: "Müşteri Desteği",
      competitor: "E-posta ve telefon desteği, çalışma saatleri içinde destek",
      yourbrand: "7/24 destek, canlı destek, e-posta, telefon, video eğitimler",
      winner: "yourbrand",
    },
    {
      feature: "Entegrasyonlar",
      competitor: "Sınırlı entegrasyon seçenekleri",
      yourbrand: "Geniş entegrasyon yelpazesi, REST API, webhook desteği",
      winner: "yourbrand",
    },
    {
      feature: "Güncellemeler",
      competitor: "Periyodik güncellemeler, manuel güncellemeler gerekebilir",
      yourbrand: "Otomatik güncellemeler, kesintisiz hizmet",
      winner: "yourbrand",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }}
      />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
              Quick Order Karşılaştırması
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Detaylı karşılaştırma: Fiyat, özellikler, kullanım kolaylığı ve müşteri desteği
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="bg-white text-indigo-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
              >
                Ücretsiz Dene
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl text-lg font-bold border-2 border-white/30 hover:bg-white/20 transition-all"
              >
                Demo İste
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Summary */}
        <section className="py-16 bg-white border-b-2 border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Rakip Çözümler</h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span>Yüksek aylık ücretler ve başlangıç maliyeti</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span>Uzun kurulum süresi (saatler veya günler)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span>Sınırlı QR menü ve mobil özellikler</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span>Sınırlı entegrasyon seçenekleri</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span>Çalışma saatleri içinde destek</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl border-2 border-indigo-300">
                <div className="flex items-center gap-2 mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">Quick Order</h2>
                  <span className="px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded-full">
                    Önerilen
                  </span>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Düşük başlangıç maliyeti, 14 gün ücretsiz deneme</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>5-10 dakikada kurulum</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Gelişmiş QR menü, çoklu dil desteği</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Tam özellikli mobil uygulamalar, offline mod</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Geniş entegrasyon yelpazesi, REST API</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>7/24 destek, canlı destek</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Comparison */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Detaylı Karşılaştırma
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Özellik bazında detaylı karşılaştırma
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-6 font-bold text-gray-900">Özellik</th>
                    <th className="text-center py-4 px-6 font-bold text-gray-900">Rakip Çözümler</th>
                    <th className="text-center py-4 px-6 font-bold text-gray-900">Quick Order</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonPoints.map((point, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-6 font-semibold text-gray-900">{point.feature}</td>
                      <td className="py-4 px-6 text-center text-gray-600">{point.competitor}</td>
                      <td className="py-4 px-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-gray-700 font-medium">{point.yourbrand}</span>
                          {point.winner === "yourbrand" && (
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Neden Quick Order?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Rakip çözümlere karşı avantajlarımız
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Daha Uygun Fiyat</h3>
                <p className="text-gray-600">
                  Yüksek aylık ücretlere ve başlangıç maliyetlerine karşı, biz daha uygun fiyatlandırma ve 14 gün ücretsiz deneme sunuyoruz.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Daha Hızlı Kurulum</h3>
                <p className="text-gray-600">
                  5-10 dakikada kurulum. Uzun kurulum sürelerine karşı anında kullanıma hazır.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Gelişmiş QR Menü</h3>
                <p className="text-gray-600">
                  Temel QR menü özelliklerine karşı, biz çoklu dil, online sipariş entegrasyonu ve gelişmiş özellikler sunuyoruz.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Gelişmiş Raporlama</h3>
                <p className="text-gray-600">
                  Temel raporlara karşı, biz gerçek zamanlı analitik, müşteri analizi ve detaylı raporlama sunuyoruz.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">7/24 Destek</h3>
                <p className="text-gray-600">
                  Çalışma saatleri içinde desteğe karşı, biz 7/24 canlı destek sunuyoruz.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tam Bulut Tabanlı</h3>
                <p className="text-gray-600">
                  Kısmen bulut tabanlı çözümlere karşı, biz tamamen bulut tabanlı, sunucu gerektirmeyen bir sistem sunuyoruz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Quick Order&apos;u Ücretsiz Deneyin
            </h2>
            <p className="text-xl mb-8 opacity-95">
              14 gün ücretsiz deneme. Kredi kartı gerektirmez. Quick Order&apos;ın avantajlarını kendiniz görün.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="bg-white text-indigo-600 px-10 py-5 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
              >
                Ücretsiz Başla →
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

