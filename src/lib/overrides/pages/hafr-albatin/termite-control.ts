import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'مكافحة النمل الأبيض بحفر الباطن — تربة رملية سهلة + 10-15% يُبطئ + -2°م يُعمّق + Deathstalker (2026)',
        description: 'مكافحة نمل أبيض حفر الباطن. تربة رملية سهلة الحفر. 10-15% يُبطئ (ميزة نسبية!). -2°م يدفع للعمق. عقارب+نمل = مُركّب. Bait + Barrier + مراقبة.',
        h1: 'مكافحة النمل الأبيض بحفر الباطن — تربة رملية تسهّل والبرد يُعمّق',
        keywords: ['مكافحة النمل الأبيض حفر الباطن', 'مكافحة نمل حفر الباطن', 'شركة مكافحة نمل حفر الباطن'],
    },
    content: {
        introduction: 'النمل الأبيض في حفر الباطن يتأثر بـ 4 عوامل قارية. الأول — تربة رملية سهلة: رمل ناعم = حفر سهل. مستعمرات تصل الأساس أسرع. الثاني — 10-15% يُبطئ (ميزة نسبية!): أجف = نمل أبيض يحتاج مصدر رطوبة (تسريب/أنبوب). لا رطوبة حرة = يُبطئ التوسع (ميزة!). لكن: تسريب = فرصة. الثالث — -2°م يُعمّق: البرد يدفع المستعمرة للعمق ← أصعب اكتشاف ← أصعب مكافحة. فحص حراري. الرابع — Deathstalker+نمل = مُركّب: حفر تربة ← ينكشف عقارب + نمل. مكافحة مُركّبة.',
        shortAnswer: 'على عكس [رش سطحي] الذي لا يصل العمق و-2°م، يعتمد بروتوكولنا في خدمة [مكافحة النمل الأبيض] بمدينة [حفر الباطن] على [Bait + Barrier + فحص حراري + مكافحة مُركّبة]. ففي ظل [تربة رملية + 10-15% + -2°م + عقارب]، تتفاقم ظاهرة [حفر سهل + تعمّق + مُركّب]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول قاري مُتكامل].',
        heroSubtitle: 'تربة رملية + 10-15% بطيء + -2°م عميق + Deathstalker مُركّب',
    },
    pricing: [
        { type: 'فحص + تقييم', unit: 'زيارة', minPrice: 120, maxPrice: 250, time: '1-2 ساعة' },
        { type: 'Bait System', unit: 'منزل', minPrice: 680, maxPrice: 1750, time: 'تركيب + مراقبة' },
        { type: 'Barrier', unit: 'فيلا', minPrice: 1300, maxPrice: 3500, time: '1-2 يوم' },
        { type: 'عقد سنوي (مُركّب: نمل+عقارب+حشرات)', unit: 'سنة', minPrice: 850, maxPrice: 2100, time: '6 زيارات' },
    ],
    faq: [
        { question: '10-15% — يُبطئ حقاً؟', answer: 'نسبياً — النمل يحتاج رطوبة. 10-15% = لا رطوبة حرة = يبحث عن مصادر (تسريب/أنبوب). أبطأ من الشرقية 85-95%. لكن: يوجد.' },
        { question: '-2°م — يتعمّق؟', answer: 'نعم — يهرب من البرد ← يحفر أعمق (1-2 م بدلاً من 30-50 سم). أصعب اكتشاف. فحص حراري (Thermal Camera).' },
        { question: 'مُركّب — عقارب+نمل؟', answer: 'حفر لمكافحة نمل ← ينكشف عقارب Deathstalker. نحتاج مكافحة مُركّبة. فريق مُدرّب على الحالتين.' },
        { question: 'Barrier تتحلل أسرع؟', answer: '52°م = Barrier يتبخر أسرع (مثل المبيدات). Microencapsulation يُطيل. فحص سنوي.' },
        { question: 'Bait — أبطأ في الجفاف؟', answer: 'Bait يحتاج رطوبة ← 10-15% = أبطأ تفاعل. لكن: يعمل. سقي محطات Bait.' },
    ],
    expertTips: [
        'إصلاح تسريبات أولاً — المصدر الوحيد في 10-15%.',
        'فحص حراري شتاءً — -2°م يدفع للعمق.',
        'مكافحة مُركّبة — نمل+عقارب. فريق مُدرّب.',
        'Barrier Microencapsulation — 52°م يتبخر.',
        'سقي محطات Bait — 10-15% = جفاف.',
    ],
    warnings: [
        'تربة رملية = مستعمرة تصل أسرع. مراقبة مبكرة.',
        '-2°م = مستعمرة عميقة = أصعب وصول. فحص حراري.',
        'تسريب + تربة رملية = فرصة مثالية لنمل أبيض.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص مكافحة آفات' },
        { ...GOV.WEQAA, role: 'تسجيل مبيدات' },
        { entity: AMANA.HAFR.entity, url: AMANA.HAFR.url, role: 'صحة عامة بحفر الباطن' },
    ],
    expertReviewer: EXPERTS.ALJUND,
    expertCitations: [
        { expert: EXPERTS.ALKHODAIRY.name, quote: 'نمل أبيض حفر الباطن: تربة رملية + 10-15% بطيء (ميزة!) + -2°م عميق. مُركّب مع عقارب. Bait + Barrier + حراري.', source: 'أبحاث حشرات — نمل التربة القارية' },
    ],
    saudiRegulations: [REGULATIONS.GHAD_SYSTEM],
    verificationBadges: [
        { badge: '✔️ مكافحة مرخصة', authority: 'بلدي + وقاء', icon: 'shield-check' },
        { badge: '✔️ مبيدات مُسجّلة', authority: 'نظام غاد', icon: 'badge-check' },
    ],
    equipment: [
        { name: 'Bait System', use: 'Cascading Kill — مع سقي 10-15%' },
        { name: 'Barrier Microencapsulation', use: 'يقاوم 52°م تبخر' },
        { name: 'Thermal Camera', use: '-2°م مستعمرة عميقة' },
    ],
    hiddenObjections: [
        { fear: 'جاف = ما فيه.', solution: '10-15% = أبطأ. ليس = لا يوجد. تسريب = فرصة.' },
        { fear: 'رش.', solution: 'سطحي ≠ عميق. -2°م = أعمق.' },
    ],
    counterNarratives: [
        { myth: 'جاف = آمن.', truth: 'أبطأ ≠ آمن. تسريب = يكفي.' },
        { myth: 'مثل الرياض.', truth: 'ΔT 54°م. -2°م. عقارب مُركّب.' },
        { myth: 'مرة.', truth: 'تربة رملية = مستعمرات جديدة. مراقبة.' },
    ],
    relatedServices: [
        { slug: 'pest-control', context: 'حشرات — Deathstalker', priority: 1 },
        { slug: 'bedbugs-control', context: 'بق', priority: 2 },
        { slug: 'furniture-cleaning', context: 'أثاث — خشب', priority: 3 },
        { slug: 'villas-cleaning', context: 'فلل', priority: 4 },
        { slug: 'cleaning', context: 'تنظيف', priority: 5 },
        { slug: 'furniture-storage', context: 'تخزين', priority: 6 },
        { slug: 'steam-cleaning', context: 'بخار', priority: 7 },
    ],
};
