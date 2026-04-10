import { NextRequest, NextResponse } from 'next/server';
import { CITIES, SERVICES } from '@/lib/seed';
import { isAbsorbedSlug, buildRedirectUrl, getCanonicalSlug } from '@/lib/services/super-page-groups';

// Create sets for O(1) lookup
const citySlugs = new Set(CITIES.map(c => c.slug));
const serviceSlugs = new Set(SERVICES.map(s => s.slug));

// ════════════════════════════════════════════════════════════════
// Module-level constants for Legacy URL Engine
// Hoisted outside middleware() to avoid re-allocation per request
// ════════════════════════════════════════════════════════════════

// Static map: exact old slug → new path (Arabic & unique patterns)
const STATIC_LEGACY_MAP: Record<string, string> = {
    'ارخص-شركة-نقل-عفش-جدة': '/jeddah/furniture-moving',
    'ارقام-شركات-نقل-عفش-في-السعودية': '/furniture-moving',
    'ارقام-نقل-عفش-مكة-خدمات-موثوقة-لنقل-الع': '/makkah/furniture-moving',
    'شركات-تغليف-العفش-بخميس-مشيط': '/khamis-mushait/furniture-packaging',
    'نقل-أثاث-بالأحساء-عمالة-فلبينية': '/al-ahsa/furniture-moving',
    'شركات-كشف-تسربات-المسابح': '/water-leak-detection',
    'مؤسسات-تخزين-العفش-في-الرياض': '/riyadh/furniture-storage',
    'شركات-نقل-العفش-في-الدمام-عمالة-فلبيني': '/dammam/furniture-moving',
    'jeddah-water-leaks-detection-isolate-companies': '/jeddah/water-leak-detection',
};

// City alias map: old name → new slug
const CITY_ALIASES: Record<string, string> = {
    'al-taif': 'taif',
    'al-dammam': 'dammam',
    'al-madina': 'madinah',
    'mecca': 'makkah',
    'khobar': 'al-khobar',
    'khamis': 'khamis-mushait',
    'jeddah': 'jeddah',
    'riyadh': 'riyadh',
    'tabuk': 'tabuk',
    'yanbu': 'yanbu',
    'hail': 'hail',
    'buraidah': 'buraidah',
    'abha': 'abha',
    'dammam': 'dammam',
    'al-khobar': 'al-khobar',
    'al-kharj': 'al-kharj',
    'madinah': 'madinah',
    'taif': 'taif',
    'najran': 'najran',
    'jazan': 'jazan',
    'qassim': 'qassim',
    'al-ahsa': 'al-ahsa',
    'jubail': 'jubail',
    'dhahran': 'dhahran',
    'neom': 'neom',
};

// Service alias map: old suffix → new slug
const SERVICE_ALIASES: Record<string, string> = {
    'movers': 'furniture-moving',
    'cleaning': 'cleaning',
    'cleaning-companies': 'cleaning',
    'anti-insect': 'pest-control',
    'water-leaks': 'water-leak-detection',
    'water-leaks-detection': 'water-leak-detection',
};

// Pre-sorted service keys (longest first) to avoid partial matches
const SORTED_SERVICE_KEYS = Object.keys(SERVICE_ALIASES).sort((a, b) => b.length - a.length);

export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();
    const pathname = url.pathname;
    const hostname = request.headers.get('host') || '';

    // ════════════════════════════════════════════════════════════════
    // Canonical Domain Redirect (www to non-www)
    // ════════════════════════════════════════════════════════════════
    if (hostname === 'www.prokr.co') {
        const cleanUrl = new URL(pathname + url.search, 'https://prokr.co');
        return NextResponse.redirect(cleanUrl, 301);
    }

    // ════════════════════════════════════════════════════════════════
    // SEO: Enforce Lowercase URLs (Prevent Duplicate Content)
    // Exclude: API, _next, and /company/ (short_codes are case-sensitive in Firestore)
    // ════════════════════════════════════════════════════════════════
    if (
        !pathname.startsWith('/_next') && 
        !pathname.startsWith('/api') && 
        !pathname.startsWith('/company/') &&
        pathname !== pathname.toLowerCase()
    ) {
        const lowerUrl = request.nextUrl.clone();
        lowerUrl.pathname = pathname.toLowerCase();
        return NextResponse.redirect(lowerUrl, 301);
    }

    // ════════════════════════════════════════════════════════════════
    // Legacy Domain Redirect Handler
    // Redirects legacy domains (.com/.net/.org)
    // to the canonical .co domain
    // 
    // ════════════════════════════════════════════════════════════════
    const legacyDomains = [
        'prokr.com', 'prokr.net', 'prokr.org',
        'www.prokr.com', 'www.prokr.net', 'www.prokr.org',
    ];

    if (legacyDomains.some(domain => hostname.includes(domain))) {
        // Return 410 for legacy static files
        if (pathname.match(/\.(xml|txt|php|html)$/i)) {
            return new NextResponse('Gone', {
                status: 410,
                headers: {
                    'X-Robots-Tag': 'noindex, nofollow',
                    'Cache-Control': 'public, max-age=31536000, immutable',
                },
            });
        }

        // Redirect all legacy domain traffic to corporate page
        // 301 is safe here: context shift from "service" to "corporate statement"
        // ensures all traffic uses canonical domain
        if (pathname !== '/corporate/acquisition') {
            const cleanUrl = new URL('/corporate/acquisition', 'https://prokr.co');
            return NextResponse.redirect(cleanUrl, 301);
        }
    }

    // ════════════════════════════════════════════════════════════════
    // LEGACY URL REDIRECT ENGINE — /ksa/ prefix (Old Site Structure)
    // Old format: /ksa/{city}-{service}/
    // New format: /{city}/{service}
    // Uses 301 Permanent to transfer full backlink equity (link juice)
    // ════════════════════════════════════════════════════════════════
    if (pathname.startsWith('/ksa/') || pathname === '/ksa') {
        // Strip /ksa prefix and trailing slash for processing
        // decodeURIComponent handles percent-encoded Arabic slugs
        let rawSlug: string;
        try {
            rawSlug = decodeURIComponent(
                pathname
                    .replace(/^\/ksa\/?/, '')
                    .replace(/\/.*$/, '') // Strip any subpaths (e.g., /contact.html)
                    .replace(/\?.*$/, '') // Strip query strings
            );
        } catch {
            rawSlug = pathname
                .replace(/^\/ksa\/?/, '')
                .replace(/\/.*$/, '')
                .replace(/\?.*$/, '');
        }

        // If /ksa with no slug, redirect to homepage
        if (!rawSlug) {
            return NextResponse.redirect(new URL('/', request.url), 301);
        }

        // ── Strategy A: Static Map (exact match) ──
        if (STATIC_LEGACY_MAP[rawSlug]) {
            return NextResponse.redirect(new URL(STATIC_LEGACY_MAP[rawSlug], request.url), 301);
        }

        // ── Strategy B: Pattern Parser {city-alias}-{service-alias} ──
        for (const serviceKey of SORTED_SERVICE_KEYS) {
            if (rawSlug.endsWith(`-${serviceKey}`)) {
                const cityPart = rawSlug.slice(0, -(serviceKey.length + 1));
                const newCity = CITY_ALIASES[cityPart];
                if (newCity) {
                    return NextResponse.redirect(new URL(`/${newCity}/${SERVICE_ALIASES[serviceKey]}`, request.url), 301);
                }
            }
        }

        // No match found — redirect to homepage
        return NextResponse.redirect(new URL('/', request.url), 301);
    }

    // ════════════════════════════════════════════════════════════════
    // Legacy Sitemap Redirect
    // /sitemap_index.xml → /api/sitemap-index
    // ════════════════════════════════════════════════════════════════
    if (pathname === '/sitemap_index.xml') {
        return NextResponse.redirect(new URL('/api/sitemap-index', request.url), 301);
    }

    // ════════════════════════════════════════════════════════════════
    // Legacy non-/ksa/ path: /al-safrat-movers/ → homepage
    // ════════════════════════════════════════════════════════════════
    if (pathname.startsWith('/al-safrat-movers')) {
        return NextResponse.redirect(new URL('/', request.url), 301);
    }


    // Known Valid Routes — Skip List
    // All filesystem routes that should pass through to Next.js.
    // IMPORTANT: When adding new routes to /src/app/, add them here.
    // ════════════════════════════════════════════════════════════════
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.startsWith('/admin') ||
        pathname.startsWith('/advertise') ||
        pathname.startsWith('/company') ||
        pathname.startsWith('/corporate') ||
        pathname.startsWith('/about-us') ||
        pathname.startsWith('/contact-us') ||
        pathname.startsWith('/privacy-policy') ||
        pathname.startsWith('/terms-of-service') ||
        pathname.startsWith('/locations') ||
        pathname.startsWith('/regions') ||
        pathname.startsWith('/search') ||
        pathname.startsWith('/blog') ||
        pathname.startsWith('/services-page') ||
        pathname.startsWith('/verify') ||
        pathname.startsWith('/research') ||
        pathname.startsWith('/maintenance') ||
        pathname.startsWith('/test-buttons') ||
        pathname.startsWith('/llms.txt') ||
        pathname.startsWith('/sitemap-images.xml') ||
        pathname.startsWith('/.well-known') ||
        pathname.includes('.') ||  // Static files like .css, .js, .ico
        pathname === '/'
    ) {
        // For /search routes: add X-Robots-Tag header to prevent indexing
        if (pathname.startsWith('/search')) {
            const response = NextResponse.next();
            response.headers.set('X-Robots-Tag', 'noindex, nofollow');
            return response;
        }
        return NextResponse.next();
    }

    // Get the segments
    const segments = pathname.split('/').filter(Boolean);
    const firstSegment = segments[0];

    // ──────────────────────────────────────────────────────
    // FRAGMENT URL ARCHITECTURE — 301 Redirect for absorbed slugs
    // /{city}/{absorbed-slug} → 301 → /{city}/{canonical}#{absorbed-slug}
    // Prevents duplicate pages by consolidating similar services
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

    // ════════════════════════════════════════════════════════════════
    // 404 CATCH-ALL — Edge-Level Redirect (Layer 1)
    // If we reach here, the path doesn't match ANY known route.
    // Redirect to homepage immediately at the Edge — no server
    // rendering, no round-trip to Next.js, fastest possible response.
    // 302 (temporary) so Google doesn't cache dead URL → homepage.
    // ════════════════════════════════════════════════════════════════
    return NextResponse.redirect(new URL('/', request.url), 302);
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
