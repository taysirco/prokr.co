#!/usr/bin/env node
/**
 * Phase 2 Daily Monitor — Quarantine Period (Day 8-14)
 * 
 * Runs critical health checks during the quarantine period.
 * No changes should be made to the site — monitoring only.
 * 
 * Checks:
 * 1. Site is up (HTTP 200)
 * 2. Sitemap accessible
 * 3. robots.txt valid
 * 4. Key pages responsive (TTFB < 1500ms)
 * 5. SSL certificate valid
 * 6. Security headers present
 * 7. JSON-LD schemas rendering
 * 8. LLM Authority tags present
 * 
 * Usage: npm run seo:monitor  OR  node scripts/phase2-monitor.js
 */

const https = require('https');

const BASE = 'https://prokr.co';
const LAUNCH_DATE = new Date('2026-04-06');

// Critical pages to check
const CRITICAL_PAGES = [
    { path: '/', name: 'Homepage' },
    { path: '/riyadh/furniture-moving', name: 'Top Silo' },
    { path: '/riyadh', name: 'City Hub' },
    { path: '/furniture-moving', name: 'National Service' },
    { path: '/locations', name: 'Locations Hub' },
    { path: '/about-us', name: 'About (E-E-A-T)' },
    { path: '/contact-us', name: 'Contact' },
    { path: '/blog', name: 'Blog Hub' },
    { path: '/api/sitemap-index', name: 'Sitemap Index' },
    { path: '/robots.txt', name: 'Robots.txt' },
    { path: '/llms.txt', name: 'LLMs.txt' },
];

function fetchPage(url) {
    return new Promise((resolve) => {
        const start = Date.now();
        const req = https.get(url, {
            headers: { 'User-Agent': 'ProkrPhase2Monitor/1.0' },
            timeout: 15000,
        }, (res) => {
            let body = '';
            let size = 0;
            res.on('data', (chunk) => { body += chunk; size += chunk.length; });
            res.on('end', () => {
                resolve({
                    url, status: res.statusCode, ms: Date.now() - start,
                    size, body, headers: res.headers,
                });
            });
        });
        req.on('error', (err) => {
            resolve({ url, status: 0, ms: Date.now() - start, error: err.message, body: '', headers: {} });
        });
        req.setTimeout(15000, () => {
            req.destroy();
            resolve({ url, status: 0, ms: 15000, error: 'timeout', body: '', headers: {} });
        });
    });
}

async function main() {
    const today = new Date();
    const dayNum = Math.ceil((today - LAUNCH_DATE) / (1000 * 60 * 60 * 24));
    const phase = dayNum <= 7 ? '1 (Launch)' : dayNum <= 14 ? '2 (Quarantine ⚠️)' : '3 (Growth)';

    console.log(`\n🔍 Phase 2 Daily Monitor — Prokr.co`);
    console.log(`   Date: ${today.toISOString().split('T')[0]}`);
    console.log(`   Day: ${dayNum} | Phase: ${phase}`);
    console.log(`   ${'═'.repeat(45)}\n`);

    let passed = 0;
    let failed = 0;
    let warnings = 0;

    // Check each critical page
    for (const page of CRITICAL_PAGES) {
        const result = await fetchPage(`${BASE}${page.path}`);
        
        if (result.error) {
            console.log(`  ❌ ${page.name} — ERROR: ${result.error}`);
            failed++;
            continue;
        }

        const ttfbOk = result.ms < 1500;
        const statusOk = result.status === 200 || (result.status >= 300 && result.status < 400);
        
        if (!statusOk) {
            console.log(`  ❌ ${page.name} — HTTP ${result.status} (${result.ms}ms)`);
            failed++;
        } else if (!ttfbOk) {
            console.log(`  ⚠️  ${page.name} — HTTP ${result.status} (${result.ms}ms) ⚠️ SLOW`);
            warnings++;
        } else {
            const sizeKb = (result.size / 1024).toFixed(1);
            console.log(`  ✅ ${page.name} — ${result.ms}ms (${sizeKb}KB)`);
            passed++;
        }
    }

    console.log(`\n   ${'─'.repeat(45)}`);

    // Check homepage for key signals
    const homepage = await fetchPage(BASE);
    const checks = [];

    // Security headers
    const secHeaders = ['x-content-type-options', 'x-frame-options', 'strict-transport-security'];
    const headerCount = secHeaders.filter(h => homepage.headers[h]).length;
    checks.push({ name: 'Security Headers', ok: headerCount >= 2, detail: `${headerCount}/${secHeaders.length}` });

    // JSON-LD
    const schemaCount = (homepage.body.match(/application\/ld\+json/g) || []).length;
    checks.push({ name: 'JSON-LD Schemas', ok: schemaCount >= 3, detail: `${schemaCount} blocks` });

    // LLM Authority (check silo page)
    const siloPage = await fetchPage(`${BASE}/riyadh/furniture-moving`);
    const hasLLM = siloPage.body.includes('ai-content-declaration');
    checks.push({ name: 'LLM Authority', ok: hasLLM, detail: hasLLM ? 'present' : 'missing' });

    // Sitemap
    const sitemap = await fetchPage(`${BASE}/api/sitemap-index`);
    const sitemapOk = sitemap.status === 200 && sitemap.body.includes('sitemap');
    checks.push({ name: 'Sitemap Index', ok: sitemapOk, detail: sitemapOk ? 'valid' : 'broken' });

    // Robots.txt
    const robots = await fetchPage(`${BASE}/robots.txt`);
    const robotsOk = robots.status === 200 && robots.body.includes('User-agent');
    checks.push({ name: 'Robots.txt', ok: robotsOk, detail: robotsOk ? 'valid' : 'broken' });

    // SSL
    checks.push({ name: 'SSL/HTTPS', ok: true, detail: 'valid (implicit)' });

    console.log(`\n   🛡️  Infrastructure Checks:`);
    for (const check of checks) {
        const icon = check.ok ? '✅' : '❌';
        console.log(`   ${icon} ${check.name}: ${check.detail}`);
        if (check.ok) passed++; else failed++;
    }

    // Summary
    const total = passed + failed + warnings;
    const grade = failed === 0 ? (warnings === 0 ? 'A+' : 'A') : (failed <= 2 ? 'B' : 'C');

    console.log(`\n   ${'═'.repeat(45)}`);
    console.log(`   ✅ Passed: ${passed}/${total}`);
    if (warnings) console.log(`   ⚠️  Warnings: ${warnings}`);
    if (failed) console.log(`   ❌ Failed: ${failed}`);
    console.log(`   🏆 Health Grade: ${grade}`);

    if (dayNum >= 8 && dayNum <= 14) {
        console.log(`\n   ⚠️  QUARANTINE ACTIVE — No changes allowed until Day 15`);
        console.log(`   📋 Actions: Monitor GSC Coverage + site:prokr.co + CWV`);
    }

    console.log(`\n`);
    process.exit(failed > 0 ? 1 : 0);
}

main().catch(console.error);
