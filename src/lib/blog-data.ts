export interface BlogArticle {
    slug: string;
    title: string;
    metaTitle: string;
    metaDescription: string;
    excerpt: string;
    category: 'moving' | 'cleaning' | 'pest-control' | 'leak-detection' | 'insulation' | 'sewage' | 'general';
    categoryLabel: string;
    publishDate: string;
    updateDate: string;
    readTime: number;
    tags: string[];
    relatedServices: string[];
    author: string;
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
    { slug: 'cleaning', label: 'تنظيف', color: 'emerald' },
    { slug: 'pest-control', label: 'مكافحة حشرات', color: 'red' },
    { slug: 'leak-detection', label: 'كشف تسربات', color: 'cyan' },
    { slug: 'insulation', label: 'عزل', color: 'amber' },
    { slug: 'sewage', label: 'صرف صحي', color: 'purple' },
    { slug: 'general', label: 'عام', color: 'gray' },
];

// Per-category article imports
import { BLOG_ARTICLES_MOVING } from './blog/moving';
import { BLOG_ARTICLES_CLEANING } from './blog/cleaning';
import { BLOG_ARTICLES_PEST_CONTROL } from './blog/pest-control';
import { BLOG_ARTICLES_LEAK_DETECTION } from './blog/leak-detection';
import { BLOG_ARTICLES_INSULATION } from './blog/insulation';
import { BLOG_ARTICLES_SEWAGE } from './blog/sewage';
import { BLOG_ARTICLES_GENERAL } from './blog/general';

// Aggregated blog articles
export const BLOG_ARTICLES: BlogArticle[] = [
    ...BLOG_ARTICLES_MOVING,
    ...BLOG_ARTICLES_CLEANING,
    ...BLOG_ARTICLES_PEST_CONTROL,
    ...BLOG_ARTICLES_LEAK_DETECTION,
    ...BLOG_ARTICLES_INSULATION,
    ...BLOG_ARTICLES_SEWAGE,
    ...BLOG_ARTICLES_GENERAL,
];
