#!/usr/bin/env node
/**
 * Core Web Vitals Checker via PageSpeed Insights API
 * 
 * Checks LCP, FID, CLS, and INP for key pages.
 * Uses: https://developers.google.com/speed/docs/insights/v5/get-started
 * 
 * Usage:
 *   node scripts/cwv-check.js [--key YOUR_API_KEY]
 * 
 * Without API key: uses free tier (limited requests).
 * With API key: higher quota (from console.cloud.google.com).
 */

const https = require('https');

const BASE = 'https://prokr.co';
const PAGES = [
    '/',
    '/riyadh',
    '/riyadh/furniture-moving',
    '/jeddah/cleaning',
    '/furniture-moving',
    '/blog',
];

const args = process.argv.slice(2);
const keyIdx = args.indexOf('--key');
const API_KEY = keyIdx >= 0 ? args[keyIdx + 1] : '';

function fetchPSI(pageUrl, strategy = 'mobile') {
    return new Promise((resolve) => {
        const params = new URLSearchParams({
            url: pageUrl,
            strategy,
            category: 'performance',
            ...(API_KEY ? { key: API_KEY } : {}),
        });
        
        const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?${params}`;
        
        https.get(apiUrl, (res) => {
            let data = '';
            res.on('data', d => data += d);
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    
                    if (json.error) {
                        resolve({ url: pageUrl, error: json.error.message });
                        return;
                    }
                    
                    const lhr = json.lighthouseResult;
                    if (!lhr) {
                        resolve({ url: pageUrl, error: 'No lighthouse result' });
                        return;
                    }
                    
                    const audits = lhr.audits || {};
                    const score = Math.round((lhr.categories?.performance?.score || 0) * 100);
                    
                    resolve({
                        url: pageUrl,
                        score,
                        lcp: audits['largest-contentful-paint']?.numericValue,
                        fcp: audits['first-contentful-paint']?.numericValue,
                        cls: audits['cumulative-layout-shift']?.numericValue,
                        si: audits['speed-index']?.numericValue,
                        tbt: audits['total-blocking-time']?.numericValue,
                    });
                } catch (e) {
                    resolve({ url: pageUrl, error: e.message });
                }
            });
        }).on('error', (err) => {
            resolve({ url: pageUrl, error: err.message });
        });
    });
}

function formatMs(ms) {
    if (ms === undefined || ms === null) return '—';
    return ms < 1000 ? `${Math.round(ms)}ms` : `${(ms / 1000).toFixed(1)}s`;
}

function scoreIcon(score) {
    if (score >= 90) return '🟢';
    if (score >= 50) return '🟡';
    return '🔴';
}

async function main() {
    console.log(`\n⚡ Core Web Vitals Check — ${new Date().toISOString().split('T')[0]}`);
    console.log(`   Target: ${BASE}`);
    console.log(`   API Key: ${API_KEY ? '✅ Configured' : '❌ None (free tier)'}`);
    console.log(`   Pages: ${PAGES.length}`);
    console.log(`   Strategy: Mobile\n`);

    console.log('  ┌─────────────────────────────────┬───────┬─────────┬─────────┬──────┬─────────┐');
    console.log('  │ Page                            │ Score │  LCP    │  FCP    │ CLS  │  TBT    │');
    console.log('  ├─────────────────────────────────┼───────┼─────────┼─────────┼──────┼─────────┤');

    for (const page of PAGES) {
        const url = `${BASE}${page}`;
        process.stdout.write(`  │ Testing ${page}...`);
        const result = await fetchPSI(url, 'mobile');
        
        // Clear the "Testing..." line
        process.stdout.write('\r');
        
        if (result.error) {
            console.log(`  │ ${page.padEnd(31)} │  ERR  │ ${result.error.slice(0, 40)}`);
        } else {
            const pageName = page.padEnd(31);
            const score = `${scoreIcon(result.score)} ${String(result.score).padStart(3)}`;
            const lcp = formatMs(result.lcp).padStart(7);
            const fcp = formatMs(result.fcp).padStart(7);
            const cls = (result.cls !== undefined ? result.cls.toFixed(3) : '—').padStart(4);
            const tbt = formatMs(result.tbt).padStart(7);
            console.log(`  │ ${pageName} │ ${score} │ ${lcp} │ ${fcp} │ ${cls} │ ${tbt} │`);
        }
    }

    console.log('  └─────────────────────────────────┴───────┴─────────┴─────────┴──────┴─────────┘');
    console.log(`\n  Thresholds: LCP < 2.5s ✅ | CLS < 0.1 ✅ | FCP < 1.8s ✅ | TBT < 200ms ✅\n`);
}

main().catch(console.error);
