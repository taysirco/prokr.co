import { NextResponse } from 'next/server';

/**
 * API Catalog — /.well-known/api-catalog
 * 
 * RFC 9727 — Well-Known URI for API Discovery
 * Format: application/linkset+json (RFC 9264)
 * 
 * Enables AI agents and automated tooling to discover
 * all public APIs offered by Prokr.co.
 */

export const revalidate = 86400; // 24h ISR

export function GET() {
    const catalog = {
        linkset: [
            {
                anchor: 'https://prokr.co/api/sitemap-index',
                'service-desc': [
                    {
                        href: 'https://prokr.co/api/sitemap-index',
                        type: 'application/xml',
                    },
                ],
                'service-doc': [
                    {
                        href: 'https://prokr.co/llms.txt',
                        type: 'text/plain',
                    },
                ],
                title: 'Prokr Sitemap API — XML sitemaps for all service/city pages',
            },
            {
                anchor: 'https://prokr.co/api/pricing-index.json',
                'service-desc': [
                    {
                        href: 'https://prokr.co/api/pricing-index.json',
                        type: 'application/json',
                    },
                ],
                'service-doc': [
                    {
                        href: 'https://prokr.co/research/pricing-index',
                        type: 'text/html',
                    },
                ],
                title: 'Prokr Pricing Index — Quarterly updated pricing benchmarks for Saudi home services',
            },
            {
                anchor: 'https://prokr.co/api/book',
                'service-desc': [
                    {
                        href: 'https://prokr.co/api/book',
                        type: 'application/json',
                    },
                ],
                'service-doc': [
                    {
                        href: 'https://prokr.co/llms.txt',
                        type: 'text/plain',
                    },
                ],
                title: 'Prokr Booking API — Request service quotes from verified providers',
            },
            {
                anchor: 'https://prokr.co/llms.txt',
                'service-doc': [
                    {
                        href: 'https://prokr.co/llms.txt',
                        type: 'text/plain',
                    },
                ],
                title: 'Prokr LLM Knowledge Base — Structured site index for AI crawlers',
            },
        ],
    };

    return NextResponse.json(catalog, {
        headers: {
            'Content-Type': 'application/linkset+json; profile="https://www.rfc-editor.org/info/rfc9727"',
        },
    });
}
