import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost, getRecentPosts } from "../data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Blog Yazısı Bulunamadı",
    };
  }

  return {
    title: `${post.title} | YourBrand POS Blog`,
    description: post.description,
    alternates: {
      canonical: `https://yourbrand.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      locale: "tr_TR",
      url: `https://yourbrand.com/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  const recentPosts = getRecentPosts(3).filter((p) => p.slug !== slug);

  if (!post) {
    notFound();
  }

  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.image || "https://yourbrand.com/og-image.jpg",
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "YourBrand POS",
      logo: {
        "@type": "ImageObject",
        url: "https://yourbrand.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://yourbrand.com/blog/${post.slug}`,
    },
    articleSection: post.category,
    keywords: post.tags.join(", "),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: "https://yourbrand.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://yourbrand.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.category,
        item: `https://yourbrand.com/blog/category/${post.categorySlug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: post.title,
        item: `https://yourbrand.com/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-gray-500 hover:text-indigo-600">
                Ana Sayfa
              </Link>
              <span className="text-gray-400">/</span>
              <Link href="/blog" className="text-gray-500 hover:text-indigo-600">
                Blog
              </Link>
              <span className="text-gray-400">/</span>
              <Link
                href={`/blog/category/${post.categorySlug}`}
                className="text-gray-500 hover:text-indigo-600"
              >
                {post.category}
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-medium truncate">{post.title}</span>
            </nav>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
          {/* Header */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Link
                href={`/blog/category/${post.categorySlug}`}
                className="px-5 py-2.5 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-sm font-bold hover:from-indigo-200 hover:to-purple-200 transition-all shadow-sm"
              >
                {post.category}
              </Link>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{post.readTime} dakika okuma</span>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
              {post.title}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed font-medium">
              {post.description}
            </p>
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">
                    {post.author.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">{post.author.name}</div>
                  <div className="text-sm text-gray-500">{post.author.role}</div>
                </div>
              </div>
              <div className="ml-auto flex items-center gap-2 text-gray-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-medium">
                  {new Date(post.publishedAt).toLocaleDateString("tr-TR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative h-72 sm:h-[500px] mb-16 rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-2xl">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/60 text-xl font-semibold">{post.title}</span>
            </div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-16">
            <div
              className="blog-content text-gray-800"
              style={{
                fontSize: "1.125rem",
                lineHeight: "1.875rem",
              }}
              dangerouslySetInnerHTML={{
                __html: (() => {
                  const lines = post.content.split("\n");
                  let html = "";
                  let inList = false;
                  let listItems: string[] = [];
                  
                  const closeList = () => {
                    if (inList && listItems.length > 0) {
                      html += `<ul class="list-none space-y-3 my-8">${listItems.join("")}</ul>`;
                      listItems = [];
                      inList = false;
                    }
                  };
                  
                  lines.forEach((line, index) => {
                    const trimmed = line.trim();
                    
                    // Headings
                    if (trimmed.startsWith("# ")) {
                      closeList();
                      html += `<h1 class="text-4xl font-extrabold text-gray-900 mt-12 mb-8 first:mt-0 leading-tight tracking-tight">${trimmed.substring(2)}</h1>`;
                      return;
                    }
                    if (trimmed.startsWith("## ")) {
                      closeList();
                      html += `<h2 class="text-3xl font-bold text-gray-900 mt-10 mb-6 first:mt-0 leading-tight border-l-4 border-indigo-500 pl-5 py-2 bg-indigo-50/50 rounded-r-lg">${trimmed.substring(3)}</h2>`;
                      return;
                    }
                    if (trimmed.startsWith("### ")) {
                      closeList();
                      html += `<h3 class="text-2xl font-bold text-gray-900 mt-8 mb-5 first:mt-0 leading-tight">${trimmed.substring(4)}</h3>`;
                      return;
                    }
                    
                    // Lists
                    if (trimmed.startsWith("- ") || trimmed.startsWith("✅ ") || trimmed.startsWith("❌ ")) {
                      inList = true;
                      const isCheck = trimmed.startsWith("✅ ");
                      const isCross = trimmed.startsWith("❌ ");
                      const content = trimmed.substring(2);
                      
                      // Process content for links and bold
                      let processedContent = content;
                      const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
                      processedContent = processedContent.replace(linkRegex, '<a href="$2" class="text-indigo-600 hover:text-indigo-700 font-semibold underline decoration-2 underline-offset-2 transition-colors">$1</a>');
                      processedContent = processedContent.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>');
                      
                      const icon = isCheck 
                        ? '<span class="text-green-500 mr-3 text-xl">✓</span>' 
                        : isCross 
                        ? '<span class="text-red-500 mr-3 text-xl">✗</span>' 
                        : '<span class="text-indigo-500 mr-3 text-2xl leading-none">•</span>';
                      
                      const bgClass = isCheck || isCross ? 'bg-gray-50 p-4 rounded-xl border border-gray-200' : '';
                      listItems.push(`<li class="flex items-start ${bgClass}">${icon}<span class="flex-1 leading-relaxed">${processedContent}</span></li>`);
                      return;
                    }
                    
                    // Close list if we hit a non-list item
                    if (inList && trimmed !== "") {
                      closeList();
                    }
                    
                    // Bold-only lines
                    if (trimmed.startsWith("**") && trimmed.endsWith("**") && trimmed.length > 4) {
                      const content = trimmed.substring(2, trimmed.length - 2);
                      html += `<p class="text-xl font-bold text-gray-900 my-8 text-center bg-indigo-50 p-6 rounded-xl border-l-4 border-indigo-500">${content}</p>`;
                      return;
                    }
                    
                    // Tables
                    if (trimmed.startsWith("|")) {
                      closeList();
                      html += `<div class="overflow-x-auto my-8 rounded-xl border border-gray-200 shadow-sm"><table class="min-w-full divide-y divide-gray-200">${trimmed}</table></div>`;
                      return;
                    }
                    
                    // Empty lines
                    if (trimmed === "") {
                      if (!inList) {
                        html += "<br>";
                      }
                      return;
                    }
                    
                    // Regular paragraphs
                    let processedLine = trimmed;
                    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
                    processedLine = processedLine.replace(linkRegex, '<a href="$2" class="text-indigo-600 hover:text-indigo-700 font-semibold underline decoration-2 underline-offset-2 transition-colors">$1</a>');
                    processedLine = processedLine.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>');
                    
                    html += `<p class="mb-6 text-lg leading-relaxed text-gray-800">${processedLine}</p>`;
                  });
                  
                  closeList(); // Close any remaining list
                  return html;
                })(),
              }}
            />
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                Etiketler
              </h3>
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${tag}`}
                    className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 rounded-full text-sm font-medium hover:from-indigo-100 hover:to-purple-100 hover:text-indigo-700 transition-all shadow-sm hover:shadow-md"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Share Buttons */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              Bu Yazıyı Paylaş
            </h3>
            <div className="flex flex-wrap gap-3">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://yourbrand.com/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-3 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
                Twitter
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://yourbrand.com/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://yourbrand.com/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-3 bg-blue-700 text-white rounded-xl font-semibold hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {recentPosts.length > 0 && (
          <section className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-4">İlgili Yazılar</h2>
                <p className="text-xl text-gray-600">Daha fazla içerik keşfedin</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {recentPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 overflow-hidden transform hover:-translate-y-2"
                  >
                    <div className="relative h-48 bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 overflow-hidden">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white/60 text-sm font-medium px-4 text-center">{relatedPost.title}</span>
                      </div>
                      {relatedPost.featured && (
                        <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                          ⭐ Öne Çıkan
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold">
                          {relatedPost.category}
                        </span>
                        <span className="text-gray-400 text-xs">•</span>
                        <span className="text-gray-500 text-xs font-medium">{relatedPost.readTime} dk okuma</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2 leading-tight">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed mb-4">
                        {relatedPost.description}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                            <span className="text-indigo-600 text-xs font-bold">
                              {relatedPost.author.name.split(" ").map((n) => n[0]).join("")}
                            </span>
                          </div>
                          <span className="text-xs text-gray-500">{relatedPost.author.name}</span>
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

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              POS Sisteminizi Keşfedin
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Blog yazılarımızdan ilham alın ve işletmenizi dijitalleştirin
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                Ücretsiz Dene
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-xl font-semibold border-2 border-white/30 hover:bg-white/20 transition-colors"
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

