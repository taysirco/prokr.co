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
      {
        protocol: 'https',
        hostname: '**',
      },
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
          // XSS filter (legacy browsers)
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          // Prevent MIME-type sniffing
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Control referrer information leakage
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Restrict browser feature access
          // 🎤 microphone=(self) — required for voice reviews
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(self), geolocation=(self)' },
          // Content Security Policy
          // media-src blob: — required for audio blob playback in voice reviews
          { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net https://analytics.tiktok.com https://apis.google.com https://accounts.google.com https://www.google.com https://www.gstatic.com https://www.recaptcha.net https://recaptchaenterprise.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://accounts.google.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; media-src 'self' blob: https://storage.googleapis.com https://firebasestorage.googleapis.com https://prokr-84ca8.firebasestorage.app; connect-src 'self' blob: https://www.google-analytics.com https://firebasestorage.googleapis.com https://prokr-84ca8.firebasestorage.app https://graph.facebook.com https://analytics.tiktok.com https://identitytoolkit.googleapis.com https://securetoken.googleapis.com https://firestore.googleapis.com https://www.googleapis.com https://prokr-84ca8.firebaseapp.com https://www.google.com https://www.recaptcha.net https://recaptchaenterprise.googleapis.com; frame-src 'self' https://accounts.google.com https://prokr-84ca8.firebaseapp.com https://*.firebaseapp.com https://www.google.com https://www.gstatic.com https://www.recaptcha.net https://recaptchaenterprise.googleapis.com; frame-ancestors 'self'; base-uri 'self'; form-action 'self' https://accounts.google.com" },
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
    ];
  },
};

export default nextConfig;
