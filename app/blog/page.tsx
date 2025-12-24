import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts, categories, getFeaturedPosts, getRecentPosts } from "./data";

export const metadata: Metadata = {
  title: "POS Sistemi Blog | Restoran İşletmeciliği Rehberleri ve İpuçları",
  description: "Restoran, kafe ve bar işletmeciliği hakkında güncel blog yazıları. POS sistemi rehberleri, karşılaştırmalar, ipuçları ve başarı hikayeleri.",
  alternates: {
    canonical: "https://yourbrand.com/blog",
  },
  openGraph: {
    title: "POS Sistemi Blog | Restoran İşletmeciliği Rehberleri ve İpuçları",
    description: "Restoran, kafe ve bar işletmeciliği hakkında güncel blog yazıları. POS sistemi rehberleri ve ipuçları.",
    type: "website",
    locale: "tr_TR",
    url: "https://yourbrand.com/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "POS Sistemi Blog | Restoran İşletmeciliği Rehberleri",
    description: "Restoran, kafe ve bar işletmeciliği hakkında güncel blog yazıları.",
  },
};

const blogListingSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "YourBrand POS Blog",
  description: "Restoran, kafe ve bar işletmeciliği hakkında güncel blog yazıları",
  url: "https://yourbrand.com/blog",
  publisher: {
    "@type": "Organization",
    name: "YourBrand POS",
    logo: {
      "@type": "ImageObject",
      url: "https://yourbrand.com/logo.png",
    },
  },
};

export default function BlogPage() {
  const featuredPosts = getFeaturedPosts();
  const recentPosts = getRecentPosts(6);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListingSchema) }}
      />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
                POS Sistemi Blog
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto">
                Restoran, kafe ve bar işletmeciliği hakkında güncel rehberler, ipuçları ve başarı hikayeleri
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/blog"
                className="px-6 py-2 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors"
              >
                Tümü
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/blog/category/${category.slug}`}
                  className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Öne Çıkan Yazılar</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-200 overflow-hidden"
                  >
                    <div className="relative h-48 bg-gradient-to-br from-indigo-400 to-purple-600">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white/50 text-sm">{post.title}</span>
                      </div>
                      {post.featured && (
                        <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                          Öne Çıkan
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-xs font-semibold">
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-sm">{post.readTime} dk okuma</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {post.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                            <span className="text-indigo-600 text-xs font-bold">
                              {post.author.name.split(" ").map((n) => n[0]).join("")}
                            </span>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{post.author.name}</div>
                            <div className="text-xs text-gray-500">
                              {new Date(post.publishedAt).toLocaleDateString("tr-TR", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </div>
                          </div>
                        </div>
                        <svg
                          className="w-5 h-5 text-indigo-600 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Tüm Yazılar</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-200 overflow-hidden"
                >
                  <div className="relative h-40 bg-gradient-to-br from-gray-400 to-gray-600">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white/50 text-xs">{post.title}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-xs">•</span>
                      <span className="text-gray-500 text-xs">{post.readTime} dk</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{post.author.name}</span>
                      <span>
                        {new Date(post.publishedAt).toLocaleDateString("tr-TR", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              POS Sisteminizi Keşfedin
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Blog yazılarımızdan ilham alın ve işletmenizi dijitalleştirin
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
              >
                Ücretsiz Dene
              </Link>
              <Link
                href="/contact"
                className="bg-gray-100 text-gray-900 px-8 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              >
                Demo İste
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

