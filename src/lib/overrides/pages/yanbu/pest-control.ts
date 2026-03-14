import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'مكافحة حشرات بينبع — 70-85% بعوض+صراصير+NaCl+SOx+ميناء — IGR+BTI! (2026)',
        description: 'مكافحة حشرات ينبع. 70-85% بعوض تكاثر+صراصير عفن! NaCl+SOx. ميناء PM2.5. IGR+BTI+رش مُركّز.',
        h1: 'مكافحة حشرات بينبع — بعوض+صراصير+عفن!',
        keywords: ['مكافحة حشرات ينبع', 'مكافحة حشرات بينبع', 'شركة مكافحة حشرات ينبع'],
    },
    content: {
        introduction: 'حشرات ينبع = رطوبة+ميناء+صناعي! 70-85% بعوض: رطوبة بحرية = بعوض Aedes aegypti يتكاثر في أي ركود مياه! BTI (Bacillus thuringiensis) بيولوجي آمن. 70-85% صراصير: رطوبة = صراصير ألمانية أسرع تكاثراً + تتغذى على عفن. IGR (Insect Growth Regulator) + Gel Bait. ميناء: سفن تنقل حشرات غريبة. PM2.5 + حشرات. NaCl: ملح لا يقتل حشرات. SOx: YASREF لا يأثر مباشرة. التحدي: رطوبة × حرارة = تكاثر مضاعف. بريدة: جافة 10-20% = لا بعوض! ينبع: بعوض+صراصير+ميناء = أعقد.',
        shortAnswer: 'على عكس [الرش السطحي]، يعتمد بروتوكولنا في خدمة [مكافحة الحشرات] بمدينة [ينبع] على [IGR+BTI+Gel Bait+رش مُركّز]. ففي ظل [70-85% بعوض+صراصير+ميناء+حرارة]، تتفاقم ظاهرة [تكاثر مضاعف+أنواع غريبة]. لذا؛ يتدخل فنيونا عبر [IGR ← BTI ← Gel ← رش].',
        heroSubtitle: '70-85% بعوض + صراصير + ميناء — IGR+BTI+Gel!',
    },
    pricing: [
        { type: 'شقة — مكافحة شاملة', unit: 'شقة', minPrice: 120, maxPrice: 250, time: '1-2h' },
        { type: 'فيلا — شاملة + BTI', unit: 'فيلا', minPrice: 250, maxPrice: 520, time: '2-4h' },
        { type: 'مستودع/ميناء', unit: 'م²', minPrice: 5, maxPrice: 12, time: 'حسب المساحة' },
        { type: 'شهري (4 رشات)', unit: 'شهر', minPrice: 200, maxPrice: 420, time: '4 زيارات' },
    ],
    faq: [
        { question: 'ليش بعوض ينبع أكثر من بريدة بكثير؟', answer: '70-85% = ركود مياه. بريدة: 10-20% = لا بعوض. BTI بيولوجي.' },
        { question: 'ليش صراصير أكثر بينبع؟', answer: '70-85% = عفن = طعام. صراصير ألمانية تتكاثر أسرع. IGR+Gel.' },
        { question: 'هل الميناء يجلب حشرات بينبع؟', answer: 'سفن تنقل أنواع غريبة. مستودعات = بيئة تكاثر.' },
        { question: 'كم تكلفة مكافحة بينبع مقابل بريدة؟', answer: 'أغلى 25-30% — بعوض+صراصير. بريدة: لا بعوض.' },
        { question: 'ما BTI ببينبع؟', answer: 'بكتيريا بيولوجية تقتل يرقات بعوض. آمنة 100%. ركود مياه.' },
    ],
    expertTips: [
        'BTI — بعوض ركود مياه.',
        'IGR — صراصير مانع نمو.',
        'Gel Bait — صراصير ألمانية.',
        'شهري — 70-85% تكاثر.',
        'فحص ميناء — أنواع غريبة.',
    ],
    warnings: [
        '70-85% + ركود × أسبوع = بعوض — BTI فوري YMYL.',
        'صراصير + عفن × شهر = مستعمرات — IGR+Gel.',
        'ميناء + مستودعات = حشرات غريبة — فحص دوري.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص شركات المكافحة' },
        { entity: AMANA.MADINAH.entity, url: AMANA.MADINAH.url, role: 'اشتراطات أمانة ينبع' },
    ],
    expertReviewer: EXPERTS.ALKHODAIRY,
    expertCitations: [
        { expert: EXPERTS.ALKHODAIRY.name, quote: 'حشرات ينبع: 70-85% بعوض+صراصير. BTI+IGR. ميناء أنواع غريبة.', source: 'حشرات المملكة — ساحلي-صناعي' },
    ],
    saudiRegulations: [REGULATIONS.GHAD_SYSTEM],
    verificationBadges: [{ badge: '✔️ مكافحة حشرات مرخصة', authority: 'بلدي + SFDA', icon: 'shield-check' }],
    equipment: [
        { name: 'BTI Granules', use: 'بعوض — يرقات بيولوجي' },
        { name: 'IGR', use: 'صراصير — مانع نمو' },
        { name: 'Gel Bait', use: 'صراصير ألمانية — طُعم' },
    ],
    hiddenObjections: [
        { fear: 'رش عام.', solution: 'BTI+IGR+Gel = متخصص.' },
        { fear: 'مثل بريدة.', solution: 'بعوض+صراصير+عفن = مختلف.' },
    ],
    consumerEducation: [
        { myth: 'رش عام.', truth: 'BTI+IGR+Gel = ثلاثي متخصص.' },
        { myth: 'ربع سنوي.', truth: '70-85% = شهري. تكاثر.' },
    ],
    relatedServices: [
        { slug: 'pesticide-spraying', context: 'رش', priority: 1 },
        { slug: 'bedbugs-control', context: 'بق', priority: 2 },
        { slug: 'termite-control', context: 'نمل أبيض', priority: 3 },
        { slug: 'bird-control', context: 'طيور', priority: 4 },
        { slug: 'cleaning', context: 'تنظيف', priority: 5 },
        { slug: 'tanks-cleaning', context: 'خزانات', priority: 6 },
        { slug: 'sewage-suction', context: 'شفط', priority: 7 },
    ],
};
