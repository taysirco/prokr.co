export interface BlogArticle {
    slug: string;
    title: string;
    metaTitle: string;
    metaDescription: string;
    excerpt: string;
    category: 'moving' | 'cleaning' | 'pest-control' | 'leak-detection' | 'insulation' | 'sewage' | 'general' | 'consumer-protection' | 'government-guides' | 'new-home';
    categoryLabel: string;
    publishDate: string;
    updateDate: string;
    readTime: number;
    tags: string[];
    relatedServices: string[];
    author: string;
    authorBio?: string;
    reviewedBy?: string;
    sources?: string[];
    lastFactChecked?: string;
    sections: { heading: string; content: string }[];
    faq: { question: string; answer: string }[];
    howToSteps?: { name: string; text: string }[];
    /** Hero image path under /public (e.g. /images/blog/jeddah/....jpg) */
    image?: string;
    /** Descriptive Arabic alt text for the hero image */
    imageAlt?: string;
    /** City slug this article is geo-targeted to (GEO / local SEO) */
    citySlug?: string;
    /** Arabic city name used in on-page geo signals */
    cityName?: string;
    /** The single head keyword the article targets */
    primaryKeyword?: string;
    /** Long-tail variants targeted inside the body (semantic SEO) */
    longTailKeywords?: string[];
    /** 40–60 word extractable answer for AEO / AI Overviews / voice search */
    directAnswer?: string;
    /** Scheduled publish time in Asia/Riyadh, "HH:MM" — combined with publishDate */
    publishTime?: string;
}

export function getBlogArticle(slug: string): BlogArticle | undefined {
    return BLOG_ARTICLES.find(a => a.slug === slug);
}

export function getBlogArticlesByCategory(category: string): BlogArticle[] {
    return BLOG_ARTICLES.filter(a => a.category === category);
}

// ────────────────────────────────────────────────
// Scheduled publishing (Asia/Riyadh, UTC+3)
// Articles carry a date + a randomised time of day; anything whose
// timestamp is still in the future is hidden from the index, the
// sitemap and the related-article rails until it is due.
// ────────────────────────────────────────────────

/** Absolute publish timestamp (ms) for an article, in Asia/Riyadh time. */
export function getPublishTimestamp(article: BlogArticle): number {
    const time = article.publishTime ?? '09:00';
    // Riyadh is UTC+3 year-round (no DST) → append the fixed offset.
    return new Date(`${article.publishDate}T${time}:00+03:00`).getTime();
}

/** Has this article's scheduled slot already passed? */
export function isArticlePublished(article: BlogArticle, now: number = Date.now()): boolean {
    return getPublishTimestamp(article) <= now;
}

/** Every article that is live right now, newest first. */
export function getPublishedArticles(now: number = Date.now()): BlogArticle[] {
    return BLOG_ARTICLES
        .filter(a => isArticlePublished(a, now))
        .sort((a, b) => getPublishTimestamp(b) - getPublishTimestamp(a));
}

/** Live articles in a category, newest first. */
export function getPublishedArticlesByCategory(category: string, now: number = Date.now()): BlogArticle[] {
    return getPublishedArticles(now).filter(a => a.category === category);
}

/** Live articles geo-targeted to a city (e.g. 'jeddah'), newest first. */
export function getPublishedArticlesByCity(citySlug: string, now: number = Date.now()): BlogArticle[] {
    return getPublishedArticles(now).filter(a => a.citySlug === citySlug);
}

/**
 * Strip markdown links that point at an article whose slot has not arrived.
 * Without this, a post published today links to one scheduled weeks out and
 * the reader (and crawler) hits a 404 until that date. The anchor text stays,
 * so the sentence still reads correctly — only the link is dropped.
 */
export function unlinkUnpublished(content: string, now: number = Date.now()): string {
    return content.replace(/\[([^\]]+)\]\((\/blog\/[^)\s]+)\)/g, (whole, label: string, href: string) => {
        const slug = href.replace('/blog/', '').replace(/[#?].*$/, '');
        const target = BLOG_ARTICLES.find(a => a.slug === slug);
        // Unknown slug or not yet live → render as plain text.
        if (!target || !isArticlePublished(target, now)) return label;
        return whole;
    });
}

/**
 * Articles to surface on a city+service silo page — the reverse of the
 * in-article links, so the topical cluster is connected both ways.
 * Priority: same city + same service → same city + same category →
 * same service anywhere → same category anywhere.
 */
export function getArticlesForCityService(
    citySlug: string,
    serviceSlug: string,
    limit = 3,
    now: number = Date.now(),
): BlogArticle[] {
    const live = getPublishedArticles(now);
    const servesThis = (a: BlogArticle) => a.relatedServices.includes(serviceSlug);
    // Map a service slug to the blog category it belongs to, when possible.
    const category = live.find(servesThis)?.category;

    // Earlier position in relatedServices means the article is more about
    // that service, so it outranks a merely adjacent guide.
    const byRelevance = (a: BlogArticle, b: BlogArticle) =>
        a.relatedServices.indexOf(serviceSlug) - b.relatedServices.indexOf(serviceSlug);

    const inCity = live.filter(a => a.citySlug === citySlug);
    // For other cities, generic (city-less) guides read better than a guide
    // whose title names a different city.
    const generic = live.filter(a => !a.citySlug);

    const ranked = [
        ...inCity.filter(servesThis).sort(byRelevance),
        ...inCity.filter(a => category && a.category === category),
        ...generic.filter(servesThis).sort(byRelevance),
        ...(category ? generic.filter(a => a.category === category) : []),
        ...live.filter(servesThis).sort(byRelevance),
        ...(category ? live.filter(a => a.category === category) : []),
    ];

    const seen = new Set<string>();
    return ranked.filter(a => !seen.has(a.slug) && seen.add(a.slug)).slice(0, limit);
}

export const BLOG_CATEGORIES = [
    { slug: 'moving', label: 'نقل عفش', color: 'blue' },
    { slug: 'cleaning', label: 'تنظيف', color: 'sky' },
    { slug: 'pest-control', label: 'مكافحة حشرات', color: 'red' },
    { slug: 'leak-detection', label: 'كشف تسربات', color: 'cyan' },
    { slug: 'insulation', label: 'عزل', color: 'amber' },
    { slug: 'sewage', label: 'صرف صحي', color: 'purple' },
    { slug: 'general', label: 'عام', color: 'gray' },
    { slug: 'consumer-protection', label: 'حماية المستهلك', color: 'rose' },
    { slug: 'government-guides', label: 'أدلة الانتقال', color: 'emerald' },
    { slug: 'new-home', label: 'تجهيز البيت الجديد', color: 'teal' },
];

// Per-category article imports
import { BLOG_ARTICLES_MOVING } from './blog/moving';
import { BLOG_ARTICLES_CLEANING } from './blog/cleaning';
import { BLOG_ARTICLES_PEST_CONTROL } from './blog/pest-control';
import { BLOG_ARTICLES_LEAK_DETECTION } from './blog/leak-detection';
import { BLOG_ARTICLES_INSULATION } from './blog/insulation';
import { BLOG_ARTICLES_SEWAGE } from './blog/sewage';
import { BLOG_ARTICLES_GENERAL } from './blog/general';
import { BLOG_ARTICLES_CONSUMER_PROTECTION } from './blog/consumer-protection';
import { BLOG_ARTICLES_GOVERNMENT_GUIDES } from './blog/government-guides';
import { BLOG_ARTICLES_NEW_HOME } from './blog/new-home-guides';
import { BLOG_ARTICLES_SMART_GUIDES } from './blog/smart-guides';
import { BLOG_ARTICLES_CLEANING_MISTAKES } from './blog/cleaning-mistakes';
import { BLOG_ARTICLES_DIY_VS_PRO } from './blog/diy-vs-pro';
import { BLOG_ARTICLES_AC_MAINTENANCE } from './blog/ac-maintenance-guide';
import { BLOG_ARTICLES_SUMMER_ENERGY } from './blog/summer-energy-savings';
import { BLOG_ARTICLES_JEDDAH } from './blog/jeddah';

// Aggregated blog articles
export const BLOG_ARTICLES: BlogArticle[] = [
    ...BLOG_ARTICLES_MOVING,
    ...BLOG_ARTICLES_CLEANING,
    ...BLOG_ARTICLES_PEST_CONTROL,
    ...BLOG_ARTICLES_LEAK_DETECTION,
    ...BLOG_ARTICLES_INSULATION,
    ...BLOG_ARTICLES_SEWAGE,
    ...BLOG_ARTICLES_GENERAL,
    ...BLOG_ARTICLES_CONSUMER_PROTECTION,
    ...BLOG_ARTICLES_GOVERNMENT_GUIDES,
    ...BLOG_ARTICLES_NEW_HOME,
    ...BLOG_ARTICLES_SMART_GUIDES,
    ...BLOG_ARTICLES_CLEANING_MISTAKES,
    ...BLOG_ARTICLES_DIY_VS_PRO,
    ...BLOG_ARTICLES_AC_MAINTENANCE,
    ...BLOG_ARTICLES_SUMMER_ENERGY,
    ...BLOG_ARTICLES_JEDDAH,
];
