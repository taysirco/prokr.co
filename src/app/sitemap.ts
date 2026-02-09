import { MetadataRoute } from 'next';
import { CITIES, SERVICES } from '@/lib/seed';
import { SUB_REGIONS } from '@/lib/sub-regions';
import { BLOG_ARTICLES } from '@/lib/blog-data';

const BASE_URL = 'https://prokr.co';

// Service category groupings for sitemap splitting
const SILO_CATEGORIES: Record<string, string[]> = {
    moving: ['furniture-moving', 'furniture-storage', 'dyna', 'international-moving', 'crane-rental'],
    cleaning: SERVICES.filter(s => s.category === 'cleaning').map(s => s.slug),
    pest: SERVICES.filter(s => s.category === 'pest-control').map(s => s.slug),
    leak: SERVICES.filter(s => s.category === 'leak-detection' || s.category === 'insulation').map(s => s.slug),
    sewage: SERVICES.filter(s => s.category === 'sewage').map(s => s.slug),
};

// Sitemap Index: generates /sitemap/0.xml through /sitemap/7.xml
export async function generateSitemaps() {
    return [
        { id: 0 },  // static + services + cities
        { id: 1 },  // silo: moving
        { id: 2 },  // silo: cleaning
        { id: 3 },  // silo: pest-control
        { id: 4 },  // silo: leak + insulation
        { id: 5 },  // silo: sewage + uncategorized
        { id: 6 },  // sub-regions
        { id: 7 },  // blog articles
    ];
}

export default async function sitemap({ id }: { id: number }): Promise<MetadataRoute.Sitemap> {
    const now = new Date();

    // ── Sitemap 0: Static + Cities + Services ──
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
        ];

        const cityPages: MetadataRoute.Sitemap = CITIES.map(city => ({
            url: `${BASE_URL}/${city.slug}`,
            lastModified: now,
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        }));

        const servicePages: MetadataRoute.Sitemap = SERVICES.map(service => ({
            url: `${BASE_URL}/${service.slug}`,
            lastModified: now,
            changeFrequency: 'weekly' as const,
            priority: 0.85,
        }));

        return [...staticPages, ...cityPages, ...servicePages];
    }

    // ── Sitemaps 1-5: Silo pages by category ──
    const categoryKeys = Object.keys(SILO_CATEGORIES);
    if (id >= 1 && id <= 5) {
        const categoryKey = categoryKeys[id - 1];
        const categorySlugs = SILO_CATEGORIES[categoryKey] || [];

        // For id=5 (sewage), also include any services not in other categories
        const allCategorizedSlugs = Object.values(SILO_CATEGORIES).flat();
        const slugsForThisSitemap = id === 5
            ? [...categorySlugs, ...SERVICES.filter(s => !allCategorizedSlugs.includes(s.slug)).map(s => s.slug)]
            : categorySlugs;

        const pages: MetadataRoute.Sitemap = [];
        for (const city of CITIES) {
            for (const serviceSlug of slugsForThisSitemap) {
                pages.push({
                    url: `${BASE_URL}/${city.slug}/${serviceSlug}`,
                    lastModified: now,
                    changeFrequency: 'weekly',
                    priority: 0.9,
                });
            }
        }
        return pages;
    }

    // ── Sitemap 6: Sub-region pages ──
    if (id === 6) {
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
    if (id === 7) {
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
