import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "QR Menü | Temassız Dijital Menü Sistemi | Restoran QR Menü",
  description: "Temassız QR menü sistemi ile müşterileriniz menünüze anında erişsin. Fotoğraflı ürünler, çoklu dil desteği ve online sipariş entegrasyonu. Ücretsiz deneyin.",
  alternates: {
    canonical: "https://yourbrand.com/qr-menu",
  },
  openGraph: {
    title: "QR Menü | Temassız Dijital Menü Sistemi",
    description: "Temassız QR menü sistemi ile müşterileriniz menünüze anında erişsin. Fotoğraflı ürünler ve çoklu dil desteği.",
    type: "website",
    locale: "tr_TR",
    url: "https://yourbrand.com/qr-menu",
  },
  twitter: {
    card: "summary_large_image",
    title: "QR Menü | Temassız Dijital Menü Sistemi",
    description: "Temassız QR menü sistemi ile müşterileriniz menünüze anında erişsin.",
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "QR Menü Sistemi",
  description: "Temassız dijital menü sistemi. QR kod ile menü erişimi, fotoğraflı ürünler ve online sipariş entegrasyonu.",
  brand: {
    "@type": "Brand",
    name: "YourBrand POS",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "TRY",
    description: "Ücretsiz deneme sürümü mevcuttur",
  },
};

export default function QRMenu() {
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
                  🚀 Temassız Menü Deneyimi
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
                  QR Menü ile
                  <span className="block mt-3 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                    Temassız Menü
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-white/90 mb-4 font-medium">
                  Müşterileriniz QR kod ile menünüze anında erişsin. Fotoğraflı ürünler, çoklu dil desteği ve online sipariş entegrasyonu.
                </p>
                <p className="text-lg text-white/80 mb-8">
                  Fiziksel menülerden kurtulun, hijyen sağlayın, maliyetleri düşürün.
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
                  <div className="bg-white rounded-xl p-6 text-gray-900">
                    <div className="w-full h-64 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-32 h-32 bg-gray-300 rounded-lg mx-auto mb-4"></div>
                        <p className="text-sm text-gray-600">QR Kod Önizleme</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>
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
                QR Menü&apos;nün Avantajları
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                İşletmenize değer katan özellikler
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200 hover:border-indigo-300 transition-all shadow-lg hover:shadow-2xl">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Hijyen ve Güvenlik</h3>
                <p className="text-gray-600 leading-relaxed">
                  Temassız menü deneyimi ile hijyen sağlayın. Fiziksel menülerden kaynaklanan riskleri ortadan kaldırın.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200 hover:border-indigo-300 transition-all shadow-lg hover:shadow-2xl">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Maliyet Tasarrufu</h3>
                <p className="text-gray-600 leading-relaxed">
                  Fiziksel menü basım maliyetlerinden kurtulun. Menü değişikliklerini anında yapın, ekstra maliyet olmadan.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200 hover:border-indigo-300 transition-all shadow-lg hover:shadow-2xl">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Anında Güncelleme</h3>
                <p className="text-gray-600 leading-relaxed">
                  Menü değişikliklerini anında yapın. Fiyat güncellemeleri, yeni ürünler ve kampanyalar hemen yansısın.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200 hover:border-indigo-300 transition-all shadow-lg hover:shadow-2xl">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Çoklu Dil Desteği</h3>
                <p className="text-gray-600 leading-relaxed">
                  Türkçe, İngilizce ve daha fazla dil desteği. Turist müşterileriniz için ideal çözüm.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200 hover:border-indigo-300 transition-all shadow-lg hover:shadow-2xl">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Fotoğraflı Ürünler</h3>
                <p className="text-gray-600 leading-relaxed">
                  Her ürün için yüksek kaliteli fotoğraflar. Müşterileriniz ne sipariş ettiklerini görsün.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200 hover:border-indigo-300 transition-all shadow-lg hover:shadow-2xl">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Online Sipariş Entegrasyonu</h3>
                <p className="text-gray-600 leading-relaxed">
                  QR menüden direkt sipariş verilebilir. Müşteriler menüyü görüp hemen sipariş verebilir.
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
                QR Menü Özellikleri
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Özelleştirilebilir Tasarım</h3>
                    <p className="text-gray-600">
                      Menünüzü markanıza uygun şekilde özelleştirin. Renkler, fontlar ve logo ekleyin.
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Kategori Yönetimi</h3>
                    <p className="text-gray-600">
                      Ürünlerinizi kategorilere ayırın. Başlangıçlar, ana yemekler, içecekler, tatlılar ve daha fazlası.
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Ürün Özellikleri</h3>
                    <p className="text-gray-600">
                      Vejetaryen, vegan, gluten-free gibi özellikler ekleyin. Alerjen bilgileri ve beslenme değerleri.
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
                      Özel günler için kampanyalar oluşturun. İndirimli ürünler ve özel menüler.
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Mobil Uyumlu</h3>
                    <p className="text-gray-600">
                      Tüm cihazlarda mükemmel görünüm. Telefon, tablet ve masaüstü uyumlu responsive tasarım.
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Analitik ve İstatistikler</h3>
                    <p className="text-gray-600">
                      Menü görüntüleme istatistikleri, en çok görüntülenen ürünler ve müşteri davranış analizi.
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2">QR Kod Basılı Materyaller</h3>
                    <p className="text-gray-600">
                      QR kodlarınızı masa kartları, posterler ve diğer basılı materyallere ekleyin. Ücretsiz tasarım desteği.
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2">7/24 Erişim</h3>
                    <p className="text-gray-600">
                      Müşterileriniz istediği zaman menünüze erişebilir. Online menü her zaman güncel ve erişilebilir.
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
                3 basit adımda QR menünüz hazır
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-indigo-600">1</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Menünüzü Oluşturun</h3>
                <p className="text-gray-600 text-lg">
                  Ürünlerinizi ekleyin, fotoğraflarını yükleyin ve kategorilere ayırın. Kolay kullanımlı panel ile dakikalar içinde hazır.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-indigo-600">2</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">QR Kodlarınızı Alın</h3>
                <p className="text-gray-600 text-lg">
                  Sistem otomatik olarak QR kodlarınızı oluşturur. Masa kartları, posterler ve diğer materyallere ekleyin.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-indigo-600">3</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Müşterileriniz Kullansın</h3>
                <p className="text-gray-600 text-lg">
                  Müşterileriniz QR kodu okutarak menünüze anında erişir. Sipariş verebilir veya sadece menüyü görüntüleyebilir.
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
              QR Menünüzü Hemen Oluşturun
            </h2>
            <p className="text-xl mb-8 opacity-95">
              14 gün ücretsiz deneme. Kredi kartı gerektirmez. Hemen başlayın.
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

