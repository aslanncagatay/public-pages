"use client";

import { useState } from "react";
import Link from "next/link";

const solutions = [
  { href: "/solutions/restaurant-pos", title: "Restoran POS" },
  { href: "/solutions/cafe-pos", title: "Kafe POS" },
  { href: "/solutions/fast-food-pos", title: "Fast Food POS" },
  { href: "/solutions/bar-pos", title: "Bar POS" },
  { href: "/solutions/hotel-pos", title: "Otel POS" },
];

const mainLinks = [
  { href: "/features", title: "Özellikler" },
  { href: "/pricing", title: "Fiyatlandırma" },
  { href: "/blog", title: "Blog" },
  { href: "/resources/faq", title: "Destek" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
    setIsSolutionsOpen(false);
  };

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
      >
        {isOpen ? (
          <svg
            className="h-6 w-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="h-6 w-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        className={`fixed left-0 right-0 top-16 bg-white border-t border-gray-200 shadow-lg z-50 max-h-[calc(100vh-4rem)] overflow-y-auto transform transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="px-4 pt-4 pb-6 space-y-1" aria-label="Mobil navigasyon">
          {/* Solutions Accordion */}
          <div className="px-3 py-2">
            <button
              type="button"
              onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
              className="w-full flex items-center justify-between text-gray-700 font-semibold"
              aria-expanded={isSolutionsOpen}
            >
              <span>Çözümler</span>
              <svg
                className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                  isSolutionsOpen ? "rotate-180" : ""
                }`}
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
            <div
              className={`pl-4 space-y-1 overflow-hidden transition-all duration-300 ${
                isSolutionsOpen ? "max-h-96 mt-2" : "max-h-0"
              }`}
            >
              {solutions.map((solution) => (
                <Link
                  key={solution.href}
                  href={solution.href}
                  onClick={closeMenu}
                  className="block px-3 py-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                >
                  {solution.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Main Links */}
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg font-medium transition-colors"
            >
              {link.title}
            </Link>
          ))}

          {/* Divider */}
          <div className="border-t border-gray-200 my-4" />

          {/* Auth Buttons */}
          <div className="space-y-2 px-3">
            <Link
              href="/login"
              onClick={closeMenu}
              className="block w-full py-3 text-center text-gray-700 font-semibold border-2 border-gray-200 rounded-lg hover:border-indigo-300 hover:text-indigo-600 transition-colors"
            >
              Giriş Yap
            </Link>
            <Link
              href="/pricing"
              onClick={closeMenu}
              className="block w-full py-3 text-center bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Ücretsiz Dene
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

