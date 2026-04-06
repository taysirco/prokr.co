import { NextResponse } from 'next/server';

// ═══════════════════════════════════════════════════════════════
// SITEMAP INDEX — /api/sitemap-index
// 
// Next.js does NOT auto-generate a sitemap index when using
// generateSitemaps(). This API route creates one that lists
// all active child sitemaps based on the Fibonacci drip.
//
// robots.txt points here, and this redirects Googlebot to
// discover all individual /sitemap/[id].xml files.
// ═══════════════════════════════════════════════════════════════

export const dynamic = 'force-dynamic';
export const revalidate = 3600;

const BASE_URL = 'https://prokr.co';
const LAUNCH_DATE = new Date('2026-04-06');

function getDaysSinceLaunch(): number {
    return Math.floor((Date.now() - LAUNCH_DATE.getTime()) / (1000 * 60 * 60 * 24));
}

export async function GET() {
    const days = getDaysSinceLaunch();

    // Build the list of active sitemap IDs — mirrors generateSitemaps()
    const sitemapIds: number[] = [0]; // Sitemap 0 is always active

    // Silo pages (city×service) from day 5
    if (days >= 5) {
        sitemapIds.push(1, 2, 3, 4, 5);
    }

    // Sub-region pages from day 10
    if (days >= 10) {
        sitemapIds.push(6);
    }

    // Blog from day 3
    if (days >= 3) {
        sitemapIds.push(7);
    }

    const now = new Date().toISOString();

    const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapIds.map(id => `  <sitemap>
    <loc>${BASE_URL}/sitemap/${id}.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>`).join('\n')}
  <sitemap>
    <loc>${BASE_URL}/sitemap-images.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>
</sitemapindex>`;

    return new NextResponse(sitemapIndex, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        },
    });
}
