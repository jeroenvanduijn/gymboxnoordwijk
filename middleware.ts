import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ['nl', 'en'];
const defaultLocale = 'nl';

// Get the preferred locale
function getLocale(request: NextRequest) {
    const acceptLanguage = request.headers.get('accept-language');
    if (acceptLanguage?.includes('en')) return 'en';
    return 'nl';
}

export function middleware(request: NextRequest) {
    // Check if there is any supported locale in the pathname
    const { pathname } = request.nextUrl;

    // Skip public files and api
    if (
        pathname.includes('.') || // files
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api')
    ) {
        return;
    }

    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return;

    // Redirect if there is no locale
    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    // e.g. incoming request is /products => /en/products
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!_next|favicon.ico|api|.*\\..*).*)',
    ],
};
