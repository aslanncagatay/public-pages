import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "İletişim | YourBrand POS | Demo İste ve Destek Al",
  description: "YourBrand POS ile iletişime geçin. Demo talep edin, teknik destek alın veya genel sorularınızı sorun. 7/24 destek hizmeti.",
  alternates: {
    canonical: "https://yourbrand.com/contact",
  },
  openGraph: {
    title: "İletişim | YourBrand POS",
    description: "YourBrand POS ile iletişime geçin. Demo talep edin, teknik destek alın veya genel sorularınızı sorun.",
    type: "website",
    locale: "tr_TR",
    url: "https://yourbrand.com/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "İletişim | YourBrand POS",
    description: "YourBrand POS ile iletişime geçin. 7/24 destek hizmeti.",
  },
};

const contactPointSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  mainEntity: {
    "@type": "Organization",
    name: "YourBrand POS",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+90-850-XXX-XX-XX",
        contactType: "Müşteri Hizmetleri",
        areaServed: "TR",
        availableLanguage: "Turkish",
      },
      {
        "@type": "ContactPoint",
        email: "destek@yourbrand.com",
        contactType: "Teknik Destek",
        areaServed: "TR",
        availableLanguage: "Turkish",
      },
    ],
  },
};

export default function Contact() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPointSchema) }}
      />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
              İletişime Geçin
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Sorularınız mı var? Demo mu istiyorsunuz? Bizimle iletişime geçin, size yardımcı olalım.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border-2 border-gray-200 hover:border-indigo-300 transition-all shadow-lg hover:shadow-2xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 text-white">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Telefon</h3>
                <p className="text-gray-600 mb-4">Hafta içi 09:00-18:00</p>
                <a
                  href="tel:+90850XXX XX XX"
                  className="text-indigo-600 font-semibold text-lg hover:underline"
                >
                  0850 XXX XX XX
                </a>
              </div>

              <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border-2 border-gray-200 hover:border-indigo-300 transition-all shadow-lg hover:shadow-2xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 text-white">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">E-posta</h3>
                <p className="text-gray-600 mb-4">24 saat içinde yanıt</p>
                <a
                  href="mailto:destek@yourbrand.com"
                  className="text-indigo-600 font-semibold text-lg hover:underline"
                >
                  destek@yourbrand.com
                </a>
              </div>

              <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border-2 border-gray-200 hover:border-indigo-300 transition-all shadow-lg hover:shadow-2xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 text-white">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Canlı Destek</h3>
                <p className="text-gray-600 mb-4">7/24 anında yanıt</p>
                <Link
                  href="#"
                  className="text-indigo-600 font-semibold text-lg hover:underline"
                >
                  Canlı Sohbet Başlat
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  Bize Yazın
                </h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Ad Soyad
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-colors"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      E-posta
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-colors"
                      placeholder="ornek@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefon (Opsiyonel)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-colors"
                      placeholder="05XX XXX XX XX"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Konu
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-colors"
                    >
                      <option value="">Konu seçin</option>
                      <option value="demo">Demo İsteği</option>
                      <option value="support">Teknik Destek</option>
                      <option value="sales">Satış Sorgusu</option>
                      <option value="partnership">İş Ortaklığı</option>
                      <option value="other">Diğer</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Mesajınız
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-colors resize-none"
                      placeholder="Mesajınızı buraya yazın..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-lg"
                  >
                    Gönder
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Office Location */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Ofisimiz
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Bizi ziyaret etmek isterseniz
              </p>
            </div>
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Adres</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Örnek Mahallesi, Teknoloji Caddesi No: 123<br />
                    Şişli, İstanbul 34000<br />
                    Türkiye
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Link */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Önce SSS&apos;lere Bakmak İster misiniz?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Sıkça sorulan soruların cevaplarını bulabilirsiniz
            </p>
            <Link
              href="/resources/faq"
              className="inline-block bg-indigo-600 text-white px-10 py-5 rounded-xl text-lg font-bold hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-2xl"
            >
              SSS&apos;leri Görüntüle →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

