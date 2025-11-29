"use client";

import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('contact');

  const handlePopupClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined' && (window as any).openCFLPopup) {
      (window as any).openCFLPopup();
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-verdigris to-verdigris/80 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('hero.title')}</h1>
          <p className="text-xl max-w-2xl">
            {t('hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">{t('visitUs.title')}</h2>

              {/* Address */}
              <div className="mb-8">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-cinnabar/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-cinnabar" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{t('visitUs.address')}</h3>
                    <p className="text-gray-700">{t('visitUs.addressLine1')}</p>
                    <p className="text-gray-700">{t('visitUs.addressLine2')}</p>
                    <p className="text-sm text-gray-600 mt-2">
                      {t('visitUs.addressNote')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="mb-8">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-verdigris/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-verdigris" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{t('visitUs.email')}</h3>
                    <a href="mailto:welcome@crossfitleiden.com" className="text-cinnabar hover:underline">
                      welcome@crossfitleiden.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="mb-8">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-jonquil/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-jonquil" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{t('visitUs.phone')}</h3>
                    <a href="tel:0712340477" className="text-cinnabar hover:underline">
                      {t('visitUs.phoneNumber')}
                    </a>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="mb-8">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-chinese-violet/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-chinese-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{t('visitUs.openingHours')}</h3>
                    <p className="text-gray-700">{t('visitUs.monFri')}</p>
                    <p className="text-gray-700">{t('visitUs.sat')}</p>
                    <p className="text-gray-700">{t('visitUs.sun')}</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-semibold text-lg mb-4">{t('visitUs.followUs')}</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/crossfitleiden"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-cinnabar hover:text-white transition-all"
                    aria-label="Instagram"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com/crossfitleiden"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-cinnabar hover:text-white transition-all"
                    aria-label="Facebook"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Parking & Route */}
              <div className="mt-8 bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">{t('route.title')}</h3>
                <p className="text-gray-700 mb-2" dangerouslySetInnerHTML={{ __html: t('route.byCar') }} />
                <p className="text-gray-700 mb-2" dangerouslySetInnerHTML={{ __html: t('route.byBike') }} />
                <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: t('route.byPublicTransport') }} />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">{t('form.title')}</h2>

              <div className="w-full" style={{ minHeight: '432px' }}>
                <iframe
                  src="https://kilo.gymleadmachine.com/widget/form/rJedGDBwxGQzC9EPaPLY"
                  style={{ width: '100%', height: '100%', minHeight: '432px', border: 'none', borderRadius: '3px' }}
                  id="inline-rJedGDBwxGQzC9EPaPLY"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="website contact form"
                  data-height="432"
                  data-layout-iframe-id="inline-rJedGDBwxGQzC9EPaPLY"
                  data-form-id="rJedGDBwxGQzC9EPaPLY"
                  title="website contact form"
                />
                <script src="https://kilo.gymleadmachine.com/js/form_embed.js"></script>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-gray-50">
        <div className="container-custom py-12">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('map.title')}</h2>
          <div className="rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3201.2644277469594!2d4.477064777316185!3d52.13839647196366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5c659350263d7%3A0x1da63fc16f0b0158!2sCrossFit%20Leiden!5e1!3m2!1snl!2snl!4v1764066893232!5m2!1snl!2snl"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CrossFit Leiden locatie"
            />
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="order-2 lg:order-1">
              <img
                src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/contact/hero-background-54.jpg"
                alt="CrossFit Leiden gevel en ingang"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">{t('welcome.title')}</h2>
              <p className="text-lg text-gray-700 mb-4">
                {t('welcome.text')}
              </p>
              <p className="text-gray-600 mb-6">
                <span dangerouslySetInnerHTML={{ __html: t('welcome.introQuestion') }} />{" "}
                <button
                  onClick={handlePopupClick}
                  className="text-cinnabar font-semibold hover:underline cursor-pointer bg-transparent border-none p-0"
                >
                  {t('welcome.introLink')}
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
