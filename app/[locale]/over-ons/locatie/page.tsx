"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { useTranslations, useLocale } from 'next-intl';
import IntroCtaSection from "@/components/IntroCtaSection";

export default function LocatiePage() {
  const t = useTranslations('location');
  const locale = useLocale();

  // Genereer foto URLs van hero-background-07.jpg t/m hero-background-28.jpg (29 uitgesloten)
  const galleryImages = Array.from({ length: 22 }, (_, i) => {
    const number = i + 7;
    return {
      url: `https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/faciliteit/hero-background-${String(number).padStart(2, '0')}.jpg`,
      number: number
    };
  });

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Scroll functie voor galerij navigatie
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 336; // breedte van foto (320px) + gap (16px)
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = direction === 'left'
        ? currentScroll - scrollAmount
        : currentScroll + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Hero Section met foto 32 */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        {/* Hero Background Image - foto 32 */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/faciliteit/hero-background-32.jpg"
            alt={t('hero.imageAlt')}
            fill
            className="object-cover"
            priority
          />
          {/* Overlay voor leesbaarheid */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/50"></div>
        </div>

        <div className="relative z-20 container-custom section-padding">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Adres & Contact - Twee kolommen */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('addressContact.title')}</h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Links: Adres & Contact */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{t('addressContact.addressTitle')}</h3>
              <div className="space-y-2 text-lg text-gray-700 mb-6">
                <p className="font-semibold text-gray-900">{t('addressContact.name')}</p>
                <p>{t('addressContact.street')}</p>
                <p>{t('addressContact.city')}</p>
              </div>

              {/* Google Maps Link */}
              <div className="mb-6">
                <a
                  href="https://maps.app.goo.gl/eq5bA5kG31aDr5246"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cinnabar font-semibold hover:underline"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {t('addressContact.googleMaps')}
                </a>
              </div>

              <h3 className="text-xl font-bold mb-4 mt-8 text-gray-900">{t('addressContact.contactTitle')}</h3>
              <div className="space-y-2 text-lg text-gray-700">
                <p>
                  <a href="mailto:welcome@crossfitleiden.com" className="text-cinnabar hover:underline">
                    welcome@crossfitleiden.com
                  </a>
                </p>
                <p>
                  <a href="tel:0712340477" className="text-cinnabar hover:underline">
                    071 - 234 0477
                  </a>
                </p>
              </div>
            </div>

            {/* Rechts: Openingstijden */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{t('addressContact.hoursTitle')}</h3>
              <div className="bg-gray-50 rounded-xl p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex justify-between">
                    <span className="font-medium">{t('addressContact.monFri')}</span>
                    <span>{t('addressContact.monFriHours')}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">{t('addressContact.sat')}</span>
                    <span>{t('addressContact.satHours')}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">{t('addressContact.sun')}</span>
                    <span>{t('addressContact.sunHours')}</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-600 mt-4 italic">
                  {t.rich('addressContact.scheduleNote', {
                    a: (chunks) => <Link href={`/${locale}/rooster`} className="text-cinnabar hover:underline">{chunks}</Link>
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Praktische Info - 3 Cards */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-10 text-center">{t('practicalInfo.title')}</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1: Parkeren */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-cinnabar/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-cinnabar" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{t('practicalInfo.parking.title')}</h3>
              </div>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>{t('practicalInfo.parking.item1')}</li>
                <li>{t('practicalInfo.parking.item2')}</li>
                <li>{t('practicalInfo.parking.item3')}</li>
                <li>{t('practicalInfo.parking.item4')}</li>
                <li>{t('practicalInfo.parking.item5')}</li>
              </ul>
            </div>

            {/* Card 2: Fysiofabriek */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-verdigris/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-verdigris" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{t('practicalInfo.fysiofabriek.title')}</h3>
              </div>
              <p className="text-gray-700 mb-3 text-sm">
                {t('practicalInfo.fysiofabriek.text1')}
              </p>
              <p className="text-gray-700 mb-4 text-sm">
                {t('practicalInfo.fysiofabriek.text2')}
              </p>
              <Link href={`/${locale}/aanbod/fysiofabriek`} className="text-cinnabar font-semibold hover:underline text-sm inline-flex items-center gap-1">
                {t('practicalInfo.fysiofabriek.link')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Card 3: Faciliteiten */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-jonquil/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-jonquil" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{t('practicalInfo.facilities.title')}</h3>
              </div>
              <ul className="text-gray-700 space-y-1.5 text-sm">
                <li>{t('practicalInfo.facilities.item1')}</li>
                <li>{t('practicalInfo.facilities.item2')}</li>
                <li>{t('practicalInfo.facilities.item3')}</li>
                <li>{t('practicalInfo.facilities.item4')}</li>
                <li>{t('practicalInfo.facilities.item5')}</li>
                <li>{t('practicalInfo.facilities.item6')}</li>
                <li>{t('practicalInfo.facilities.item7')}</li>
                <li>{t('practicalInfo.facilities.item8')}</li>
                <li>{t('practicalInfo.facilities.item9')}</li>
                <li>{t('practicalInfo.facilities.item10')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fotosectie - Horizontale rij met navigatieknoppen */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-3 text-center">{t('gallery.title')}</h2>
          <p className="text-center text-gray-600 mb-8">
            {t('gallery.subtitle')}
          </p>

          {/* Horizontale scrollbare fotorij met navigatieknoppen */}
          <div className="relative max-w-7xl mx-auto">
            {/* Linker navigatieknop */}
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all hover:scale-110"
              aria-label={t('gallery.prevButton')}
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Fotorij */}
            <div
              ref={scrollContainerRef}
              className="overflow-x-auto pb-4 scroll-smooth scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="flex gap-4 min-w-max px-12">
                {galleryImages.map((img) => (
                  <div
                    key={img.number}
                    className="relative w-80 h-56 flex-shrink-0 overflow-hidden rounded-lg cursor-pointer group shadow-md hover:shadow-xl transition-shadow"
                    onClick={() => setSelectedImage(img.url)}
                  >
                    <Image
                      src={img.url}
                      alt={`${t('gallery.imageAlt')} ${img.number}`}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                      sizes="320px"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Rechter navigatieknop */}
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all hover:scale-110"
              aria-label={t('gallery.nextButton')}
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <p className="text-center text-gray-600 mt-6 text-sm">
            {t('gallery.clickToEnlarge')}
          </p>
        </div>
      </section>

      {/* Lightbox voor grotere weergave */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors z-10"
            onClick={() => setSelectedImage(null)}
            aria-label={t('gallery.closeButton')}
          >
            ×
          </button>
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage}
              alt={t('gallery.imageAlt')}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
        </div>
      )}

      {/* Google Maps */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('map.title')}</h2>
          <p className="text-center text-gray-600 text-lg mb-8">
            {t('map.address')}
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2448.775976603252!2d4.477064777311962!3d52.13839647196366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5c659350263d7%3A0x1da63fc16f0b0158!2sCrossFit%20Leiden!5e0!3m2!1sen!2snl!4v1763899362690!5m2!1sen!2snl"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CrossFit Leiden op Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <IntroCtaSection
        title={t('cta.title')}
        subtitle={t('cta.subtitle')}
        buttonLabel={t('cta.button')}
      />

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}
