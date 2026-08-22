import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  poweredByHeader: false,
  compress: true,
  images: {
    qualities: [75, 90],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh5.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: '**.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: '**.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: '**.google.com',
      },
      // Firebase Storage app-domain bucket (advertiser logos / uploads).
      // (*.googleapis.com — incl. firebasestorage.googleapis.com — is covered above.)
      {
        protocol: 'https',
        hostname: 'prokr-84ca8.firebasestorage.app',
      },
      // SECURITY: the previous { hostname: '**' } wildcard was removed — it made
      // /_next/image an open image-optimizer proxy (SSRF/DoS surface, Next.js
      // GHSA-9g9p-9gw9-jx7f). Add specific remote hosts here when needed.
    ],
  },
  async rewrites() {
    return [
      {
        // Proxy Firebase auth handler through same domain.
        // Required for signInWithRedirect on Safari iOS — Safari ITP blocks
        // third-party cookies when authDomain differs from hosting domain.
        source: '/__/auth/:path*',
        destination: 'https://prokr-84ca8.firebaseapp.com/__/auth/:path*',
      },
    ];
  },
  async redirects() {
    return [
      {
        // Fix: Next.js built-in sitemap.ts generates empty sitemaps on production
        // while API route sitemaps work perfectly (703 URLs). Redirect any
        // crawler/tool that discovers /sitemap.xml to the working API version.
        source: '/sitemap.xml',
        destination: '/api/sitemap-index',
        permanent: true,
      },
      {
        // Redirect child sitemaps to API versions
        source: '/sitemap/:id.xml',
        destination: '/api/sitemap/:id',
        permanent: true,
      },
      // NOTE: the /services-page/:slug → /:slug redirect is handled in
      // middleware.ts (301) and the Cloudflare worker; removed from next.config
      // to avoid a triple-defined redirect and the 308-vs-301 drift.
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Security Headers
          // HSTS: Force HTTPS for 1 year + preload list
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
          // Prevent clickjacking — allow same-origin iframes only
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          // X-XSS-Protection disabled per modern guidance — the legacy browser
          // auditor can itself introduce info-leak/XSS bugs; rely on CSP instead.
          { key: 'X-XSS-Protection', value: '0' },
          // Prevent MIME-type sniffing
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Control referrer information leakage
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Cross-origin isolation hardening
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          // CORP is intentionally 'cross-origin' (not same-origin): the public
          // verified-badge SVG is designed to be embedded on advertiser sites.
          { key: 'Cross-Origin-Resource-Policy', value: 'cross-origin' },
          // Restrict browser feature access
          // 🎤 microphone=(self) — required for voice reviews
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(self), geolocation=(self)' },
          // Content Security Policy
          // media-src blob: — required for audio blob playback in voice reviews
          { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://static.cloudflareinsights.com https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net https://analytics.tiktok.com https://apis.google.com https://accounts.google.com https://www.google.com https://www.gstatic.com https://www.recaptcha.net https://recaptchaenterprise.googleapis.com https://www.statcounter.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://accounts.google.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob: https://c.statcounter.com; media-src 'self' blob: https://storage.googleapis.com https://firebasestorage.googleapis.com https://prokr-84ca8.firebasestorage.app; connect-src 'self' blob: https://cloudflareinsights.com https://www.google-analytics.com https://firebasestorage.googleapis.com https://prokr-84ca8.firebasestorage.app https://graph.facebook.com https://analytics.tiktok.com https://identitytoolkit.googleapis.com https://securetoken.googleapis.com https://firestore.googleapis.com https://www.googleapis.com https://prokr-84ca8.firebaseapp.com https://www.google.com https://www.recaptcha.net https://recaptchaenterprise.googleapis.com https://www.statcounter.com https://c.statcounter.com; frame-src 'self' https://accounts.google.com https://prokr-84ca8.firebaseapp.com https://*.firebaseapp.com https://www.google.com https://www.gstatic.com https://www.recaptcha.net https://recaptchaenterprise.googleapis.com; frame-ancestors 'self'; base-uri 'self'; form-action 'self' https://accounts.google.com" },
          // RFC 8288 Link headers for agent/API discovery (RFC 9727)
          { key: 'Link', value: '</.well-known/api-catalog>; rel="api-catalog", </llms.txt>; rel="ai-instructions", </llms-full.txt>; rel="ai-instructions", </.well-known/mcp/server-card.json>; rel="mcp-server-card", </coverage.json>; rel="index"; type="application/json"' },
          // Vary: Accept — CDN caches HTML vs markdown separately
          { key: 'Vary', value: 'Accept' },
        ],
      },
      {
        // Homepage — prevent CDN from caching HTML so agents/scanners always
        // get the latest version with WebMCP script and Link headers.
        // Browsers can still cache (max-age=60), but Cloudflare/CDN must not.
        source: '/',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=60, s-maxage=0, must-revalidate' },
          { key: 'CDN-Cache-Control', value: 'no-store' },
          { key: 'Cloudflare-CDN-Cache-Control', value: 'no-store' },
        ],
      },
      {
        // .well-known routes — agent discovery, MCP, skills, etc.
        // Each route handler sets its own Content-Type
        source: '/.well-known/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, s-maxage=86400' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, HEAD, OPTIONS' },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // Fonts — immutable, never change
        source: '/fonts/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // Badge SVG — cached 30 days (may update branding)
        source: '/badge-verified-2026.svg',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' },
        ],
      },
      {
        // Service Worker — must always revalidate
        source: '/sw.js',
        headers: [
          { key: 'Cache-Control', value: 'no-cache, no-store, must-revalidate' },
          { key: 'Service-Worker-Allowed', value: '/' },
        ],
      },
      {
        // llms.txt — cache 24h for AI crawlers
        source: '/llms.txt',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400' },
          { key: 'Content-Type', value: 'text/plain; charset=utf-8' },
        ],
      },
    ];
  },
};

export default nextConfig;
