// ═══════════════════════════════════════════════════════════════════════
// 🛡️ Prokr.co Edge Cache Worker — Cloudflare Worker
// ═══════════════════════════════════════════════════════════════════════
// Purpose: Intercept ALL requests to prokr.co and serve cached HTML
// from Cloudflare's edge network (Cairo/Riyadh/Jeddah PoPs).
//
// Problem: Firebase App Hosting sends `cache-control: no-store` on
// every HTML response, preventing ANY CDN caching. This Worker
// overrides those headers and manages its own intelligent cache.
//
// Result: TTFB drops from ~600ms (origin) to ~10ms (edge HIT).
// Google sees Core Web Vitals 100/100 → ranking boost.
//
// Architecture:
//   Client → Cloudflare Edge Worker → Cache API (HIT = 10ms)
//                                   → Firebase Origin (MISS = 500ms)
// ═══════════════════════════════════════════════════════════════════════

// ── Configuration ──────────────────────────────────────────────────────

/**
 * Path-based TTL strategy (in seconds).
 * Each rule is checked in order — first match wins.
 */
const CACHE_RULES = [
  // ── BYPASS: Never cache these paths ──
  // NOTE: trailing (\/|$) — pathname is query-stripped, so /_next/image (the
  // optimizer is called as /_next/image?url=...) MUST match here, otherwise it
  // falls through, gets mishandled, and returns 404 — disabling AVIF/WebP/srcset
  // site-wide. Was: ...|\.well-known)\/  (the trailing slash broke /_next/image).
  { pattern: /^\/(api|admin|_next\/data|_next\/image|__\/auth|\.well-known)(\/|$)/,  ttl: 0, bypass: true },
  { pattern: /^\/(api|admin)$/,                                     ttl: 0, bypass: true },
  { pattern: /^\/search/,                                           ttl: 0, bypass: true },
  { pattern: /^\/verify\//,                                         ttl: 0, bypass: true },
  { pattern: /^\/(corporate|regions|offline|maintenance|test-buttons)(\/|$)/,  ttl: 0, bypass: true },

  // ── SPECIFIC FILES: Must be before generic extension match ──
  { pattern: /^\/sw\.js$/,         ttl: 0, bypass: true },
  { pattern: /^\/manifest\.json$/, ttl: 86400, swr: 3600 },

  // ── IMMUTABLE: Static assets (1 year) ──
  { pattern: /^\/_next\/static\//,  ttl: 31536000, immutable: true },
  { pattern: /^\/images\//,         ttl: 31536000, immutable: true },
  { pattern: /^\/fonts\//,          ttl: 31536000, immutable: true },
  { pattern: /\.(js|css|woff2?|ttf|eot|svg|png|jpe?g|gif|webp|avif|ico|mp4|webm)$/i, ttl: 31536000, immutable: true },

  // ── LONG: Semi-static content (24h) ──
  { pattern: /^\/blog(\/.*)?$/,      ttl: 86400,  swr: 3600  },
  { pattern: /^\/about-us$/,         ttl: 86400,  swr: 3600  },
  { pattern: /^\/contact-us$/,       ttl: 86400,  swr: 3600  },
  { pattern: /^\/privacy-policy$/,   ttl: 86400,  swr: 3600  },
  { pattern: /^\/terms-of-service$/, ttl: 86400,  swr: 3600  },
  { pattern: /^\/llms\.txt$/,        ttl: 86400,  swr: 3600  },
  { pattern: /^\/services/,          ttl: 86400,  swr: 3600  },
  { pattern: /^\/locations$/,        ttl: 86400,  swr: 3600  },
  { pattern: /^\/advertise$/,        ttl: 86400,  swr: 3600  },

  // ── SEO FILES: robots.txt, sitemaps (1h) ──
  { pattern: /^\/robots\.txt$/,      ttl: 3600,   swr: 600   },
  { pattern: /^\/sitemap/,           ttl: 3600,   swr: 600   },

  // ── MEDIUM: Company pages (1h) ──
  { pattern: /^\/company\//,  ttl: 3600,  swr: 600  },

  // ── HOMEPAGE ──
  { pattern: /^\/$/,  ttl: 3600,  swr: 600,  botTtl: 86400 },

  // ── SERVICE PAGES: The money pages (30min for users, 24h for bots) ──
  // Pattern: /{city}/{service} — 2 lowercase-hyphen segments, no extension
  // Must come AFTER all specific 2-segment paths (company, blog, etc.)
  { pattern: /^\/[a-z][a-z0-9-]*\/[a-z][a-z0-9-]*$/,  ttl: 1800,  swr: 600,  botTtl: 86400 },

  // ── CITY PAGES: City hub pages (1h) ──
  // Pattern: /{city} — single lowercase-hyphen segment, no extension
  { pattern: /^\/[a-z][a-z0-9-]*$/,  ttl: 3600,  swr: 600,  botTtl: 86400 },
];

/**
 * Bot User-Agent patterns for extended caching.
 * These crawlers get longer TTLs because content freshness
 * matters less for indexing than speed.
 */
const BOT_PATTERNS = [
  /googlebot/i,
  /bingbot/i,
  /yandexbot/i,
  /duckduckbot/i,
  /baiduspider/i,
  /slurp/i,
  /facebookexternalhit/i,
  /twitterbot/i,
  /linkedinbot/i,
  /applebot/i,
  /gptbot/i,
  /chatgpt/i,
  /claude/i,
  /perplexitybot/i,
  /prokrcachewarmer/i,
];

/**
 * Tracking query parameters to strip from cache keys.
 * These create unique URLs for the same content, fragmenting the cache.
 * Example: /riyadh/furniture-moving?fbclid=abc → cache key: /riyadh/furniture-moving
 */
const TRACKING_PARAMS = new Set([
  'fbclid', 'gclid', 'gclsrc', 'dclid', 'msclkid',
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'utm_id',
  'mc_cid', 'mc_eid',
  'ref', '_ga', '_gl',
  'fb_action_ids', 'fb_action_types', 'fb_source',
  'twclid', 'ttclid', 'li_fat_id',
  'igshid', 'scid',
]);

/**
 * Headers to preserve from origin response.
 * These are security/SEO headers that must pass through.
 *
 * ⚠️ IMPORTANT: Do NOT include 'content-encoding' here.
 * When we read the body with arrayBuffer(), the runtime auto-decompresses it.
 * If we then set content-encoding: gzip on the cached response, the client
 * receives decompressed bytes with a gzip header → broken response.
 * Cloudflare will auto-negotiate encoding on the outbound response.
 */
const PRESERVE_HEADERS = [
  'content-type',
  'content-language',
  'link',                    // Next.js font/CSS preload hints — critical for LCP
  'x-robots-tag',            // noindex/nofollow directives from origin
  'strict-transport-security',
  'x-frame-options',
  'x-content-type-options',
  'x-xss-protection',
  'referrer-policy',
  'permissions-policy',
  'content-security-policy',
];

// ── Main Worker Handler ────────────────────────────────────────────────

export default {
  /**
   * @param {Request} request
   * @param {Object} env
   * @param {Object} ctx
   */
  async fetch(request, env, ctx) {
    const startTime = Date.now();

    // Only cache GET and HEAD requests
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      return fetch(request);
    }

    const url = new URL(request.url);
    const pathname = url.pathname;

    // ── 🔴 CRITICAL: www → non-www redirect ──
    // Firebase App Hosting only recognizes prokr.co, NOT www.prokr.co.
    // Without this redirect, www requests would get 404 from Firebase.
    // Must be FIRST — before any cache logic to avoid caching wrong responses.
    if (url.hostname === 'www.prokr.co') {
      const canonical = new URL(url.toString());
      canonical.hostname = 'prokr.co';
      return new Response(null, {
        status: 301,
        headers: {
          'Location': canonical.toString(),
          'X-Edge-Worker': 'prokr-v1',
          'Cache-Control': 'public, max-age=86400',
        },
      });
    }

    // ── 🔗 Canonical Service URL Redirect ──
    // /services-page/{slug} → /{slug} (301 permanent)
    // The canonical URL for services is /{slug}, not /services-page/{slug}.
    // Must be at Worker level because the Worker caches /services-page/ paths
    // for 24h, preventing the Next.js middleware redirect from ever firing.
    if (pathname.startsWith('/services-page/')) {
      const serviceSlug = pathname.replace('/services-page/', '').replace(/\/+$/, '');
      if (serviceSlug && serviceSlug !== 'opengraph-image') {
        const canonicalUrl = new URL(url.toString());
        canonicalUrl.pathname = `/${serviceSlug}`;
        return new Response(null, {
          status: 301,
          headers: {
            'Location': canonicalUrl.toString(),
            'X-Edge-Worker': 'prokr-v1',
            'Cache-Control': 'public, max-age=86400',
          },
        });
      }
    }

    const userAgent = request.headers.get('user-agent') || '';
    const isBot = BOT_PATTERNS.some(p => p.test(userAgent));
    const isWarmRequest = request.headers.get('x-prokr-warm') === 'true';

    // ── Skip caching for authenticated requests ──
    // Firebase auth cookies indicate a logged-in user session.
    // Never cache personalized/authenticated responses — they'd leak to other users.
    const cookie = request.headers.get('cookie') || '';
    const hasAuthCookie = cookie.includes('__session') || cookie.includes('firebase');
    if (hasAuthCookie && !isBot && !isWarmRequest) {
      const response = await fetch(request);
      const headers = new Headers(response.headers);
      headers.set('X-Cache-Status', 'BYPASS-AUTH');
      headers.set('X-Edge-Worker', 'prokr-v1');
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers,
      });
    }

    // ── 🔴 CRITICAL: Skip caching for Next.js RSC (React Server Components) requests ──
    // When Next.js navigates client-side, it sends `RSC: 1` header.
    // The server responds with RSC payload (text/plain) — NOT HTML.
    // If we cache this RSC response, all subsequent requests (including Googlebot)
    // receive garbage RSC payload instead of actual HTML → SEO catastrophe.
    // Also bypass Next-Router-Prefetch as it returns partial RSC data.
    const isRscRequest = request.headers.get('rsc') === '1'
      || request.headers.has('next-router-state-tree')
      || request.headers.has('next-router-prefetch')
      || request.headers.has('next-router-segment-prefetch');
    if (isRscRequest) {
      const response = await fetch(request);
      const headers = new Headers(response.headers);
      headers.set('X-Cache-Status', 'BYPASS-RSC');
      headers.set('X-Edge-Worker', 'prokr-v1');
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers,
      });
    }

    // ── Bypass cache for markdown content negotiation (AI agents) ──
    // `Accept: text/markdown` is rewritten by middleware to /api/markdown-negotiate.
    // The default cache key does NOT vary on Accept, so without this an agent would
    // receive cached HTML (the flagship "clean markdown for agents" feature was dead
    // at the edge). Pass straight to origin and advertise Vary: Accept.
    const acceptHeader = request.headers.get('accept') || '';
    if (acceptHeader.includes('text/markdown')) {
      const response = await fetch(request);
      const headers = new Headers(response.headers);
      headers.set('X-Cache-Status', 'BYPASS-MARKDOWN');
      headers.set('X-Edge-Worker', 'prokr-v1');
      headers.set('Vary', 'Accept, Accept-Encoding');
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers,
      });
    }

    // ── Find matching cache rule ──
    const rule = findCacheRule(pathname);

    // ── BYPASS: Pass through directly to origin ──
    if (rule.bypass) {
      const response = await fetch(request);
      const headers = new Headers(response.headers);
      headers.set('X-Cache-Status', 'BYPASS');
      headers.set('X-Edge-Worker', 'prokr-v1');
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers,
      });
    }

    // ── Determine TTL ──
    const effectiveTtl = (isBot || isWarmRequest) && rule.botTtl
      ? rule.botTtl
      : rule.ttl;

    // ── Build cache key ──
    // Normalize the URL for cache key to prevent fragmentation:
    // 1. Strip tracking query params (?fbclid=, ?utm_source=, etc.)
    // 2. Keep meaningful params (search, filter, page, etc.)
    // 3. Remove hash fragments
    // EDGE_CACHE_VERSION is appended to the key so bumping it busts the ENTIRE
    // edge cache on deploy (one-time full miss → repopulate from origin). Bump
    // this whenever an origin deploy must propagate immediately (e.g. after the
    // SEO-audit rollout, to drop stale HTML containing removed/old schema).
    const EDGE_CACHE_VERSION = '2026-06-15-seo-audit-2';
    const normalizedUrl = normalizeCacheUrl(url);
    const keyUrl = normalizedUrl + (normalizedUrl.includes('?') ? '&' : '?') + '__ev=' + EDGE_CACHE_VERSION;
    const cacheKey = new Request(keyUrl, {
      method: 'GET',
      headers: {},
    });

    // ── Check Cloudflare Cache API ──
    const cache = caches.default;
    let response = await cache.match(cacheKey);

    if (response) {
      // ── CACHE HIT ──
      const elapsed = Date.now() - startTime;
      const headers = new Headers(response.headers);
      headers.set('X-Cache-Status', 'HIT');
      headers.set('X-Edge-TTFB', `${elapsed}ms`);
      headers.set('X-Edge-Worker', 'prokr-v1');
      headers.set('X-Edge-Pop', request.cf?.colo || 'unknown');
      headers.set('Server-Timing', `edge;dur=${elapsed};desc="Edge Cache HIT"`);

      // Add age header for debugging
      const cachedAt = response.headers.get('X-Edge-Cached-At');
      if (cachedAt) {
        const age = Math.floor((Date.now() - parseInt(cachedAt)) / 1000);
        headers.set('Age', String(age));
      }

      // ── If-None-Match: Return 304 on HIT if client already has this version ──
      const clientEtag = request.headers.get('if-none-match');
      const cachedEtag = response.headers.get('etag');
      if (clientEtag && cachedEtag && clientEtag.replace(/^W\//, '') === cachedEtag.replace(/^W\//, '')) {
        headers.delete('Content-Length');
        return new Response(null, { status: 304, headers });
      }

      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers,
      });
    }

    // ── CACHE MISS: Fetch from origin ──
    const originStart = Date.now();
    let originResponse;

    try {
      // Create a clean request to origin
      // Pass through important headers but not cache-related ones
      const originHeaders = new Headers();
      originHeaders.set('User-Agent', userAgent);
      originHeaders.set('Accept', request.headers.get('accept') || 'text/html');
      originHeaders.set('Accept-Language', request.headers.get('accept-language') || 'ar');
      originHeaders.set('Accept-Encoding', 'gzip');

      // Do NOT pass cookies to origin for cacheable requests.
      // Cookies are user-specific; passing them could cause the origin to
      // return personalized content that gets cached for everyone.
      // Authenticated requests are already bypassed above.

      // Pass the real client IP to origin
      originHeaders.set('X-Forwarded-For', request.headers.get('cf-connecting-ip') || '');
      originHeaders.set('X-Real-IP', request.headers.get('cf-connecting-ip') || '');

      originResponse = await fetch(request.url, {
        method: 'GET',
        headers: originHeaders,
        // CRITICAL: 'manual' prevents the Worker from auto-following 301/302
        // redirects from Firebase middleware. Without this, the Worker silently
        // follows redirects and caches the final 200 under the wrong URL,
        // destroying SEO (duplicate content) and breaking UTM tracking.
        redirect: 'manual',
        // Tell Cloudflare NOT to use its auto-cache for this subrequest
        cf: { cacheTtl: 0, cacheEverything: false },
      });
    } catch (err) {
      // Origin unreachable — return proper error page
      return buildErrorResponse(502, 'Origin server is temporarily unavailable. Please try again shortly.', 'prokr-v1');
    }

    const originDuration = Date.now() - originStart;

    // ── Don't cache error responses ──
    if (originResponse.status >= 400) {
      const headers = new Headers(originResponse.headers);
      headers.set('X-Cache-Status', 'MISS-ERROR');
      headers.set('X-Edge-Worker', 'prokr-v1');
      return new Response(originResponse.body, {
        status: originResponse.status,
        statusText: originResponse.statusText,
        headers,
      });
    }

    // ── Don't cache redirects (let origin handle them) ──
    if (originResponse.status >= 300 && originResponse.status < 400) {
      const headers = new Headers(originResponse.headers);
      headers.set('X-Cache-Status', 'REDIRECT');
      headers.set('X-Edge-Worker', 'prokr-v1');
      return new Response(originResponse.body, {
        status: originResponse.status,
        statusText: originResponse.statusText,
        headers,
      });
    }

    // ── Build cacheable response ──
    // Read body into buffer so we can both cache and return it.
    // Wrapped in try-catch: if origin drops connection mid-stream,
    // arrayBuffer() throws and we return a clean error.
    let responseBody;
    try {
      responseBody = await originResponse.arrayBuffer();
    } catch (bodyErr) {
      return buildErrorResponse(502, 'Origin response was incomplete.', 'prokr-v1');
    }
    const responseHeaders = new Headers();

    // Preserve important headers from origin
    for (const header of PRESERVE_HEADERS) {
      const value = originResponse.headers.get(header);
      if (value) {
        responseHeaders.set(header, value);
      }
    }

    // ── Override cache-control headers ──
    // This is THE critical fix: Firebase sends "no-store" but we override it
    if (rule.immutable) {
      responseHeaders.set('Cache-Control', `public, max-age=${rule.ttl}, immutable`);
    } else {
      const swrValue = rule.swr || Math.floor(effectiveTtl / 3);
      responseHeaders.set(
        'Cache-Control',
        `public, s-maxage=${effectiveTtl}, max-age=${Math.min(effectiveTtl, 300)}, stale-while-revalidate=${swrValue}`
      );
    }

    // ── Add edge metadata headers ──
    const totalElapsed = Date.now() - startTime;
    responseHeaders.set('X-Cache-Status', 'MISS');
    responseHeaders.set('X-Edge-TTFB', `${totalElapsed}ms`);
    responseHeaders.set('X-Edge-Origin-TTFB', `${originDuration}ms`);
    responseHeaders.set('X-Edge-Worker', 'prokr-v1');
    responseHeaders.set('X-Edge-Pop', request.cf?.colo || 'unknown');
    responseHeaders.set('X-Edge-Cached-At', String(Date.now()));
    responseHeaders.set('X-Edge-TTL', String(effectiveTtl));
    responseHeaders.set('X-Edge-Bot', isBot ? 'true' : 'false');
    responseHeaders.set('Server-Timing', `edge;dur=${totalElapsed};desc="Edge Cache MISS", origin;dur=${originDuration};desc="Firebase Origin"`);

    // ── ETag for conditional requests ──
    const etag = originResponse.headers.get('etag');
    if (etag) {
      responseHeaders.set('ETag', etag);
    }

    // ── Vary header — only vary on encoding, NOT on user-agent ──
    // Firebase sends overly-broad Vary headers that kill cache hit rate
    responseHeaders.set('Vary', 'Accept-Encoding');

    // ── Content-Length for proper HTTP compliance ──
    responseHeaders.set('Content-Length', String(responseBody.byteLength));

    // ── Link preload hints for Googlebot ──
    if (isBot) {
      responseHeaders.set('X-Robots-Edge', 'optimized');
      // Signal to Googlebot that this is an optimized response
      responseHeaders.set('X-Edge-Optimized', 'true');
    }

    // ── Build the response ──
    const cachedResponse = new Response(responseBody, {
      status: originResponse.status,
      statusText: originResponse.statusText,
      headers: responseHeaders,
    });

    // ── Store in Cloudflare Cache API ──
    // waitUntil ensures caching completes even after response is sent
    ctx.waitUntil(cache.put(cacheKey, cachedResponse.clone()));

    // ── If-None-Match: Return 304 if client already has this version ──
    const clientEtag = request.headers.get('if-none-match');
    if (clientEtag && etag && clientEtag.replace(/^W\//, '') === etag.replace(/^W\//, '')) {
      const notModifiedHeaders = new Headers(responseHeaders);
      notModifiedHeaders.delete('Content-Length'); // 304 has no body
      return new Response(null, {
        status: 304,
        headers: notModifiedHeaders,
      });
    }

    return cachedResponse;
  },
};

// ── Helper Functions ───────────────────────────────────────────────────

/**
 * Find the first matching cache rule for a given pathname.
 * Rules are checked in order — first match wins.
 *
 * @param {string} pathname - The URL pathname (e.g., "/riyadh/furniture-moving")
 * @returns {Object|null} The matching cache rule, or null if no match
 */
function findCacheRule(pathname) {
  for (const rule of CACHE_RULES) {
    if (rule.pattern.test(pathname)) {
      return rule;
    }
  }
  // Default: cache for 10 minutes (covers any unmatched paths)
  return { ttl: 600, swr: 120 };
}

/**
 * Normalize URL for cache key by stripping tracking query parameters.
 * This prevents cache fragmentation from marketing UTM tags, Facebook
 * click IDs, Google click IDs, etc.
 *
 * Example:
 *   /riyadh/furniture-moving?fbclid=abc123&utm_source=facebook
 *   → https://prokr.co/riyadh/furniture-moving
 *
 * @param {URL} url - The parsed URL object
 * @returns {string} Normalized URL string for cache key
 */
// Cache namespace version — bump this to instantly invalidate ALL cached entries
// without needing Cloudflare API tokens. Old cache keys become orphaned and
// expire naturally via their TTL.
const CACHE_VERSION = 'v10';

function normalizeCacheUrl(url) {
  const cleaned = new URL(url.toString());

  // Strip known tracking parameters
  for (const param of [...cleaned.searchParams.keys()]) {
    if (TRACKING_PARAMS.has(param.toLowerCase())) {
      cleaned.searchParams.delete(param);
    }
  }

  // Remove hash fragment (not sent to server anyway, but just in case)
  cleaned.hash = '';

  // Sort remaining params for consistent cache keys
  cleaned.searchParams.sort();

  // Append cache version to invalidate old entries on version bump
  cleaned.searchParams.set('_cv', CACHE_VERSION);

  return cleaned.toString();
}

/**
 * Build a proper HTML error response with security headers.
 * Used when origin is unreachable or returns incomplete data.
 *
 * @param {number} status - HTTP status code (e.g., 502)
 * @param {string} message - Human-readable error message
 * @param {string} workerVersion - Worker version string for headers
 * @returns {Response} A complete error Response object
 */
function buildErrorResponse(status, message, workerVersion) {
  const html = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>خطأ مؤقت | بروكر</title>
  <meta name="robots" content="noindex">
  <style>
    body { font-family: system-ui, -apple-system, sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; background: #0f172a; color: #e2e8f0; }
    .container { text-align: center; padding: 2rem; max-width: 480px; }
    h1 { font-size: 3rem; margin: 0 0 1rem; }
    p { font-size: 1.125rem; line-height: 1.6; color: #94a3b8; }
    a { color: #38bdf8; text-decoration: none; }
    a:hover { text-decoration: underline; }
    .code { font-size: 0.875rem; color: #475569; margin-top: 2rem; }
  </style>
</head>
<body>
  <div class="container">
    <h1>⚡</h1>
    <p>${message}</p>
    <p><a href="/">العودة للصفحة الرئيسية</a></p>
    <div class="code">HTTP ${status} — prokr.co</div>
  </div>
</body>
</html>`;

  return new Response(html, {
    status,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store, no-cache, must-revalidate',
      'X-Cache-Status': 'ERROR',
      'X-Edge-Worker': workerVersion,
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'SAMEORIGIN',
      'Retry-After': '30',
    },
  });
}
