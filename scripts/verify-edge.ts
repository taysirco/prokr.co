#!/usr/bin/env npx tsx
export {};
// ═══════════════════════════════════════════════════════════════
// ⚡ Edge Performance Verifier — Prokr.co
// ═══════════════════════════════════════════════════════════════
// Purpose: Verify that Cloudflare Edge Worker is active and
// caching correctly with sub-50ms TTFB on HIT.
//
// Usage:
//   npx tsx scripts/verify-edge.ts
//   npx tsx scripts/verify-edge.ts --base=http://localhost:8787
//   npx tsx scripts/verify-edge.ts --verbose
// ═══════════════════════════════════════════════════════════════

const BASE_URL = 'https://prokr.co';
const TARGET_TTFB_MS = 50; // Target: <50ms on cache HIT
const CONCURRENCY = 3;

// Parse CLI args
const args = process.argv.slice(2);
const baseArg = args.find(a => a.startsWith('--base='));
const baseUrl = baseArg ? baseArg.split('=')[1].replace(/\/$/, '') : BASE_URL;
const verbose = args.includes('--verbose');

// ── Test URLs (covering all cache rule categories) ──
const TEST_URLS = [
  // Homepage
  { url: '/', category: 'Homepage', expectedTtl: 3600 },

  // Service pages (the money pages)
  { url: '/riyadh/furniture-moving', category: 'Service Page', expectedTtl: 1800 },
  { url: '/jeddah/cleaning', category: 'Service Page', expectedTtl: 1800 },
  { url: '/dammam/pest-control', category: 'Service Page', expectedTtl: 1800 },

  // City pages
  { url: '/riyadh', category: 'City Page', expectedTtl: 3600 },
  { url: '/jeddah', category: 'City Page', expectedTtl: 3600 },

  // Static content
  { url: '/about-us', category: 'Static Page', expectedTtl: 86400 },
  { url: '/contact-us', category: 'Static Page', expectedTtl: 86400 },

  // Blog
  { url: '/blog', category: 'Blog', expectedTtl: 86400 },

  // API (should BYPASS)
  { url: '/api/sitemap-index', category: 'API', bypass: true },

  // Locations
  { url: '/locations', category: 'Static Page', expectedTtl: 86400 },

  // RSC Request (should BYPASS-RSC — prevents cache poisoning)
  { url: '/riyadh/furniture-moving', category: 'RSC Bypass', rsc: true },

  // UTM Cache Normalization (should share cache key with clean URL)
  { url: '/riyadh/furniture-moving?utm_source=test&fbclid=abc', category: 'UTM Normalization', utmTest: true },

  // www → non-www redirect (Worker must handle, Firebase returns 404 for www)
  { url: '/', category: 'www Redirect', wwwRedirect: true },

  // Auth cookie bypass (prevents personalized content leaking to cache)
  { url: '/riyadh/furniture-moving', category: 'Auth Bypass', authBypass: true },
];

interface TestResult {
  url: string;
  category: string;
  missResults: {
    ttfb: number;
    status: number;
    cacheStatus: string;
    edgeWorker: string;
  };
  hitResults: {
    ttfb: number;
    status: number;
    cacheStatus: string;
    edgeTtfb: string;
    edgePop: string;
    serverTiming: string;
  };
  pass: boolean;
  reason?: string;
}

async function testUrl(url: string, category: string, bypass: boolean = false, rsc: boolean = false, utmTest: boolean = false, wwwRedirect: boolean = false, authBypass: boolean = false): Promise<TestResult | null> {
  const fullUrl = `${baseUrl}${url}`;

  try {
    // ── Special: www → non-www redirect test ──
    if (wwwRedirect) {
      const wwwUrl = baseUrl.replace('://prokr.co', '://www.prokr.co') + url;
      const wwwRes = await fetch(wwwUrl, { redirect: 'manual' });
      const location = wwwRes.headers.get('location') || '';
      const pass = wwwRes.status === 301 && location.includes('prokr.co') && !location.includes('www.');
      return {
        url: 'www.prokr.co' + url, category,
        missResults: { ttfb: 0, status: wwwRes.status, cacheStatus: `Location: ${location}`, edgeWorker: wwwRes.headers.get('x-edge-worker') || 'NONE' },
        hitResults: { ttfb: 0, status: 0, cacheStatus: 'N/A', edgeTtfb: 'N/A', edgePop: 'N/A', serverTiming: 'N/A' },
        pass,
        reason: pass ? undefined : `www redirect failed (status=${wwwRes.status}, location=${location})`,
      };
    }

    // ── Special: Auth cookie bypass test ──
    if (authBypass) {
      const authRes = await fetch(fullUrl, {
        headers: {
          'Accept': 'text/html',
          'User-Agent': 'ProkrEdgeVerifier/1.0',
          'Cookie': '__session=fake_test_token',
        },
      });
      await authRes.text();
      const cacheStatus = authRes.headers.get('x-cache-status') || 'NONE';
      const pass = cacheStatus === 'BYPASS-AUTH';
      return {
        url, category,
        missResults: { ttfb: 0, status: authRes.status, cacheStatus, edgeWorker: authRes.headers.get('x-edge-worker') || 'NONE' },
        hitResults: { ttfb: 0, status: 0, cacheStatus: 'N/A', edgeTtfb: 'N/A', edgePop: 'N/A', serverTiming: 'N/A' },
        pass,
        reason: pass ? undefined : `Auth request NOT bypassed (got ${cacheStatus}, expected BYPASS-AUTH)`,
      };
    }

    // ── Special: RSC bypass test ──
    if (rsc) {
      const rscRes = await fetch(fullUrl, {
        headers: {
          'Accept': 'text/html',
          'User-Agent': 'ProkrEdgeVerifier/1.0',
          'RSC': '1',
          'Next-Router-State-Tree': '%5B%22%22%5D',
        },
      });
      await rscRes.text();
      const cacheStatus = rscRes.headers.get('x-cache-status') || 'NONE';
      const pass = cacheStatus === 'BYPASS-RSC';
      return {
        url, category,
        missResults: { ttfb: 0, status: rscRes.status, cacheStatus, edgeWorker: rscRes.headers.get('x-edge-worker') || 'NONE' },
        hitResults: { ttfb: 0, status: 0, cacheStatus: 'N/A', edgeTtfb: 'N/A', edgePop: 'N/A', serverTiming: 'N/A' },
        pass,
        reason: pass ? undefined : `RSC request NOT bypassed (got ${cacheStatus}, expected BYPASS-RSC)`,
      };
    }

    // ── Special: UTM normalization test ──
    if (utmTest) {
      // First warm the clean URL
      await fetch(`${baseUrl}/riyadh/furniture-moving`, {
        headers: { 'Accept': 'text/html', 'User-Agent': 'ProkrEdgeVerifier/1.0' },
      }).then(r => r.text());
      await new Promise(r => setTimeout(r, 300));

      // Now fetch the UTM-tagged URL — should be a cache HIT (same cache key)
      const utmRes = await fetch(fullUrl, {
        headers: { 'Accept': 'text/html', 'User-Agent': 'ProkrEdgeVerifier/1.0' },
      });
      await utmRes.text();
      const cacheStatus = utmRes.headers.get('x-cache-status') || 'NONE';
      const pass = cacheStatus === 'HIT';
      return {
        url, category,
        missResults: { ttfb: 0, status: utmRes.status, cacheStatus, edgeWorker: utmRes.headers.get('x-edge-worker') || 'NONE' },
        hitResults: { ttfb: 0, status: 0, cacheStatus: 'N/A', edgeTtfb: 'N/A', edgePop: 'N/A', serverTiming: 'N/A' },
        pass,
        reason: pass ? undefined : `UTM URL not sharing cache key (got ${cacheStatus}, expected HIT)`,
      };
    }

    // ── First request: MISS (warm the cache) ──
    const miss1Start = performance.now();
    const missRes = await fetch(fullUrl, {
      headers: {
        'Accept': 'text/html',
        'User-Agent': 'ProkrEdgeVerifier/1.0',
      },
    });
    const missTtfb = Math.round(performance.now() - miss1Start);
    await missRes.text(); // consume body

    const missCacheStatus = missRes.headers.get('x-cache-status') || 'NONE';
    const missEdgeWorker = missRes.headers.get('x-edge-worker') || 'NONE';

    // Wait a moment for cache storage
    await new Promise(r => setTimeout(r, 300));

    // ── Second request: Should be HIT ──
    const hit1Start = performance.now();
    const hitRes = await fetch(fullUrl, {
      headers: {
        'Accept': 'text/html',
        'User-Agent': 'ProkrEdgeVerifier/1.0',
      },
    });
    const hitTtfb = Math.round(performance.now() - hit1Start);
    await hitRes.text(); // consume body

    const hitCacheStatus = hitRes.headers.get('x-cache-status') || 'NONE';
    const hitEdgeTtfb = hitRes.headers.get('x-edge-ttfb') || 'N/A';
    const hitEdgePop = hitRes.headers.get('x-edge-pop') || 'N/A';
    const hitServerTiming = hitRes.headers.get('server-timing') || 'N/A';

    // ── Determine pass/fail ──
    let pass = true;
    let reason = '';

    if (bypass) {
      // API routes should show BYPASS
      if (missCacheStatus !== 'BYPASS') {
        pass = false;
        reason = `Expected BYPASS, got ${missCacheStatus}`;
      }
    } else {
      // Check Worker is active
      if (missEdgeWorker === 'NONE') {
        pass = false;
        reason = 'Edge Worker not active (X-Edge-Worker header missing)';
      }
      // Check second request is cached
      else if (hitCacheStatus !== 'HIT') {
        pass = false;
        reason = `Second request not cached (got ${hitCacheStatus}, expected HIT)`;
      }
      // Check HIT TTFB is fast
      else if (hitTtfb > TARGET_TTFB_MS * 3) {
        // Allow 3x target for network latency in verification
        pass = false;
        reason = `HIT TTFB too slow: ${hitTtfb}ms (target: <${TARGET_TTFB_MS * 3}ms)`;
      }
    }

    return {
      url,
      category,
      missResults: {
        ttfb: missTtfb,
        status: missRes.status,
        cacheStatus: missCacheStatus,
        edgeWorker: missEdgeWorker,
      },
      hitResults: {
        ttfb: hitTtfb,
        status: hitRes.status,
        cacheStatus: hitCacheStatus,
        edgeTtfb: hitEdgeTtfb,
        edgePop: hitEdgePop,
        serverTiming: hitServerTiming,
      },
      pass,
      reason,
    };
  } catch (err: any) {
    return {
      url,
      category,
      missResults: { ttfb: 0, status: 0, cacheStatus: 'ERROR', edgeWorker: 'ERROR' },
      hitResults: { ttfb: 0, status: 0, cacheStatus: 'ERROR', edgeTtfb: 'ERROR', edgePop: 'ERROR', serverTiming: 'ERROR' },
      pass: false,
      reason: `Fetch error: ${err.message}`,
    };
  }
}

async function main() {
  console.log('');
  console.log('⚡ Prokr.co Edge Performance Verifier');
  console.log(`   Target: ${baseUrl}`);
  console.log(`   Target TTFB (HIT): <${TARGET_TTFB_MS}ms`);
  console.log(`   Test URLs: ${TEST_URLS.length}`);
  console.log('');

  const results: TestResult[] = [];

  // Run tests sequentially (to avoid cache contention)
  for (const test of TEST_URLS) {
    const result = await testUrl(test.url, test.category, test.bypass, test.rsc, test.utmTest, test.wwwRedirect, test.authBypass);
    if (result) {
      results.push(result);

      const icon = result.pass ? '✅' : '❌';
      const hitTtfb = result.hitResults.cacheStatus === 'HIT'
        ? `⚡ ${result.hitResults.ttfb}ms`
        : result.hitResults.cacheStatus;

      console.log(`${icon} [${result.category}] ${result.url}`);
      console.log(`   MISS: ${result.missResults.ttfb}ms (${result.missResults.cacheStatus}) → HIT: ${hitTtfb}`);

      if (!result.pass && result.reason) {
        console.log(`   ⚠️  ${result.reason}`);
      }

      if (verbose) {
        console.log(`   Edge Worker: ${result.missResults.edgeWorker}`);
        console.log(`   Edge Pop: ${result.hitResults.edgePop}`);
        console.log(`   Server-Timing: ${result.hitResults.serverTiming}`);
      }

      console.log('');
    }
  }

  // ── Summary Report ──
  const passed = results.filter(r => r.pass);
  const failed = results.filter(r => !r.pass);
  const hitResults = results.filter(r => r.hitResults.cacheStatus === 'HIT');
  const avgHitTtfb = hitResults.length > 0
    ? Math.round(hitResults.reduce((sum, r) => sum + r.hitResults.ttfb, 0) / hitResults.length)
    : 0;
  const avgMissTtfb = results.length > 0
    ? Math.round(results.reduce((sum, r) => sum + r.missResults.ttfb, 0) / results.length)
    : 0;

  const workerActive = results.some(r => r.missResults.edgeWorker !== 'NONE');

  console.log('═══════════════════════════════════════════════');
  console.log('  ⚡ EDGE PERFORMANCE REPORT — Prokr.co');
  console.log('═══════════════════════════════════════════════');
  console.log(`  Target:            ${baseUrl}`);
  console.log(`  Edge Worker:       ${workerActive ? '✅ ACTIVE (prokr-v1)' : '❌ NOT DETECTED'}`);
  console.log('───────────────────────────────────────────────');
  console.log(`  Tests:             ${results.length}`);
  console.log(`  ✅ Passed:         ${passed.length}`);
  console.log(`  ❌ Failed:         ${failed.length}`);
  console.log('───────────────────────────────────────────────');
  console.log(`  Cache HIT Rate:    ${hitResults.length}/${results.filter(r => !r.hitResults.cacheStatus.includes('BYPASS')).length}`);
  console.log(`  Avg MISS TTFB:     ${avgMissTtfb}ms (origin)`);
  console.log(`  Avg HIT TTFB:      ${avgHitTtfb}ms (edge)`);
  console.log(`  Speed Improvement: ${avgMissTtfb > 0 ? Math.round(avgMissTtfb / Math.max(avgHitTtfb, 1)) : '?'}x faster`);
  console.log('═══════════════════════════════════════════════');

  if (failed.length > 0) {
    console.log('\n❌ FAILED TESTS:');
    for (const f of failed) {
      console.log(`   ${f.url} — ${f.reason}`);
    }
  }

  if (!workerActive) {
    console.log('\n');
    console.log('⚠️  Edge Worker NOT detected!');
    console.log('   Possible causes:');
    console.log('   1. Worker not deployed (run: cd cloudflare/edge-cache && npx wrangler deploy)');
    console.log('   2. DNS not pointing to Cloudflare (check NS records)');
    console.log('   3. Cloudflare proxy disabled (enable orange cloud in DNS settings)');
    console.log('   4. Worker route not matching (check wrangler.toml routes)');
  }

  console.log('\n');

  // Exit with error code if any tests failed
  process.exit(failed.length > 0 ? 1 : 0);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
