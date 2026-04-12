#!/usr/bin/env node
/**
 * 📊 Prokr Weekly SEO Intelligence Report
 * 
 * Generates a comprehensive, email-ready markdown report covering:
 * 1. Site health status (7-point audit)
 * 2. Performance metrics (TTFB, page speed)
 * 3. Content coverage gaps
 * 4. Schema validation
 * 5. Internal linking analysis
 * 6. Security headers audit
 * 7. Competitive intelligence signals
 * 
 * Output: Markdown report ready for Slack/email/Notion
 * 
 * Usage: node scripts/weekly-report.js [--json]
 * Scheduling: Add to crontab: 0 8 * * 1 node /path/to/weekly-report.js
 */

const https = require('https');
const fs = require('fs');

const BASE = 'https://prokr.co';
const JSON_OUTPUT = process.argv.includes('--json');

// ═══ Core pages to audit ═══
const AUDIT_PAGES = [
    { path: '/', name: 'Homepage', type: 'core' },
    { path: '/riyadh', name: 'Riyadh City', type: 'city' },
    { path: '/jeddah', name: 'Jeddah City', type: 'city' },
    { path: '/dammam', name: 'Dammam City', type: 'city' },
    { path: '/riyadh/furniture-moving', name: 'Riyadh Moving', type: 'silo' },
    { path: '/jeddah/cleaning', name: 'Jeddah Cleaning', type: 'silo' },
    { path: '/riyadh/pest-control', name: 'Riyadh Pest', type: 'silo' },
    { path: '/furniture-moving', name: 'National Moving', type: 'national' },
    { path: '/cleaning', name: 'National Cleaning', type: 'national' },
    { path: '/about-us', name: 'About', type: 'trust' },
    { path: '/contact-us', name: 'Contact', type: 'trust' },
    { path: '/blog', name: 'Blog', type: 'content' },
    { path: '/advertise', name: 'Advertise', type: 'conversion' },
    { path: '/research/pricing-index', name: 'Pricing Index', type: 'data' },
    { path: '/locations', name: 'Locations', type: 'nav' },
];

function fetch(url) {
    const start = Date.now();
    return new Promise((resolve) => {
        https.get(url, { headers: { 'User-Agent': 'ProkrWeeklyReport/1.0' }, timeout: 15000 }, (res) => {
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

function countSchemaTypes(html) {
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

function getPageMetrics(html) {
    const wordCount = html.replace(/<script[\s\S]*?<\/script>/g, '')
        .replace(/<style[\s\S]*?<\/style>/g, '')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ').trim()
        .split(/\s+/).filter(w => w.length > 1).length;

    const h1Count = (html.match(/<h1[\s >]/g) || []).length;
    const hasFAQ = html.includes('"FAQPage"') || html.includes('"@type":"FAQPage"');
    const hasCanonical = html.includes('rel="canonical"');
    const hasOG = html.includes('og:title');
    const schemas = countSchemaTypes(html);

    return { wordCount, h1Count, hasFAQ, hasCanonical, hasOG, schemaCount: schemas.size, schemas: [...schemas] };
}

async function generateReport() {
    const now = new Date();
    const dateStr = now.toISOString().split('T')[0];
    const weekNum = Math.ceil((now - new Date(now.getFullYear(), 0, 1)) / 604800000);

    const report = {
        date: dateStr,
        week: weekNum,
        infrastructure: {},
        pages: [],
        summary: {},
        issues: [],
        actions: [],
    };

    // ═══ INFRASTRUCTURE CHECKS ═══
    const robots = await fetch(`${BASE}/robots.txt`);
    report.infrastructure.robots = robots.status === 200 && robots.body.includes('Sitemap');
    
    const sitemap = await fetch(`${BASE}/api/sitemap-index`);
    const sitemapCount = (sitemap.body.match(/<sitemap>/g) || []).length;
    report.infrastructure.sitemap = sitemapCount;

    // Count total URLs
    let totalUrls = 0;
    for (let i = 0; i <= 7; i++) {
        const sm = await fetch(`${BASE}/api/sitemap/${i}`);
        totalUrls += (sm.body.match(/<url>/g) || []).length;
    }
    report.infrastructure.totalUrls = totalUrls;

    const mainPage = await fetch(BASE);
    const headers = mainPage.headers;
    report.infrastructure.hsts = !!(headers['strict-transport-security'] || '').includes('max-age');
    report.infrastructure.csp = !!(headers['content-security-policy'] || '').includes('default-src');
    report.infrastructure.xframe = !!headers['x-frame-options'];
    report.infrastructure.referrer = !!headers['referrer-policy'];

    const sw = await fetch(`${BASE}/sw.js`);
    report.infrastructure.serviceWorker = sw.status === 200;

    const llms = await fetch(`${BASE}/llms.txt`);
    report.infrastructure.llmsTxt = llms.status === 200;

    // ═══ PAGE-BY-PAGE AUDIT ═══
    for (const page of AUDIT_PAGES) {
        const res = await fetch(`${BASE}${page.path}`);
        const metrics = res.status === 200 ? getPageMetrics(res.body) : null;
        
        report.pages.push({
            ...page,
            status: res.status,
            ttfb: res.ttfb,
            ...(metrics || {}),
        });
    }

    // ═══ COMPUTE SUMMARY ═══
    const validPages = report.pages.filter(p => p.status === 200);
    report.summary = {
        totalPages: validPages.length,
        avgTTFB: Math.round(validPages.reduce((s, p) => s + p.ttfb, 0) / validPages.length),
        avgWords: Math.round(validPages.reduce((s, p) => s + (p.wordCount || 0), 0) / validPages.length),
        faqCoverage: validPages.filter(p => p.hasFAQ).length,
        canonicalCoverage: validPages.filter(p => p.hasCanonical).length,
        totalSchemas: validPages.reduce((s, p) => s + (p.schemaCount || 0), 0),
        securityScore: [report.infrastructure.hsts, report.infrastructure.csp, report.infrastructure.xframe, report.infrastructure.referrer].filter(Boolean).length,
    };

    // ═══ IDENTIFY ISSUES ═══
    validPages.filter(p => p.ttfb > 2000).forEach(p => report.issues.push(`🔴 Slow TTFB: ${p.name} (${p.ttfb}ms)`));
    validPages.filter(p => p.h1Count > 2).forEach(p => report.issues.push(`🟡 Multiple H1: ${p.name} (${p.h1Count})`));
    validPages.filter(p => !p.hasCanonical).forEach(p => report.issues.push(`🟡 Missing canonical: ${p.name}`));
    validPages.filter(p => !p.hasFAQ && p.type !== 'data' && p.type !== 'nav').forEach(p => report.issues.push(`🟡 Missing FAQ: ${p.name}`));
    validPages.filter(p => (p.wordCount || 0) < 200).forEach(p => report.issues.push(`🟡 Thin content: ${p.name} (${p.wordCount}w)`));
    report.pages.filter(p => p.status !== 200).forEach(p => report.issues.push(`🔴 HTTP ${p.status}: ${p.name}`));

    if (JSON_OUTPUT) {
        console.log(JSON.stringify(report, null, 2));
        return;
    }

    // ═══ MARKDOWN OUTPUT ═══
    const grade = report.summary.avgTTFB < 500 ? 'A+' : report.summary.avgTTFB < 1000 ? 'A' : report.summary.avgTTFB < 2000 ? 'B' : 'C';
    
    console.log(`# 📊 Prokr Weekly SEO Report`);
    console.log(`**Week ${weekNum} — ${dateStr}**\n`);
    console.log(`---\n`);

    console.log(`## 🏗️ Infrastructure\n`);
    console.log(`| Component | Status |`);
    console.log(`|-----------|--------|`);
    console.log(`| robots.txt | ${report.infrastructure.robots ? '✅' : '❌'} |`);
    console.log(`| Sitemaps | ${report.infrastructure.sitemap} indexes, ${totalUrls} URLs |`);
    console.log(`| HSTS | ${report.infrastructure.hsts ? '✅' : '❌'} |`);
    console.log(`| CSP | ${report.infrastructure.csp ? '✅' : '❌'} |`);
    console.log(`| X-Frame | ${report.infrastructure.xframe ? '✅' : '❌'} |`);
    console.log(`| Service Worker | ${report.infrastructure.serviceWorker ? '✅' : '❌'} |`);
    console.log(`| llms.txt | ${report.infrastructure.llmsTxt ? '✅' : '❌'} |`);
    console.log('');

    console.log(`## 📄 Page Analysis\n`);
    console.log(`| Page | Status | TTFB | Words | H1 | FAQ | Schemas |`);
    console.log(`|------|--------|------|-------|----|----|---------|`);
    for (const p of report.pages) {
        const icon = p.status === 200 ? '✅' : '❌';
        console.log(`| ${p.name} | ${icon} ${p.status} | ${p.ttfb}ms | ${p.wordCount || '-'} | ${p.h1Count || '-'} | ${p.hasFAQ ? '✅' : '❌'} | ${p.schemaCount || 0} |`);
    }
    console.log('');

    console.log(`## 📈 Summary\n`);
    console.log(`| Metric | Value | Grade |`);
    console.log(`|--------|-------|-------|`);
    console.log(`| Average TTFB | ${report.summary.avgTTFB}ms | ${report.summary.avgTTFB < 500 ? '🟢' : report.summary.avgTTFB < 1000 ? '🟡' : '🔴'} |`);
    console.log(`| Average Words | ${report.summary.avgWords} | ${report.summary.avgWords > 800 ? '🟢' : '🟡'} |`);
    console.log(`| FAQ Coverage | ${report.summary.faqCoverage}/${report.summary.totalPages} | ${report.summary.faqCoverage >= report.summary.totalPages - 2 ? '🟢' : '🟡'} |`);
    console.log(`| Canonical Coverage | ${report.summary.canonicalCoverage}/${report.summary.totalPages} | ${report.summary.canonicalCoverage === report.summary.totalPages ? '🟢' : '🔴'} |`);
    console.log(`| Total Schemas | ${report.summary.totalSchemas} types | ${report.summary.totalSchemas > 40 ? '🟢' : '🟡'} |`);
    console.log(`| Sitemap URLs | ${totalUrls} | ${totalUrls > 500 ? '🟢' : '🟡'} |`);
    console.log(`| Security | ${report.summary.securityScore}/4 | ${report.summary.securityScore === 4 ? '🟢' : '🔴'} |`);
    console.log(`| **Overall Grade** | **${grade}** | |`);
    console.log('');

    if (report.issues.length > 0) {
        console.log(`## ⚠️ Issues (${report.issues.length})\n`);
        report.issues.forEach(i => console.log(`- ${i}`));
        console.log('');
    } else {
        console.log(`## ✅ No Issues Found\n`);
    }

    console.log(`## 🏆 Performance Ranking\n`);
    console.log('```');
    [...report.pages].filter(p => p.status === 200).sort((a, b) => a.ttfb - b.ttfb).forEach(p => {
        const bar = '█'.repeat(Math.min(Math.round(p.ttfb / 50), 30));
        console.log(`${p.name.padEnd(20)} ${String(p.ttfb).padStart(5)}ms ${bar}`);
    });
    console.log('```\n');

    console.log(`---`);
    console.log(`*Report generated: ${now.toISOString()}*`);
    console.log(`*Grade: ${grade} | Pages: ${report.summary.totalPages} | URLs: ${totalUrls}*`);
}

generateReport().catch(console.error);
