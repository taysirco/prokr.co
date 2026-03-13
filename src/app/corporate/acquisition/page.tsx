import { Metadata } from 'next';
import Footer from '@/components/Footer';

// ════════════════════════════════════════════════════════════════
// 🔒 غرفة العزل — Quarantine Chamber
// This page is the SOLE destination for all legacy domain traffic.
// It absorbs toxic equity and neutralizes poisoned anchor text.
// CRITICAL: No internal links to silo pages. Zero equity bleed.
// ════════════════════════════════════════════════════════════════

export const metadata: Metadata = {
    title: 'إشعار انتقال النطاق | بروكر - prokr.co',
    description: 'تم نقل جميع خدمات بروكر إلى النطاق الرسمي prokr.co. النطاقات القديمة prokr.com و prokr.net و prokr.org لم تعد مستخدمة.',
    robots: {
        index: false,
        follow: false,
        nocache: true,
        googleBot: {
            index: false,
            follow: false,
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: 'https://prokr.co/corporate/acquisition',
    },
    openGraph: {
        title: 'إشعار انتقال النطاق | بروكر',
        description: 'تم نقل جميع خدمات بروكر إلى النطاق الرسمي prokr.co',
        locale: 'ar_SA',
        type: 'website',
        siteName: 'بروكر',
        url: 'https://prokr.co/corporate/acquisition',
    },
};

export default function CorporateAcquisitionPage() {
    return (
        <>
            {/* JSON-LD: Corporate Statement — no BreadcrumbList (isolate from site graph) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'WebPage',
                        name: 'إشعار انتقال النطاق — بروكر',
                        description: 'بيان رسمي بشأن انتقال خدمات بروكر إلى النطاق الموحد prokr.co',
                        url: 'https://prokr.co/corporate/acquisition',
                        lastReviewed: '2026-03-13',
                        inLanguage: 'ar',
                        isPartOf: {
                            '@type': 'WebSite',
                            name: 'بروكر',
                            url: 'https://prokr.co',
                        },
                    }),
                }}
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
                        {/* Corporate badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium text-slate-200 mb-8">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                            </svg>
                            بيان رسمي من الإدارة
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                            إشعار انتقال النطاق
                        </h1>
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                            تم توحيد جميع خدمات ونطاقات بروكر تحت العنوان الرسمي الوحيد
                        </p>
                        <div className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 font-bold text-xl" dir="ltr">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-5.368a4.5 4.5 0 00-1.242-7.244l-4.5-4.5a4.5 4.5 0 00-6.364 6.364L9.21 8.688" />
                            </svg>
                            prokr.co
                        </div>
                    </div>
                </section>

                {/* Corporate Statement */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                        {/* Header bar */}
                        <div className="bg-slate-50 border-b border-gray-200 px-8 py-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                                    P
                                </div>
                                <div>
                                    <h2 className="font-bold text-gray-900">بروكر — Prokr</h2>
                                    <p className="text-xs text-gray-500">دليل الخدمات السعودي الشامل</p>
                                </div>
                            </div>
                        </div>

                        {/* Content body */}
                        <div className="px-8 py-8 space-y-6">
                            <div className="flex items-start gap-4 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                                    <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-amber-800 mb-1">ملاحظة مهمة</h3>
                                    <p className="text-amber-700 text-sm leading-relaxed">
                                        إذا وصلت إلى هذه الصفحة عبر أحد النطاقات القديمة ({' '}
                                        <span className="font-mono text-xs bg-amber-100 px-1.5 py-0.5 rounded">prokr.com</span> أو{' '}
                                        <span className="font-mono text-xs bg-amber-100 px-1.5 py-0.5 rounded">prokr.net</span> أو{' '}
                                        <span className="font-mono text-xs bg-amber-100 px-1.5 py-0.5 rounded">prokr.org</span>
                                        )، فاعلم أن هذه النطاقات لم تعد مستخدمة ولا تمثل خدماتنا.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    نود إعلامكم بأنه تم <strong className="text-gray-900">توحيد جميع نطاقات بروكر</strong> تحت النطاق الرسمي الموحد{' '}
                                    <strong className="text-emerald-700 font-mono">prokr.co</strong>.
                                    هذا الإجراء جاء ضمن خطة التطوير المؤسسي لضمان أعلى مستويات الأمان والموثوقية.
                                </p>

                                <p>
                                    النطاقات التالية <strong className="text-red-700">لم تعد مستخدمة نهائياً</strong> ولا صلة لها بعمليات بروكر الحالية:
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    {['prokr.com', 'prokr.net', 'prokr.org'].map(domain => (
                                        <div key={domain} className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-center justify-center">
                                            <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                            </svg>
                                            <span className="font-mono text-sm text-red-700 font-medium" dir="ltr">{domain}</span>
                                        </div>
                                    ))}
                                </div>

                                <p>
                                    إذا كنت تبحث عن خدماتنا، يُرجى التوجه مباشرة إلى النطاق الرسمي الوحيد:
                                </p>
                            </div>

                            {/* Canonical CTA — external link to prokr.co (NOT a Next Link) */}
                            <div className="text-center pt-4">
                                <a
                                    href="https://prokr.co"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 text-white font-bold text-lg rounded-xl hover:bg-emerald-700 shadow-lg shadow-emerald-200 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-200 hover:-translate-y-0.5"
                                    rel="noopener"
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 9.75c0 .746-.092 1.472-.264 2.165m-15.472-.038A9.004 9.004 0 003 9.75c0 .746.092 1.472.264 2.165m0 0a11.96 11.96 0 005.879 5.838m0 0A11.953 11.953 0 0112 18.75c1.09 0 2.144-.146 3.143-.42" />
                                    </svg>
                                    انتقل إلى prokr.co
                                </a>
                            </div>
                        </div>

                        {/* Footer bar */}
                        <div className="bg-slate-50 border-t border-gray-200 px-8 py-4">
                            <div className="flex items-center justify-between text-xs text-gray-500">
                                <span>رقم البيان: CA-2026-001</span>
                                <span>تاريخ النشر: مارس 2026</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Legal Disclaimer */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                    <div className="bg-gray-100 rounded-xl p-6 text-center">
                        <p className="text-xs text-gray-500 leading-relaxed">
                            هذه الصفحة هي بيان رسمي من إدارة بروكر بشأن انتقال النطاق. جميع حقوق العلامة التجارية &quot;بروكر&quot; و &quot;Prokr&quot; محفوظة.
                            <br />
                            النطاق الرسمي الوحيد لبروكر هو <strong className="text-gray-700 font-mono">prokr.co</strong> — أي نطاقات أخرى لا تمثلنا.
                        </p>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    );
}
