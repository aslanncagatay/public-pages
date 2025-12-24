import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kullanım Şartları | Hizmet Şartları ve Koşulları",
  description: "YourBrand POS kullanım şartları. Hizmetlerimizi kullanırken uymanız gereken şartlar, haklar ve yükümlülükler. Detaylı kullanım şartları ve koşulları.",
  alternates: {
    canonical: "https://yourbrand.com/legal/terms-of-service",
  },
  openGraph: {
    title: "Kullanım Şartları | Hizmet Şartları ve Koşulları",
    description: "YourBrand POS kullanım şartları. Hizmetlerimizi kullanırken uymanız gereken şartlar ve koşullar.",
    type: "website",
    locale: "tr_TR",
    url: "https://yourbrand.com/legal/terms-of-service",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
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
            Kullanım Şartları
          </h1>
          <p className="text-lg text-gray-600">
            Son Güncelleme: {currentDate}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 lg:p-12 prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Kabul ve Değişiklikler</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bu Kullanım Şartları (&quot;Şartlar&quot;), YourBrand POS (&quot;Biz&quot;, &quot;Bizim&quot;, &quot;Şirket&quot;) tarafından sunulan web sitesi, mobil uygulamalar ve POS hizmetlerinin (&quot;Hizmetler&quot;) kullanımını düzenler. Hizmetlerimizi kullanarak, bu Şartları kabul etmiş sayılırsınız.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Bu Şartları zaman zaman güncelleyebiliriz. Önemli değişiklikler yapıldığında sizleri bilgilendireceğiz. Güncel Şartlar her zaman bu sayfada yayınlanacaktır. Değişikliklerden sonra hizmetlerimizi kullanmaya devam etmeniz, güncellenmiş Şartları kabul ettiğiniz anlamına gelir.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Hizmetlerin Tanımı</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              YourBrand POS, restoran, kafe, bar ve diğer işletmeler için bulut tabanlı POS (Point of Sale) sistemi sağlar. Hizmetlerimiz şunları içerir:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Sipariş yönetimi ve işleme</li>
              <li>Stok takibi ve yönetimi</li>
              <li>Raporlama ve analitik</li>
              <li>Ödeme işleme</li>
              <li>Müşteri yönetimi</li>
              <li>QR menü ve online sipariş özellikleri</li>
              <li>Mobil uygulamalar ve web arayüzü</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Hesap Oluşturma ve Güvenlik</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3.1. Hesap Gereksinimleri</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>18 yaşında veya daha büyük olmalısınız</li>
              <li>Doğru, güncel ve eksiksiz bilgiler sağlamalısınız</li>
              <li>Hesabınızın güvenliğinden sorumlusunuz</li>
              <li>Hesabınız altında yapılan tüm faaliyetlerden sorumlusunuz</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3.2. Şifre Güvenliği</h3>
            <p className="text-gray-700 leading-relaxed">
              Şifrenizi gizli tutmalı ve üçüncü kişilerle paylaşmamalısınız. Şifrenizin güvenliğinden siz sorumlusunuz. Şifrenizin çalındığından veya yetkisiz erişimden şüpheleniyorsanız, derhal bizimle iletişime geçin.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Kullanım Koşulları</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">4.1. İzin Verilen Kullanım</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Hizmetlerimizi yalnızca yasal amaçlar için ve bu Şartlara uygun olarak kullanabilirsiniz. Aşağıdaki faaliyetler yasaktır:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Hizmetlerimizi yasadışı amaçlarla kullanmak</li>
              <li>Başkalarının haklarını ihlal etmek</li>
              <li>Hizmetlerimizi kopyalamak, değiştirmek veya tersine mühendislik yapmak</li>
              <li>Virüs, kötü amaçlı yazılım veya zararlı kod yüklemek</li>
              <li>Hizmetlerimizin güvenliğini veya işleyişini bozmaya çalışmak</li>
              <li>Otomatik sistemler (botlar, crawler&apos;lar) ile hizmetlerimize erişmek (izin verilenler hariç)</li>
              <li>Başkalarının kişisel bilgilerini toplamak veya kullanmak</li>
              <li>Spam, phishing veya diğer zararlı faaliyetlerde bulunmak</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Fiyatlandırma ve Ödeme</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">5.1. Fiyatlandırma</h3>
            <p className="text-gray-700 leading-relaxed">
              Hizmetlerimizin fiyatları <Link href="/pricing" className="text-indigo-600 hover:underline">Fiyatlandırma sayfamızda</Link> belirtilmiştir. Fiyatları önceden haber vermeksizin değiştirme hakkımız saklıdır. Mevcut abonelikleriniz için fiyat değişiklikleri, yeni faturalandırma döneminde geçerli olur.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">5.2. Ödeme</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Ödemeler, seçtiğiniz plana göre aylık veya yıllık olarak yapılır</li>
              <li>Ödemeler otomatik olarak yenilenir (otomatik yenilemeyi kapatmadığınız sürece)</li>
              <li>Geç ödemeler, hizmetlerinizin askıya alınmasına veya sonlandırılmasına neden olabilir</li>
              <li>Tüm fiyatlar KDV dahildir</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">5.3. İade Politikası</h3>
            <p className="text-gray-700 leading-relaxed">
              Abonelik iptali için <Link href="/pricing" className="text-indigo-600 hover:underline">Fiyatlandırma sayfamızdaki</Link> iade politikası geçerlidir. İptal edilen abonelikler, mevcut fatura döneminin sonuna kadar aktif kalır.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Fikri Mülkiyet Hakları</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Hizmetlerimiz, içeriklerimiz, logolarımız, ticari markalarımız ve diğer materyallerimiz, YourBrand POS&apos;a aittir ve telif hakkı, ticari marka ve diğer fikri mülkiyet yasaları ile korunmaktadır.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Hizmetlerimizi kullanma hakkınız, bu materyallerin sahipliğini veya kullanım haklarını size vermez. İzinsiz kopyalama, dağıtma veya kullanım yasaktır.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Kullanıcı İçeriği</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Hizmetlerimizde yüklediğiniz, gönderdiğiniz veya paylaştığınız içerikler (&quot;Kullanıcı İçeriği&quot;) sizin sorumluluğunuzdadır. Kullanıcı İçeriğiniz:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Yasalara uygun olmalıdır</li>
              <li>Başkalarının haklarını ihlal etmemelidir</li>
              <li>Zararlı, tehditkar, rahatsız edici veya uygunsuz olmamalıdır</li>
              <li>Telif hakkı, ticari marka veya diğer fikri mülkiyet haklarını ihlal etmemelidir</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Kullanıcı İçeriğinizi hizmetlerimizi sağlamak için kullanma hakkımız saklıdır. Ayrıca, yasalara aykırı veya bu Şartları ihlal eden içerikleri kaldırma hakkımız saklıdır.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Hizmet Kesintileri ve Değişiklikler</h2>
            <p className="text-gray-700 leading-relaxed">
              Hizmetlerimizi bakım, güncelleme veya teknik sorunlar nedeniyle geçici olarak kesintiye uğratabiliriz. Mümkün olduğunca önceden bilgilendirme yapmaya çalışırız, ancak acil durumlarda bu mümkün olmayabilir. Hizmetlerimizi, özelliklerini veya fiyatlarını değiştirme, güncelleme veya sonlandırma hakkımız saklıdır.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Sorumluluk Reddi</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Hizmetlerimiz &quot;olduğu gibi&quot; ve &quot;mümkün olduğunca&quot; sağlanmaktadır. Aşağıdaki konularda sorumluluk kabul etmiyoruz:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Hizmetlerin kesintisiz, hatasız veya güvenli olması</li>
              <li>Hizmetlerinizin ihtiyaçlarınıza tam olarak uygun olması</li>
              <li>Hizmetlerden elde edilen sonuçların doğruluğu veya güvenilirliği</li>
              <li>Üçüncü taraf hizmetlerin veya içeriklerin kullanılabilirliği</li>
              <li>Veri kaybı veya güvenlik ihlalleri (makul önlemler alınmasına rağmen)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Sorumluluk Sınırlaması</h2>
            <p className="text-gray-700 leading-relaxed">
              Yasalarca izin verilen maksimum ölçüde, YourBrand POS, hizmetlerimizin kullanımından veya kullanılamamasından kaynaklanan dolaylı, arızi, özel veya sonuç olarak ortaya çıkan zararlardan sorumlu değildir. Toplam sorumluluğumuz, son 12 ay içinde ödediğiniz toplam ücretle sınırlıdır.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Tazminat</h2>
            <p className="text-gray-700 leading-relaxed">
              Bu Şartları ihlal etmeniz, hizmetlerimizi kötüye kullanmanız veya başkalarının haklarını ihlal etmeniz durumunda, bu ihlallerden kaynaklanan tüm zarar, kayıp, gider ve masraflardan (avukat ücretleri dahil) bizi tazmin etmeyi kabul edersiniz.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Hesap İptali ve Sonlandırma</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">12.1. Sizin Tarafınızdan İptal</h3>
            <p className="text-gray-700 leading-relaxed">
              Hesabınızı istediğiniz zaman iptal edebilirsiniz. İptal işlemi, mevcut fatura döneminin sonunda geçerli olur. İptal edilen hesaplar, dönem sonuna kadar aktif kalır.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">12.2. Bizim Tarafımızdan Sonlandırma</h3>
            <p className="text-gray-700 leading-relaxed">
              Bu Şartları ihlal etmeniz durumunda, önceden haber vermeksizin hesabınızı askıya alabilir veya sonlandırabiliriz. Sonlandırma durumunda, ödenmemiş ücretlerinizden sorumlu olmaya devam edersiniz.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Uygulanacak Hukuk ve Uyuşmazlık Çözümü</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bu Şartlar, Türkiye Cumhuriyeti yasalarına tabidir. Bu Şartlardan kaynaklanan uyuşmazlıklar, öncelikle dostane görüşmelerle çözülmeye çalışılacaktır.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Uyuşmazlıkların çözülemediği durumlarda, İstanbul Mahkemeleri ve İcra Daireleri yetkilidir.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Genel Hükümler</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">14.1. Tam Anlaşma</h3>
            <p className="text-gray-700 leading-relaxed">
              Bu Şartlar, hizmetlerimizin kullanımına ilişkin tam anlaşmayı oluşturur ve önceki tüm anlaşmaların yerine geçer.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">14.2. Bölünebilirlik</h3>
            <p className="text-gray-700 leading-relaxed">
              Bu Şartların herhangi bir hükmü geçersiz veya uygulanamaz sayılırsa, diğer hükümler yürürlükte kalmaya devam eder.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">14.3. Devir</h3>
            <p className="text-gray-700 leading-relaxed">
              Bu Şartlar altındaki haklarınızı ve yükümlülüklerinizi, bizim yazılı iznimiz olmadan devredemezsiniz. Biz, bu Şartları ve hizmetlerimizi, bildirimde bulunmaksızın devredebiliriz.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">15. İletişim</h2>
            <p className="text-gray-700 leading-relaxed">
              Bu Kullanım Şartları hakkında sorularınız varsa, lütfen bizimle iletişime geçin:
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>E-posta:</strong> legal@yourbrand.com<br />
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
              href="/legal/privacy-policy"
              className="text-indigo-600 hover:text-indigo-700 hover:underline font-medium"
            >
              Gizlilik Politikası →
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

