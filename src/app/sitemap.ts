import { MetadataRoute } from 'next';
import { CITIES, SERVICES } from '@/lib/seed';
import { SUB_REGIONS } from '@/lib/sub-regions';

const BASE_URL = 'https://prokr.co';

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: now,
            changeFrequency: 'daily',
            priority: 1.0,
        },
        // Note: /services page removed - services are now at root level
        {
            url: `${BASE_URL}/locations`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/about-us`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/contact-us`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/advertise`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/privacy-policy`,
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${BASE_URL}/terms-of-service`,
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ];

    // City hub pages
    const cityPages: MetadataRoute.Sitemap = CITIES.map(city => ({
        url: `${BASE_URL}/${city.slug}`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // Service hub pages
    const servicePages: MetadataRoute.Sitemap = SERVICES.map(service => ({
        url: `${BASE_URL}/${service.slug}`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // All city+service silo pages (the main content)
    const siloPages: MetadataRoute.Sitemap = [];
    for (const city of CITIES) {
        for (const service of SERVICES) {
            siloPages.push({
                url: `${BASE_URL}/${city.slug}/${service.slug}`,
                lastModified: now,
                changeFrequency: 'weekly',
                priority: 0.9,
            });
        }
    }

    // Sub-region pages (neighborhoods)
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

    return [...staticPages, ...cityPages, ...servicePages, ...siloPages, ...subRegionPages];
}
