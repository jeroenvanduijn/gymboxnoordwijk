"use client";

import Link from "next/link";
import { useState } from "react";
import CTAButton from "./CTAButton";
import HighLevelPopup from "./HighLevelPopup";
import { siteConfig } from "@/config/site";
import { useLanguage, useTranslations } from "@/context/LanguageContext";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = useTranslations();

  const navLabels: Record<string, string> = {
    "/": t.nav.home,
    "/aanbod": t.nav.programs,
    "/rooster": t.nav.schedule,
    "/tarieven": t.nav.pricing,
    "/ervaringen": t.nav.testimonials,
    "/contact": t.nav.contact,
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {siteConfig.branding.logo && !siteConfig.branding.logo.includes('placeholder') ? (
              <img src={siteConfig.branding.logo} alt={siteConfig.gym.name} className="h-10" />
            ) : (
              <span className="text-2xl font-heading font-bold text-primary">
                {siteConfig.gym.name}
              </span>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                {navLabels[item.href] || item.label}
              </Link>
            ))}

            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'nl' ? 'en' : 'nl')}
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
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 font-medium rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {navLabels[item.href] || item.label}
                </Link>
              ))}

              {/* Language Toggle (Mobile) */}
              <div className="mx-4 mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                <button
                  onClick={() => setLanguage(language === 'nl' ? 'en' : 'nl')}
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
