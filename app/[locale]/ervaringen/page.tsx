import Link from "next/link";
import { getTranslations } from "next-intl/server";
import IntroCtaSection from "@/components/IntroCtaSection";

export default async function Ervaringen() {
  const t = await getTranslations('testimonials');
  // Member video testimonials
  const memberVideos = [
    {
      vimeoId: "1140347883",
      name: "Raul",
      title: "4 years of CrossFit"
    },
    {
      vimeoId: "1140347959",
      name: "Joost",
      title: "100 visits milestone"
    },
    {
      vimeoId: "1139251716",
      name: "Daan",
      title: "From Leiden to Chicago"
    },
    {
      vimeoId: "1133807494",
      name: "Elcin",
      title: "100 visits milestone"
    },
    {
      vimeoId: "1133807460",
      name: "Fleur",
      title: "300 workouts strong"
    }
  ];

  // Community photos with stories - All 21 photos
  const communityPhotos = [
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-33.jpg",
      storyKey: "photo1"
    },
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-34.jpg",
      storyKey: "photo2"
    },
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-35.jpg",
      storyKey: "photo3"
    },
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-36.jpg",
      storyKey: "photo4"
    },
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-37.jpg",
      storyKey: "photo5"
    },
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-38.jpg",
      storyKey: "photo6"
    },
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-39.jpg",
      storyKey: "photo7"
    },
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-40.jpg",
      storyKey: "photo8"
    },
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-41.jpg",
      storyKey: "photo9"
    },
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-42.jpg",
      storyKey: "photo10"
    },
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-43.jpg",
      storyKey: "photo11"
    },
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-44.jpg",
      storyKey: "photo12"
    },
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-45.jpg",
      storyKey: "photo13"
    },
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-46.jpg",
      storyKey: "photo14"
    },
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-47.jpg",
      storyKey: "photo15"
    },
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-48.jpg",
      storyKey: "photo16"
    },
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-49.jpg",
      storyKey: "photo17"
    },
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-50.jpg",
      storyKey: "photo18"
    },
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-51.jpg",
      storyKey: "photo19"
    },
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-52.jpg",
      storyKey: "photo20"
    },
    {
      url: "https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/ervaringen/hero-background-53.jpg",
      storyKey: "photo21"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cinnabar to-red-600 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Video Stories Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              {t('videoStories.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
              {t('videoStories.subtitle')}
            </p>

            {/* Video Grid - 5 videos, all same size */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {memberVideos.map((video, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <div className="bg-gray-50 rounded-xl overflow-hidden">
                    <div className="relative" style={{ padding: "177.78% 0 0 0" }}>
                      <iframe
                        src={`https://player.vimeo.com/video/${video.vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%"
                        }}
                        title={`${video.name} - ${video.title}`}
                      />
                    </div>
                  </div>
                  <p className="text-center font-semibold text-gray-900">{video.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Word Cloud Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              {t('wordCloud.title')}
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center">
              {t('wordCloud.subtitle')}
            </p>

            {/* Word Cloud */}
            <div className="bg-white rounded-2xl p-8 md:p-12">
              <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
                <span className="text-3xl md:text-5xl font-bold text-cinnabar">{t('wordCloud.words.coaches')}</span>
                <span className="text-2xl md:text-4xl font-semibold text-verdigris">{t('wordCloud.words.community')}</span>
                <span className="text-xl md:text-3xl font-semibold text-cinnabar/70">{t('wordCloud.words.friendly')}</span>
                <span className="text-2xl md:text-4xl font-bold text-verdigris/80">{t('wordCloud.words.personal')}</span>
                <span className="text-xl md:text-3xl font-semibold text-cinnabar">{t('wordCloud.words.atmosphere')}</span>
                <span className="text-3xl md:text-5xl font-bold text-verdigris">{t('wordCloud.words.welcome')}</span>
                <span className="text-xl md:text-2xl font-medium text-cinnabar/60">{t('wordCloud.words.support')}</span>
                <span className="text-2xl md:text-3xl font-semibold text-verdigris/70">{t('wordCloud.words.technique')}</span>
                <span className="text-xl md:text-3xl font-bold text-cinnabar/80">{t('wordCloud.words.guidance')}</span>
                <span className="text-2xl md:text-4xl font-semibold text-verdigris">{t('wordCloud.words.energy')}</span>
                <span className="text-xl md:text-2xl font-medium text-cinnabar/70">{t('wordCloud.words.fun')}</span>
                <span className="text-2xl md:text-3xl font-bold text-verdigris/80">{t('wordCloud.words.results')}</span>
                <span className="text-xl md:text-3xl font-semibold text-cinnabar">{t('wordCloud.words.hyrox')}</span>
              </div>
            </div>

            <div className="text-center mt-8">
              <a
                href="https://www.google.com/maps/place/CrossFit+Leiden/@52.1508889,4.4736111,17z/data=!4m8!3m7!1s0x47c5c7b0e0e0e0e1:0x1234567890abcdef!8m2!3d52.1508889!4d4.4758!9m1!1b1!16s%2Fg%2F11c5qz5678"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cinnabar font-semibold hover:underline"
              >
                {t('wordCloud.link')}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Community Gallery */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              {t('gallery.title')}
            </h2>

            {/* Photo Grid with Stories - 3 columns for smaller photos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {communityPhotos.map((photo, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <div className="aspect-square rounded-xl overflow-hidden">
                    <img
                      src={photo.url}
                      alt={`CrossFit Leiden Community ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {t(`gallery.photos.${photo.storyKey}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-r from-cinnabar to-red-600">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              {t('cta.title')}
            </h2>
            <Link
              href="https://crossfitleiden.referralrock.com/l/1CROSSFITLEIDEN95/"
              className="inline-block bg-white text-cinnabar px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all shadow-lg"
            >
              {t('cta.button')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
