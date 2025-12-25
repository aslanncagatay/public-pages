import { MetadataRoute } from 'next'
import { blogPosts } from './blog/data'

const baseUrl = 'https://yourbrand.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date()

  // Ana sayfalar - Yüksek öncelik
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/features`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  // Sektör bazlı çözümler - Yüksek SEO değeri
  const solutionPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/solutions/restaurant-pos`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/solutions/cafe-pos`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/solutions/fast-food-pos`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/solutions/bar-pos`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/solutions/hotel-pos`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]

  // Ürün sayfaları - QR Menü, Online Sipariş, Entegrasyonlar
  const productPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/qr-menu`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/online-ordering`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/integrations`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // Blog ana sayfa
  const blogMainPage: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ]

  // Blog yazıları - Dinamik
  const blogPostPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Blog kategorileri
  const uniqueCategories = [...new Set(blogPosts.map((post) => post.categorySlug))]
  const categoryPages: MetadataRoute.Sitemap = uniqueCategories.map((slug) => ({
    url: `${baseUrl}/blog/category/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  // Kaynaklar - FAQ, Rehberler, Karşılaştırmalar
  const resourcePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/resources/faq`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/guides`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/comparisons/adisyo-vs-yourbrand`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources/comparisons/menulux-vs-yourbrand`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // Destek, Hakkımızda, İletişim
  const companyPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/support`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // Yasal sayfalar - Düşük öncelik ama indexlenmeli
  const legalPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/legal/kvkk`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/legal/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/legal/terms-of-service`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  return [
    ...mainPages,
    ...solutionPages,
    ...productPages,
    ...blogMainPage,
    ...blogPostPages,
    ...categoryPages,
    ...resourcePages,
    ...companyPages,
    ...legalPages,
  ]
}

