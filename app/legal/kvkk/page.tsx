import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | Kişisel Verilerin Korunması",
  description: "YourBrand POS KVKK aydınlatma metni. Kişisel verilerinizin nasıl toplandığı, işlendiği ve korunduğu hakkında bilgi edinin. 6698 sayılı KVKK uyumlu.",
  alternates: {
    canonical: "https://yourbrand.com/legal/kvkk",
  },
  openGraph: {
    title: "KVKK Aydınlatma Metni | Kişisel Verilerin Korunması",
    description: "YourBrand POS KVKK aydınlatma metni. Kişisel verilerinizin nasıl korunduğu hakkında bilgi edinin.",
    type: "website",
    locale: "tr_TR",
    url: "https://yourbrand.com/legal/kvkk",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function KVKKPage() {
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
            KVKK Aydınlatma Metni
          </h1>
          <p className="text-lg text-gray-600">
            Son Güncelleme: {currentDate}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 lg:p-12 prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Veri Sorumlusu</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) uyarınca, kişisel verileriniz işlenirken aşağıdaki bilgileri sizlere sunmakla yükümlüyüz.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Veri Sorumlusu:</strong> YourBrand POS<br />
              <strong>Adres:</strong> [Şirket Adresi]<br />
              <strong>E-posta:</strong> kvkk@yourbrand.com<br />
              <strong>Telefon:</strong> [Telefon Numarası]
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. İşlenen Kişisel Veriler</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Hizmetlerimizi sunabilmek için aşağıdaki kişisel verileriniz işlenmektedir:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Kimlik Bilgileri:</strong> Ad, soyad, T.C. kimlik numarası (gerekli durumlarda)</li>
              <li><strong>İletişim Bilgileri:</strong> E-posta adresi, telefon numarası, adres bilgisi</li>
              <li><strong>Müşteri İşlem Bilgileri:</strong> Sipariş geçmişi, ödeme bilgileri, fatura bilgileri</li>
              <li><strong>İşletme Bilgileri:</strong> İşletme adı, vergi numarası, sektör bilgisi</li>
              <li><strong>Teknik Bilgiler:</strong> IP adresi, çerez bilgileri, cihaz bilgileri, tarayıcı bilgileri</li>
              <li><strong>Kullanım Bilgileri:</strong> Sistem kullanım logları, erişim kayıtları</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Kişisel Verilerin İşlenme Amaçları</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>POS sistemi hizmetlerinin sunulması ve yönetilmesi</li>
              <li>Müşteri hesabının oluşturulması ve yönetilmesi</li>
              <li>Sipariş ve ödeme işlemlerinin gerçekleştirilmesi</li>
              <li>Fatura ve muhasebe işlemlerinin yürütülmesi</li>
              <li>Müşteri destek hizmetlerinin sağlanması</li>
              <li>Yasal yükümlülüklerin yerine getirilmesi</li>
              <li>Güvenlik ve dolandırıcılık önleme faaliyetleri</li>
              <li>Hizmet kalitesinin iyileştirilmesi ve analiz çalışmaları</li>
              <li>Yasal ve düzenleyici gerekliliklerin karşılanması</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Kişisel Verilerin İşlenme Hukuki Sebepleri</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Kişisel verileriniz KVKK&apos;nın 5. ve 6. maddelerinde belirtilen aşağıdaki hukuki sebeplere dayanarak işlenmektedir:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Açık rızanızın bulunması</li>
              <li>Sözleşmenin kurulması veya ifası ile doğrudan ilgili olması</li>
              <li>Yasal yükümlülüğün yerine getirilmesi</li>
              <li>Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi</li>
              <li>İşlenen veri ile ilgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla meşru menfaatlerin korunması</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Kişisel Verilerin Aktarılması</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Kişisel verileriniz, yukarıda belirtilen amaçların gerçekleştirilmesi için aşağıdaki üçüncü kişilere aktarılabilir:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Ödeme İşlemcileri:</strong> Kredi kartı ve ödeme işlemlerinin gerçekleştirilmesi için</li>
              <li><strong>Bulut Hizmet Sağlayıcıları:</strong> Verilerin güvenli saklanması için</li>
              <li><strong>Yasal Danışmanlar ve Denetçiler:</strong> Yasal yükümlülüklerin yerine getirilmesi için</li>
              <li><strong>Kargo ve Lojistik Firmaları:</strong> Fiziksel ürün teslimatları için (varsa)</li>
              <li><strong>E-posta ve SMS Hizmet Sağlayıcıları:</strong> İletişim hizmetlerinin sağlanması için</li>
              <li><strong>Yasal Yetkili Kurumlar:</strong> Yasal zorunluluklar gereği talep edildiğinde</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Kişisel verileriniz, yukarıda belirtilen amaçlar dışında üçüncü kişilere aktarılmaz.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Kişisel Verilerin Toplanma Yöntemi</h2>
            <p className="text-gray-700 leading-relaxed">
              Kişisel verileriniz, web sitemiz, mobil uygulamalarımız, e-posta, telefon, canlı destek ve diğer iletişim kanalları aracılığıyla otomatik veya otomatik olmayan yöntemlerle toplanmaktadır.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. KVKK Kapsamındaki Haklarınız</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              KVKK&apos;nın 11. maddesi uyarınca, kişisel verilerinizle ilgili aşağıdaki haklara sahipsiniz:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>İşlenmişse buna ilişkin bilgi talep etme</li>
              <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
              <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
              <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
              <li>KVKK&apos;nın 7. maddesinde öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme</li>
              <li>Düzeltme, silme, yok etme işlemlerinin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
              <li>İşlenen verilerin münhasıran otomatik sistemler ile analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
              <li>Kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Haklarınızı Nasıl Kullanabilirsiniz?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              KVKK kapsamındaki haklarınızı kullanmak için aşağıdaki yöntemlerden birini kullanabilirsiniz:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>E-posta:</strong> kvkk@yourbrand.com adresine yazılı başvuru yapabilirsiniz</li>
              <li><strong>Posta:</strong> [Şirket Adresi] adresine noter onaylı başvuru gönderebilirsiniz</li>
              <li><strong>Web Formu:</strong> <Link href="/contact" className="text-indigo-600 hover:underline">İletişim sayfamız</Link> üzerinden başvuru yapabilirsiniz</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Başvurularınız, kimliğinizi teyit edecek belgelerle birlikte yapılmalıdır. Başvurularınız en geç 30 gün içinde sonuçlandırılacaktır.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Kişisel Verilerin Saklanma Süresi</h2>
            <p className="text-gray-700 leading-relaxed">
              Kişisel verileriniz, işlenme amaçlarının gerektirdiği süre boyunca ve yasal saklama sürelerine uygun olarak saklanmaktadır. Hizmet sözleşmenizin sona ermesi durumunda, yasal saklama süreleri sona erdikten sonra kişisel verileriniz silinir, yok edilir veya anonim hale getirilir.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Güvenlik</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Kişisel verilerinizin güvenliği için teknik ve idari tedbirler alınmaktadır:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>SSL sertifikası ile şifreli veri iletimi</li>
              <li>Güvenli sunucu altyapısı ve düzenli yedekleme</li>
              <li>Erişim kontrolü ve yetkilendirme sistemleri</li>
              <li>Düzenli güvenlik denetimleri ve güncellemeler</li>
              <li>Personel eğitimleri ve bilinçlendirme çalışmaları</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Çerezler (Cookies)</h2>
            <p className="text-gray-700 leading-relaxed">
              Web sitemizde çerezler kullanılmaktadır. Çerez kullanımı hakkında detaylı bilgi için <Link href="/legal/privacy-policy" className="text-indigo-600 hover:underline">Gizlilik Politikamızı</Link> inceleyebilirsiniz.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Değişiklikler</h2>
            <p className="text-gray-700 leading-relaxed">
              Bu aydınlatma metni, yasal düzenlemelerdeki değişiklikler veya hizmetlerimizdeki güncellemeler nedeniyle güncellenebilir. Güncel versiyon her zaman bu sayfada yayınlanacaktır.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. İletişim</h2>
            <p className="text-gray-700 leading-relaxed">
              KVKK kapsamındaki haklarınız veya kişisel verilerinizin işlenmesi hakkında sorularınız için <Link href="/contact" className="text-indigo-600 hover:underline">iletişim sayfamızdan</Link> bize ulaşabilir veya kvkk@yourbrand.com adresine e-posta gönderebilirsiniz.
            </p>
          </section>
        </div>

        {/* Related Links */}
        <div className="mt-12 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">İlgili Belgeler</h3>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/legal/privacy-policy"
              className="text-indigo-600 hover:text-indigo-700 hover:underline font-medium"
            >
              Gizlilik Politikası →
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

