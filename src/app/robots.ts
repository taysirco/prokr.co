import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://prokr.co';

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/admin', '/api', '/search'],
            },
            {
                userAgent: 'GPTBot',
                allow: '/',
                disallow: ['/admin', '/api', '/search'],
            },
            {
                userAgent: 'ChatGPT-User',
                allow: '/',
                disallow: ['/admin', '/api', '/search'],
            },
            {
                userAgent: 'Claude-Web',
                allow: '/',
                disallow: ['/admin', '/api', '/search'],
            },
            {
                userAgent: 'Applebot-Extended',
                allow: '/',
                disallow: ['/admin', '/api', '/search'],
            },
            {
                userAgent: 'PerplexityBot',
                allow: '/',
                disallow: ['/admin', '/api', '/search'],
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: ['/admin', '/api', '/search'],
            },
            {
                userAgent: 'Bingbot',
                allow: '/',
                disallow: ['/admin', '/api', '/search'],
            },
        ],
        sitemap: [
            // Next.js auto-generates sitemap index at /sitemap.xml
            // which links to all child sitemaps (/sitemap/0.xml through /sitemap/7.xml)
            `${baseUrl}/sitemap.xml`,
            `${baseUrl}/sitemap-images.xml`,
        ],
        host: baseUrl,
    };
}
