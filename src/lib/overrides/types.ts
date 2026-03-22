// ============================================
// Page Override Types
// Complete per-page control: content, SEO, schema, credentials
// ============================================

/**
 * PageOverride — كل حقل اختياري.
 * أضف فقط ما تريد تخصيصه. الباقي يبقى تلقائي ذكي.
 */
export interface PageOverride {
    // ─── SEO & Metadata ───
    meta?: {
        title?: string;             // <title> tag
        description?: string;       // meta description
        keywords?: string[];        // meta keywords
        h1?: string;                // H1 headline
        ogTitle?: string;           // OpenGraph title
        ogDescription?: string;     // OpenGraph description
        ogImage?: string;           // OpenGraph image URL
    };

    // ─── Content Layers ───
    content?: {
        introduction?: string;          // مقدمة مخصصة بالكامل (500+ حرف مع اقتباس خبير)
        shortAnswer?: string;           // الإجابة المباشرة (Featured Snippet)
        whyUs?: string[];               // نقاط "لماذا نحن"
        localChallenges?: string[];     // تحديات المدينة المحلية
        customSolutions?: string[];     // حلولنا المخصصة
        successStories?: { title: string; result: string }[];
        heroSubtitle?: string;          // نص تحت العنوان الرئيسي في Hero
    };

    // ─── Pricing ───
    pricing?: {
        type: string;
        unit: string;
        minPrice: number;
        maxPrice: number;
        time: string;
    }[];

    // ─── FAQ items ───
    faq?: { question: string; answer: string }[];

    // ─── Expert Tips, Warnings, Checklist ───
    expertTips?: string[];
    warnings?: string[];
    checklist?: string[];
    trustFactors?: string[];

    // ─── Content: Semantic Data Overrides ───
    commonConcerns?: { concern: string; solution: string }[];
    consumerEducation?: { myth: string; truth: string }[];
    equipment?: { name: string; use: string }[];
    govReferences?: string[];

    // ═════════════════════════════════════════
    // SERVICE CREDENTIALS (جديد)
    // ═════════════════════════════════════════

    /**
     * كيانات حكومية موثوقة مرتبطة بهذه الخدمة.
     * تُعرض كروابط خارجية (Outbound Links) وتُدرج في Schema.
     */
    trustAnchors?: {
        entity: string;      // اسم الجهة: "شركة المياه الوطنية"
        acronym?: string;    // اختصار: "NWC"
        url: string;         // الرابط الرسمي
        role: string;        // دورها: "إصدار تقارير معتمدة لتعديل الفاتورة"
    }[];

    /**
     * الخبير الحقيقي الذي "راجع واعتمد" هذا المحتوى.
     * يُعرض في صندوق المراجعة أسفل المقال + Schema ReviewedBy.
     */
    expertReviewer?: {
        name: string;        // "م. عبدالغني الجند"
        title: string;       // "مؤلف موسوعة أخطاء في البناء"
        credential: string;  // "مهندس مدني معتمد — الهيئة السعودية للمهندسين"
        profileUrl: string;  // "https://x.com/ssrrr22"
    };

    /**
     * اقتباسات من خبراء حقيقيين مُدرجة في المحتوى.
     * تُعرض ككارت اقتباس ومنسوبة للخبير بالاسم والرابط.
     */
    expertCitations?: {
        expert: string;      // "م. عبدالغني الجند"
        quote: string;       // النص المقتبس
        source: string;      // "موسوعة أخطاء في البناء"
        url?: string;        // رابط المصدر
    }[];

    /**
     * أكواد وأنظمة سعودية ذات صلة بهذه الخدمة.
     */
    saudiRegulations?: {
        code: string;        // "SBC 601" أو "نظام غد"
        description: string; // "كود البناء السعودي — متطلبات العزل الحراري"
        url?: string;        // رابط النظام الرسمي
    }[];

    /**
     * شارات التحقق الديناميكية للشركات المدرجة.
     */
    verificationBadges?: {
        badge: string;       // "✔️ شركة معتمدة من المياه الوطنية"
        authority: string;   // "شركة المياه الوطنية (NWC)"
        icon: string;        // "shield-check" | "badge-check" | "certificate"
    }[];

    // ─── Schema Overrides ───
    schema?: {
        disableSchemas?: string[];
        customServiceName?: string;
        customProviderName?: string;
        customAggregateRating?: {
            ratingValue: number;
            reviewCount: number;
        };
    };

    // ─── Visual ───
    visual?: {
        heroImage?: string;
        heroGradient?: string;
    };

    // ─── Related Services ───
    relatedServices?: {
        slug: string;
        context: string;
        priority: number;
    }[];

    // ─── Entity Intersection ───
    /**
     * كيانات علمية + مناخية مدمجة في المحتوى.
     * تُستخدم لبناء Entity Intersection = محتوى فريد لكل مدينة.
     */
    entityContext?: {
        /** أسماء الكيانات العلمية المُستخدمة في هذه الصفحة */
        sectorEntities?: string[];
        /** التحديات المناخية الخاصة بالمدينة لهذا القطاع */
        climateChallenges?: string[];
        /** فقرة Entity Intersection جاهزة — تقاطع القطاع × المناخ */
        intersectionParagraph?: string;

        // ─── Content Signals ───
        /** مصطلحات دارجة من العميل */
        slangTerms?: string[];
        /** أفعال نشطة لتحسين النص */
        activeVerbs?: string[];
        /** ممارسات خاطئة شائعة للتحذير منها */
        wrongPractices?: { name: string; use: string }[];
        /** قالب المحتوى المخصص لهذه المدينة والخدمة */
        contentTemplate?: string;
    };
}

/**
 * Override key format: "citySlug-serviceSlug"
 * Example: "jeddah-furniture-moving"
 */
export type OverrideKey = string;

/**
 * Helper: Generate override key from city+service slugs
 */
export function makeOverrideKey(citySlug: string, serviceSlug: string): OverrideKey {
    return `${citySlug}-${serviceSlug}`;
}
