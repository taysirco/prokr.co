import { CITIES, SERVICES, SERVICE_IMAGES, getServiceImage } from '@/lib/seed';
import { getServiceKeywordProfile, getCityKeyword } from '@/lib/locale-formatting';
import { hasPageOverride } from '@/lib/overrides/registry';
import { isAbsorbedSlug } from '@/lib/services/super-page-groups';

const BASE_URL = 'https://prokr.co';

// ═══════════════════════════════════════════════════════════════
// FIBONACCI DRIP GATE — Must mirror sitemap.ts drip logic
// Image sitemap must NOT expose pages before main sitemap does
// ═══════════════════════════════════════════════════════════════
const LAUNCH_DATE = new Date('2026-04-06');

const CITY_PRIORITY_ORDER = [
    'riyadh', 'jeddah', 'dammam', 'makkah',
    'madinah', 'al-khobar', 'dhahran', 'qatif', 'taif',
    'tabuk', 'abha', 'hail', 'jubail', 'buraidah',
    'khamis-mushait', 'najran', 'jazan', 'al-ahsa', 'yanbu',
    'al-kharj', 'hafr-albatin', 'al-baha', 'qassim', 'onizah',
    'ar-rass', 'diriyah', 'majmaah', 'rabigh', 'ras-tanura', 'neom',
];

function getDaysSinceLaunch(): number {
    return Math.floor((Date.now() - LAUNCH_DATE.getTime()) / (1000 * 60 * 60 * 24));
}

function getAllowedCityCount(): number {
    const days = getDaysSinceLaunch();
    if (days < 0) return 0;
    if (days < 1) return 4;
    if (days < 3) return 9;
    if (days < 5) return 14;
    if (days < 8) return 25;
    return 999;
}

export async function GET() {
    const now = new Date().toISOString();
    const days = getDaysSinceLaunch();
    const allowedCount = getAllowedCityCount();

    // Drip gate: silo pages only visible from day 5
    if (days < 5) {
        // Return minimal image sitemap with only city hub images
        let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;
        // Only service hub pages (not city×service) after day 3
        if (days >= 3) {
            for (const service of SERVICES) {
                if (isAbsorbedSlug(service.slug)) continue;
                const images = SERVICE_IMAGES[service.slug] || [getServiceImage(service.slug)];
                const pageUrl = `${BASE_URL}/${service.slug}`;
                xml += `  <url>\n    <loc>${pageUrl}</loc>\n    <lastmod>${now}</lastmod>\n`;
                for (const img of images.slice(0, 3)) {
                    const imgUrl = img.startsWith('http') ? img : `${BASE_URL}${img}`;
                    xml += `    <image:image>\n      <image:loc>${imgUrl}</image:loc>\n      <image:title>${service.name_ar} في السعودية - بروكر</image:title>\n    </image:image>\n`;
                }
                xml += `  </url>\n`;
            }
        }
        xml += `</urlset>`;
        return new Response(xml, {
            headers: {
                'Content-Type': 'application/xml',
                'Cache-Control': 'public, max-age=3600, s-maxage=3600',
            },
        });
    }

    // Day 5+: Full image sitemap with drip-controlled cities
    const visibleCitySlugs = new Set(
        CITY_PRIORITY_ORDER.slice(0, allowedCount)
    );

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

    // Silo pages (city + service) — drip-controlled
    for (const city of CITIES) {
        if (!visibleCitySlugs.has(city.slug)) continue;
        for (const service of SERVICES) {
            if (!hasPageOverride(city.slug, service.slug) || isAbsorbedSlug(service.slug)) continue;
            const images = SERVICE_IMAGES[service.slug] || [getServiceImage(service.slug)];
            const pageUrl = `${BASE_URL}/${city.slug}/${service.slug}`;

            xml += `  <url>
    <loc>${pageUrl}</loc>
    <lastmod>${now}</lastmod>
`;
            for (const img of images.slice(0, 5)) {
                const imgUrl = img.startsWith('http') ? img : `${BASE_URL}${img}`;
                xml += `    <image:image>
      <image:loc>${imgUrl}</image:loc>
      <image:title>${service.name_ar} ${getCityKeyword(city.name_ar, getServiceKeywordProfile(service.slug).cityPrefixPattern)} - بروكر</image:title>
      <image:caption>أفضل شركة ${service.name_ar} ${getCityKeyword(city.name_ar, getServiceKeywordProfile(service.slug).cityPrefixPattern)} - خدمات احترافية ومعتمدة</image:caption>
      <image:geo_location>${city.name_ar}، المملكة العربية السعودية</image:geo_location>
    </image:image>
`;
            }
            xml += `  </url>
`;
        }
    }

    // Service hub pages with their images — only canonical services
    for (const service of SERVICES) {
        if (isAbsorbedSlug(service.slug)) continue;
        const images = SERVICE_IMAGES[service.slug] || [getServiceImage(service.slug)];
        const pageUrl = `${BASE_URL}/${service.slug}`;

        xml += `  <url>
    <loc>${pageUrl}</loc>
    <lastmod>${now}</lastmod>
`;
        for (const img of images.slice(0, 3)) {
            const imgUrl = img.startsWith('http') ? img : `${BASE_URL}${img}`;
            xml += `    <image:image>
      <image:loc>${imgUrl}</image:loc>
      <image:title>${service.name_ar} في السعودية - بروكر</image:title>
      <image:caption>دليل شركات ${service.name_ar} في جميع مدن المملكة العربية السعودية</image:caption>
    </image:image>
`;
        }
        xml += `  </url>
`;
    }

    xml += `</urlset>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        },
    });
}
