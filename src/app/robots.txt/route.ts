import { NextResponse } from 'next/server';

/**
 * robots.txt — Route Handler (raw text/plain)
 * 
 * We use a raw route handler instead of Next.js's MetadataRoute.Robots
 * typed export because it doesn't support:
 *   1. Content-Signal directives (contentsignals.org)
 *   2. Custom comments/documentation
 *
 * Strategy per Blueprint §14 + §33.4:
 *   - Allow: GPTBot, ChatGPT-User, Claude-Web, PerplexityBot (citation agents)
 *   - Block: Google-Extended, CCBot, Bytespider, anthropic-ai (training-only)
 *   - Block: SemrushBot, AhrefsBot, MJ12bot (competitor scrapers)
 *
 * ⚠️ IMPORTANT: Cloudflare "AI Scrapers and Crawlers" setting PREPENDS
 * its own Disallow rules for GPTBot, ClaudeBot, etc. BEFORE this output.
 * FIX: Go to Cloudflare Dashboard → Security → Bots → AI Scrapers
 *      and DISABLE "Block AI Scrapers and Crawlers".
 */

export const revalidate = 86400; // Revalidate every 24h

export function GET() {
    const baseUrl = 'https://prokr.co';

    const robotsTxt = `# ══════════════════════════════════════════
# Prokr.co — Robots.txt
# دليل الخدمات السعودي الشامل
# ══════════════════════════════════════════

# ── Content Signals (contentsignals.org) ──
# Declares AI content usage preferences per IETF Draft
Content-Signal: search=yes, ai-train=no, ai-input=yes

# ── Default: Allow crawling except internal paths ──
User-Agent: *
Allow: /
Allow: /api/sitemap-index
Allow: /api/sitemap/
Disallow: /admin
Disallow: /api/
Disallow: /search
Disallow: /_next/
Disallow: /test-buttons

# ── Search Engines (Full Access) ──
User-Agent: Googlebot
Allow: /
Allow: /api/sitemap-index
Allow: /api/sitemap/
Disallow: /admin
Disallow: /search
Disallow: /_next/

User-Agent: Bingbot
Allow: /
Allow: /api/sitemap-index
Allow: /api/sitemap/
Disallow: /admin
Disallow: /search
Disallow: /_next/

# ── AI Agents: Allow crawling for citations (§14) ──
User-Agent: GPTBot
Allow: /
Disallow: /admin
Disallow: /api/
Disallow: /search

User-Agent: ChatGPT-User
Allow: /
Disallow: /admin
Disallow: /api/
Disallow: /search

User-Agent: ClaudeBot
Allow: /
Disallow: /admin
Disallow: /api/
Disallow: /search

User-Agent: Claude-User
Allow: /
Disallow: /admin
Disallow: /api/
Disallow: /search

User-Agent: PerplexityBot
Allow: /
Disallow: /admin
Disallow: /api/
Disallow: /search

User-Agent: Applebot-Extended
Allow: /
Disallow: /admin
Disallow: /api/
Disallow: /search

# ── Google-Extended: ALLOW — preserves Gemini Apps / Vertex AI grounding &
# citation eligibility (AI Overviews use the Googlebot index, unaffected either
# way). Training preference is declared via the Content-Signal header above
# (ai-train=no), so there is no need to hard-block this UA. ──
User-Agent: Google-Extended
Allow: /
Disallow: /admin
Disallow: /api/
Disallow: /search

# ── Training-Only Crawlers: BLOCKED (§33.4 Anti-AI Vampire Shield) ──
User-Agent: CCBot
Disallow: /

User-Agent: Bytespider
Disallow: /

User-Agent: anthropic-ai
Disallow: /

# ── Scraper Bots: BLOCKED ──
User-Agent: SemrushBot
Disallow: /

User-Agent: MJ12bot
Disallow: /

# ── Sitemaps (the index enumerates active child sitemaps dynamically) ──
Sitemap: ${baseUrl}/api/sitemap-index
`;

    return new NextResponse(robotsTxt, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=86400, s-maxage=86400',
        },
    });
}
