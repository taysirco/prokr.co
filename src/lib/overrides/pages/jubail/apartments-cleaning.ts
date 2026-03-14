import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف شقق بالجبيل — NaCl+VOC ترسبات + 85-98% عفن أقصى + SABIC PM2.5 (2026)',
        description: 'تنظيف شقق الجبيل. NaCl+VOC ترسبات مُركّبة. 85-98% عفن أسبوع. SABIC PM2.5. تكثّف أقصى. Marine Degreaser + Anti-Fungal + HEPA AC.',
        h1: 'تنظيف شقق بالجبيل — ملح+بتروكيماويات وعفن أقصى وPM2.5 صناعي',
        keywords: ['تنظيف شقق الجبيل', 'تنظيف شقة بالجبيل', 'شركة تنظيف شقق بالجبيل'],
    },
    content: {
        introduction: 'الشقة في الجبيل تتعرض لتلويث ثلاثي فريد. الأول — NaCl+VOC: رذاذ ملحي من الخليج + أبخرة بتروكيماوية من SABIC = ترسبات مُركّبة (ملح+دهن كيميائي) على كل سطح. منظف عادي لا يُزيلها. Marine Degreaser. الثاني — 85-98% عفن أقصى: أعلى رطوبة في المملكة = عفن خلال أسبوع على أي سطح رطب. حمامات + مطابخ + خلف أثاث + خزائن = بؤر. Anti-Fungal كل زيارة. الثالث — SABIC PM2.5: جزيئات بتروكيماوية تدخل من النوافذ + المكيف. HEPA Activated Carbon في غرف النوم. التكثّف: 98% = نقطة ندى أقصى = ماء على زجاج + جدران + سقف = أقصى تلف.',
        shortAnswer: 'على عكس [تنظيف عادي] الذي لا يُراعي VOC+NaCl، يعتمد بروتوكولنا في خدمة [تنظيف الشقق] بمدينة [الجبيل] على [Marine Degreaser + Anti-Fungal + HEPA AC + تجفيف]. ففي ظل [NaCl+VOC + 85-98% + PM2.5]، تتفاقم ظاهرة [ترسبات + عفن + تنفسي]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول شقة صناعية-ساحلية].',
        heroSubtitle: 'NaCl+VOC ترسبات + 85-98% عفن أقصى + SABIC PM2.5',
    },
    pricing: [
        { type: 'شقة — بروتوكول صناعي-ساحلي', unit: 'شقة', minPrice: 200, maxPrice: 400, time: '3-5 ساعات' },
        { type: 'عميق (Anti-Fungal + Degreaser)', unit: 'شقة', minPrice: 280, maxPrice: 530, time: '4-6 ساعات' },
        { type: 'بعد إجازة (عفن 98%)', unit: 'شقة', minPrice: 310, maxPrice: 600, time: '5-8 ساعات' },
        { type: 'عقد أسبوعي', unit: 'شهر', minPrice: 340, maxPrice: 680, time: '4 زيارات' },
    ],
    faq: [
        { question: 'VOC — يترسب على الأسطح؟', answer: 'نعم — طبقة دهنية كيميائية. + NaCl = مُركّبة. منظف عادي = ينزلق. Marine Degreaser = يُكسر الطبقة.' },
        { question: '85-98% — أعلى من الخبر؟', answer: 'الخبر 85-95%. الجبيل 85-98% (قرب أحواض SABIC). فرق 3-5% = عفن أسرع + تكثّف أقصى.' },
        { question: 'بعد إجازة — ليش أسوأ؟', answer: '98% + سقة مُغلقة + مكيف مُطفأ = عفن على كل سطح 7-14 يوم. إعادة = Anti-Fungal شامل.' },
        { question: 'PM2.5 — في الشقة؟', answer: 'SABIC PM2.5 يدخل من نوافذ + مكيف + ثغرات. HEPA AC في غرف النوم = حماية 8 ساعات.' },
        { question: 'أسبوعي — ليش؟', answer: 'NaCl+VOC يومي + 85-98% عفن أسبوعي + PM2.5. أسبوعي = يمنع التراكم.' },
    ],
    expertTips: [
        'Marine Degreaser — يُكسر NaCl+VOC المُركّبة.',
        'Anti-Fungal كل زيارة — 98% = أسبوع عفن.',
        'HEPA Activated Carbon غرف نوم — PM2.5.',
        'تجفيف قبل إقفال — 98% = تكثّف = عفن.',
        'فتحات تهوية مُفلترة — PM2.5 + NaCl.',
    ],
    warnings: [
        'NaCl+VOC بدون Degreaser = تراكم لا يُزال 3-6 أشهر.',
        '98% + إجازة = عفن شامل 7-14 يوم.',
        'PM2.5 × 8 ساعات نوم = خطر تنفسي. HEPA AC.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص التنظيف' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات النظافة بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'شقة الجبيل: NaCl+VOC مُركّبة + 85-98% أقصى + SABIC PM2.5. ثلاثي صناعي-ساحلي فريد. Marine Degreaser + Anti-Fungal + HEPA AC.', source: 'جغرافيا المناخ — تنظيف البيئة الصناعية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Marine Degreaser', use: 'NaCl+VOC — يُكسر المُركّبة' },
        { name: 'Anti-Fungal Industrial', use: '85-98% — عفن أقصى' },
        { name: 'HEPA Activated Carbon', use: 'PM2.5 + VOC — غرف نوم' },
        { name: 'Dehumidifier 50%', use: 'تكثّف — يمنع عفن' },
    ],
    commonConcerns: [
        { concern: 'مثل الخبر.', solution: 'VOC إضافي + 98% > 95% + PM2.5 صناعي. مختلف.' },
        { concern: 'منظف عادي.', solution: 'NaCl+VOC = مُركّبة. عادي = ينزلق. Degreaser.' },
    ],
    consumerEducation: [
        { myth: 'ساحلي فقط.', truth: 'ساحلي + صناعي = VOC + NaCl + PM2.5. ثلاثي.' },
        { myth: 'شهري.', truth: '98% = عفن أسبوعي. أسبوعي.' },
        { myth: 'HEPA عادي.', truth: 'لا يحجز VOC. Activated Carbon.' },
    ],
    relatedServices: [
        { slug: 'cleaning', context: 'تنظيف — NaCl+VOC', priority: 1 },
        { slug: 'carpet-cleaning', context: 'سجاد — عفن', priority: 2 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — VOC', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار — تعقيم', priority: 4 },
        { slug: 'pest-control', context: 'حشرات — بعوض', priority: 5 },
        { slug: 'marble-polishing', context: 'رخام — NaCl', priority: 6 },
        { slug: 'villas-cleaning', context: 'فلل', priority: 7 },
    ],
};
