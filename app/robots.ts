import { MetadataRoute } from 'next'

const baseUrl = 'https://yourbrand.com'

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
        ],
      },
      {
        // Googlebot için özel kurallar
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
        ],
      },
      {
        // Bingbot için özel kurallar
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}

