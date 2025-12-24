import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Restoran POS Sistemi | Bulut Tabanlı Kafe POS Yazılımı",
  description: "Restoran, kafe, fast food ve bar işletmeleri için bulut tabanlı POS sistemi. QR menü, online sipariş ve paket servis özellikleriyle işletmenizi dijitalleştirin.",
  alternates: {
    canonical: "https://yourbrand.com",
  },
  openGraph: {
    title: "Restoran POS Sistemi | Bulut Tabanlı Kafe POS Yazılımı",
    description: "Restoran, kafe, fast food ve bar işletmeleri için bulut tabanlı POS sistemi. QR menü, online sipariş ve paket servis özellikleriyle işletmenizi dijitalleştirin.",
    type: "website",
    locale: "tr_TR",
    url: "https://yourbrand.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Restoran POS Sistemi | Bulut Tabanlı Kafe POS Yazılımı",
    description: "Restoran, kafe, fast food ve bar işletmeleri için bulut tabanlı POS sistemi.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "YourBrand POS",
  url: "https://yourbrand.com",
  logo: "https://yourbrand.com/logo.png",
  description: "Restoran, kafe ve bar işletmeleri için bulut tabanlı POS sistemi",
  sameAs: [
    "https://www.facebook.com/yourbrand",
    "https://www.twitter.com/yourbrand",
    "https://www.linkedin.com/company/yourbrand",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+90-XXX-XXX-XXXX",
    contactType: "Müşteri Hizmetleri",
    areaServed: "TR",
    availableLanguage: "Turkish",
  },
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "YourBrand POS",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, iOS, Android",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "TRY",
    description: "Ücretsiz deneme sürümü mevcuttur",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "1250",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />

      <main>
        {/* Hero Section - Enhanced */}
        <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="text-center">
              <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
                🚀 14 Gün Ücretsiz Deneme - Kredi Kartı Gerektirmez
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
                Restoran İşletmenizi
                <span className="block mt-3 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                  Dijitalleştirin
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 mb-4 max-w-3xl mx-auto font-medium">
                Bulut tabanlı POS sistemi ile siparişlerinizi hızlandırın, satışlarınızı artırın
              </p>
              <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
                QR menü, online sipariş, paket servis ve detaylı raporlama. Adisyo ve Menulux&apos;tan daha güçlü, daha hızlı, daha ekonomik.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
              <div className="flex items-center justify-center gap-8 text-white/90 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Kredi Kartı Gerektirmez</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>5 Dakikada Kurulum</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>7/24 Destek</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators - Enhanced */}
        <section className="py-16 bg-white border-b-2 border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-extrabold text-indigo-600 mb-2">10,000+</div>
                <div className="text-gray-600 font-medium">Aktif İşletme</div>
                <div className="text-sm text-gray-500 mt-1">Türkiye genelinde</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-indigo-600 mb-2">4.8/5</div>
                <div className="text-gray-600 font-medium">Müşteri Memnuniyeti</div>
                <div className="text-sm text-gray-500 mt-1">1,250+ değerlendirme</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-indigo-600 mb-2">99.9%</div>
                <div className="text-gray-600 font-medium">Uptime Garantisi</div>
                <div className="text-sm text-gray-500 mt-1">Kesintisiz hizmet</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-indigo-600 mb-2">7/24</div>
                <div className="text-gray-600 font-medium">Destek Hizmeti</div>
                <div className="text-sm text-gray-500 mt-1">Anında yanıt</div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Nasıl Çalışır?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                3 basit adımda işletmenizi dijitalleştirin
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-indigo-600">1</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Hesap Oluştur</h3>
                <p className="text-gray-600 text-lg">
                  E-posta adresinizle ücretsiz hesap oluşturun. Kredi kartı bilgisi gerektirmez.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-indigo-600">2</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Menünüzü Ekleyin</h3>
                <p className="text-gray-600 text-lg">
                  Ürünlerinizi ve fiyatlarınızı ekleyin. Fotoğraflar, kategoriler ve özellikler.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-indigo-600">3</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sipariş Almaya Başlayın</h3>
                <p className="text-gray-600 text-lg">
                  Tablet, telefon veya bilgisayardan sipariş almaya hemen başlayın.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Grid - Enhanced */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Her İşletme Tipi İçin Özel Çözümler
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Sektörünüze özel özellikler ve iş akışlarıyla işletmenizi büyütün
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link
                href="/solutions/restaurant-pos"
                className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl hover:shadow-2xl transition-all border-2 border-gray-200 hover:border-indigo-300"
              >
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                  <svg className="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Restoran POS</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Tam servis restoranlar için gelişmiş masa yönetimi, rezervasyon sistemi ve mutfak entegrasyonu.
                </p>
                <span className="text-indigo-600 font-semibold inline-flex items-center group-hover:translate-x-2 transition-transform">
                  Detayları Gör →
                </span>
              </Link>

              <Link
                href="/solutions/cafe-pos"
                className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl hover:shadow-2xl transition-all border-2 border-gray-200 hover:border-indigo-300"
              >
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                  <svg className="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Kafe POS</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Kahve dükkanları için hızlı sipariş alma, stok takibi ve müşteri sadakat programı.
                </p>
                <span className="text-indigo-600 font-semibold inline-flex items-center group-hover:translate-x-2 transition-transform">
                  Detayları Gör →
                </span>
              </Link>

              <Link
                href="/solutions/fast-food-pos"
                className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl hover:shadow-2xl transition-all border-2 border-gray-200 hover:border-indigo-300"
              >
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                  <svg className="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Fast Food POS</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Hızlı servis restoranları için optimize edilmiş sipariş yönetimi ve drive-thru desteği.
                </p>
                <span className="text-indigo-600 font-semibold inline-flex items-center group-hover:translate-x-2 transition-transform">
                  Detayları Gör →
                </span>
              </Link>

              <Link
                href="/solutions/bar-pos"
                className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl hover:shadow-2xl transition-all border-2 border-gray-200 hover:border-indigo-300"
              >
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                  <svg className="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Bar POS</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Barlar ve gece kulüpleri için özel stok yönetimi, komisyon takibi ve gece raporları.
                </p>
                <span className="text-indigo-600 font-semibold inline-flex items-center group-hover:translate-x-2 transition-transform">
                  Detayları Gör →
                </span>
              </Link>

              <Link
                href="/solutions/hotel-pos"
                className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl hover:shadow-2xl transition-all border-2 border-gray-200 hover:border-indigo-300"
              >
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                  <svg className="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Otel POS</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Oteller için oda servisi, spa ve restoran entegrasyonu ile kapsamlı yönetim.
                </p>
                <span className="text-indigo-600 font-semibold inline-flex items-center group-hover:translate-x-2 transition-transform">
                  Detayları Gör →
                </span>
              </Link>

              <Link
                href="/qr-menu"
                className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl hover:shadow-2xl transition-all border-2 border-gray-200 hover:border-indigo-300"
              >
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                  <svg className="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">QR Menü</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Temassız menü deneyimi. Müşterileriniz QR kod ile menünüze anında erişsin.
                </p>
                <span className="text-indigo-600 font-semibold inline-flex items-center group-hover:translate-x-2 transition-transform">
                  Detayları Gör →
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Key Features - Enhanced */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Neden Bizi Seçmelisiniz?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                İşletmenizi büyüten özellikler ve avantajlar
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bulut Tabanlı Sistem</h3>
                <p className="text-gray-600 leading-relaxed">
                  Her yerden erişim, otomatik yedekleme ve güvenli veri saklama. Sunucu kurulumu gerektirmez.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Mobil Uyumlu</h3>
                <p className="text-gray-600 leading-relaxed">
                  iOS ve Android uygulamaları ile siparişleri her yerden yönetin. Tablet ve telefon desteği.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Detaylı Raporlama</h3>
                <p className="text-gray-600 leading-relaxed">
                  Satış, stok, müşteri ve personel raporları. Gerçek zamanlı analitik ve karar destek araçları.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Güvenli Ödeme</h3>
                <p className="text-gray-600 leading-relaxed">
                  PCI-DSS uyumlu ödeme işleme. Nakit, kredi kartı, mobil ödeme ve dijital cüzdan desteği.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hızlı Kurulum</h3>
                <p className="text-gray-600 leading-relaxed">
                  5 dakikada kurulum, anında kullanıma hazır. Eğitim ve destek dahil. Karmaşık yapılandırma yok.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Entegrasyonlar</h3>
                <p className="text-gray-600 leading-relaxed">
                  Muhasebe, e-ticaret, delivery platformları ve daha fazlası. API desteği ile özel entegrasyonlar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Müşterilerimiz Ne Diyor?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                10,000+ işletme bizi tercih ediyor
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-100 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  &quot;Sipariş alma süremiz %60 azaldı. Müşterilerimiz çok memnun, biz de çok memnunuz. Özellikle QR menü özelliği harika!&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-indigo-600 font-bold text-lg">AK</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Ahmet Kaya</div>
                    <div className="text-sm text-gray-600">Restoran Sahibi, İstanbul</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-100 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  &quot;Kurulum 5 dakika sürdü, gerçekten! Raporlama özellikleri sayesinde işletmemizi çok daha iyi yönetiyoruz.&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-indigo-600 font-bold text-lg">MŞ</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Mehmet Şahin</div>
                    <div className="text-sm text-gray-600">Kafe Sahibi, Ankara</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-100 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  &quot;Online sipariş özelliği sayesinde delivery platformlarına bağımlı kalmıyoruz. Müşterilerimizle doğrudan iletişim kuruyoruz.&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-indigo-600 font-bold text-lg">AY</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Ayşe Yılmaz</div>
                    <div className="text-sm text-gray-600">Fast Food Sahibi, İzmir</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Online Ordering CTA - Enhanced */}
        <section className="py-24 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Online Sipariş ve Paket Servis
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
              Kendi online sipariş sisteminizi oluşturun. Delivery platformlarına bağımlı kalmadan müşterilerinizle doğrudan iletişim kurun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/online-ordering"
                className="bg-white text-indigo-600 px-10 py-5 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
              >
                Online Sipariş Özellikleri
              </Link>
              <Link
                href="/pricing"
                className="bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-xl text-lg font-bold border-2 border-white/30 hover:bg-white/20 transition-all"
              >
                Fiyatları Gör
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section - Enhanced */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Sıkça Sorulan Sorular
              </h2>
              <p className="text-xl text-gray-600">
                POS sistemi hakkında merak ettikleriniz
              </p>
            </div>
            <div className="space-y-4">
              <details className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-indigo-300 transition-colors shadow-sm">
                <summary className="text-xl font-semibold text-gray-900 cursor-pointer list-none">
                  <div className="flex items-center justify-between">
                    <span>POS sistemi nedir ve nasıl çalışır?</span>
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  POS (Point of Sale) sistemi, işletmenizde satış işlemlerini yönetmenizi sağlayan yazılımdır. Sipariş alma, ödeme işleme, stok takibi ve raporlama gibi tüm işlemleri tek bir platformda toplar. Bulut tabanlı sistemimiz sayesinde internet bağlantısı olan her yerden erişebilirsiniz.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-indigo-300 transition-colors shadow-sm">
                <summary className="text-xl font-semibold text-gray-900 cursor-pointer list-none">
                  <div className="flex items-center justify-between">
                    <span>Kurulum ne kadar sürer?</span>
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Kurulum süreci ortalama 5-10 dakika sürer. Hesabınızı oluşturduktan sonra menülerinizi ekleyebilir, personel hesaplarınızı açabilir ve hemen kullanmaya başlayabilirsiniz. Ücretsiz eğitim ve destek hizmetimiz mevcuttur.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-indigo-300 transition-colors shadow-sm">
                <summary className="text-xl font-semibold text-gray-900 cursor-pointer list-none">
                  <div className="flex items-center justify-between">
                    <span>Hangi ödeme yöntemlerini destekliyorsunuz?</span>
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Nakit, kredi kartı, banka kartı, mobil ödeme (Apple Pay, Google Pay) ve dijital cüzdanlar dahil tüm ödeme yöntemlerini destekliyoruz. PCI-DSS uyumlu güvenli ödeme altyapımız ile müşteri bilgileriniz korunur.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-indigo-300 transition-colors shadow-sm">
                <summary className="text-xl font-semibold text-gray-900 cursor-pointer list-none">
                  <div className="flex items-center justify-between">
                    <span>Verilerim güvende mi?</span>
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Evet. Verileriniz şifrelenmiş bulut sunucularında saklanır ve düzenli olarak yedeklenir. SSL sertifikası, iki faktörlü kimlik doğrulama ve rol tabanlı erişim kontrolü ile veri güvenliğiniz sağlanır. KVKK uyumluyuz.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-indigo-300 transition-colors shadow-sm">
                <summary className="text-xl font-semibold text-gray-900 cursor-pointer list-none">
                  <div className="flex items-center justify-between">
                    <span>Ücretsiz deneme var mı?</span>
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Evet, 14 gün ücretsiz deneme süremiz var. Kredi kartı bilgisi istemiyoruz. Deneme süresince tüm özellikleri kullanabilir, işletmenize uygun olup olmadığını test edebilirsiniz.
                </p>
              </details>
            </div>
            <div className="text-center mt-12">
              <Link
                href="/resources/faq"
                className="inline-flex items-center text-indigo-600 font-semibold text-lg hover:underline"
              >
                Tüm SSS&apos;leri Gör
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA - Enhanced */}
        <section className="py-24 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              İşletmenizi Dijitalleştirmeye Hazır mısınız?
            </h2>
            <p className="text-xl mb-10 opacity-95">
              10,000+ işletme bizi tercih ediyor. Siz de aramıza katılın.
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
                İletişime Geç
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
