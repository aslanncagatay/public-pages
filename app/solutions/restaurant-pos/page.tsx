import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Restoran POS Sistemi | Sipariş ve Kurye Yönetimi ile POS Yazılımı",
  description: "Sipariş ve kurye yönetimini kolaylaştıran restoran POS sistemi. Gelişmiş sipariş takibi, akıllı kurye yönetimi, QR menü, online sipariş ve rezervasyon sistemi. Restoran işletmenizi dijitalleştirin.",
  alternates: {
    canonical: "https://quickorder.com.tr/solutions/restaurant-pos",
  },
  openGraph: {
    title: "Restoran POS Sistemi | Sipariş ve Kurye Yönetimi ile POS Yazılımı",
    description: "Sipariş ve kurye yönetimini kolaylaştıran restoran POS sistemi. Gelişmiş sipariş takibi, akıllı kurye yönetimi, QR menü, online sipariş ve rezervasyon sistemi.",
    type: "website",
    locale: "tr_TR",
    url: "https://quickorder.com.tr/solutions/restaurant-pos",
  },
  twitter: {
    card: "summary_large_image",
    title: "Restoran POS Sistemi | Sipariş ve Kurye Yönetimi ile POS Yazılımı",
    description: "Sipariş ve kurye yönetimini kolaylaştıran restoran POS sistemi. Gelişmiş sipariş takibi, akıllı kurye yönetimi, QR menü, online sipariş ve rezervasyon sistemi.",
  },
};

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Restoran POS Sistemi",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, iOS, Android",
  offers: {
    "@type": "Offer",
    price: "299",
    priceCurrency: "TRY",
  },
  description: "Sipariş ve kurye yönetimini kolaylaştıran restoran POS sistemi. Gelişmiş sipariş takibi, akıllı kurye yönetimi, QR menü, online sipariş ve rezervasyon sistemi.",
  featureList: [
    "Gelişmiş Sipariş Yönetimi",
    "Akıllı Kurye Yönetimi",
    "Teslimat Takibi",
    "QR Menü Entegrasyonu",
    "Online Sipariş Sistemi",
    "Rezervasyon Sistemi",
    "Masa Yönetimi",
    "Mutfak Entegrasyonu",
    "Detaylı Raporlama",
  ],
};

export default function RestaurantPOSPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
                  🍽️ Tam Servis Restoranlar İçin
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                  Restoran POS Sistemi
                </h1>
                <p className="text-xl sm:text-2xl text-white/90 mb-4 font-medium">
                  Sipariş ve kurye yönetimini kolaylaştıran, QR menü, online sipariş, rezervasyon sistemi ve masa yönetimi ile restoran işletmenizi profesyonelleştirin.
                </p>
                <p className="text-lg text-white/80 mb-8">
                  Sipariş takibi, kurye yönetimi ve teslimat süreçlerini tek panelden yönetin. QR menü ile temassız sipariş, online sipariş sistemi ve otomatik rezervasyon yönetimi. Sipariş alma sürenizi %60 azaltın, müşteri memnuniyetini artırın.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/pricing"
                    className="bg-white text-indigo-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl text-center"
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
              <div className="hidden md:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="rounded-xl p-6 relative h-96 lg:h-[500px] overflow-hidden">
                    <Image
                      src="/web/create-order.png"
                      alt="Restoran POS Sistemi - Masa Yönetimi ve Floor Plan Görünümü"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                    />
                  </div>
                </div>
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
                  Restoran İşletmeciliğinde Karşılaştığınız Zorluklar
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Sipariş Yönetimi Karmaşası</h3>
                      <p className="text-gray-600">Gelen siparişleri takip etmek, durumlarını güncellemek ve teslimat süreçlerini yönetmek zorlaşıyor. Manuel takip hatalara yol açıyor.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Kurye Yönetimi Zorluğu</h3>
                      <p className="text-gray-600">Kurye atama, rota optimizasyonu ve teslimat takibi manuel yapılıyor. Kurye durumlarını anlık takip etmek mümkün olmuyor.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Teslimat Süreçleri</h3>
                      <p className="text-gray-600">Teslimat sürelerini tahmin etmek, müşterilere bilgi vermek ve gecikmeleri yönetmek zorlaşıyor. Müşteri şikayetleri artıyor.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Çoklu Platform Entegrasyonu</h3>
                      <p className="text-gray-600">Farklı sipariş platformlarından gelen siparişleri tek panelden yönetmek ve senkronize etmek karmaşık hale geliyor.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="hidden md:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="rounded-xl p-6 relative h-96 overflow-hidden">
                    <Image
                      src="/mobile/create-order.jpeg"
                      alt="Restoran POS - Sipariş ve Kurye Yönetimi, Mobil Sipariş Takibi"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
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
                Restoran POS Sistemi Özellikleri
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Sipariş ve kurye yönetimini kolaylaştıran, tam servis restoranlar için özel olarak tasarlanmış özellikler
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Gelişmiş Sipariş Yönetimi</h3>
                <p className="text-gray-600 leading-relaxed">
                  Tüm siparişleri tek panelden takip edin. Sipariş durumları, hazırlık süreleri ve teslimat bilgileri gerçek zamanlı güncellenir. Online, telefon ve masadan gelen siparişler tek ekranda.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Akıllı Kurye Yönetimi</h3>
                <p className="text-gray-600 leading-relaxed">
                  Kurye atama, rota optimizasyonu ve anlık takip. Kurye konumları, teslimat süreleri ve durumları gerçek zamanlı görüntülenir. Otomatik kurye atama ile verimlilik artar.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Mutfak Entegrasyonu</h3>
                <p className="text-gray-600 leading-relaxed">
                  Siparişler anında mutfak ekranına düşer. Hazırlık süreleri, özel notlar ve mutfak yazıcı entegrasyonu. Mutfak-ön yüz koordinasyonu sorunsuz.
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
                  Masa bazlı karlılık, saatlik satış analizi, en çok satan ürünler, müşteri davranış analizi. Karar destek raporları.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">QR Menü Entegrasyonu</h3>
                <p className="text-gray-600 leading-relaxed">
                  Müşteriler QR kod ile menüye erişsin, sipariş versin. Temassız deneyim, hızlı servis. <Link href="/qr-menu" className="text-indigo-600 hover:underline">QR Menü özellikleri</Link> hakkında daha fazla bilgi.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Online Sipariş Sistemi</h3>
                <p className="text-gray-600 leading-relaxed">
                  Kendi online sipariş sisteminiz. Delivery platformlarına bağımlı kalmadan müşterilerinizle doğrudan iletişim. Siparişler otomatik sisteme düşer, teslimat takibi yapılır. <Link href="/online-ordering" className="text-indigo-600 hover:underline">Online sipariş özellikleri</Link> hakkında daha fazla.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Rezervasyon Sistemi</h3>
                <p className="text-gray-600 leading-relaxed">
                  Online ve telefon rezervasyonlarını tek platformda yönetin. Müşteri geçmişi, tercihler ve özel notlar. Otomatik hatırlatma SMS&apos;leri. Masa durumları gerçek zamanlı güncellenir, no-show&apos;lar takip edilir.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Teslimat Takibi ve Bildirimleri</h3>
                <p className="text-gray-600 leading-relaxed">
                  Müşteriler siparişlerinin durumunu anlık takip edebilir. Kurye atandı, yolda, teslim edildi bildirimleri otomatik gönderilir. Müşteri memnuniyeti artar, şikayetler azalır.
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
                Restoran İşletmenize Sağladığı Faydalar
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Operasyonel verimlilikten müşteri memnuniyetine kadar
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sipariş Yönetimi %70 Kolaylaşır</h3>
                  <p className="text-gray-600">
                    Tüm siparişleri tek panelden yönetin. Online, telefon ve masadan gelen siparişler otomatik senkronize olur. Sipariş takibi ve durum güncellemeleri anlık yapılır.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Kurye Verimliliği %50 Artar</h3>
                  <p className="text-gray-600">
                    Otomatik kurye atama ve rota optimizasyonu ile teslimat süreleri kısalır. Kurye takibi ve anlık bildirimler ile operasyonel verimlilik maksimize edilir.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Teslimat Süreleri %40 Kısalır</h3>
                  <p className="text-gray-600">
                    Akıllı rota optimizasyonu ve otomatik kurye atama ile teslimat süreleri önemli ölçüde kısalır. Müşteriler daha hızlı siparişlerini alır.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Müşteri Şikayetleri %60 Azalır</h3>
                  <p className="text-gray-600">
                    Anlık sipariş takibi, kurye bildirimleri ve şeffaf teslimat süreçleri ile müşteri şikayetleri önemli ölçüde azalır. Müşteri memnuniyeti artar.
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
                Farklı restoran tipleri için uygun çözümler
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Fine Dining Restoranlar</h3>
                <p className="text-gray-600 mb-4">
                  Rezervasyon yönetimi, masa haritası, özel menü notları ve sommelier entegrasyonu ile lüks restoran deneyimi.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Rezervasyon yönetimi
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Masa haritası
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Özel menü notları
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Aile Restoranları</h3>
                <p className="text-gray-600 mb-4">
                  Hızlı servis, çocuk menüleri, aile paketleri ve sadakat programları ile aile dostu deneyim.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Hızlı sipariş alma
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Çocuk menü yönetimi
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Sadakat programı
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Et Restoranları</h3>
                <p className="text-gray-600 mb-4">
                  Pişirme tercihleri, et kesim seçenekleri, şarap eşleştirmeleri ve özel sipariş notları.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Pişirme tercihleri
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Özel sipariş notları
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Şarap eşleştirmeleri
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
              <Link href="/solutions/cafe-pos" className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all border-2 border-gray-200 hover:border-indigo-300">
                <h3 className="font-bold text-gray-900 mb-2">Kafe POS</h3>
                <p className="text-sm text-gray-600">Kahve dükkanları için</p>
              </Link>
              <Link href="/solutions/fast-food-pos" className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all border-2 border-gray-200 hover:border-indigo-300">
                <h3 className="font-bold text-gray-900 mb-2">Fast Food POS</h3>
                <p className="text-sm text-gray-600">Hızlı servis için</p>
              </Link>
              <Link href="/solutions/bar-pos" className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all border-2 border-gray-200 hover:border-indigo-300">
                <h3 className="font-bold text-gray-900 mb-2">Bar POS</h3>
                <p className="text-sm text-gray-600">Barlar için</p>
              </Link>
              <Link href="/solutions/hotel-pos" className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all border-2 border-gray-200 hover:border-indigo-300">
                <h3 className="font-bold text-gray-900 mb-2">Otel POS</h3>
                <p className="text-sm text-gray-600">Oteller için</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Restoran İşletmenizi Dijitalleştirin
            </h2>
            <p className="text-xl mb-10 opacity-95">
              14 gün ücretsiz deneme ile başlayın. Kredi kartı gerektirmez.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="bg-white text-indigo-600 px-10 py-5 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
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

