import { NextRequest, NextResponse } from 'next/server';
import { CITIES, SERVICES } from '@/lib/seed';
import { isAbsorbedSlug, buildRedirectUrl, getCanonicalSlug } from '@/lib/services/super-page-groups';

// ═══════════════════════════════════════════════════════════
// 🔒 MAINTENANCE MODE — Flip to false to launch the site
// ═══════════════════════════════════════════════════════════
const MAINTENANCE_MODE = true;

// Create sets for O(1) lookup
const citySlugs = new Set(CITIES.map(c => c.slug));
const serviceSlugs = new Set(SERVICES.map(s => s.slug));

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // ── Always bypass: static assets, API routes, maintenance page itself ──
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.startsWith('/maintenance') ||
        pathname.includes('.')
    ) {
        return NextResponse.next();
    }

    // ── 🔒 MAINTENANCE MODE: 302 redirect all pages → / → /maintenance ──
    if (MAINTENANCE_MODE) {
        // Homepage → rewrite to maintenance page (show it at /)
        if (pathname === '/') {
            const url = request.nextUrl.clone();
            url.pathname = '/maintenance';
            const response = NextResponse.rewrite(url);
            // 503 + Retry-After tells Google: "temporary, come back later"
            response.headers.set('Retry-After', '86400'); // 24 hours
            return response;
        }
        // All other pages → 302 redirect to homepage
        return NextResponse.redirect(new URL('/', request.url), 302);
    }

    // ══════════════════════════════════════════════════════════
    // NORMAL MODE (when MAINTENANCE_MODE = false)
    // ══════════════════════════════════════════════════════════

    // Skip known static routes
    if (
        pathname.startsWith('/admin') ||
        pathname.startsWith('/advertise') ||
        pathname.startsWith('/company') ||
        pathname.startsWith('/about-us') ||
        pathname.startsWith('/contact-us') ||
        pathname.startsWith('/privacy-policy') ||
        pathname.startsWith('/terms-of-service') ||
        pathname.startsWith('/locations') ||
        pathname.startsWith('/regions') ||
        pathname.startsWith('/search') ||
        pathname.startsWith('/blog') ||
        pathname.startsWith('/services-page') ||
        pathname === '/'
    ) {
        return NextResponse.next();
    }

    // Get the segments
    const segments = pathname.split('/').filter(Boolean);
    const firstSegment = segments[0];

    // ──────────────────────────────────────────────────────
    // FRAGMENT URL ARCHITECTURE — 301 Redirect for absorbed slugs
    // /{city}/{absorbed-slug} → 301 → /{city}/{canonical}#{absorbed-slug}
    // Prevents keyword cannibalization by consolidating to Super Pages
    // ──────────────────────────────────────────────────────
    if (segments.length === 2 && citySlugs.has(firstSegment)) {
        const serviceSlug = segments[1];
        if (isAbsorbedSlug(serviceSlug)) {
            const redirectPath = buildRedirectUrl(firstSegment, serviceSlug);
            if (redirectPath) {
                const url = request.nextUrl.clone();
                url.pathname = redirectPath.split('#')[0]; // pathname without fragment
                url.hash = serviceSlug; // fragment identifier
                return NextResponse.redirect(url, 301);
            }
        }
        // Not absorbed — continue normally (handled by /[city]/[service])
        return NextResponse.next();
    }

    // If it's a city slug (single segment), continue normally (handled by /[city])
    if (citySlugs.has(firstSegment) && segments.length === 1) {
        return NextResponse.next();
    }

    // /services → /services-page (sitemap compatibility)
    if (firstSegment === 'services' && segments.length === 1) {
        const url = request.nextUrl.clone();
        url.pathname = '/services-page';
        return NextResponse.rewrite(url);
    }

    // If it's a service slug at root level, rewrite to /services-page/[service]
    // But if it's an absorbed slug, 301 redirect to the canonical
    if (serviceSlugs.has(firstSegment) && segments.length === 1) {
        if (isAbsorbedSlug(firstSegment)) {
            const canonicalSlug = getCanonicalSlug(firstSegment);
            if (canonicalSlug) {
                return NextResponse.redirect(new URL(`/${canonicalSlug}`, request.url), 301);
            }
        }
        const url = request.nextUrl.clone();
        url.pathname = `/services-page/${firstSegment}`;
        return NextResponse.rewrite(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!_next/static|_next/image|favicon.ico).*)',
    ],
};
