import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../trust-anchors';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف منازل بالجبيل — بروتوكول صناعي-ساحلي: RO + Marine + Anti-Fungal + VOC (2026)',
        description: 'تنظيف منازل الجبيل. NaCl+VOC ترسبات. 85-98% عفن أقصى. سخام SABIC. تكثّف أقصى. RO ← Marine ← Anti-Fungal ← Dehumidifier.',
        h1: 'تنظيف منازل بالجبيل — بروتوكول صناعي-ساحلي: 5 خطوات مُتخصصة',
        keywords: ['تنظيف منازل الجبيل', 'تنظيف بيت بالجبيل', 'شركة تنظيف منازل بالجبيل'],
    },
    content: {
        introduction: 'منزل الجبيل يتسخ بطريقة صناعية-ساحلية فريدة = 5 خطوات. الخطوة 1 — RO شطف: NaCl يُزال أولاً قبل الفرك. الخطوة 2 — Marine Degreaser: VOC+NaCl المُركّبة = منظف عادي ينزلق. Marine يُكسر. الخطوة 3 — Anti-Fungal: 85-98% = عفن أسبوع. كل سطح. كل زيارة. الخطوة 4 — سخام SABIC: Enzymatic على بقع سوداء. الخطوة 5 — Dehumidifier: 98% = تكثّف = لا يجف. Dehumidifier 24/7 أو بعد كل تنظيف. الجبيل = أبطأ تجفيف + أسرع عفن = أصعب تنظيف في المملكة.',
        shortAnswer: 'على عكس [ممسحة عادية] التي لا تُزيل NaCl+VOC ولا تُجفف 98%، يعتمد بروتوكولنا في خدمة [تنظيف المنازل] بمدينة [الجبيل] على [RO ← Marine ← Anti-Fungal ← Enzymatic ← Dehumidifier]. ففي ظل [NaCl+VOC + 85-98% + سخام]، تتفاقم ظاهرة [ترسبات + عفن + سخام + تكثّف]. لذا؛ يتدخل خبراؤنا عبر [بروتوكول 5 خطوات صناعي-ساحلي].',
        heroSubtitle: '5 خطوات: RO ← Marine ← Anti-Fungal ← سخام ← Dehumidifier',
    },
    pricing: [
        { type: 'شقة — بروتوكول صناعي-ساحلي', unit: 'شقة', minPrice: 210, maxPrice: 420, time: '3-5 ساعات' },
        { type: 'منزل/فيلا صغيرة', unit: 'منزل', minPrice: 370, maxPrice: 740, time: '5-8 ساعات' },
        { type: 'بعد إجازة (عفن 98%)', unit: 'وحدة', minPrice: 320, maxPrice: 630, time: '5-8 ساعات' },
        { type: 'عقد أسبوعي', unit: 'شهر', minPrice: 370, maxPrice: 740, time: '4 زيارات' },
    ],
    faq: [
        { question: '5 خطوات — أكثر من الخبر؟', answer: '5 = مثل الخبر + سخام SABIC. فعلياً: أعقد بسبب 98% (أبطأ تجفيف) + VOC (ترسبات أقسى).' },
        { question: 'أبطأ تجفيف — كم؟', answer: '98% = 6-10 ساعات. الخبر 85-95%: 4-6. الرياض 15%: 1-2. الجبيل = الأبطأ.' },
        { question: 'سخام — في المنزل؟', answer: 'SABIC PM2.5+سخام يدخل من نوافذ+مكيف. يترسب كطبقة. Enzymatic.' },
        { question: 'Dehumidifier 24/7 — ضروري؟', answer: '98% = تكثّف 24/7 = عفن+صدأ+Biofilm. Dehumidifier = الحد 50-60%.' },
        { question: 'أسبوعي — ليش؟', answer: 'NaCl+VOC يومي + عفن أسبوعي + سخام يومي. أسبوعي = يمنع التراكم.' },
    ],
    expertTips: [
        'RO أولاً — NaCl قبل الفرك = يمنع خدش ملحي.',
        'Marine Degreaser ثانياً — VOC+NaCl المُركّبة.',
        'Anti-Fungal ثالثاً — 98% = أسبوع عفن.',
        'Enzymatic — سخام SABIC = بقع سوداء.',
        'Dehumidifier 24/7 — 98% = تكثّف مستمر.',
    ],
    warnings: [
        'NaCl+VOC بدون Marine = ترسبات لا تُزال 3 أشهر.',
        '98% بدون Anti-Fungal = عفن أسبوع + تنفسي.',
        'سخام SABIC = بقع دائمة إذا تأخر Enzymatic.',
    ],
    trustAnchors: [
        { ...GOV.BALADI, role: 'ترخيص التنظيف' },
        { entity: AMANA.SHARQIA.entity, url: AMANA.SHARQIA.url, role: 'اشتراطات النظافة بالشرقية' },
    ],
    expertReviewer: EXPERTS.ALMISNID,
    expertCitations: [
        { expert: EXPERTS.ALMISNID.name, quote: 'منزل الجبيل = الأصعب: NaCl+VOC+سخام+98%. 5 خطوات إلزامية. أبطأ تجفيف + أسرع عفن في المملكة.', source: 'جغرافيا المناخ — تنظيف البيئة الصناعية' },
    ],
    saudiRegulations: [REGULATIONS.BALADI_HEALTH],
    verificationBadges: [
        { badge: '✔️ تنظيف مرخص', authority: 'منصة بلدي', icon: 'shield-check' },
        { badge: '✔️ بروتوكول صناعي-ساحلي', authority: 'معتمد داخلياً', icon: 'badge-check' },
    ],
    equipment: [
        { name: 'RO Rinse', use: 'NaCl — الخطوة 1' },
        { name: 'Marine Degreaser', use: 'VOC+NaCl — الخطوة 2' },
        { name: 'Anti-Fungal Industrial', use: '98% — الخطوة 3' },
        { name: 'Enzymatic', use: 'سخام — الخطوة 4' },
        { name: 'Dehumidifier', use: '98% — الخطوة 5' },
    ],
    commonConcerns: [
        { concern: 'مثل الخبر.', solution: 'VOC + سخام + 98% > 95%. أعقد.' },
        { concern: 'منظف عادي.', solution: 'NaCl+VOC = ينزلق. Marine only.' },
    ],
    consumerEducation: [
        { myth: 'ساحلي فقط.', truth: 'ساحلي + صناعي = 5 خطوات.' },
        { myth: 'شهري.', truth: '98% = عفن أسبوعي. أسبوعي.' },
        { myth: 'يجف طبيعي.', truth: '98% = 6-10 ساعات. Dehumidifier.' },
    ],
    relatedServices: [
        { slug: 'apartments-cleaning', context: 'شقق — NaCl+VOC', priority: 1 },
        { slug: 'carpet-cleaning', context: 'سجاد — عفن', priority: 2 },
        { slug: 'air-conditioner-cleaning', context: 'مكيف — VOC', priority: 3 },
        { slug: 'steam-cleaning', context: 'بخار — تعقيم', priority: 4 },
        { slug: 'pest-control', context: 'حشرات — بعوض', priority: 5 },
        { slug: 'marble-polishing', context: 'رخام — NaCl', priority: 6 },
        { slug: 'villas-cleaning', context: 'فلل', priority: 7 },
    ],
};
