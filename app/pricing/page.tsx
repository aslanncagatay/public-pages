"use client";

import Link from "next/link";
import { useState } from "react";

const pricingPlans = [
  {
    name: "QR Menü",
    description: "Tüm İşletmeler İçin",
    priceMonthly: "₺315",
    priceYearly: "₺3024",
    periodMonthly: "Ayda",
    periodYearly: "Yılda",
    billingMonthly: "Aylık Faturalandırılır.",
    billingYearly: "Yıllık Faturalandırılır.",
    popular: false,
    features: [
      "Temel Raporlama",
      "QR Menü",
      "E-posta Desteği",
      "7/24 Sistem Erişimi",
    ],
    cta: "Kullanmaya Başla",
    ctaLink: "/contact",
  },
  {
    name: "Basic",
    description: "Küçük işletmeler ve yeni başlayanlar için",
    priceMonthly: "₺850",
    priceYearly: "₺8160",
    periodMonthly: "Ayda",
    periodYearly: "Yılda",
    billingMonthly: "Aylık Faturalandırılır.",
    billingYearly: "Yıllık Faturalandırılır.",
    popular: false,
    features: [
      "QR Menü paket özellikleri dahil",
      "Tek kullanıcılı adisyon sistemi",
      "Yazıcı entegrasyonu",
      "Temel Raporlama",
      "Mobil Uygulama",
      "E-posta Desteği",
      "7/24 Sistem Erişimi",
    ],
    cta: "Kullanmaya Başla",
    ctaLink: "/contact",
  },
  {
    name: "Standart paket",
    description: "Kurumsal İşletmeler İçin",
    priceMonthly: "₺1000",
    priceYearly: "₺9600",
    periodMonthly: "Ayda",
    periodYearly: "Yılda",
    billingMonthly: "Aylık Faturalandırılır.",
    billingYearly: "Yıllık Faturalandırılır.",
    popular: true,
    features: [
      "Basic paket özellikleri dahil",
      "Online Sipariş",
      "Masa Yönetimi",
      "Gelişmiş Raporlama (Satış, Müşteri, Personel)",
      "Stok Yönetimi",
      "Müşteri Yönetimi",
      "Entegrasyonlar (Trendyol, Migros, Getir, Yemek Sepeti, MaxiJett, Hesap Kurye, Hızır Kurye, Fiyuu)",
      "E-posta + Canlı Destek",
    ],
    cta: "Kullanmaya Başla",
    ctaLink: "/contact",
  },
  {
    name: "Premium paket",
    description: "Zincir İşletmeler İçin",
    priceMonthly: "₺1200",
    priceYearly: "₺11520",
    periodMonthly: "Ayda",
    periodYearly: "Yılda",
    billingMonthly: "Aylık Faturalandırılır.",
    billingYearly: "Yıllık Faturalandırılır.",
    popular: false,
    features: [
      "Standart paket özellikleri dahil",
      "Özel Raporlama & Analitik",
      "Maliyet Hesaplama",
      "Envanter Raporları",
      "Ingenico Entegrasyonu",
      "Özel Entegrasyonlar",
      "API Erişimi",
      "Özel Eğitim & Onboarding",
      "Dedike Destek Müdürü",
      "Özel Geliştirmeler",
      "SLA Garantisi",
    ],
    cta: "Kullanmaya Başla",
    ctaLink: "/contact",
  },
];

const offerSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Quick Order Sistemi",
  description: "Restoran, kafe ve bar işletmeleri için bulut tabanlı POS sistemi",
  brand: {
    "@type": "Brand",
    name: "Quick Order",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Başlangıç Planı",
      price: "299",
      priceCurrency: "TRY",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "299",
        priceCurrency: "TRY",
        unitCode: "MON",
      },
      availability: "https://schema.org/InStock",
      url: "https://quickorder.com.tr/pricing",
    },
    {
      "@type": "Offer",
      name: "Profesyonel Plan",
      price: "599",
      priceCurrency: "TRY",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "599",
        priceCurrency: "TRY",
        unitCode: "MON",
      },
      availability: "https://schema.org/InStock",
      url: "https://quickorder.com.tr/pricing",
    },
    {
      "@type": "Offer",
      name: "Kurumsal Plan",
      price: "1299",
      priceCurrency: "TRY",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "1299",
        priceCurrency: "TRY",
        unitCode: "MON",
      },
      availability: "https://schema.org/InStock",
      url: "https://quickorder.com.tr/pricing",
    },
  ],
};

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="text-center">
              <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
                💰 14 Gün Ücretsiz Deneme - İptal Anytime
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                İşletmenize Uygun
                <span className="block mt-3 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                  Fiyat Planı Seçin
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 mb-4 max-w-3xl mx-auto font-medium">
                Başlangıç planından kurumsal çözümlere kadar. İhtiyacınıza göre esnek fiyatlandırma.
              </p>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Kredi kartı gerektirmez. 14 gün ücretsiz deneme. İstediğiniz zaman iptal edin.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Billing Toggle */}
            <div className="flex justify-center mb-12">
              <div className="bg-white p-1 rounded-xl border-2 border-gray-200 inline-flex shadow-sm">
                <button
                  onClick={() => setIsYearly(false)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    !isYearly
                      ? "bg-indigo-600 text-white shadow-md"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Aylık
                </button>
                <button
                  onClick={() => setIsYearly(true)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    isYearly
                      ? "bg-indigo-600 text-white shadow-md"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Yıllık
                  <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                    %20 İndirim
                  </span>
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 ${
                    plan.popular
                      ? "border-indigo-500 scale-105 md:-mt-4 md:mb-4"
                      : "border-gray-200"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                        En Popüler
                      </span>
                    </div>
                  )}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {plan.name}
                      </h3>
                      <p className="text-gray-600 text-sm">{plan.description}</p>
                    </div>
                    <div className="mb-4">
                      <div className="flex items-baseline">
                        <span className="text-4xl font-extrabold text-gray-900">
                          {isYearly ? plan.priceYearly : plan.priceMonthly}
                        </span>
                        <span className="text-gray-600 ml-2 text-sm">
                          /{isYearly ? plan.periodYearly : plan.periodMonthly}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        {isYearly ? plan.billingYearly : plan.billingMonthly}
                      </p>
                    </div>
                    <Link
                      href={plan.ctaLink}
                      className={`block w-full text-center py-3 px-4 rounded-xl font-bold text-base transition-all mb-4 ${
                        plan.popular
                          ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 shadow-lg"
                          : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                      }`}
                    >
                      {plan.cta}
                    </Link>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-16 bg-white border-y-2 border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-extrabold text-indigo-600 mb-2">14 Gün</div>
                <div className="text-gray-600 font-medium">Ücretsiz Deneme</div>
                <div className="text-sm text-gray-500 mt-1">Kredi kartı gerektirmez</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-indigo-600 mb-2">%100</div>
                <div className="text-gray-600 font-medium">Para İade Garantisi</div>
                <div className="text-sm text-gray-500 mt-1">30 gün içinde</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-indigo-600 mb-2">7/24</div>
                <div className="text-gray-600 font-medium">Destek Hizmeti</div>
                <div className="text-sm text-gray-500 mt-1">Anında yanıt</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-indigo-600 mb-2">99.9%</div>
                <div className="text-gray-600 font-medium">Uptime Garantisi</div>
                <div className="text-sm text-gray-500 mt-1">Kesintisiz hizmet</div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Plan Karşılaştırması
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Tüm planlarda temel özellikler dahil. İhtiyacınıza göre plan seçin.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-bold">Özellik</th>
                      <th className="px-6 py-4 text-center font-bold">QR Menü</th>
                      <th className="px-6 py-4 text-center font-bold">Basic</th>
                      <th className="px-6 py-4 text-center font-bold">Standart</th>
                      <th className="px-6 py-4 text-center font-bold">Premium</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">QR Menü</td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-gray-50/50">
                      <td className="px-6 py-4 font-medium text-gray-900">Adisyon Sistemi</td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-gray-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Mobil Uygulama</td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-gray-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-gray-50/50">
                      <td className="px-6 py-4 font-medium text-gray-900">Online Sipariş</td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-gray-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-gray-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Masa Yönetimi</td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-gray-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-gray-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-gray-50/50">
                      <td className="px-6 py-4 font-medium text-gray-900">Stok Yönetimi</td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-gray-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-gray-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Gelişmiş Raporlama</td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-gray-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-gray-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-gray-50/50">
                      <td className="px-6 py-4 font-medium text-gray-900">Müşteri Yönetimi</td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-gray-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-gray-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Entegrasyonlar</td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-gray-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-gray-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-gray-50/50">
                      <td className="px-6 py-4 font-medium text-gray-900">API Erişimi</td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-gray-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-gray-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-gray-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Ingenico Entegrasyonu</td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-gray-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-gray-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-gray-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Destek Seviyesi</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-600">E-posta Desteği</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-600">E-posta Desteği</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-600">E-posta + Canlı Destek</td>
                      <td className="px-6 py-4 text-center text-sm font-bold text-indigo-600">Öncelikli</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Fiyatlandırma Hakkında SSS
              </h2>
              <p className="text-xl text-gray-600">
                Merak ettiklerinizin cevapları
              </p>
            </div>
            <div className="space-y-4">
              <details className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-indigo-300 transition-colors shadow-sm">
                <summary className="text-xl font-semibold text-gray-900 cursor-pointer list-none">
                  <div className="flex items-center justify-between">
                    <span>Ücretsiz deneme var mı?</span>
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Evet, 14 gün ücretsiz deneme süremiz var. Kredi kartı bilgisi istemiyoruz. Deneme süresince tüm özellikleri kullanabilir, işletmenize uygun olup olmadığını test edebilirsiniz. Deneme süresi sonunda otomatik olarak ücretlendirilmezsiniz.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-indigo-300 transition-colors shadow-sm">
                <summary className="text-xl font-semibold text-gray-900 cursor-pointer list-none">
                  <div className="flex items-center justify-between">
                    <span>Plan değiştirebilir miyim?</span>
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Evet, istediğiniz zaman planınızı yükseltebilir veya düşürebilirsiniz. Plan değişiklikleri anında geçerli olur. Yükseltme durumunda kalan süre için fark ödemesi yaparsınız, düşürme durumunda ise sonraki fatura döneminde yeni plan fiyatı uygulanır.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-indigo-300 transition-colors shadow-sm">
                <summary className="text-xl font-semibold text-gray-900 cursor-pointer list-none">
                  <div className="flex items-center justify-between">
                    <span>Yıllık ödeme yaparsam indirim var mı?</span>
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Evet, yıllık ödeme yaparsanız %20 indirim kazanırsınız. Örneğin, Profesyonel plan aylık ₺599 yerine yıllık ödemede aylık ₺479 ödersiniz. Bu, yılda yaklaşık ₺1,440 tasarruf demektir.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-indigo-300 transition-colors shadow-sm">
                <summary className="text-xl font-semibold text-gray-900 cursor-pointer list-none">
                  <div className="flex items-center justify-between">
                    <span>İptal edebilir miyim?</span>
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Evet, istediğiniz zaman iptal edebilirsiniz. Uzun süreli sözleşme yok. İptal ettiğinizde hesabınız o fatura döneminin sonuna kadar aktif kalır. Sonrasında verileriniz 30 gün boyunca saklanır, isterseniz tekrar aktifleştirebilirsiniz.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-indigo-300 transition-colors shadow-sm">
                <summary className="text-xl font-semibold text-gray-900 cursor-pointer list-none">
                  <div className="flex items-center justify-between">
                    <span>Kurumsal plan için özel fiyat teklifi alabilir miyim?</span>
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Evet, çok şubeli işletmeler veya özel gereksinimleri olan kurumlar için özel fiyatlandırma yapabiliriz. İletişim sayfamızdan bizimle iletişime geçin, size özel bir teklif hazırlayalım.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-indigo-300 transition-colors shadow-sm">
                <summary className="text-xl font-semibold text-gray-900 cursor-pointer list-none">
                  <div className="flex items-center justify-between">
                    <span>Gizli ücretler var mı?</span>
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Hayır, gizli ücret yok. Fiyatlarımız şeffaftır. Kurulum, eğitim ve temel destek tüm planlarda dahildir. Sadece özel entegrasyonlar veya özel geliştirmeler için ek ücret alınabilir, bunlar da önceden belirtilir.
                </p>
              </details>
            </div>
            <div className="text-center mt-12">
              <Link
                href="/resources/faq"
                className="inline-flex items-center text-indigo-600 font-semibold text-lg hover:underline"
              >
                Tüm SSS&apos;leri Gör
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Hemen Başlayın
            </h2>
            <p className="text-xl mb-10 opacity-95">
              14 gün ücretsiz deneme ile işletmenizi dijitalleştirin. Kredi kartı gerektirmez.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-indigo-600 px-10 py-5 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
              >
                Ücretsiz Deneme Başlat →
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-xl text-lg font-bold border-2 border-white/30 hover:bg-white/20 transition-all"
              >
                Demo İste
              </Link>
            </div>
            <p className="text-sm mt-6 opacity-80">
              İptal etmek istediğinizde tek tıkla iptal edebilirsiniz. Uzun süreli sözleşme yok.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

