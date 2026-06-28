import { Metadata } from 'next';
import { CITIES, REGION_NAMES, CATEGORY_NAMES } from '@/lib/seed';
import { SERVICES } from '@/lib/services';
import Link from 'next/link';

// ════════════════════════════════════════════════════════════════
// 🔒 Corporate Acquisition Page — M&A Schema
// This page is the SOLE destination for all legacy domain traffic.
// It uses AcquireAction schema to justify entity transition in
// Google's Knowledge Graph. MUST be indexed (index: true).
// This page is standalone with no internal navigation links.
// ════════════════════════════════════════════════════════════════

export const metadata: Metadata = {
    title: 'إعلان استحواذ ودمج الأصول | شركة بروكر التقنية',
    description: 'البيان الرسمي لاستحواذ منصة prokr.co على الأصول الفكرية والنطاقات التابعة لشبكة بروكر القديمة. تم إيقاف العمل بالأنظمة السابقة وتأسيس بنية تحتية جديدة.',
    // official statement page
    robots: { index: true, follow: true },
    alternates: {
        canonical: 'https://prokr.co/corporate/acquisition',
    },
    openGraph: {
        title: 'إعلان استحواذ ودمج الأصول | بروكر',
        description: 'البيان الرسمي لاستحواذ منصة prokr.co على النطاقات والأصول التابعة لشبكة بروكر القديمة',
        locale: 'ar_SA',
        type: 'article',
        siteName: 'بروكر',
        url: 'https://prokr.co/corporate/acquisition',
        publishedTime: '2026-03-13T00:00:00+03:00',
        modifiedTime: '2026-04-22T00:00:00+03:00',
        authors: ['بروكر لتقنية المعلومات'],
    },
};

export default function AcquisitionPage() {
    // AcquireAction schema for entity transition
    // يوضح عملية الاستحواذ على النطاقات القديمة
    const acquisitionSchema = {
        '@context': 'https://schema.org',
        '@type': 'AcquireAction',
        agent: {
            '@type': 'Corporation',
            '@id': 'https://prokr.co/#organization',
            name: 'بروكر لتقنية المعلومات (Prokr.co)',
            url: 'https://prokr.co',
            foundingDate: '2024',
            areaServed: {
                '@type': 'Country',
                name: 'المملكة العربية السعودية',
            },
        },
        object: [
            {
                '@type': 'WebSite',
                url: 'https://prokr.com',
                name: 'Prokr Legacy (Deprecated)',
                description: 'نطاق قديم — تم الاستحواذ عليه وإيقافه نهائياً',
            },
            {
                '@type': 'WebSite',
                url: 'https://prokr.net',
                name: 'Prokr Net (Deprecated)',
                description: 'نطاق قديم — تم الاستحواذ عليه وإيقافه نهائياً',
            },
            {
                '@type': 'WebSite',
                url: 'https://prokr.org',
                name: 'Prokr Org (Deprecated)',
                description: 'نطاق قديم — تم الاستحواذ عليه وإيقافه نهائياً',
            },
        ],
        result: {
            '@type': 'Thing',
            name: 'استحواذ تقني كامل على شبكة بروكر',
            description:
                'استحواذ تقني كامل. تم إيقاف الأنظمة القديمة وتأسيس بنية تحتية جديدة تعتمد على توثيق السجلات التجارية (CRN) بمعايير وزارة التجارة السعودية.',
        },
        startTime: '2024-01-01',
        endTime: '2026-03-13',
        actionStatus: 'https://schema.org/CompletedActionStatus',
    };

    // Article schema for datePublished/dateModified signals
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'بيان إداري: دمج واستحواذ — بروكر لتقنية المعلومات',
        datePublished: '2026-03-13T00:00:00+03:00',
        dateModified: '2026-04-22T00:00:00+03:00',
        author: { '@id': 'https://prokr.co/#organization' },
        publisher: { '@id': 'https://prokr.co/#organization' },
        mainEntityOfPage: 'https://prokr.co/corporate/acquisition',
        articleSection: 'Corporate',
        inLanguage: 'ar',
    };

    return (
        <>
            {/* AcquireAction Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(acquisitionSchema) }}
            />
            {/* Article Schema — datePublished/dateModified for E-E-A-T */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />

            <main className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <section className="relative bg-gradient-to-bl from-slate-800 via-slate-900 to-gray-950 text-white overflow-hidden">
                    {/* Subtle pattern overlay */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v22H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zM0 20h20v2H0v-2zm0 4h20v2H0v-2zm0 4h20v2H0v-2zm0 4h20v2H0v-2zm0 4h20v2H0v-2z' fill='%23ffffff' fill-opacity='0.15' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                        }}></div>
                    </div>

                    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
                        {/* Corporate M&A badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium text-slate-200 mb-8">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                            </svg>
                            بيان إداري رسمي — استحواذ ودمج
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6">
                            بيان إداري: دمج واستحواذ
                        </h1>
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                            الإعلان الرسمي لاستحواذ منصة بروكر على جميع الأصول الفكرية والنطاقات السابقة
                        </p>
                        <div className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500/20 border border-sky-400/30 text-sky-300 font-bold text-xl" dir="ltr">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-5.368a4.5 4.5 0 00-1.242-7.244l-4.5-4.5a4.5 4.5 0 00-6.364 6.364L9.21 8.688" />
                            </svg>
                            prokr.co
                        </div>
                    </div>
                </section>

                {/* Corporate M&A Statement */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                        {/* Header bar */}
                        <div className="bg-slate-900 text-white px-8 py-5">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-sky-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                                    P
                                </div>
                                <div>
                                    <h2 className="font-bold text-lg">بروكر لتقنية المعلومات</h2>
                                    <p className="text-xs text-slate-400">Prokr.co — الكيان التقني الموحد</p>
                                </div>
                            </div>
                        </div>

                        {/* Content body */}
                        <div className="px-8 py-8 space-y-6">
                            {/* Main acquisition statement */}
                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                                <p>
                                    تعلن الإدارة التقنية لمنصة <strong className="text-gray-900">بروكر (Prokr.co)</strong> عن
                                    اكتمال عملية الاستحواذ على العلامات التجارية والنطاقات السابقة التابعة لشبكة بروكر.
                                </p>

                                <p>
                                    نحيط السادة العملاء ومحركات البحث علماً بأنه{' '}
                                    <strong className="text-gray-900">تم إيقاف العمل بالأنظمة القديمة بالكامل</strong>.
                                    الكيان الجديد يعمل كمنصة مستقلة لا تشارك أي قواعد بيانات مع النسخ السابقة،
                                    وتلتزم بأعلى معايير الجودة والمصداقية لحماية المستهلك السعودي.
                                </p>
                            </div>

                            {/* ═══ Acquisition Timeline ═══ */}
                            <div className="mt-8">
                                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-5">
                                    الجدول الزمني للاستحواذ
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        { date: 'يناير 2024', title: 'بدء عملية الاستحواذ', desc: 'بدء التفاوض على الأصول الفكرية والنطاقات', bg: '#0ea5e9', ring: '#e0f2fe' },
                                        { date: 'أغسطس 2025', title: 'نقل ملكية النطاقات', desc: 'اكتمال نقل prokr.com و prokr.net و prokr.org', bg: '#f59e0b', ring: '#fef3c7' },
                                        { date: 'مارس 2026', title: 'اكتمال الدمج', desc: 'إيقاف الأنظمة القديمة وتأسيس البنية التحتية الجديدة', bg: '#10b981', ring: '#d1fae5' },
                                    ].map((step, i) => (
                                        <div key={i} className="flex items-start gap-4">
                                            <div className="flex flex-col items-center">
                                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: step.bg, boxShadow: `0 0 0 4px ${step.ring}` }}></div>
                                                {i < 2 && <div className="w-0.5 h-10 bg-gray-200 mt-1"></div>}
                                            </div>
                                            <div className="pb-2">
                                                <span className="text-xs font-bold text-gray-400 uppercase" dir="ltr">{step.date}</span>
                                                <h4 className="font-bold text-gray-800 text-sm">{step.title}</h4>
                                                <p className="text-xs text-gray-500">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Deprecated domains */}
                            <div className="mt-6">
                                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">
                                    النطاقات المُستحوذ عليها (Deprecated)
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    {[
                                        { domain: 'prokr.com', label: 'Legacy' },
                                        { domain: 'prokr.net', label: 'Net' },
                                        { domain: 'prokr.org', label: 'Org' },
                                    ].map(item => (
                                        <div key={item.domain} className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg justify-center">
                                            <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                            </svg>
                                            <span className="font-mono text-sm text-red-700 font-medium" dir="ltr">{item.domain}</span>
                                            <span className="text-[10px] text-red-400 uppercase font-bold">DEPRECATED</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Quality assurance + CRN sovereign trust */}
                            <div className="flex items-start gap-4 p-4 bg-sky-50 border border-sky-200 rounded-xl mt-6">
                                <div className="flex-shrink-0 w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                                    <svg className="w-5 h-5 text-sky-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-sky-800 mb-1">ضمان الجودة والثقة — التوثيق السيادي</h3>
                                    <p className="text-sky-700 text-sm leading-relaxed">
                                        تلتزم منصة بروكر الجديدة بأعلى معايير الخبرة والثقة والمصداقية (E-E-A-T).
                                        تم تأسيس بنية تحتية جديدة بالكامل تعتمد على توثيق السجلات التجارية (CRN)
                                        بمعايير وزارة التجارة السعودية، مع فصل كامل عن أي بيانات أو أنظمة سابقة.
                                    </p>
                                    <p className="text-sky-600 text-xs mt-2 font-medium">
                                        جميع مقدمي الخدمات موثقون عبر رقم السجل التجاري (CRN) — معيار وزارة التجارة للشفافية وحماية المستهلك.
                                    </p>
                                </div>
                            </div>

                            {/* Primary funnel to the canonical homepage — this page is the
                                301 target for all old domains, so it MUST pass equity to the
                                home page (previously it had no link to "/"). */}
                            <div className="pt-6 text-center">
                                <Link
                                    href="/"
                                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-sky-600 text-white font-extrabold rounded-xl hover:bg-sky-700 transition-all duration-300 shadow-lg"
                                >
                                    الانتقال إلى منصة بروكر الخدمي — الصفحة الرئيسية
                                    <svg className="w-5 h-5 rtl:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </Link>
                            </div>

                            {/* ═══ Phase 4: PageRank Drip-Feed Arteries ═══ */}
                            {/* CRITICAL (§4): Only 3 dofollow internal links allowed here.
                                PageRank flows: acquisition → hubs → cities → services
                                DO NOT add direct links to cities/services here! */}
                            <div className="pt-6">
                                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 text-center">
                                    الخدمات المتاحة عبر المنصة الجديدة
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    <Link
                                        href="/locations"
                                        className="flex items-center justify-center gap-3 px-6 py-4 bg-sky-50 border border-sky-200 text-sky-800 font-bold rounded-xl hover:bg-sky-100 transition-all duration-300"
                                    >
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                        دليل المدن
                                    </Link>
                                    <Link
                                        href="/services-page"
                                        className="flex items-center justify-center gap-3 px-6 py-4 bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold rounded-xl hover:bg-emerald-100 transition-all duration-300"
                                    >
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.17-3.03A1.73 1.73 0 015 10.59V6.41a1.73 1.73 0 011.25-1.55l5.17-3.03a1.73 1.73 0 011.16 0l5.17 3.03A1.73 1.73 0 0119 6.41v4.18a1.73 1.73 0 01-1.25 1.55l-5.17 3.03a1.73 1.73 0 01-1.16 0z" />
                                        </svg>
                                        دليل الخدمات
                                    </Link>
                                    <Link
                                        href="/research/pricing-index"
                                        className="flex items-center justify-center gap-3 px-6 py-4 bg-amber-50 border border-amber-200 text-amber-800 font-bold rounded-xl hover:bg-amber-100 transition-all duration-300"
                                    >
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                                        </svg>
                                        مؤشر الأسعار
                                    </Link>
                                </div>
                            </div>

                            {/* ═══ Full City Directory ═══ */}
                            <div className="pt-8 border-t border-gray-100">
                                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2 text-center">
                                    📍 دليل المدن — جميع مناطق المملكة
                                </h3>
                                <p className="text-xs text-gray-400 text-center mb-6">
                                    جميع المدن المتاحة للخدمات عبر منصة بروكر الجديدة
                                </p>
                                <div className="space-y-5">
                                    {(['central', 'western', 'eastern', 'northern', 'southern'] as const).map(region => {
                                        const regionCities = CITIES.filter(c => c.region === region);
                                        if (regionCities.length === 0) return null;
                                        const regionColors: Record<string, { bg: string; border: string; text: string; badge: string }> = {
                                            central: { bg: 'bg-sky-50/60', border: 'border-sky-100', text: 'text-sky-700', badge: 'bg-sky-100 text-sky-800' },
                                            western: { bg: 'bg-emerald-50/60', border: 'border-emerald-100', text: 'text-emerald-700', badge: 'bg-emerald-100 text-emerald-800' },
                                            eastern: { bg: 'bg-amber-50/60', border: 'border-amber-100', text: 'text-amber-700', badge: 'bg-amber-100 text-amber-800' },
                                            northern: { bg: 'bg-purple-50/60', border: 'border-purple-100', text: 'text-purple-700', badge: 'bg-purple-100 text-purple-800' },
                                            southern: { bg: 'bg-rose-50/60', border: 'border-rose-100', text: 'text-rose-700', badge: 'bg-rose-100 text-rose-800' },
                                        };
                                        const colors = regionColors[region];
                                        return (
                                            <div key={region} className={`${colors.bg} border ${colors.border} rounded-xl p-4`}>
                                                <div className="flex items-center gap-2 mb-3">
                                                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${colors.badge}`}>
                                                        {REGION_NAMES[region]}
                                                    </span>
                                                    <span className="text-[10px] text-gray-400">{regionCities.length} مدينة</span>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {regionCities.map(city => (
                                                        <Link
                                                            key={city.slug}
                                                            href={`/${city.slug}`}
                                                            className={`text-xs px-3 py-1.5 rounded-lg bg-white border border-gray-200 ${colors.text} hover:shadow-sm hover:border-current transition-all duration-200 font-medium`}
                                                        >
                                                            {city.name_ar}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* ═══ Full Services Directory ═══ */}
                            <div className="pt-8 border-t border-gray-100">
                                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2 text-center">
                                    🔧 دليل الخدمات — جميع التخصصات
                                </h3>
                                <p className="text-xs text-gray-400 text-center mb-6">
                                    جميع الخدمات المتاحة عبر شبكة بروكر في كافة المدن
                                </p>
                                <div className="space-y-5">
                                    {(['moving', 'cleaning', 'pest-control', 'sewage', 'leak-detection', 'insulation'] as const).map(category => {
                                        const catServices = SERVICES.filter(s => s.category === category);
                                        if (catServices.length === 0) return null;
                                        const catColors: Record<string, { bg: string; border: string; text: string; badge: string; icon: string }> = {
                                            'moving': { bg: 'bg-blue-50/60', border: 'border-blue-100', text: 'text-blue-700', badge: 'bg-blue-100 text-blue-800', icon: '🚚' },
                                            'cleaning': { bg: 'bg-cyan-50/60', border: 'border-cyan-100', text: 'text-cyan-700', badge: 'bg-cyan-100 text-cyan-800', icon: '🧹' },
                                            'pest-control': { bg: 'bg-red-50/60', border: 'border-red-100', text: 'text-red-700', badge: 'bg-red-100 text-red-800', icon: '🛡️' },
                                            'sewage': { bg: 'bg-orange-50/60', border: 'border-orange-100', text: 'text-orange-700', badge: 'bg-orange-100 text-orange-800', icon: '🔧' },
                                            'leak-detection': { bg: 'bg-teal-50/60', border: 'border-teal-100', text: 'text-teal-700', badge: 'bg-teal-100 text-teal-800', icon: '💧' },
                                            'insulation': { bg: 'bg-indigo-50/60', border: 'border-indigo-100', text: 'text-indigo-700', badge: 'bg-indigo-100 text-indigo-800', icon: '🏗️' },
                                        };
                                        const colors = catColors[category];
                                        return (
                                            <div key={category} className={`${colors.bg} border ${colors.border} rounded-xl p-4`}>
                                                <div className="flex items-center gap-2 mb-3">
                                                    <span className="text-sm">{colors.icon}</span>
                                                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${colors.badge}`}>
                                                        {CATEGORY_NAMES[category]}
                                                    </span>
                                                    <span className="text-[10px] text-gray-400">{catServices.length} خدمة</span>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {catServices.map(service => (
                                                        <Link
                                                            key={service.slug}
                                                            href={`/${service.slug}`}
                                                            className={`text-xs px-3 py-1.5 rounded-lg bg-white border border-gray-200 ${colors.text} hover:shadow-sm hover:border-current transition-all duration-200 font-medium`}
                                                        >
                                                            {service.name_ar}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Footer bar */}
                        <div className="bg-slate-50 border-t border-gray-200 px-8 py-4">
                            <div className="flex items-center justify-between text-xs text-gray-500">
                                <span>رقم البيان: MA-2026-001</span>
                                <span>تاريخ الاستحواذ: مارس 2026</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Legal Disclaimer */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                    <div className="bg-gray-100 rounded-xl p-6 text-center">
                        <p className="text-xs text-gray-500 leading-relaxed">
                            هذه الصفحة هي بيان رسمي من إدارة بروكر بشأن عملية الاستحواذ ودمج الأصول.
                            جميع حقوق العلامة التجارية &quot;بروكر&quot; و &quot;Prokr&quot; محفوظة.
                            <br />
                            النطاق الرسمي الوحيد لبروكر هو <strong className="text-gray-700 font-mono">prokr.co</strong> — أي نطاقات أخرى لا تمثلنا ولا ترتبط بعملياتنا الحالية.
                        </p>
                    </div>
                </section>

                {/* Standalone Footer */}
                <footer className="bg-gray-900 text-gray-400 py-8">
                    <div className="max-w-4xl mx-auto px-4 text-center text-xs space-y-2">
                        <p>© {new Date().getFullYear()} بروكر لتقنية المعلومات — جميع الحقوق محفوظة</p>
                        <p className="text-gray-500">النطاق الرسمي الوحيد: <strong className="text-gray-300 font-mono">prokr.co</strong></p>
                    </div>
                </footer>
            </main>
        </>
    );
}
