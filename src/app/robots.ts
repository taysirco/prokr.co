import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://prokr.co';

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/admin', '/api'],
                crawlDelay: 1,
            },
            {
                userAgent: 'GPTBot',
                allow: '/',
                disallow: ['/admin', '/api'],
            },
            {
                userAgent: 'ChatGPT-User',
                allow: '/',
                disallow: ['/admin', '/api'],
            },
            {
                userAgent: 'Claude-Web',
                allow: '/',
                disallow: ['/admin', '/api'],
            },
            {
                userAgent: 'Applebot-Extended',
                allow: '/',
                disallow: ['/admin', '/api'],
            },
            {
                userAgent: 'PerplexityBot',
                allow: '/',
                disallow: ['/admin', '/api'],
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: ['/admin', '/api'],
            },
            {
                userAgent: 'Bingbot',
                allow: '/',
                disallow: ['/admin', '/api'],
            },
        ],
        sitemap: [
            `${baseUrl}/sitemap.xml`,
            `${baseUrl}/sitemap-images.xml`,
        ],
    };
}
