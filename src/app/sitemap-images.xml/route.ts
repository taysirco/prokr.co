import { CITIES, SERVICES, SERVICE_IMAGES, getServiceImage } from '@/lib/seed';
import { getServiceKeywordProfile, getCityKeyword } from '@/lib/keyword-strategy';
import { hasPageOverride } from '@/lib/overrides/registry';
import { isAbsorbedSlug } from '@/lib/services/super-page-groups';

const BASE_URL = 'https://prokr.co';

export async function GET() {
    const now = new Date().toISOString();

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

    // Silo pages (city + service) with their images — only canonical pages with overrides
    for (const city of CITIES) {
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
