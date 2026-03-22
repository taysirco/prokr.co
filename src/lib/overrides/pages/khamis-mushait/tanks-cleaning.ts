import type { PageOverride } from '../../types';
import { GOV, EXPERTS, REGULATIONS, AMANA } from '../../gov-references';

export const override: PageOverride = {
    meta: {
        title: 'تنظيف خزانات بخميس مشيط — طحالب 2×+أمطار تلوث+ضباب أبواغ — Chlorination+Anti-Algae (2026)',
        description: 'تنظيف خزانات خميس مشيط. طحالب 2× أسرع! أمطار تلوث. ضباب أبواغ. Chlorination+Anti-Algae+إحكام.',
        h1: 'تنظيف خزانات بخميس مشيط — طحالب وأمطار',
        keywords: ['تنظيف خزانات خميس مشيط', 'تنظيف خزان بخميس مشيط', 'شركة تنظيف خزانات خميس مشيط'],
    },
    content: {
        introduction: 'خزان خميس مشيط يتلوث أسرع 2× من الصحراء! طحالب 2× أسرع: 60-85% = طحالب تنمو على جدران الخزان ضعف السرعة. عنيزة: نصف سنوي. خميس: ربع سنوي. Anti-Algae بعد كل تنظيف. أمطار تلوث: ماء مطر يدخل من فتحات ← يحمل تلوث وأبواغ. إحكام غطاء. ضباب يحمل أبواغ: ضباب 200 يوم = أبواغ بكتيريا تدخل من تهوية الخزان ← تلوث بيولوجي. فلتر تهوية. Chlorination مقوّى: بسبب التلوث الأسرع يحتاج تركيز أعلى + وقت أطول. مقارنة: عنيزة = تنظيف نصف سنوي + لا طحالب + لا تلوث مطر = أبسط. خميس = ربع سنوي + Anti-Algae + إحكام = أغلى 25%.',
        shortAnswer: 'على عكس [التنظيف بدون Anti-Algae ولا إحكام]، يعتمد بروتوكولنا في خدمة [تنظيف الخزانات] بمدينة [خميس مشيط] على [Chlorination مقوّى+Anti-Algae+إحكام+فلتر]. ففي ظل [طحالب 2×+أمطار تلوث+ضباب أبواغ+60-85%]، تتفاقم ظاهرة [طحالب+تلوث+بكتيريا]. لذا؛ يتدخل فريقنا عبر [تنظيف ← تعقيم ← Anti-Algae ← إحكام].',
        heroSubtitle: 'طحالب 2× + أمطار تلوث + ضباب — ربع سنوي!',
    },
    pricing: [
        { type: 'خزان أرضي (< 10 م³)', unit: 'خزان', minPrice: 180, maxPrice: 370, time: '3-4 ساعات' },
        { type: 'خزان علوي', unit: 'خزان', minPrice: 120, maxPrice: 250, time: '2-3 ساعات' },
        { type: '+ Anti-Algae + إحكام', unit: 'إضافي', minPrice: 80, maxPrice: 170, time: '1 ساعة' },
        { type: 'ربع سنوي (4 زيارات)', unit: 'سنة', minPrice: 500, maxPrice: 1050, time: '4 زيارات' },
    ],
    faq: [
        { question: 'كم مرة يحتاج الخزان تنظيف بخميس مشيط؟', answer: 'ربع سنوي! طحالب 2× + أمطار تلوث. عنيزة: نصف سنوي يكفي.' },
        { question: 'كيف أمنع الطحالب بالخزان بخميس مشيط؟', answer: 'Anti-Algae بعد كل تنظيف + إحكام غطاء + فلتر تهوية. بدونها = طحالب 3 أشهر.' },
        { question: 'كم تكلفة تنظيف خزان بخميس مقارنة بعنيزة؟', answer: 'أغلى 25% — Anti-Algae+إحكام+ربع سنوي. 120-370 مقابل 100-300.' },
        { question: 'هل الأمطار تلوث الخزان بخميس مشيط؟', answer: 'نعم! ماء مطر يدخل من فتحات = تلوث+أبواغ. إحكام غطاء إلزامي.' },
        { question: 'هل الضباب يأثر على الخزان بخميس مشيط؟', answer: '200 يوم ضباب = أبواغ بكتيريا تدخل التهوية. فلتر تهوية إلزامي.' },
    ],
    expertTips: [
        'ربع سنوي — طحالب 2× + أمطار.',
        'Anti-Algae — يمنع نمو طحالب بعد التنظيف.',
        'إحكام غطاء — أمطار تلوث.',
        'فلتر تهوية — ضباب أبواغ.',
        'Chlorination مقوّى — تلوث أسرع.',
    ],
    warnings: [
        'طحالب × 6 أشهر = طبقة سميكة تغيّر طعم الماء — خطر صحي حقيقي.',
        'غطاء مفتوح + أمطار = تلوث ماء شرب — أمراض معوية.',
        'بدون فلتر + 200 يوم ضباب = بكتيريا مستمرة.',
    ],
    trustAnchors: [
        { ...GOV.NWC, role: 'معايير خزانات الشرب' },
        { ...GOV.BALADI, role: 'ترخيص تنظيف الخزانات' },
        { entity: AMANA.ASIR.entity, url: AMANA.ASIR.url, role: 'اشتراطات أمانة عسير' },
    ],
    expertReviewer: EXPERTS.ALMOHAIMED,
    expertCitations: [
        { expert: EXPERTS.ALMOHAIMED.name, quote: 'خزان خميس: طحالب 2×+أمطار. ربع سنوي+Anti-Algae+إحكام. أكثر تلوثاً.', source: 'موسوعة أخطاء — خزانات جبلية' },
    ],
    saudiRegulations: [REGULATIONS.NWC_REPORT],
    verificationBadges: [{ badge: '✔️ تنظيف خزان مرخص', authority: 'بلدي + NWC', icon: 'shield-check' }],
    equipment: [
        { name: 'Chlorine مقوّى', use: 'تعقيم أعلى — تلوث أسرع' },
        { name: 'Anti-Algae', use: 'يمنع طحالب بعد التنظيف' },
        { name: 'إحكام+فلتر', use: 'يمنع أمطار+أبواغ' },
    ],
    commonConcerns: [
        { concern: 'نصف سنوي يكفي.', solution: 'طحالب 2× + أمطار = ربع سنوي.' },
        { concern: 'مثل عنيزة.', solution: 'عنيزة: لا طحالب+لا مطر = نصف سنوي.' },
    ],
    consumerEducation: [
        { myth: 'الخزان ما يتلوث بسرعة.', truth: '60-85%+أمطار+ضباب = 2× أسرع.' },
        { myth: 'Chlorine عادي يكفي.', truth: 'تلوث أسرع = تركيز أعلى.' },
    ],
    relatedServices: [
        { slug: 'tank-insulation', context: 'عزل خزان', priority: 1 },
        { slug: 'tank-leak-detection', context: 'تسرب خزان', priority: 2 },
        { slug: 'water-leak-detection', context: 'تسرب مياه', priority: 3 },
        { slug: 'swimming-pool-cleaning', context: 'مسبح', priority: 4 },
        { slug: 'cleaning', context: 'تنظيف', priority: 5 },
        { slug: 'pest-control', context: 'حشرات', priority: 6 },
        { slug: 'sewage-suction', context: 'صرف', priority: 7 },
    ],
};
