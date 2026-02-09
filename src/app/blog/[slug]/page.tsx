import { Metadata } from 'next';
import Link from 'next/link';
import { Home, ChevronLeft, Clock, User, Calendar, Tag, ArrowLeft } from 'lucide-react';
import { BLOG_ARTICLES, getBlogArticle } from '@/lib/blog-data';
import { getServiceBySlug } from '@/lib/seed';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';

interface BlogArticlePageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return BLOG_ARTICLES.map(article => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
    const { slug } = await params;
    const article = getBlogArticle(slug);
    if (!article) return { title: 'مقال غير موجود' };

    return {
        title: article.metaTitle,
        description: article.metaDescription,
        keywords: article.tags,
        openGraph: {
            title: article.metaTitle,
            description: article.metaDescription,
            type: 'article',
            publishedTime: article.publishDate,
            modifiedTime: article.updateDate,
            authors: [article.author],
            locale: 'ar_SA',
            siteName: 'بروكر',
            url: `https://prokr.co/blog/${slug}`,
            images: [{
                url: 'https://prokr.co/logo.png',
                width: 512,
                height: 512,
                alt: `${article.title} - مدونة بروكر`,
            }],
        },
        twitter: {
            card: 'summary_large_image',
            title: article.metaTitle,
            description: article.metaDescription,
            images: ['https://prokr.co/logo.png'],
        },
        alternates: {
            canonical: `https://prokr.co/blog/${slug}`,
        },
    };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
    const { slug } = await params;
    const article = getBlogArticle(slug);

    if (!article) {
        notFound();
    }

    const breadcrumbs = [
        { name: 'الرئيسية', url: 'https://prokr.co' },
        { name: 'المدونة', url: 'https://prokr.co/blog' },
        { name: article.title, url: `https://prokr.co/blog/${slug}` },
    ];

    const relatedArticles = BLOG_ARTICLES
        .filter(a => a.slug !== slug && a.category === article.category)
        .slice(0, 3);

    return (
        <>
            <BreadcrumbJsonLd items={breadcrumbs} />
            {/* Article JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Article',
                        headline: article.title,
                        description: article.metaDescription,
                        author: { '@type': 'Organization', name: article.author, url: 'https://prokr.co' },
                        publisher: {
                            '@type': 'Organization',
                            name: 'بروكر',
                            url: 'https://prokr.co',
                            logo: { '@type': 'ImageObject', url: 'https://prokr.co/logo.png' },
                        },
                        datePublished: article.publishDate,
                        dateModified: article.updateDate,
                        mainEntityOfPage: `https://prokr.co/blog/${slug}`,
                        inLanguage: 'ar',
                        keywords: article.tags.join(', '),
                    }),
                }}
            />
            {/* HowTo JSON-LD */}
            {article.howToSteps && article.howToSteps.length > 0 && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'HowTo',
                            name: article.title,
                            description: article.metaDescription,
                            step: article.howToSteps.map((step, i) => ({
                                '@type': 'HowToStep',
                                position: i + 1,
                                name: step.name,
                                text: step.text,
                            })),
                        }),
                    }}
                />
            )}
            {/* FAQ JSON-LD */}
            {article.faq.length > 0 && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'FAQPage',
                            mainEntity: article.faq.map(f => ({
                                '@type': 'Question',
                                name: f.question,
                                acceptedAnswer: { '@type': 'Answer', text: f.answer },
                            })),
                        }),
                    }}
                />
            )}

            <main className="min-h-screen bg-gray-50">
                {/* Hero */}
                <section className="bg-gradient-to-bl from-emerald-600 via-emerald-700 to-emerald-900 text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <nav className="flex items-center gap-2 text-emerald-100 text-sm mb-6">
                            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                                <Home className="w-4 h-4" />
                                الرئيسية
                            </Link>
                            <ChevronLeft className="w-4 h-4" />
                            <Link href="/blog" className="hover:text-white transition-colors">المدونة</Link>
                            <ChevronLeft className="w-4 h-4" />
                            <span className="text-white font-medium truncate max-w-[200px]">{article.title}</span>
                        </nav>

                        <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                            {article.categoryLabel}
                        </span>

                        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">
                            {article.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-4 text-emerald-100 text-sm">
                            <span className="flex items-center gap-1.5">
                                <User className="w-4 h-4" />
                                {article.author}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Calendar className="w-4 h-4" />
                                {new Date(article.updateDate).toLocaleDateString('ar-SA', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Clock className="w-4 h-4" />
                                {article.readTime} دقائق قراءة
                            </span>
                        </div>
                    </div>
                </section>

                {/* Article Body */}
                <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Intro */}
                    <div className="bg-emerald-50 border-r-4 border-emerald-500 rounded-xl p-6 mb-10">
                        <p className="text-gray-700 text-lg leading-relaxed">{article.excerpt}</p>
                    </div>

                    {/* Table of Contents */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 mb-10">
                        <h2 className="font-bold text-gray-900 mb-4">محتويات المقال</h2>
                        <ul className="space-y-2">
                            {article.sections.map((section, idx) => (
                                <li key={idx}>
                                    <a href={`#section-${idx}`} className="text-emerald-600 hover:underline text-sm flex items-center gap-2">
                                        <span className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center text-xs font-bold text-emerald-700">{idx + 1}</span>
                                        {section.heading}
                                    </a>
                                </li>
                            ))}
                            {article.faq.length > 0 && (
                                <li>
                                    <a href="#faq" className="text-emerald-600 hover:underline text-sm flex items-center gap-2">
                                        <span className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center text-xs font-bold text-emerald-700">?</span>
                                        الأسئلة الشائعة
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>

                    {/* Sections */}
                    {article.sections.map((section, idx) => (
                        <section key={idx} id={`section-${idx}`} className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.heading}</h2>
                            <div className="prose prose-lg prose-emerald max-w-none">
                                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{section.content}</p>
                            </div>
                        </section>
                    ))}

                    {/* FAQ */}
                    {article.faq.length > 0 && (
                        <section id="faq" className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">الأسئلة الشائعة</h2>
                            <div className="space-y-4">
                                {article.faq.map((faq, idx) => (
                                    <div key={idx} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                                        <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-2 mb-10">
                        <Tag className="w-4 h-4 text-gray-400" />
                        {article.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">{tag}</span>
                        ))}
                    </div>

                    {/* Related Services CTA */}
                    {article.relatedServices.length > 0 && (
                        <div className="bg-gradient-to-bl from-emerald-50 to-emerald-100 rounded-xl p-6 border border-emerald-200 mb-10">
                            <h3 className="font-bold text-emerald-900 mb-4">ابحث عن أفضل الشركات</h3>
                            <div className="flex flex-wrap gap-2">
                                {article.relatedServices.map(serviceSlug => {
                                    const service = getServiceBySlug(serviceSlug);
                                    return service ? (
                                        <Link
                                            key={serviceSlug}
                                            href={`/${serviceSlug}`}
                                            className="px-4 py-2 bg-white text-emerald-700 rounded-lg text-sm font-medium hover:bg-emerald-50 border border-emerald-200 transition-colors"
                                        >
                                            {service.name_ar}
                                        </Link>
                                    ) : null;
                                })}
                            </div>
                        </div>
                    )}

                    {/* Related Articles */}
                    {relatedArticles.length > 0 && (
                        <section className="mb-10">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">مقالات ذات صلة</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {relatedArticles.map(ra => (
                                    <Link
                                        key={ra.slug}
                                        href={`/blog/${ra.slug}`}
                                        className="bg-white border border-gray-200 rounded-xl p-4 hover:border-emerald-300 hover:shadow-md transition-all group"
                                    >
                                        <span className="text-xs text-emerald-600 font-medium">{ra.categoryLabel}</span>
                                        <h3 className="font-bold text-gray-900 mt-1 text-sm group-hover:text-emerald-700 transition-colors line-clamp-2">{ra.title}</h3>
                                        <span className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {ra.readTime} دقائق
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Back to Blog */}
                    <Link href="/blog" className="inline-flex items-center gap-2 text-emerald-600 font-medium hover:underline">
                        <ArrowLeft className="w-4 h-4" />
                        العودة للمدونة
                    </Link>
                </article>

                <Footer />
            </main>
        </>
    );
}
