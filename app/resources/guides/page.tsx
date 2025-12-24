import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "POS Sistemi Rehberleri | Kullanım Kılavuzları ve İpuçları | YourBrand POS",
  description: "POS sistemi kullanım rehberleri, kılavuzlar ve ipuçları. Kurulum, özellikler, raporlama ve daha fazlası hakkında detaylı rehberler.",
  alternates: {
    canonical: "https://yourbrand.com/resources/guides",
  },
  openGraph: {
    title: "POS Sistemi Rehberleri | Kullanım Kılavuzları ve İpuçları",
    description: "POS sistemi kullanım rehberleri, kılavuzlar ve ipuçları. Kurulum, özellikler ve raporlama hakkında detaylı rehberler.",
    type: "website",
    locale: "tr_TR",
    url: "https://yourbrand.com/resources/guides",
  },
  twitter: {
    card: "summary_large_image",
    title: "POS Sistemi Rehberleri | Kullanım Kılavuzları ve İpuçları",
    description: "POS sistemi kullanım rehberleri, kılavuzlar ve ipuçları.",
  },
};

export default function Guides() {
  const guides = [
    {
      title: "POS Sistemine Başlangıç Rehberi",
      description: "POS sisteminizi kurmak ve kullanmaya başlamak için adım adım rehber. İlk kurulum, menü ekleme ve temel özellikler.",
      category: "Başlangıç",
      readTime: "10 dakika",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Menü Yönetimi ve Ürün Ekleme",
      description: "Menülerinizi nasıl oluşturacağınız, ürün ekleyeceğiniz ve kategorilere ayıracağınız hakkında detaylı rehber.",
      category: "Menü Yönetimi",
      readTime: "15 dakika",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: "Stok Takibi ve Envanter Yönetimi",
      description: "Stok takibini nasıl yapacağınız, envanter raporlarını nasıl okuyacağınız ve otomatik uyarıları nasıl ayarlayacağınız.",
      category: "Stok Yönetimi",
      readTime: "12 dakika",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      title: "Raporlama ve Analitik Kullanımı",
      description: "Satış raporlarını nasıl okuyacağınız, analitikleri nasıl kullanacağınız ve veriye dayalı kararlar nasıl alacağınız.",
      category: "Raporlama",
      readTime: "18 dakika",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: "QR Menü Oluşturma ve Kullanımı",
      description: "QR menünüzü nasıl oluşturacağınız, QR kodlarınızı nasıl basacağınız ve müşterilerinize nasıl sunacağınız.",
      category: "QR Menü",
      readTime: "10 dakika",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Online Sipariş Sistemi Kurulumu",
      description: "Kendi online sipariş sisteminizi nasıl kuracağınız, teslimat ayarlarını nasıl yapacağınız ve müşterilerinize nasıl sunacağınız.",
      category: "Online Sipariş",
      readTime: "20 dakika",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Personel Yönetimi ve Yetkilendirme",
      description: "Personel hesapları nasıl oluşturulur, yetkilendirmeler nasıl yapılır ve personel performansı nasıl takip edilir.",
      category: "Personel",
      readTime: "15 dakika",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: "Kampanya ve İndirim Yönetimi",
      description: "Kampanyalar nasıl oluşturulur, indirim kuponları nasıl yapılır ve özel günler için nasıl kampanya düzenlenir.",
      category: "Kampanyalar",
      readTime: "12 dakika",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Entegrasyonlar ve API Kullanımı",
      description: "Muhasebe, e-ticaret ve delivery platform entegrasyonları nasıl yapılır. REST API nasıl kullanılır.",
      category: "Entegrasyonlar",
      readTime: "25 dakika",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            POS Sistemi Rehberleri
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            POS sisteminizi en iyi şekilde kullanmak için kapsamlı rehberler, kılavuzlar ve ipuçları
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="bg-white text-indigo-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
            >
              Ücretsiz Dene
            </Link>
            <Link
              href="/resources/faq"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl text-lg font-bold border-2 border-white/30 hover:bg-white/20 transition-all"
            >
              SSS
            </Link>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Tüm Rehberler
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              POS sisteminizi en iyi şekilde kullanmak için ihtiyacınız olan tüm rehberler
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <Link
                key={index}
                href="#"
                className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border-2 border-gray-200 hover:border-indigo-300 transition-all shadow-lg hover:shadow-2xl"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                  {guide.icon}
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-600 text-sm font-semibold rounded-full">
                    {guide.category}
                  </span>
                  <span className="text-sm text-gray-500">{guide.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">{guide.description}</p>
                <span className="text-indigo-600 font-semibold inline-flex items-center group-hover:translate-x-2 transition-transform">
                  Rehberi Oku →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tutorials CTA */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Video Eğitimler
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Görsel öğrenmeyi tercih ediyorsanız, video eğitimlerimizi izleyebilirsiniz. Adım adım görsel anlatımlar.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-indigo-600 text-white px-10 py-5 rounded-xl text-lg font-bold hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-2xl"
          >
            Video Eğitimlere Eriş
          </Link>
        </div>
      </section>
    </main>
  );
}

