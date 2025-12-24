import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Adisyo vs YourBrand POS | Karşılaştırma ve Fiyat Analizi 2024",
  description: "Adisyo ve YourBrand POS karşılaştırması. Fiyat, özellikler, kullanım kolaylığı ve müşteri desteği açısından detaylı karşılaştırma. Hangisi daha iyi?",
  alternates: {
    canonical: "https://yourbrand.com/resources/comparisons/adisyo-vs-yourbrand",
  },
  openGraph: {
    title: "Adisyo vs YourBrand POS | Karşılaştırma ve Fiyat Analizi",
    description: "Adisyo ve YourBrand POS karşılaştırması. Fiyat, özellikler ve kullanım kolaylığı açısından detaylı karşılaştırma.",
    type: "article",
    locale: "tr_TR",
    url: "https://yourbrand.com/resources/comparisons/adisyo-vs-yourbrand",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adisyo vs YourBrand POS | Karşılaştırma ve Fiyat Analizi",
    description: "Adisyo ve YourBrand POS karşılaştırması. Hangisi daha iyi?",
  },
};

const comparisonSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Adisyo vs YourBrand POS Karşılaştırması",
  description: "Adisyo ve YourBrand POS sistemlerinin detaylı karşılaştırması. Fiyat, özellikler ve kullanım kolaylığı analizi.",
  author: {
    "@type": "Organization",
    name: "YourBrand POS",
  },
  datePublished: "2024-01-01",
  dateModified: "2024-01-01",
};

export default function AdisyoVsYourBrand() {
  const comparisonPoints = [
    {
      feature: "Fiyatlandırma",
      adisyo: "Yüksek başlangıç maliyeti, aylık lisans ücretleri",
      yourbrand: "Düşük başlangıç maliyeti, esnek fiyatlandırma, 14 gün ücretsiz deneme",
      winner: "yourbrand",
    },
    {
      feature: "Kurulum Süresi",
      adisyo: "1-2 gün, teknik destek gerektirir",
      yourbrand: "5-10 dakika, kendi kendine kurulum",
      winner: "yourbrand",
    },
    {
      feature: "Bulut Tabanlı",
      adisyo: "Kısmen, bazı özellikler için sunucu gerekli",
      yourbrand: "Tamamen bulut tabanlı, sunucu gerektirmez",
      winner: "yourbrand",
    },
    {
      feature: "Mobil Uygulama",
      adisyo: "Sınırlı mobil özellikler",
      yourbrand: "Tam özellikli iOS ve Android uygulamaları",
      winner: "yourbrand",
    },
    {
      feature: "QR Menü",
      adisyo: "Ek ücret ile mevcut",
      yourbrand: "Dahil, ücretsiz",
      winner: "yourbrand",
    },
    {
      feature: "Online Sipariş",
      adisyo: "Sınırlı özellikler",
      yourbrand: "Tam özellikli online sipariş sistemi",
      winner: "yourbrand",
    },
    {
      feature: "Raporlama",
      adisyo: "Temel raporlar",
      yourbrand: "Gelişmiş analitik ve gerçek zamanlı raporlar",
      winner: "yourbrand",
    },
    {
      feature: "Müşteri Desteği",
      adisyo: "Çalışma saatleri içinde destek",
      yourbrand: "7/24 destek, canlı destek, e-posta, telefon",
      winner: "yourbrand",
    },
    {
      feature: "Güncellemeler",
      adisyo: "Manuel güncellemeler gerekebilir",
      yourbrand: "Otomatik güncellemeler, kesintisiz",
      winner: "yourbrand",
    },
    {
      feature: "Entegrasyonlar",
      adisyo: "Sınırlı entegrasyon seçenekleri",
      yourbrand: "Geniş entegrasyon yelpazesi, REST API",
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
              Adisyo vs YourBrand POS
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Adisyo</h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span>Yüksek başlangıç maliyeti</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span>Uzun kurulum süresi</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span>Sınırlı mobil özellikler</span>
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
                  <h2 className="text-2xl font-bold text-gray-900">YourBrand POS</h2>
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
                    <span>Tam özellikli mobil uygulamalar</span>
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
                    <th className="text-center py-4 px-6 font-bold text-gray-900">Adisyo</th>
                    <th className="text-center py-4 px-6 font-bold text-gray-900">YourBrand POS</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonPoints.map((point, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-6 font-semibold text-gray-900">{point.feature}</td>
                      <td className="py-4 px-6 text-center text-gray-600">{point.adisyo}</td>
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
                Neden YourBrand POS?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Adisyo&apos;dan daha iyi olmamızın nedenleri
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
                  Düşük başlangıç maliyeti, esnek fiyatlandırma ve 14 gün ücretsiz deneme. Adisyo&apos;dan daha ekonomik.
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
                  5-10 dakikada kurulum. Adisyo&apos;nun 1-2 günlük kurulum süresine karşı anında kullanıma hazır.
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
                  Adisyo&apos;nun çalışma saatleri içinde desteğine karşı, biz 7/24 canlı destek sunuyoruz.
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
              YourBrand POS&apos;u Ücretsiz Deneyin
            </h2>
            <p className="text-xl mb-8 opacity-95">
              14 gün ücretsiz deneme. Kredi kartı gerektirmez. Adisyo&apos;dan daha iyi olduğumuzu kendiniz görün.
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

