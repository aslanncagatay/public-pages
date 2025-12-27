import { MetadataRoute } from 'next'

const baseUrl = 'https://quickorder.com.tr'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',          // API rotalarını indexleme
          '/admin/',        // Admin panelini indexleme
          '/_next/',        // Next.js dahili dosyalarını indexleme
          '/private/',      // Özel sayfaları indexleme
          '/login',         // Giriş sayfasını indexleme
          '/dashboard/',    // Dashboard sayfalarını indexleme
        ],
      },
      {
        // Googlebot için özel kurallar
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/login',
          '/dashboard/',
        ],
      },
      {
        // Bingbot için özel kurallar
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/login',
          '/dashboard/',
        ],
      },
      {
        // Yandexbot için özel kurallar
        userAgent: 'Yandexbot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/login',
          '/dashboard/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}

