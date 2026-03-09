import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف أثاث بالجبيل — NaCl+VOC مفصلات Galvanic + 85-98% عفن داخلي + PVAc مزدوج (2026)',
        description: 'تنظيف أثاث الجبيل. NaCl+VOC مفصلات Galvanic 2×. 85-98% عفن داخلي. PVAc يمتص 98%. سخام أسطح. Marine+Anti-Fungal+Dehumidifier.',
        h1: 'تنظيف أثاث بالجبيل — ملح يُصدئ وبتروكيماويات تُتلف وعفن يغزو',
        keywords: ['تنظيف أثاث الجبيل', 'تنظيف عفش بالجبيل', 'شركة تنظيف أثاث بالجبيل'],
    },
    content: {
        introduction: 'الأثاث في الجبيل يتعرض لأقسى تلف في المملكة. الأول — NaCl+VOC مفصلات Galvanic: ملح+VOC = أسرع صدأ مفصلات. 2× من الخبر. Anti-Corrosion Marine. الثاني — 85-98% عفن داخلي: خلف الأثاث + داخل الأدراج = عفن أسبوع. أقصى في المملكة. Anti-Fungal شامل. الثالث — PVAc مزدوج: PVAc يمتص 98% = يلين + NaCl يُضعف = مفاصل تنفك أسرع. الرابع — سخام: طبقة سوداء على أسطح. Enzymatic.',
        shortAnswer: 'على عكس [ملمّع] الذي لا يحمي من NaCl+VOC ولا يُعالج 98% عفن، يعتمد بروتوكولنا في خدمة [تنظيف الأثاث] بمدينة [الجبيل] على [Marine Anti-Corrosion + Anti-Fungal + Dehumidifier]. ففي ظل [NaCl+VOC + 85-98% + PVAc + سخام]، تتفاقم ظاهرة [Galvanic + عفن + تفكك]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول أثاث صناعي-ساحلي].',
        heroSubtitle: 'NaCl+VOC Galvanic 2× + 98% عفن + PVAc مزدوج + سخام',
    },
    pricing: [
        { type: 'غرفة — صناعي-ساحلي', unit: 'غرفة', minPrice: 160, maxPrice: 310, time: '2-3 ساعات' },
        { type: '+ Anti-Corrosion + Anti-Fungal', unit: 'غرفة', minPrice: 200, maxPrice: 400, time: '3-4 ساعات' },
        { type: 'بيت كامل', unit: 'بيت', minPrice: 420, maxPrice: 940, time: '5-8 ساعات' },
        { type: 'ربع سنوي', unit: 'سنة', minPrice: 480, maxPrice: 960, time: '4 زيارات' },
    ],
    faq: [
        { question: 'Galvanic 2× — أسوأ من الخبر؟', answer: 'VOC يُسرّع Galvanic. NaCl+VOC = 2×. مفصلات تصدأ أسرع. Marine Anti-Corrosion كل 3 أشهر.' },
        { question: 'عفن داخلي — خلف الأثاث؟', answer: '98% = عفن خلف الأثاث + داخل الأدراج أسبوع. إبعاد 5-10 سم عن الجدار + Anti-Fungal + Dehumidifier.' },
        { question: 'PVAc — 98% أسوأ؟', answer: 'الأسوأ في المملكة. PVAc يمتص 98% = يلين أقصى. + NaCl يُضعف = تفكك أسرع.' },
        { question: 'سخام — على الأثاث؟', answer: 'SABIC سخام يدخل = طبقة سوداء دهنية. Enzymatic يُكسر. منديل = يطبّخ.' },
        { question: 'ربع سنوي — ليش؟', answer: 'NaCl+VOC + عفن أسبوعي + PVAc. ربع سنوي = الحد الأدنى.' },
    ],
    expertTips: [
        'Marine Anti-Corrosion كل 3 أشهر — Galvanic 2×.',
        'إبعاد أثاث 5-10 سم — 98% عفن خلف.',
        'Dehumidifier 24/7 — PVAc يمتص 98%.',
        'Enzymatic لسخام — لا منديل.',
        'Anti-Fungal داخل أدراج — 98% يدخل.',
    ],
    warnings: [
        'NaCl+VOC + مفصلات = صدأ Galvanic 3-6 أشهر.',
        '98% + خلف أثاث = عفن أسبوع = حساسية + تلف جدار.',
        'PVAc + 98% + NaCl = مفاصل تنفك 1 سنة.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص التنظيف' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات النظافة بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'أثاث الجبيل: NaCl+VOC Galvanic 2× + 98% عفن + PVAc مزدوج. أقسى بيئة أثاث في المملكة. Marine+Anti-Fungal+Dehumidifier.', source: 'نصائح هندسية — أثاث البيئة الصناعية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [{ badge: '✔️ تنظيف أثاث مرخص', authority: 'منصة بلدي', icon: 'shield-check' }],
    equipment: [
        { name: 'Marine Anti-Corrosion', use: 'NaCl+VOC Galvanic — مفصلات' },
        { name: 'Anti-Fungal Industrial', use: '98% — عفن داخلي' },
        { name: 'Dehumidifier', use: 'PVAc — يمنع امتصاص' },
        { name: 'Enzymatic', use: 'سخام SABIC' },
    ],
    hiddenObjections: [
        { fear: 'مثل الخبر.', solution: 'VOC Galvanic 2× + 98% > 95% + سخام. أقسى.' },
        { fear: 'ملمّع.', solution: 'لا يحمي من NaCl+VOC ولا عفن 98%. سطحي.' },
    ],
    counterNarratives: [
        { myth: 'ساحلي فقط.', truth: 'VOC = صناعي. NaCl+VOC = Galvanic 2×.' },
        { myth: 'نصف سنوي.', truth: 'عفن أسبوعي + Galvanic. ربع سنوي.' },
        { myth: 'بدون Dehumidifier.', truth: '98% = PVAc يمتص = تفكك.' },
    ],
    relatedServices: [
        { slug: 'furniture-moving', context: 'نقل — حماية', priority: 1 },
        { slug: 'furniture-storage', context: 'تخزين — 98%', priority: 2 },
        { slug: 'sofa-cleaning', context: 'كنب — NaCl+VOC', priority: 3 },
        { slug: 'cleaning', context: 'تنظيف', priority: 4 },
        { slug: 'carpet-cleaning', context: 'سجاد', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف', priority: 7 },
    ],
};
