import { NextResponse } from 'next/server';

/**
 * robots.txt — Route Handler (raw text/plain)
 * 
 * We use a raw route handler instead of Next.js's MetadataRoute.Robots
 * typed export because it doesn't support:
 *   1. Content-Signal directives (contentsignals.org)
 *   2. Custom comments/documentation
 *
 * Strategy (updated 2026-07 — MAXIMUM AI VISIBILITY, owner directive):
 *   - Allow EVERY AI crawler: search agents, citation agents, user-triggered
 *     fetchers AND training crawlers (CCBot, anthropic-ai, Bytespider…).
 *     Being inside training corpora = the models natively "know" prokr.co
 *     and can recommend it (ChatGPT/Gemini/Claude/Grok/Llama/AI Overviews).
 *   - Content-Signal: ai-train=yes (was =no under the old anti-scrape shield).
 *   - Block only competitor SEO scrapers: SemrushBot, MJ12bot.
 *
 * ⚠️ IMPORTANT: Cloudflare "AI Scrapers and Crawlers" setting PREPENDS
 * its own Disallow rules for GPTBot, ClaudeBot, etc. BEFORE this output.
 * FIX: Go to Cloudflare Dashboard → Security → Bots → AI Scrapers
 *      and DISABLE "Block AI Scrapers and Crawlers".
 */

export const revalidate = 86400; // Revalidate every 24h

export function GET() {
    const baseUrl = 'https://prokr.co';

    // Every known AI crawler / assistant fetcher gets the same full-access
    // group. One list → no drift between agents.
    const AI_AGENTS = [
        // OpenAI (ChatGPT training, ChatGPT browsing, SearchGPT index)
        'GPTBot', 'ChatGPT-User', 'OAI-SearchBot',
        // Anthropic (Claude training, Claude user fetch, Claude search index, legacy)
        'ClaudeBot', 'Claude-User', 'Claude-SearchBot', 'anthropic-ai',
        // Perplexity (index + user-triggered)
        'PerplexityBot', 'Perplexity-User',
        // Google (Gemini / Vertex grounding) + Apple (Siri / Apple Intelligence)
        'Google-Extended', 'Applebot-Extended',
        // Meta (Llama / Meta AI)
        'Meta-ExternalAgent', 'Meta-ExternalFetcher',
        // Amazon (Alexa / Rufus), DuckDuckGo AI, You.com, Mistral, Cohere, AI2, xAI Grok
        'Amazonbot', 'DuckAssistBot', 'YouBot', 'MistralAI-User', 'cohere-ai', 'AI2Bot', 'GrokBot',
        // Common Crawl (feeds most open-model training sets) + ByteDance
        'CCBot', 'Bytespider',
    ];
    // Public machine-readable endpoints under /api/. These MUST be listed as
    // Allow before the blanket `Disallow: /api/` — under RFC 9309 the longest
    // matching rule wins, so without them the pricing dataset that llms.txt,
    // llms-full.txt, the api-catalog, the MCP card, the agent skills and the
    // Dataset JSON-LD all point agents at is robots-blocked for exactly the
    // agents it was built for.
    const PUBLIC_API_PATHS = [
        '/api/sitemap-index',
        '/api/sitemap/',
        '/api/pricing-index.json',
        // GET returns a schema.org EntryPoint/ReserveAction descriptor with the
        // bookable service and city taxonomy — a genuine agent-discovery
        // document, and advertised in /.well-known/api-catalog.
        '/api/book',
    ];
    const publicApiAllows = PUBLIC_API_PATHS.map(p => `Allow: ${p}`).join('\n');

    // Content signals are per-group: RFC 9309 §2.2 discards any line that
    // appears before the first User-Agent line, so a file-scope declaration is
    // invisible to a strict parser. Repeat it inside every group.
    const CONTENT_SIGNAL = 'Content-Signal: search=yes, ai-train=yes, ai-input=yes';

    const aiGroups = AI_AGENTS.map(ua => `User-Agent: ${ua}
${CONTENT_SIGNAL}
Allow: /
${publicApiAllows}
Disallow: /admin
Disallow: /api/
Disallow: /search`).join('\n\n');

    const robotsTxt = `# ══════════════════════════════════════════
# Prokr.co — Robots.txt
# دليل الخدمات السعودي الشامل
# ══════════════════════════════════════════

# ── Content Signals (contentsignals.org) ──
# Declares AI content usage preferences per IETF Draft
# ai-train=yes (2026-07): maximize presence inside AI model knowledge —
# models that know prokr.co natively can recommend it in answers.
Content-Signal: search=yes, ai-train=yes, ai-input=yes

# ── Default: Allow crawling except internal paths ──
User-Agent: *
${CONTENT_SIGNAL}
Allow: /
${publicApiAllows}
Disallow: /admin
Disallow: /api/
Disallow: /search
Disallow: /_next/
Disallow: /test-buttons

# ── Search Engines (Full Access) ──
User-Agent: Googlebot
${CONTENT_SIGNAL}
Allow: /
${publicApiAllows}
Disallow: /admin
Disallow: /search
Disallow: /_next/

User-Agent: Bingbot
${CONTENT_SIGNAL}
Allow: /
${publicApiAllows}
Disallow: /admin
Disallow: /search
Disallow: /_next/

# ── AI Agents: FULL ACCESS for every AI crawler / assistant / trainer ──
# Search agents + citation agents + user-triggered fetchers + training
# crawlers. Goal: prokr.co is present in every AI index AND inside model
# training corpora, so ChatGPT / Gemini / Claude / Perplexity / Grok /
# Llama / Alexa / Siri can cite AND natively recommend it.
${aiGroups}

# ── Scraper Bots: BLOCKED (competitor SEO tools only) ──
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
