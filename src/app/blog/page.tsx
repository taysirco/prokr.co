import { Metadata } from 'next';
import Link from 'next/link';
import { Home, ChevronLeft, Clock, ArrowLeft, BookOpen } from 'lucide-react';
import { BLOG_ARTICLES, BLOG_CATEGORIES } from '@/lib/blog-data';
import { BreadcrumbJsonLd, WebPageJsonLd } from '@/components/JsonLd';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'مدونة بروكر — أدلة ونصائح الخدمات المنزلية في السعودية',
    description: 'مقالات وأدلة شاملة عن نقل العفش، التنظيف، مكافحة الحشرات، كشف التسربات، العزل والصرف الصحي. نصائح من خبراء بروكر لمساعدتك في اختيار الخدمة المناسبة.',
    keywords: [
        'مدونة خدمات منزلية',
        'نصائح نقل عفش',
        'دليل تنظيف المنازل',
        'مكافحة حشرات نصائح',
        'كشف تسربات المياه',
        'أسعار الخدمات المنزلية',
        'حماية المستهلك',
        'شركات وهمية',
        'كشف احتيال خدمات',
        'بروكر مدونة',
    ],
    openGraph: {
        title: 'مدونة بروكر — أدلة ونصائح الخدمات المنزلية',
        description: 'مقالات وأدلة شاملة عن الخدمات المنزلية في السعودية',
        url: 'https://prokr.co/blog',
        locale: 'ar_SA',
        siteName: 'بروكر',
        type: 'website',
    },
    alternates: {
        canonical: 'https://prokr.co/blog',
    },
};

export default function BlogPage() {
    const breadcrumbs = [
        { name: 'الرئيسية', url: 'https://prokr.co' },
        { name: 'المدونة', url: 'https://prokr.co/blog' },
    ];

    // Group articles by category
    const articlesByCategory: Record<string, typeof BLOG_ARTICLES> = {};
    for (const article of BLOG_ARTICLES) {
        if (!articlesByCategory[article.category]) {
            articlesByCategory[article.category] = [];
        }
        articlesByCategory[article.category].push(article);
    }

    // Helper: category-specific colors (full strings for Tailwind JIT scanner)
    function getCategoryAccent(slug: string) {
        if (slug === 'consumer-protection') return 'bg-rose-500';
        if (slug === 'pest-control') return 'bg-red-500';
        if (slug === 'leak-detection') return 'bg-cyan-500';
        if (slug === 'insulation') return 'bg-amber-500';
        if (slug === 'sewage') return 'bg-purple-500';
        if (slug === 'moving') return 'bg-blue-500';
        if (slug === 'cleaning') return 'bg-emerald-500';
        return 'bg-emerald-500';
    }
    function getCategoryBadge(slug: string) {
        if (slug === 'consumer-protection') return 'bg-rose-50 text-rose-700';
        if (slug === 'pest-control') return 'bg-red-50 text-red-700';
        if (slug === 'leak-detection') return 'bg-cyan-50 text-cyan-700';
        if (slug === 'insulation') return 'bg-amber-50 text-amber-700';
        if (slug === 'sewage') return 'bg-purple-50 text-purple-700';
        if (slug === 'moving') return 'bg-blue-50 text-blue-700';
        if (slug === 'cleaning') return 'bg-emerald-50 text-emerald-700';
        return 'bg-emerald-50 text-emerald-700';
    }

    return (
        <>
            <BreadcrumbJsonLd items={breadcrumbs} />
            <WebPageJsonLd
                title="مدونة بروكر"
                description="أدلة ونصائح شاملة عن الخدمات المنزلية في السعودية"
                url="https://prokr.co/blog"
                breadcrumbs={breadcrumbs}
            />
            {/* CollectionPage JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'CollectionPage',
                        name: 'مدونة بروكر',
                        description: 'مقالات وأدلة شاملة عن الخدمات المنزلية في السعودية',
                        url: 'https://prokr.co/blog',
                        publisher: { '@type': 'Organization', name: 'بروكر', url: 'https://prokr.co' },
                        mainEntity: {
                            '@type': 'ItemList',
                            itemListElement: BLOG_ARTICLES.map((a, i) => ({
                                '@type': 'ListItem',
                                position: i + 1,
                                url: `https://prokr.co/blog/${a.slug}`,
                                name: a.title,
                            })),
                        },
                    }),
                }}
            />

            <main className="min-h-screen bg-gray-50">
                {/* Hero */}
                <section className="bg-gradient-to-bl from-emerald-600 via-emerald-700 to-emerald-900 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                        <nav className="flex items-center gap-2 text-emerald-100 text-sm mb-6">
                            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                                <Home className="w-4 h-4" />
                                الرئيسية
                            </Link>
                            <ChevronLeft className="w-4 h-4" />
                            <span className="text-white font-medium">المدونة</span>
                        </nav>

                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                                <BookOpen className="w-8 h-8" />
                            </div>
                            <div>
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">مدونة بروكر</h1>
                                <p className="text-emerald-100 mt-1">{BLOG_ARTICLES.length} مقال ودليل شامل</p>
                            </div>
                        </div>
                        <p className="text-lg text-emerald-100 max-w-2xl mt-4">
                            أدلة ونصائح احترافية لمساعدتك في اختيار أفضل الخدمات المنزلية في السعودية — من خبراء بروكر
                        </p>
                    </div>
                </section>

                {/* Category Filter */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-wrap gap-2">
                        {BLOG_CATEGORIES.filter(c => articlesByCategory[c.slug]).map(cat => (
                            <a
                                key={cat.slug}
                                href={`#cat-${cat.slug}`}
                                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-emerald-300 hover:text-emerald-700 transition-colors"
                            >
                                {cat.label} ({articlesByCategory[cat.slug]?.length || 0})
                            </a>
                        ))}
                    </div>
                </div>

                {/* Articles Grid by Category */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                    {BLOG_CATEGORIES.filter(c => articlesByCategory[c.slug]).map(cat => (
                        <section key={cat.slug} id={`cat-${cat.slug}`} className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className={`w-1.5 h-8 ${getCategoryAccent(cat.slug)} rounded-full`}></span>
                                مقالات {cat.label}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {articlesByCategory[cat.slug].map(article => {
                                    const badgeClass = getCategoryBadge(article.category);
                                    return (
                                    <Link
                                        key={article.slug}
                                        href={`/blog/${article.slug}`}
                                        className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-emerald-300 hover:shadow-xl transition-all"
                                    >
                                        <div className="p-6">
                                            <span className={`inline-block px-3 py-1 ${badgeClass} rounded-full text-xs font-medium mb-3`}>
                                                {article.categoryLabel}
                                            </span>
                                            <h3 className="font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors line-clamp-2">
                                                {article.title}
                                            </h3>
                                            <p className="text-gray-500 text-sm line-clamp-2 mb-4">{article.excerpt}</p>
                                            <div className="flex items-center justify-between text-xs text-gray-400">
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-3.5 h-3.5" />
                                                    {article.readTime} دقائق
                                                </span>
                                                <span>{new Date(article.updateDate).toLocaleDateString('ar-SA', { month: 'short', day: 'numeric' })}</span>
                                            </div>
                                        </div>
                                        <div className="px-6 pb-4">
                                            <span className="text-emerald-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                                اقرأ المقال
                                                <ArrowLeft className="w-4 h-4" />
                                            </span>
                                        </div>
                                    </Link>
                                    );
                                })}
                            </div>
                        </section>
                    ))}
                </div>

                <Footer />
            </main>
        </>
    );
}
