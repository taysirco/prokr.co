import { Metadata } from 'next';

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
    // 🚨 يجب أن يتفهرس كبيان رسمي
    robots: { index: true, follow: true },
    alternates: {
        canonical: 'https://prokr.co/corporate/acquisition',
    },
    openGraph: {
        title: 'إعلان استحواذ ودمج الأصول | بروكر',
        description: 'البيان الرسمي لاستحواذ منصة prokr.co على النطاقات والأصول التابعة لشبكة بروكر القديمة',
        locale: 'ar_SA',
        type: 'website',
        siteName: 'بروكر',
        url: 'https://prokr.co/corporate/acquisition',
    },
};

export default function AcquisitionPage() {
    // 🧠 AcquireAction Schema: يوضح الانتقال من الكيان القديم للجديد
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

    return (
        <>
            {/* 🧠 AcquireAction Schema — AcquireAction Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(acquisitionSchema) }}
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
                        <div className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 font-bold text-xl" dir="ltr">
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
                                <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
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
                                    وتلتزم بأعلى معايير الجودة (E-E-A-T) لحماية المستهلك السعودي.
                                </p>
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

                            {/* E-E-A-T compliance notice */}
                            <div className="flex items-start gap-4 p-4 bg-emerald-50 border border-emerald-200 rounded-xl mt-6">
                                <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                                    <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-emerald-800 mb-1">ضمان الجودة والثقة (E-E-A-T)</h3>
                                    <p className="text-emerald-700 text-sm leading-relaxed">
                                        تلتزم منصة بروكر الجديدة بأعلى معايير الخبرة والثقة والمصداقية.
                                        تم تأسيس بنية تحتية جديدة بالكامل تعتمد على توثيق السجلات التجارية (CRN)
                                        بمعايير وزارة التجارة السعودية، مع فصل كامل عن أي بيانات أو أنظمة سابقة.
                                    </p>
                                </div>
                            </div>

                            {/* CTA — external link to prokr.co only */}
                            <div className="text-center pt-6">
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
