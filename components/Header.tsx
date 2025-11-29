"use client";

import Link from "next/link";
import { useState } from "react";
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import CTAButton from "./CTAButton";
import HighLevelPopup from "./HighLevelPopup";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const t = useTranslations('header');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const navigation = [
    { name: t('home'), href: `/${locale}` },
    {
      name: t('about'),
      href: "#",
      dropdown: [
        { name: t('aboutCFL'), href: `/${locale}/over-ons` },
        { name: t('theTeam'), href: `/${locale}/over-ons/team` },
        { name: t('ourLocation'), href: `/${locale}/over-ons/locatie` },
        { name: t('schedule'), href: `/${locale}/rooster` },
        { name: t('pricing'), href: `/${locale}/tarieven` },
      ],
    },
    {
      name: t('programs'),
      href: "#",
      dropdown: [
        { name: t('kickstart'), href: `/${locale}/kickstart` },
        { name: t('groupTraining'), href: `/${locale}/aanbod/groepslessen` },
        { name: t('smallGroup'), href: `/${locale}/aanbod/small-group` },
        { name: t('personalTraining'), href: `/${locale}/aanbod/private-coaching` },
        { name: t('hyrox'), href: `/${locale}/aanbod/hyrox` },
        { name: t('fysiofabriek'), href: `/${locale}/aanbod/fysiofabriek` },
        { name: t('sportPerformance'), href: `/${locale}/aanbod/sport-performance` },
        { name: t('nutrition'), href: `/${locale}/nutrition` },
        { name: t('teens'), href: `/${locale}/aanbod/teens` },
        { name: t('preTeens'), href: `/${locale}/aanbod/pre-teens` },
      ],
    },
    { name: t('blog'), href: `/${locale}/blog` },
    {
      name: t('events'),
      href: "#",
      dropdown: [
        { name: t('hyroxSimulation'), href: `/${locale}/events/hyrox-simulation` },
      ],
    },
    { name: t('testimonials'), href: `/${locale}/ervaringen` },
    { name: t('contact'), href: `/${locale}/contact` },
  ];

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const switchLocale = (newLocale: string) => {
    // Get the path without the current locale
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    // Navigate to the same path with the new locale
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center">
            <img
              src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/cfl%20logo.png"
              alt="CrossFit Leiden Logo"
              className="w-12 h-12 rounded-full"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.name)}
                onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
              >
                {item.dropdown ? (
                  <>
                    <button className="text-gray-700 hover:text-[#E4572E] transition-colors font-medium flex items-center gap-1">
                      {item.name}
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openDropdown === item.name && (
                      <div className="absolute top-full left-0 pt-2 w-64 z-50">
                        <div className="bg-white rounded-lg shadow-xl py-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-[#E4572E]/5 hover:text-[#E4572E] transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-[#E4572E] transition-colors font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Language Toggle */}
            <div className="flex items-center space-x-2 text-sm">
              <button
                onClick={() => switchLocale('nl')}
                className={`font-medium transition-colors ${
                  locale === 'nl'
                    ? 'text-gray-700'
                    : 'text-gray-400 hover:text-[#E4572E]'
                }`}
              >
                NL
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={() => switchLocale('en')}
                className={`transition-colors ${
                  locale === 'en'
                    ? 'text-gray-700 font-medium'
                    : 'text-gray-400 hover:text-[#E4572E]'
                }`}
              >
                EN
              </button>
            </div>

            {/* CTA Button */}
            <CTAButton variant="header" className="whitespace-nowrap">
              {t('planFreeIntro')}
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
          <div className="lg:hidden pb-4 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="w-full text-left px-4 py-2 text-gray-700 hover:text-[#E4572E] font-medium flex items-center justify-between"
                      >
                        {item.name}
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            openDropdown === item.name ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {openDropdown === item.name && (
                        <div className="bg-gray-50 py-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-8 py-2 text-gray-600 hover:text-[#E4572E] text-sm"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-gray-700 hover:text-[#E4572E] font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mx-4 mt-4">
                <CTAButton variant="header" className="w-full text-center">
                  {t('planFreeIntro')}
                </CTAButton>
              </div>

              {/* Language Toggle Mobile */}
              <div className="flex items-center justify-center space-x-2 text-sm mt-4">
                <button
                  onClick={() => switchLocale('nl')}
                  className={`font-medium transition-colors ${
                    locale === 'nl'
                      ? 'text-gray-700'
                      : 'text-gray-400 hover:text-[#E4572E]'
                  }`}
                >
                  NL
                </button>
                <span className="text-gray-300">|</span>
                <button
                  onClick={() => switchLocale('en')}
                  className={`transition-colors ${
                    locale === 'en'
                      ? 'text-gray-700 font-medium'
                      : 'text-gray-400 hover:text-[#E4572E]'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
      <HighLevelPopup />
    </header>
  );
}
