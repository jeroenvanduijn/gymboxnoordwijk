import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.crossfitleiden.com';
  const locales = ['nl', 'en'];

  // Define all your pages here
  const routes = [
    '', // Homepage
    '/over-ons',
    '/team',
    '/locatie',
    '/pricing',
    '/rooster',
    '/ervaringen',
    '/starten',
    '/contact',
  ];

  // Generate sitemap entries for each locale and route
  const sitemap: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : 0.8,
      });
    });
  });

  return sitemap;
}
