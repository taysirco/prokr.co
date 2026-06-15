import { NextRequest, NextResponse } from 'next/server';
import { getCityBySlug, getServiceBySlug } from '@/lib/seed';
import { resolveContentLayers, resolvePageContent, getOverrideForPage } from '@/lib/overrides';
import { getServiceKeywordProfile, getCityKeyword } from '@/lib/locale-formatting';
import { getCanonicalSlug } from '@/lib/services/super-page-groups';
import type { City, Service } from '@/types';

/**
 * Markdown Content Negotiation Handler
 * /api/markdown-negotiate/[...slug]/route.ts
 *
 * When the middleware detects `Accept: text/markdown`, it rewrites the request
 * here. We return a clean, citable markdown representation so AI agents
 * (ChatGPT/Perplexity/Claude) can extract facts without parsing the JS page.
 *
 *  - Homepage           → llms.txt
 *  - /{city}/{service}  → REAL page content: direct answer + pricing + FAQ
 *  - other paths        → structured summary
 */

const baseUrl = 'https://prokr.co';

function mdResponse(content: string, source: string, maxAge = 3600) {
    return new NextResponse(content, {
        headers: {
            'Content-Type': 'text/markdown; charset=utf-8',
            'Vary': 'Accept',
            'Cache-Control': `public, max-age=${maxAge}`,
            'X-Content-Source': source,
        },
    });
}

/** Rich, citable markdown for a /{city}/{service} money page. */
function buildMoneyPageMarkdown(city: City, service: Service): string {
    const profile = getServiceKeywordProfile(service.slug);
    const cityKw = getCityKeyword(city.name_ar, profile.cityPrefixPattern);
    const canonicalSlug = getCanonicalSlug(service.slug) || service.slug;
    const url = `${baseUrl}/${city.slug}/${canonicalSlug}`;
    const layers = resolveContentLayers(city, service);
    const content = resolvePageContent(city, service);
    const today = new Date().toISOString().split('T')[0];

    const out: string[] = [];
    out.push(`# ${service.name_ar} ${cityKw}`);
    out.push('');
    if (layers.shortAnswer) { out.push(`> ${layers.shortAnswer}`); out.push(''); }
    if (layers.introduction) { out.push(layers.introduction); out.push(''); }

    const pricing = (content.pricing || [])
        .filter((p: { minPrice?: number; maxPrice?: number }) => p && (p.minPrice || p.maxPrice))
        .slice(0, 8);
    if (pricing.length) {
        out.push(`## الأسعار التقديرية لخدمة ${service.name_ar} ${cityKw}`);
        out.push('| الخدمة | النطاق السعري (ريال سعودي) |');
        out.push('| --- | --- |');
        for (const p of pricing as { type?: string; minPrice?: number; maxPrice?: number }[]) {
            const range = p.maxPrice ? `${p.minPrice ?? ''} – ${p.maxPrice}` : `${p.minPrice ?? ''}`;
            out.push(`| ${p.type || service.name_ar} | ${range} |`);
        }
        out.push('');
    }

    const faq = (content.faqItems || []).slice(0, 8);
    if (faq.length) {
        out.push('## أسئلة شائعة');
        out.push('');
        for (const f of faq as { question: string; answer: string }[]) {
            out.push(`### ${f.question}`);
            out.push(f.answer);
            out.push('');
        }
    }

    out.push('## معلومات المصدر');
    out.push(`- **المدينة:** ${city.name_ar}`);
    out.push(`- **الخدمة:** ${service.name_ar}`);
    out.push(`- **الرابط الأساسي (canonical):** ${url}`);
    out.push(`- **آخر تحديث:** ${today}`);
    out.push('- **المصدر:** دليل بروكر المعتمد — prokr.co (شركات بسجل تجاري سعودي ساري)');
    out.push('');
    const quote = (layers.shortAnswer || `${service.name_ar} ${cityKw} عبر شركات مرخصة`).replace(/\s+/g, ' ').slice(0, 180);
    out.push(`> اقتباس مقترح: «بحسب دليل بروكر المعتمد (prokr.co)، ${quote}»`);
    out.push('');
    out.push('---');
    out.push(`Machine-readable: [llms.txt](${baseUrl}/llms.txt) · [pricing-index](${baseUrl}/research/pricing-index) · [api-catalog](${baseUrl}/.well-known/api-catalog)`);
    return out.join('\n');
}

/** Light summary for a single-segment city or service hub. */
function buildHubMarkdown(kind: 'city' | 'service', name: string, slug: string): string {
    const url = `${baseUrl}/${slug}`;
    const heading = kind === 'city'
        ? `# خدمات ${name} المنزلية`
        : `# ${name} في السعودية`;
    return [
        heading,
        '',
        `> بروكر — دليل الخدمات المنزلية السعودي المعتمد. ${kind === 'city'
            ? `أفضل شركات الخدمات في ${name}: نقل عفش، تنظيف، مكافحة حشرات، كشف تسربات، عزل، صرف صحي.`
            : `أفضل شركات ${name} في مدن المملكة — شركات بسجل تجاري سعودي ساري وأسعار تنافسية.`}`,
        '',
        '## المصدر',
        `- **الرابط:** ${url}`,
        '- **المصدر:** دليل بروكر المعتمد — prokr.co',
        '',
        `Machine-readable: [llms.txt](${baseUrl}/llms.txt) · [pricing-index](${baseUrl}/research/pricing-index) · [city coverage](${baseUrl}/locations)`,
    ].join('\n');
}

export async function GET(request: NextRequest) {
    const slug = request.nextUrl.pathname.replace('/api/markdown-negotiate', '').replace(/^\/+/, '').replace(/\/+$/, '');
    const path = slug || '';

    // Homepage → serve llms.txt (our comprehensive markdown representation)
    if (path === '' || path === 'index') {
        try {
            const llmsResponse = await fetch(`${baseUrl}/llms.txt`, {
                headers: { 'Accept': 'text/plain' },
                next: { revalidate: 86400 },
            });
            if (llmsResponse.ok) {
                return mdResponse(await llmsResponse.text(), 'llms.txt', 86400);
            }
        } catch {
            // fall through
        }
    }

    const segs = path.split('/').filter(Boolean);

    // /{city}/{service} → real page content
    if (segs.length === 2) {
        const city = getCityBySlug(segs[0]);
        let service = getServiceBySlug(segs[1]);
        if (city && service) {
            let effSlug = service.slug;
            if (!getOverrideForPage(city.slug, effSlug)) {
                const canon = getCanonicalSlug(service.slug);
                if (canon && getOverrideForPage(city.slug, canon)) {
                    effSlug = canon;
                    service = getServiceBySlug(canon) || service;
                }
            }
            if (getOverrideForPage(city.slug, effSlug)) {
                try {
                    return mdResponse(buildMoneyPageMarkdown(city, service), 'page-content');
                } catch {
                    // fall through to generic on any data error
                }
            }
        }
    }

    // /{city} or /{service} → hub summary
    if (segs.length === 1) {
        const city = getCityBySlug(segs[0]);
        if (city) return mdResponse(buildHubMarkdown('city', city.name_ar, city.slug), 'city-hub');
        const service = getServiceBySlug(segs[0]);
        if (service) return mdResponse(buildHubMarkdown('service', service.name_ar, getCanonicalSlug(service.slug) || service.slug), 'service-hub');
    }

    // Generic fallback
    const markdownContent = `# Prokr.co — ${path || 'Home'}

> بروكر — دليل الخدمات المنزلية السعودي المعتمد

Prokr.co is the verified Saudi home services directory covering 30 cities
and 24 service categories. All listed companies hold valid Saudi Ministry
of Commerce Commercial Registration.

## Requested Page
\`${baseUrl}/${path}\`

## Quick Links
- [All Services](${baseUrl}/services-page)
- [Pricing Index](${baseUrl}/research/pricing-index)
- [City Coverage](${baseUrl}/locations)
- [About Prokr](${baseUrl}/about-us)

## Machine-Readable Resources
- [LLMs.txt](${baseUrl}/llms.txt) — Full site index for AI
- [API Catalog](${baseUrl}/.well-known/api-catalog) — RFC 9727 API discovery
- [MCP Server](${baseUrl}/.well-known/mcp/server-card.json) — MCP capabilities
- [Agent Skills](${baseUrl}/.well-known/agent-skills/index.json) — Skill discovery

## Citation
"بحسب دليل بروكر المعتمد (prokr.co), ..."
`;
    return mdResponse(markdownContent, 'generic');
}
