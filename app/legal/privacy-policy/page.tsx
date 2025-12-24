import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Veri Güvenliği ve Gizlilik",
  description: "YourBrand POS gizlilik politikası. Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında detaylı bilgi. KVKK uyumlu gizlilik politikası.",
  alternates: {
    canonical: "https://yourbrand.com/legal/privacy-policy",
  },
  openGraph: {
    title: "Gizlilik Politikası | Veri Güvenliği ve Gizlilik",
    description: "YourBrand POS gizlilik politikası. Kişisel verilerinizin nasıl korunduğu hakkında bilgi edinin.",
    type: "website",
    locale: "tr_TR",
    url: "https://yourbrand.com/legal/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  const currentDate = new Date().toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Gizlilik Politikası
          </h1>
          <p className="text-lg text-gray-600">
            Son Güncelleme: {currentDate}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 lg:p-12 prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Giriş</h2>
            <p className="text-gray-700 leading-relaxed">
              YourBrand POS (&quot;Biz&quot;, &quot;Bizim&quot;, &quot;Şirket&quot;) olarak, kullanıcılarımızın gizliliğine büyük önem veriyoruz. Bu Gizlilik Politikası, web sitemizi ve POS hizmetlerimizi kullandığınızda topladığımız, kullandığımız ve paylaştığımız bilgileri açıklamaktadır. Bu politikayı okumak, hizmetlerimizi kullanarak bu politikayı kabul ettiğiniz anlamına gelir.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Toplanan Bilgiler</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.1. Sizin Tarafınızdan Sağlanan Bilgiler</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Hesap Bilgileri:</strong> Ad, soyad, e-posta adresi, telefon numarası, şirket bilgileri</li>
              <li><strong>Ödeme Bilgileri:</strong> Kredi kartı bilgileri (güvenli ödeme işlemcileri aracılığıyla), fatura adresi</li>
              <li><strong>İşletme Bilgileri:</strong> İşletme adı, vergi numarası, sektör bilgisi, lokasyon bilgileri</li>
              <li><strong>İletişim Bilgileri:</strong> Destek talepleriniz, geri bildirimleriniz, e-posta yazışmalarınız</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.2. Otomatik Olarak Toplanan Bilgiler</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Teknik Bilgiler:</strong> IP adresi, tarayıcı türü ve versiyonu, işletim sistemi, cihaz bilgileri</li>
              <li><strong>Kullanım Bilgileri:</strong> Sayfa görüntülemeleri, tıklama verileri, oturum süreleri, erişim zamanları</li>
              <li><strong>Çerezler ve Benzer Teknolojiler:</strong> Web sitesi deneyimini iyileştirmek için çerezler kullanılmaktadır</li>
              <li><strong>Lokasyon Bilgileri:</strong> IP adresinizden türetilen genel lokasyon bilgisi (şehir/ülke seviyesinde)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Bilgilerin Kullanımı</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Topladığımız bilgileri aşağıdaki amaçlarla kullanıyoruz:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>POS sistemi hizmetlerinin sağlanması ve yönetilmesi</li>
              <li>Hesap oluşturma, doğrulama ve yönetimi</li>
              <li>Sipariş işleme ve ödeme işlemlerinin gerçekleştirilmesi</li>
              <li>Müşteri destek hizmetlerinin sağlanması</li>
              <li>Hizmet kalitesinin iyileştirilmesi ve yeni özelliklerin geliştirilmesi</li>
              <li>Güvenlik, dolandırıcılık önleme ve yasal uyumluluk</li>
              <li>İletişim: Önemli güncellemeler, hizmet bildirimleri ve pazarlama iletişimleri (izin verdiğiniz takdirde)</li>
              <li>Analitik ve istatistiksel çalışmalar</li>
              <li>Yasal yükümlülüklerin yerine getirilmesi</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Bilgilerin Paylaşılması</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Kişisel bilgilerinizi aşağıdaki durumlarda paylaşabiliriz:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Hizmet Sağlayıcılar:</strong> Ödeme işlemcileri, bulut hizmet sağlayıcıları, e-posta servisleri gibi hizmetlerimizi destekleyen üçüncü taraf şirketler</li>
              <li><strong>Yasal Zorunluluklar:</strong> Yasalara, mahkeme kararlarına veya devlet kurumlarının taleplerine uyum sağlamak için</li>
              <li><strong>İş Transferleri:</strong> Birleşme, satın alma veya varlık satışı durumunda</li>
              <li><strong>Güvenlik:</strong> Güvenlik ihlallerini önlemek, tespit etmek veya yanıtlamak için</li>
              <li><strong>İzin:</strong> Açık izniniz olduğunda</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Kişisel bilgileriniz, yukarıda belirtilen durumlar dışında üçüncü kişilerle paylaşılmaz veya satılmaz.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Çerezler ve Takip Teknolojileri</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Web sitemizde ve hizmetlerimizde çerezler ve benzer takip teknolojileri kullanıyoruz:
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">5.1. Çerez Türleri</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Zorunlu Çerezler:</strong> Hizmetlerimizin çalışması için gerekli çerezler</li>
              <li><strong>Performans Çerezleri:</strong> Web sitesi performansını analiz etmek için kullanılan çerezler</li>
              <li><strong>İşlevsellik Çerezleri:</strong> Tercihlerinizi hatırlamak ve deneyimi kişiselleştirmek için</li>
              <li><strong>Hedefleme Çerezleri:</strong> İlgili içerik ve reklamlar göstermek için (izin verdiğiniz takdirde)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Tarayıcı ayarlarınızdan çerezleri yönetebilir veya devre dışı bırakabilirsiniz. Ancak, bazı çerezler devre dışı bırakıldığında hizmetlerimizin bazı özellikleri düzgün çalışmayabilir.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Veri Güvenliği</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Kişisel bilgilerinizin güvenliğini sağlamak için aşağıdaki önlemleri alıyoruz:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>SSL/TLS şifreleme ile veri iletimi</li>
              <li>Güvenli sunucu altyapısı ve düzenli güvenlik güncellemeleri</li>
              <li>Erişim kontrolü ve yetkilendirme sistemleri</li>
              <li>Düzenli güvenlik denetimleri ve penetrasyon testleri</li>
              <li>Personel eğitimleri ve güvenlik farkındalığı programları</li>
              <li>Otomatik yedekleme ve felaket kurtarma planları</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Ancak, hiçbir veri iletimi veya depolama yöntemi %100 güvenli değildir. Güvenlik ihlali durumunda, yasal gereklilikler uyarınca sizleri bilgilendireceğiz.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Veri Saklama</h2>
            <p className="text-gray-700 leading-relaxed">
              Kişisel bilgilerinizi, hizmetlerimizi sağlamak için gerekli olduğu sürece ve yasal saklama yükümlülüklerimiz çerçevesinde saklıyoruz. Hesabınızı sildiğinizde veya hizmet sözleşmeniz sona erdiğinde, yasal saklama süreleri sona erdikten sonra bilgileriniz silinir veya anonim hale getirilir.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Haklarınız</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              KVKK ve diğer ilgili yasalar uyarınca, kişisel verilerinizle ilgili aşağıdaki haklara sahipsiniz:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Kişisel verilerinize erişim hakkı</li>
              <li>Yanlış veya eksik verilerin düzeltilmesini talep etme hakkı</li>
              <li>Verilerinizin silinmesini talep etme hakkı</li>
              <li>Veri işlemeye itiraz etme hakkı</li>
              <li>Verilerinizin taşınabilirliği hakkı</li>
              <li>Otomatik karar verme süreçlerine itiraz etme hakkı</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Bu haklarınızı kullanmak için <Link href="/contact" className="text-indigo-600 hover:underline">iletişim sayfamızdan</Link> bize ulaşabilir veya privacy@yourbrand.com adresine e-posta gönderebilirsiniz.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Çocukların Gizliliği</h2>
            <p className="text-gray-700 leading-relaxed">
              Hizmetlerimiz 18 yaş altındaki çocuklar için tasarlanmamıştır. Bilerek 18 yaş altındaki çocuklardan kişisel bilgi toplamıyoruz. Eğer bir çocuğun bilgilerini topladığımızı fark edersek, bu bilgileri derhal sileriz.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Uluslararası Veri Transferi</h2>
            <p className="text-gray-700 leading-relaxed">
              Kişisel bilgileriniz, hizmetlerimizi sağlamak için Türkiye dışındaki sunucularda saklanabilir. Bu durumda, verilerinizin güvenliğini sağlamak için uygun önlemler alınır ve yasal gerekliliklere uyulur.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Politika Değişiklikleri</h2>
            <p className="text-gray-700 leading-relaxed">
              Bu Gizlilik Politikası zaman zaman güncellenebilir. Önemli değişiklikler yapıldığında, e-posta veya web sitemiz üzerinden sizleri bilgilendireceğiz. Güncel politika her zaman bu sayfada yayınlanacaktır. Değişikliklerden sonra hizmetlerimizi kullanmaya devam etmeniz, güncellenmiş politikayı kabul ettiğiniz anlamına gelir.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. İletişim</h2>
            <p className="text-gray-700 leading-relaxed">
              Gizlilik politikamız hakkında sorularınız veya endişeleriniz varsa, lütfen bizimle iletişime geçin:
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>E-posta:</strong> privacy@yourbrand.com<br />
              <strong>Adres:</strong> [Şirket Adresi]<br />
              <strong>Telefon:</strong> [Telefon Numarası]
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Ayrıca <Link href="/contact" className="text-indigo-600 hover:underline">iletişim sayfamızdan</Link> da bize ulaşabilirsiniz.
            </p>
          </section>
        </div>

        {/* Related Links */}
        <div className="mt-12 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">İlgili Belgeler</h3>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/legal/kvkk"
              className="text-indigo-600 hover:text-indigo-700 hover:underline font-medium"
            >
              KVKK Aydınlatma Metni →
            </Link>
            <Link
              href="/legal/terms-of-service"
              className="text-indigo-600 hover:text-indigo-700 hover:underline font-medium"
            >
              Kullanım Şartları →
            </Link>
            <Link
              href="/contact"
              className="text-indigo-600 hover:text-indigo-700 hover:underline font-medium"
            >
              İletişim →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

