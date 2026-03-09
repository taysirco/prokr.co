import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Suspense } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Analytics from "@/components/Analytics";

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-plex-arabic",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "بروكر - دليل الخدمات السعودي الشامل",
    template: "%s | بروكر",
  },
  description: "دليل شامل لأفضل شركات الخدمات في المملكة العربية السعودية. نقل عفش، تنظيف، مكافحة حشرات، صيانة وأكثر.",
  keywords: [
    "دليل خدمات السعودية",
    "شركات خدمات منزلية",
    "أفضل شركات نقل عفش",
    "بروكر خدمات",
    "خدمات منزلية الرياض جدة",
    "نقل عفش",
    "تنظيف منازل",
    "مكافحة حشرات",
    "كشف تسربات",
    "عزل خزانات",
    "صيانة",
    "الرياض",
    "جدة",
    "الدمام",
    "مكة",
    "المدينة",
  ],
  authors: [{ name: "Prokr" }],
  creator: "Prokr",
  publisher: "Prokr",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://prokr.co"),
  alternates: {
    canonical: "/",
    languages: {
      'ar': '/',
      'x-default': '/',
    },
  },
  openGraph: {
    title: "بروكر - دليل الخدمات السعودي الشامل",
    description: "دليل شامل لأفضل شركات الخدمات في المملكة العربية السعودية",
    url: "https://prokr.co",
    siteName: "بروكر",
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "بروكر - دليل الخدمات السعودي الشامل",
    description: "دليل شامل لأفضل شركات الخدمات في المملكة العربية السعودية",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_ID || 'YOUR_GSC_VERIFICATION_CODE',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={ibmPlexArabic.variable}>
      <head>
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#059669" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="بروكر" />
        {/* Preconnect for Core Web Vitals */}
        <link rel="preconnect" href="https://firebasestorage.googleapis.com" />
        <link rel="preconnect" href="https://prokr-84ca8.firebasestorage.app" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        {/* ⚡ Speculation Rules API — Zero-latency navigation */}
        <script
          type="speculationrules"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              prerender: [
                {
                  source: "document",
                  where: {
                    and: [
                      { href_matches: "/*" },
                      { not: { href_matches: "/api/*" } },
                      { not: { selector_matches: "[rel=external]" } },
                    ],
                  },
                  eagerness: "moderate",
                },
              ],
            }),
          }}
        />
        {/* ⚡ Network-Aware DOM — Lite Mode for 2G/3G/saveData */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
  var css = '.prokr-lite-mode *,.prokr-lite-mode *::before,.prokr-lite-mode *::after{animation-duration:0.001s!important;animation-delay:0s!important;transition-duration:0.001s!important;transition-delay:0s!important}.prokr-lite-mode img:not([data-essential]){content-visibility:auto;contain-intrinsic-size:auto 200px}.prokr-lite-mode iframe,.prokr-lite-mode video,.prokr-lite-mode .map-container,.prokr-lite-mode [data-heavy]{display:none!important}.prokr-lite-mode [class*="shadow-lg"],.prokr-lite-mode [class*="shadow-xl"],.prokr-lite-mode [class*="shadow-2xl"]{box-shadow:0 1px 2px rgba(0,0,0,0.05)!important}.prokr-lite-mode [class*="rounded-2xl"],.prokr-lite-mode [class*="rounded-3xl"]{border-radius:0.375rem!important}.prokr-lite-mode .success-stories,.prokr-lite-mode .related-services-carousel,.prokr-lite-mode .decorative-badge{display:none!important}.prokr-lite-mode [class*="backdrop-blur"]{backdrop-filter:none!important;-webkit-backdrop-filter:none!important}.prokr-lite-mode::after{content:"⚡ وضع خفيف — شبكة بطيئة";position:fixed;bottom:0;left:0;right:0;background:#059669;color:white;text-align:center;padding:4px 0;font-size:12px;z-index:9999;direction:rtl}';
  var s = document.createElement('style');
  s.id = 'prokr-lite-mode-css';
  s.textContent = css;
  document.head.appendChild(s);
  function evalNet(){
    var c = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if(!c) return;
    var slow = c.saveData === true || c.effectiveType === 'slow-2g' || c.effectiveType === '2g' || c.effectiveType === '3g';
    if(slow) document.documentElement.classList.add('prokr-lite-mode');
    else document.documentElement.classList.remove('prokr-lite-mode');
  }
  evalNet();
  var c = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  if(c) c.addEventListener('change', evalNet);
})();`,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-gray-50 text-gray-900">
        <Navbar />
        {children}
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || 'G-H1W3HDFHS0'} />
    </html>
  );
}

