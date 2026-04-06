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
        sitemap: `${baseUrl}/sitemap/0.xml`,
    };
}
