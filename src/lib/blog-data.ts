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
}

export function getBlogArticle(slug: string): BlogArticle | undefined {
    return BLOG_ARTICLES.find(a => a.slug === slug);
}

export function getBlogArticlesByCategory(category: string): BlogArticle[] {
    return BLOG_ARTICLES.filter(a => a.category === category);
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
];
