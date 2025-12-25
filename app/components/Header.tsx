import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Ana navigasyon">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-indigo-600">
              YourBrand POS
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
            {/* Solutions Dropdown */}
            <div className="relative group">
              <button
                type="button"
                className="text-gray-700 hover:text-indigo-600 font-medium transition-colors flex items-center"
                aria-expanded="false"
                aria-haspopup="true"
              >
                Çözümler
                <svg
                  className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link
                    href="/solutions/restaurant-pos"
                    className="block px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                  >
                    <div className="font-semibold">Restoran POS</div>
                    <div className="text-sm text-gray-500">Tam servis restoranlar için</div>
                  </Link>
                  <Link
                    href="/solutions/cafe-pos"
                    className="block px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                  >
                    <div className="font-semibold">Kafe POS</div>
                    <div className="text-sm text-gray-500">Kahve dükkanları için</div>
                  </Link>
                  <Link
                    href="/solutions/fast-food-pos"
                    className="block px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                  >
                    <div className="font-semibold">Fast Food POS</div>
                    <div className="text-sm text-gray-500">Hızlı servis restoranları için</div>
                  </Link>
                  <Link
                    href="/solutions/bar-pos"
                    className="block px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                  >
                    <div className="font-semibold">Bar POS</div>
                    <div className="text-sm text-gray-500">Barlar ve gece kulüpleri için</div>
                  </Link>
                  <Link
                    href="/solutions/hotel-pos"
                    className="block px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                  >
                    <div className="font-semibold">Otel POS</div>
                    <div className="text-sm text-gray-500">Oteller için kapsamlı çözüm</div>
                  </Link>
                </div>
              </div>
            </div>
            <Link
              href="/features"
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
            >
              Özellikler
            </Link>
            <Link
              href="/pricing"
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
            >
              Fiyatlandırma
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/resources/faq"
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
            >
              Destek
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-3">
            <Link
              href="/login"
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors px-4 py-2"
            >
              Giriş Yap
            </Link>
            <Link
              href="/pricing"
              className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-sm"
            >
              Ücretsiz Dene
            </Link>
          </div>

          {/* Mobile Menu Component */}
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
