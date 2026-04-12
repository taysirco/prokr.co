import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://prokr.co';

    return {
        rules: [
            // Default: Allow everything except internal paths
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/admin', '/api/', '/search', '/_next/', '/test-buttons'],
            },
            // ── Search Engines (Full Access) ──
            {
                userAgent: 'Googlebot',
                allow: ['/', '/api/sitemap-index', '/api/sitemap/'],
                disallow: ['/admin', '/search', '/_next/'],
            },
            {
                userAgent: 'Bingbot',
                allow: ['/', '/api/sitemap-index', '/api/sitemap/'],
                disallow: ['/admin', '/search', '/_next/'],
            },
            // ── AI Agents: Allow crawling for citations ──
            // §14 — These agents generate citations in AI answers
            {
                userAgent: 'GPTBot',
                allow: '/',
                disallow: ['/admin', '/api/', '/search'],
            },
            {
                userAgent: 'ChatGPT-User',
                allow: '/',
                disallow: ['/admin', '/api/', '/search'],
            },
            {
                userAgent: 'Claude-Web',
                allow: '/',
                disallow: ['/admin', '/api/', '/search'],
            },
            {
                userAgent: 'PerplexityBot',
                allow: '/',
                disallow: ['/admin', '/api/', '/search'],
            },
            {
                userAgent: 'Applebot-Extended',
                allow: '/',
                disallow: ['/admin', '/api/', '/search'],
            },
            // ── Training-Only Crawlers: BLOCKED ──
            // §33.4 Anti-AI Vampire Shield — prevent free training
            {
                userAgent: 'Google-Extended',
                disallow: '/',
            },
            {
                userAgent: 'CCBot',
                disallow: '/',
            },
            {
                userAgent: 'Bytespider',
                disallow: '/',
            },
            {
                userAgent: 'anthropic-ai',
                disallow: '/',
            },
            // ── Scraper Bots: BLOCKED ──
            {
                userAgent: 'SemrushBot',
                disallow: '/',
            },
            {
                userAgent: 'AhrefsBot',
                disallow: '/',
            },
            {
                userAgent: 'MJ12bot',
                disallow: '/',
            },
        ],
        sitemap: [
            `${baseUrl}/api/sitemap-index`,
            `${baseUrl}/api/sitemap/0`,
            `${baseUrl}/api/sitemap/1`,
            `${baseUrl}/api/sitemap/2`,
            `${baseUrl}/api/sitemap/3`,
            `${baseUrl}/api/sitemap/4`,
            `${baseUrl}/api/sitemap/5`,
            `${baseUrl}/api/sitemap/7`,
        ],
        host: baseUrl,
    };
}
