#!/usr/bin/env node
/**
 * Google Indexing API — Batch URL Submission (§13.1)
 * 
 * Submits URLs to Google's Indexing API using a Service Account.
 * This bypasses the normal crawl queue and forces immediate indexing.
 * 
 * SETUP:
 * 1. Enable "Web Search Indexing API" in Google Cloud Console
 * 2. Create a Service Account with Indexing API permissions
 * 3. Download the JSON key file to scripts/gcloud-key.json
 * 4. Add the Service Account email as an owner in GSC
 * 
 * USAGE:
 *   node scripts/indexing-api.js [--dry-run] [--tier 1|2|3|all]
 * 
 * TIERS (Fibonacci waterfall — §13.1):
 *   Tier 1: Homepage + top 5 cities + top 5 services (11 URLs)
 *   Tier 2: All cities + all services (44 URLs)
 *   Tier 3: Top city×service composites (100 URLs)
 *   all:    Everything
 * 
 * QUOTA: 200 URLs/day — plan submissions carefully!
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const BASE = 'https://prokr.co';

// ═══ CITIES & SERVICES ═══
const TOP_CITIES = ['riyadh', 'jeddah', 'dammam', 'makkah', 'madinah'];
const ALL_CITIES = [
    ...TOP_CITIES,
    'al-khobar', 'dhahran', 'qatif', 'taif', 'tabuk',
    'abha', 'hail', 'jubail', 'buraidah', 'khamis-mushait',
    'najran', 'jazan', 'al-ahsa', 'yanbu', 'al-kharj',
    'hafr-albatin', 'al-baha', 'qassim', 'onizah',
];

const TOP_SERVICES = [
    'furniture-moving', 'cleaning', 'pest-control',
    'water-leak-detection', 'air-conditioner-cleaning',
];
const ALL_SERVICES = [
    ...TOP_SERVICES,
    'furniture-storage', 'moving-out', 'intercity-moving',
    'apartments-cleaning', 'sofa-cleaning', 'carpet-cleaning',
    'floor-polishing', 'termite-control', 'roof-insulation',
    'tank-insulation', 'sewage-pumping',
];

// ═══ URL TIER BUILDER (Fibonacci waterfall) ═══
function buildTierUrls(tier) {
    const urls = [];

    if (tier === '1' || tier === 'all') {
        // Tier 1: Homepage + core pages
        urls.push(`${BASE}/`);
        urls.push(`${BASE}/locations`);
        urls.push(`${BASE}/services`);
        urls.push(`${BASE}/blog`);
        urls.push(`${BASE}/llms.txt`);
        TOP_CITIES.forEach(c => urls.push(`${BASE}/${c}`));
        TOP_SERVICES.forEach(s => urls.push(`${BASE}/${s}`));
    }

    if (tier === '2' || tier === 'all') {
        // Tier 2: All cities + services
        ALL_CITIES.forEach(c => {
            if (!urls.includes(`${BASE}/${c}`)) urls.push(`${BASE}/${c}`);
        });
        ALL_SERVICES.forEach(s => {
            if (!urls.includes(`${BASE}/${s}`)) urls.push(`${BASE}/${s}`);
        });
    }

    if (tier === '3' || tier === 'all') {
        // Tier 3: Top composites
        TOP_CITIES.forEach(city => {
            ALL_SERVICES.forEach(service => {
                urls.push(`${BASE}/${city}/${service}`);
            });
        });
    }

    return [...new Set(urls)]; // dedupe
}

// ═══ JWT Token Generation ═══
async function getAccessToken(keyPath) {
    try {
        const key = JSON.parse(fs.readFileSync(keyPath, 'utf8'));
        
        // Build JWT
        const now = Math.floor(Date.now() / 1000);
        const header = Buffer.from(JSON.stringify({ alg: 'RS256', typ: 'JWT' })).toString('base64url');
        const payload = Buffer.from(JSON.stringify({
            iss: key.client_email,
            scope: 'https://www.googleapis.com/auth/indexing',
            aud: 'https://oauth2.googleapis.com/token',
            iat: now,
            exp: now + 3600,
        })).toString('base64url');

        const crypto = require('crypto');
        const sign = crypto.createSign('RSA-SHA256');
        sign.update(`${header}.${payload}`);
        const signature = sign.sign(key.private_key, 'base64url');

        const jwt = `${header}.${payload}.${signature}`;

        // Exchange JWT for access token
        return new Promise((resolve, reject) => {
            const postData = `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`;
            const req = https.request({
                hostname: 'oauth2.googleapis.com',
                path: '/token',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-Length': Buffer.byteLength(postData),
                },
            }, (res) => {
                let data = '';
                res.on('data', d => data += d);
                res.on('end', () => {
                    try {
                        const parsed = JSON.parse(data);
                        if (parsed.access_token) {
                            resolve(parsed.access_token);
                        } else {
                            reject(new Error(`Token error: ${data}`));
                        }
                    } catch (e) {
                        reject(e);
                    }
                });
            });
            req.on('error', reject);
            req.write(postData);
            req.end();
        });
    } catch (err) {
        throw new Error(`Failed to read key file: ${err.message}\n\nSetup: Download service account key to scripts/gcloud-key.json`);
    }
}

// ═══ Submit URL to Indexing API ═══
function submitUrl(url, accessToken, action = 'URL_UPDATED') {
    return new Promise((resolve) => {
        const body = JSON.stringify({ url, type: action });
        const req = https.request({
            hostname: 'indexing.googleapis.com',
            path: '/v3/urlNotifications:publish',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
                'Content-Length': Buffer.byteLength(body),
            },
        }, (res) => {
            let data = '';
            res.on('data', d => data += d);
            res.on('end', () => {
                resolve({
                    url,
                    status: res.statusCode,
                    response: data,
                });
            });
        });
        req.on('error', (err) => {
            resolve({ url, status: 0, error: err.message });
        });
        req.write(body);
        req.end();
    });
}

// ═══ MAIN ═══
async function main() {
    const args = process.argv.slice(2);
    const isDryRun = args.includes('--dry-run');
    const tierIdx = args.indexOf('--tier');
    const tier = tierIdx >= 0 ? args[tierIdx + 1] : '1';

    const urls = buildTierUrls(tier);
    const keyPath = path.join(__dirname, 'gcloud-key.json');

    console.log(`\n🔗 Google Indexing API — Batch Submission`);
    console.log(`   Tier: ${tier}`);
    console.log(`   URLs: ${urls.length}`);
    console.log(`   Mode: ${isDryRun ? '🧪 DRY RUN' : '🔥 LIVE'}`);
    console.log(`   Key:  ${fs.existsSync(keyPath) ? '✅ Found' : '❌ NOT FOUND'}\n`);

    if (isDryRun) {
        urls.forEach((u, i) => console.log(`  [${i + 1}] ${u}`));
        console.log(`\n✅ Dry run: ${urls.length} URLs would be submitted.`);
        console.log(`   Remaining quota after: ${200 - urls.length}/200 URLs/day`);
        return;
    }

    if (!fs.existsSync(keyPath)) {
        console.error('❌ Service account key not found!');
        console.error('   1. Go to Google Cloud Console → IAM → Service Accounts');
        console.error('   2. Create key (JSON) and save as: scripts/gcloud-key.json');
        console.error('   3. Add the service account email as Owner in GSC');
        process.exit(1);
    }

    console.log('🔑 Authenticating...');
    const token = await getAccessToken(keyPath);
    console.log('✅ Authenticated.\n');

    let success = 0, errors = 0;
    const BATCH = 5;
    const DELAY = 1000; // 1s between batches (respectful)

    for (let i = 0; i < urls.length; i += BATCH) {
        const batch = urls.slice(i, i + BATCH);
        const results = await Promise.all(batch.map(u => submitUrl(u, token)));

        for (const r of results) {
            const idx = urls.indexOf(r.url) + 1;
            if (r.status === 200) {
                console.log(`  ✅ [${idx}/${urls.length}] ${r.url}`);
                success++;
            } else {
                console.log(`  ❌ [${idx}/${urls.length}] ${r.url} — HTTP ${r.status}`);
                if (r.error) console.log(`     Error: ${r.error}`);
                errors++;
            }
        }

        if (i + BATCH < urls.length) {
            await new Promise(r => setTimeout(r, DELAY));
        }
    }

    console.log(`\n═══════════════════════════════════════`);
    console.log(`  ✅ Submitted: ${success}`);
    console.log(`  ❌ Failed: ${errors}`);
    console.log(`  📊 Quota used: ${urls.length}/200 (${200 - urls.length} remaining)`);
    console.log(`═══════════════════════════════════════\n`);
}

main().catch(console.error);
