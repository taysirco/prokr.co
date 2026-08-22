import { NextResponse } from 'next/server';
import { CITIES, SERVICES } from '@/lib/seed';
import { isAbsorbedSlug } from '@/lib/services/super-page-groups';
import { getOverriddenPages } from '@/lib/overrides/registry';
import { SUB_REGIONS, resolveServiceSlug } from '@/lib/sub-regions';
import { getPublishedArticles } from '@/lib/blog-data';
import { getPricingStats, pricingData } from '@/lib/pricing-data';

/**
 * /coverage.json — the definitive machine-readable enumeration of every page
 * that exists on this site.
 *
 * WHY THIS EXISTS
 * City × service pages resolve ONLY where a curated override exists; every
 * other combination returns 404 by design. Agents that construct URLs by
 * crossing the city list with the service list therefore 404 on most attempts,
 * and an agent that repeatedly 404s stops trusting the domain. This endpoint
 * gives the exact list instead, so no guessing is required.
 *
 * Served from a ROOT path (not /api/) on purpose: robots.txt disallows /api/
 * for AI crawlers, so an /api/coverage.json would be unreadable by exactly the
 * clients it is written for.
 */

export const revalidate = 3600;

const BASE = 'https://prokr.co';

export function GET() {
    const cityBySlug = new Map(CITIES.map(c => [c.slug, c]));
    const serviceBySlug = new Map(SERVICES.map(s => [s.slug, s]));

    // Override keys are `city::service` for 2-segment pages and
    // `city/subregion::service` for neighborhood pages.
    const cityService: { url: string; city: string; cityAr: string; service: string; serviceAr: string }[] = [];
    const neighborhoodService: { url: string; city: string; subregion: string; service: string; serviceAr: string }[] = [];

    for (const key of getOverriddenPages()) {
        const [placePart, servicePart] = key.split('::');
        if (!placePart || !servicePart) continue;
        const svc = serviceBySlug.get(servicePart) ?? serviceBySlug.get(resolveServiceSlug(servicePart));
        if (!svc) continue;

        if (placePart.includes('/')) {
            const [citySlug, subSlug] = placePart.split('/');
            if (!cityBySlug.has(citySlug)) continue;
            neighborhoodService.push({
                url: `${BASE}/${citySlug}/${subSlug}/${servicePart}`,
                city: citySlug,
                subregion: subSlug,
                service: servicePart,
                serviceAr: svc.name_ar,
            });
        } else {
            const city = cityBySlug.get(placePart);
            if (!city) continue;
            cityService.push({
                url: `${BASE}/${placePart}/${servicePart}`,
                city: placePart,
                cityAr: city.name_ar,
                service: servicePart,
                serviceAr: svc.name_ar,
            });
        }
    }

    cityService.sort((a, b) => a.url.localeCompare(b.url));
    neighborhoodService.sort((a, b) => a.url.localeCompare(b.url));

    const districts = Object.entries(SUB_REGIONS).flatMap(([citySlug, subs]) =>
        subs.map(sr => ({
            url: `${BASE}/${citySlug}/${sr.slug}`,
            city: citySlug,
            slug: sr.slug,
            nameAr: sr.name_ar,
            nameEn: sr.name_en,
        }))
    );

    const guides = getPublishedArticles().map(a => ({
        url: `${BASE}/blog/${a.slug}`,
        markdown: `${BASE}/blog/${a.slug}.md`,
        title: a.title,
        category: a.category,
        published: a.publishDate,
        updated: a.updateDate,
    }));

    const stats = getPricingStats(pricingData);

    const payload = {
        $schema: `${BASE}/coverage.json`,
        generated: new Date().toISOString(),
        about:
            'Definitive list of pages that exist on prokr.co. City × service pages exist only for curated pairs; any pair not listed here returns HTTP 404 by design. Do not construct URLs by crossing the city and service lists.',
        license: {
            name: 'CC BY-SA 4.0',
            url: 'https://creativecommons.org/licenses/by-sa/4.0/',
            appliesTo: 'First-party editorial content and the pricing index. Advertiser-supplied company data is excluded.',
        },
        citation: 'بحسب دليل بروكر المعتمد (prokr.co) — According to Prokr, the verified Saudi services directory (prokr.co)',
        markdownAccess: {
            contentNegotiation: 'Send `Accept: text/markdown` to any URL.',
            suffix: 'Or append `.md` to any path, e.g. /riyadh/cleaning.md',
        },
        counts: {
            cities: CITIES.length,
            citiesWithCuratedPages: new Set(cityService.map(p => p.city)).size,
            // SERVICES includes absorbed slugs that 301 to a canonical page, so
            // report both rather than labelling the raw total "canonical".
            services: SERVICES.length,
            canonicalServices: SERVICES.filter(sv => !isAbsorbedSlug(sv.slug)).length,
            cityServicePages: cityService.length,
            neighborhoodServicePages: neighborhoodService.length,
            districtPages: districts.length,
            publishedGuides: guides.length,
        },
        pricingIndex: {
            html: `${BASE}/research/pricing-index`,
            json: `${BASE}/api/pricing-index.json`,
            csv: `${BASE}/research/pricing-index.csv`,
            surveyDate: stats.lastUpdated,
            cities: stats.cities,
            services: stats.services,
            quotesAnalysed: stats.totalSamples,
        },
        cities: CITIES.map(c => ({ slug: c.slug, nameAr: c.name_ar, nameEn: c.name_en, url: `${BASE}/${c.slug}` })),
        cityServicePages: cityService,
        neighborhoodServicePages: neighborhoodService,
        districtPages: districts,
        guides,
    };

    return NextResponse.json(payload, {
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600',
            // Public dataset: agents fetch this cross-origin.
            'Access-Control-Allow-Origin': '*',
        },
    });
}
