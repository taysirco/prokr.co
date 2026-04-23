import { MetadataRoute } from 'next';
import { CITIES, SERVICES } from '@/lib/seed';
import { SUB_REGIONS } from '@/lib/sub-regions';
import { BLOG_ARTICLES } from '@/lib/blog-data';
import { hasPageOverride } from '@/lib/overrides/registry';
import { isAbsorbedSlug } from '@/lib/services/super-page-groups';

// ═══════════════════════════════════════════════════════════════
// CRITICAL: Force dynamic generation so sitemap reflects current
// date for Fibonacci drip progression. Without this, Next.js
// generates the sitemap at build time and it stays static/empty.
// Revalidate every hour to gradually reveal pages.
// ═══════════════════════════════════════════════════════════════
export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Regenerate every hour

const BASE_URL = 'https://prokr.co';

// ═══════════════════════════════════════════════════════════════
// FIBONACCI CRAWL-DRIP SYSTEM — §33.10 Omega Launch Protocol
// Gradually reveals pages to search engines to mimic organic
// human-paced growth and avoid SpamBrain Spike_Anomaly_Filter.
// 
// HOW IT WORKS:
// - Days 0:   4 cities (Riyadh, Jeddah, Dammam, Makkah)
// - Days 1-2: 9 cities
// - Days 3-4: 14 cities + blog opens
// - Days 5-7: 25 cities + Super Pages (silo) open
// - Days 8-9: ALL cities + all silo pages
// - Day 10+:  Sub-regions open
// - Day 14+:  Everything fully visible
//
// UPDATE LAUNCH_DATE TO YOUR ACTUAL LAUNCH DAY:
// ═══════════════════════════════════════════════════════════════
const LAUNCH_DATE = new Date('2026-04-06');

// City priority order — highest traffic cities first
const CITY_PRIORITY_ORDER = [
    // Tier 1: الأربع الكبار (يوم 0)
    'riyadh', 'jeddah', 'dammam', 'makkah',
    // Tier 2: المدن الرئيسية (يوم 1-2)
    'madinah', 'al-khobar', 'dhahran', 'qatif', 'taif',
    // Tier 3: المدن المتوسطة (يوم 3-4)
    'tabuk', 'abha', 'hail', 'jubail', 'buraidah',
    // Tier 4: المدن الثانوية (يوم 5-7)
    'khamis-mushait', 'najran', 'jazan', 'al-ahsa', 'yanbu',
    'al-kharj', 'hafr-albatin', 'al-baha', 'qassim', 'onizah',
    // Tier 5: الباقي (يوم 8+)
    'ar-rass', 'diriyah', 'majmaah', 'rabigh', 'ras-tanura', 'neom',
];

/** Calculate days since launch */
function getDaysSinceLaunch(): number {
    return Math.floor((Date.now() - LAUNCH_DATE.getTime()) / (1000 * 60 * 60 * 24));
}

/** Fibonacci-based city count progression */
function getAllowedCityCount(): number {
    const days = getDaysSinceLaunch();
    if (days < 0) return 0;   // Pre-launch: nothing
    if (days < 1) return 4;   // Day 0: الرياض + جدة + الدمام + مكة
    if (days < 3) return 9;   // Days 1-2
    if (days < 5) return 14;  // Days 3-4
    if (days < 8) return 25;  // Days 5-7
    return 999;                // Day 8+: everything
}

/** Are silo/Super Pages visible yet? (city×service pages) */
function isSiloVisible(): boolean {
    return getDaysSinceLaunch() >= 5;
}

/** Are sub-region/neighborhood pages visible yet? */
function isSubRegionVisible(): boolean {
    return getDaysSinceLaunch() >= 10;
}

/** Is the blog visible yet? */
function isBlogVisible(): boolean {
    return getDaysSinceLaunch() >= 3;
}

/** Filter cities based on priority order and allowed count */
function getVisibleCities() {
    const maxCities = getAllowedCityCount();
    // Sort cities by priority order, then cap at allowed count
    const sorted = [...CITIES].sort((a, b) => {
        const aIdx = CITY_PRIORITY_ORDER.indexOf(a.slug);
        const bIdx = CITY_PRIORITY_ORDER.indexOf(b.slug);
        // Cities not in priority list go to the end
        return (aIdx === -1 ? 999 : aIdx) - (bIdx === -1 ? 999 : bIdx);
    });
    return sorted.slice(0, maxCities);
}

// Service category groupings for sitemap splitting
const SILO_CATEGORIES: Record<string, string[]> = {
    moving: ['furniture-moving', 'furniture-storage', 'dyna', 'international-moving', 'crane-rental'],
    cleaning: SERVICES.filter(s => s.category === 'cleaning').map(s => s.slug),
    pest: SERVICES.filter(s => s.category === 'pest-control').map(s => s.slug),
    leak: SERVICES.filter(s => s.category === 'leak-detection' || s.category === 'insulation').map(s => s.slug),
    sewage: SERVICES.filter(s => s.category === 'sewage').map(s => s.slug),
};

// Sitemap Index: generates valid sitemap XMLs dynamically based on Drip Gate
export async function generateSitemaps() {
    const sitemaps = [{ id: 0 }]; // static + services + cities (drip-controlled)

    if (isSiloVisible()) {
        sitemaps.push({ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 });
    }

    if (isSubRegionVisible()) {
        sitemaps.push({ id: 6 });
    }

    if (isBlogVisible()) {
        sitemaps.push({ id: 7 });
    }

    return sitemaps;
}

export default async function sitemap({ id }: { id: number }): Promise<MetadataRoute.Sitemap> {
    const now = new Date();

    // ── Sitemap 0: Static + Cities + Services ──
    // Cities are drip-controlled by Fibonacci progression
    if (id === 0) {
        const staticPages: MetadataRoute.Sitemap = [
            { url: BASE_URL, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
            { url: `${BASE_URL}/locations`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
            { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
            { url: `${BASE_URL}/about-us`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
            { url: `${BASE_URL}/contact-us`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
            { url: `${BASE_URL}/advertise`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
            { url: `${BASE_URL}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
            { url: `${BASE_URL}/terms-of-service`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
            { url: `${BASE_URL}/research/pricing-index`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
            // Corporate acquisition page — must be indexed for AcquireAction schema (entity transition)
            { url: `${BASE_URL}/corporate/acquisition`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
        ];

        // Fibonacci Drip: only reveal cities based on days since launch
        const visibleCities = getVisibleCities();
        const cityPages: MetadataRoute.Sitemap = visibleCities.map(city => ({
            url: `${BASE_URL}/${city.slug}`,
            lastModified: now,
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        }));

        // Fibonacci Drip: service pages hidden until day 3 to avoid SpamBrain spike
        const servicePages: MetadataRoute.Sitemap = getDaysSinceLaunch() >= 3
            ? SERVICES
                .filter(service => !isAbsorbedSlug(service.slug))
                .map(service => ({
                    url: `${BASE_URL}/${service.slug}`,
                    lastModified: now,
                    changeFrequency: 'weekly' as const,
                    priority: 0.85,
                }))
            : [];

        return [...staticPages, ...cityPages, ...servicePages];
    }

    // ── Sitemaps 1-5: Silo pages by category ──
    // These are city×service Super Pages — only visible from day 5
    const categoryKeys = Object.keys(SILO_CATEGORIES);
    if (id >= 1 && id <= 5) {
        // Fibonacci gate: silo pages hidden until day 5
        if (!isSiloVisible()) return [];

        const categoryKey = categoryKeys[id - 1];
        const categorySlugs = SILO_CATEGORIES[categoryKey] || [];

        // For id=5 (sewage), also include any services not in other categories
        const allCategorizedSlugs = Object.values(SILO_CATEGORIES).flat();
        const slugsForThisSitemap = id === 5
            ? [...categorySlugs, ...SERVICES.filter(s => !allCategorizedSlugs.includes(s.slug)).map(s => s.slug)]
            : categorySlugs;

        // Only include cities that are currently visible
        const visibleCities = getVisibleCities();
        const visibleCitySlugs = new Set(visibleCities.map(c => c.slug));

        const pages: MetadataRoute.Sitemap = [];
        for (const city of CITIES) {
            // Skip cities not yet revealed by Fibonacci drip
            if (!visibleCitySlugs.has(city.slug)) continue;

            for (const serviceSlug of slugsForThisSitemap) {
                // Skip absorbed slugs — they redirect to canonical service pages
                if (isAbsorbedSlug(serviceSlug)) continue;
                if (hasPageOverride(city.slug, serviceSlug)) {
                    pages.push({
                        url: `${BASE_URL}/${city.slug}/${serviceSlug}`,
                        lastModified: now,
                        changeFrequency: 'weekly',
                        priority: 0.9,
                    });
                }
            }
        }
        return pages;
    }

    // ── Sitemap 6: Sub-region pages ──
    // Neighborhood pages — only visible from day 10
    if (id === 6) {
        // Fibonacci gate: sub-regions hidden until day 10
        if (!isSubRegionVisible()) return [];

        const subRegionPages: MetadataRoute.Sitemap = [];
        for (const [citySlug, subRegions] of Object.entries(SUB_REGIONS)) {
            for (const subRegion of subRegions) {
                subRegionPages.push({
                    url: `${BASE_URL}/regions/${citySlug}/${subRegion.slug}`,
                    lastModified: now,
                    changeFrequency: 'weekly',
                    priority: 0.8,
                });
            }
        }
        return subRegionPages;
    }

    // ── Sitemap 7: Blog articles ──
    // Blog opens from day 3 to feed freshness signals
    if (id === 7) {
        // Fibonacci gate: blog hidden until day 3
        if (!isBlogVisible()) return [];

        const blogIndex: MetadataRoute.Sitemap = [
            { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        ];
        const blogPages: MetadataRoute.Sitemap = BLOG_ARTICLES.map(article => ({
            url: `${BASE_URL}/blog/${article.slug}`,
            lastModified: new Date(article.updateDate),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        }));
        return [...blogIndex, ...blogPages];
    }

    return [];
}
