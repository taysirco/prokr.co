#!/usr/bin/env node
/**
 * SEO Health Monitor — Daily Automated Checkup
 * 
 * Runs 7 critical checks and reports pass/fail.
 * Run daily via cron or manually: node scripts/seo-health.js
 * 
 * CHECKS:
 * 1. robots.txt — no invalid sitemaps
 * 2. Sitemap health — all sitemaps return 200
 * 3. Critical pages — homepage + top cities return 200
 * 4. Schema validation — JSON-LD present on key pages
 * 5. Security headers — CSP + HSTS + X-Frame
 * 6. TTFB performance — < 3000ms threshold
 * 7. SW version — matches expected
 */

const https = require('https');

const BASE = 'https://prokr.co';

// Helper: HTTP GET with status + body
function fetch(url) {
    return new Promise((resolve) => {
        const start = Date.now();
        https.get(url, { headers: { 'User-Agent': 'ProkrSEOMonitor/1.0' } }, (res) => {
            let data = '';
            res.on('data', d => data += d);
            res.on('end', () => {
                resolve({
                    url,
                    status: res.statusCode,
                    headers: res.headers,
                    body: data,
                    ttfb: Date.now() - start,
                });
            });
        }).on('error', (err) => {
            resolve({ url, status: 0, error: err.message, headers: {}, body: '', ttfb: -1 });
        });
    });
}

// ═══ CHECKS ═══

async function checkRobots() {
    const res = await fetch(`${BASE}/robots.txt`);
    const issues = [];
    if (res.status !== 200) issues.push(`robots.txt returned ${res.status}`);
    if (res.body.includes('sitemap-images.xml')) issues.push('Still references non-existent sitemap-images.xml');
    if (!res.body.includes('Sitemap:')) issues.push('No Sitemap directive found');
    if (res.body.includes('Disallow: /')) {
        // Check if it's blocking everything (not just specific paths)
        const lines = res.body.split('\n').filter(l => l.startsWith('Disallow:'));
        const blockAll = lines.some(l => l.trim() === 'Disallow: /');
        if (blockAll) issues.push('🚨 BLOCKING ALL CRAWLERS (Disallow: /)');
    }
    return { name: 'robots.txt', pass: issues.length === 0, issues };
}

async function checkSitemaps() {
    const issues = [];
    const indexRes = await fetch(`${BASE}/api/sitemap-index`);
    if (indexRes.status !== 200) {
        issues.push(`Sitemap index returned ${indexRes.status}`);
    } else {
        const sitemapUrls = indexRes.body.match(/<loc>([^<]+)<\/loc>/g) || [];
        let totalUrls = 0;
        for (const match of sitemapUrls.slice(0, 5)) {
            const url = match.replace(/<\/?loc>/g, '');
            const res = await fetch(url);
            if (res.status !== 200) {
                issues.push(`${url} returned ${res.status}`);
            } else {
                const count = (res.body.match(/<url>/g) || []).length;
                totalUrls += count;
            }
        }
        if (totalUrls < 100) issues.push(`Only ${totalUrls} URLs in sitemap (expected 100+)`);
    }
    return { name: 'Sitemaps', pass: issues.length === 0, issues };
}

async function checkCriticalPages() {
    const urls = [
        '/', '/riyadh', '/jeddah', '/dammam', '/makkah', '/madinah',
        '/furniture-moving', '/cleaning', '/pest-control',
        '/riyadh/furniture-moving', '/blog', '/about-us',
        '/llms.txt', '/services', '/locations',
    ];
    const issues = [];
    const results = await Promise.all(urls.map(u => fetch(`${BASE}${u}`)));
    for (const r of results) {
        const path = r.url.replace(BASE, '');
        if (r.status !== 200) {
            issues.push(`${path} → ${r.status}`);
        }
    }
    return { name: 'Critical Pages', pass: issues.length === 0, issues };
}

async function checkSchema() {
    const issues = [];
    const pages = ['/riyadh/furniture-moving', '/jeddah/cleaning', '/'];
    for (const path of pages) {
        const res = await fetch(`${BASE}${path}`);
        if (!res.body.includes('application/ld+json')) {
            issues.push(`${path} — No JSON-LD found`);
        }
        if (path !== '/' && !res.body.includes('"FAQPage"')) {
            issues.push(`${path} — Missing FAQPage schema`);
        }
        if (path === '/' && !res.body.includes('"Organization"')) {
            issues.push(`${path} — Missing Organization schema`);
        }
    }
    return { name: 'Schema', pass: issues.length === 0, issues };
}

async function checkHeaders() {
    const res = await fetch(`${BASE}/`);
    const issues = [];
    const h = res.headers;
    if (!h['strict-transport-security']) issues.push('Missing HSTS');
    if (!h['content-security-policy']) issues.push('Missing CSP');
    if (!h['x-frame-options']) issues.push('Missing X-Frame-Options');
    if (!h['x-content-type-options']) issues.push('Missing X-Content-Type-Options');
    if (!h['referrer-policy']) issues.push('Missing Referrer-Policy');
    return { name: 'Security Headers', pass: issues.length === 0, issues };
}

async function checkPerformance() {
    const issues = [];
    const pages = ['/', '/riyadh', '/riyadh/furniture-moving'];
    for (const path of pages) {
        const res = await fetch(`${BASE}${path}`);
        if (res.ttfb > 3000) {
            issues.push(`${path} — TTFB ${res.ttfb}ms (> 3000ms threshold)`);
        }
    }
    return { name: 'Performance', pass: issues.length === 0, issues };
}

async function checkSW() {
    const res = await fetch(`${BASE}/sw.js`);
    const issues = [];
    if (res.status !== 200) {
        issues.push(`sw.js returned ${res.status}`);
    } else {
        const versionMatch = res.body.match(/SW_VERSION\s*=\s*'([^']+)'/);
        if (versionMatch) {
            const version = versionMatch[1];
            if (version < '1.3.0') issues.push(`SW outdated: ${version} (expected ≥ 1.3.0)`);
        }
    }
    return { name: 'Service Worker', pass: issues.length === 0, issues };
}

// ═══ MAIN ═══
async function main() {
    console.log(`\n🔍 SEO Health Monitor — ${new Date().toISOString().split('T')[0]}`);
    console.log(`   Target: ${BASE}\n`);

    const checks = await Promise.all([
        checkRobots(),
        checkSitemaps(),
        checkCriticalPages(),
        checkSchema(),
        checkHeaders(),
        checkPerformance(),
        checkSW(),
    ]);

    let allPass = true;
    for (const check of checks) {
        const icon = check.pass ? '✅' : '❌';
        console.log(`  ${icon} ${check.name}`);
        if (!check.pass) {
            allPass = false;
            check.issues.forEach(i => console.log(`     ⚠️  ${i}`));
        }
    }

    console.log(`\n═══════════════════════════════════════`);
    if (allPass) {
        console.log(`  🟢 ALL CHECKS PASSED — SEO health is excellent`);
    } else {
        const failCount = checks.filter(c => !c.pass).length;
        console.log(`  🔴 ${failCount}/${checks.length} checks need attention`);
    }
    console.log(`═══════════════════════════════════════\n`);

    process.exit(allPass ? 0 : 1);
}

main().catch(console.error);
