#!/usr/bin/env node
/**
 * Internal Linking Audit — Finds orphan pages & link equity distribution
 * 
 * Crawls the sitemap and checks how many internal links each page receives.
 * Pages with < 3 internal links are flagged as "thin" link equity.
 * 
 * Usage: node scripts/internal-links-audit.js
 */

const https = require('https');

const BASE = 'https://prokr.co';

function fetch(url) {
    return new Promise((resolve) => {
        https.get(url, { headers: { 'User-Agent': 'ProkrLinkAuditor/1.0' } }, (res) => {
            let data = '';
            res.on('data', d => data += d);
            res.on('end', () => resolve({ url, status: res.statusCode, body: data }));
        }).on('error', (err) => resolve({ url, status: 0, error: err.message, body: '' }));
    });
}

async function main() {
    console.log(`\n🔗 Internal Linking Audit — ${new Date().toISOString().split('T')[0]}`);
    console.log(`   Target: ${BASE}\n`);

    // 1. Get all URLs from sitemap
    const indexRes = await fetch(`${BASE}/api/sitemap-index`);
    const sitemapUrls = (indexRes.body.match(/<loc>([^<]+)<\/loc>/g) || []).map(m => m.replace(/<\/?loc>/g, ''));
    
    let allUrls = [];
    for (const sUrl of sitemapUrls.slice(0, 5)) {
        const res = await fetch(sUrl);
        const urls = (res.body.match(/<loc>([^<]+)<\/loc>/g) || []).map(m => m.replace(/<\/?loc>/g, ''));
        allUrls.push(...urls);
    }
    
    console.log(`  📊 Total URLs in sitemap: ${allUrls.length}`);
    
    // 2. Sample key pages and count internal links
    const samplePages = [
        '/', '/riyadh', '/jeddah', '/dammam', '/makkah',
        '/furniture-moving', '/cleaning', '/pest-control',
        '/riyadh/furniture-moving', '/jeddah/cleaning',
        '/blog', '/about-us', '/services', '/locations',
    ];
    
    console.log(`  🔍 Checking ${samplePages.length} key pages...\n`);
    
    const linkMap = {};
    
    for (const path of samplePages) {
        const res = await fetch(`${BASE}${path}`);
        if (res.status !== 200) {
            console.log(`  ❌ ${path} → HTTP ${res.status}`);
            continue;
        }
        
        // Count internal links to prokr.co or relative
        const internalLinks = (res.body.match(/href="(https:\/\/prokr\.co[^"]*|\/[^"]*?)"/g) || [])
            .map(m => m.replace(/href="([^"]*)"/,'$1'))
            .filter(u => !u.includes('/_next') && !u.includes('/api/') && !u.startsWith('/#'));
        
        const uniqueLinks = [...new Set(internalLinks)];
        const externalLinks = (res.body.match(/href="https?:\/\/(?!prokr\.co)[^"]+"/g) || []);
        
        // Track which pages this page links to
        for (const link of uniqueLinks) {
            const normalized = link.replace('https://prokr.co', '').replace(/\/$/, '') || '/';
            if (!linkMap[normalized]) linkMap[normalized] = { inbound: 0, sources: [] };
            linkMap[normalized].inbound++;
            linkMap[normalized].sources.push(path);
        }
        
        console.log(`  📄 ${path.padEnd(35)} → ${uniqueLinks.length} internal, ${externalLinks.length} external`);
    }
    
    // 3. Find pages with low inbound links
    console.log(`\n  === Top 10 Most Linked Pages ===`);
    const sorted = Object.entries(linkMap).sort((a, b) => b[1].inbound - a[1].inbound);
    sorted.slice(0, 10).forEach(([url, data]) => {
        console.log(`    ${data.inbound} links → ${url}`);
    });
    
    // 4. Check key pages from sitemap for orphan risk
    console.log(`\n  === Orphan Risk (0-1 inbound from sample) ===`);
    const keyPaths = allUrls
        .map(u => u.replace('https://prokr.co', '').replace(/\/$/, '') || '/')
        .filter(p => !p.includes('/api/') && !p.includes('/_next'));
    
    let orphanCount = 0;
    for (const path of keyPaths.slice(0, 50)) {
        const data = linkMap[path];
        if (!data || data.inbound <= 1) {
            orphanCount++;
            if (orphanCount <= 15) {
                console.log(`    ⚠️  ${path} — ${data ? data.inbound : 0} inbound links`);
            }
        }
    }
    if (orphanCount > 15) console.log(`    ... and ${orphanCount - 15} more`);
    
    console.log(`\n═══════════════════════════════════════`);
    console.log(`  📊 Summary:`);
    console.log(`    Sitemap URLs: ${allUrls.length}`);
    console.log(`    Pages sampled: ${samplePages.length}`);
    console.log(`    Unique internal destinations: ${Object.keys(linkMap).length}`);
    console.log(`    Orphan risk (0-1 links): ${orphanCount} pages`);
    console.log(`═══════════════════════════════════════\n`);
}

main().catch(console.error);
