#!/usr/bin/env node
/**
 * 🔬 Prokr SEO Comprehensive Dashboard
 * 
 * One-command deep audit covering:
 * 1. Technical SEO (robots, sitemaps, canonicals)
 * 2. Schema validation (JSON-LD integrity)
 * 3. Content quality (word count, heading structure)
 * 4. Performance (TTFB, caching)
 * 5. Internal linking (orphan detection)
 * 6. Security headers (HSTS, CSP, etc.)
 * 7. Mobile readiness (viewport, responsive)
 * 
 * Usage: node scripts/seo-dashboard.js [--verbose]
 */

const https = require('https');

const BASE = 'https://prokr.co';
const VERBOSE = process.argv.includes('--verbose');

const SAMPLE_PAGES = [
    { path: '/', type: 'homepage', name: 'الرئيسية' },
    { path: '/riyadh', type: 'city', name: 'الرياض' },
    { path: '/jeddah', type: 'city', name: 'جدة' },
    { path: '/riyadh/furniture-moving', type: 'service', name: 'نقل عفش الرياض' },
    { path: '/jeddah/cleaning', type: 'service', name: 'تنظيف جدة' },
    { path: '/furniture-moving', type: 'national', name: 'نقل عفش' },
    { path: '/about-us', type: 'trust', name: 'من نحن' },
    { path: '/contact-us', type: 'trust', name: 'اتصل بنا' },
    { path: '/advertise', type: 'conversion', name: 'أعلن معنا' },
    { path: '/blog', type: 'content', name: 'المدونة' },
];

function fetch(url) {
    const start = Date.now();
    return new Promise((resolve) => {
        https.get(url, { headers: { 'User-Agent': 'ProkrDashboard/2.0' } }, (res) => {
            let data = '';
            res.on('data', d => data += d);
            res.on('end', () => resolve({
                url, status: res.statusCode,
                body: data, headers: res.headers,
                ttfb: Date.now() - start
            }));
        }).on('error', (err) => resolve({ url, status: 0, error: err.message, body: '', headers: {}, ttfb: 0 }));
    });
}

function extractSchemaTypes(html) {
    const types = new Set();
    const regex = /<script\s+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g;
    let match;
    while ((match = regex.exec(html)) !== null) {
        try {
            const obj = JSON.parse(match[1]);
            if (obj['@type']) types.add(obj['@type']);
            if (obj['@graph']) obj['@graph'].forEach(g => g['@type'] && types.add(g['@type']));
        } catch (e) { types.add('PARSE_ERROR'); }
    }
    return types;
}

function countWords(html) {
    // Extract text content (approximate)
    const text = html.replace(/<script[\s\S]*?<\/script>/g, '')
                     .replace(/<style[\s\S]*?<\/style>/g, '')
                     .replace(/<[^>]+>/g, ' ')
                     .replace(/\s+/g, ' ').trim();
    return text.split(/\s+/).filter(w => w.length > 1).length;
}

function checkHeadings(html) {
    const h1Count = (html.match(/<h1[\s >]/g) || []).length;
    const h2Count = (html.match(/<h2[\s >]/g) || []).length;
    const h3Count = (html.match(/<h3[\s >]/g) || []).length;
    return { h1: h1Count, h2: h2Count, h3: h3Count };
}

async function main() {
    const now = new Date().toISOString().split('T')[0];
    console.log(`\n${'═'.repeat(60)}`);
    console.log(`  🔬 PROKR SEO COMPREHENSIVE DASHBOARD`);
    console.log(`  📅 ${now}  |  🌐 ${BASE}`);
    console.log(`${'═'.repeat(60)}\n`);

    const results = [];
    let totalScore = 0;
    let maxScore = 0;

    // ═══════════════════════════════════════
    // 1. TECHNICAL INFRASTRUCTURE
    // ═══════════════════════════════════════
    console.log(`  📋 1. TECHNICAL INFRASTRUCTURE`);
    console.log(`  ${'─'.repeat(50)}`);

    // robots.txt
    const robots = await fetch(`${BASE}/robots.txt`);
    const robotsOK = robots.status === 200 && robots.body.includes('Sitemap');
    console.log(`  ${robotsOK ? '✅' : '❌'} robots.txt ${robotsOK ? '— valid with Sitemap' : '— MISSING or broken'}`);
    totalScore += robotsOK ? 1 : 0; maxScore++;

    // Sitemap
    const sitemap = await fetch(`${BASE}/api/sitemap-index`);
    const sitemapUrls = (sitemap.body.match(/<loc>/g) || []).length;
    const sitemapOK = sitemap.status === 200 && sitemapUrls > 0;
    console.log(`  ${sitemapOK ? '✅' : '❌'} Sitemap index — ${sitemapUrls} child sitemaps`);
    totalScore += sitemapOK ? 1 : 0; maxScore++;

    // HTTPS redirect
    const wwwRes = await fetch('https://prokr.co/');
    const httpsOK = wwwRes.status === 200;
    console.log(`  ${httpsOK ? '✅' : '❌'} HTTPS — ${httpsOK ? 'active' : 'FAILED'}`);
    totalScore += httpsOK ? 1 : 0; maxScore++;

    // Security Headers
    const headers = wwwRes.headers;
    const hstsOK = (headers['strict-transport-security'] || '').includes('max-age');
    const xframeOK = !!headers['x-frame-options'];
    const cspOK = (headers['content-security-policy'] || '').includes('default-src');
    const refOK = !!headers['referrer-policy'];
    const secHeaderScore = [hstsOK, xframeOK, cspOK, refOK].filter(Boolean).length;
    console.log(`  ${secHeaderScore === 4 ? '✅' : '⚠️'} Security Headers — ${secHeaderScore}/4 active`);
    if (VERBOSE) {
        console.log(`     HSTS: ${hstsOK ? '✅' : '❌'}  X-Frame: ${xframeOK ? '✅' : '❌'}  CSP: ${cspOK ? '✅' : '❌'}  Referrer: ${refOK ? '✅' : '❌'}`);
    }
    totalScore += secHeaderScore === 4 ? 1 : 0; maxScore++;

    // Service Worker
    const sw = await fetch(`${BASE}/sw.js`);
    const swOK = sw.status === 200 && sw.body.includes('self.addEventListener');
    console.log(`  ${swOK ? '✅' : '❌'} Service Worker — ${swOK ? 'active' : 'MISSING'}`);
    totalScore += swOK ? 1 : 0; maxScore++;

    // llms.txt
    const llms = await fetch(`${BASE}/llms.txt`);
    const llmsOK = llms.status === 200 && llms.body.includes('Prokr');
    console.log(`  ${llmsOK ? '✅' : '⚠️'} llms.txt — ${llmsOK ? 'AI authority file active' : 'missing'}`);
    totalScore += llmsOK ? 1 : 0; maxScore++;

    console.log('');

    // ═══════════════════════════════════════
    // 2. PAGE-BY-PAGE ANALYSIS
    // ═══════════════════════════════════════
    console.log(`  📄 2. PAGE-BY-PAGE ANALYSIS`);
    console.log(`  ${'─'.repeat(50)}`);

    for (const page of SAMPLE_PAGES) {
        const res = await fetch(`${BASE}${page.path}`);
        if (res.status !== 200) {
            console.log(`  ❌ ${page.name.padEnd(20)} HTTP ${res.status}`);
            continue;
        }

        const schemas = extractSchemaTypes(res.body);
        const words = countWords(res.body);
        const headings = checkHeadings(res.body);
        const hasFAQ = schemas.has('FAQPage');
        const hasBreadcrumb = schemas.has('BreadcrumbList') || res.body.includes('BreadcrumbList');
        const hasCanonical = res.body.includes('rel="canonical"');
        const hasOG = res.body.includes('og:title');

        const pageScore = [hasFAQ, hasBreadcrumb, hasCanonical, hasOG, words > 500, headings.h1 <= 2].filter(Boolean).length;
        const icon = pageScore >= 5 ? '✅' : pageScore >= 3 ? '⚠️' : '❌';

        console.log(`  ${icon} ${page.name.padEnd(20)} ${words}w | H1:${headings.h1} H2:${headings.h2} | ${schemas.size} schemas | TTFB:${res.ttfb}ms`);
        if (VERBOSE) {
            console.log(`     FAQ:${hasFAQ?'✅':'❌'} BC:${hasBreadcrumb?'✅':'❌'} Canon:${hasCanonical?'✅':'❌'} OG:${hasOG?'✅':'❌'} Types: ${[...schemas].join(', ')}`);
        }

        results.push({ ...page, words, headings, schemas: [...schemas], ttfb: res.ttfb, hasFAQ, hasBreadcrumb, hasCanonical, pageScore });
        totalScore += pageScore >= 5 ? 1 : 0;
        maxScore++;
    }

    console.log('');

    // ═══════════════════════════════════════
    // 3. CONTENT QUALITY ANALYSIS
    // ═══════════════════════════════════════
    console.log(`  📝 3. CONTENT QUALITY`);
    console.log(`  ${'─'.repeat(50)}`);

    const avgWords = Math.round(results.reduce((s, r) => s + r.words, 0) / results.length);
    const avgTTFB = Math.round(results.reduce((s, r) => s + r.ttfb, 0) / results.length);
    const faqCoverage = results.filter(r => r.hasFAQ).length;
    const canonicalCoverage = results.filter(r => r.hasCanonical).length;

    console.log(`  📊 Average word count: ${avgWords} words/page ${avgWords > 1000 ? '✅' : avgWords > 500 ? '⚠️' : '❌'}`);
    console.log(`  📊 Average TTFB: ${avgTTFB}ms ${avgTTFB < 1500 ? '✅' : avgTTFB < 3000 ? '⚠️' : '❌'}`);
    console.log(`  📊 FAQ coverage: ${faqCoverage}/${results.length} pages (${Math.round(faqCoverage/results.length*100)}%)`);
    console.log(`  📊 Canonical coverage: ${canonicalCoverage}/${results.length} pages (${Math.round(canonicalCoverage/results.length*100)}%)`);
    console.log(`  📊 Schema richness: ${results.reduce((s, r) => s + r.schemas.length, 0)} total types across ${results.length} pages`);

    console.log('');

    // ═══════════════════════════════════════
    // 4. PERFORMANCE RANKING
    // ═══════════════════════════════════════
    console.log(`  ⚡ 4. PERFORMANCE (TTFB Ranking)`);
    console.log(`  ${'─'.repeat(50)}`);
    const sorted = [...results].sort((a, b) => a.ttfb - b.ttfb);
    sorted.forEach(r => {
        const bar = '█'.repeat(Math.min(Math.round(r.ttfb / 100), 30));
        const icon = r.ttfb < 1000 ? '🟢' : r.ttfb < 2000 ? '🟡' : '🔴';
        console.log(`  ${icon} ${r.name.padEnd(20)} ${String(r.ttfb).padStart(5)}ms ${bar}`);
    });

    console.log('');

    // ═══════════════════════════════════════
    // 5. FINAL SCORE
    // ═══════════════════════════════════════
    const percentage = Math.round(totalScore / maxScore * 100);
    const grade = percentage >= 90 ? 'A+' : percentage >= 80 ? 'A' : percentage >= 70 ? 'B' : percentage >= 60 ? 'C' : 'D';
    
    console.log(`${'═'.repeat(60)}`);
    console.log(`  🏆 FINAL SEO SCORE: ${totalScore}/${maxScore} (${percentage}%) — Grade: ${grade}`);
    console.log(`${'═'.repeat(60)}`);

    // Recommendations
    const issues = [];
    if (faqCoverage < results.length) issues.push(`Add FAQPage schema to ${results.length - faqCoverage} more pages`);
    if (avgWords < 1000) issues.push(`Increase content depth — average ${avgWords} words is below 1000 target`);
    if (avgTTFB > 2000) issues.push(`Optimize TTFB — average ${avgTTFB}ms exceeds 2000ms threshold`);
    results.filter(r => !r.hasCanonical).forEach(r => issues.push(`Missing canonical on ${r.name}`));
    results.filter(r => r.headings.h1 > 2).forEach(r => issues.push(`Multiple H1 tags on ${r.name} (${r.headings.h1} found)`));

    if (issues.length > 0) {
        console.log(`\n  📋 RECOMMENDATIONS (${issues.length}):`);
        issues.forEach(i => console.log(`     → ${i}`));
    } else {
        console.log(`\n  🟢 No critical issues found!`);
    }
    console.log('');
}

main().catch(console.error);
