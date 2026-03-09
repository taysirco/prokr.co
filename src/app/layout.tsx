import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Suspense } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Analytics from "@/components/Analytics";
import NetworkSensor from "@/components/NetworkSensor";

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
      </head>
      <body className="font-sans antialiased bg-gray-50 text-gray-900">
        <Navbar />
        {children}
        <Suspense fallback={null}>
          <Analytics />
          <NetworkSensor />
        </Suspense>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || 'G-H1W3HDFHS0'} />
    </html>
  );
}

