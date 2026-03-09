#!/usr/bin/env npx tsx
// ============================================
// 🔥 Cache Pre-warming Script — Prokr.co
// ============================================
// Purpose: Hit all valid pages BEFORE crawlers arrive
// to warm both ISR cache (Firebase) and Edge cache (Cloudflare).
//
// Usage:
//   npx tsx warm-cache.ts                    # warm production
//   npx tsx warm-cache.ts --dry-run          # list URLs without hitting them
//   npx tsx warm-cache.ts --concurrency=20   # 20 parallel requests (default: 10)
//   npx tsx warm-cache.ts --base=http://localhost:3000  # warm local dev
// ============================================

import { readdirSync, statSync, existsSync } from 'fs';
import { join, basename } from 'path';

// ── Configuration ──
const BASE_URL = 'https://prokr.co';
const DEFAULT_CONCURRENCY = 10;
const REQUEST_TIMEOUT_MS = 15_000;
const OVERRIDES_DIR = join(import.meta.dirname || __dirname, 'src/lib/overrides/pages');

// ── Parse CLI args ──
const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');
const concurrencyArg = args.find(a => a.startsWith('--concurrency='));
const CONCURRENCY = concurrencyArg ? parseInt(concurrencyArg.split('=')[1]) : DEFAULT_CONCURRENCY;
const baseArg = args.find(a => a.startsWith('--base='));
const baseUrl = baseArg ? baseArg.split('=')[1].replace(/\/$/, '') : BASE_URL;

// ============================================
// URL DISCOVERY — Scans filesystem for valid override files
// ============================================

function discoverOverrideUrls(): string[] {
    const urls: string[] = [];

    if (!existsSync(OVERRIDES_DIR)) {
        console.error(`❌ Override directory not found: ${OVERRIDES_DIR}`);
        process.exit(1);
    }

    const cityDirs = readdirSync(OVERRIDES_DIR).filter(name => {
        const fullPath = join(OVERRIDES_DIR, name);
        return statSync(fullPath).isDirectory();
    });

    for (const city of cityDirs) {
        const cityPath = join(OVERRIDES_DIR, city);
        const serviceFiles = readdirSync(cityPath).filter(
            f => f.endsWith('.ts') && f !== 'index.ts'
        );

        for (const file of serviceFiles) {
            const service = basename(file, '.ts');
            urls.push(`/${city}/${service}`);
        }
    }

    return urls;
}

function discoverStaticUrls(): string[] {
    return [
        '/',
        '/locations',
        '/services',
        '/about-us',
        '/contact-us',
        '/advertise',
        '/blog',
    ];
}

function discoverCityUrls(): string[] {
    if (!existsSync(OVERRIDES_DIR)) return [];

    return readdirSync(OVERRIDES_DIR)
        .filter(name => statSync(join(OVERRIDES_DIR, name)).isDirectory())
        .map(city => `/${city}`);
}

// ============================================
// WARM ENGINE — Concurrent HTTP fetcher with TTFB tracking
// ============================================

interface WarmResult {
    url: string;
    status: number;
    ttfb: number;       // Time to First Byte (ms)
    totalTime: number;  // Total response time (ms)
    error?: string;
}

async function warmUrl(url: string): Promise<WarmResult> {
    const fullUrl = `${baseUrl}${url}`;
    const start = performance.now();

    try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

        const res = await fetch(fullUrl, {
            signal: controller.signal,
            headers: {
                'User-Agent': 'ProkrCacheWarmer/1.0 (+https://prokr.co)',
                'Accept': 'text/html',
                'Accept-Encoding': 'gzip',
            },
        });

        const ttfb = performance.now() - start;

        // Consume the response body to complete the request
        await res.text();
        const totalTime = performance.now() - start;

        clearTimeout(timeout);

        return {
            url,
            status: res.status,
            ttfb: Math.round(ttfb),
            totalTime: Math.round(totalTime),
        };
    } catch (err: any) {
        const totalTime = performance.now() - start;
        return {
            url,
            status: 0,
            ttfb: 0,
            totalTime: Math.round(totalTime),
            error: err.name === 'AbortError' ? 'TIMEOUT' : err.message,
        };
    }
}

async function warmBatch(urls: string[], concurrency: number): Promise<WarmResult[]> {
    const results: WarmResult[] = [];
    let index = 0;
    let completed = 0;
    const total = urls.length;

    async function worker() {
        while (index < urls.length) {
            const currentIndex = index++;
            const url = urls[currentIndex];
            const result = await warmUrl(url);
            results.push(result);
            completed++;

            // Progress indicator
            const statusIcon = result.status === 200 ? '✅' : result.status === 301 || result.status === 308 ? '↩️' : '❌';
            const progress = `[${completed}/${total}]`;
            const ttfbColor = result.ttfb < 200 ? '🟢' : result.ttfb < 500 ? '🟡' : '🔴';

            if (result.error) {
                console.log(`${progress} ${statusIcon} ${url} — ERROR: ${result.error}`);
            } else {
                console.log(`${progress} ${statusIcon} ${url} — ${result.status} — ${ttfbColor} TTFB: ${result.ttfb}ms — Total: ${result.totalTime}ms`);
            }
        }
    }

    // Launch concurrent workers
    const workers = Array.from({ length: Math.min(concurrency, urls.length) }, () => worker());
    await Promise.all(workers);

    return results;
}

// ============================================
// REPORT GENERATOR
// ============================================

function generateReport(results: WarmResult[], totalDuration: number) {
    const successful = results.filter(r => r.status === 200);
    const redirects = results.filter(r => r.status >= 300 && r.status < 400);
    const failed = results.filter(r => r.status === 0 || r.status >= 400);

    const avgTtfb = successful.length > 0
        ? Math.round(successful.reduce((sum, r) => sum + r.ttfb, 0) / successful.length)
        : 0;
    const maxTtfb = successful.length > 0
        ? Math.max(...successful.map(r => r.ttfb))
        : 0;
    const minTtfb = successful.length > 0
        ? Math.min(...successful.map(r => r.ttfb))
        : 0;
    const p95Ttfb = successful.length > 0
        ? successful.sort((a, b) => a.ttfb - b.ttfb)[Math.floor(successful.length * 0.95)]?.ttfb || 0
        : 0;

    console.log('\n');
    console.log('═══════════════════════════════════════════════');
    console.log('  🔥 CACHE PRE-WARMING REPORT — Prokr.co');
    console.log('═══════════════════════════════════════════════');
    console.log(`  Target:        ${baseUrl}`);
    console.log(`  Concurrency:   ${CONCURRENCY}`);
    console.log(`  Duration:      ${Math.round(totalDuration / 1000)}s`);
    console.log('───────────────────────────────────────────────');
    console.log(`  Total URLs:    ${results.length}`);
    console.log(`  ✅ Success:    ${successful.length}`);
    console.log(`  ↩️  Redirects:  ${redirects.length}`);
    console.log(`  ❌ Failed:     ${failed.length}`);
    console.log('───────────────────────────────────────────────');
    console.log(`  TTFB Average:  ${avgTtfb}ms`);
    console.log(`  TTFB Min:      ${minTtfb}ms`);
    console.log(`  TTFB Max:      ${maxTtfb}ms`);
    console.log(`  TTFB P95:      ${p95Ttfb}ms`);
    console.log('═══════════════════════════════════════════════');

    if (failed.length > 0) {
        console.log('\n❌ FAILED URLs:');
        for (const f of failed) {
            console.log(`   ${f.url} — ${f.error || `HTTP ${f.status}`}`);
        }
    }

    // Find slowest pages
    const slowest = successful.sort((a, b) => b.ttfb - a.ttfb).slice(0, 10);
    if (slowest.length > 0) {
        console.log('\n🐌 SLOWEST PAGES (Top 10):');
        for (const s of slowest) {
            console.log(`   ${s.ttfb}ms — ${s.url}`);
        }
    }

    console.log('\n');
}

// ============================================
// MAIN
// ============================================

async function main() {
    console.log('');
    console.log('🔥 Prokr.co Cache Pre-warming Script');
    console.log(`   Target: ${baseUrl}`);
    console.log(`   Concurrency: ${CONCURRENCY}`);
    console.log('');

    // Discover all URLs
    const staticUrls = discoverStaticUrls();
    const cityUrls = discoverCityUrls();
    const overrideUrls = discoverOverrideUrls();

    const allUrls = [...staticUrls, ...cityUrls, ...overrideUrls];

    console.log(`📊 Discovered ${allUrls.length} URLs:`);
    console.log(`   Static pages:  ${staticUrls.length}`);
    console.log(`   City hubs:     ${cityUrls.length}`);
    console.log(`   Service pages: ${overrideUrls.length}`);
    console.log('');

    if (isDryRun) {
        console.log('🏜️  DRY RUN — listing URLs without warming:\n');
        for (const url of allUrls) {
            console.log(`   ${baseUrl}${url}`);
        }
        console.log(`\nTotal: ${allUrls.length} URLs`);
        return;
    }

    // Phase 1: Warm static + city pages first (most important)
    console.log('── Phase 1: Warming Static & City Pages ──\n');
    const phase1Start = performance.now();
    const phase1Urls = [...staticUrls, ...cityUrls];
    const phase1Results = await warmBatch(phase1Urls, Math.min(CONCURRENCY, 5));

    // Phase 2: Warm all service pages (the bulk)
    console.log('\n── Phase 2: Warming Service Pages ──\n');
    const phase2Results = await warmBatch(overrideUrls, CONCURRENCY);

    const totalDuration = performance.now() - phase1Start;
    const allResults = [...phase1Results, ...phase2Results];

    generateReport(allResults, totalDuration);
}

main().catch(err => {
    console.error('Fatal error:', err);
    process.exit(1);
});
