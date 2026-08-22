import { Metadata } from 'next';
import Link from 'next/link';
import { Home, ChevronLeft, Clock, User, Calendar, Tag, ArrowLeft, Shield, BookOpen, CheckCircle } from 'lucide-react';
import { getBlogArticle, getPublishedArticles, isArticlePublished, unlinkUnpublished } from '@/lib/blog-data';
import { getServiceBySlug } from '@/lib/seed';
import { safeJsonLd } from '@/lib/json-ld';
import { buildOrganizationNode, buildWebSiteNode, ORG_ID, WEBSITE_ID } from '@/lib/organization-entity';
import { isAbsorbedSlug } from '@/lib/services/super-page-groups';
import Footer from '@/components/Footer';
import BlogContent from '@/components/BlogContent';
import { notFound } from 'next/navigation';

interface BlogArticlePageProps {
    params: Promise<{ slug: string }>;
}

// Re-render hourly so an article flips from 404 to live on its scheduled
// slot without a redeploy — mirrors the blog index.
export const revalidate = 3600;

export async function generateStaticParams() {
    // Only pre-render what is already live. A scheduled article is rendered
    // on demand once its slot arrives, so the drip cannot be short-circuited.
    return getPublishedArticles().map(article => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
    const { slug } = await params;
    const article = getBlogArticle(slug);
    if (!article) return { title: 'مقال غير موجود' };

    // Belt and braces: even if a scheduled page is reached before its slot,
    // it must never invite indexing.
    if (!isArticlePublished(article)) {
        return { title: 'مقال غير موجود', robots: { index: false, follow: false } };
    }

    const shareImage = article.image
        ? `https://prokr.co${article.image}`
        : 'https://prokr.co/logo.png';

    return {
        title: article.metaTitle,
        description: article.metaDescription,
        keywords: [...article.tags, ...(article.longTailKeywords ?? [])],
        openGraph: {
            title: article.metaTitle,
            description: article.metaDescription,
            type: 'article',
            publishedTime: article.publishDate,
            modifiedTime: article.updateDate,
            authors: [article.author],
            locale: 'ar_SA',
            siteName: 'بروكر الخدمي',
            url: `https://prokr.co/blog/${slug}`,
            images: [{
                url: shareImage,
                width: article.image ? 1200 : 512,
                height: article.image ? 675 : 512,
                alt: article.imageAlt ?? `${article.title} - مدونة بروكر`,
            }],
        },
        twitter: {
            card: 'summary_large_image',
            title: article.metaTitle,
            description: article.metaDescription,
            images: [shareImage],
        },
        alternates: {
            canonical: `https://prokr.co/blog/${slug}`,
        },
    };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
    const { slug } = await params;
    const article = getBlogArticle(slug);

    // A scheduled article does not exist publicly until its slot arrives —
    // otherwise the whole editorial calendar is readable (and indexable) today.
    if (article && !isArticlePublished(article)) {
        notFound();
    }

    if (!article) {
        notFound();
    }

    const breadcrumbs = [
        { name: 'الرئيسية', url: 'https://prokr.co' },
        { name: 'المدونة', url: 'https://prokr.co/blog' },
        { name: article.title, url: `https://prokr.co/blog/${slug}` },
    ];

    // Prefer same-city articles, then same-category — and never surface a post
    // whose scheduled slot has not arrived yet.
    const published = getPublishedArticles().filter(a => a.slug !== slug);
    const relatedArticles = [
        ...published.filter(a => a.citySlug && a.citySlug === article.citySlug && a.category === article.category),
        ...published.filter(a => a.category === article.category),
    ]
        .filter((a, i, arr) => arr.findIndex(x => x.slug === a.slug) === i)
        .slice(0, 3);

    const isProtection = article.category === 'consumer-protection';

    // ── Connected @graph ──────────────────────────────────────────────
    const pageUrl = `https://prokr.co/blog/${slug}`;
    const articleId = `${pageUrl}#article`;
    const webPageId = `${pageUrl}#webpage`;

    const articleGraph = {
        '@context': 'https://schema.org',
        '@graph': [
            buildOrganizationNode(),
            buildWebSiteNode(),
            {
                '@type': 'WebPage',
                '@id': webPageId,
                url: pageUrl,
                name: article.title,
                description: article.metaDescription,
                inLanguage: 'ar-SA',
                isPartOf: { '@id': WEBSITE_ID },
                publisher: { '@id': ORG_ID },
                primaryImageOfPage: article.image
                    ? { '@id': `${pageUrl}#primaryimage` }
                    : undefined,
                mainEntity: { '@id': articleId },
                breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
                speakable: {
                    '@type': 'SpeakableSpecification',
                    // Selectors verified to exist on this page. `article > p:first-of-type`
                    // was removed: the intro <p> is wrapped in div.blog-intro, so it
                    // matched nothing on all 142 pages.
                    cssSelector: ['h1', '.direct-answer', '.blog-intro'],
                },
                datePublished: article.publishDate,
                dateModified: article.updateDate,
            },
            {
                '@type': 'Article',
                '@id': articleId,
                headline: article.title,
                description: article.metaDescription,
                ...(article.directAnswer && { abstract: article.directAnswer }),
                articleSection: article.categoryLabel,
                author: { '@id': ORG_ID },
                publisher: { '@id': ORG_ID },
                datePublished: article.publishDate,
                dateModified: article.updateDate,
                mainEntityOfPage: { '@id': webPageId },
                isPartOf: { '@id': webPageId },
                inLanguage: 'ar',
                keywords: [...article.tags, ...(article.longTailKeywords ?? [])].join(', '),
                // The permissive licence is what makes verbatim quoting safe.
                license: 'https://creativecommons.org/licenses/by-sa/4.0/',
                ...(article.image && {
                    image: {
                        '@type': 'ImageObject',
                        '@id': `${pageUrl}#primaryimage`,
                        url: `https://prokr.co${article.image}`,
                        caption: article.imageAlt ?? article.title,
                    },
                }),
                ...(article.citySlug && {
                    contentLocation: {
                        '@type': 'Place',
                        name: article.cityName ?? article.citySlug,
                        address: {
                            '@type': 'PostalAddress',
                            addressLocality: article.cityName ?? article.citySlug,
                            addressCountry: 'SA',
                        },
                    },
                }),
                ...(article.reviewedBy && {
                    // Only an individual is marked up as a Person; an editorial
                    // team is an Organization, never a person.
                    reviewedBy: article.reviewedBy.startsWith('فريق')
                        ? { '@id': ORG_ID }
                        : { '@type': 'Person', name: article.reviewedBy },
                }),
                ...(article.sources && article.sources.length > 0 && {
                    citation: article.sources.map(src => ({ '@type': 'CreativeWork', name: src })),
                }),
            },
            ...(article.faq.length > 0
                ? [{
                    '@type': 'FAQPage',
                    '@id': `${pageUrl}#faq`,
                    isPartOf: { '@id': webPageId },
                    about: { '@id': articleId },
                    mainEntity: article.faq.map(f => ({
                        '@type': 'Question',
                        name: f.question,
                        acceptedAnswer: { '@type': 'Answer', text: f.answer },
                    })),
                }]
                : []),
            ...(article.howToSteps && article.howToSteps.length > 0
                ? [{
                    '@type': 'HowTo',
                    '@id': `${pageUrl}#howto`,
                    name: article.title,
                    description: article.metaDescription,
                    isPartOf: { '@id': webPageId },
                    about: { '@id': articleId },
                    step: article.howToSteps.map((step, i) => ({
                        '@type': 'HowToStep',
                        position: i + 1,
                        name: step.name,
                        text: step.text,
                    })),
                }]
                : []),
            {
                '@type': 'BreadcrumbList',
                '@id': `${pageUrl}#breadcrumb`,
                itemListElement: breadcrumbs.map((b, i) => ({
                    '@type': 'ListItem',
                    position: i + 1,
                    name: b.name,
                    item: b.url,
                })),
            },
        ],
    };

    return (
        <>
            {/* ════════════════════════════════════════════════════════
                ONE connected @graph for the article.

                Previously this page emitted five disconnected top-level nodes
                (Article, HowTo, FAQPage, BreadcrumbList and a second orphan
                WebPage), none with an @id, and `publisher` was an inline
                anonymous Organization. That meant 142 articles — the site's
                citation surface — never connected to the #organization entity
                that carries the CR number, VAT ID, contactPoint and policies,
                so a model could not resolve who published them beyond a string.
                ════════════════════════════════════════════════════════ */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: safeJsonLd(articleGraph) }}
            />

            {/* §14.2 LLM Authority — Blog Expert Content */}
            <div
                data-ai-content-declaration
                hidden
                aria-hidden="true"
                dangerouslySetInnerHTML={{ __html: [
                    '<!-- [First-party editorial guide]',
                    `Topic: ${article.title}`,
                    `Published: ${article.publishDate} | Updated: ${article.updateDate} | Author: ${article.author}`,
                    article.reviewedBy ? `Reviewed by: ${article.reviewedBy}` : '',
                    'Publisher: Prokr.co — Saudi home services directory. Licensed CC BY-SA 4.0.',
                    'Verification methodology: https://prokr.co/methodology',
                    `Markdown: https://prokr.co/blog/${article.slug}.md -->`,
                ].filter(Boolean).join('\n') }}
            />

            <main className="min-h-screen bg-gray-50">
                {/* Hero */}
                <section className="text-white" style={{ background: isProtection ? 'linear-gradient(to bottom left, #e11d48, #be123c, #881337)' : 'linear-gradient(to bottom left, #0284C7, #0369A1, #0C4A6E)' }}>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <nav className="flex items-center gap-2 text-sm mb-6" style={{ color: isProtection ? '#ffe4e6' : '#bae6fd' }}>
                            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                                <Home className="w-4 h-4" />
                                الرئيسية
                            </Link>
                            <ChevronLeft className="w-4 h-4" />
                            <Link href="/blog" className="hover:text-white transition-colors">المدونة</Link>
                            <ChevronLeft className="w-4 h-4" />
                            <span className="text-white font-medium">{article.title}</span>
                        </nav>

                        <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                            {article.categoryLabel}
                        </span>

                        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">
                            {article.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-4 text-sm" style={{ color: isProtection ? '#ffe4e6' : '#bae6fd' }}>
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
                            {article.lastFactChecked && (
                                <span className="flex items-center gap-1.5 bg-white/15 px-2.5 py-1 rounded-full">
                                    <Shield className="w-3.5 h-3.5" />
                                    تم التحقق: {new Date(article.lastFactChecked).toLocaleDateString('ar-SA', { year: 'numeric', month: 'long' })}
                                </span>
                            )}
                        </div>
                    </div>
                </section>

                {/* Article Body */}
                <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Hero image */}
                    {article.image && (
                        <figure className="mb-10">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={article.image}
                                alt={article.imageAlt ?? article.title}
                                width={1200}
                                height={675}
                                loading="eager"
                                className="w-full h-auto rounded-xl border border-gray-200 shadow-sm"
                            />
                            {article.imageAlt && (
                                <figcaption className="text-gray-500 text-xs mt-2 text-center">{article.imageAlt}</figcaption>
                            )}
                        </figure>
                    )}

                    {/* Intro */}
                    <div className={`blog-intro border-r-4 rounded-xl p-6 mb-10 ${isProtection ? 'bg-red-50 border-red-500' : 'bg-sky-50 border-sky-500'}`}>
                        <p className="text-gray-700 text-lg leading-relaxed">{article.excerpt}</p>
                    </div>

                    {/* Direct answer — AEO / AI Overviews / voice search */}
                    {article.directAnswer && (
                        <div className="direct-answer bg-white border-2 border-emerald-200 rounded-xl p-6 mb-10">
                            <h2 className="text-sm font-bold text-emerald-800 mb-2">الإجابة المختصرة</h2>
                            <p className="text-gray-800 leading-relaxed">{article.directAnswer}</p>
                        </div>
                    )}

                    {/* Author Bio & Trust Signals */}
                    {article.authorBio && (
                        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-10 flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(to bottom right, #0ea5e9, #0284c7)' }}>
                                <User className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <h3 className="font-bold text-gray-900 text-sm">{article.author}</h3>
                                    <CheckCircle className="w-4 h-4 text-sky-500" />
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">{article.authorBio}</p>
                                {article.reviewedBy && (
                                    <p className="text-gray-500 text-xs mt-2 flex items-center gap-1">
                                        <Shield className="w-3 h-3" />
                                        راجعه: {article.reviewedBy}
                                    </p>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Table of Contents */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 mb-10">
                        <h2 className="font-bold text-gray-900 mb-4">محتويات المقال</h2>
                        <ul className="space-y-2">
                            {article.sections.map((section, idx) => (
                                <li key={idx}>
                                    <a href={`#section-${idx}`} className="text-sky-600 hover:underline text-sm flex items-center gap-2">
                                        <span className="w-5 h-5 bg-sky-100 rounded-full flex items-center justify-center text-xs font-bold text-sky-700">{idx + 1}</span>
                                        {section.heading}
                                    </a>
                                </li>
                            ))}
                            {article.faq.length > 0 && (
                                <li>
                                    <a href="#faq" className="text-sky-600 hover:underline text-sm flex items-center gap-2">
                                        <span className="w-5 h-5 bg-sky-100 rounded-full flex items-center justify-center text-xs font-bold text-sky-700">?</span>
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
                            <div className="prose prose-lg prose-sky max-w-none">
                                <BlogContent content={unlinkUnpublished(section.content)} />
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
                                        <div className="text-gray-600"><BlogContent content={unlinkUnpublished(faq.answer)} /></div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Pricing disclaimer — shown only when the body quotes figures */}
                    {article.sections.some(s => s.content.includes('ريال')) && (
                        <div className="bg-amber-50 border-r-4 border-amber-400 rounded-lg p-4 mb-10">
                            <p className="text-amber-900 text-sm leading-relaxed">
                                <strong>عن الأسعار:</strong> الأرقام الواردة نطاقات تقديرية إرشادية تعكس متوسطات السوق
                                وقت آخر تحديث، وتختلف حسب حالة الموقع وحجم العمل وموسم الطلب. اطلب عرض سعر مكتوباً
                                قبل التعاقد، ولا تعتمد على هذه النطاقات كسعر نهائي.
                            </p>
                        </div>
                    )}

                    {/* Sources */}
                    {article.sources && article.sources.length > 0 && (
                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-10">
                            <h3 className="font-bold text-gray-900 text-sm mb-3 flex items-center gap-2">
                                <BookOpen className="w-4 h-4 text-gray-500" />
                                المصادر والمراجع
                            </h3>
                            <ul className="space-y-1.5">
                                {article.sources.map((source, idx) => (
                                    <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                                        <span className="text-gray-400 mt-0.5">{idx + 1}.</span>
                                        {source}
                                    </li>
                                ))}
                            </ul>
                        </div>
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
                        <div className="bg-gradient-to-bl from-sky-50 to-sky-100 rounded-xl p-6 border border-sky-200 mb-10">
                            <h3 className="font-bold text-sky-900 mb-4">ابحث عن أفضل الشركات</h3>
                            <div className="flex flex-wrap gap-2">
                                {article.relatedServices.filter(s => !isAbsorbedSlug(s)).map(serviceSlug => {
                                    const service = getServiceBySlug(serviceSlug);
                                    return service ? (
                                        <Link
                                            key={serviceSlug}
                                            href={`/${serviceSlug}`}
                                            className="px-4 py-2 bg-white text-sky-700 rounded-lg text-sm font-medium hover:bg-sky-50 border border-sky-200 transition-colors"
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
                                        className="bg-white border border-gray-200 rounded-xl p-4 hover:border-sky-300 hover:shadow-md transition-all group"
                                    >
                                        <span className="text-xs text-sky-600 font-medium">{ra.categoryLabel}</span>
                                        <h3 className="font-bold text-gray-900 mt-1 text-sm group-hover:text-sky-700 transition-colors line-clamp-2">{ra.title}</h3>
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
                    <Link href="/blog" className="inline-flex items-center gap-2 text-sky-600 font-medium hover:underline">
                        <ArrowLeft className="w-4 h-4" />
                        العودة للمدونة
                    </Link>
                </article>

                <Footer />
            </main>
        </>
    );
}
