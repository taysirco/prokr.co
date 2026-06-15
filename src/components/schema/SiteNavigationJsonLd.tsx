import { safeJsonLd } from '@/lib/json-ld';
// ============================================
// SITE NAVIGATION ELEMENT SCHEMA
// Controls Google Sitelinks + SERP navigation display
// §4.1 Master Blueprint — Sitelinks Optimization
// ============================================
export function SiteNavigationJsonLd() {
    const navItems = [
        { name: 'نقل عفش', url: 'https://prokr.co/furniture-moving' },
        { name: 'تنظيف منازل', url: 'https://prokr.co/cleaning' },
        { name: 'مكافحة حشرات', url: 'https://prokr.co/pest-control' },
        { name: 'كشف تسربات', url: 'https://prokr.co/leak-detection' },
        { name: 'الرياض', url: 'https://prokr.co/riyadh' },
        { name: 'جدة', url: 'https://prokr.co/jeddah' },
        { name: 'الدمام', url: 'https://prokr.co/dammam' },
        { name: 'المدونة', url: 'https://prokr.co/blog' },
        { name: 'من نحن', url: 'https://prokr.co/about-us' },
        { name: 'سجل شركتك', url: 'https://prokr.co/advertise' },
    ];

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'SiteNavigationElement',
        name: 'القائمة الرئيسية لبروكر',
        url: 'https://prokr.co',
        hasPart: navItems.map(item => ({
            '@type': 'WebPage',
            name: item.name,
            url: item.url,
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
        />
    );
}
