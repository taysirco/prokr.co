import { NextResponse } from 'next/server';
import { CITIES, SERVICES } from '@/lib/seed';
import { SUB_REGIONS } from '@/lib/sub-regions';
import { BLOG_ARTICLES } from '@/lib/blog-data';
import { hasPageOverride } from '@/lib/overrides/registry';
import { isAbsorbedSlug } from '@/lib/services/super-page-groups';

// ═══════════════════════════════════════════════════════════════
// DYNAMIC SITEMAP API ROUTE — replaces static sitemap.ts
// 
// Next.js metadata route sitemap.ts generates STATICALLY at build
// time despite force-dynamic. This API route is TRULY dynamic,
// computed on every request based on days since launch.
// ═══════════════════════════════════════════════════════════════

export const dynamic = 'force-dynamic';

const BASE_URL = 'https://prokr.co';
const LAUNCH_DATE = new Date('2026-04-06');

// City priority order — highest traffic cities first
const CITY_PRIORITY_ORDER = [
    'riyadh', 'jeddah', 'dammam', 'makkah',
    'madinah', 'al-khobar', 'dhahran', 'qatif', 'taif',
    'tabuk', 'abha', 'hail', 'jubail', 'buraidah',
    'khamis-mushait', 'najran', 'jazan', 'al-ahsa', 'yanbu',
    'al-kharj', 'hafr-albatin', 'al-baha', 'qassim', 'onizah',
    'ar-rass', 'diriyah', 'majmaah', 'rabigh', 'ras-tanura', 'neom',
];

// Service category groupings for sitemap splitting
const SILO_CATEGORIES: Record<string, string[]> = {
    moving: ['furniture-moving', 'furniture-storage', 'dyna', 'international-moving', 'crane-rental'],
    cleaning: SERVICES.filter(s => s.category === 'cleaning').map(s => s.slug),
    pest: SERVICES.filter(s => s.category === 'pest-control').map(s => s.slug),
    leak: SERVICES.filter(s => s.category === 'leak-detection' || s.category === 'insulation').map(s => s.slug),
    sewage: SERVICES.filter(s => s.category === 'sewage').map(s => s.slug),
};

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

function getVisibleCities() {
    const maxCities = getAllowedCityCount();
    const sorted = [...CITIES].sort((a, b) => {
        const aIdx = CITY_PRIORITY_ORDER.indexOf(a.slug);
        const bIdx = CITY_PRIORITY_ORDER.indexOf(b.slug);
        return (aIdx === -1 ? 999 : aIdx) - (bIdx === -1 ? 999 : bIdx);
    });
    return sorted.slice(0, maxCities);
}

interface SitemapEntry {
    url: string;
    lastmod: string;
    changefreq: string;
    priority: number;
}

function buildUrlsetXml(entries: SitemapEntry[]): string {
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map(e => `  <url>
    <loc>${e.url}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
}

function generateSitemap0(): SitemapEntry[] {
    const now = new Date().toISOString();
    const days = getDaysSinceLaunch();

    const entries: SitemapEntry[] = [
        { url: BASE_URL, lastmod: now, changefreq: 'daily', priority: 1.0 },
        { url: `${BASE_URL}/locations`, lastmod: now, changefreq: 'weekly', priority: 0.9 },
        { url: `${BASE_URL}/services`, lastmod: now, changefreq: 'weekly', priority: 0.9 },
        { url: `${BASE_URL}/about-us`, lastmod: now, changefreq: 'monthly', priority: 0.7 },
        { url: `${BASE_URL}/contact-us`, lastmod: now, changefreq: 'monthly', priority: 0.7 },
        { url: `${BASE_URL}/advertise`, lastmod: now, changefreq: 'monthly', priority: 0.8 },
        { url: `${BASE_URL}/privacy-policy`, lastmod: now, changefreq: 'yearly', priority: 0.3 },
        { url: `${BASE_URL}/terms-of-service`, lastmod: now, changefreq: 'yearly', priority: 0.3 },
        { url: `${BASE_URL}/research/pricing-index`, lastmod: now, changefreq: 'weekly', priority: 0.9 },
    ];

    // Fibonacci Drip: cities
    const visibleCities = getVisibleCities();
    for (const city of visibleCities) {
        entries.push({ url: `${BASE_URL}/${city.slug}`, lastmod: now, changefreq: 'weekly', priority: 0.8 });
    }

    // Fibonacci Drip: service pages from day 3
    if (days >= 3) {
        for (const service of SERVICES) {
            if (!isAbsorbedSlug(service.slug)) {
                entries.push({ url: `${BASE_URL}/${service.slug}`, lastmod: now, changefreq: 'weekly', priority: 0.85 });
            }
        }
    }

    return entries;
}

function generateSiloSitemap(categoryIndex: number): SitemapEntry[] {
    const days = getDaysSinceLaunch();
    if (days < 5) return [];

    const now = new Date().toISOString();
    const categoryKeys = Object.keys(SILO_CATEGORIES);
    const categoryKey = categoryKeys[categoryIndex];
    const categorySlugs = SILO_CATEGORIES[categoryKey] || [];

    const allCategorizedSlugs = Object.values(SILO_CATEGORIES).flat();
    const slugsForThisSitemap = categoryIndex === 4
        ? [...categorySlugs, ...SERVICES.filter(s => !allCategorizedSlugs.includes(s.slug)).map(s => s.slug)]
        : categorySlugs;

    const visibleCities = getVisibleCities();
    const visibleCitySlugs = new Set(visibleCities.map(c => c.slug));
    const entries: SitemapEntry[] = [];

    for (const city of CITIES) {
        if (!visibleCitySlugs.has(city.slug)) continue;
        for (const serviceSlug of slugsForThisSitemap) {
            if (isAbsorbedSlug(serviceSlug)) continue;
            if (hasPageOverride(city.slug, serviceSlug)) {
                entries.push({ url: `${BASE_URL}/${city.slug}/${serviceSlug}`, lastmod: now, changefreq: 'weekly', priority: 0.9 });
            }
        }
    }
    return entries;
}

function generateSubRegionSitemap(): SitemapEntry[] {
    if (getDaysSinceLaunch() < 10) return [];
    const now = new Date().toISOString();
    const entries: SitemapEntry[] = [];
    for (const [citySlug, subRegions] of Object.entries(SUB_REGIONS)) {
        for (const subRegion of subRegions) {
            entries.push({ url: `${BASE_URL}/regions/${citySlug}/${subRegion.slug}`, lastmod: now, changefreq: 'weekly', priority: 0.8 });
        }
    }
    return entries;
}

function generateBlogSitemap(): SitemapEntry[] {
    if (getDaysSinceLaunch() < 3) return [];
    const now = new Date().toISOString();
    const entries: SitemapEntry[] = [
        { url: `${BASE_URL}/blog`, lastmod: now, changefreq: 'weekly', priority: 0.8 },
    ];
    for (const article of BLOG_ARTICLES) {
        entries.push({ url: `${BASE_URL}/blog/${article.slug}`, lastmod: new Date(article.updateDate).toISOString(), changefreq: 'monthly', priority: 0.7 });
    }
    return entries;
}

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id: idStr } = await params;
    const id = parseInt(idStr, 10);

    let entries: SitemapEntry[];

    switch (id) {
        case 0:
            entries = generateSitemap0();
            break;
        case 1: case 2: case 3: case 4: case 5:
            entries = generateSiloSitemap(id - 1);
            break;
        case 6:
            entries = generateSubRegionSitemap();
            break;
        case 7:
            entries = generateBlogSitemap();
            break;
        default:
            return new NextResponse('Not Found', { status: 404 });
    }

    return new NextResponse(buildUrlsetXml(entries), {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        },
    });
}
