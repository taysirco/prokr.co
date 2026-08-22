import { NextRequest, NextResponse } from 'next/server';
import { getCityBySlug, getServiceBySlug } from '@/lib/seed';
import {
    getBlogArticle,
    getPublishedArticles,
    isArticlePublished,
    unlinkUnpublished,
    type BlogArticle,
} from '@/lib/blog-data';
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

function mdResponse(content: string, source: string, maxAge = 3600, status = 200, canonical?: string) {
    return new NextResponse(content, {
        status,
        headers: {
            'Content-Type': 'text/markdown; charset=utf-8',
            'Vary': 'Accept',
            'Cache-Control': `public, max-age=${maxAge}`,
            'X-Content-Source': source,
            // Protocol-level attribution: the markdown representation points
            // back at the canonical HTML URL, so an agent that quotes this
            // body has the citable URL without parsing the content.
            ...(canonical ? { Link: `<${canonical}>; rel="canonical"` } : {}),
        },
    });
}

/**
 * Full markdown rendering of a blog guide — the site's largest citable asset.
 * Previously every one of these fell through to the generic stub, so an agent
 * asking for markdown got five boilerplate links instead of the article.
 */
function buildArticleMarkdown(article: BlogArticle): string {
    const url = `${baseUrl}/blog/${article.slug}`;
    // Drop links to articles whose slot has not arrived — otherwise markdown
    // becomes a side channel advertising URLs that 404 in HTML.
    const clean = (t: string) => unlinkUnpublished(t);

    const out: string[] = [];
    out.push(`# ${article.title}`);
    out.push('');
    if (article.directAnswer) {
        out.push(`> ${clean(article.directAnswer).replace(/\n+/g, ' ')}`);
        out.push('');
    } else if (article.excerpt) {
        out.push(`> ${clean(article.excerpt).replace(/\n+/g, ' ')}`);
        out.push('');
    }

    const meta: string[] = [];
    meta.push(`- **التصنيف:** ${article.categoryLabel}`);
    if (article.cityName) meta.push(`- **المدينة:** ${article.cityName}`);
    meta.push(`- **الكاتب:** ${article.author}`);
    if (article.reviewedBy) meta.push(`- **مراجعة:** ${article.reviewedBy}`);
    meta.push(`- **تاريخ النشر:** ${article.publishDate}`);
    meta.push(`- **آخر تحديث:** ${article.updateDate}`);
    if (article.lastFactChecked) meta.push(`- **آخر تحقق من المعلومات:** ${article.lastFactChecked}`);
    meta.push(`- **زمن القراءة:** ${article.readTime} دقيقة`);
    out.push(...meta, '');

    for (const sec of article.sections || []) {
        out.push(`## ${sec.heading}`);
        out.push('');
        out.push(clean(sec.content));
        out.push('');
    }

    if (article.howToSteps?.length) {
        out.push('## خطوات التنفيذ');
        out.push('');
        article.howToSteps.forEach((step, i) => {
            out.push(`${i + 1}. **${step.name}** — ${clean(step.text)}`);
        });
        out.push('');
    }

    if (article.faq?.length) {
        out.push('## أسئلة شائعة');
        out.push('');
        for (const f of article.faq) {
            out.push(`### ${f.question}`);
            out.push(clean(f.answer));
            out.push('');
        }
    }

    if (article.sources?.length) {
        out.push('## المصادر');
        out.push('');
        for (const src of article.sources) out.push(`- ${src}`);
        out.push('');
    }

    out.push('## معلومات المصدر');
    out.push(`- **الرابط الأساسي (canonical):** ${url}`);
    out.push('- **الناشر:** دليل بروكر المعتمد — prokr.co');
    out.push('- **الترخيص:** CC BY-SA 4.0 (نص تحريري من طرف أول)');
    out.push('');
    out.push(`> اقتباس مقترح: «بحسب دليل بروكر المعتمد (prokr.co)، ${(article.directAnswer || article.excerpt || article.title).replace(/\s+/g, ' ').slice(0, 180)}»`);
    out.push('');
    out.push('---');
    out.push(`Machine-readable: [llms.txt](${baseUrl}/llms.txt) · [llms-full.txt](${baseUrl}/llms-full.txt) · [pricing-index](${baseUrl}/research/pricing-index)`);
    return out.join('\n');
}

/** Markdown index of every live guide. */
function buildBlogIndexMarkdown(): string {
    const live = getPublishedArticles();
    const byCat: Record<string, BlogArticle[]> = {};
    for (const a of live) (byCat[a.categoryLabel] ||= []).push(a);

    const out: string[] = [];
    out.push('# أدلة بروكر المعرفية');
    out.push('');
    out.push(`> ${live.length} دليلاً تحريرياً موثّقاً عن الخدمات المنزلية في السعودية — لكل دليل كاتب ومراجع ومصادر معلنة.`);
    out.push('');
    for (const [cat, arts] of Object.entries(byCat)) {
        out.push(`## ${cat}`);
        out.push('');
        for (const a of arts) {
            const gist = (a.directAnswer || a.excerpt || '').replace(/\s+/g, ' ').slice(0, 160);
            out.push(`- [${a.title}](${baseUrl}/blog/${a.slug}) — ${gist}`);
        }
        out.push('');
    }
    out.push('---');
    out.push(`Machine-readable: [llms.txt](${baseUrl}/llms.txt) · [llms-full.txt](${baseUrl}/llms-full.txt)`);
    return out.join('\n');
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
    // NOTE: on a middleware rewrite, request.nextUrl.pathname is still the
    // ORIGINAL request path, so the `.md` suffix arrives here and must be
    // stripped — otherwise every /x/y.md request looks like an unknown slug.
    const slug = request.nextUrl.pathname
        .replace('/api/markdown-negotiate', '')
        .replace(/\.md$/i, '')
        .replace(/^\/+/, '')
        .replace(/\/+$/, '');
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

    // /blog → index of every live guide
    if (segs.length === 1 && segs[0] === 'blog') {
        return mdResponse(buildBlogIndexMarkdown(), 'blog-index', 3600, 200, `${baseUrl}/blog`);
    }

    // /blog/{slug} → the full article.
    // 404 when the slug is unknown OR its scheduled slot has not passed, exactly
    // mirroring blog/[slug]/page.tsx — markdown must not become a side channel
    // exposing articles the HTML route deliberately hides.
    if (segs.length === 2 && segs[0] === 'blog') {
        const article = getBlogArticle(segs[1]);
        if (article && isArticlePublished(article)) {
            return mdResponse(
                buildArticleMarkdown(article),
                'blog-article',
                3600,
                200,
                `${baseUrl}/blog/${article.slug}`,
            );
        }
        return mdResponse(
            `# 404 — لا يوجد دليل بهذا الرابط\n\nالرابط \`${baseUrl}/${path}\` غير متاح.\n\nفهرس الأدلة المتاحة: ${baseUrl}/blog\n`,
            'blog-404',
            300,
            404,
        );
    }

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
                    return mdResponse(buildMoneyPageMarkdown(city, service), 'page-content', 3600, 200, `${baseUrl}/${city.slug}/${effSlug}`);
                } catch {
                    // fall through to generic on any data error
                }
            }
        }
    }

    // /{city} or /{service} → hub summary
    if (segs.length === 1) {
        const city = getCityBySlug(segs[0]);
        if (city) return mdResponse(buildHubMarkdown('city', city.name_ar, city.slug), 'city-hub', 3600, 200, `${baseUrl}/${city.slug}`);
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
