import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
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
    "دليل خدمات",
    "السعودية",
    "نقل عفش",
    "تنظيف",
    "مكافحة حشرات",
    "صيانة",
    "الرياض",
    "جدة",
    "الدمام",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={ibmPlexArabic.variable}>
      <head>
        {/* Google Analytics 4 */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || 'G-H1W3HDFHS0'}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID || 'G-H1W3HDFHS0'}', {
                page_title: document.title,
                page_location: window.location.href,
              });
            `,
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
    </html>
  );
}

