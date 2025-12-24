import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Destek Merkezi | POS Sistemi Yardım ve Destek | YourBrand POS",
  description: "POS sistemi destek merkezi. SSS, kullanım kılavuzları, video eğitimler ve teknik destek. 7/24 müşteri desteği ile yanınızdayız.",
  alternates: {
    canonical: "https://yourbrand.com/support",
  },
  openGraph: {
    title: "Destek Merkezi | POS Sistemi Yardım ve Destek",
    description: "POS sistemi destek merkezi. SSS, kullanım kılavuzları ve teknik destek. 7/24 müşteri desteği.",
    type: "website",
    locale: "tr_TR",
    url: "https://yourbrand.com/support",
  },
  twitter: {
    card: "summary_large_image",
    title: "Destek Merkezi | POS Sistemi Yardım ve Destek",
    description: "POS sistemi destek merkezi. 7/24 müşteri desteği ile yanınızdayız.",
  },
};

export default function Support() {
  const supportChannels = [
    {
      title: "Canlı Destek",
      description: "Anında yanıt alın. Uzman ekibimiz size yardımcı olmaya hazır.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      available: "7/24",
      link: "/contact",
    },
    {
      title: "E-posta Desteği",
      description: "destek@yourbrand.com adresine e-posta gönderin. 24 saat içinde yanıt veriyoruz.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      available: "24 saat içinde",
      link: "mailto:destek@yourbrand.com",
    },
    {
      title: "Telefon Desteği",
      description: "0850 XXX XX XX numaralı telefonu arayın. Çalışma saatleri: Hafta içi 09:00-18:00",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      available: "Hafta içi 09:00-18:00",
      link: "tel:+90850XXX XX XX",
    },
  ];

  const resources = [
    {
      title: "Sıkça Sorulan Sorular",
      description: "En çok sorulan soruların cevapları",
      link: "/resources/faq",
      icon: "❓",
    },
    {
      title: "Kullanım Kılavuzları",
      description: "Adım adım kullanım rehberleri",
      link: "/resources/guides",
      icon: "📚",
    },
    {
      title: "Video Eğitimler",
      description: "Görsel anlatımlı video eğitimler",
      link: "/contact",
      icon: "🎥",
    },
    {
      title: "API Dokümantasyonu",
      description: "REST API kullanım kılavuzu",
      link: "/integrations",
      icon: "🔧",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            Destek Merkezi
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            7/24 müşteri desteği ile yanınızdayız. Sorularınız için buradayız.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-indigo-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
            >
              İletişime Geç
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

      {/* Support Channels */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Destek Kanallarımız
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Size en uygun destek kanalını seçin
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border-2 border-gray-200 hover:border-indigo-300 transition-all shadow-lg hover:shadow-2xl"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 text-white">
                  {channel.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{channel.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{channel.description}</p>
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-600 font-medium">{channel.available}</span>
                </div>
                <Link
                  href={channel.link}
                  className="inline-flex items-center text-indigo-600 font-semibold hover:underline"
                >
                  İletişime Geç →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Yardımcı Kaynaklar
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Sorularınızın cevaplarını burada bulabilirsiniz
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <Link
                key={index}
                href={resource.link}
                className="group bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-indigo-300 transition-all shadow-lg hover:shadow-2xl text-center"
              >
                <div className="text-5xl mb-4">{resource.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{resource.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Sık Karşılaşılan Sorunlar
            </h2>
            <p className="text-xl text-gray-600">
              Hızlı çözümler için buraya bakın
            </p>
          </div>
          <div className="space-y-4">
            <details className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200 hover:border-indigo-300 transition-colors">
              <summary className="text-xl font-semibold text-gray-900 cursor-pointer list-none">
                <div className="flex items-center justify-between">
                  <span>Giriş yapamıyorum, şifremi unuttum</span>
                  <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Giriş sayfasında &quot;Şifremi Unuttum&quot; linkine tıklayın. E-posta adresinize şifre sıfırlama linki gönderilecektir. E-posta gelmediyse spam klasörünü kontrol edin.
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200 hover:border-indigo-300 transition-colors">
              <summary className="text-xl font-semibold text-gray-900 cursor-pointer list-none">
                <div className="flex items-center justify-between">
                  <span>Siparişler POS sistemine aktarılmıyor</span>
                  <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                İnternet bağlantınızı kontrol edin. Entegrasyon ayarlarınızın doğru olduğundan emin olun. Sorun devam ederse canlı destek ile iletişime geçin.
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200 hover:border-indigo-300 transition-colors">
              <summary className="text-xl font-semibold text-gray-900 cursor-pointer list-none">
                <div className="flex items-center justify-between">
                  <span>Stok güncellemeleri gerçek zamanlı değil</span>
                  <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Sayfayı yenileyin (F5). Tarayıcı önbelleğini temizleyin. Sorun devam ederse stok ayarlarınızı kontrol edin ve otomatik güncelleme özelliğinin aktif olduğundan emin olun.
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200 hover:border-indigo-300 transition-colors">
              <summary className="text-xl font-semibold text-gray-900 cursor-pointer list-none">
                <div className="flex items-center justify-between">
                  <span>Ödeme işlemleri başarısız oluyor</span>
                  <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Ödeme entegrasyonu ayarlarınızı kontrol edin. API anahtarlarınızın doğru ve aktif olduğundan emin olun. Banka ile iletişime geçerek POS terminalinizin durumunu kontrol edin.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Hala Yardıma İhtiyacınız mı Var?
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Ekibimiz size yardımcı olmaya hazır. İletişime geçin, sorununuzu çözelim.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-indigo-600 px-10 py-5 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
            >
              İletişime Geç →
            </Link>
            <Link
              href="/resources/faq"
              className="bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-xl text-lg font-bold border-2 border-white/30 hover:bg-white/20 transition-all"
            >
              SSS
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

