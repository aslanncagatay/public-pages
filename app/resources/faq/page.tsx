import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "POS Sistemi SSS | Sıkça Sorulan Sorular | YourBrand POS",
  description: "POS sistemi hakkında sıkça sorulan sorular. Kurulum, özellikler, fiyatlandırma, güvenlik ve daha fazlası. Tüm sorularınızın cevapları burada.",
  alternates: {
    canonical: "https://yourbrand.com/resources/faq",
  },
  openGraph: {
    title: "POS Sistemi SSS | Sıkça Sorulan Sorular",
    description: "POS sistemi hakkında sıkça sorulan sorular. Kurulum, özellikler, fiyatlandırma ve güvenlik.",
    type: "website",
    locale: "tr_TR",
    url: "https://yourbrand.com/resources/faq",
  },
  twitter: {
    card: "summary_large_image",
    title: "POS Sistemi SSS | Sıkça Sorulan Sorular",
    description: "POS sistemi hakkında sıkça sorulan sorular. Tüm sorularınızın cevapları burada.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "POS sistemi nedir ve nasıl çalışır?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "POS (Point of Sale) sistemi, işletmenizde satış işlemlerini yönetmenizi sağlayan yazılımdır. Sipariş alma, ödeme işleme, stok takibi ve raporlama gibi tüm işlemleri tek bir platformda toplar. Bulut tabanlı sistemimiz sayesinde internet bağlantısı olan her yerden erişebilirsiniz.",
      },
    },
    {
      "@type": "Question",
      name: "Kurulum ne kadar sürer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kurulum süreci ortalama 5-10 dakika sürer. Hesabınızı oluşturduktan sonra menülerinizi ekleyebilir, personel hesaplarınızı açabilir ve hemen kullanmaya başlayabilirsiniz. Ücretsiz eğitim ve destek hizmetimiz mevcuttur.",
      },
    },
    {
      "@type": "Question",
      name: "Hangi ödeme yöntemlerini destekliyorsunuz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nakit, kredi kartı, banka kartı, mobil ödeme (Apple Pay, Google Pay) ve dijital cüzdanlar dahil tüm ödeme yöntemlerini destekliyoruz. PCI-DSS uyumlu güvenli ödeme altyapımız ile müşteri bilgileriniz korunur.",
      },
    },
    {
      "@type": "Question",
      name: "Verilerim güvende mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Verileriniz şifrelenmiş bulut sunucularında saklanır ve düzenli olarak yedeklenir. SSL sertifikası, iki faktörlü kimlik doğrulama ve rol tabanlı erişim kontrolü ile veri güvenliğiniz sağlanır. KVKK uyumluyuz.",
      },
    },
    {
      "@type": "Question",
      name: "Ücretsiz deneme var mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet, 14 gün ücretsiz deneme süremiz var. Kredi kartı bilgisi istemiyoruz. Deneme süresince tüm özellikleri kullanabilir, işletmenize uygun olup olmadığını test edebilirsiniz.",
      },
    },
  ],
};

export default function FAQ() {
  const faqCategories = [
    {
      title: "Genel Sorular",
      questions: [
        {
          q: "POS sistemi nedir ve nasıl çalışır?",
          a: "POS (Point of Sale) sistemi, işletmenizde satış işlemlerini yönetmenizi sağlayan yazılımdır. Sipariş alma, ödeme işleme, stok takibi ve raporlama gibi tüm işlemleri tek bir platformda toplar. Bulut tabanlı sistemimiz sayesinde internet bağlantısı olan her yerden erişebilirsiniz.",
        },
        {
          q: "Hangi işletme tipleri için uygundur?",
          a: "Restoran, kafe, fast food, bar, otel ve tüm gıda-içecek işletmeleri için uygundur. Her sektör için özel özellikler ve iş akışları sunuyoruz.",
        },
        {
          q: "Sisteminiz bulut tabanlı mı?",
          a: "Evet, tamamen bulut tabanlı bir sistemdir. Sunucu kurulumu gerektirmez, her yerden erişilebilir ve otomatik güncellemeler alır.",
        },
        {
          q: "Offline çalışabilir mi?",
          a: "Mobil uygulamalarımız offline mod desteği sunar. İnternet bağlantısı olmadığında sipariş alabilir, bağlantı geri geldiğinde veriler otomatik senkronize olur.",
        },
      ],
    },
    {
      title: "Kurulum ve Kullanım",
      questions: [
        {
          q: "Kurulum ne kadar sürer?",
          a: "Kurulum süreci ortalama 5-10 dakika sürer. Hesabınızı oluşturduktan sonra menülerinizi ekleyebilir, personel hesaplarınızı açabilir ve hemen kullanmaya başlayabilirsiniz. Ücretsiz eğitim ve destek hizmetimiz mevcuttur.",
        },
        {
          q: "Teknik bilgi gerektirir mi?",
          a: "Hayır, teknik bilgi gerektirmez. Kullanıcı dostu arayüzümüz sayesinde herkes kolayca kullanabilir. Gerekirse ücretsiz eğitim desteği sağlıyoruz.",
        },
        {
          q: "Eğitim desteği var mı?",
          a: "Evet, ücretsiz eğitim desteği sunuyoruz. Video eğitimler, canlı destek ve dokümantasyon ile hızlıca öğrenebilirsiniz.",
        },
        {
          q: "Mevcut verilerimi aktarabilir miyim?",
          a: "Evet, mevcut POS sisteminizden veri aktarımı yapabiliriz. Ürün listeleri, müşteri bilgileri ve stok verilerini aktarabiliriz.",
        },
      ],
    },
    {
      title: "Özellikler ve Fonksiyonlar",
      questions: [
        {
          q: "Hangi özellikler dahil?",
          a: "Sipariş yönetimi, stok takibi, raporlama, QR menü, online sipariş, müşteri yönetimi, personel yönetimi, kampanya yönetimi ve daha fazlası. Tüm özellikler hakkında detaylı bilgi için özellikler sayfamızı ziyaret edin.",
        },
        {
          q: "Mobil uygulama var mı?",
          a: "Evet, iOS ve Android için native mobil uygulamalarımız mevcuttur. Tablet ve telefon desteği ile her yerden sipariş alabilirsiniz.",
        },
        {
          q: "QR menü özelliği var mı?",
          a: "Evet, QR menü özelliği dahildir. Temassız menü deneyimi, çoklu dil desteği ve online sipariş entegrasyonu sunuyoruz.",
        },
        {
          q: "Online sipariş sistemi var mı?",
          a: "Evet, kendi online sipariş sisteminizi oluşturabilirsiniz. Delivery platformlarına bağımlı kalmadan müşterilerinizle doğrudan iletişim kurabilirsiniz.",
        },
      ],
    },
    {
      title: "Ödeme ve Fiyatlandırma",
      questions: [
        {
          q: "Hangi ödeme yöntemlerini destekliyorsunuz?",
          a: "Nakit, kredi kartı, banka kartı, mobil ödeme (Apple Pay, Google Pay) ve dijital cüzdanlar dahil tüm ödeme yöntemlerini destekliyoruz. PCI-DSS uyumlu güvenli ödeme altyapımız ile müşteri bilgileriniz korunur.",
        },
        {
          q: "Fiyatlandırma nasıl?",
          a: "Esnek fiyatlandırma planlarımız var. İşletme büyüklüğünüze göre uygun planı seçebilirsiniz. Detaylı bilgi için fiyatlandırma sayfamızı ziyaret edin.",
        },
        {
          q: "Ücretsiz deneme var mı?",
          a: "Evet, 14 gün ücretsiz deneme süremiz var. Kredi kartı bilgisi istemiyoruz. Deneme süresince tüm özellikleri kullanabilir, işletmenize uygun olup olmadığını test edebilirsiniz.",
        },
        {
          q: "Gizli ücret var mı?",
          a: "Hayır, gizli ücret yoktur. Fiyatlarımız şeffaftır ve sözleşmede belirtilen tutarlar dışında ek ücret talep edilmez.",
        },
      ],
    },
    {
      title: "Güvenlik ve Veri",
      questions: [
        {
          q: "Verilerim güvende mi?",
          a: "Evet. Verileriniz şifrelenmiş bulut sunucularında saklanır ve düzenli olarak yedeklenir. SSL sertifikası, iki faktörlü kimlik doğrulama ve rol tabanlı erişim kontrolü ile veri güvenliğiniz sağlanır. KVKK uyumluyuz.",
        },
        {
          q: "Verilerim nerede saklanıyor?",
          a: "Verileriniz Türkiye'deki güvenli bulut sunucularında saklanır. KVKK uyumlu veri saklama politikamız mevcuttur.",
        },
        {
          q: "Yedekleme nasıl yapılıyor?",
          a: "Otomatik günlük yedekleme yapılır. Verileriniz şifrelenmiş olarak saklanır ve gerektiğinde anında geri yüklenebilir.",
        },
        {
          q: "KVKK uyumlu mu?",
          a: "Evet, KVKK (Kişisel Verilerin Korunması Kanunu) uyumluyuz. Veri işleme ve saklama süreçlerimiz KVKK gerekliliklerine uygundur.",
        },
      ],
    },
    {
      title: "Destek ve Entegrasyonlar",
      questions: [
        {
          q: "Destek hizmeti nasıl?",
          a: "7/24 destek hizmeti sunuyoruz. E-posta, telefon ve canlı destek kanalları ile size yardımcı oluyoruz.",
        },
        {
          q: "Hangi entegrasyonlar mevcut?",
          a: "Muhasebe programları (Logo, Mikro), e-ticaret platformları (WooCommerce, Shopify), delivery platformları (Yemeksepeti, Getir Yemek) ve daha fazlası. REST API desteği ile özel entegrasyonlar da yapılabilir.",
        },
        {
          q: "Sistem güncellemeleri nasıl?",
          a: "Sistem güncellemeleri otomatik olarak yapılır. Yeni özellikler ve iyileştirmeler kesintisiz olarak sisteme eklenir.",
        },
        {
          q: "Sözleşme süresi ne kadar?",
          a: "Aylık veya yıllık sözleşme seçenekleri mevcuttur. İstediğiniz zaman iptal edebilirsiniz, uzun süreli bağlantı yoktur.",
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
              Sıkça Sorulan Sorular
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              POS sistemi hakkında merak ettikleriniz. Tüm sorularınızın cevapları burada.
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
                İletişime Geç
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">{category.title}</h2>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <details
                      key={faqIndex}
                      className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-indigo-300 transition-colors shadow-sm"
                    >
                      <summary className="text-xl font-semibold text-gray-900 cursor-pointer list-none">
                        <div className="flex items-center justify-between">
                          <span>{faq.q}</span>
                          <svg
                            className="w-5 h-5 text-indigo-600 flex-shrink-0 ml-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </summary>
                      <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Still Have Questions CTA */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Hala Sorunuz mu Var?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ekibimiz size yardımcı olmaya hazır. İletişime geçin, sorularınızı yanıtlayalım.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-indigo-600 text-white px-10 py-5 rounded-xl text-lg font-bold hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-2xl"
              >
                İletişime Geç
              </Link>
              <Link
                href="/support"
                className="bg-white text-indigo-600 px-10 py-5 rounded-xl text-lg font-bold border-2 border-indigo-600 hover:bg-indigo-50 transition-all"
              >
                Destek Merkezi
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

