"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import CTAButton from "./CTAButton";
import HighLevelPopup from "./HighLevelPopup";
import { siteConfig } from "@/config/site";
import { useLanguage, useTranslations } from "@/context/LanguageContext";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState<number | null>(null);
  const { language } = useLanguage();
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (newLang: string) => {
    if (!pathname) return;
    const segments = pathname.split('/');
    if (segments.length > 1) {
      // Assuming format is /lang/...
      segments[1] = newLang;
      router.push(segments.join('/'));
    }
  };

  // Helper to get localized href
  const getLocalizedHref = (href: string) => {
    // If href starts with /, prepend language if not present?
    // Actually siteConfig hrefs are like /aanbod.
    // We should prepend /nl or /en.
    if (href.startsWith('/')) {
      return `/${language}${href === '/' ? '' : href}`;
    }
    return href;
  };

  const navLabels: Record<string, string> = {
    "/": t.nav.home,
    "/aanbod": t.nav.programs,
    "/rooster": t.nav.schedule,
    "/tarieven": t.nav.pricing,
    "/contact": t.nav.contact,
    "/over-ons": t.nav.about,
  };

  const dropdownLabels: Record<string, string> = {
    "/over-ons": t.navDropdown.aboutGymbox,
    "/team": t.navDropdown.team,
    "/contact": t.navDropdown.location,
    "/tarieven": t.navDropdown.pricing,
    "/drop-in": t.navDropdown.dropIn,
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={`/${language}`} className="flex items-center">
            {siteConfig.branding.logo && !siteConfig.branding.logo.includes('placeholder') ? (
              <img src={siteConfig.branding.logo} alt={siteConfig.gym.name} className="h-10" />
            ) : (
              <span className="text-2xl font-headings font-bold text-primary">
                {siteConfig.gym.name}
              </span>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {siteConfig.navigation.map((item, index) => (
              <div
                key={item.href}
                className="relative group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {item.items ? (
                  <button className="flex items-center gap-1 text-gray-700 hover:text-primary transition-colors font-medium">
                    {navLabels[item.href] || item.label}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${hoveredIndex === index ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={getLocalizedHref(item.href)}
                    className="text-gray-700 hover:text-primary transition-colors font-medium"
                  >
                    {navLabels[item.href] || item.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.items && (
                  <div
                    className={`absolute left-0 top-full pt-2 w-48 transition-all duration-200 transform origin-top-left ${hoveredIndex === index ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}
                  >
                    <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 overflow-hidden">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={getLocalizedHref(subItem.href)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                        >
                          {dropdownLabels[subItem.href] || subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Language Toggle */}
            <button
              onClick={() => switchLanguage(language === 'nl' ? 'en' : 'nl')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors text-sm font-medium text-gray-600"
              aria-label="Toggle language"
            >
              <span className={language === 'nl' ? 'font-bold text-primary' : 'opacity-50'}>NL</span>
              <span className="text-gray-300">|</span>
              <span className={language === 'en' ? 'font-bold text-primary' : 'opacity-50'}>EN</span>
            </button>

            {/* CTA Button */}
            <CTAButton variant="header" className="whitespace-nowrap ml-4">
              {t.cta.primaryText}
            </CTAButton>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="h-6 w-6 text-gray-700"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 max-h-[80vh] overflow-y-auto animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-2">
              {siteConfig.navigation.map((item, index) => (
                <div key={item.href}>
                  {item.items ? (
                    <>
                      <button
                        onClick={() => setMobileExpandedIndex(mobileExpandedIndex === index ? null : index)}
                        className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 font-medium rounded-lg"
                      >
                        {navLabels[item.href] || item.label}
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${mobileExpandedIndex === index ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {mobileExpandedIndex === index && (
                        <div className="pl-4 space-y-1 bg-gray-50 rounded-b-lg mb-2">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={getLocalizedHref(subItem.href)}
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-primary"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {dropdownLabels[subItem.href] || subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={getLocalizedHref(item.href)}
                      className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 font-medium rounded-lg"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {navLabels[item.href] || item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Language Toggle (Mobile) */}
              <div className="mx-4 mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                <button
                  onClick={() => switchLanguage(language === 'nl' ? 'en' : 'nl')}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors text-sm font-medium text-gray-600"
                >
                  <span className={language === 'nl' ? 'font-bold text-primary' : 'opacity-50'}>NL</span>
                  <span className="text-gray-300">|</span>
                  <span className={language === 'en' ? 'font-bold text-primary' : 'opacity-50'}>EN</span>
                </button>
                <CTAButton variant="header">
                  {t.cta.primaryText}
                </CTAButton>
              </div>
            </div>
          </div>
        )}
      </nav>
      <HighLevelPopup />
    </header>
  );
}
