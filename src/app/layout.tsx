import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Suspense } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Analytics from "@/components/Analytics";
import ServiceWorkerRegistrar from "@/components/ServiceWorkerRegistrar";

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
    <html lang="ar" dir="rtl" className={ibmPlexArabic.variable} suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0284C7" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="بروكر" />
        {/* Preconnect for Core Web Vitals */}
        <link rel="preconnect" href="https://firebasestorage.googleapis.com" />
        <link rel="preconnect" href="https://prokr-84ca8.firebasestorage.app" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        {/* Speculation Rules API — prerender navigation */}
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
        {/* Network-Aware Lite Mode for slow connections */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
  var css = '.prokr-lite-mode *,.prokr-lite-mode *::before,.prokr-lite-mode *::after{animation-duration:0.001s!important;animation-delay:0s!important;transition-duration:0.001s!important;transition-delay:0s!important}.prokr-lite-mode img:not([data-essential]){content-visibility:auto;contain-intrinsic-size:auto 200px}.prokr-lite-mode iframe,.prokr-lite-mode video,.prokr-lite-mode .map-container,.prokr-lite-mode [data-heavy]{display:none!important}.prokr-lite-mode [class*="shadow-lg"],.prokr-lite-mode [class*="shadow-xl"],.prokr-lite-mode [class*="shadow-2xl"]{box-shadow:0 1px 2px rgba(0,0,0,0.05)!important}.prokr-lite-mode [class*="rounded-2xl"],.prokr-lite-mode [class*="rounded-3xl"]{border-radius:0.375rem!important}.prokr-lite-mode .success-stories,.prokr-lite-mode .related-services-carousel,.prokr-lite-mode .decorative-badge{display:none!important}.prokr-lite-mode [class*="backdrop-blur"]{backdrop-filter:none!important;-webkit-backdrop-filter:none!important}.prokr-lite-mode::after{content:"⚡ وضع خفيف — شبكة بطيئة";position:fixed;bottom:0;left:0;right:0;background:#0284C7;color:white;text-align:center;padding:4px 0;font-size:12px;z-index:9999;direction:rtl}';
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
        {/* 🌙 Smart Dark Mode — time-based + OS preference */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
  var css = [
    /* Base overrides */
    '.prokr-dark{color-scheme:dark}',
    '.prokr-dark body{background:#0f172a!important;color:#e2e8f0!important}',
    /* Cards & containers */
    '.prokr-dark [class*="bg-white"]{background:#1e293b!important;color:#e2e8f0!important}',
    '.prokr-dark [class*="bg-gray-50"]{background:#0f172a!important}',
    '.prokr-dark [class*="bg-gray-100"]{background:#1e293b!important}',
    '.prokr-dark [class*="bg-blue-50"]{background:#1e293b!important}',
    /* Text */
    '.prokr-dark [class*="text-gray-900"]{color:#f1f5f9!important}',
    '.prokr-dark [class*="text-gray-800"]{color:#e2e8f0!important}',
    '.prokr-dark [class*="text-gray-700"]{color:#cbd5e1!important}',
    '.prokr-dark [class*="text-gray-600"]{color:#94a3b8!important}',
    '.prokr-dark [class*="text-gray-500"]{color:#94a3b8!important}',
    '.prokr-dark [class*="text-gray-400"]{color:#64748b!important}',
    '.prokr-dark [class*="text-blue-900"]{color:#93c5fd!important}',
    '.prokr-dark [class*="text-blue-800"]{color:#60a5fa!important}',
    /* Borders */
    '.prokr-dark [class*="border-gray-100"]{border-color:#334155!important}',
    '.prokr-dark [class*="border-gray-200"]{border-color:#334155!important}',
    '.prokr-dark [class*="border-gray-300"]{border-color:#475569!important}',
    /* Navbar */
    '.prokr-dark nav{background:#1e293b!important}',
    '.prokr-dark [class*="bg-white/95"]{background:rgba(30,41,59,0.95)!important}',
    /* Shadows → glow effect */
    '.prokr-dark [class*="shadow-lg"],.prokr-dark [class*="shadow-xl"],.prokr-dark [class*="shadow-2xl"]{box-shadow:0 4px 20px rgba(0,0,0,0.4)!important}',
    /* Sky keeps vibrant */
    '.prokr-dark [class*="bg-sky-50"]{background:#0c4a6e!important}',
    '.prokr-dark [class*="hover\\\\:bg-sky-50"]:hover{background:#0c4a6e!important}',
    /* Input fields */
    '.prokr-dark input,.prokr-dark select,.prokr-dark textarea{background:#1e293b!important;color:#e2e8f0!important;border-color:#475569!important}',
    /* Gradients */
    '.prokr-dark [class*="from-sky-50"]{--tw-gradient-from:#0c4a6e!important}',
    '.prokr-dark [class*="to-white"]{--tw-gradient-to:#1e293b!important}',
    /* Hero section */
    '.prokr-dark [class*="from-sky-800"]{--tw-gradient-from:#0c4a6e!important}',
    /* Direct Answer box */
    '.prokr-dark .direct-answer{background:#1e293b!important}',
    /* Footer */
    '.prokr-dark footer{background:#0f172a!important;color:#e2e8f0!important}',
    /* Smooth transition */
    'html{transition:background-color 0.5s ease,color 0.3s ease}',
    'html *{transition:background-color 0.3s ease,color 0.2s ease,border-color 0.3s ease}'
  ].join('');
  var s=document.createElement('style');
  s.id='prokr-dark-css';
  s.textContent=css;
  document.head.appendChild(s);
  function isDark(){
    var saved=localStorage.getItem('prokr-theme');
    if(saved==='dark') return true;
    if(saved==='light') return false;
    if(window.matchMedia&&window.matchMedia('(prefers-color-scheme:dark)').matches) return true;
    var h=new Date().getHours();
    return h>=20||h<6;
  }
  function apply(){
    if(isDark()) document.documentElement.classList.add('prokr-dark');
    else document.documentElement.classList.remove('prokr-dark');
  }
  apply();
  if(window.matchMedia){
    window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change',apply);
  }
  setInterval(apply,3600000);
  window.__prokrToggleDark=function(){
    var on=document.documentElement.classList.contains('prokr-dark');
    localStorage.setItem('prokr-theme',on?'light':'dark');
    apply();
  };
})();`,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-gray-50 text-gray-900">
        <Navbar />
        {children}
        <Suspense fallback={null}>
          <Analytics />
          <ServiceWorkerRegistrar />
        </Suspense>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || 'G-H1W3HDFHS0'} />
    </html>
  );
}

