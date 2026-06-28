import { Metadata } from 'next';
import Link from 'next/link';
import { BreadcrumbJsonLd } from '@/components/schema/BreadcrumbJsonLd';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'أدوات وحاسبات تكلفة الخدمات المنزلية في السعودية',
    description:
        'أدوات وحاسبات مجانية لتقدير تكلفة الخدمات المنزلية في السعودية، مبنية على مؤشر بروكر لأسعار الخدمات الحقيقية. ابدأ بحاسبة تكلفة نقل العفش.',
    openGraph: {
        title: '🧮 أدوات بروكر — حاسبات الخدمات المنزلية',
        description: 'حاسبات مجانية لتقدير تكلفة الخدمات المنزلية في السعودية.',
        type: 'website',
        url: 'https://prokr.co/tools',
        siteName: 'بروكر الخدمي',
        locale: 'ar_SA',
    },
    twitter: {
        card: 'summary_large_image',
        title: '🧮 أدوات بروكر — حاسبات الخدمات المنزلية',
        description: 'حاسبات مجانية لتقدير تكلفة الخدمات المنزلية في السعودية.',
    },
    alternates: { canonical: 'https://prokr.co/tools' },
};

const TOOLS = [
    {
        href: '/tools/moving-cost-calculator',
        emoji: '🚚',
        title: 'حاسبة تكلفة نقل العفش',
        desc: 'احسب سعر نقل عفشك التقديري حسب المدينة وحجم المنزل والدور والتغليف والمسافة.',
    },
    {
        href: '/tools/insulation-cost-calculator',
        emoji: '🧱',
        title: 'حاسبة تكلفة العزل',
        desc: 'احسب تكلفة عزل سطحك التقديري حسب المساحة ونوع العزل (مائي/حراري/فوم) ومدينتك.',
    },
];

export default function ToolsIndexPage() {
    return (
        <>
            <BreadcrumbJsonLd items={[
                { name: 'الرئيسية', url: 'https://prokr.co' },
                { name: 'أدوات', url: 'https://prokr.co/tools' },
            ]} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'ItemList',
                    name: 'أدوات بروكر',
                    itemListElement: TOOLS.map((t, i) => ({
                        '@type': 'ListItem', position: i + 1, name: t.title,
                        url: `https://prokr.co${t.href}`,
                    })),
                }),
            }} />

            <main className="min-h-screen bg-gray-50" dir="rtl">
                <section className="text-white" style={{ background: 'linear-gradient(to bottom left, #0284C7, #0369A1, #0C4A6E)' }}>
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <nav className="flex items-center gap-2 text-sm mb-6 text-sky-100">
                            <Link href="/" className="hover:text-white">الرئيسية</Link>
                            <span>›</span>
                            <span className="text-white font-medium">أدوات</span>
                        </nav>
                        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">أدوات وحاسبات بروكر</h1>
                        <p className="text-sky-100 text-lg leading-relaxed max-w-3xl">
                            حاسبات مجانية لتقدير تكلفة الخدمات المنزلية في السعودية، مبنية على مؤشر بروكر لأسعار الخدمات الحقيقية — تساعدك على وضع ميزانيتك قبل طلب العروض.
                        </p>
                    </div>
                </section>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div className="grid gap-5 sm:grid-cols-2">
                        {TOOLS.map(t => (
                            <Link key={t.href} href={t.href}
                                className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-sky-300 hover:shadow-md transition-all group">
                                <div className="text-3xl mb-3">{t.emoji}</div>
                                <h2 className="text-lg font-bold text-gray-900 group-hover:text-sky-700 transition-colors mb-1">{t.title}</h2>
                                <p className="text-gray-600 text-sm leading-relaxed">{t.desc}</p>
                            </Link>
                        ))}
                    </div>
                </div>

                <Footer />
            </main>
        </>
    );
}
