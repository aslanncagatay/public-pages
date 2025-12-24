import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hakkımızda | YourBrand POS | Restoran POS Sistemi Hikayemiz",
  description: "YourBrand POS hakkında. Restoran, kafe ve bar işletmeleri için bulut tabanlı POS sistemi geliştiren ekibimiz ve misyonumuz. 10,000+ işletmeye hizmet veriyoruz.",
  alternates: {
    canonical: "https://yourbrand.com/about",
  },
  openGraph: {
    title: "Hakkımızda | YourBrand POS",
    description: "Restoran, kafe ve bar işletmeleri için bulut tabanlı POS sistemi geliştiren ekibimiz ve misyonumuz.",
    type: "website",
    locale: "tr_TR",
    url: "https://yourbrand.com/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hakkımızda | YourBrand POS",
    description: "10,000+ işletmeye hizmet veren POS sistemi ekibimiz ve misyonumuz.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "YourBrand POS",
  url: "https://yourbrand.com",
  logo: "https://yourbrand.com/logo.png",
  description: "Restoran, kafe ve bar işletmeleri için bulut tabanlı POS sistemi",
  foundingDate: "2020",
  numberOfEmployees: "50-100",
  address: {
    "@type": "PostalAddress",
    addressCountry: "TR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+90-XXX-XXX-XXXX",
    contactType: "Müşteri Hizmetleri",
    areaServed: "TR",
    availableLanguage: "Turkish",
  },
};

export default function About() {
  const values = [
    {
      title: "Müşteri Odaklılık",
      description: "Müşterilerimizin başarısı bizim başarımızdır. Her kararımızı müşteri deneyimini iyileştirmek için alıyoruz.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "İnovasyon",
      description: "Sürekli gelişim ve yenilik. Teknolojinin en son imkanlarını kullanarak en iyi çözümleri sunuyoruz.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Güvenilirlik",
      description: "99.9% uptime garantisi ile kesintisiz hizmet. Verilerinizin güvenliği bizim önceliğimiz.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Şeffaflık",
      description: "Açık ve şeffaf iletişim. Fiyatlarımız, hizmetlerimiz ve süreçlerimiz hakkında net bilgi veriyoruz.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
  ];

  const stats = [
    { number: "10,000+", label: "Aktif İşletme" },
    { number: "4.8/5", label: "Müşteri Memnuniyeti" },
    { number: "50+", label: "Çalışan" },
    { number: "99.9%", label: "Uptime Garantisi" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
              Hakkımızda
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Restoran, kafe ve bar işletmelerini dijitalleştiren bulut tabanlı POS sistemi
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Hikayemiz
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                2020 yılında kurulan YourBrand POS, restoran, kafe ve bar işletmelerinin dijital dönüşümüne öncülük etmek amacıyla yola çıktı. Geleneksel POS sistemlerinin karmaşıklığı ve yüksek maliyetleri karşısında, işletmelerin ihtiyaçlarına uygun, kullanımı kolay ve ekonomik bir çözüm sunmak için çalışıyoruz.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Bugün 10,000+ işletmeye hizmet veriyoruz. Müşterilerimizin başarısı bizim başarımızdır. Bu yüzden sürekli gelişim ve yenilik odaklı çalışıyor, teknolojinin en son imkanlarını kullanarak en iyi çözümleri sunuyoruz.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Misyonumuz, her işletmenin dijitalleşmesini kolaylaştırmak ve işletmelerin büyümesine katkıda bulunmaktır. Vizyonumuz ise Türkiye&apos;nin en güvenilir ve kullanıcı dostu POS sistemi olmaktır.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl sm:text-5xl font-extrabold text-indigo-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Değerlerimiz
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Çalışma prensiplerimiz ve değerlerimiz
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border-2 border-gray-200 hover:border-indigo-300 transition-all shadow-lg hover:shadow-2xl"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 text-white">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Ekibimiz
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Deneyimli ve tutkulu ekibimiz ile size en iyi hizmeti sunuyoruz
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
                <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-indigo-600">50+</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Yazılım Geliştirici</h3>
                <p className="text-gray-600">En son teknolojileri kullanan deneyimli geliştirici ekibimiz</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
                <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-indigo-600">7/24</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Destek Ekibi</h3>
                <p className="text-gray-600">Kesintisiz müşteri desteği sunan uzman ekibimiz</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
                <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-indigo-600">10+</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Yıl Deneyim</h3>
                <p className="text-gray-600">POS ve restoran teknolojilerinde uzun yıllar deneyim</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Bizimle Çalışmak İster misiniz?
            </h2>
            <p className="text-xl mb-8 opacity-95">
              Kariyer fırsatları ve iş ortaklıkları için bizimle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-indigo-600 px-10 py-5 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
              >
                İletişime Geç →
              </Link>
              <Link
                href="/pricing"
                className="bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-xl text-lg font-bold border-2 border-white/30 hover:bg-white/20 transition-all"
              >
                Hizmetlerimiz
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

