#!/usr/bin/env npx tsx
export {};
// 🕷️ LOCAL VERIFICATION CRAWL — crawl localhost:3000 to verify all fixes
const BASE_URL = 'http://localhost:3000';
const MAX_PAGES = 2000;
const CONCURRENCY = 5;
const TIMEOUT = 30000;

interface CrawlResult {
    url: string; status: number; redirected: boolean; redirectUrl?: string;
    responseTime: number; linksFound: number; foundOn: string; error?: string; title?: string;
}

const visited = new Set<string>();
const queue: { href: string; foundOn: string }[] = [];
const results: CrawlResult[] = [];
let crawledCount = 0;

function normalizeUrl(href: string, pageUrl: string): string | null {
    try {
        if (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')
            || href.startsWith('#') || href.startsWith('data:') || href.startsWith('whatsapp:')
            || href.startsWith('https://wa.me') || href.startsWith('https://www.facebook')
            || href.startsWith('https://twitter') || href.startsWith('https://x.com')
            || href.startsWith('https://www.instagram') || href.startsWith('https://www.google')
            || href.startsWith('https://maps.google') || href.startsWith('https://www.tiktok')) return null;
        const url = new URL(href, pageUrl);
        if (!url.hostname.includes('localhost') && !url.hostname.includes('prokr.co') 
            && !url.hostname.includes('prokr--prokr')) return null;
        if (url.pathname.match(/\.(css|js|png|jpg|jpeg|gif|svg|webp|ico|woff|woff2|ttf|eot|pdf|xml|txt|json|manifest|rss)$/i)) return null;
        if (url.pathname.startsWith('/_next/') || url.pathname.startsWith('/api/') || url.pathname.includes('opengraph-image')) return null;
        url.hash = ''; url.search = '';
        let path = url.pathname.replace(/\/+$/, '') || '/';
        return `${BASE_URL}${path}`;
    } catch { return null; }
}

function extractLinks(html: string, pageUrl: string): string[] {
    const links: string[] = [];
    const hrefRegex = /href="([^"]*?)"/g;
    let match;
    while ((match = hrefRegex.exec(html)) !== null) {
        let href = match[1];
        if (href.startsWith('https://prokr.co/')) href = href.replace('https://prokr.co', '');
        if (href.startsWith('https://prokr.co')) href = href.replace('https://prokr.co', '');
        if (href.startsWith('https://prokr--prokr-84ca8.us-east4.hosted.app/'))
            href = href.replace('https://prokr--prokr-84ca8.us-east4.hosted.app', '');
        const normalized = normalizeUrl(href, pageUrl);
        if (normalized) links.push(normalized);
    }
    return [...new Set(links)];
}

function extractTitle(html: string): string {
    const m = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    return m ? m[1].trim().substring(0, 80) : '';
}

async function crawlPage(url: string, foundOn: string): Promise<CrawlResult> {
    const start = Date.now();
    try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), TIMEOUT);
        const response = await fetch(url, {
            signal: controller.signal, redirect: 'follow',
            headers: { 'User-Agent': 'ProkrCrawler/3.0', 'Accept': 'text/html' },
        });
        clearTimeout(timeout);
        const responseTime = Date.now() - start;
        const ct = response.headers.get('content-type') || '';
        let linksFound = 0; let title = '';
        if (ct.includes('text/html')) {
            const html = await response.text();
            title = extractTitle(html);
            const links = extractLinks(html, url);
            linksFound = links.length;
            for (const link of links) {
                if (!visited.has(link)) queue.push({ href: link, foundOn: url });
            }
        }
        const isSoft404 = response.status === 200 && (title.includes('غير موجودة') || title.includes('404'));
        return { url, status: isSoft404 ? 404 : response.status, redirected: response.redirected,
            redirectUrl: response.redirected ? response.url : undefined, responseTime, linksFound, foundOn, title,
            error: isSoft404 ? 'SOFT 404' : undefined };
    } catch (e: any) {
        return { url, status: 0, redirected: false, responseTime: Date.now() - start,
            linksFound: 0, foundOn, error: e.message?.substring(0, 100) };
    }
}

async function run() {
    console.log('═══════════════════════════════════════════════════════════════');
    console.log('🕷️  LOCAL VERIFICATION CRAWL — localhost:3000');
    console.log(`📅 ${new Date().toISOString()}`);
    console.log('═══════════════════════════════════════════════════════════════\n');

    const seeds = ['/', '/about-us', '/contact-us', '/advertise', '/blog', '/services', '/locations',
        '/privacy-policy', '/terms-of-service', '/research/pricing-index',
        '/riyadh', '/jeddah', '/makkah', '/madinah', '/dammam',
        '/al-khobar', '/dhahran', '/jubail', '/al-ahsa', '/qatif',
        '/taif', '/yanbu', '/tabuk', '/hail', '/abha',
        '/khamis-mushait', '/najran', '/jazan', '/al-baha',
        '/al-kharj', '/qassim', '/buraidah', '/onizah', '/hafr-albatin'];
    for (const p of seeds) {
        const url = `${BASE_URL}${p}`;
        if (!visited.has(url)) queue.push({ href: url, foundOn: 'SEED' });
    }
    console.log(`🌱 Seeded ${queue.length} URLs\n`);

    while (queue.length > 0 && crawledCount < MAX_PAGES) {
        const batch = queue.splice(0, CONCURRENCY).filter(item => {
            if (visited.has(item.href)) return false;
            visited.add(item.href);
            return true;
        });
        if (batch.length === 0) continue;
        const br = await Promise.all(batch.map(i => crawlPage(i.href, i.foundOn)));
        for (const r of br) {
            results.push(r);
            crawledCount++;
            const short = r.url.replace(BASE_URL, '');
            if (r.status !== 200 || crawledCount % 50 === 0) {
                const icon = r.status === 200 ? '✅' : r.status === 404 ? '❌' : r.status >= 300 && r.status < 400 ? '↪️' : r.status >= 500 ? '💥' : '⚠️';
                const from = r.foundOn.replace(BASE_URL, '') || 'SEED';
                console.log(`  ${icon} [${r.status}] ${short.padEnd(55)} ← ${from.substring(0, 40)}`);
            }
        }
        if (crawledCount % 100 === 0) {
            const broken = results.filter(r => r.status === 404).length;
            console.log(`\n  📊 ${crawledCount} crawled | ${queue.length} queued | ${broken} broken\n`);
        }
        await new Promise(r => setTimeout(r, 50)); // Local is fast
    }

    // ═══ REPORT ═══
    const ok = results.filter(r => r.status === 200);
    const notFound = results.filter(r => r.status === 404);
    const serverErrors = results.filter(r => r.status >= 500);
    const timeouts = results.filter(r => r.status === 0);
    const redirects = results.filter(r => r.redirected);
    
    const brokenBySource = new Map<string, string[]>();
    for (const r of notFound) {
        const src = r.foundOn.replace(BASE_URL, '') || 'SEED';
        if (!brokenBySource.has(src)) brokenBySource.set(src, []);
        brokenBySource.get(src)!.push(r.url.replace(BASE_URL, ''));
    }

    console.log('\n\n' + '═'.repeat(65));
    console.log('📊 LOCAL VERIFICATION CRAWL REPORT');
    console.log('═'.repeat(65));
    console.log(`\n  Total crawled:     ${results.length}`);
    console.log(`  ✅ 200 OK:         ${ok.length}`);
    console.log(`  ❌ 404:            ${notFound.length}`);
    console.log(`  💥 5xx:            ${serverErrors.length}`);
    console.log(`  ⏱️  Errors:         ${timeouts.length}`);
    console.log(`  ↪️  Redirected:     ${redirects.length}`);

    if (notFound.length > 0) {
        console.log(`\n\n🔴 BROKEN LINKS (${notFound.length}):`);
        console.log('─'.repeat(65));
        for (const [source, targets] of brokenBySource) {
            console.log(`\n  📄 Page: ${source}`);
            for (const t of targets) console.log(`     ❌ → ${t}`);
        }
    }

    if (redirects.length > 0) {
        console.log(`\n\n↪️  REDIRECTS (${redirects.length}):`);
        for (const r of redirects) console.log(`  ${r.url.replace(BASE_URL, '')} → ${r.redirectUrl?.replace(BASE_URL, '') || '?'}`);
    }

    console.log('\n' + '═'.repeat(65));
    if (notFound.length === 0 && serverErrors.length === 0) {
        console.log('✅ VERDICT: صفر روابط مكسورة — الكود المحلي نظيف 100%');
    } else {
        console.log(`❌ VERDICT: ${notFound.length} broken links found in LOCAL build`);
    }
    console.log('═'.repeat(65));
}

run().catch(console.error);
