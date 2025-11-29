import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 't18gxeooihdd4vax.public.blob.vercel-storage.com',
        pathname: '/images/**',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
