import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // Always use locale prefix (e.g., /nl, /en)
  localePrefix: 'always',

  // Enable automatic locale detection based on browser language
  // Dutch visitors will see /nl, others (with English browser) see /en
  localeDetection: true
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(nl|en)/:path*']
};
