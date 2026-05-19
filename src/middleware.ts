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
    'moving': 'furniture-moving',
    'furniture': 'furniture-moving',
    'cleaning': 'cleaning',
    'cleaning-companies': 'cleaning',
    'pest-control': 'pest-control',           // Direct match (was missing!)
    'anti-insect': 'pest-control',
    'insect': 'pest-control',
    'water-leaks': 'water-leak-detection',
    'water-leaks-detection': 'water-leak-detection',
    'leak-detection': 'water-leak-detection',  // Alias for water-leak-detection
    'water-leaks-detection-isolate-companies': 'water-leak-detection', // /ksa/al-riydah-water-leaks-detection-isolate-companies
    'insulation': 'insulation',                // Direct match
    'sewage': 'sewage-vacuum',                 // Short alias
    'sewage-vacuum': 'sewage-vacuum',          // Direct match
    'ac-maintenance': 'ac-maintenance',        // Direct match
    'storage': 'furniture-storage',            // Short alias
    'furniture-storage': 'furniture-storage',  // Direct match
    'pool-cleaning': 'pool-cleaning',          // Direct match
    'tank-cleaning': 'tank-cleaning',          // Direct match
};

// Pre-sorted service keys (longest first) to avoid partial matches
const SORTED_SERVICE_KEYS = Object.keys(SERVICE_ALIASES).sort((a, b) => b.length - a.length);

// ════════════════════════════════════════════════════════════════
// 🔄 LEGACY DOMAIN REDIRECT RESOLUTION ENGINE
// Maps prokr.com/net/org paths → prokr.co equivalents
// Covers: static pages, blog, services, /saudi/{city}/{service},
//         /pricing|deals|faq|emergency/{service}/{city}
// ════════════════════════════════════════════════════════════════

const ACQUISITION_PAGE = '/corporate/acquisition';

// prokr.com city slug → prokr.co city slug
const LEGACY_CITY_MAP: Record<string, string | null> = {
    'riyadh': 'riyadh', 'jeddah': 'jeddah', 'makkah': 'makkah',
    'madinah': 'madinah', 'dammam': 'dammam', 'khobar': 'al-khobar',
    'dhahran': 'dhahran', 'tabuk': 'tabuk', 'taif': 'taif',
    'hail': 'hail', 'jubail': 'jubail', 'abha': 'abha',
    'khamis-mushait': 'khamis-mushait', 'najran': 'najran',
    'jazan': 'jazan', 'yanbu': 'yanbu', 'al-ahsa': 'al-ahsa',
    'qatif': 'qatif', 'buraydah': 'buraidah', 'hafr-al-batin': 'hafr-albatin',
    'al-bahah': 'al-baha', 'onaizah': 'onizah', 'al-majmah': 'majmaah',
    'ras-tanura': 'ras-tanura', 'rabigh': 'rabigh',
    // No equivalent on prokr.co
    'sakaka': null, 'arar': null, 'wadi-ad-dawasir': null,
    'az-zulfi': null, 'safwa': null, 'sayhat': null,
    'muhayil': null, 'bisha': null, 'umluj': null,
    'duba': null, 'tayma': null, 'al-lith': null, 'alqunfudhah': null,
};

// prokr.com service slug → prokr.co service slug
const LEGACY_SERVICE_MAP: Record<string, string | null> = {
    'moving': 'furniture-moving', 'cleaning': 'cleaning',
    'pest-control': 'pest-control', 'leaks-plumbing': 'water-leak-detection',
    'ac': 'air-conditioner-cleaning', 'landscaping': 'landscaping',
    'insulation-roofs': 'roof-insulation',
    // No equivalent
    'electricity': null, 'painting-gypsum': null, 'carpentry': null,
    'aluminum-glass': null, 'flooring': null, 'appliances': null,
    'car-towing': null,
};

// prokr.com sub-service slug → prokr.co service slug
const LEGACY_SUB_SERVICE_MAP: Record<string, string | null> = {
    // Moving
    'city-to-city': 'intercity-moving', 'apartment-moving': 'furniture-moving',
    'villa-moving': 'furniture-moving', 'office-moving': 'furniture-moving',
    'storage': 'furniture-storage', 'crane-lifting': 'heavy-equipment-moving',
    'furniture-packing': 'furniture-packaging', 'moving-boxes': 'furniture-packaging',
    'disassembly-assembly': 'furniture-moving', 'insurance-warranty': 'furniture-moving',
    // Cleaning
    'deep-cleaning': 'deep-cleaning', 'sanitization': 'sanitization',
    'sofa-curtains': 'sofa-cleaning', 'carpet-rug': 'carpet-cleaning',
    'marble-polishing': 'marble-polishing', 'facade-cleaning': 'glass-facades-cleaning',
    'hourly-cleaning': 'hourly-cleaning', 'tank-cleaning': 'tanks-cleaning',
    'post-construction': 'post-construction-cleaning',
    // Pest control
    'termites': 'termite-control', 'cockroaches': 'cockroach-control',
    'bed-bugs': 'bedbugs-control', 'rodents': 'rodent-control',
    'ants': 'ants-control', 'general-spray': 'pesticide-spraying',
    'annual-contracts': 'pest-control', 'municipality-certificate': 'pest-control',
    // Leaks/plumbing
    'acoustic-leak-detection': 'water-leak-detection',
    'thermal-leak-detection': 'water-leak-detection',
    'tank-leaks': 'tank-leak-detection', 'drain-unclogging': 'sewage-unblocking',
    'pipe-repair': 'plumbing', 'pumps-valves': 'plumbing',
    'bathroom-kitchen-waterproofing': 'bathroom-leak-detection',
    // AC
    'split-ac-cleaning': 'air-conditioner-cleaning',
    'maintenance-repair': 'ac-maintenance', 'ac-installation': 'ac-installation',
    'duct-cleaning': 'air-conditioner-cleaning',
    'freon-refill': 'ac-maintenance', 'unit-relocation': 'ac-maintenance',
    // Insulation
    'thermal-insulation': 'thermal-insulation', 'water-proofing': 'water-insulation',
    'foam-bitumen': 'foam-insulation', 'cracks-treatment': 'roof-insulation',
    // No equivalent (electricity, painting, carpentry, aluminum, flooring, appliances, car-towing)
    'wiring-lighting': null, 'panels-distribution': null, 'electrical-faults': null,
    'cctv-systems': null, 'interior-painting': null, 'exterior-painting': null,
    'wallpaper': null, 'gypsum-board': null, 'decor': null,
    'doors-windows': null, 'furniture-repair': null, 'kitchen-cabinets': null,
    'bedrooms': null, 'aluminum-windows-doors': null, 'glass-facades': null,
    'shades-curtains': null, 'parquet-vinyl': null, 'marble-granite': null,
    'ceramic-porcelain': null, 'grinding-polishing': null,
    'garden-design': 'landscaping', 'palm-trees': 'landscaping',
    'lawn-mowing': 'landscaping', 'irrigation-systems': 'landscaping',
    'refrigerators': null, 'washing-machines': null, 'ovens-stoves': null,
    'dryers': null, 'city-towing': null, 'intercity-towing': null,
    'luxury-car-transport': null,
};

// Static page mapping: prokr.com path → prokr.co path
const LEGACY_STATIC_MAP: Record<string, string> = {
    '/': ACQUISITION_PAGE,
    '/about': '/about-us',
    '/contact': '/contact-us',
    '/privacy': '/privacy-policy',
    '/terms': '/terms-of-service',
    '/providers': ACQUISITION_PAGE,
    '/coverage': '/locations',
    '/service-area': '/locations',
    '/faqs': ACQUISITION_PAGE,
    '/deals': ACQUISITION_PAGE,
    '/pricing': ACQUISITION_PAGE,
    '/emergency': ACQUISITION_PAGE,
    '/saudi': '/locations',
    '/services': '/services-page',
};

/**
 * Resolve a legacy prokr.com pathname to its prokr.co equivalent.
 * Priority: static → blog → services → /saudi/{city}/{service}/{sub}
 *           → /pricing|deals|faq|emergency/{service}/{city}
 * Fallback: /corporate/acquisition
 */
function resolveLegacyDomainPath(pathname: string): string {
    const path = pathname.replace(/\/+$/, '') || '/'; // normalize trailing slashes

    // 1. Static pages
    if (LEGACY_STATIC_MAP[path] !== undefined) return LEGACY_STATIC_MAP[path];

    // 2. Blog
    if (path === '/blog') return '/blog';
    if (path.startsWith('/blog/')) return '/blog';

    // 3. Services pages
    if (path.startsWith('/services')) return '/services-page';

    // 4. /saudi/{city}/{service}/{sub-service}
    const saudiSubMatch = path.match(/^\/saudi\/([^/]+)\/([^/]+)\/([^/]+)$/);
    if (saudiSubMatch) {
        const [, city, service, subService] = saudiSubMatch;
        const mappedCity = LEGACY_CITY_MAP[city];
        const mappedSub = LEGACY_SUB_SERVICE_MAP[subService];
        const mappedService = LEGACY_SERVICE_MAP[service];
        if (mappedCity && mappedSub) return `/${mappedCity}/${mappedSub}`;
        if (mappedCity && mappedService) return `/${mappedCity}/${mappedService}`;
        if (mappedCity) return `/${mappedCity}`;
        return ACQUISITION_PAGE;
    }

    // 5. /saudi/{city}/{service}
    const saudiServiceMatch = path.match(/^\/saudi\/([^/]+)\/([^/]+)$/);
    if (saudiServiceMatch) {
        const [, city, service] = saudiServiceMatch;
        const mappedCity = LEGACY_CITY_MAP[city];
        const mappedService = LEGACY_SERVICE_MAP[service];
        if (mappedCity && mappedService) return `/${mappedCity}/${mappedService}`;
        if (mappedCity) return `/${mappedCity}`;
        return ACQUISITION_PAGE;
    }

    // 6. /saudi/{city}
    const saudiCityMatch = path.match(/^\/saudi\/([^/]+)$/);
    if (saudiCityMatch) {
        const mappedCity = LEGACY_CITY_MAP[saudiCityMatch[1]];
        return mappedCity ? `/${mappedCity}` : ACQUISITION_PAGE;
    }

    // 7. /pricing|deals|faq|emergency/{service}/{city}
    const contextMatch = path.match(/^\/(pricing|deals|faq|emergency)\/([^/]+)\/([^/]+)$/);
    if (contextMatch) {
        const [, , service, city] = contextMatch;
        const mappedCity = LEGACY_CITY_MAP[city];
        const mappedService = LEGACY_SERVICE_MAP[service];
        if (mappedCity && mappedService) return `/${mappedCity}/${mappedService}`;
        if (mappedCity) return `/${mappedCity}`;
        return ACQUISITION_PAGE;
    }

    // 8. /pricing|deals|faq|emergency/{service}
    if (path.match(/^\/(pricing|deals|faq|emergency)\/[^/]+$/)) return ACQUISITION_PAGE;

    // 9. Catch-all → acquisition page
    return ACQUISITION_PAGE;
}

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
    // 📄 Markdown Content Negotiation (Cloudflare "Markdown for Agents")
    // When Accept: text/markdown is present, rewrite to markdown handler.
    // Must fire before Phoenix Protocol so agents get clean markdown.
    // ════════════════════════════════════════════════════════════════
    const accept = request.headers.get('accept') || '';
    if (
        accept.includes('text/markdown') &&
        !pathname.startsWith('/api/') &&
        !pathname.startsWith('/_next') &&
        !pathname.startsWith('/.well-known')
    ) {
        const mdUrl = request.nextUrl.clone();
        mdUrl.pathname = `/api/markdown-negotiate${pathname === '/' ? '/index' : pathname}`;
        return NextResponse.rewrite(mdUrl);
    }

    // ════════════════════════════════════════════════════════════════
    // 🪓 PHOENIX PROTOCOL §1: Internal 410 Guillotine
    // Kill WordPress/CMS junk paths on prokr.co ITSELF.
    // These legacy paths must return 410 Gone (not redirect)
    // to purge toxic anchor text from Google's index.
    // ════════════════════════════════════════════════════════════════
    const INTERNAL_JUNK = ['/category/', '/tag/', '/author/', '/page/', '/wp-content/', '/wp-admin/', '/wp-includes/', '/wp-json/'];
    if (
        INTERNAL_JUNK.some(p => pathname.includes(p)) ||
        pathname.match(/\.(php|htm)$/i) ||
        (pathname.endsWith('.html') && !pathname.startsWith('/_next'))
    ) {
        return new NextResponse('410 Gone — Asset Purged', {
            status: 410,
            headers: {
                'X-Robots-Tag': 'noindex, nofollow',
                'Cache-Control': 'public, max-age=31536000, immutable',
            },
        });
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
        !pathname.startsWith('/images/') &&
        !pathname.startsWith('/.well-known')
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
    // 🔄 LEGACY DOMAIN REDIRECT ENGINE — prokr.com/net/org → prokr.co
    // Intelligent per-URL 301 redirect that maps each legacy path to
    // its exact equivalent on prokr.co for maximum SEO equity transfer.
    // Architecture: Service Map + City Map + Sub-service Map → smart resolve
    // Fallback: /corporate/acquisition (AcquireAction schema page)
    // ════════════════════════════════════════════════════════════════
    const legacyDomains = [
        'prokr.com', 'prokr.net', 'prokr.org',
        'www.prokr.com', 'www.prokr.net', 'www.prokr.org',
    ];

    if (legacyDomains.some(domain => hostname.includes(domain))) {
        // Return 410 for legacy static files (sitemaps, robots, PHP junk)
        if (pathname.match(/\.(xml|txt|php|html)$/i)) {
            return new NextResponse('Gone', {
                status: 410,
                headers: {
                    'X-Robots-Tag': 'noindex, nofollow',
                    'Cache-Control': 'public, max-age=31536000, immutable',
                },
            });
        }

        // ── Resolve legacy path → prokr.co path ──
        const resolvedPath = resolveLegacyDomainPath(pathname);
        const redirectUrl = new URL(resolvedPath, 'https://prokr.co');
        return NextResponse.redirect(redirectUrl, 301);
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

        // If /ksa with no slug, redirect to services hub (not homepage — Phoenix Protocol)
        if (ksaSegments.length === 0) {
            const url = request.nextUrl.clone();
            url.pathname = '/services-page';
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

        // No match found — redirect to services hub (Phoenix Protocol: protect homepage)
        const url = request.nextUrl.clone();
        url.pathname = '/services-page';
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
    // Legacy non-/ksa/ paths — Phoenix Protocol Hardening
    // WordPress blog + hacked spam → 410 Gone (purge from index)
    // Legitimate legacy shortlinks → contextual redirect
    // ════════════════════════════════════════════════════════════════
    if (pathname.startsWith('/2016/') || pathname.startsWith('/how-to/')) {
        // Old WordPress blog + hacked spam → 410 Gone (not redirect!)
        return new NextResponse('410 Gone — Legacy Content Purged', {
            status: 410,
            headers: {
                'X-Robots-Tag': 'noindex, nofollow',
                'Cache-Control': 'public, max-age=31536000, immutable',
            },
        });
    }
    if (pathname === '/nakl-madina') {
        // Legitimate old shortlink for Madinah furniture moving
        const url = request.nextUrl.clone();
        url.pathname = '/madinah/furniture-moving';
        return NextResponse.redirect(url, 301);
    }
    if (pathname.startsWith('/al-safrat-movers')) {
        // Al-Safrat was a Riyadh-based moving company brand
        const url = request.nextUrl.clone();
        url.pathname = '/riyadh/furniture-moving';
        return NextResponse.redirect(url, 301);
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
    // 🌪️ PHOENIX PROTOCOL §2: Contextual Dilution (301)
    // Root-level legacy paths containing a city name → city hub.
    // This creates a "Contextual Mismatch" that passes PageRank
    // but drops the toxic anchor text (per engineer's protocol).
    // e.g., /cleaning-riyadh → /riyadh (NOT /riyadh/cleaning)
    // ════════════════════════════════════════════════════════════════
    if (segments.length === 1 && firstSegment) {
        // Check direct city slugs embedded in the path
        for (const city of citySlugs) {
            if (firstSegment.includes(city) && firstSegment !== city && city.length >= 4) {
                const dilutionUrl = request.nextUrl.clone();
                dilutionUrl.pathname = `/${city}`;
                return NextResponse.redirect(dilutionUrl, 301);
            }
        }
        // Check city aliases (old spellings like al-taif, mecca, etc.)
        for (const [alias, canonical] of Object.entries(CITY_ALIASES)) {
            if (alias.length >= 4 && firstSegment.includes(alias) && firstSegment !== alias) {
                const dilutionUrl = request.nextUrl.clone();
                dilutionUrl.pathname = `/${canonical}`;
                return NextResponse.redirect(dilutionUrl, 301);
            }
        }
    }

    // ════════════════════════════════════════════════════════════════
    // 🛡️ PHOENIX PROTOCOL §3: Last Shield (Catch-All)
    // Any unmatched path → /services-page (NOT homepage!)
    // The engineer says: "Redirecting to the services directory is
    // more contextually logical than the homepage, and protects
    // the homepage from toxic contamination."
    // 301 permanent — tells Google this path is DEAD.
    // ════════════════════════════════════════════════════════════════
    const finalFallback = request.nextUrl.clone();
    finalFallback.pathname = '/services-page';
    return NextResponse.redirect(finalFallback, 301);
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
