#!/usr/bin/env node
/**
 * Omega Ignition — Cache Warming Protocol (§2.6)
 * 
 * Warms the CDN edge cache for all public pages.
 * This ensures the first real visitor (and Googlebot) gets
 * a cached response with sub-50ms TTFB instead of cold SSR.
 * 
 * Usage:
 *   node scripts/omega-ignition.js [--dry-run]
 */

const https = require('https');
const http = require('http');

const BASE = 'https://prokr.co';
const CONCURRENCY = 5;
const DELAY_MS = 200; // Polite delay between batches

// ═══ CITIES (all 30) ═══
const CITIES = [
    'riyadh', 'jeddah', 'dammam', 'makkah', 'madinah',
    'al-khobar', 'dhahran', 'qatif', 'taif', 'tabuk',
    'abha', 'hail', 'jubail', 'buraidah', 'khamis-mushait',
    'najran', 'jazan', 'al-ahsa', 'yanbu', 'al-kharj',
    'hafr-albatin', 'al-baha', 'qassim', 'onizah',
    'sakaka', 'arar', 'dawadmi', 'wadi-aldawasir', 'bisha', 'al-majmaah',
];

// ═══ SERVICES ═══
const SERVICES = [
    'furniture-moving', 'furniture-storage', 'moving-out',
    'intercity-moving', 'international-moving', 'dyna',
    'crane-rental', 'cleaning', 'apartments-cleaning',
    'sofa-cleaning', 'carpet-cleaning', 'floor-polishing',
    'air-conditioner-cleaning', 'pest-control', 'termite-control',
    'bed-bugs-control', 'water-leak-detection',
    'roof-insulation', 'tank-insulation', 'sewage-pumping',
    'swimming-pool-cleaning', 'sanitization',
];

// ═══ STATIC PAGES ═══
const STATIC = [
    '/', '/locations', '/services', '/services-page',
    '/about-us', '/contact-us', '/advertise',
    '/privacy-policy', '/terms-of-service',
    '/research/pricing-index', '/blog', '/badge',
    '/llms.txt', '/robots.txt',
];

function buildUrls() {
    const urls = [];

    // Static pages
    for (const path of STATIC) {
        urls.push(`${BASE}${path}`);
    }

    // City pages
    for (const city of CITIES) {
        urls.push(`${BASE}/${city}`);
    }

    // Service pages
    for (const service of SERVICES) {
        urls.push(`${BASE}/${service}`);
    }

    // Top city×service composites (highest traffic combinations)
    const TOP_CITIES = ['riyadh', 'jeddah', 'dammam', 'makkah', 'madinah'];
    const TOP_SERVICES = ['furniture-moving', 'cleaning', 'pest-control', 'water-leak-detection'];
    for (const city of TOP_CITIES) {
        for (const service of TOP_SERVICES) {
            urls.push(`${BASE}/${city}/${service}`);
        }
    }

    return urls;
}

function warmUrl(url) {
    return new Promise((resolve) => {
        const start = Date.now();
        const req = https.get(url, { headers: { 'User-Agent': 'ProkrOmegaIgnition/1.0' } }, (res) => {
            let size = 0;
            res.on('data', (chunk) => { size += chunk.length; });
            res.on('end', () => {
                const ms = Date.now() - start;
                resolve({ url, status: res.statusCode, ms, size });
            });
        });
        req.on('error', (err) => {
            resolve({ url, status: 0, ms: Date.now() - start, error: err.message });
        });
        req.setTimeout(15000, () => {
            req.destroy();
            resolve({ url, status: 0, ms: 15000, error: 'timeout' });
        });
    });
}

async function sleep(ms) {
    return new Promise(r => setTimeout(r, ms));
}

async function main() {
    const isDryRun = process.argv.includes('--dry-run');
    const urls = buildUrls();

    console.log(`\n🚀 Omega Ignition — Cache Warming Protocol`);
    console.log(`   Base: ${BASE}`);
    console.log(`   URLs: ${urls.length}`);
    console.log(`   Concurrency: ${CONCURRENCY}`);
    console.log(`   Mode: ${isDryRun ? '🧪 DRY RUN' : '🔥 LIVE'}\n`);

    if (isDryRun) {
        urls.forEach((u, i) => console.log(`  [${i + 1}] ${u}`));
        console.log(`\n✅ Dry run complete. ${urls.length} URLs would be warmed.`);
        return;
    }

    let success = 0, errors = 0, redirects = 0;
    let totalMs = 0;

    for (let i = 0; i < urls.length; i += CONCURRENCY) {
        const batch = urls.slice(i, i + CONCURRENCY);
        const results = await Promise.all(batch.map(warmUrl));

        for (const r of results) {
            const idx = urls.indexOf(r.url) + 1;
            if (r.error) {
                console.log(`  ❌ [${idx}/${urls.length}] ${r.url} — ${r.error}`);
                errors++;
            } else if (r.status >= 300 && r.status < 400) {
                console.log(`  ↪️  [${idx}/${urls.length}] ${r.url} — ${r.status} (${r.ms}ms)`);
                redirects++;
            } else if (r.status === 200) {
                const sizeKb = (r.size / 1024).toFixed(1);
                console.log(`  ✅ [${idx}/${urls.length}] ${r.url} — ${r.ms}ms (${sizeKb}KB)`);
                success++;
                totalMs += r.ms;
            } else {
                console.log(`  ⚠️  [${idx}/${urls.length}] ${r.url} — HTTP ${r.status} (${r.ms}ms)`);
                errors++;
            }
        }

        if (i + CONCURRENCY < urls.length) {
            await sleep(DELAY_MS);
        }
    }

    const avgMs = success > 0 ? (totalMs / success).toFixed(0) : 'N/A';
    console.log(`\n═══════════════════════════════════════`);
    console.log(`  ✅ Success: ${success}`);
    console.log(`  ↪️  Redirects: ${redirects}`);
    console.log(`  ❌ Errors: ${errors}`);
    console.log(`  ⏱️  Avg TTFB: ${avgMs}ms`);
    console.log(`═══════════════════════════════════════\n`);
}

main().catch(console.error);
