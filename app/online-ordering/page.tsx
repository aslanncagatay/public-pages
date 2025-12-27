import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Online Sipariş Sistemi | Paket Servis ve Teslimat Yazılımı",
  description: "Kendi online sipariş sisteminizi oluşturun. Delivery platformlarına bağımlı kalmadan müşterilerinizle doğrudan iletişim kurun. Paket servis, teslimat ve ödeme entegrasyonu.",
  alternates: {
    canonical: "https://quickorder.com.tr/online-ordering",
  },
  openGraph: {
    title: "Online Sipariş Sistemi | Paket Servis ve Teslimat Yazılımı",
    description: "Kendi online sipariş sisteminizi oluşturun. Delivery platformlarına bağımlı kalmadan müşterilerinizle doğrudan iletişim kurun.",
    type: "website",
    locale: "tr_TR",
    url: "https://quickorder.com.tr/online-ordering",
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Sipariş Sistemi | Paket Servis ve Teslimat Yazılımı",
    description: "Kendi online sipariş sisteminizi oluşturun. Delivery platformlarına bağımlı kalmadan müşterilerinizle doğrudan iletişim kurun.",
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Online Sipariş Sistemi",
  description: "Kendi online sipariş sisteminiz. Paket servis, teslimat ve ödeme entegrasyonu ile delivery platformlarına bağımlı kalmadan müşterilerinizle doğrudan iletişim kurun.",
  brand: {
    "@type": "Brand",
    name: "Quick Order",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "TRY",
    description: "Ücretsiz deneme sürümü mevcuttur",
  },
};

export default function OnlineOrdering() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
                  🚀 Delivery Platformlarına Bağımlı Kalmayın
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
                  Kendi Online
                  <span className="block mt-3 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                    Sipariş Sisteminiz
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-white/90 mb-4 font-medium">
                  Delivery platformlarına bağımlı kalmadan müşterilerinizle doğrudan iletişim kurun. Komisyon ödemeyin, markanızı güçlendirin.
                </p>
                <p className="text-lg text-white/80 mb-8">
                  Paket servis, teslimat ve ödeme entegrasyonu ile kapsamlı online sipariş çözümü.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
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
              <div className="hidden lg:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="rounded-xl p-6 relative h-96 lg:h-[500px] overflow-hidden">
                    <Image
                      src="/customer-mobile/restaurant-list.jpeg"
                      alt="Online Sipariş Sistemi - Müşteri Mobil Uygulaması Restoran Listesi Görünümü"
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

        {/* Benefits */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Online Sipariş Sisteminin Avantajları
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                İşletmenize değer katan özellikler
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200 hover:border-indigo-300 transition-all shadow-lg hover:shadow-2xl">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Komisyon Ödemeyin</h3>
                <p className="text-gray-600 leading-relaxed">
                  Delivery platformlarının yüksek komisyon oranlarından kurtulun. Tüm kâr sizde kalsın.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200 hover:border-indigo-300 transition-all shadow-lg hover:shadow-2xl">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Müşteri Verileriniz Sizde</h3>
                <p className="text-gray-600 leading-relaxed">
                  Müşteri bilgileri, sipariş geçmişi ve tercihleri sizde kalır. Pazarlama kampanyaları için kullanın.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200 hover:border-indigo-300 transition-all shadow-lg hover:shadow-2xl">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Markanızı Güçlendirin</h3>
                <p className="text-gray-600 leading-relaxed">
                  Kendi markanızla online sipariş alın. Logo, renkler ve tasarım tamamen size özel.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200 hover:border-indigo-300 transition-all shadow-lg hover:shadow-2xl">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Hızlı Entegrasyon</h3>
                <p className="text-gray-600 leading-relaxed">
                  Mevcut POS sisteminizle entegre. Siparişler otomatik olarak POS sisteminize aktarılır.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200 hover:border-indigo-300 transition-all shadow-lg hover:shadow-2xl">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">7/24 Sipariş Alın</h3>
                <p className="text-gray-600 leading-relaxed">
                  Müşterileriniz istediği zaman sipariş verebilir. Çalışma saatlerinizi belirleyin, otomatik kabul/red sistemi.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200 hover:border-indigo-300 transition-all shadow-lg hover:shadow-2xl">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Detaylı Raporlama</h3>
                <p className="text-gray-600 leading-relaxed">
                  Online sipariş istatistikleri, en çok satan ürünler ve müşteri analizi. Veriye dayalı kararlar alın.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Online Sipariş Özellikleri
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                İşletmeniz için ihtiyacınız olan tüm özellikler
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Web ve Mobil Sipariş</h3>
                    <p className="text-gray-600">
                      Müşterileriniz web sitesinden veya mobil uygulamadan sipariş verebilir. Responsive tasarım ile tüm cihazlarda mükemmel deneyim.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Sipariş Takibi</h3>
                    <p className="text-gray-600">
                      Müşterileriniz siparişlerini gerçek zamanlı takip edebilir. Hazırlanıyor, yolda, teslim edildi bildirimleri.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Ödeme Entegrasyonu</h3>
                    <p className="text-gray-600">
                      Kredi kartı, banka kartı, mobil ödeme ve kapıda ödeme seçenekleri. Güvenli ödeme altyapısı.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Teslimat Yönetimi</h3>
                    <p className="text-gray-600">
                      Teslimat bölgeleri, ücretleri ve süreleri belirleyin. Kendi teslimat ekibiniz veya anlaşmalı kurye firmaları.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Müşteri Hesapları</h3>
                    <p className="text-gray-600">
                      Müşteriler hesap oluşturabilir, sipariş geçmişini görebilir ve favori adreslerini kaydedebilir.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">POS Entegrasyonu</h3>
                    <p className="text-gray-600">
                      Online siparişler otomatik olarak POS sisteminize aktarılır. Mutfak ekranına ve yazıcıya gönderilir.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Stok Kontrolü</h3>
                    <p className="text-gray-600">
                      Stokta olmayan ürünler otomatik olarak gizlenir. Müşteriler sadece mevcut ürünleri görebilir.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Kampanya Yönetimi</h3>
                    <p className="text-gray-600">
                      İndirim kuponları, minimum sipariş tutarı, ücretsiz kargo ve özel kampanyalar oluşturun.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Bildirimler</h3>
                    <p className="text-gray-600">
                      SMS ve e-posta bildirimleri. Yeni sipariş, sipariş durumu değişikliği ve müşteri bildirimleri.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Çoklu Dil Desteği</h3>
                    <p className="text-gray-600">
                      Türkçe, İngilizce ve daha fazla dil desteği. Turist müşterileriniz için ideal çözüm.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Nasıl Çalışır?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                3 basit adımda online sipariş sisteminiz hazır
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-indigo-600">1</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sisteminizi Kurun</h3>
                <p className="text-gray-600 text-lg">
                  Menülerinizi ekleyin, teslimat ayarlarınızı yapın ve ödeme entegrasyonunu tamamlayın. 5 dakikada hazır.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-indigo-600">2</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Müşterilerinize Duyurun</h3>
                <p className="text-gray-600 text-lg">
                  Sosyal medya, web siteniz ve fiziksel lokasyonunuzda online sipariş linkinizi paylaşın.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-indigo-600">3</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sipariş Almaya Başlayın</h3>
                <p className="text-gray-600 text-lg">
                  Müşterileriniz sipariş verir, siparişler POS sisteminize aktarılır ve teslimat gerçekleşir.
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
              Online Sipariş Sisteminizi Hemen Oluşturun
            </h2>
            <p className="text-xl mb-8 opacity-95">
              14 gün ücretsiz deneme. Kredi kartı gerektirmez. Delivery platformlarına bağımlı kalmayın.
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

