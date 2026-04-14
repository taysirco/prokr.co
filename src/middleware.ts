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
    // ── Previously mapped ──
    'ارخص-شركة-نقل-عفش-جدة': '/jeddah/furniture-moving',
    'ارقام-شركات-نقل-عفش-في-السعودية': '/furniture-moving',
    'ارقام-نقل-عفش-مكة-خدمات-موثوقة-لنقل-الع': '/makkah/furniture-moving',
    'شركات-تغليف-العفش-بخميس-مشيط': '/khamis-mushait/furniture-packaging',
    'نقل-أثاث-بالأحساء-عمالة-فلبينية': '/al-ahsa/furniture-moving',
    'شركات-كشف-تسربات-المسابح': '/water-leak-detection',
    'مؤسسات-تخزين-العفش-في-الرياض': '/riyadh/furniture-storage',
    'شركات-نقل-العفش-في-الدمام-عمالة-فلبيني': '/dammam/furniture-moving',
    'jeddah-water-leaks-detection-isolate-companies': '/jeddah/water-leak-detection',
    // ── Jeddah (جدة) ──
    'ارقام-اعلانات-لشركات-نقل-العفش-فى-جدة': '/jeddah/furniture-moving',
    'ارقام-شركات-نقل-اثاث-من-جدة-الي-الاحساء': '/jeddah/furniture-moving',
    'اعلانات-لشركات-تخزين-الأثاث-بجدة': '/jeddah/furniture-storage',
    'اهمية-شركات-تنظيف-الشقق-بجدة': '/jeddah/cleaning',
    'شركات-رش-المبيدات-الحشرية-بجدة': '/jeddah/pest-control',
    'شركة-توفر-خدمات-تنظيف-فلل-بجدة': '/jeddah/cleaning',
    'نقل-أثاث-بين-أحياء-جدة': '/jeddah/furniture-moving',
    // ── Makkah (مكة) ──
    'ارقام-شركات-نقل-عفش-مكة': '/makkah/furniture-moving',
    // ── Taif (الطائف) ──
    'ارقام-نقل-عفش-بالطائف-دليل-شامل-للخدما': '/taif/furniture-moving',
    // ── Riyadh (الرياض) ──
    'نقل-وتركيب-الأثاث-في-الرياض': '/riyadh/furniture-moving',
    // ── Hail (حائل) ──
    'اهمية-شركات-نقل-العفش-فى-حائل': '/hail/furniture-moving',
    'خدمات-نقل-العفش-فى-حائل': '/hail/furniture-moving',
    // ── Qassim (القصيم) ──
    'خدمات-شركات-نقل-العفش-بمنطقة-القصيم': '/qassim/furniture-moving',
    // ── Al-Khobar (الخبر) ──
    'خدمات-نقل-أثاث-في-الخبر-عمالة-فلبينية': '/al-khobar/furniture-moving',
    // ── Dammam (الدمام) ──
    'سيارات-نقل-أثاث-بالدمام': '/dammam/furniture-moving',
    // ── Al-Ahsa (الأحساء) ──
    'سيارات-نقل-أثاث-في-الأحساء': '/al-ahsa/furniture-moving',
    // ── Jubail (الجبيل) ──
    'سيارات-نقل-أثاث-في-الجبيل': '/jubail/furniture-moving',
    // ── Onizah (عنيزة) ──
    'مؤسسات-تخزين-العفش-في-عنيزة': '/onizah/furniture-storage',
    // ── Buraidah (بريدة) ──
    'مؤسسات-نقل-أثاث-في-منطقة-بريدة': '/buraidah/furniture-moving',
    // ── General (بدون مدينة) ──
    'طرق-الكشف-عن-تسربات-المياه': '/water-leak-detection',
    'مكافحة-الحشرات-المنزلية': '/pest-control',
    // ── English /ksa/ patterns not matched by parser ──
    'cars-transportation-furniture': '/furniture-moving',
    'furniture-transportation-in-taif-filipino-employment': '/taif/furniture-moving',
    'furniture-transportation-services-in-taif-filipino-employment': '/taif/furniture-moving',
    'moving-furniture-in-taif-cheaper-prices': '/taif/furniture-moving',
    'numbers-dinat-transfer-furniture': '/furniture-moving',
    'transport-furniture-in-riyadh-pakistani': '/riyadh/furniture-moving',
};

// City alias map: old name → new slug
// MUST include ALL cities from seed.ts + any legacy aliases
const CITY_ALIASES: Record<string, string> = {
    // Legacy aliases (old name → new slug)
    'al-taif': 'taif',
    'al-dammam': 'dammam',
    'al-madina': 'madinah',
    'mecca': 'makkah',
    'khobar': 'al-khobar',
    'khamis': 'khamis-mushait',
    'hafar-albatin': 'hafr-albatin',
    'al-riyadh': 'riyadh',          // /ksa/al-riyadh-movers
    'al-riydah': 'riyadh',          // /ksa/al-riydah-water-leaks... (typo in old URL)
    'al-qassim': 'qassim',          // /ksa/al-qassim-movers
    'onaizah': 'onizah',            // /ksa/onaizah-movers (old spelling)
    'al-jubail': 'jubail',          // /ksa/al-jubail-movers
    'al-hasa': 'al-ahsa',           // /ksa/al-hasa-movers
    'hasa': 'al-ahsa',              // /ksa/hasa-cleaning
    'hafar-al-batin': 'hafr-albatin', // /ksa/hafar-al-batin-movers
    'buraydah': 'buraidah',          // /ksa/buraydah-water-leaks (old spelling)
    'al-jeddah': 'jeddah',           // Preventive: al- prefix variant
    'al-makkah': 'makkah',           // Preventive: al- prefix variant
    'al-madinah': 'madinah',         // Preventive: al- prefix variant
    'al-abha': 'abha',               // Preventive: al- prefix variant
    'al-hail': 'hail',               // Preventive: al- prefix variant
    'al-yanbu': 'yanbu',             // Preventive: al- prefix variant
    'el-riyadh': 'riyadh',           // Preventive: el- prefix variant
    // Direct matches (all 30 cities from seed.ts)
    'riyadh': 'riyadh',
    'al-kharj': 'al-kharj',
    'qassim': 'qassim',
    'buraidah': 'buraidah',
    'onizah': 'onizah',
    'ar-rass': 'ar-rass',
    'diriyah': 'diriyah',
    'majmaah': 'majmaah',
    'jeddah': 'jeddah',
    'makkah': 'makkah',
    'madinah': 'madinah',
    'taif': 'taif',
    'yanbu': 'yanbu',
    'rabigh': 'rabigh',
    'dammam': 'dammam',
    'al-khobar': 'al-khobar',
    'dhahran': 'dhahran',
    'jubail': 'jubail',
    'al-ahsa': 'al-ahsa',
    'qatif': 'qatif',
    'hafr-albatin': 'hafr-albatin',
    'ras-tanura': 'ras-tanura',
    'tabuk': 'tabuk',
    'hail': 'hail',
    'neom': 'neom',
    'abha': 'abha',
    'khamis-mushait': 'khamis-mushait',
    'najran': 'najran',
    'jazan': 'jazan',
    'al-baha': 'al-baha',
};

// Service alias map: old suffix → new slug
const SERVICE_ALIASES: Record<string, string> = {
    'movers': 'furniture-moving',
    'cleaning': 'cleaning',
    'cleaning-companies': 'cleaning',
    'anti-insect': 'pest-control',
    'water-leaks': 'water-leak-detection',
    'water-leaks-detection': 'water-leak-detection',
    'water-leaks-detection-isolate-companies': 'water-leak-detection', // /ksa/al-riydah-water-leaks-detection-isolate-companies
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
    // PHASE 3: Legacy Domain Consolidation (§1.2)
    // ACTIVATE on Day 15+ (April 20, 2026) — after quarantine ends
    // PREREQUISITE: Upload scripts/disavow.txt to GSC 5-7 days before
    // ════════════════════════════════════════════════════════════════
    const LEGACY_DOMAINS = ['prokr.com', 'prokr.net', 'prokr.org', 'www.prokr.com', 'www.prokr.net', 'www.prokr.org'];
    if (LEGACY_DOMAINS.includes(hostname)) {
        const canonicalUrl = new URL(pathname + url.search, 'https://prokr.co');
        return NextResponse.redirect(canonicalUrl, 301);
    }

    // ════════════════════════════════════════════════════════════════
    // SEO: Enforce Lowercase URLs (Prevent Duplicate Content)
    // Exclude: API, _next, /company/ (case-sensitive short_codes)
    // Exclude: /ksa/ (handled by legacy redirect engine below)
    // CRITICAL: Must not touch percent-encoded bytes (%D8 etc.)
    // toLowerCase() on %D8 → %d8 causes infinite redirect loops
    // because the hosting platform re-normalizes hex to uppercase.
    // ════════════════════════════════════════════════════════════════
    if (
        !pathname.startsWith('/_next') && 
        !pathname.startsWith('/api') && 
        !pathname.startsWith('/company/') &&
        !pathname.startsWith('/ksa/') &&
        !pathname.startsWith('/images/')
    ) {
        // Only lowercase unencoded ASCII uppercase letters
        // Preserve %XX sequences exactly as-is
        const lowered = pathname.replace(/%[0-9A-Fa-f]{2}|[A-Z]/g, (match) => {
            // If it's a percent-encoded byte, leave it unchanged
            if (match.startsWith('%')) return match;
            // Otherwise it's an uppercase ASCII letter — lowercase it
            return match.toLowerCase();
        });
        if (lowered !== pathname) {
            const lowerUrl = request.nextUrl.clone();
            lowerUrl.pathname = lowered;
            return NextResponse.redirect(lowerUrl, 301);
        }
    }

    // ════════════════════════════════════════════════════════════════
    // Legacy Domain Redirect Handler
    // Redirects legacy domains (.com/.net/.org) to canonical .co
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
        // Strip /ksa prefix for processing
        const afterKsa = pathname.replace(/^\/ksa\/?/, '').replace(/\/$/, '');
        const ksaSegments = afterKsa.split('/').filter(Boolean);

        // If /ksa with no slug, redirect to homepage
        if (ksaSegments.length === 0) {
            const url = request.nextUrl.clone();
            url.pathname = '/';
            return NextResponse.redirect(url, 301);
        }

        // ── NEW: /ksa/{city}/{service} → /{city}/{service} ──
        // Handles: /ksa/riyadh/furniture-moving → /riyadh/furniture-moving
        if (ksaSegments.length >= 2) {
            const maybeCitySlug = ksaSegments[0].toLowerCase();
            const maybeServiceSlug = ksaSegments[1].toLowerCase();
            // Check if first segment is a known city (or alias)
            const resolvedCity = citySlugs.has(maybeCitySlug)
                ? maybeCitySlug
                : CITY_ALIASES[maybeCitySlug] || null;
            if (resolvedCity) {
                const resolvedService = serviceSlugs.has(maybeServiceSlug)
                    ? maybeServiceSlug
                    : SERVICE_ALIASES[maybeServiceSlug] || maybeServiceSlug;
                const url = request.nextUrl.clone();
                url.pathname = `/${resolvedCity}/${resolvedService}`;
                return NextResponse.redirect(url, 301);
            }
        }

        // ── Legacy single-slug: /ksa/{city-service-combo} ──
        let rawSlug: string;
        try {
            rawSlug = decodeURIComponent(
                ksaSegments[0]
                    .replace(/\?.*$/, '') // Strip query strings
            ).toLowerCase();
        } catch {
            rawSlug = ksaSegments[0]
                .replace(/\?.*$/, '')
                .toLowerCase();
        }

        // ── Strategy A: Static Map (exact match) ──
        if (STATIC_LEGACY_MAP[rawSlug]) {
            const url = request.nextUrl.clone();
            url.pathname = STATIC_LEGACY_MAP[rawSlug];
            return NextResponse.redirect(url, 301);
        }

        // ── Strategy B: Pattern Parser {city-alias}-{service-alias} ──
        for (const serviceKey of SORTED_SERVICE_KEYS) {
            if (rawSlug.endsWith(`-${serviceKey}`)) {
                const cityPart = rawSlug.slice(0, -(serviceKey.length + 1));
                const newCity = CITY_ALIASES[cityPart];
                if (newCity) {
                    const url = request.nextUrl.clone();
                    url.pathname = `/${newCity}/${SERVICE_ALIASES[serviceKey]}`;
                    return NextResponse.redirect(url, 301);
                }
            }
        }

        // ── Strategy C: City-only match → redirect to city page ──
        const cityOnly = CITY_ALIASES[rawSlug];
        if (cityOnly) {
            const url = request.nextUrl.clone();
            url.pathname = `/${cityOnly}`;
            return NextResponse.redirect(url, 301);
        }

        // No match found — redirect to homepage
        const url = request.nextUrl.clone();
        url.pathname = '/';
        return NextResponse.redirect(url, 301);
    }

    // ════════════════════════════════════════════════════════════════
    // Legacy Sitemap Redirect
    // /sitemap_index.xml → /api/sitemap-index
    // ════════════════════════════════════════════════════════════════
    if (pathname === '/sitemap_index.xml') {
        const url = request.nextUrl.clone();
        url.pathname = '/api/sitemap-index';
        return NextResponse.redirect(url, 301);
    }

    // ════════════════════════════════════════════════════════════════
    // Legacy non-/ksa/ paths → homepage
    // Old WordPress blog (/2016/), hacked spam (/how-to/), and
    // legacy short URLs — all redirect to homepage
    // ════════════════════════════════════════════════════════════════
    if (
        pathname.startsWith('/al-safrat-movers') ||
        pathname.startsWith('/2016/') ||            // Old WordPress blog
        pathname.startsWith('/how-to/') ||           // Hacked/spam paths
        pathname === '/nakl-madina'                  // Old shortlink
    ) {
        // /nakl-madina was a legitimate old link for Madinah furniture moving
        if (pathname === '/nakl-madina') {
            const url = request.nextUrl.clone();
            url.pathname = '/madinah/furniture-moving';
            return NextResponse.redirect(url, 301);
        }
        const fallbackUrl = request.nextUrl.clone();
        fallbackUrl.pathname = '/';
        return NextResponse.redirect(fallbackUrl, 301);
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
        pathname.startsWith('/badge') ||
        pathname.startsWith('/offline') ||
        pathname.startsWith('/llms.txt') ||
        pathname.startsWith('/sitemap-images.xml') ||
        pathname.startsWith('/__/auth') ||           // Firebase auth handler (signInWithRedirect proxy)
        pathname.startsWith('/.well-known') ||
        /\.(css|js|ico|svg|png|jpe?g|gif|webp|avif|woff2?|ttf|eot|map|json|xml|txt)$/i.test(pathname) ||  // Static assets only
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
                const url = request.nextUrl.clone();
                url.pathname = `/${canonicalSlug}`;
                return NextResponse.redirect(url, 301);
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
    const finalFallback = request.nextUrl.clone();
    finalFallback.pathname = '/';
    return NextResponse.redirect(finalFallback, 302);
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
