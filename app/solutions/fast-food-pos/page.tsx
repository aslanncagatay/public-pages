import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Fast Food POS Sistemi | Hızlı Servis Restoranları İçin POS",
  description: "Hızlı servis restoranları için optimize edilmiş POS sistemi. Drive-thru desteği, hızlı sipariş alma, paket servis ve detaylı raporlama. Fast food işletmenizi büyütün.",
  alternates: {
    canonical: "https://quickorder.com.tr/solutions/fast-food-pos",
  },
  openGraph: {
    title: "Fast Food POS Sistemi | Hızlı Servis Restoranları İçin POS",
    description: "Hızlı servis restoranları için optimize edilmiş POS sistemi. Drive-thru desteği ve hızlı sipariş alma.",
    type: "website",
    locale: "tr_TR",
    url: "https://quickorder.com.tr/solutions/fast-food-pos",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fast Food POS Sistemi | Hızlı Servis Restoranları İçin POS",
    description: "Hızlı servis restoranları için optimize edilmiş POS sistemi. Drive-thru desteği ve hızlı sipariş alma.",
  },
};

const fastFoodSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Fast Food POS Sistemi",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, iOS, Android",
  offers: {
    "@type": "Offer",
    price: "299",
    priceCurrency: "TRY",
  },
  description: "Hızlı servis restoranları için optimize edilmiş POS sistemi. Drive-thru desteği ve hızlı sipariş alma.",
  featureList: [
    "Drive-Thru Desteği",
    "Hızlı Sipariş Alma",
    "Paket Servis Yönetimi",
    "Online Sipariş",
    "Stok Takibi",
    "Detaylı Raporlama",
  ],
};

export default function FastFoodPOSPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fastFoodSchema) }}
      />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-red-600 via-orange-600 to-yellow-600 overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
                  🍔 Hızlı Servis Restoranları İçin
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                  Fast Food POS Sistemi
                </h1>
                <p className="text-xl sm:text-2xl text-white/90 mb-4 font-medium">
                  Drive-thru desteği, hızlı sipariş alma ve paket servis yönetimi ile fast food işletmenizi optimize edin.
                </p>
                <p className="text-lg text-white/80 mb-8">
                  Sipariş hazırlama sürenizi kısaltın, müşteri bekleme süresini azaltın ve operasyonel verimliliğinizi maksimize edin.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/pricing"
                    className="bg-white text-red-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl text-center"
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
                      src="/web/orders.png"
                      alt="Fast Food POS Sistemi - Drive-Thru ve Hızlı Sipariş Yönetimi Ekranı"
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
                  Fast Food İşletmeciliğinde Karşılaştığınız Zorluklar
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Yoğun Saatlerde Kuyruk Yönetimi</h3>
                      <p className="text-gray-600">Öğle ve akşam saatlerinde kuyruk oluşuyor, sipariş alma ve hazırlama süreleri uzuyor.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Drive-Thru Koordinasyonu</h3>
                      <p className="text-gray-600">Drive-thru ve iç mekan siparişlerini koordine etmek, hazırlık sürelerini optimize etmek zorlaşıyor.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Paket Servis Yönetimi</h3>
                      <p className="text-gray-600">Paket servis siparişlerini takip etmek, teslimat sürelerini yönetmek ve müşteri iletişimini sağlamak karmaşık.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Menü Özelleştirmeleri</h3>
                      <p className="text-gray-600">Ekstra malzemeler, sos seçenekleri ve özel isteklerin takibi ve fiyatlandırması zorlaşıyor.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="hidden md:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="rounded-xl p-6 relative h-96 overflow-hidden">
                    <Image
                      src="/mobile/orders.jpeg"
                      alt="Fast Food POS - Mobil Sipariş Yönetimi, Drive-Thru ve Paket Servis"
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
                Fast Food POS Sistemi Özellikleri
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Hızlı servis restoranları için özel olarak tasarlanmış özellikler
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Drive-Thru Desteği</h3>
                <p className="text-gray-600 leading-relaxed">
                  Drive-thru ve iç mekan siparişlerini aynı ekrandan yönetin. Sipariş önceliklendirme, hazırlık süresi takibi ve otomatik bildirimler.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hızlı Sipariş Alma</h3>
                <p className="text-gray-600 leading-relaxed">
                  Popüler menüler tek tıkla, özelleştirmeler kolayca eklenir. Sipariş alma süresi 30 saniyenin altına iner.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Paket Servis Yönetimi</h3>
                <p className="text-gray-600 leading-relaxed">
                  Paket servis siparişlerini takip edin, teslimat sürelerini yönetin. <Link href="/online-ordering" className="text-red-600 hover:underline">Online sipariş sistemi</Link> ile entegre çalışır.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Menü Özelleştirmeleri</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ekstra malzemeler, sos seçenekleri, boyut seçenekleri. Her özelleştirme otomatik fiyatlandırılır, stoktan düşülür.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hazırlık Süresi Takibi</h3>
                <p className="text-gray-600 leading-relaxed">
                  Her sipariş için tahmini hazırlık süresi gösterilir. Müşteri bekleme süreleri minimize edilir, operasyonel verimlilik artar.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Gerçek Zamanlı Raporlama</h3>
                <p className="text-gray-600 leading-relaxed">
                  Saatlik satış analizi, en çok satan ürünler, ortalama sipariş değeri. Karar destek raporları ile işletmenizi optimize edin.
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
                Fast Food İşletmenize Sağladığı Faydalar
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">%40 Daha Hızlı Sipariş Hazırlama</h3>
                  <p className="text-gray-600">
                    Optimize edilmiş iş akışları ve mutfak entegrasyonu ile sipariş hazırlama süreniz %40 azalır.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">%35 Daha Fazla Günlük Sipariş</h3>
                  <p className="text-gray-600">
                    Hızlı sipariş alma ve hazırlama ile aynı sürede %35 daha fazla sipariş işleyebilirsiniz.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Müşteri Bekleme Süresi %50 Azalır</h3>
                  <p className="text-gray-600">
                    Optimize edilmiş sipariş akışı ve hazırlık süresi takibi ile müşteri bekleme süreleri yarıya iner.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Drive-Thru Verimliliği Artışı</h3>
                  <p className="text-gray-600">
                    Drive-thru ve iç mekan siparişlerini koordine ederek her iki kanalın verimliliğini maksimize edin.
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
                Farklı fast food tipleri için uygun çözümler
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Hamburger Zincirleri</h3>
                <p className="text-gray-600 mb-4">
                  Drive-thru ve iç mekan sipariş yönetimi, menü özelleştirmeleri ve hızlı hazırlama süreçleri.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Drive-thru optimizasyonu
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Menü özelleştirmeleri
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Hızlı hazırlama takibi
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pizza Restoranları</h3>
                <p className="text-gray-600 mb-4">
                  Online sipariş entegrasyonu, paket servis yönetimi ve teslimat takibi.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Online sipariş yönetimi
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Teslimat takibi
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Paket servis optimizasyonu
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Döner & Kebap Dükkanları</h3>
                <p className="text-gray-600 mb-4">
                  Hızlı sipariş alma, menü varyasyonları ve paket servis yönetimi.
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
                    Menü varyasyonları
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Paket servis yönetimi
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
              <Link href="/solutions/restaurant-pos" className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all border-2 border-gray-200 hover:border-red-300">
                <h3 className="font-bold text-gray-900 mb-2">Restoran POS</h3>
                <p className="text-sm text-gray-600">Tam servis restoranlar için</p>
              </Link>
              <Link href="/solutions/cafe-pos" className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all border-2 border-gray-200 hover:border-red-300">
                <h3 className="font-bold text-gray-900 mb-2">Kafe POS</h3>
                <p className="text-sm text-gray-600">Kahve dükkanları için</p>
              </Link>
              <Link href="/solutions/bar-pos" className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all border-2 border-gray-200 hover:border-red-300">
                <h3 className="font-bold text-gray-900 mb-2">Bar POS</h3>
                <p className="text-sm text-gray-600">Barlar için</p>
              </Link>
              <Link href="/solutions/hotel-pos" className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all border-2 border-gray-200 hover:border-red-300">
                <h3 className="font-bold text-gray-900 mb-2">Otel POS</h3>
                <p className="text-sm text-gray-600">Oteller için</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Fast Food İşletmenizi Dijitalleştirin
            </h2>
            <p className="text-xl mb-10 opacity-95">
              14 gün ücretsiz deneme ile başlayın. Kredi kartı gerektirmez.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="bg-white text-red-600 px-10 py-5 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
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

